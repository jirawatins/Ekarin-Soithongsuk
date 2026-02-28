import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { PageTransitionLoader } from "@/components/ui/PageTransitionLoader";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { PageTransition } from "@/components/ui/PageTransition";
import React, { ReactNode } from "react";

import { BackgroundParticles } from "@/components/ui/BackgroundParticles";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[#121212] dark:text-neutral-200 transition-colors duration-300 relative">
      <BackgroundParticles />
      <PageTransitionLoader />
      <Navbar />
      <main className="min-h-screen p-4 md:p-8 pt-24 md:pt-32">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BackToTop />
      <FloatingDock />
    </div>
  );
}
