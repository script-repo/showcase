import { useCallback, useRef } from 'react';

export type SoundType = 'success' | 'failure' | 'click';

/**
 * Tiny Web Audio synthesizer for UI feedback. Returns a play() callback.
 * `enabledRef` is read at call time so toggling sound takes effect immediately.
 */
export function useSound(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  return useCallback((type: SoundType) => {
    if (!enabledRef.current) return;
    try {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!ctxRef.current) ctxRef.current = new Ctor();
      const ctx = ctxRef.current;
      if (ctx.state === 'suspended') void ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const t = ctx.currentTime;

      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, t);
        gain.gain.setValueAtTime(0.08, t);
        osc.frequency.setValueAtTime(659.25, t + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        osc.start(t);
        osc.stop(t + 0.4);
      } else if (type === 'failure') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, t);
        osc.frequency.exponentialRampToValueAtTime(70, t + 0.28);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.3);
        osc.start(t);
        osc.stop(t + 0.35);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, t);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        osc.start(t);
        osc.stop(t + 0.08);
      }
    } catch {
      // Audio unsupported or blocked — ignore.
    }
  }, []);
}
