import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";
import { CtaBanner } from "@/components/landing-page/cta-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — BookChef",
  description: "Explore the powerful features built into BookChef to help you seamlessly organize and manage your AI toolkit.",
};

const featuresMap = [
  {
    title: "Tool Entry",
    description: "Instantly log new AI tools you discover. Our streamlined entry process lets you capture the URL, category, and core functionality in seconds.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
      </svg>
    ),
    color: "indigo"
  },
  {
    title: "Purpose Tagging",
    description: "Stop wondering what a tool is for. Tag each addition with its exact purpose—from 'blog writing' to 'vector art'—to contextually group capabilities.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    color: "violet"
  },
  {
    title: "Custom Organisation",
    description: "Build a hierarchy that makes sense to you. Create custom categories, drag-and-drop tools into folders, and craft your personalised workspace.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    color: "cyan"
  },
  {
    title: "Tool Notes",
    description: "Store your best prompts, usage tips, or API keys directly alongside the tool. You won't have to keep a scattered document of AI commands anymore.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: "green"
  },
  {
    title: "Search & Filter",
    description: "Need a specific capability? A fast, global search and intuitive filters help you pinpoint exactly the tool you need before your train of thought derails.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "pink"
  },
  {
    title: "Dashboard View",
    description: "Your operational command center. Get a bird’s-eye view of your entire AI arsenal, presented in a clean, modern, noise-free interface.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    color: "amber"
  },
  {
    title: "Edit & Delete",
    description: "Keep your workspace lean. When an AI tool becomes obsolete or you find a better alternative, easily edit details or prune it from your shelf instantly.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    color: "red"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden pt-16">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-medium mb-8">
              Platform Features
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-8">
              Everything you need to <br className="hidden md:block" />
              <span className="text-white/70">manage your AI toolkit.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              From instant lookups to deep contextual tagging, BookChef provides a friction-free operating environment for your tools.
            </p>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 md:gap-40">
            {featuresMap.map((feature, index) => {
              const isEven = index % 2 === 0;

              // Color mappings for decorative UI Elements
              const glowColors: Record<string, string> = {
                indigo: "bg-indigo-500/20",
                violet: "bg-violet-500/20",
                cyan: "bg-cyan-500/20",
                green: "bg-green-500/20",
                pink: "bg-pink-500/20",
                amber: "bg-amber-500/20",
                red: "bg-red-500/20",
              };

              const iconColors: Record<string, string> = {
                indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
                violet: "text-violet-400 bg-violet-400/10 border-violet-400/20",
                cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
                green: "text-green-400 bg-green-400/10 border-green-400/20",
                pink: "text-pink-400 bg-pink-400/10 border-pink-400/20",
                amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
                red: "text-red-400 bg-red-400/10 border-red-400/20",
              };

              return (
                <div
                  key={feature.title}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${iconColors[feature.color]}`}>
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Placeholder Graphic */}
                  <div className="flex-1 w-full max-w-xl">
                    <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#111] border border-white/10 overflow-hidden shadow-2xl group">
                      {/* Sub-glow */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] ${glowColors[feature.color]} blur-[80px] rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-60 opacity-30`} />

                      {/* Abstract geometric UI mock */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full h-full rounded-xl bg-white/5 border border-white/5 flex flex-col p-4 gap-4 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                          {/* Fake Header */}
                          <div className="flex gap-2 items-center pb-3 border-b border-white/5">
                            <div className={`w-3 h-3 rounded-full bg-white/10`} />
                            <div className="h-2 rounded bg-white/10 w-24" />
                          </div>

                          {/* Fake Content Layer 1 */}
                          <div className="flex-1 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center" />

                          {/* Fake Content Layer 2 Grid */}
                          <div className="h-1/3 grid grid-cols-3 gap-3">
                            <div className="rounded-lg bg-white/5 border border-white/5" />
                            <div className="col-span-2 rounded-lg bg-white/5 border border-white/5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
