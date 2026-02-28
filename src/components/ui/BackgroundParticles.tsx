import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function BackgroundParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 400 }}
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-light/30 dark:bg-brand-dark/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 400 }}
        className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-brand-main/20 dark:bg-brand-main/10 blur-[120px]"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              x: [null, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-2 w-2 rounded-full bg-brand-main blur-[1px]"
          />
        ))}
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-brand-main) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
