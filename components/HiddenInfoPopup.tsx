"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Terminal } from "lucide-react";
import { useEffect } from "react";

interface HiddenInfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HiddenInfoPopup({ isOpen, onClose }: HiddenInfoPopupProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999]"
          />

          {/* Popup Container - Always centered */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Window */}
              <div className="glass border-2 border-primary rounded-lg overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-primary/10 border-b-2 border-primary px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-primary font-mono text-sm">system@nura:~$</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <button
                      onClick={onClose}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                      aria-label="Close"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Lock Icon with Animation */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="rounded-full p-4 bg-primary/10 border-2 border-primary glow"
                      >
                        <Lock className="w-12 h-12 text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3 text-center">
                    <h3 className="text-xl font-bold text-primary font-mono">
                      ACCESS DENIED
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300 font-mono text-sm">
                        <span className="text-primary">$</span> cat hidden_info.txt
                      </p>
                      <div className="bg-black/50 border border-primary/30 rounded p-4 text-left">
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                          <span className="text-red-500">[ERROR]</span> Sorry, this information is temporarily locked by <span className="text-primary font-semibold">Nura</span>.
                        </p>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mt-2">
                          <span className="text-yellow-500">[INFO]</span> Please contact him to take it.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="w-full bg-primary hover:bg-primary/80 text-black font-mono font-bold py-3 px-6 rounded border-2 border-primary hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4" />
                      CLOSE [ESC]
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
