"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const tutorials = [
  {
    step: "01",
    title: "OPEN / ATTACH FILE",
    description: "Open an existing file and start working in VS Code.",
    video: "/videos/01-vscode-open-file.mp4",
  },
  {
    step: "02",
    title: "FILE EXPLORER",
    description: "Navigate your project files using the Explorer sidebar.",
    video: "/videos/03-vscode-file-explorer.mp4",
  },
  {
    step: "03",
    title: "NEW FILE",
    description: "Create brand-new files inside your project directory.",
    video: "/videos/04-vscode-new-file.mp4",
  },
  {
    step: "04",
    title: "CSS / STYLE FILE",
    description: "Write styles and link them to make your pages look good.",
    video: "/videos/06-vscode-css.mp4",
  },
  {
    step: "05",
    title: "JAVASCRIPT FILE",
    description: "Add interactivity and logic to your web pages.",
    video: "/videos/07-vscode-javascript.mp4",
  },
  {
    step: "06",
    title: "TERMINAL",
    description: "Run commands and install packages from the built-in terminal.",
    video: "/videos/09-vscode-terminal.mp4",
  },
  {
    step: "07",
    title: "RUN BUTTON",
    description: "Execute your code instantly using the Run button.",
    video: "/videos/10-vscode-run-button.mp4",
  },
  {
    step: "08",
    title: "OUTPUT",
    description: "Check the results, logs, and errors from your program.",
    video: "/videos/11-vscode-output.mp4",
  },
  {
    step: "09",
    title: "HOW TO RUN",
    description: "Learn the different ways to run HTML, JS, and Java files.",
    video: "/videos/12-vscode-how-to-run.mp4",
  },
];

// ─── AnimatePresence variants (direction-aware) ───────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? 260 : -260,
    opacity: 0,
    rotate: dir >= 0 ? 5 : -5,
    scale: 0.94,
  }),
  center: { x: 0, opacity: 1, rotate: 0, scale: 1 },
  exit: (dir: number) => ({
    x: dir >= 0 ? -260 : 260,
    opacity: 0,
    rotate: dir >= 0 ? -5 : 5,
    scale: 0.94,
  }),
};

const spring = {
  type: "spring" as const,
  stiffness: 500,
  damping: 32,
  mass: 0.6,
};

// ─── Re-usable card face ──────────────────────────────────────────────────────
// `interactive` controls whether video controls respond to pointer events.
function CardFace({
  tutorial,
  interactive = true,
}: {
  tutorial: (typeof tutorials)[0];
  interactive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-brand-cyan/25 bg-[#0d1117] overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.08)]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg md:text-xl font-bold text-brand-cyan leading-none">
            {tutorial.step}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-brand-cyan/30 to-transparent" />
        </div>
        <h3 className="font-bold text-sm md:text-base text-white/90 leading-snug">
          {tutorial.title}
        </h3>
        <p className="text-[11px] md:text-xs text-white/45 leading-snug">
          {tutorial.description}
        </p>
      </div>
      {/* Video */}
      <div className="w-full aspect-video bg-black border-t border-white/5">
        <video
          key={tutorial.video}
          src={tutorial.video}
          controls={interactive}
          playsInline
          preload="metadata"
          muted
          className="w-full h-full object-contain"
          onPointerDown={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function VsCodeBasics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = tutorials[activeIndex];
  const prev = activeIndex > 0 ? tutorials[activeIndex - 1] : null;
  const next = activeIndex < tutorials.length - 1 ? tutorials[activeIndex + 1] : null;

  // Mobile ghost cards (stack visual) — only shown behind when more cards remain
  const ghostCount = Math.min(2, tutorials.length - 1 - activeIndex);

  const goTo = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= tutorials.length) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    if ((info.offset.x < -20 || info.velocity.x < -200) && next) goTo(activeIndex + 1);
    else if ((info.offset.x > 20 || info.velocity.x > 200) && prev) goTo(activeIndex - 1);
  };

  return (
    <section className="py-10 md:py-24 relative overflow-hidden bg-[#020204]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-3 md:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold font-mono tracking-tight text-brand-purple">
            &quot;BRO, I DON&apos;T KNOW VS CODE&quot;
          </h2>
          <div className="text-sm sm:text-base md:text-2xl text-white/80 space-y-1 md:space-y-4">
            <p>That&apos;s okay. 😭</p>
            <p className="text-xs sm:text-sm md:text-lg text-white/60">
              Before the event, we&apos;ll have tiny 8-second VS Code videos showing you the basics.
            </p>
          </div>
        </div>

        {/* ── Flashcard deck ── */}
        <div className="flex flex-col items-center gap-5 md:gap-7">

          {/* ────────────────────────────────────────────────────────────────
              DESKTOP layout (md+):
              Three-column flex — side slots show partial prev/next cards.
              The outer wrapper clips overflow on x so side cards don't spill.
          ──────────────────────────────────────────────────────────────── */}
          <div className="hidden md:block w-full max-w-5xl">
            <div className="flex items-stretch gap-0">

              {/* ── Previous card peek (left) ── */}
              <button
                onClick={() => goTo(activeIndex - 1)}
                disabled={!prev}
                aria-label={prev ? `Go to previous: ${prev.title}` : undefined}
                className={`
                  relative w-[170px] flex-shrink-0 overflow-hidden
                  transition-opacity duration-300
                  ${prev ? "opacity-40 hover:opacity-65 cursor-pointer" : "opacity-0 pointer-events-none"}
                `}
              >
                {prev && (
                  /* Position card so its LEFT edge aligns with the slot's left edge.
                     The slot (170px wide, overflow-hidden) crops the card to show
                     the leftmost 170px — step number, title, and left video edge. */
                  <div className="absolute left-0 top-0 w-[420px] scale-95 origin-top-left pointer-events-none">
                    <CardFace tutorial={prev} interactive={false} />
                  </div>
                )}
              </button>

              {/* ── Active card (center, larger on desktop) ── */}
              <div className="flex-1 min-w-0 px-4 relative">
                {/* Ghost cards — peeking behind (desktop) */}
                {Array.from({ length: Math.min(1, ghostCount) }).map((_, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className="absolute inset-x-4 top-0 rounded-2xl border border-white/5 bg-[#0b0b10]"
                    style={{
                      transform: `translate(${(i + 1) * 5}px, ${(i + 1) * 7}px) scale(${1 - (i + 1) * 0.02})`,
                      zIndex: 20 - i * 5,
                      transformOrigin: "center top",
                      bottom: `${-(i + 1) * 7}px`,
                    }}
                  />
                ))}

                <div style={{ position: "relative", zIndex: 40 }}>
                  <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ ...spring, opacity: { duration: 0.18 } }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.35}
                      onDragEnd={handleDragEnd}
                      whileDrag={{ scale: 0.99, rotate: 1 }}
                      style={{
                        cursor: "grab",
                        touchAction: "pan-y",
                        userSelect: "none",
                      }}
                      whileTap={{ cursor: "grabbing" }}
                    >
                      <CardFace tutorial={current} interactive />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* ── Next card peek (right) ── */}
              <button
                onClick={() => goTo(activeIndex + 1)}
                disabled={!next}
                aria-label={next ? `Go to next: ${next.title}` : undefined}
                className={`
                  relative w-[170px] flex-shrink-0 overflow-hidden
                  transition-opacity duration-300
                  ${next ? "opacity-40 hover:opacity-65 cursor-pointer" : "opacity-0 pointer-events-none"}
                `}
              >
                {next && (
                  /* Same: show leftmost 170px of the next card. */
                  <div className="absolute left-0 top-0 w-[420px] scale-95 origin-top-left pointer-events-none">
                    <CardFace tutorial={next} interactive={false} />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              MOBILE layout (< md):
              Narrow portrait card with ghost stack behind + drag to swipe.
          ──────────────────────────────────────────────────────────────── */}
          <div className="md:hidden flex flex-col items-center w-full gap-5">
            <div
              className="relative w-[min(320px,88vw)]"
              style={{ paddingBottom: `${ghostCount * 8}px` }}
            >
              {/* Ghost / stacked cards */}
              {Array.from({ length: ghostCount }).map((_, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl border border-white/5 bg-[#0b0b10]"
                  style={{
                    transform: `translate(${(i + 1) * 5}px, ${(i + 1) * 8}px) scale(${1 - (i + 1) * 0.02})`,
                    zIndex: 20 - i * 5,
                    transformOrigin: "center top",
                  }}
                />
              ))}

              <div style={{ position: "relative", zIndex: 40 }}>
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ ...spring, opacity: { duration: 0.18 } }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.45}
                    onDragEnd={handleDragEnd}
                    whileDrag={{ scale: 0.98, rotate: 2 }}
                    style={{
                      cursor: "grab",
                      touchAction: "pan-y",
                      userSelect: "none",
                    }}
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <CardFace tutorial={current} interactive />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── Progress dots ── (shared, both layouts) */}
          <div className="flex items-center gap-1.5">
            {tutorials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to tutorial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-5 h-1.5 bg-brand-cyan"
                    : i < activeIndex
                    ? "w-1.5 h-1.5 bg-brand-cyan/30 hover:bg-brand-cyan/50"
                    : "w-1.5 h-1.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* ── Navigation buttons ── (shared) */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={!prev}
              aria-label="Previous tutorial"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                border border-white/10
                text-white/50 hover:text-white hover:border-brand-cyan/50
                disabled:opacity-20 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronLeft size={18} />
            </button>

            <span className="font-mono text-[10px] sm:text-xs text-white/25 tracking-widest select-none">
              {current.step} / 09
            </span>

            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={!next}
              aria-label="Next tutorial"
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                border border-white/10
                text-white/50 hover:text-white hover:border-brand-cyan/50
                disabled:opacity-20 disabled:cursor-not-allowed
                transition-all duration-200
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Bottom text ── */}
        <div className="mt-8 md:mt-16 text-center max-w-2xl mx-auto space-y-2 md:space-y-4 text-sm sm:text-base md:text-lg text-white/80">
          <p className="font-bold text-base md:text-xl text-brand-cyan">That&apos;s it.</p>
          <p>No 2-hour tutorial.</p>
          <p>No &quot;install this, configure that, sacrifice your firstborn...&quot; 💀</p>
          <p className="text-base md:text-xl font-bold pt-2 md:pt-4 text-white">
            Just the basics you need to get started. 👀
          </p>
        </div>

      </div>
    </section>
  );
}
