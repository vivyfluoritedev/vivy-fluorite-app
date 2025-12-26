export default function AppHome() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        { title: "Studio", desc: "Generate songs from prompts and perform them." },
        { title: "Mission Piano", desc: "Complete missions to earn credits." },
        { title: "Timeline", desc: "Branch decisions. Intervention songs." },
      ].map((x) => (
        <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-lg font-semibold text-[var(--accent)]">{x.title}</div>
          <div className="mt-2 text-sm text-white/60">{x.desc}</div>
        </div>
      ))}
    </div>
  );
}
