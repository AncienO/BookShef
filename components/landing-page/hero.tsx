import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Multi-layer background ── */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Radial gradient glow — indigo */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] opacity-25 pointer-events-none">
        <div className="w-full h-full bg-indigo-600 rounded-full blur-[180px]" />
      </div>

      {/* Secondary glow — violet */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] opacity-15 pointer-events-none">
        <div className="w-full h-full bg-violet-700 rounded-full blur-[140px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Dot noise top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        {/* Launch badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium mb-10 hover:border-indigo-500/50 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          BookChef 1.0 — Now Live
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-[-0.03em] text-white max-w-5xl leading-[1.05] mb-7">
          Your AI tools.{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              One place.
            </span>
          </span>
          <br />
          <span className="text-white/90">Total clarity.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-[-0.01em]">
          BookChef is the smart toolkit manager for people who take AI seriously.{" "}
          <span className="text-white/70">Organise every tool, define every purpose,</span> and
          never lose track again.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center gap-2 font-semibold bg-indigo-600 text-white px-8 py-3.5 rounded-full hover:bg-indigo-500 transition-all duration-200 text-sm min-w-[180px] shadow-[0_0_50px_8px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_12px_rgba(99,102,241,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started Free
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center gap-2 font-medium bg-white/5 text-white/80 border border-white/10 px-8 py-3.5 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 text-sm min-w-[180px]"
          >
            See How It Works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Dashboard preview — SVG mock */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Glow behind card */}
          <div className="absolute inset-x-12 bottom-0 h-40 bg-indigo-600/20 blur-3xl rounded-full" />

          {/* Browser chrome */}
          <div className="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-white/8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 ml-2 max-w-xs h-5 rounded-md bg-white/5 border border-white/8 flex items-center px-3 gap-2">
                <svg className="w-2.5 h-2.5 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-[9px] text-white/25">BookChef.app/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex h-[340px] md:h-[420px]">
              {/* Sidebar */}
              <div className="hidden sm:flex w-48 border-r border-white/5 bg-[#0e0e0e] flex-col p-4 gap-2 shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-indigo-600/50 flex items-center justify-center text-[9px] font-bold text-white">B</div>
                  <div className="h-2 rounded bg-white/15 flex-1" />
                </div>
                {[
                  { label: "All Tools", active: true, color: "bg-indigo-500" },
                  { label: "Writing", active: false, color: "bg-purple-500" },
                  { label: "Imaging", active: false, color: "bg-pink-500" },
                  { label: "Coding", active: false, color: "bg-blue-500" },
                  { label: "Video", active: false, color: "bg-amber-500" },
                ].map(({ label, active, color }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg ${active ? "bg-white/8" : ""
                      }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${color} opacity-70`} />
                    <div
                      className={`h-1.5 rounded flex-1 ${active ? "bg-white/50" : "bg-white/15"
                        }`}
                    />
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex-1 p-5 md:p-6 flex flex-col gap-4">
                {/* Search bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 w-full max-w-sm">
                  <svg className="w-3.5 h-3.5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="h-1.5 rounded bg-white/15 w-20" />
                </div>

                {/* Tool cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
                  {[
                    { name: "ChatGPT", cat: "Writing", color: "from-green-600/20 to-green-800/10", border: "border-green-500/20", dot: "bg-green-400" },
                    { name: "Midjourney", cat: "Imaging", color: "from-pink-600/20 to-pink-800/10", border: "border-pink-500/20", dot: "bg-pink-400" },
                    { name: "Cursor", cat: "Coding", color: "from-blue-600/20 to-blue-800/10", border: "border-blue-500/20", dot: "bg-blue-400" },
                    { name: "Claude", cat: "Writing", color: "from-amber-600/20 to-amber-800/10", border: "border-amber-500/20", dot: "bg-amber-400" },
                    { name: "Runway", cat: "Video", color: "from-violet-600/20 to-violet-800/10", border: "border-violet-500/20", dot: "bg-violet-400" },
                    { name: "Perplexity", cat: "Research", color: "from-cyan-600/20 to-cyan-800/10", border: "border-cyan-500/20", dot: "bg-cyan-400" },
                  ].map(({ name, cat, color, border, dot }) => (
                    <div
                      key={name}
                      className={`relative rounded-xl bg-gradient-to-br ${color} border ${border} p-3 flex flex-col justify-between overflow-hidden`}
                    >
                      <div className="flex justify-between items-start">
                        <div className={`w-2 h-2 rounded-full ${dot} mt-0.5`} />
                        <div className="h-1 w-8 rounded bg-white/10" />
                      </div>
                      <div className="mt-4">
                        <div className="h-2 rounded bg-white/50 w-3/4 mb-1.5" />
                        <div className="h-1.5 rounded bg-white/20 w-1/2 text-[8px]" />
                      </div>
                      {/* Invisible labels for visual reference — real layout */}
                      <div className="absolute bottom-2 right-2 text-[7px] text-white/10 font-mono">{cat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
