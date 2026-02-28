import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function PageTransitionLoader() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loading state on route change
    setIsLoading(true);
    
    // Simulate a minimum loading time for the transition effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, searchParams]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16">
              <motion.span
                className="absolute inset-0 rounded-full border-4 border-white/10"
              />
              <motion.span
                className="absolute inset-0 rounded-full border-4 border-t-brand-main border-r-transparent border-b-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-sm font-bold tracking-widest text-brand-main"
            >
              LOADING
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
