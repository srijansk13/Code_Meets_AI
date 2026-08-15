"use client";

import { motion } from "framer-motion";

export default function SideEffects() {
  const effects = [
    { text: "Opening VS Code for absolutely no reason", color: "from-blue-500/20 to-blue-600/20", rotate: -2 },
    { text: "Asking AI to fix your AI-generated code", color: "from-purple-500/20 to-pink-500/20", rotate: 1 },
    { text: 'Saying "it was working 2 minutes ago"', color: "from-red-500/20 to-orange-500/20", rotate: 3 },
    { text: "Making your first website", color: "from-green-500/20 to-emerald-500/20", rotate: -1 },
    { text: "Getting emotionally attached to your code", color: "from-yellow-500/20 to-amber-500/20", rotate: -3 },
    { text: "Debugging at unnecessary hours", color: "from-indigo-500/20 to-blue-500/20", rotate: 2 },
    { text: 'Saying "wait... I actually understand this"', color: "from-brand-cyan/20 to-cyan-500/20", rotate: 0 },
  ];

  return (
    <section className="py-10 md:py-24 relative overflow-hidden">
      {/* Background noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* Heading — immediately visible */}
        <div className="mb-8 md:mb-16 inline-block">
          <div className="relative">
            <h2 className="text-lg sm:text-2xl md:text-5xl font-bold bg-white text-black px-3 py-1.5 md:px-6 md:py-3 rounded-lg rotate-[-2deg] shadow-[3px_3px_0px_#8b5cf6] md:shadow-[5px_5px_0px_#8b5cf6]">
              SIDE EFFECTS MAY INCLUDE:
            </h2>
            <div className="absolute -inset-2 border-2 border-dashed border-brand-cyan/50 rounded-xl pointer-events-none" />
          </div>
        </div>

        {/* Cards — immediately visible with their rotation, whileHover for interactivity */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {effects.map((effect, index) => (
            <motion.div
              key={index}
              style={{ rotate: effect.rotate }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                zIndex: 20,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
              className={`glass-panel px-3 py-2 md:px-6 md:py-4 border-white/10 bg-gradient-to-r ${effect.color} shadow-lg backdrop-blur-md cursor-default`}
            >
              <span className="text-xs sm:text-sm md:text-xl font-bold text-white drop-shadow-md">
                {effect.text}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
