import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-main disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-btn-primary-bg text-btn-primary-text hover:opacity-90 shadow-lg shadow-brand-main/20 hover:shadow-brand-main/40 hover:scale-[1.02] active:scale-[0.98]":
              variant === "primary",
            "border border-border-subtle bg-transparent text-text-main hover:bg-brand-light/10 dark:hover:bg-brand-dark/10 hover:border-brand-main":
              variant === "outline",
            "bg-transparent text-text-muted hover:bg-brand-light/10 dark:hover:bg-brand-dark/10 hover:text-text-main": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
