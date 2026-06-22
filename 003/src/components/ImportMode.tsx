interface ImportModeProps {
  rawMarkdown: string;
  onChange: (value: string) => void;
  onImport: () => void;
  importStatus: { success: boolean; count: number } | null;
}

export function ImportMode({ rawMarkdown, onChange, onImport, importStatus }: ImportModeProps) {
  return (
    <main className="flex-1 max-w-3xl w-full mx-auto p-6 space-y-4">
      <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl">
        <h2 className="text-base font-black text-white">Import Questions from Markdown</h2>
        <p className="text-xs text-slate-400 mt-1">
          Paste questions in the same format as the bundled bank. Each question looks like:
        </p>
        <pre className="text-[11px] text-slate-500 bg-[#05070c] border border-slate-800 rounded-lg p-3 mt-2 overflow-x-auto">{`### Q1: Question text?

A. Option one
B. Option two
C. Option three
D. Option four

**Correct Answer:** C. Option three

> **Explanation:** Why C is correct.`}</pre>
      </div>

      <textarea
        value={rawMarkdown}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your markdown questions here..."
        className="w-full h-72 bg-[#05070c] border border-slate-700/80 p-4 rounded-xl font-mono text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
      />

      {importStatus && (
        <div
          className={`p-3 rounded-lg text-xs font-bold font-mono ${
            importStatus.success ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
          }`}
        >
          {importStatus.success
            ? `Imported ${importStatus.count} question${importStatus.count === 1 ? '' : 's'} into your bank.`
            : 'Could not parse any questions. Check that the format matches the example above.'}
        </div>
      )}

      <button
        onClick={onImport}
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 text-xs uppercase tracking-wider rounded-xl transition-all"
      >
        Import Questions
      </button>
    </main>
  );
}
