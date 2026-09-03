"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface PosterViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PosterViewer({ isOpen, onClose }: PosterViewerProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button at top right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white border border-white/10 transition-colors"
            aria-label="Close poster"
          >
            <X size={24} />
          </button>

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full aspect-[1587/2245] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] ring-1 ring-white/10"
            style={{ maxWidth: "min(90vw, calc(90vh * (1587 / 2245)))" }}
            onClick={(e) => e.stopPropagation()} // Prevent click from closing
          >
            {/* The Poster Image */}
            <Image
              src="/poster.png"
              alt="Code Meets AI Event Poster"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* OVERLAYS FOR QR CODES */}
            
            {/* QR #1 (Left - SCAN HERE) */}
            <a
              href="https://code-meets-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute z-10 group"
              style={{
                left: "4.5%",
                top: "77%",
                width: "20%",
                height: "14%",
              }}
              aria-label="Open Code Meets AI Registration"
              title="Register Here"
            >
              <div className="w-full h-full rounded-lg transition-colors duration-300 group-hover:bg-brand-cyan/20 cursor-pointer" />
            </a>

            {/* QR #2 (Right - Social Media) */}
            <a
              href="https://www.instagram.com/code_meets_ai17?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="absolute z-10 group"
              style={{
                right: "4.5%",
                top: "77%",
                width: "20%",
                height: "14%",
              }}
              aria-label="Open Instagram Page"
              title="Our Social Media"
            >
              <div className="w-full h-full rounded-lg transition-colors duration-300 group-hover:bg-brand-purple/20 cursor-pointer" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
