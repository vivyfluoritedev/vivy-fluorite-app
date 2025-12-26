export default function LandingPage() {
  return (
    <main className="min-h-screen theme-light">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--panel)] glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-[var(--border)] bg-white glow" />
            <div className="text-lg font-semibold">Vivy AI</div>
            <div className="ml-4 hidden items-center gap-2 rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-xs md:flex">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="tracking-[0.25em] text-[var(--muted)]">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a className="hover:text-black" href="#features">Features</a>
            <a className="hover:text-black" href="#how">How It Works</a>
            <a className="hover:text-black" href="#faq">FAQ</a>
            <a className="hover:text-black" href="#docs">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/app"
              className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Get Access
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* soft grid bg */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(29,221,255,0.25),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(29,221,255,0.18),transparent_60%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white/70 px-3 py-2 text-xs text-[var(--muted)] glass">
              <span className="text-[var(--accent)]">⚡</span>
              <span className="tracking-[0.25em]">AI MUSIC GENERATION · v2.0</span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05]">
              Hyper-Realistic
              <br />
              <span className="text-[var(--accent)]">AI Music</span>
              <br />
              Generation
            </h1>

            <p className="mt-6 max-w-lg text-[var(--muted)]">
              Vivy AI creates hyper-realistic songs using advanced neural synthesis.
              Complete piano missions assigned by Matsumoto to earn credits and unlock
              premium AI music capabilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/app"
                className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black hover:opacity-90"
              >
                Get Access →
              </a>

              <a
                href="https://github.com/vivyfluoritedev/vivy-fluorite-app"
                target="_blank"
                className="rounded-xl border border-[var(--border)] bg-white/70 px-5 py-3 text-sm font-medium hover:bg-white"
              >
                GitHub
              </a>
            </div>

            {/* Token CA Card */}
            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white/70 p-4 glass">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs tracking-[0.25em] text-[var(--muted)]">
                  $VIVY TOKEN CA
                </div>
                <div className="text-xs text-[var(--muted)]">ID: VF-2024</div>
              </div>
              <div className="mt-2 break-all font-mono text-sm text-black/80">
                4eYtxidgzjMWQSB5m5GJ5u4PZ4uLNR1Nh4zW18zepump
              </div>
            </div>
          </div>

          {/* Right Visual Placeholder */}
          <div className="relative">
            <div className="absolute right-3 top-3 rounded-xl border border-[var(--border)] bg-white/70 px-3 py-2 text-xs glass">
              <span className="text-[var(--accent)]">●</span>{" "}
              <span className="ml-2 tracking-[0.25em] text-[var(--muted)]">
                STATUS: ACTIVE
              </span>
            </div>

            <div className="absolute right-3 top-16 rounded-xl border border-[var(--border)] bg-white/70 px-3 py-2 text-xs glass">
              <span className="tracking-[0.25em] text-[var(--muted)]">
                PWR: 99.8%
              </span>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/60 p-6 glass glow">
              <div className="aspect-[4/3] w-full rounded-2xl border border-[var(--border)] bg-[linear-gradient(135deg,rgba(29,221,255,0.25),rgba(255,255,255,0.6))]" />
              <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                <div className="tracking-[0.25em]">vivy://command-center</div>
                <div className="tracking-[0.25em]">SYNC: 100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-[var(--border)] bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-[var(--muted)]">
          Secure connection · VIVY · FLUORITE AI
        </div>
      </footer>
    </main>
  );
}
