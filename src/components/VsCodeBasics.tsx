"use client";

import { FilePlus, Edit3, Play, Eye } from "lucide-react";

export default function VsCodeBasics() {
  const steps = [
    { num: "01", title: "CREATE", label: "Create a file 📁", icon: <FilePlus size={20} /> },
    { num: "02", title: "WRITE", label: "Write something ✍️", icon: <Edit3 size={20} /> },
    { num: "03", title: "RUN", label: "Run it ▶️", icon: <Play size={20} /> },
    { num: "04", title: "SEE", label: "See what happens 👀", icon: <Eye size={20} /> },
  ];

  return (
    <section className="py-10 md:py-24 relative overflow-hidden bg-[#020204]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-3 md:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold font-mono tracking-tight text-brand-purple">
            "BRO, I DON'T KNOW VS CODE"
          </h2>

          <div className="text-sm sm:text-base md:text-2xl text-white/80 space-y-1 md:space-y-4">
            <p>That's okay. 😭</p>
            <p className="text-xs sm:text-sm md:text-lg text-white/60">
              Before the event, we'll have tiny 8-second VS Code videos showing you the basics.
            </p>
          </div>
        </div>

        {/* Fake VS Code Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan/20 via-brand-purple/50 to-brand-cyan/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="glass-panel p-4 md:p-6 flex flex-col items-center text-center space-y-2 md:space-y-4 bg-[#0a0a0f] border-white/5 hover:border-brand-cyan/50 hover:bg-[#111116] transition-all duration-300">
                  <div className="text-brand-cyan/50 font-mono text-[10px] md:text-sm font-bold group-hover:text-brand-cyan transition-colors">
                    {step.num} {step.title}
                  </div>

                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-cyan/20 group-hover:text-brand-cyan transition-all duration-300">
                    {step.icon}
                  </div>

                  <div className="font-bold text-sm md:text-lg text-white/90">
                    {step.label}
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 md:mt-16 text-center max-w-2xl mx-auto space-y-2 md:space-y-4 text-sm sm:text-base md:text-lg text-white/80">
          <p className="font-bold text-base md:text-xl text-brand-cyan">That's it.</p>
          <p>No 2-hour tutorial.</p>
          <p>No "install this, configure that, sacrifice your firstborn..." 💀</p>
          <p className="text-base md:text-xl font-bold pt-2 md:pt-4 text-white">
            Just the basics you need to get started. 👀
          </p>
        </div>

      </div>
    </section>
  );
}
