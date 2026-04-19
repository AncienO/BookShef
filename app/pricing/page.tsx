import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";
import { CtaBanner } from "@/components/landing-page/cta-banner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — BookChef",
  description: "Simple pricing. No surprises. Start organizing your AI toolkit for free today.",
};

const freePerks = [
  "Unlimited AI tools",
  "Unlimited categories",
  "Instant search & launch",
  "Per-tool usage notes",
  "Drag-and-drop organisation",
  "Community support",
];

const proPerks = [
  "Secure toolkit sharing",
  "Role-based access control",
  "Advanced tag filtering",
  "Team collaboration notes",
  "Export API capabilities",
];

const faqs = [
  {
    question: "Do I need a credit card to sign up?",
    answer: "No. BookChef 1.0 is completely free for personal use. You don't need a credit card to create an account and start organizing your toolkit.",
  },
  {
    question: "When will the paid plans be available?",
    answer: "We are currently beta testing our Pro and Team tiers with select users. We expect to launch them fully later this year with features geared toward collaboration and advanced analytics.",
  },
  {
    question: "Is there a limit on how many tools I can add?",
    answer: "Not currently. During our 1.0 phase, you can add an unlimited number of AI tools and define as many custom categories as you need.",
  },
  {
    question: "Can I export my data if I want to leave?",
    answer: "Yes, absolutely. We believe you own your data. Our upcoming dashboard update will include a one-click JSON/CSV export feature for your entire tool library.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden pt-16">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-white mb-6">
              Simple pricing. <br className="hidden md:block" />
              <span className="text-white/70">No surprises.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Start building your personal AI toolkit for free. Scale up to our Pro tier when you need to collaborate.
            </p>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="relative pb-24 md:pb-32 z-10">
          <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Free Tier Card */}
            <div className="relative group w-full">
              {/* Animated outer glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 rounded-[2rem] opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 rounded-[2rem] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative rounded-[2rem] bg-[#111] border border-white/10 p-8 md:p-10 flex flex-col shadow-2xl h-full">
                <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Free Forever
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Personal Toolkit</h3>
                <p className="text-white/40 text-sm mb-8 font-light">Everything you need to manage your personal AI stack.</p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-bold text-white tracking-tight">$0</span>
                  <div className="flex flex-col text-white/40 text-sm leading-tight">
                    <span>/ month</span>
                    <span>forever</span>
                  </div>
                </div>

                {/* Feature list */}
                <ul className="space-y-4 mb-10 flex-1">
                  {freePerks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-white/75 text-sm">
                      <span className="w-5 h-5 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </Link>
                <p className="text-center text-white/30 text-xs mt-4">No credit card required</p>
              </div>
            </div>

            {/* Paid Tier Card (Coming Soon) */}
            <div className="relative w-full h-full opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700 cursor-not-allowed">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 md:p-10 flex flex-col shadow-2xl backdrop-blur-sm overflow-hidden h-full">

                {/* Overlay diagonal line/branding */}
                <div className="absolute top-8 right-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/10 text-xs font-semibold">
                  Coming Soon
                </div>

                <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-50" />
                  Pro & Teams
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Collaborative Toolkit</h3>
                <p className="text-white/40 text-sm mb-8 font-light">For growing teams and agencies managing multiple tools.</p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-bold text-white/40 tracking-tight">TBD</span>
                </div>

                {/* Feature list */}
                <ul className="space-y-4 mb-10 flex-1">
                  {proPerks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-white/50 text-sm">
                      <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  disabled
                  className="w-full py-4 rounded-xl bg-white/5 text-white/40 font-semibold text-sm border border-white/10 cursor-not-allowed"
                >
                  Join Waitlist (Coming Soon)
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="relative py-20 pb-32 border-t border-white/5 bg-[#080808]">
          <div className="w-full max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-white hover:text-indigo-400 transition-colors">
                    <span>{faq.question}</span>
                    <span className="relative flex shrink-0 ml-4 items-center justify-center w-5 h-5">
                      <svg className="absolute w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
                      </svg>
                      <svg className="absolute w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-white/50 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
