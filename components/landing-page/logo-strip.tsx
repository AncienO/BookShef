export function LogoStrip() {
  const tools = [
    { name: "ChatGPT", initial: "C", color: "bg-green-500/20 text-green-400 border-green-500/20" },
    { name: "Midjourney", initial: "M", color: "bg-pink-500/20 text-pink-400 border-pink-500/20" },
    { name: "Notion AI", initial: "N", color: "bg-neutral-500/20 text-neutral-400 border-neutral-500/20" },
    { name: "Claude", initial: "C", color: "bg-amber-500/20 text-amber-400 border-amber-500/20" },
    { name: "Perplexity", initial: "P", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/20" },
    { name: "Copilot", initial: "G", color: "bg-blue-500/20 text-blue-400 border-blue-500/20" },
    { name: "Cursor", initial: "C", color: "bg-sky-500/20 text-sky-400 border-sky-500/20" },
    { name: "RunwayML", initial: "R", color: "bg-violet-500/20 text-violet-400 border-violet-500/20" },
    { name: "Gemini", initial: "G", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/20" },
    { name: "Jasper", initial: "J", color: "bg-rose-500/20 text-rose-400 border-rose-500/20" },
    { name: "Figma AI", initial: "F", color: "bg-purple-500/20 text-purple-400 border-purple-500/20" },
    { name: "Synthesia", initial: "S", color: "bg-teal-500/20 text-teal-400 border-teal-500/20" },
  ];

  const repeated = [...tools, ...tools, ...tools];

  return (
    <section className="relative py-14 border-y border-white/[0.06] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <p className="relative z-10 text-center text-xs font-medium tracking-widest text-white/25 uppercase mb-8">
        Works with every tool in your stack
      </p>

      {/* Scrolling row */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap min-w-max items-center gap-0">
          {repeated.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="mx-6 flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none"
            >
              <div
                className={`w-7 h-7 rounded-lg border flex items-center justify-center text-[11px] font-bold shrink-0 ${tool.color}`}
              >
                {tool.initial}
              </div>
              <span className="text-base font-semibold text-white tracking-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}
