import Link from "next/link";

const checkIcon = (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export function FeatureHighlight() {
  return (
    <section className="relative bg-[#060606] border-y border-white/[0.05] overflow-hidden">
      {/* ── Block 1: graphic LEFT, text RIGHT ── */}
      <div className="relative py-24 md:py-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-700/10 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Graphic */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-[480px]">
              {/* Glow */}
              <div className="absolute inset-0 bg-indigo-600/15 blur-[80px] rounded-3xl" />

              {/* Card */}
              <div className="relative rounded-2xl border border-white/10 bg-[#0e0e0e] overflow-hidden shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#131313] border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="h-1.5 w-20 rounded bg-white/10" />
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                </div>

                <div className="flex h-64">
                  {/* Sidebar */}
                  <div className="w-36 border-r border-white/[0.05] p-3 flex flex-col gap-2 bg-[#0c0c0c]">
                    {[
                      { name: "Writing", color: "bg-purple-400", active: false },
                      { name: "Imaging", color: "bg-pink-400", active: true },
                      { name: "Coding", color: "bg-blue-400", active: false },
                      { name: "Video", color: "bg-amber-400", active: false },
                      { name: "Research", color: "bg-cyan-400", active: false },
                    ].map(({ name, color, active }) => (
                      <div
                        key={name}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${active ? "bg-white/8" : ""}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${color} opacity-70`} />
                        <div className={`h-1.5 rounded flex-1 ${active ? "bg-white/40" : "bg-white/10"}`} />
                      </div>
                    ))}
                  </div>

                  {/* Tool cards area */}
                  <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                    {[
                      { border: "border-pink-500/30", bg: "bg-pink-500/10", dot: "bg-pink-400" },
                      { border: "border-violet-500/30", bg: "bg-violet-500/10", dot: "bg-violet-400" },
                      { border: "border-sky-500/30", bg: "bg-sky-500/10", dot: "bg-sky-400" },
                      { border: "border-fuchsia-500/30", bg: "bg-fuchsia-500/10", dot: "bg-fuchsia-400" },
                    ].map(({ border, bg, dot }, i) => (
                      <div key={i} className={`relative rounded-xl border ${border} ${bg} p-3 flex flex-col justify-between`}>
                        <div className={`w-2 h-2 rounded-full ${dot}`} />
                        <div className="space-y-1.5 mt-3">
                          <div className="h-1.5 bg-white/30 rounded w-3/4" />
                          <div className="h-1.5 bg-white/10 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-full bg-indigo-600/90 border border-indigo-400/30 text-xs text-white font-medium shadow-xl backdrop-blur-sm">
                4 tools in &quot;Imaging&quot;
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Organised Structure
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-[-0.03em] leading-tight">
              Stop digging through your bookmarks.
            </h2>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8">
              BookChef lets you strictly categorise your AI tools by purpose. Whether it&apos;s for writing,
              imaging, coding, or video — group them perfectly and access them in seconds.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Drag-and-drop custom categories",
                "Colour-coded tool groups",
                "Lightning fast full-text search",
                "One-click launch to any tool",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    {checkIcon}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              Start organising your stack
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Block 2: text LEFT, graphic RIGHT ── */}
      <div className="relative py-24 md:py-36 border-t border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-700/10 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text LEFT */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Knowledge Layer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-[-0.03em] leading-tight">
              Your notes. Your prompts. Right where you need them.
            </h2>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed mb-8">
              Attach private usage notes, best prompts, and workflow tips directly to each tool card.
              Build your personal AI knowledge base as you work.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Per-tool notes and prompt storage",
                "Markdown support for rich formatting",
                "Private to your account — always",
                "Searchable across your entire toolkit",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="w-5 h-5 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center">
                    {checkIcon}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group"
            >
              Get your free account
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>

          {/* Graphic RIGHT */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute inset-0 bg-violet-600/15 blur-[80px] rounded-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-[#0e0e0e] overflow-hidden shadow-2xl p-5">
                {/* Tool header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600/60 to-violet-800/30 border border-violet-500/30 flex items-center justify-center text-xs font-bold text-violet-200">
                    C
                  </div>
                  <div>
                    <div className="h-2 w-24 bg-white/40 rounded mb-1.5" />
                    <div className="h-1.5 w-16 bg-violet-400/30 rounded" />
                  </div>
                  <div className="ml-auto px-2 py-1 rounded-lg bg-violet-600/20 border border-violet-500/20">
                    <div className="h-1.5 w-10 bg-violet-400/40 rounded" />
                  </div>
                </div>

                {/* Notes section */}
                <div className="space-y-3">
                  <div className="text-[10px] text-white/25 uppercase tracking-widest mb-2 font-medium">My Notes</div>
                  {[
                    { width: "w-full", light: true },
                    { width: "w-5/6", light: false },
                    { width: "w-4/5", light: false },
                    { width: "w-3/4", light: false },
                  ].map((line, i) => (
                    <div key={i} className={`h-1.5 rounded ${line.width} ${line.light ? "bg-white/20" : "bg-white/10"}`} />
                  ))}

                  <div className="mt-4 p-3 rounded-xl bg-violet-900/20 border border-violet-500/20">
                    <div className="text-[9px] text-violet-400/60 mb-2 font-medium uppercase tracking-wider">Best Prompt</div>
                    {[
                      { width: "w-full" },
                      { width: "w-4/5" },
                      { width: "w-2/3" },
                    ].map((l, i) => (
                      <div key={i} className={`h-1.5 rounded mb-1.5 ${l.width} bg-violet-300/20`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-violet-600/90 border border-violet-400/30 text-xs text-white font-medium shadow-xl backdrop-blur-sm">
                12 prompts saved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
