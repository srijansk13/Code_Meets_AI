import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsThis from "@/components/WhatIsThis";
import ThingsYoullPlayWith from "@/components/ThingsYoullPlayWith";
import VsCodeBasics from "@/components/VsCodeBasics";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import SideEffects from "@/components/SideEffects";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050508] min-h-screen selection:bg-brand-cyan/30 selection:text-white">
      <Navbar />
      <Hero />
      <WhatIsThis />
      <ThingsYoullPlayWith />
      <VsCodeBasics />
      <WhoIsThisFor />
      <SideEffects />
      <FinalCTA />
      <Footer />
    </main>
  );
}
