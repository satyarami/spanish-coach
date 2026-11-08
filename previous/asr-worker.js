// On-device speech recognition (Whisper) for Spanish Voice Coach.
// Uses the phone's GPU (WebGPU) when available, otherwise WebAssembly. Model files are cached by the browser.
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/+esm';

env.allowLocalModels = false;
let asr = null, loading = null, device = null;

async function hasWebGPU() {
  try { if (!self.navigator || !navigator.gpu) return false; const a = await navigator.gpu.requestAdapter(); return !!a; } catch (e) { return false; }
}
function progress(p) { if (p.status === 'progress' || p.status === 'done' || p.status === 'initiate') self.postMessage({ type: 'progress', file: p.file, loaded: p.loaded, total: p.total, status: p.status }); }

async function load(model, gpu) {
  if (asr) return asr;
  if (!loading) {
    loading = (async () => {
      if (gpu && await hasWebGPU()) {
        try {
          asr = await pipeline('automatic-speech-recognition', model, { device: 'webgpu', dtype: { encoder_model: 'fp32', decoder_model_merged: 'q4' }, progress_callback: progress });
          device = 'webgpu';
        } catch (e) { asr = null; }
      }
      if (!asr) {
        asr = await pipeline('automatic-speech-recognition', model, { device: 'wasm', dtype: 'q8', progress_callback: progress });
        device = 'wasm';
      }
      // Warm-up so the first real answer isn't slow.
      try { await asr(new Float32Array(16000), { language: 'spanish', task: 'transcribe', max_new_tokens: 4 }); } catch (e) {}
      return asr;
    })();
  }
  return loading;
}

// Whisper "previous text" prompt: we give it the phrases the learner is likely to say, so it hears
// "buenas tardes" instead of guessing at unrelated words. The expected answer is always mixed in with
// several others, so the prompt narrows the vocabulary without giving the answer away.
const LANG_TOK = { spanish: '<|es|>', english: '<|en|>' };
const normT = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9ñ ]+/g, ' ').replace(/\s+/g, ' ').trim();
async function prompted_asr(audio, language, prompt, maxTokens) {
  const tok = asr.tokenizer, id = t => tok.convert_tokens_to_ids(t);
  const ids = ['<|startofprev|>', '<|startoftranscript|>', LANG_TOK[language] || '<|es|>', '<|transcribe|>', '<|notimestamps|>'].map(id);
  if (ids.some(x => x == null || x === tok.unk_token_id)) return null;
  let p = tok.encode(' ' + prompt.trim(), { add_special_tokens: false });
  if (p.length > 120) p = p.slice(-120);
  const prefix = [ids[0], ...p, ids[1], ids[2], ids[3], ids[4]];
  const feats = await asr.processor(audio);
  const out = await asr.model.generate({ inputs: feats.input_features, decoder_input_ids: prefix, max_new_tokens: maxTokens });
  const raw = (out.sequences || out)[0].tolist(), seq = raw.map(Number);
  const gen = seq.slice(0, prefix.length).every((x, i) => x === prefix[i]) ? raw.slice(prefix.length) : raw;
  const text = tok.decode(gen, { skip_special_tokens: true }).trim();
  // Guard: if Whisper just repeats the prompt back (a known failure on unclear audio), don't trust it.
  // The prompt is phrases separated by ". "; an answer containing three or more of them is an echo.
  const h = ' ' + normT(text) + ' ';
  const hits = prompt.split(/\.\s+/).map(normT).filter(x => x && h.includes(' ' + x + ' ')).length;
  if (hits >= 3) return null;
  return text;
}

self.onmessage = async e => {
  const m = e.data;
  if (m.type === 'load') {
    try { await load(m.model, m.gpu); self.postMessage({ type: 'ready', device }); }
    catch (err) { loading = null; self.postMessage({ type: 'error', error: String(err && err.message || err) }); }
  } else if (m.type === 'asr') {
    const t0 = Date.now();
    try {
      await load(m.model, m.gpu);
      let text = null, prompted = false;
      if (m.prompt) {
        try { text = await prompted_asr(m.audio, m.language, m.prompt, m.maxTokens || 48); prompted = text !== null; }
        catch (e) { text = null; }
      }
      if (text === null) {
        const out = await asr(m.audio, { language: m.language, task: 'transcribe', max_new_tokens: m.maxTokens || 48 });
        text = (out && out.text || '').trim();
      }
      self.postMessage({ type: 'result', id: m.id, text, prompted, ms: Date.now() - t0, device });
    } catch (err) {
      self.postMessage({ type: 'result', id: m.id, text: '', error: String(err && err.message || err), ms: Date.now() - t0, device });
    }
  }
};
