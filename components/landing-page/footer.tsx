import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle corner glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Upper section */}
        <div className="py-16 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-indigo-600 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:scale-105 transition-transform">
                  B
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">BookChef</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              The smart toolkit manager for people who take AI seriously. One place. Total clarity.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  label: "Twitter / X",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.848L1.254 2.25H8.08l4.261 5.634 5.904-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <h4 className="text-white text-sm font-semibold tracking-tight mb-1">{category}</h4>
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-white/40 hover:text-white/75 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Lower strip */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} BookChef. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built for AI-first humans
            <span className="text-indigo-500">♦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
