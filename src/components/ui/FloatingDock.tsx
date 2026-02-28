import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Twitter, MessageSquare, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 100px
      setShowDock(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
    { icon: Mail, href: "mailto:contact@ekarin", label: "Email", color: "hover:bg-brand-main hover:text-white" },
  ];

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative flex flex-col-reverse items-end gap-3">
            {/* Main Toggle Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 backdrop-blur-xl border border-border-subtle",
                isOpen 
                  ? "bg-text-main text-page rotate-180" 
                  : "bg-card/80 text-text-main hover:bg-brand-main hover:text-white"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.button>

            {/* Expanded Dock (Vertical) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, scale: 0.9 }}
                  animate={{ height: "auto", opacity: 1, scale: 1 }}
                  exit={{ height: 0, opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-2 overflow-hidden rounded-full bg-card/80 p-2 shadow-lg backdrop-blur-xl border border-border-subtle origin-bottom"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full bg-page text-text-muted transition-all duration-300 hover:scale-110",
                        link.color
                      )}
                      title={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
