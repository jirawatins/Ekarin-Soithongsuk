import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(document as any).startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transition = (document as any).startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-card text-text-main transition-colors hover:bg-brand-light/20 dark:hover:bg-brand-dark/20 overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0,
          opacity: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : -90,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
    </button>
  );
}
