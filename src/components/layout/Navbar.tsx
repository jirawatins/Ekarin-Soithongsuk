import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-page/80 backdrop-blur-2xl border-b border-border-subtle py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-text-main font-display">
          EKARIN<span className="text-brand-dark dark:text-brand-main">S</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand-dark dark:hover:text-brand-main",
                pathname === item.href ? "text-brand-dark dark:text-brand-main" : "text-text-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pl-4 border-l border-border-subtle">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
            className="text-text-main"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-page border-b border-border-subtle p-6 md:hidden shadow-xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-lg font-bold uppercase tracking-wide hover:text-brand-dark dark:hover:text-brand-main",
                  pathname === item.href ? "text-brand-dark dark:text-brand-main" : "text-text-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
