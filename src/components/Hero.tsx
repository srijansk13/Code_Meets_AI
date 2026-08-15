"use client";

import { motion } from "framer-motion";
import { useNotification } from "./NotificationContext";

export default function Hero() {
  const { isInterested, handleInterest, isLoading } = useNotification();
  return (
    <section className="relative min-h-[100dvh] md:min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image — always visible, pointer-events-none */}
      <div
        className="absolute inset-0 z-0 bg-[60%_center] md:bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/assets/code-ai-chaos-hero.jpg')" }}
      />

      {/* Overlay that fades in via CSS — never blocks content even if JS fails */}
      <div className="absolute inset-0 z-[1] animate-hero-overlay pointer-events-none">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#050508]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/80 via-transparent to-[#050508]/80" />
        <div className="absolute inset-0 bg-brand-cyan/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-brand-purple/5 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content — z-10, always above overlays, never starts at opacity:0 */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center mt-4 md:mt-10">
        {/* Title animates in via CSS — fallback is fully visible */}
        <div className="animate-hero-title">
          <h1 className="text-xl sm:text-3xl md:text-6xl lg:text-[clamp(3rem,6vw,7rem)] font-bold tracking-tighter leading-[1.1] mb-3 md:mb-8 text-glow text-white/95">
            CODE MEETS AI + A <br className="hidden md:block" />
            LITTLE BIT OF CHAOS <span className="inline-block animate-bounce-slow">💀</span>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto space-y-2 md:space-y-6">
          <p className="text-sm sm:text-lg md:text-3xl font-medium text-white/90">
            <span className="inline-block animate-hero-tagline-1">
              You bring the curiosity.
            </span>
            <br className="md:hidden" />
            <span className="text-brand-cyan inline-block mt-1 md:mt-0 md:ml-2 animate-hero-tagline-2">
              We'll see what happens. 👀
            </span>
          </p>

          <p className="text-xs sm:text-base md:text-xl text-white/60 leading-relaxed font-mono animate-hero-desc">
            A fun technical event where coding meets AI, things get built, things get broken, and hopefully... things get fixed.
          </p>
        </div>

        <div className="mt-5 md:mt-12 flex justify-center animate-hero-cta">
          <motion.button
            whileTap={!isInterested ? { scale: 0.95 } : {}}
            onClick={handleInterest}
            disabled={isInterested || isLoading}
            className={`group relative inline-flex items-center justify-center px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-lg font-bold rounded-full overflow-hidden transition-all duration-300 ${
              isInterested
                ? "bg-white/10 text-white/50 cursor-not-allowed border border-white/20"
                : "bg-white text-black hover:scale-105"
            }`}
          >
            {!isInterested && (
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
            )}
            <span className={`relative z-10 flex items-center transition-colors duration-300 ${!isInterested && "md:group-hover:text-white"}`}>
              {isInterested ? "[ ✓ I'M IN ]" : "[ I'M IN 🚀 ]"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Decorative Code fragments — desktop only, purely decorative */}
      <div className="absolute left-10 bottom-20 hidden lg:block text-xs font-mono text-white/20 select-none pointer-events-none animate-hero-code">
        <p>import {"{"} Chaos {"}"} from 'event';</p>
        <p>const event = new Chaos();</p>
        <p>event.init();</p>
      </div>

      <div className="absolute right-10 top-1/3 hidden lg:block text-xs font-mono text-white/20 select-none pointer-events-none text-right animate-hero-status">
        <p>// system status</p>
        <p>{"{"}</p>
        <p>  "ai": "online",</p>
        <p>  "code": "compiling...",</p>
        <p>  "errors": 99</p>
        <p>{"}"}</p>
      </div>
    </section>
  );
}
