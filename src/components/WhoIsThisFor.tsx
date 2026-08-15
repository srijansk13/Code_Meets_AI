"use client";

import { motion } from "framer-motion";

export default function WhoIsThisFor() {
  return (
    <section id="who-is-this" className="py-10 md:py-24 relative overflow-hidden">
      {/* Background gradients — decorative */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">👀 WHO IS THIS FOR?</h2>
          <p className="text-base sm:text-xl md:text-2xl text-brand-cyan font-bold tracking-tight">Basically... YOU.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
          {/* 1st Year Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-4 md:p-8 border-white/10 hover:border-brand-cyan/30 transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute -right-3 -top-3 text-5xl md:text-8xl opacity-10 group-hover:scale-110 transition-transform duration-500">👶</div>
            <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 flex items-center gap-2 md:gap-3 text-white">
              <span>👶</span> 1st Year?
            </h3>
            <div className="space-y-2 md:space-y-4 text-xs md:text-base text-white/80">
              <p className="italic bg-white/5 p-2 md:p-3 rounded-lg border border-white/5 inline-block text-xs md:text-sm">
                "Bro, I just entered college. What coding?"
              </p>
              <p className="font-bold text-brand-cyan text-base md:text-xl">Exactly. Come. 😭</p>
              <div className="space-y-1 md:space-y-2">
                <p>You don't need to know everything.</p>
                <p>You don't need projects.</p>
                <p>You don't need to know five programming languages.</p>
              </div>
              <p className="font-bold pt-1 text-xs md:text-base">Never written a line of code?<br/>You're still invited.</p>
            </div>
          </motion.div>

          {/* 2nd Year Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-4 md:p-8 border-white/10 hover:border-brand-purple/30 transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute -right-3 -top-3 text-5xl md:text-8xl opacity-10 group-hover:scale-110 transition-transform duration-500">🧑‍💻</div>
            <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 flex items-center gap-2 md:gap-3 text-white">
              <span>🧑‍💻</span> 2nd Year?
            </h3>
            <div className="space-y-2 md:space-y-4 text-xs md:text-base text-white/80">
              <p className="italic bg-white/5 p-2 md:p-3 rounded-lg border border-white/5 inline-block text-xs md:text-sm">
                "I've done some coding."
              </p>
              <p className="font-bold text-brand-purple text-base md:text-xl">Okay then...<br/>Let's see what you've got. 👀</p>
              <div className="space-y-1 md:space-y-2">
                <p>Maybe you've built something.</p>
                <p>Maybe you've only written Hello World.</p>
                <p>Maybe you've spent three hours fixing one tiny error.</p>
              </div>
              <p className="font-bold pt-1 text-white/60 text-xs md:text-base">We know the feeling. 💀</p>
            </div>
          </motion.div>
        </div>

        {/* Smaller Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            { icon: "🤖", text: '"I just want to try AI."', reply: "Yep." },
            { icon: "💻", text: '"I like coding."', reply: "Perfect." },
            { icon: "🤔", text: '"I don\'t know what any of this means."', reply: "Even better." },
            { icon: "😭", text: '"My friend forced me to come."', reply: "You're welcome." }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-3 md:p-5 border-white/5"
            >
              <div className="text-2xl md:text-3xl mb-2">{item.icon}</div>
              <p className="italic text-xs text-white/70 mb-1">{item.text}</p>
              <p className="font-bold text-brand-cyan text-sm md:text-base">{item.reply}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Line */}
        <div className="mt-8 md:mt-16 text-center">
          <div className="inline-block glass-panel px-4 py-3 md:px-8 md:py-6 border-white/20">
            <p className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2">
              You don't have to be good at it.
            </p>
            <p className="text-base sm:text-lg md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
              Just be curious enough to try.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
