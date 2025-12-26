export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-dark min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[var(--border-dark)] bg-[var(--bg-dark)] p-5">
          <div className="mb-6">
            <div className="text-xs tracking-[0.25em] text-white/60">
              VIVY · FLUORITE
            </div>
            <div className="text-xl font-semibold text-[var(--accent)]">AI</div>
          </div>

          <nav className="space-y-2 text-sm">
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/app">
              Dashboard
            </a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/app/studio">
              Studio
            </a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/app/piano">
              Mission Piano
            </a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/app/timeline">
              Timeline
            </a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/app/memory">
              Memory Vault
            </a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5" href="/app/settings">
              Settings
            </a>
          </nav>

          <div className="mt-10 rounded-2xl border border-[rgba(29,221,255,0.2)] bg-white/5 p-4">
            <div className="text-xs text-white/60">Credits</div>
            <div className="mt-1 text-2xl font-semibold text-[var(--accent)]">7</div>
            <div className="mt-2 text-xs text-white/50">
              Earn more via Mission Piano.
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1">
          <header className="sticky top-0 z-10 border-b border-[var(--border-dark)] bg-[rgba(7,10,15,0.75)] px-6 py-4 glass">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs tracking-[0.25em] text-white/60">
                  SYSTEM
                </div>
                <div className="font-medium">
                  <span className="text-[var(--accent)]">ONLINE</span> · Mission Ready
                </div>
              </div>

              <a
                href="/app/studio"
                className="rounded-xl border border-[rgba(29,221,255,0.3)] bg-[rgba(29,221,255,0.1)] px-4 py-2 text-sm hover:bg-[rgba(29,221,255,0.15)]"
              >
                Launch Studio
              </a>
            </div>
          </header>

          <main className="px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
