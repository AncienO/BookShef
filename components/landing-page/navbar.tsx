"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/8 shadow-2xl"
          : "bg-transparent"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-indigo-600 rounded-lg opacity-80 blur-sm group-hover:opacity-100 transition-opacity" />
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform">
              B
            </div>
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight">BookChef</span>
        </Link>

        {/* Center Links — Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Features", href: "/features" },
            { label: "Use Cases", href: "/use-cases" },
            { label: "Pricing", href: "/pricing" },
          ].map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`relative px-4 py-2 text-[13px] font-medium transition-colors rounded-lg group ${isActive
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:block text-[13px] font-medium text-white/60 hover:text-white transition-colors px-3 py-2"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-[13px] font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
              />
              <span
                className={`h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {[
            { label: "Features", href: "/features" },
            { label: "Use Cases", href: "/use-cases" },
            { label: "Pricing", href: "/pricing" },
          ].map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 text-sm rounded-lg transition-colors ${isActive
                    ? "text-white bg-white/10 font-semibold border-l-2 border-indigo-500"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/login"
              className="px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold bg-white text-black rounded-lg text-center hover:bg-neutral-200 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
