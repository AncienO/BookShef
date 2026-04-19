import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";
import { CtaBanner } from "@/components/landing-page/cta-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — BookChef",
  description: "Discover how freelancers, productivity professionals, content creators, and small teams use BookChef to manage their AI tools.",
};

const useCases = [
  {
    title: "Freelancers",
    description: "Manage multiple AI tools across different client projects without losing track of your subscriptions and prompts. Keep your workflow focused, lean, and highly efficient.",
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-indigo-600/20 to-indigo-800/10",
    border: "border-indigo-500/20",
    dot: "bg-indigo-400"
  },
  {
    title: "Productivity Professionals",
    description: "Structure your personal and professional AI toolkit. Tag tools by purpose and keep important notes on their context so you always pull the right tool for the job.",
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "from-violet-600/20 to-violet-800/10",
    border: "border-violet-500/20",
    dot: "bg-violet-400"
  },
  {
    title: "Content Creators",
    description: "Organise your imaging, video generation, and copywriting tools. Quickly index them by format and tag their optimal use cases effortlessly in one smooth dashboard.",
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    color: "from-pink-600/20 to-pink-800/10",
    border: "border-pink-500/20",
    dot: "bg-pink-400"
  },
  {
    title: "Small Teams",
    description: "Provide clarity to your team's AI tooling overhead. Share standardized tool setups, map out who uses what, and effectively manage your collective AI resources.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400"
  }
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden pt-16">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-violet-900/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-white max-w-4xl mx-auto leading-tight mb-6">
              Who BookChef is{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                built for
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you’re working solo or aligning a small team, BookChef brings clarity to your evolving stack of AI tools.
            </p>
          </div>
        </section>

        {/* Use Cases Cards */}
        <section className="relative pb-28 md:pb-40 z-10">
          <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className={`relative rounded-3xl bg-gradient-to-br ${useCase.color} border ${useCase.border} p-8 md:p-10 flex flex-col group overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300" />

                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                    {useCase.icon}
                  </div>
                  <div className={`w-3 h-3 rounded-full ${useCase.dot} opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.3)]`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {useCase.title}
                </h3>

                <p className="text-white/60 leading-relaxed font-light">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
