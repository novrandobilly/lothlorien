import React from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300">
      <div className="bg-[#0e121a]/85 backdrop-blur-xl border border-amber-500/20 shadow-lg shadow-black/40 rounded-full px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <a
          href="#"
          className="flex items-center gap-3 text-stone-100 tracking-tight group"
        >
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-800 via-teal-900 to-emerald-950 text-amber-200 flex items-center justify-center shadow-sm ring-1 ring-amber-500/30 group-hover:ring-amber-400/60 group-hover:scale-105 transition-all">
            {/* Bespoke Leaf / Elven Emblem */}
            <svg
              className="w-4 h-4 text-emerald-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-bold tracking-tight font-serif text-stone-100 group-hover:text-amber-200 transition-colors">
              Envien Studio
            </span>
          </div>
        </a>

        {/* Right side: Contact Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#contact">
            <LothlorienButton
              variant="outline"
              size="sm"
              className="shadow-xs hover:shadow-sm text-xs font-medium"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Contact
            </LothlorienButton>
          </a>
        </div>
      </div>
    </header>
  );
}
