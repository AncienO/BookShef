import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BookChef — Your AI tools. One place. Total clarity.",
  description:
    "BookChef is the smart toolkit manager for people who take AI seriously. Organise every tool, define every purpose, and never lose track again.",
  keywords: ["AI tools", "toolkit manager", "AI productivity", "tool organiser", "bookchef"],
  openGraph: {
    title: "BookChef — Your AI tools. One place. Total clarity.",
    description:
      "BookChef is the smart toolkit manager for people who take AI seriously.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
