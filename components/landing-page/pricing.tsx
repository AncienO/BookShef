import Link from "next/link";

const perks = [
  "Unlimited AI tools",
  "Unlimited categories",
  "Instant search & launch",
  "Per-tool usage notes",
  "Drag-and-drop organisation",
  "Community support",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 md:py-36 bg-[#060606] border-t border-white/[0.05] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-medium mb-6 tracking-wide uppercase">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5">
            Start organising today.
          </h2>
          <p className="text-lg text-white/50 font-light">
            BookChef 1.0 is completely free to start.{" "}
            <span className="text-white/70">No credit card required.</span>
          </p>
        </div>

        {/* Pricing card */}
        <div className="w-full max-w-sm relative group">
          {/* Animated outer glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

          <div className="relative rounded-3xl bg-[#111] border border-white/10 p-8 md:p-10 flex flex-col shadow-2xl">
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Free Forever
            </div>

            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Personal Toolkit</h3>
            <p className="text-white/40 text-sm mb-6 font-light">Everything you need to manage your AI stack.</p>

            <div className="flex items-baseline gap-1.5 mb-8">
              <span className="text-6xl font-bold text-white tracking-tight">$0</span>
              <div className="flex flex-col text-white/40 text-sm leading-tight">
                <span>/ month</span>
                <span>forever</span>
              </div>
            </div>

            {/* Feature list */}
            <ul className="space-y-3.5 mb-8">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>

            <p className="text-center text-white/25 text-xs mt-4">No credit card required</p>
          </div>
        </div>

        {/* Coming soon hint */}
        <p className="mt-10 text-white/30 text-sm text-center">
          Pro & Team plans coming soon — with collaboration, analytics, and more.
        </p>
      </div>
    </section>
  );
}
