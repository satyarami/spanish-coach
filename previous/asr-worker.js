// On-device speech recognition (Whisper) for Spanish Voice Coach.
// Runs in a Web Worker so the page stays responsive. The model downloads once and is cached by the browser.
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/+esm';

env.allowLocalModels = false;
let asr = null, loading = null;

async function load(model, dtype) {
  if (asr) return asr;
  if (!loading) {
    loading = pipeline('automatic-speech-recognition', model, {
      dtype, device: 'wasm',
      progress_callback: p => { if (p.status === 'progress' || p.status === 'done' || p.status === 'initiate') self.postMessage({ type: 'progress', file: p.file, loaded: p.loaded, total: p.total, status: p.status }); }
    }).then(a => (asr = a));
  }
  return loading;
}

self.onmessage = async e => {
  const m = e.data;
  if (m.type === 'load') {
    try { await load(m.model, m.dtype); self.postMessage({ type: 'ready' }); }
    catch (err) { loading = null; self.postMessage({ type: 'error', error: String(err && err.message || err) }); }
  } else if (m.type === 'asr') {
    try {
      await load(m.model, m.dtype);
      const out = await asr(m.audio, { language: m.language, task: 'transcribe', chunk_length_s: 30 });
      self.postMessage({ type: 'result', id: m.id, text: (out && out.text || '').trim() });
    } catch (err) {
      self.postMessage({ type: 'result', id: m.id, text: '', error: String(err && err.message || err) });
    }
  }
};
