import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCarousel from "@/components/TeamCarousel";

export default function TeamPage() {
  return (
    <main className="relative bg-[#050508] min-h-screen selection:bg-brand-cyan/30 selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-8 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center md:text-left md:px-12 animate-hero-fadeUp">
          <p className="text-brand-cyan font-mono text-xs md:text-sm tracking-widest uppercase mb-2 animate-hero-tagline-1">
            The people behind the chaos
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 animate-hero-title">
            MEET THE <span className="text-glow">CORE TEAM</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl animate-hero-desc">
            The minds behind CODE MEETS AI.
          </p>
        </div>

        <div className="animate-hero-fadeUp" style={{ animationDelay: "0.2s" }}>
          <TeamCarousel />
        </div>
      </div>

      <Footer />
    </main>
  );
}
