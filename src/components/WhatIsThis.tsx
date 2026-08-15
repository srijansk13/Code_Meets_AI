"use client";

import { motion } from "framer-motion";
import { Terminal, Code2 } from "lucide-react";

export default function WhatIsThis() {
  return (
    <section id="what-is-this" className="py-10 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div>
              <h2 className="text-[10px] md:text-sm lg:text-base font-mono text-brand-cyan tracking-wider mb-2 md:mb-3">
                WHAT IS THIS ACTUALLY?
              </h2>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight">
                Okay... but what <br /> even is this?
                <span className="block text-white/50 mt-1 text-base sm:text-xl md:text-3xl">Fair question.</span>
              </p>
            </div>

            <div className="space-y-3 md:space-y-6 text-sm md:text-lg lg:text-xl text-white/80">
              <p>
                It's an event where you get to try out coding, Generative AI, build things, solve problems and have a little fun while doing it.
              </p>

              <div className="glass-panel p-3 md:p-6 border-brand-cyan/20 bg-brand-cyan/5">
                <p className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">No long lectures.</p>
                <p className="font-bold text-white text-sm md:text-base">No sitting there pretending you understood slide 47.</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:gap-3 font-mono text-brand-purple text-xs md:text-base">
                <span className="px-2 py-1 md:px-3 bg-brand-purple/10 rounded-md">Just try</span>
                <span>→</span>
                <span className="px-2 py-1 md:px-3 bg-brand-purple/10 rounded-md">mess around</span>
                <span>→</span>
                <span className="px-2 py-1 md:px-3 bg-brand-purple/10 rounded-md">figure it out</span>
                <span>→</span>
                <span className="px-2 py-1 md:px-3 bg-brand-purple/10 rounded-md">repeat.</span>
              </div>

              <p className="pt-2 text-base md:text-xl font-medium">
                And who knows... <br />
                <span className="text-brand-cyan">You might actually enjoy it. 👀</span>
              </p>
            </div>
          </div>

          {/* Fake Terminal Visual */}
          <div className="relative w-full max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl max-w-full">

              {/* Terminal Header */}
              <div className="flex items-center px-3 py-2 md:px-4 md:py-3 bg-white/5 border-b border-white/10">
                <div className="flex space-x-1.5 md:space-x-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center space-x-2 text-[10px] md:text-xs font-mono text-white/40">
                  <Terminal size={12} />
                  <span>bash — node chaos.js</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-3 md:p-6 font-mono text-[11px] sm:text-xs md:text-base space-y-2 md:space-y-4 overflow-x-auto whitespace-pre">
                <div className="text-white/60">
                  <span className="text-brand-cyan">$</span> npm run chaos
                </div>
                <div className="text-brand-purple">{">"} building...</div>
                <div className="text-white/80">{">"} AI thinking...</div>
                <div className="text-red-400 font-bold">{">"} something broke 💀</div>
                <div className="text-yellow-400">{">"} debugging...</div>
                <div className="text-green-400">✓ somehow works</div>
                <div className="flex items-center space-x-2 text-white/50">
                  <span>{">"} repeat</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1.5 h-4 md:w-2 md:h-5 bg-brand-cyan inline-block"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none">
              <Code2 size={120} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
