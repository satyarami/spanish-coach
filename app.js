/* Spanish Voice Coach — app engine. */
(() => {
'use strict';

const APP_VERSION = '1.2.0';
const CHANGELOG = [
  { v: '1.2.0', date: '2026-11-08', items: [
    'Encouragement after every correct answer, with varied cheers and celebrations at 3, 5 and 10 in a row.',
    'Kinder wording when you miss ("Good try", "Casi").',
    'Prefers the natural-sounding Enhanced and Premium iPhone voices, and the home screen shows how to download them if you only have the basic ones.'
  ] },
  { v: '1.1.0', date: '2026-11-08', items: [
    'New on-device listening (Whisper). It works even when the iPhone blocks Safari speech recognition, and it is hands-free: it hears when you start and stop talking.',
    'One-time download of the listening model (about 75 MB), then it is cached on your phone.',
    'Status line under the circle shows what the app heard.',
    'Feedback: you can also type a note, or dictate it with the keyboard mic.'
  ] },
  { v: '1.0.0', date: '2026-11-08', items: [
    'First release: 30 lessons and 6 review days (Phase 1 and the start of Phase 2), set on a trip through Mexico.',
    'Voice-only sessions: warm-up, new phrases, conversation scene, lightning round, then a 5-minute quiz you must pass (8 of 10).',
    'Choose female or male voices for Spanish and English, with previews.',
    'Progress saves after every answer; continue a session where you left off.',
    'Speak feedback anytime and send it to Claude.'
  ] }
];

const KEY = 'svc.state';            // shared by all versions on this site
const PASS_MARK = 8, QUIZ_LEN = 10;
const SESSION_MIN = 30, QUIZ_MIN = 5;
const SRS_DAYS = [0, 1, 2, 4, 8, 16, 32, 64];
const LEVELS = [[0, 'Turista'], [1500, 'Viajero'], [5000, 'Conversador'], [12000, 'Experto']];

// ---------- utils ----------
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const dayNum = s => Math.round(Date.parse(s + 'T12:00:00') / 864e5);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];

// ---------- curriculum & schedule ----------
const LESSONS = window.CURRICULUM;
const ITEMS = {};                     // key -> {en, answers[], say, lesson}
LESSONS.forEach((L, li) => L.items.forEach((it, n) => {
  const [en, ...es] = it;
  ITEMS[L.id + ':' + n] = { en, answers: es, say: es[0].replace(/\s*…\s*/g, ' ').trim(), lesson: li };
}));
const SCHEDULE = [];
LESSONS.forEach((L, i) => {
  SCHEDULE.push({ kind: 'lesson', li: i });
  if ((i + 1) % 5 === 0) SCHEDULE.push({ kind: 'review', from: i - 4, to: i });
});
const keysOf = li => LESSONS[li].items.map((_, n) => LESSONS[li].id + ':' + n);

// ---------- state ----------
const DEFAULT = () => ({
  v: 1, pos: 0, xp: 0, streak: 0, lastPass: null, srs: {}, history: [],
  settings: { gender: 'female', esVoice: null, enVoice: null, rate: 0.9, earsOnly: false, tapToTalk: false, engine: 'auto', autoEngine: null },
  session: null, feedback: [], auto: { misses: {}, unheard: 0, mishear: [] }, seenVersion: null
});
let S;
function load() {
  try { const raw = localStorage.getItem(KEY); S = raw ? Object.assign(DEFAULT(), JSON.parse(raw)) : DEFAULT(); }
  catch (e) { S = DEFAULT(); }
  S.settings = Object.assign(DEFAULT().settings, S.settings || {});
  S.auto = Object.assign(DEFAULT().auto, S.auto || {});
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

// ---------- text matching ----------
const ONES = ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidos','veintitres','veinticuatro','veinticinco','veintiseis','veintisiete','veintiocho','veintinueve'];
const TENS = ['', '', '', 'treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
const HUND = ['', 'ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];
function numES(n) {
  if (n < 30) return ONES[n];
  if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' y ' + ONES[n % 10] : '');
  if (n === 100) return 'cien';
  if (n < 1000) return HUND[Math.floor(n / 100)] + (n % 100 ? ' ' + numES(n % 100) : '');
  if (n < 1000000) { const k = Math.floor(n / 1000); return (k === 1 ? 'mil' : numES(k) + ' mil') + (n % 1000 ? ' ' + numES(n % 1000) : ''); }
  return String(n);
}
function norm(s) {
  return String(s).toLowerCase()
    .replace(/(\d+):00/g, '$1').replace(/(\d+):30/g, '$1 y media')
    .replace(/[$,](?=\d)/g, '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\d+/g, d => ' ' + numES(+d) + ' ')
    .replace(/[¿¡?!.,;:"'()«»\-–—]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    [prev, cur] = [cur, prev];
  }
  return prev[n];
}
const sim = (a, b) => (!a && !b) ? 1 : 1 - lev(a, b) / Math.max(a.length, b.length);
// score heard alternatives against accepted answers; "…" = open tail
function score(alts, answers) {
  let best = 0;
  for (const raw of alts) {
    const h = norm(raw);
    for (const ans of answers) {
      const open = /…/.test(ans);
      const target = norm(ans.replace(/…/g, ''));
      if (!target) { if (h) best = 1; continue; }
      let s;
      if (open) {
        const n = target.split(' ').length, hw = h.split(' ');
        s = sim(hw.slice(0, n).join(' '), target);
        if (hw.length > n) s = Math.max(s, sim(hw.slice(0, n + 1).join(' '), target) - 0.02);
      } else {
        s = sim(h, target);
        // tolerate a short polite add-on or filler around a correct answer
        if (h.includes(target)) s = Math.max(s, 0.9);
      }
      if (s > best) best = s;
    }
  }
  return best;
}
const CMD = {
  repeat: ['repite', 'repita', 'otra vez', 'repeat', 'repetir', 'de nuevo'],
  dunno: ['no se', 'no lo se', 'i dont know', 'no tengo idea', 'ayuda'],
  pause: ['pausa', 'pause'],
  feedback: ['comentario', 'feedback']
};
function command(alts) {
  for (const a of alts) { const h = norm(a); for (const c in CMD) if (CMD[c].includes(h)) return c; }
  return null;
}

// ---------- audio fx ----------
let AC = null;
function ac() { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } if (AC && AC.state !== 'running') { try { AC.resume(); } catch (e) {} } return AC; }
function tone(freq, t0, dur, vol = 0.12, type = 'sine') {
  const c = ac(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, c.currentTime + t0);
  g.gain.linearRampToValueAtTime(vol, c.currentTime + t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + dur);
  o.connect(g).connect(c.destination); o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + 0.05);
}
const FX = {
  good(combo = 0) { const b = 660 * Math.pow(2, Math.min(combo, 8) / 12); tone(b, 0, 0.25); tone(b * 1.5, 0.08, 0.3, 0.08); },
  soft() { tone(330, 0, 0.25, 0.08, 'triangle'); },
  listen() { tone(880, 0, 0.12, 0.06); },
  fanfare() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.14, 0.4, 0.12, 'triangle')); tone(1047, 0.6, 0.9, 0.1); },
  level() { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.1, 0.35, 0.1)); }
};

// ---------- voices ----------
const FEMALE = /paulina|m[oó]nica|marisol|jimena|angelica|ang[eé]lica|soledad|isabela|helena|laura|sabina|esperanza|elvira|dalia|paloma|luc[ií]a|camila|valentina|francisca|marta|samantha|ava|allison|susan|victoria|karen|moira|tessa|fiona|serena|zoe|zo[eë]|nicky|kate|joelle|siri.*female|female|mujer|grandma|flo|sandy|shelley|catherine|martha|sara|ellen|kyoko|emily|lisa/i;
const MALE = /\bjuan\b|jorge|diego|carlos|pablo|[aá]lvaro|enrique|rocko|eddy|reed|grandpa|\balex\b|daniel|\btom\b|aaron|arthur|fred|oliver|gordon|\blee\b|rishi|nathan|evan|siri.*male|\bmale\b|hombre|ralph|albert|bruce|junior|mateo|andr[eé]s/i;
const NOVELTY = /rocko|eddy|reed|grandpa|grandma|flo|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|junior|ralph|fred/i;
function genderOf(v) { const s = v.name + ' ' + v.voiceURI; if (MALE.test(s) && !/female/i.test(s)) return 'male'; if (FEMALE.test(s)) return 'female'; return '?'; }
function quality(v) { const s = (v.name + ' ' + v.voiceURI).toLowerCase(); if (s.includes('premium') || s.includes('siri')) return 3; if (s.includes('enhanced') || s.includes('mejorad') || s.includes('neural') || s.includes('natural')) return 2; return NOVELTY.test(s) ? 0 : (s.includes('compact') ? 1 : 1.5); }
function regionRank(lang, base) {
  lang = (lang || '').replace('_', '-').toLowerCase();
  if (base === 'es') return ({ 'es-mx': 4, 'es-us': 3, 'es-419': 3 })[lang] || (lang.startsWith('es-') && lang !== 'es-es' ? 2 : lang === 'es-es' ? 1 : 0);
  return ({ 'en-us': 3, 'en-gb': 2 })[lang] || 1;
}
let VOICES = [];
function voicesFor(base) {
  return VOICES.filter(v => (v.lang || '').toLowerCase().startsWith(base))
    .map(v => ({ v, g: genderOf(v), q: quality(v), r: regionRank(v.lang, base) }))
    .sort((a, b) => (b.q - a.q) || (b.r - a.r) || a.v.name.localeCompare(b.v.name));
}
function chooseVoice(base, gender, preferredURI) {
  const list = voicesFor(base);
  if (preferredURI) { const f = list.find(x => x.v.voiceURI === preferredURI); if (f) return f.v; }
  const g = list.filter(x => x.g === gender && x.q > 0);
  return (g[0] || list.find(x => x.q > 0) || list[0] || {}).v || null;
}
function voiceSet() {
  const g = S.settings.gender, other = g === 'female' ? 'male' : 'female';
  const es = chooseVoice('es', g, S.settings.esVoice);
  let partner = chooseVoice('es', other, null);
  if (!partner || (es && partner.voiceURI === es.voiceURI)) partner = es;
  const en = chooseVoice('en', g, S.settings.enVoice);
  return { es, partner, en };
}
function refreshVoices() { try { VOICES = speechSynthesis.getVoices() || []; } catch (e) { VOICES = []; } }
const coachName = () => S.settings.gender === 'male' ? 'Leo' : 'Lola';

// ---------- run control ----------
const PAUSED = { paused: true }, QUIT = { quit: true };
let run = { active: false, paused: false, quit: false, rec: null, tapResolve: null };
function check() { if (run.quit) throw QUIT; if (run.paused) throw PAUSED; }

// ---------- speech out ----------
function speak(text, who = 'es', rateMul = 1, pitch = 1) {
  check();
  return new Promise((resolve, reject) => {
    const vs = voiceSet();
    const u = new SpeechSynthesisUtterance(text);
    const v = who === 'en' ? vs.en : who === 'partner' ? vs.partner : vs.es;
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = who === 'en' ? 'en-US' : 'es-MX';
    u.rate = Math.max(0.5, Math.min(1.4, (who === 'en' ? 1 : S.settings.rate) * rateMul));
    u.pitch = pitch;
    let done = false;
    const fin = () => { if (done) return; done = true; clearTimeout(t); run.paused || run.quit ? reject(run.quit ? QUIT : PAUSED) : resolve(); };
    const t = setTimeout(fin, 1500 + text.length * 110 / u.rate);
    u.onend = fin; u.onerror = fin;
    setOrb('speak');
    try { speechSynthesis.speak(u); } catch (e) { fin(); }
  }).finally(() => setOrb('idle'));
}
const say = (t, r) => speak(t, 'es', r);
const en = t => speak(t, 'en');
const PRAISE = ['¡Muy bien!', '¡Perfecto!', '¡Eso es!', '¡Excelente!', '¡Qué bien!', '¡Bravo!', '¡Fantástico!', '¡Genial!', '¡Correcto!', '¡Así se dice!', '¡Muy bien dicho!', '¡Impecable!', '¡Me encanta!', '¡Súper!', '¡Lo tienes!'];
const QUICK = ['¡Bien!', '¡Sí!', '¡Correcto!', '¡Eso!', '¡Muy bien!', '¡Perfecto!'];
const NEAR = ['Casi.', 'Good try.', 'Almost there.', 'Close!', 'Nice effort.'];
let lastPraise = '';
function praiseLine(list) { let p; do { p = pick(list); } while (p === lastPraise && list.length > 1); lastPraise = p; return p; }
// Spoken encouragement after a correct answer: always something, with extra at streak milestones.
async function cheer(quick) {
  const c = S.session ? S.session.combo : 0;
  const pitch = 1 + (Math.random() * 0.15 - 0.03);
  if (!quick && [3, 5, 10, 15, 20].includes(c)) {
    const big = { 3: '¡Tres seguidas!', 5: '¡Cinco seguidas! ¡Increíble!', 10: '¡Diez seguidas! ¡Eres una estrella!', 15: '¡Quince! ¡Imparable!', 20: '¡Veinte seguidas! ¡Campeón!' }[c];
    FX.level(); await speak(big, 'es', 1.05, pitch); return;
  }
  await speak(praiseLine(quick ? QUICK : PRAISE), 'es', 1.05, pitch);
}

// ---------- on-device speech recognition (Whisper) ----------
const ASR_MODEL = 'onnx-community/whisper-base', ASR_DTYPE = 'q8';
let asrW = null, asrReady = false, asrErr = null, asrWaiters = [], asrSeq = 0, asrPending = {};
function asrStart() {
  if (asrW || asrReady) return;
  asrErr = null;
  try { asrW = new Worker('asr-worker.js', { type: 'module' }); } catch (e) { asrErr = 'worker: ' + e.message; return; }
  const files = {};
  asrW.onmessage = e => {
    const m = e.data;
    if (m.type === 'progress') { if (m.file && m.total) files[m.file] = [m.loaded || 0, m.total]; let l = 0, t = 0; Object.values(files).forEach(([a, b]) => { l += a; t += b; }); asrProgress(t ? l / t : 0, t); }
    else if (m.type === 'ready') { asrReady = true; asrProgress(1); asrWaiters.splice(0).forEach(r => r()); }
    else if (m.type === 'error') { asrErr = m.error; asrW = null; asrProgress(1); asrWaiters.splice(0).forEach(r => r()); }
    else if (m.type === 'result') { const r = asrPending[m.id]; delete asrPending[m.id]; if (r) r(m); }
  };
  asrW.onerror = e => { asrErr = 'worker error ' + (e.message || ''); asrW = null; asrProgress(1); asrWaiters.splice(0).forEach(r => r()); };
  asrW.postMessage({ type: 'load', model: ASR_MODEL, dtype: ASR_DTYPE });
}
function asrProgress(f, total) {
  const el = $('#asrLoad'); if (!el) return;
  if (f >= 1) { el.hidden = true; return; }
  el.hidden = false; $('#asrPct').textContent = Math.round(f * 100) + '%' + (total ? ' of ' + Math.round(total / 1e6) + ' MB' : '');
  $('#asrBar').style.width = (f * 100) + '%';
}
async function asrWait() { asrStart(); if (asrReady || asrErr) return; await new Promise(r => asrWaiters.push(r)); }
function transcribe(audio, language) {
  return new Promise(r => { const id = ++asrSeq; asrPending[id] = r; asrW.postMessage({ type: 'asr', id, audio, language, model: ASR_MODEL, dtype: ASR_DTYPE }, [audio.buffer]); });
}
function setAudioSession(t) { try { if (navigator.audioSession) navigator.audioSession.type = t; } catch (e) {} }
function concatF32(arr) { let n = 0; arr.forEach(a => n += a.length); const o = new Float32Array(n); let p = 0; arr.forEach(a => { o.set(a, p); p += a.length; }); return o; }
function resample(x, from, to) {
  if (from === to) return x;
  const r = from / to, n = Math.floor(x.length / r), o = new Float32Array(n);
  for (let i = 0; i < n; i++) { const a = Math.floor(i * r), b = Math.max(a + 1, Math.floor((i + 1) * r)); let s = 0; for (let j = a; j < b; j++) s += x[j] || 0; o[i] = s / (b - a); }
  return o;
}
// Records one spoken answer: waits for speech, stops after a pause. Returns {audio: Float32Array@16k | null, err?}
async function recordUtterance(o = {}) {
  const maxMs = o.maxMs || 9000, endSil = o.silenceMs || 850, noSpeech = o.noSpeechMs || 7000;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return { audio: null, err: 'mic-unsupported' };
  let stream;
  try { setAudioSession('play-and-record'); stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } }); }
  catch (e) { setAudioSession('playback'); return { audio: null, err: e && e.name === 'NotAllowedError' ? 'mic-denied' : 'mic-' + (e && e.name) }; }
  const ctx = ac(); const src = ctx.createMediaStreamSource(stream); const proc = ctx.createScriptProcessor(4096, 1, 1);
  const chunks = [], sr = ctx.sampleRate, chunkMs = 4096 / sr * 1000;
  let t = 0, floor = null, speechStart = -1, lastVoice = 0, voicedMs = 0, done = false;
  return new Promise(resolve => {
    const finish = reason => {
      if (done) return; done = true; proc.onaudioprocess = null;
      try { src.disconnect(); proc.disconnect(); } catch (e) {}
      stream.getTracks().forEach(tr => tr.stop()); setAudioSession('playback'); run.stopRec = null;
      if (speechStart < 0 || voicedMs < 150) return resolve({ audio: null, reason });
      resolve({ audio: resample(concatF32(chunks.slice(Math.max(0, speechStart - 3))), sr, 16000), reason });
    };
    run.stopRec = () => finish('stopped');
    proc.onaudioprocess = e => {
      const d = new Float32Array(e.inputBuffer.getChannelData(0)); chunks.push(d); t += chunkMs;
      let s = 0; for (let i = 0; i < d.length; i++) s += d[i] * d[i]; const rms = Math.sqrt(s / d.length);
      if (floor === null) floor = rms; else if (speechStart < 0) floor = floor * 0.85 + rms * 0.15;
      const thr = Math.max(0.01, floor * 2.5);
      if (t > 150 && rms > thr) { if (speechStart < 0) speechStart = chunks.length - 1; lastVoice = t; voicedMs += chunkMs; }
      if (o.onLevel) o.onLevel(rms);
      if (speechStart < 0 && t > noSpeech) finish('nospeech');
      else if (speechStart >= 0 && t - lastVoice > endSil && voicedMs >= 150) finish('end');
      else if (t > maxMs) finish('max');
    };
    src.connect(proc); proc.connect(ctx.destination);
  });
}
function engine() {
  const e = S.settings.engine;
  if (e === 'ondevice') return 'ondevice';
  if (e === 'apple') return SR ? 'apple' : 'ondevice';
  return S.settings.autoEngine || (SR ? 'apple' : 'ondevice');
}
async function listenOnDevice(lang) {
  if (!asrReady) {
    setOrb('think'); status('Getting the listening model ready (one time)…');
    await asrWait(); check();
    if (asrErr) { const er = asrErr; asrErr = null; pause(); alertBox('The listening model could not load (' + er + '). Check your internet connection, then tap Resume.'); check(); }
  }
  setOrb('listen'); FX.listen(); await sleep(180); check(); status('Listening… speak now');
  const rec = await recordUtterance({ onLevel: lv => { const o = $('#orb'); if (o) o.style.transform = 'scale(' + (1 + Math.min(lv * 6, 0.18)) + ')'; } });
  const o = $('#orb'); if (o) o.style.transform = '';
  check();
  if (rec.err) {
    pause();
    alertBox(rec.err === 'mic-denied' ? 'The microphone is blocked for this page. In Safari, tap the "aA" button → Website Settings → Microphone → Allow. Then tap Resume.' : 'Microphone problem: ' + rec.err + '. Tap Resume to try again.');
    check();
  }
  if (!rec.audio) return { alts: [], err: 'nospeech' };
  setOrb('think'); status('…');
  const out = await transcribe(rec.audio, lang.startsWith('es') ? 'spanish' : 'english');
  check();
  return { alts: out.text ? [out.text] : [], err: out.error || null };
}

// ---------- speech in ----------
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listenOnce(lang) {
  return new Promise(resolve => {
    if (run.tapCancel) { run.tapCancel = false; resolve({ alts: [], err: 'cancelled' }); return; }
    let alts = [], err = null, ended = false;
    let rec;
    try { rec = new SR(); } catch (e) { resolve({ alts: [], err: 'unsupported' }); return; }
    rec.lang = lang; rec.interimResults = false; rec.maxAlternatives = 5; rec.continuous = false;
    rec.onresult = e => { const r = e.results[e.results.length - 1]; alts = Array.from(r).map(a => a.transcript); try { rec.stop(); } catch (_) {} };
    rec.onerror = e => { err = e.error; };
    rec.onend = () => { if (ended) return; ended = true; clearTimeout(t); run.rec = null; resolve({ alts, err }); };
    const t = setTimeout(() => { try { rec.stop(); } catch (_) {} setTimeout(() => { if (!ended) { ended = true; run.rec = null; resolve({ alts, err: err || 'timeout' }); } }, 1500); }, 9000);
    run.rec = rec;
    try { rec.start(); } catch (e) { ended = true; clearTimeout(t); run.rec = null; resolve({ alts: [], err: 'start-failed' }); }
  });
}
async function listen(lang = 'es-MX') {
  check();
  await sleep(250);
  check();
  let res;
  if (engine() === 'ondevice') {
    res = await listenOnDevice(lang);
  } else if (S.settings.tapToTalk) {
    setOrb('tap'); showTap(true); status('Tap the mic, then speak');
    // iPhone: recognition must start inside the tap itself, so the tap handler starts it.
    const p = await new Promise(r => { run.tapResolve = () => r(listenOnce(lang)); });
    showTap(false); setOrb('listen'); status('Listening…');
    res = await p;
    check();
  } else {
    setOrb('listen'); FX.listen(); status('Listening…');
    res = await listenOnce(lang);
  }
  if (engine() === 'apple' && ['not-allowed', 'service-not-allowed', 'start-failed', 'unsupported'].includes(res.err) && !run.paused && !run.quit) {
    if (S.settings.engine === 'auto') {
      // The iPhone refused its built-in speech service: switch to on-device listening for good.
      S.settings.autoEngine = 'ondevice'; S.settings.tapToTalk = false; save(); asrStart();
      setOrb('idle'); return listen(lang);
    }
    if (!S.settings.tapToTalk && res.err === 'start-failed') { S.settings.tapToTalk = true; save(); setOrb('idle'); return listen(lang); }
    pause(); alertBox('iPhone speech recognition is blocked (' + res.err + '). Switch Voices → Listening to "On-device", then tap Resume.'); check();
  }
  setOrb('idle');
  status(res.alts.length ? 'Heard: “' + res.alts[0] + '”' : (res.err && !['timeout', 'nospeech', 'cancelled'].includes(res.err) ? 'Mic problem: ' + res.err : 'Didn’t hear anything'));
  check();
  const c = command(res.alts);
  if (c === 'pause') { pause(); check(); }
  if (c === 'feedback') { openFeedback(); throw PAUSED; }
  if (!res.alts.length) S.auto.unheard++;
  return { alts: res.alts, cmd: c };
}

// ---------- UI helpers ----------
function show(id) { document.querySelectorAll('.screen').forEach(s => s.hidden = s.id !== id); }
function setOrb(state) { const o = $('#orb'); if (o) o.dataset.state = state; }
function showTap(on) { $('#tapBtn').hidden = !on; }
function status(t) { const e = $('#status'); if (e) e.textContent = t || ''; }
function setPhase(label) { $('#phase').textContent = label; }
function showText(es, enText) {
  if (S.settings.earsOnly) { $('#es').textContent = ''; $('#en').textContent = ''; return; }
  $('#es').textContent = es || ''; $('#en').textContent = enText || '';
}
function clearText() { $('#es').textContent = ''; $('#en').textContent = ''; }
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 1800); }
function addXP(n) {
  const before = levelOf(S.xp); S.xp += n; S.session && (S.session.xp = (S.session.xp || 0) + n);
  $('#xp').textContent = '+' + (S.session ? S.session.xp : n);
  const after = levelOf(S.xp);
  if (after !== before) { FX.level(); toast('New level: ' + after + '!'); }
}
const levelOf = xp => LEVELS.filter(l => xp >= l[0]).pop()[1];
function fmt(ms) { const s = Math.floor(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

// ---------- SRS ----------
function srsUpdate(key, ok) {
  const r = S.srs[key] || { box: 0, due: today() };
  r.box = ok ? Math.min(r.box + 1, SRS_DAYS.length - 1) : 0;
  r.due = new Date(Date.now() + SRS_DAYS[r.box] * 864e5).toISOString().slice(0, 10);
  S.srs[key] = r;
  if (!ok) S.auto.misses[key] = (S.auto.misses[key] || 0) + 1;
}
function dueKeys(exclude = []) {
  const t = dayNum(today());
  return Object.keys(S.srs).filter(k => ITEMS[k] && !exclude.includes(k) && dayNum(S.srs[k].due) <= t)
    .sort((a, b) => S.srs[a].box - S.srs[b].box);
}
const learnedKeys = () => Object.keys(S.srs).filter(k => ITEMS[k]);

// ---------- session planning ----------
function planSession() {
  const unit = SCHEDULE[S.pos];
  const steps = [{ t: 'intro' }];
  let today = [], scenes = [];
  if (unit.kind === 'lesson') {
    today = keysOf(unit.li);
    dueKeys(today).slice(0, 8).forEach(k => steps.push({ t: 'recall', k, src: 'review' }));
    steps.push({ t: 'label', text: 'New phrases' });
    today.forEach(k => steps.push({ t: 'teach', k }));
    steps.push({ t: 'label', text: 'Now from memory' });
    shuffle(today).forEach(k => steps.push({ t: 'recall', k, src: 'new' }));
    scenes = [unit.li];
  } else {
    for (let i = unit.from; i <= unit.to; i++) today.push(...keysOf(i));
    steps.push({ t: 'label', text: 'Review' });
    const due = dueKeys().filter(k => today.includes(k));
    const pool = [...new Set([...due, ...shuffle(today)])].slice(0, 18);
    pool.forEach(k => steps.push({ t: 'recall', k, src: 'review' }));
    scenes = shuffle([...Array(unit.to - unit.from + 1).keys()].map(i => i + unit.from)).slice(0, 2);
  }
  scenes.forEach((li, si) => {
    steps.push({ t: 'sceneIntro', li });
    const lines = LESSONS[li].scene.lines;
    const passes = unit.kind === 'lesson' ? [1, 2] : [2];
    passes.forEach(p => { if (p === 2) steps.push({ t: 'label', text: 'Again, without help', say: 'Now again, without help.' }); lines.forEach((_, i) => steps.push({ t: 'scene', li, i, pass: p })); });
  });
  steps.push({ t: 'lightning' });
  steps.push({ t: 'quiz' });
  return { pos: S.pos, steps, idx: 0, activeMs: 0, today, combo: 0, xp: 0, quiz: null, startedDay: today_() };
}
function today_() { return today(); }

// ---------- step runners ----------
let sentFirstHint = 0;
async function stepIntro() {
  const unit = SCHEDULE[S.pos];
  if (unit.kind === 'lesson') {
    const L = LESSONS[unit.li];
    setPhase('Lesson ' + (unit.li + 1) + ' · ' + L.title);
    showText(L.title, L.place);
    await say('¡Hola! Soy ' + coachName() + '.', 1);
    await en('Lesson ' + (unit.li + 1) + '. ' + L.place + '.');
    await en(L.tip);
    if (S.pos === 0) await en('Answer out loud after the beep. Say "repite" to hear something again, or "no sé" if you don\'t know.');
  } else {
    setPhase('Review day');
    showText('Repaso', 'Review and conversation day');
    await say('¡Hola! Hoy es día de repaso.');
    await en('Review day. No new words today. We practise what you know and have two conversations.');
  }
}
async function stepTeach(k) {
  const it = ITEMS[k];
  clearText();
  await en(it.en + '.');
  await say(it.say, 0.75);
  showText(it.say, it.en);
  await sleep(300);
  await say(it.say);
  for (let attempt = 0; attempt < 2; attempt++) {
    const r = await listen();
    if (r.cmd === 'repeat') { await say(it.say, 0.75); attempt--; continue; }
    const s = score(r.alts, it.answers);
    if (s >= 0.6) { FX.good(); addXP(5); await cheer(true); break; }
    if (!r.alts.length && attempt === 0) { await en("I didn't hear you. Once more."); await say(it.say, 0.8); continue; }
    if (r.alts.length) S.auto.mishear.push({ k, heard: r.alts[0] });
    if (attempt === 0) { FX.soft(); await en('Listen again.'); await say(it.say, 0.7); }
  }
  if (!S.srs[k]) S.srs[k] = { box: 0, due: today() };
}
async function recall(k, opts = {}) {
  // returns true/false. opts.quiz: single attempt, no hints.
  const it = ITEMS[k];
  clearText();
  const lead = opts.quiz ? '' : (sentFirstHint++ < 2 ? 'How do you say: ' : '');
  await en(lead + it.en);
  let tries = 0;
  while (true) {
    const r = await listen();
    if (r.cmd === 'repeat') { await en(it.en); continue; }
    if (!r.alts.length && tries++ < 1) { await en("Didn't catch that. " + it.en); continue; }
    const dunno = r.cmd === 'dunno';
    const s = dunno ? 0 : score(r.alts, it.answers);
    const ok = s >= 0.72;
    showText(it.say, it.en);
    if (ok) {
      S.session.combo++; FX.good(S.session.combo);
      addXP(opts.quiz ? 20 : 10 + Math.min(S.session.combo, 10));
      await cheer(!!opts.quiz || !!opts.lightning);
      return true;
    }
    S.session.combo = 0;
    if (r.alts.length && !dunno) S.auto.mishear.push({ k, heard: r.alts[0] });
    FX.soft();
    if (opts.quiz) { await say(it.say); return false; }
    await en(s >= 0.5 ? praiseLine(NEAR) + ' Listen.' : (dunno ? 'No problem. It is:' : 'Good try. It is:'));
    await say(it.say, 0.8);
    const r2 = await listen();
    if (score(r2.alts, it.answers) >= 0.6) { FX.good(); await cheer(true); }
    return false;
  }
}
async function stepScene(st) {
  const L = LESSONS[st.li], line = L.scene.lines[st.i];
  if (line[0] === 'p') {
    clearText();
    await speak(line[1], 'partner', st.pass === 1 ? 0.85 : 1);
    showText(line[1], line[2]);
    await sleep(400);
    return;
  }
  const [, cue, ...answers] = line;
  const model = answers[0].replace(/…/g, '').trim();
  clearText();
  await en(cue);
  if (st.pass === 1 && model) { await say(model, 0.8); }
  for (let a = 0; a < 2; a++) {
    const r = await listen();
    if (r.cmd === 'repeat') { await en(cue); a--; continue; }
    const s = score(r.alts, answers);
    showText(answers[0], cue);
    if (s >= (st.pass === 1 ? 0.6 : 0.68)) { FX.good(++S.session.combo); addXP(st.pass === 1 ? 8 : 15); await cheer(false); return; }
    S.session.combo = 0;
    if (!r.alts.length && a === 0) { await en('Your turn. ' + cue); continue; }
    FX.soft();
    if (model) { await en(praiseLine(NEAR) + ' You could say:'); await say(model, 0.8); }
    if (a === 1) return;
  }
}
async function stepLightning() {
  setPhase('Lightning round');
  const st = S.session;
  if (!st.lightningStarted) { st.lightningStarted = true; save(); await en('Lightning round! Answer fast and build your combo.'); }
  const target = (SESSION_MIN - QUIZ_MIN) * 60000;
  st.lightningCount = st.lightningCount || 0;
  while (st.activeMs < target || st.lightningCount < 6) {
    const pool = shuffle([...st.today, ...dueKeys(st.today).slice(0, 6), ...shuffle(learnedKeys()).slice(0, 6)]);
    const k = pool[0];
    const ok = await recall(k, { lightning: true });
    srsUpdate(k, ok);
    st.lightningCount++; save();
    $('#combo').textContent = st.combo > 1 ? '×' + st.combo : '';
    if (st.lightningCount > 60) break;
  }
}

// ---------- quiz ----------
function newQuiz() {
  const st = S.session;
  const todayK = shuffle(st.today);
  const others = shuffle(learnedKeys().filter(k => !st.today.includes(k)));
  let qs = todayK.slice(0, 6).concat(others.slice(0, 4));
  if (qs.length < QUIZ_LEN) qs = qs.concat(todayK.slice(6, 6 + QUIZ_LEN - qs.length));
  let n = 0; while (qs.length < QUIZ_LEN && todayK.length) qs.push(todayK[n++ % todayK.length]);
  return { qs: shuffle(qs).slice(0, QUIZ_LEN), i: 0, correct: 0, missed: [], attempt: (st.quiz ? st.quiz.attempt : 0) + 1, phase: 'ask' };
}
async function stepQuiz() {
  const st = S.session;
  if (!st.quiz || st.quiz.phase === 'done') { st.quiz = newQuiz(); save(); }
  const q = st.quiz;
  if (q.phase === 'review') return quizReview();
  setPhase('Quiz · ' + (q.i + 1) + ' of ' + q.qs.length);
  if (q.i === 0 && !q.announced) {
    q.announced = true; save();
    await en(q.attempt === 1 ? 'Quiz time. Ten questions, one try each. Get eight right to unlock the next lesson.' : 'Fresh quiz. You can do this.');
  }
  while (q.i < q.qs.length) {
    setPhase('Quiz · ' + (q.i + 1) + ' of ' + q.qs.length + ' · ' + q.correct + ' right');
    const k = q.qs[q.i];
    const ok = await recall(k, { quiz: true });
    srsUpdate(k, ok);
    if (ok) q.correct++; else q.missed.push(k);
    q.i++; save();
  }
  if (!q.logged) { q.logged = true; S.history.push({ day: today(), pos: S.pos, score: q.correct, attempt: q.attempt, minutes: Math.round(st.activeMs / 60000) }); save(); }
  if (q.correct >= PASS_MARK) return pass(q.correct);
  // fail -> targeted review then retake
  q.phase = 'review'; q.ri = 0; save();
  await en('You got ' + q.correct + ' out of ten. You need eight. Let\'s review the ones you missed, then take a fresh quiz.');
  return quizReview();
}
async function quizReview() {
  const q = S.session.quiz;
  setPhase('Quick review');
  while (q.ri < q.missed.length) {
    const k = q.missed[q.ri];
    await stepTeach(k);
    const ok = await recall(k, {});
    srsUpdate(k, ok);
    q.ri++; save();
  }
  q.phase = 'done'; S.session.quiz = Object.assign(q, { phase: 'done' }); save();
  return stepQuiz();
}
async function pass(score) {
  const st = S.session;
  FX.fanfare();
  setPhase('Passed!');
  showText('¡Felicidades!', score + ' out of 10');
  const t = today();
  if (S.lastPass !== t) {
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    const yLocal = (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); })();
    S.streak = (S.lastPass === yLocal || S.lastPass === y) ? S.streak + 1 : 1;
    S.lastPass = t;
  }
  addXP(100);
  st.today.forEach(k => { if (S.srs[k] && S.srs[k].box < 1) S.srs[k] = { box: 1, due: new Date(Date.now() + 864e5).toISOString().slice(0, 10) }; });
  S.pos = Math.min(S.pos + 1, SCHEDULE.length);
  S.session = null; save();
  await say('¡Felicidades! ¡Lo lograste!');
  await en(score + ' out of ten. Next lesson unlocked. Your streak is ' + S.streak + (S.streak === 1 ? ' day.' : ' days.'));
  throw QUIT;
}

// ---------- main loop ----------
let tick = null;
async function runSession() {
  run = { active: true, paused: false, quit: false, rec: null, tapResolve: null };
  sentFirstHint = 0;
  show('session'); $('#pauseBtn').textContent = 'Pause'; $('#pauseOverlay').hidden = true;
  $('#xp').textContent = '+' + (S.session.xp || 0); $('#combo').textContent = '';
  let last = Date.now();
  clearInterval(tick);
  tick = setInterval(() => {
    const now = Date.now();
    if (run.active && !run.paused && S.session) { S.session.activeMs += now - last; $('#timer').textContent = fmt(S.session.activeMs) + ' / ' + SESSION_MIN + ':00'; $('#bar').style.width = Math.min(100, S.session.activeMs / (SESSION_MIN * 600)) + '%'; }
    last = now;
  }, 500);
  while (S.session && S.session.idx < S.session.steps.length) {
    const st = S.session.steps[S.session.idx];
    try {
      if (st.t === 'intro') await stepIntro();
      else if (st.t === 'label') { setPhase(st.text); if (st.say) await en(st.say); else await sleep(200); }
      else if (st.t === 'teach') { setPhase('New phrases'); await stepTeach(st.k); }
      else if (st.t === 'recall') { setPhase(st.src === 'review' ? 'Warm-up review' : 'From memory'); const ok = await recall(st.k); srsUpdate(st.k, ok); }
      else if (st.t === 'sceneIntro') { const L = LESSONS[st.li]; setPhase('Scene · ' + L.place); clearText(); await en(L.scene.intro); }
      else if (st.t === 'scene') { setPhase('Scene' + (st.pass === 2 ? ' · no help' : '')); await stepScene(st); }
      else if (st.t === 'lightning') await stepLightning();
      else if (st.t === 'quiz') await stepQuiz();
      if (S.session) { S.session.idx++; save(); }
    } catch (e) {
      if (e === PAUSED) { save(); await waitResume(); if (run.quit) break; continue; }
      if (e === QUIT) break;
      if (e && e.message === 'nosr') { alertBox('Listening is not available in this browser. Open the app in Safari on iPhone, or Chrome on a computer.'); break; }
      console.error(e); toast('Something went wrong; continuing'); if (S.session) { S.session.idx++; save(); }
    }
  }
  run.active = false; clearInterval(tick); save();
  try { speechSynthesis.cancel(); } catch (e) {}
  renderHome(); show('home');
}
function waitResume() { return new Promise(r => { run.resume = r; }); }
function pause() {
  if (!run.active || run.paused) return;
  run.paused = true;
  try { speechSynthesis.cancel(); } catch (e) {}
  if (run.rec) try { run.rec.abort(); } catch (e) {}
  if (run.stopRec) run.stopRec();
  if (run.tapResolve) { const r = run.tapResolve; run.tapResolve = null; run.tapCancel = true; r(); }
  $('#pauseOverlay').hidden = false; $('#pauseBtn').textContent = 'Resume';
  save();
}
function resume() {
  if (!run.paused) return;
  unlockAudio();
  run.paused = false; $('#pauseOverlay').hidden = true; $('#pauseBtn').textContent = 'Pause';
  if (run.resume) { const r = run.resume; run.resume = null; r(); }
}
function quitSession() {
  run.quit = true;
  try { speechSynthesis.cancel(); } catch (e) {}
  if (run.rec) try { run.rec.abort(); } catch (e) {}
  if (run.stopRec) run.stopRec();
  if (run.tapResolve) { const r = run.tapResolve; run.tapResolve = null; run.tapCancel = true; r(); }
  if (run.paused) { run.paused = false; if (run.resume) { const r = run.resume; run.resume = null; r(); } }
  if (!run.active) { renderHome(); show('home'); }
}
function unlockAudio() {
  ac();
  try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } catch (e) {}
}
function startOrContinue(restart) {
  unlockAudio();
  if (engine() === 'ondevice') asrStart();
  if (S.pos >= SCHEDULE.length) { alertBox("You've finished every lesson in this release. Send feedback and ask Claude for the next block."); return; }
  if (restart || !S.session || S.session.pos !== S.pos) S.session = planSession();
  save(); runSession();
}

// ---------- feedback ----------
let fbRec = null;
function openFeedback() {
  const wasActive = run.active;
  if (wasActive) pause();
  $('#fbHeard').textContent = ''; $('#fbStatus').textContent = 'Tap the mic and speak in English.';
  renderFeedbackList(); show('feedback');
  $('#fbBack').onclick = () => { show(wasActive ? 'session' : 'home'); if (!wasActive) renderHome(); };
}
function fbContext() {
  const st = S.session, unit = SCHEDULE[S.pos];
  const where = unit ? (unit.kind === 'lesson' ? 'Lesson ' + (unit.li + 1) + ' ' + LESSONS[unit.li].title : 'Review day') : 'finished';
  const step = st ? st.steps[st.idx] : null;
  return where + (step ? ' · step ' + st.idx + ' (' + step.t + (step.k ? ' "' + ITEMS[step.k].say + '"' : '') + ')' : '');
}
async function fbRecordOnDevice() {
  if (run.stopRec) { run.stopRec(); return; }
  ac(); asrStart();
  $('#fbMic').classList.add('on'); $('#fbStatus').textContent = 'Listening… pause for 2 seconds or tap again to finish.';
  const rec = await recordUtterance({ maxMs: 45000, silenceMs: 2000, noSpeechMs: 8000 });
  $('#fbMic').classList.remove('on');
  if (!rec.audio) { $('#fbStatus').textContent = rec.err ? 'Microphone problem: ' + rec.err : "I didn't catch anything. Try again."; return; }
  $('#fbStatus').textContent = 'Writing it down…';
  await asrWait();
  if (asrErr) { $('#fbStatus').textContent = 'The listening model could not load: ' + asrErr; asrErr = null; return; }
  const out = await transcribe(rec.audio, 'english');
  const text = (out.text || '').trim();
  $('#fbHeard').textContent = text;
  if (text) { S.feedback.push({ at: new Date().toISOString(), v: APP_VERSION, where: fbContext(), text }); save(); renderFeedbackList(); $('#fbStatus').textContent = 'Saved. Tap the mic to add more.'; FX.good(); }
  else $('#fbStatus').textContent = "I didn't catch anything. Try again.";
}
function fbRecord() {
  if (engine() === 'ondevice') return fbRecordOnDevice();
  if (!SR) { $('#fbStatus').textContent = 'Listening is not available here.'; return; }
  if (fbRec) { try { fbRec.stop(); } catch (e) {} return; }
  const rec = new SR(); fbRec = rec;
  rec.lang = 'en-US'; rec.interimResults = true; rec.continuous = true;
  let finalText = '';
  rec.onresult = e => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) { const r = e.results[i]; if (r.isFinal) finalText += r[0].transcript + ' '; else interim += r[0].transcript; }
    $('#fbHeard').textContent = (finalText + interim).trim();
  };
  rec.onend = () => {
    fbRec = null; $('#fbMic').classList.remove('on');
    const text = ($('#fbHeard').textContent || '').trim();
    if (text) { S.feedback.push({ at: new Date().toISOString(), v: APP_VERSION, where: fbContext(), text }); save(); renderFeedbackList(); $('#fbStatus').textContent = 'Saved. Tap the mic to add more.'; FX.good(); }
    else $('#fbStatus').textContent = "I didn't catch anything. Try again.";
  };
  rec.onerror = ev => { if (['not-allowed', 'service-not-allowed'].includes(ev.error) && S.settings.engine === 'auto') { S.settings.autoEngine = 'ondevice'; save(); asrStart(); $('#fbStatus').textContent = 'Switched to on-device listening. Tap the mic again.'; } };
  $('#fbMic').classList.add('on'); $('#fbStatus').textContent = 'Listening… tap again to finish.';
  try { rec.start(); } catch (e) { fbRec = null; $('#fbMic').classList.remove('on'); }
}
function renderFeedbackList() {
  const ul = $('#fbList'); ul.innerHTML = '';
  S.feedback.slice().reverse().forEach(f => { const li = document.createElement('li'); li.textContent = f.text; const s = document.createElement('small'); s.textContent = f.where + ' · ' + f.at.slice(0, 16).replace('T', ' '); li.appendChild(s); ul.appendChild(li); });
  $('#fbCount').textContent = S.feedback.length ? S.feedback.length + ' note' + (S.feedback.length > 1 ? 's' : '') + ' saved' : 'No notes yet';
}
function feedbackReport() {
  const lines = ['Spanish Voice Coach feedback — app v' + APP_VERSION, 'Position: ' + (S.pos + 1) + ' of ' + SCHEDULE.length + ' · XP ' + S.xp + ' · streak ' + S.streak, ''];
  lines.push('MY NOTES');
  S.feedback.forEach(f => lines.push('- [' + f.at.slice(0, 10) + ', v' + f.v + ', ' + f.where + '] ' + f.text));
  if (!S.feedback.length) lines.push('- (none)');
  lines.push('', 'AUTOMATIC NOTES');
  const miss = Object.entries(S.auto.misses).sort((a, b) => b[1] - a[1]).slice(0, 15);
  lines.push('Most-missed phrases: ' + (miss.length ? miss.map(([k, n]) => '"' + ITEMS[k].say + '" ×' + n).join(', ') : 'none'));
  lines.push('Times nothing was heard: ' + S.auto.unheard);
  const mh = S.auto.mishear.slice(-15);
  lines.push('Recent mishearings: ' + (mh.length ? mh.map(m => '"' + (ITEMS[m.k] ? ITEMS[m.k].say : m.k) + '" heard as "' + m.heard + '"').join('; ') : 'none'));
  lines.push('Recent quizzes: ' + (S.history.slice(-10).map(h => 'pos ' + (h.pos + 1) + ': ' + h.score + '/10 in ' + h.minutes + ' min').join('; ') || 'none'));
  const vs = voiceSet();
  lines.push('Voices: ' + [vs.es, vs.partner, vs.en].map(v => v ? v.name + ' (' + v.lang + ')' : 'default').join(', '));
  lines.push('Device: ' + navigator.userAgent);
  return lines.join('\n');
}
async function shareText(title, text) {
  try { if (navigator.share) { await navigator.share({ title, text }); return true; } } catch (e) { if (e && e.name === 'AbortError') return false; }
  try { await navigator.clipboard.writeText(text); toast('Copied. Paste it into your Claude chat.'); return true; } catch (e) {}
  $('#shareArea').value = text; $('#shareArea').hidden = false; $('#shareArea').select(); toast('Select and copy the text below');
  return false;
}
async function sendFeedback() {
  const ok = await shareText('Spanish Voice Coach feedback', feedbackReport());
  if (ok) { S.feedbackSentAt = new Date().toISOString(); save(); }
}

// ---------- backup ----------
async function backup() {
  const data = JSON.stringify(Object.assign({}, S, { backupAt: new Date().toISOString(), app: APP_VERSION }));
  const name = 'spanish-coach-backup-' + today() + '.json';
  try {
    const file = new File([data], name, { type: 'application/json' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Spanish Voice Coach backup' }); return; }
  } catch (e) { if (e && e.name === 'AbortError') return; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' })); a.download = name; document.body.appendChild(a); a.click(); a.remove();
}
function restore(file) {
  const r = new FileReader();
  r.onload = () => {
    try { const d = JSON.parse(r.result); if (typeof d.pos !== 'number' || !d.srs) throw 0; delete d.backupAt; delete d.app; S = Object.assign(DEFAULT(), d); save(); renderHome(); toast('Progress restored'); }
    catch (e) { alertBox("That file doesn't look like a Spanish Voice Coach backup."); }
  };
  r.readAsText(file);
}

// ---------- settings ----------
function renderSettings() {
  refreshVoices();
  const st = S.settings;
  document.querySelectorAll('[data-gender]').forEach(b => b.classList.toggle('sel', b.dataset.gender === st.gender));
  fillVoiceList('#esVoices', 'es', st.esVoice, uri => { st.esVoice = uri; save(); });
  fillVoiceList('#enVoices', 'en', st.enVoice, uri => { st.enVoice = uri; save(); });
  $('#rate').value = st.rate; $('#rateVal').textContent = rateLabel(st.rate);
  $('#earsOnly').checked = st.earsOnly; $('#tapToTalk').checked = st.tapToTalk;
  document.querySelectorAll('[data-engine]').forEach(b => b.classList.toggle('sel', b.dataset.engine === st.engine));
  $('#engineNow').textContent = 'Now using: ' + (engine() === 'ondevice' ? 'on-device (Whisper)' + (asrReady ? ', ready' : '') : 'iPhone speech recognition');
  const hasGood = voicesFor('es').some(x => x.q >= 2);
  $('#voiceTip').hidden = hasGood;
  $('#noVoices').hidden = VOICES.length > 0;
}
const rateLabel = r => r < 0.8 ? 'Slow' : r < 1 ? 'Relaxed' : r < 1.1 ? 'Normal' : 'Fast';
function fillVoiceList(sel, base, current, onPick) {
  const box = $(sel); box.innerHTML = '';
  const g = S.settings.gender;
  const list = voicesFor(base);
  const chosen = chooseVoice(base, g, current);
  const shown = list.filter(x => x.q > 0 && (x.g === g || x.g === '?')).slice(0, 12);
  (shown.length ? shown : list.slice(0, 12)).forEach(x => {
    const row = document.createElement('button');
    row.className = 'voice' + (chosen && chosen.voiceURI === x.v.voiceURI ? ' sel' : '');
    row.innerHTML = '<span class="vn"></span><span class="vm"></span><span class="play">▶</span>';
    row.querySelector('.vn').textContent = x.v.name.replace(/\s*\(.*\)$/, '');
    row.querySelector('.vm').textContent = [x.v.lang, x.g === 'female' ? 'female' : x.g === 'male' ? 'male' : '', x.q === 3 ? 'premium' : x.q === 2 ? 'enhanced' : ''].filter(Boolean).join(' · ');
    row.onclick = () => { onPick(x.v.voiceURI); preview(x.v, base); renderSettings(); };
    box.appendChild(row);
  });
  if (!box.children.length) box.innerHTML = '<p class="muted">No ' + (base === 'es' ? 'Spanish' : 'English') + ' voices found on this device.</p>';
}
function preview(v, base) {
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(base === 'es' ? 'Hola, ¿cómo estás? Soy ' + coachName() + ', tu profesora de español.'.replace('profesora', S.settings.gender === 'male' ? 'profesor' : 'profesora') : "Hi, I'm " + coachName() + ". Let's learn Spanish."); u.voice = v; u.lang = v.lang; u.rate = base === 'es' ? S.settings.rate : 1; speechSynthesis.speak(u); } catch (e) {}
}

// ---------- home ----------
function renderHome() {
  const done = S.pos >= SCHEDULE.length;
  const unit = SCHEDULE[Math.min(S.pos, SCHEDULE.length - 1)];
  $('#level').textContent = levelOf(S.xp);
  $('#xpTotal').textContent = S.xp.toLocaleString() + ' pts';
  $('#streak').textContent = S.streak + (S.streak === 1 ? ' day' : ' days');
  $('#coach').textContent = coachName();
  if (done) { $('#nextTitle').textContent = 'All done for this release'; $('#nextPlace').textContent = 'Send feedback to get the next block'; }
  else if (unit.kind === 'lesson') { const L = LESSONS[unit.li]; $('#nextNum').textContent = 'Session ' + (S.pos + 1) + ' of ' + SCHEDULE.length + ' · Lesson ' + (unit.li + 1); $('#nextTitle').textContent = L.title; $('#nextPlace').textContent = L.place; }
  else { $('#nextNum').textContent = 'Session ' + (S.pos + 1) + ' of ' + SCHEDULE.length; $('#nextTitle').textContent = 'Día de repaso'; $('#nextPlace').textContent = 'Review day · lessons ' + (unit.from + 1) + '–' + (unit.to + 1); }
  const resumable = S.session && S.session.pos === S.pos && S.session.idx > 0;
  $('#startBtn').textContent = resumable ? 'Continue (' + Math.floor(S.session.activeMs / 60000) + ' min done)' : 'Start today\'s session';
  $('#restartBtn').hidden = !resumable;
  $('#startBtn').disabled = done;
  // journey dots
  const j = $('#journey'); j.innerHTML = '';
  SCHEDULE.forEach((u, i) => { const d = document.createElement('span'); d.className = 'dot' + (i < S.pos ? ' done' : i === S.pos ? ' now' : '') + (u.kind === 'review' ? ' rev' : ''); j.appendChild(d); });
  $('#ver').textContent = 'v' + APP_VERSION;
  $('#fbBadge').textContent = S.feedback.length ? String(S.feedback.length) : '';
  renderVoiceBanner();
  $('#srWarn').hidden = !!(SR || (navigator.mediaDevices && navigator.mediaDevices.getUserMedia));
}
function renderVoiceBanner() {
  const b = $('#voiceBanner'); if (!b) return;
  const es = voicesFor('es');
  b.hidden = !es.length || es.some(x => x.q >= 2) || S.voiceBannerDismissed;
}
function whatsNew(force) {
  if (!force && S.seenVersion === APP_VERSION) return;
  const box = $('#wnList'); box.innerHTML = '';
  CHANGELOG.forEach(c => { const h = document.createElement('h3'); h.textContent = 'v' + c.v + ' · ' + c.date; box.appendChild(h); const ul = document.createElement('ul'); c.items.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); }); box.appendChild(ul); });
  $('#whatsnew').hidden = false;
  S.seenVersion = APP_VERSION; save();
}
function alertBox(msg) { $('#alertMsg').textContent = msg; $('#alert').hidden = false; }

// ---------- wire up ----------
function init() {
  load();
  refreshVoices();
  try { speechSynthesis.onvoiceschanged = () => { refreshVoices(); if (!$('#settings').hidden) renderSettings(); }; } catch (e) {}
  let polls = 0; const p = setInterval(() => { refreshVoices(); renderVoiceBanner(); if (++polls > 40) clearInterval(p); }, 500);

  $('#startBtn').onclick = () => startOrContinue(false);
  $('#restartBtn').onclick = () => startOrContinue(true);
  $('#pauseBtn').onclick = () => run.paused ? resume() : pause();
  $('#resumeBig').onclick = resume;
  $('#homeBtn').onclick = () => { quitSession(); };
  const tapMic = () => { if (run.tapResolve) { const r = run.tapResolve; run.tapResolve = null; r(); ac(); } };
  $('#tapBtn').onclick = tapMic; $('#orb').onclick = tapMic;
  $('#sessFb').onclick = openFeedback;
  $('#homeFb').onclick = openFeedback;
  $('#fbMic').onclick = fbRecord;
  $('#fbSend').onclick = sendFeedback;
  $('#fbSave').onclick = () => { const t = $('#fbText').value.trim(); if (!t) return; S.feedback.push({ at: new Date().toISOString(), v: APP_VERSION, where: fbContext(), text: t }); save(); $('#fbText').value = ''; renderFeedbackList(); renderHome(); toast('Note saved'); };
  $('#fbClear').onclick = () => { if ($('#fbClear').dataset.arm) { S.feedback = []; S.auto = DEFAULT().auto; save(); renderFeedbackList(); delete $('#fbClear').dataset.arm; $('#fbClear').textContent = 'Clear sent notes'; } else { $('#fbClear').dataset.arm = 1; $('#fbClear').textContent = 'Tap again to clear'; } };
  $('#settingsBtn').onclick = () => { renderSettings(); show('settings'); };
  $('#setBack').onclick = () => { renderHome(); show('home'); };
  document.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => { S.settings.gender = b.dataset.gender; S.settings.esVoice = null; S.settings.enVoice = null; save(); renderSettings(); const v = chooseVoice('es', S.settings.gender, null); if (v) preview(v, 'es'); });
  document.querySelectorAll('[data-engine]').forEach(b => b.onclick = () => { S.settings.engine = b.dataset.engine; if (b.dataset.engine === 'auto') S.settings.autoEngine = null; save(); if (engine() === 'ondevice') asrStart(); renderSettings(); });
  $('#rate').oninput = e => { S.settings.rate = +e.target.value; $('#rateVal').textContent = rateLabel(S.settings.rate); save(); };
  $('#rate').onchange = () => { const v = voiceSet().es; if (v) preview(v, 'es'); };
  $('#earsOnly').onchange = e => { S.settings.earsOnly = e.target.checked; save(); };
  $('#tapToTalk').onchange = e => { S.settings.tapToTalk = e.target.checked; save(); };
  $('#backupBtn').onclick = backup;
  $('#restoreBtn').onclick = () => $('#restoreFile').click();
  $('#restoreFile').onchange = e => { if (e.target.files[0]) restore(e.target.files[0]); e.target.value = ''; };
  $('#wnBtn').onclick = () => whatsNew(true);
  $('#vbClose').onclick = () => { S.voiceBannerDismissed = true; save(); renderVoiceBanner(); };
  $('#vbOpen').onclick = () => { renderSettings(); show('settings'); };
  $('#wnClose').onclick = () => $('#whatsnew').hidden = true;
  $('#alertClose').onclick = () => $('#alert').hidden = true;
  document.addEventListener('visibilitychange', () => { if (document.hidden && run.active) pause(); });

  renderHome(); show('home');
  whatsNew(false);
  if (engine() === 'ondevice') asrStart();
}
window.SVC = { norm, score, numES, SCHEDULE, ITEMS, planSession: () => planSession(), _state: () => S, _load: load };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
