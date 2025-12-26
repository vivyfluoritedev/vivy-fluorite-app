export default function StudioPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h1 className="text-2xl font-semibold text-[var(--accent)]">
        Fluorite Studio
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Describe your song idea and let Vivy compose it.
      </p>

      <textarea
        placeholder="A hopeful song about finding purpose..."
        className="mt-6 w-full rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white outline-none"
        rows={6}
      />

      <button className="mt-4 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black">
        Generate with AI
      </button>
    </div>
  );
}
