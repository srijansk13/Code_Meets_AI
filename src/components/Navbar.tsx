"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNotification } from "./NotificationContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isInterested, handleInterest, isLoading } = useNotification();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What Is This?", href: "#what-is-this" },
    { name: "Things You'll Play With", href: "#things-to-play" },
    { name: "Who Is This For?", href: "#who-is-this" },
  ];

  return (
    // NO initial={{ opacity: 0 }} — navbar is always visible
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 md:py-4" : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 text-base md:text-xl font-bold tracking-tight group">
            <div className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] rounded-full overflow-hidden border border-white/20 shadow-[0_0_10px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-all duration-300">
              <img src="/assets/code-ai-chaos-hero.jpg" alt="CODE MEETS AI" className="w-full h-full object-cover" />
            </div>
            <span>CODE MEETS AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-sm font-medium text-white/70">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              onClick={handleInterest}
              disabled={isInterested || isLoading}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                isInterested
                  ? "bg-white/10 text-white/50 cursor-not-allowed border border-white/20"
                  : "bg-white text-black hover:bg-brand-cyan hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
              }`}
            >
              {isInterested ? "✓ I'M IN" : "I'M IN 🚀"}
            </button>
          </div>

          {/* Mobile Menu Toggle — min 44x44 touch target */}
          <button
            className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — uses AnimatePresence for open/close only, not for initial visibility */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-6 right-6 mt-2 glass-panel p-6 flex flex-col space-y-4 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleInterest();
              }}
              disabled={isInterested || isLoading}
              className={`mt-2 w-full text-center py-3 font-bold rounded-xl transition-colors ${
                isInterested
                  ? "bg-white/10 text-white/50 cursor-not-allowed border border-white/20"
                  : "bg-white text-black hover:bg-brand-cyan"
              }`}
            >
              {isInterested ? "✓ I'M IN" : "I'M IN 🚀"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
