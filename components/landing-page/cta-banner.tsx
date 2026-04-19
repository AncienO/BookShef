import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Large central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none">
        <div className="w-full h-full bg-indigo-700/25 blur-[150px] rounded-full" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Left-side decorative orb */}
      <div className="absolute left-[-5%] bottom-0 w-80 h-80 bg-violet-700/10 blur-[100px] rounded-full pointer-events-none" />
      {/* Right-side decorative orb */}
      <div className="absolute right-[-5%] top-0 w-80 h-80 bg-blue-700/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          Free to start — no credit card needed
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-[-0.03em] text-white mb-6 leading-[1.05]">
          Ready to organise{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            your AI?
          </span>
        </h2>

        <p className="text-xl text-white/50 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the smart creators, builders, and professionals who build their AI toolkit clearly, safely,
          and efficiently with BookChef.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="group inline-flex items-center justify-center gap-2 font-semibold bg-indigo-600 text-white px-10 py-4 rounded-full text-base hover:bg-indigo-500 transition-all duration-200 shadow-[0_0_60px_12px_rgba(99,102,241,0.4)] hover:shadow-[0_0_80px_16px_rgba(99,102,241,0.5)] hover:scale-[1.03] active:scale-[0.97]"
          >
            Get Started For Free
            <svg
              className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 text-base font-medium text-white/60 hover:text-white transition-colors px-6 py-4"
          >
            Already have an account? Log in
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-white/25 text-sm">
          {["No credit card", "Free forever plan", "Cancel anytime", "Secure & private"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
