"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface NotificationContextType {
  isInterested: boolean;
  handleInterest: () => Promise<void>;
  isLoading: boolean;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [isInterested, setIsInterested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount (client-side only)
    try {
      const interested = localStorage.getItem("code-meets-ai-interested");
      if (interested === "true") {
        setIsInterested(true);
      }
    } catch (e) {
      console.warn("localStorage not available", e);
    }
  }, []);

  const handleInterest = useCallback(async () => {
    if (isInterested || isLoading) return;
    
    setIsLoading(true);

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
      });
      
      if (response.ok) {
        setIsInterested(true);
        try {
          localStorage.setItem("code-meets-ai-interested", "true");
        } catch (e) {
          console.warn("Failed to save to localStorage", e);
        }
        setShowToast(true);
        
        // Hide toast after 4 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Failed to register interest:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isInterested, isLoading]);

  return (
    <NotificationContext.Provider value={{ isInterested, handleInterest, isLoading }}>
      {children}
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-6 md:bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 z-[100] pointer-events-none"
          >
            <div className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-3 border border-brand-cyan/30 shadow-[0_4px_20px_rgba(0,240,255,0.2)] bg-black/60 backdrop-blur-md">
              <div className="bg-brand-cyan/20 p-1.5 rounded-full text-brand-cyan">
                <Check size={18} strokeWidth={3} />
              </div>
              <span className="font-bold text-white whitespace-nowrap">
                You will be notified soon
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
}
