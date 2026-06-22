import { useState } from 'react';
import type { ExplainModalData } from '../ui';

export function ExplainModal({ data, onClose }: { data: ExplainModalData; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0e1424] border border-indigo-500/30 max-w-2xl w-full rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl animate-fadeIn relative select-text">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold">
          ✕ Close
        </button>
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <span className="text-indigo-400">✨</span>
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">AI Deep-Dive</h3>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-slate-400">Question:</p>
          <h4 className="text-sm font-black text-white">{data.question}</h4>
          <p className="text-xs text-emerald-400 font-bold font-mono">Correct answer: {data.correctOption}</p>
        </div>
        <div className="bg-[#05070c] p-5 rounded-2xl border border-slate-800 text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto pr-3 font-mono">
          {data.response}
        </div>
      </div>
    </div>
  );
}

interface ApiKeyModalProps {
  currentKey: string;
  onSave: (key: string) => void;
  onClose: () => void;
}

export function ApiKeyModal({ currentKey, onSave, onClose }: ApiKeyModalProps) {
  const [value, setValue] = useState(currentKey);

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0e1424] border border-indigo-500/30 max-w-md w-full rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl animate-fadeIn relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold">
          ✕
        </button>
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">Gemini API Key (optional)</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          The AI features (study plan, explanations, generated questions) call Google&apos;s Gemini API directly from
          your browser. Paste a free key from{' '}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Google AI Studio
          </a>
          . It is stored only in this browser&apos;s local storage and never sent anywhere else.
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="AIza..."
          className="w-full bg-[#05070c] border border-slate-700 text-xs font-mono p-2.5 rounded-lg focus:outline-none focus:border-indigo-500 text-slate-200"
        />
        <div className="flex justify-between gap-2">
          <button
            onClick={() => {
              setValue('');
              onSave('');
            }}
            className="text-xs font-bold text-slate-400 hover:text-rose-400"
          >
            Clear key
          </button>
          <button
            onClick={() => onSave(value.trim())}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
