const features = [
  {
    title: "Centralised Toolkit",
    description:
      "Keep every subscription, trial link, and daily AI driver in one searchable, always-synced dashboard.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    accent: "from-indigo-500 to-indigo-700",
    glow: "shadow-indigo-700/20",
  },
  {
    title: "Purpose Mapping",
    description:
      "Assign specific jobs to every tool. Never ask 'what was that generator for?' ever again.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    accent: "from-violet-500 to-violet-700",
    glow: "shadow-violet-700/20",
  },
  {
    title: "Quick Access",
    description:
      "Jump from the shelf straight into your flow. Launch any tool with a single click, instantly.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    accent: "from-blue-500 to-blue-700",
    glow: "shadow-blue-700/20",
  },
  {
    title: "Smart Categories",
    description:
      "Group tools by use case — writing, imaging, coding, video. Your stack, perfectly structured.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    accent: "from-pink-500 to-pink-700",
    glow: "shadow-pink-700/20",
  },
  {
    title: "Usage Notes",
    description:
      "Attach prompts, tips, and context to each tool. Your private knowledge base for AI.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    accent: "from-amber-500 to-amber-700",
    glow: "shadow-amber-700/20",
  },
  {
    title: "Zero Clutter",
    description:
      "Minimal, distraction-free, and blazing fast. No ads, no noise. Just your tools, exactly as intended.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 3l14 9-14 9V3z"
        />
      </svg>
    ),
    accent: "from-teal-500 to-teal-700",
    glow: "shadow-teal-700/20",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-900/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-medium mb-6 tracking-wide uppercase">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
            </svg>
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-tight">
            A home for your intelligence
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            Managing a growing stack of AI models shouldn&apos;t be chaotic.
            BookChef brings clarity to your tools so you can focus on the output.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
            >
              {/* Card inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${f.accent} opacity-[0.07] rounded-full blur-2xl`} />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.accent} flex items-center justify-center text-white mb-5 shadow-lg ${f.glow} group-hover:scale-110 transition-transform duration-300`}
                >
                  {f.icon}
                </div>

                {/* Text */}
                <h3 className="text-[15px] font-semibold text-white mb-2.5 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
