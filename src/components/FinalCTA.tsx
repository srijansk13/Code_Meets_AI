"use client";

import { motion } from "framer-motion";
import { useNotification } from "./NotificationContext";

export default function FinalCTA() {
  const { isInterested, handleInterest, isLoading } = useNotification();
  return (
    <section id="cta" className="py-10 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[70dvh] md:min-h-screen">
      {/* Background Neural Network / Glow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020204]" />
        
        {/* Large central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-brand-cyan/20 blur-[120px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-purple/20 blur-[120px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <div className="space-y-3 md:space-y-8">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-8">So... you coming? 👀</h2>
          
          <div className="space-y-1.5 md:space-y-4 text-sm sm:text-lg text-white/70 font-medium">
            <p>Maybe you know coding.</p>
            <p>Maybe you don't.</p>
            <p>Maybe you're here for AI.</p>
            <p>Maybe your friend dragged you here.</p>
            <p>Maybe you just saw the poster and thought: <br/> <span className="italic text-white">“Eh... why not?”</span></p>
          </div>

          <div className="pt-3 md:pt-8 space-y-0.5 md:space-y-2 text-base sm:text-xl md:text-2xl font-bold text-brand-cyan">
            <p>Whatever the reason...</p>
            <p className="text-lg sm:text-2xl md:text-3xl text-white">Come. Try it.</p>
            <p>You might surprise yourself.</p>
          </div>

          <div className="pt-6 md:pt-16 pb-3 md:pb-8">
            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-glow">
              CODE + AI + A LITTLE <br className="hidden md:block" />
              BIT OF CHAOS 💀
            </h1>
          </div>

          <p className="text-sm sm:text-xl md:text-2xl font-bold text-brand-purple mb-4 md:mb-12">See you there. 👀</p>

          <motion.div
            whileHover={!isInterested ? { scale: 1.05 } : {}}
            whileTap={!isInterested ? { scale: 0.95 } : {}}
            className="inline-block"
          >
            <button
              onClick={handleInterest}
              disabled={isInterested || isLoading}
              className={`group relative inline-flex items-center justify-center px-5 py-2.5 md:px-10 md:py-5 text-sm md:text-2xl font-bold rounded-full overflow-hidden transition-all duration-300 ${
                isInterested
                  ? "bg-white/10 text-white/50 cursor-not-allowed border border-white/20"
                  : "bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.8)]"
              }`}
            >
              {!isInterested && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan bg-[length:200%_auto] animate-gradient opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${!isInterested && "md:group-hover:text-white"}`}>
                {isInterested ? "[ ✓ LET'S DO THIS ]" : "[ LET'S DO THIS 🚀 ]"}
              </span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
