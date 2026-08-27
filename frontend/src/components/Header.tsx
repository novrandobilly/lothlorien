import React from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-stone-50/85 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-lg text-stone-900 tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-sm shadow-xs">
            L
          </div>
          <span>Lothlorien</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-600">
          <a
            href="#work"
            className="hover:text-emerald-700 transition-colors"
          >
            Work
          </a>
          <a
            href="#process"
            className="hover:text-emerald-700 transition-colors"
          >
            Process
          </a>
          <a
            href="#services"
            className="hover:text-emerald-700 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-emerald-700 transition-colors"
          >
            About
          </a>
          <a href="#faq" className="hover:text-emerald-700 transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact">
            <LothlorienButton
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </LothlorienButton>
          </a>
        </div>
      </div>
    </header>
  );
}
