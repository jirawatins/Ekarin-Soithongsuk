import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const currentScroll = window.scrollY;
    animate(currentScroll, 0, {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for smooth deceleration
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-main/80 text-white shadow-lg shadow-brand-main/20 backdrop-blur-sm transition-all hover:bg-brand-dark hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-main focus:ring-offset-2 focus:ring-offset-[#121212] opacity-60"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
