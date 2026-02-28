import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
  id?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className, onClick, delay = 0, id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border-subtle bg-card p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-brand-light dark:hover:border-brand-main",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
