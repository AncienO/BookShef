import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 pt-28 pb-16">
        <div className="w-full max-w-md relative z-10">
          {/* subtle background glow for the elevated feeling */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
