"use client";

import { motion } from "framer-motion";

import {
  PromptEngineeringIcon, GenerativeAIIcon, CodingIcon, WebDevelopmentIcon,
  DebuggingIcon, AIAssistedCodingIcon, ProblemSolvingIcon, BuildingWithAIIcon,
  TeamworkIcon, PresentingIdeasIcon, IconGradients
} from './icons/PremiumIcons';

export default function ThingsYoullPlayWith() {
  const cards = [
    { icon: <PromptEngineeringIcon />, title: "Prompt Engineering" },
    { icon: <GenerativeAIIcon />, title: "Generative AI" },
    { icon: <CodingIcon />, title: "Coding" },
    { icon: <WebDevelopmentIcon />, title: "Web Development" },
    { icon: <DebuggingIcon />, title: "Debugging" },
    { icon: <AIAssistedCodingIcon />, title: "AI-Assisted Coding" },
    { icon: <ProblemSolvingIcon />, title: "Problem Solving" },
    { icon: <BuildingWithAIIcon />, title: "Building with AI" },
    { icon: <TeamworkIcon />, title: "Teamwork" },
    { icon: <PresentingIdeasIcon />, title: "Presenting Ideas" },
  ];

  return (
    <section id="things-to-play" className="py-10 md:py-24 relative">
      <IconGradients />
      <div className="absolute inset-0 bg-brand-purple/5 opacity-50 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header — immediately visible, no opacity:0 */}
        <div className="mb-8 md:mb-16 text-center max-w-3xl mx-auto space-y-3 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-glow px-4">
            THINGS YOU'LL PLAY WITH
          </h2>

          <div className="space-y-2 md:space-y-4 text-sm sm:text-base md:text-xl text-white/80 px-4">
            <p>
              Not another lecture where someone says: <br />
              <span className="italic text-white/60">"Today we are going to learn the theoretical aspects of..."</span>
            </p>
            <p className="text-xl md:text-3xl font-bold text-red-500 animate-pulse">NO. 💀</p>
            <p>You'll get to explore:</p>
          </div>
        </div>

        {/* Cards grid — immediately visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              className="glass-card group relative p-3.5 md:p-6 flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/0 to-brand-purple/0 group-hover:from-brand-cyan/10 group-hover:to-brand-purple/10 transition-colors duration-500" />

              <div className="w-10 h-10 md:w-16 md:h-16 mb-1 md:mb-2 flex items-center justify-center group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:rotate-[2deg] transition-all duration-500 ease-out">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  {card.icon}
                </motion.div>
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
