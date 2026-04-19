const testimonials = [
  {
    quote:
      "Before BookChef, I had over 50 tabs of AI generators and prompts open. Now it's my single source of truth. I can't imagine going back.",
    author: "Alex Morgan",
    role: "Creative Director",
    initials: "AM",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    quote:
      "The cleanest way to manage our team's AI subscriptions. We know exactly what tools we're paying for and why. It's already saved us hundreds.",
    author: "Sarah Chen",
    role: "Product Manager",
    initials: "SC",
    color: "from-violet-600 to-violet-800",
  },
  {
    quote:
      "Minimal, fast, and stays out of the way. It's exactly the toolkit manager I've been looking for. My workflow has never been tighter.",
    author: "David Ross",
    role: "Senior Software Engineer",
    initials: "DR",
    color: "from-blue-600 to-blue-800",
  },
];

const useCases = [
  {
    emoji: "✍️",
    title: "Content Creators",
    body: "Juggling ChatGPT, Jasper, and Midjourney? BookChef gives your creative stack a home.",
  },
  {
    emoji: "💻",
    title: "Developers",
    body: "From Copilot to Cursor, keep your dev AI tools organised and your flow uninterrupted.",
  },
  {
    emoji: "📈",
    title: "Product Teams",
    body: "Track every AI subscription across your org. Know who uses what and cut the waste.",
  },
];

export function Testimonials() {
  return (
    <section id="use-cases" className="relative py-28 md:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* ── Testimonials ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-400 text-xs font-medium mb-6 tracking-wide uppercase">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-4">
            Built for power users
          </h2>
          <p className="text-white/50 font-light text-lg max-w-xl mx-auto">
            See how professionals are organising their AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/75 text-[15px] leading-relaxed font-light mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Use Cases ── */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Who is BookChef for?
          </h3>
          <p className="text-white/50 font-light">Anyone who runs more than one AI tool. Which is everyone.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {useCases.map(({ emoji, title, body }) => (
            <div
              key={title}
              className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] transition-colors text-center"
            >
              <div className="text-4xl mb-5">{emoji}</div>
              <h4 className="text-white font-semibold mb-2.5 tracking-tight">{title}</h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
