import type { Metadata } from "next";
import { Navbar } from "@/components/landing-page/navbar";
import { Hero } from "@/components/landing-page/hero";
import { LogoStrip } from "@/components/landing-page/logo-strip";
import { Features } from "@/components/landing-page/features";
import { FeatureHighlight } from "@/components/landing-page/feature-highlight";
import { Testimonials } from "@/components/landing-page/testimonials";
import { Pricing } from "@/components/landing-page/pricing";
import { CtaBanner } from "@/components/landing-page/cta-banner";
import { Footer } from "@/components/landing-page/footer";

export const metadata: Metadata = {
  title: "BookChef — Your AI tools. One place. Total clarity.",
  description:
    "BookChef is the smart toolkit manager for people who take AI seriously. Organise every tool, define every purpose, and never lose track again.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <FeatureHighlight />
        <Testimonials />
        <Pricing />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
