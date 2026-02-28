import { Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-card py-12 text-text-muted">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm font-bold uppercase tracking-wide">
          © {new Date().getFullYear()} Ekarin Soithongsuk. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-dark dark:hover:text-brand-main transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-brand-dark dark:hover:text-brand-main transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-brand-dark dark:hover:text-brand-main transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
