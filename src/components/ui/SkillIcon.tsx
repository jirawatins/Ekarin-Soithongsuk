import { motion } from "motion/react";
import React, { useState } from "react";

interface SkillIconProps {
  name: string;
  level: number; // 0 to 100
  description: string;
  color?: string;
}

export function SkillIcon({ name, level, description, color = "bg-brand-main" }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col gap-2 rounded-xl border border-border-subtle bg-page p-4 transition-colors hover:border-brand-light dark:hover:border-brand-main shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-text-main">{name}</h3>
        <span className="text-xs font-medium text-text-muted">{level}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-border-subtle">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>

      {/* Tooltip / Description */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-2 text-xs text-text-muted">{description}</p>
      </motion.div>
    </div>
  );
}
