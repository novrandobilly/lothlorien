import React from "react";
import Link from "next/link";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { Send } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300">
      {/* Outer wrapper with subtle BG3 atmospheric halo */}
      <div className="relative group/nav">
        {/* Ambient Gold & Emerald Underglow */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500/20 via-emerald-500/15 to-amber-500/20 rounded-full blur-md opacity-70 group-hover/nav:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

        {/* Gilded Brass & Obsidian Pill */}
        <div className="relative bg-linear-to-b from-[#151a28]/95 via-[#0e121a]/95 to-[#090b10]/95 backdrop-blur-2xl border border-amber-500/35 shadow-lg shadow-black/60 rounded-full px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-stone-100 tracking-tight group/logo"
            aria-label="Envien Studio Home"
          >
            <EnvienLogo className="h-4 sm:h-4.5 w-auto text-white group-hover/logo:text-white transition-colors" />
            <span className="text-base sm:text-lg font-bold tracking-tight font-serif text-stone-100 group-hover/logo:text-amber-200 transition-colors">
              Envien Studio
            </span>
          </Link>

          {/* Right side: Nav Links + Contact Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-stone-300">
              <Link
                href="/#work"
                className="hover:text-amber-200 transition-colors"
              >
                Featured
              </Link>
              <Link
                href="/#labs"
                className="hover:text-emerald-300 transition-colors"
              >
                Labs
              </Link>
            </nav>

            <Link
              href="/#contact"
              scroll={true}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-medium rounded-full px-3.5 py-1.5 border border-amber-500/40 hover:border-amber-400/80 bg-stone-900/30 text-amber-200/90 hover:bg-amber-500/10 hover:text-amber-100 shadow-xs hover:shadow-sm transition-all backdrop-blur-xs"
            >
              <span>Contact</span>
              <Send className="w-3 h-3 text-amber-200/90 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
