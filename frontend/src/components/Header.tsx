import React from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300">
      <div className="bg-white/80 backdrop-blur-xl border border-stone-200/80 shadow-xs shadow-stone-200/50 rounded-full px-5 sm:px-7 h-14 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-base text-stone-900 tracking-tight group"
        >
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-600 to-teal-800 text-amber-100 flex items-center justify-center font-serif font-bold text-base shadow-xs group-hover:scale-105 transition-transform">
            🌿
          </div>
          <span className="font-serif tracking-normal text-lg text-emerald-950">
            Lothlorien
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-stone-600">
          <a
            href="#work"
            className="hover:text-emerald-800 transition-colors py-1"
          >
            Work
          </a>
          <a
            href="#process"
            className="hover:text-emerald-800 transition-colors py-1"
          >
            Process
          </a>
          <a
            href="#services"
            className="hover:text-emerald-800 transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-emerald-800 transition-colors py-1"
          >
            About
          </a>
          <a
            href="#faq"
            className="hover:text-emerald-800 transition-colors py-1"
          >
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
