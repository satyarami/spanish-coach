// On-device speech recognition (Whisper) for Spanish Voice Coach.
// Uses the phone's GPU (WebGPU) when available, otherwise WebAssembly. Model files are cached by the browser.
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/+esm';

env.allowLocalModels = false;
let asr = null, loading = null, device = null;

async function hasWebGPU() {
  try { if (!self.navigator || !navigator.gpu) return false; const a = await navigator.gpu.requestAdapter(); return !!a; } catch (e) { return false; }
}
function progress(p) { if (p.status === 'progress' || p.status === 'done' || p.status === 'initiate') self.postMessage({ type: 'progress', file: p.file, loaded: p.loaded, total: p.total, status: p.status }); }

async function load(model) {
  if (asr) return asr;
  if (!loading) {
    loading = (async () => {
      if (await hasWebGPU()) {
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

self.onmessage = async e => {
  const m = e.data;
  if (m.type === 'load') {
    try { await load(m.model); self.postMessage({ type: 'ready', device }); }
    catch (err) { loading = null; self.postMessage({ type: 'error', error: String(err && err.message || err) }); }
  } else if (m.type === 'asr') {
    const t0 = Date.now();
    try {
      await load(m.model);
      const out = await asr(m.audio, { language: m.language, task: 'transcribe', max_new_tokens: m.maxTokens || 48 });
      self.postMessage({ type: 'result', id: m.id, text: (out && out.text || '').trim(), ms: Date.now() - t0, device });
    } catch (err) {
      self.postMessage({ type: 'result', id: m.id, text: '', error: String(err && err.message || err), ms: Date.now() - t0, device });
    }
  }
};
