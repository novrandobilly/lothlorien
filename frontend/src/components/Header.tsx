import React from "react";
import Link from "next/link";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { Send } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300">
      {/* Outer wrapper with subtle atmospheric halo */}
      <div className="relative group/nav">
        {/* Ambient Warm Underglow */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500/15 via-emerald-500/10 to-amber-500/15 rounded-full blur-md opacity-60 group-hover/nav:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

        {/* Clean White Pill Container */}
        <div className="relative bg-white/85 backdrop-blur-2xl border border-stone-200/90 shadow-lg shadow-stone-950/5 rounded-full px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-stone-900 tracking-tight group/logo"
            aria-label="Envien Studio Home"
          >
            <EnvienLogo
              className="h-4 sm:h-4.5 w-auto text-stone-900 group-hover/logo:text-amber-600 transition-colors"
              variant="current"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight font-sans text-stone-900 group-hover/logo:text-amber-600 transition-colors">
              Envien Studio
            </span>
          </Link>

          {/* Right side: Nav Links + Contact Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-stone-600">
              <Link
                href="/#work"
                className="hover:text-stone-900 transition-colors"
              >
                Featured
              </Link>
              <Link
                href="/#labs"
                className="hover:text-emerald-700 transition-colors"
              >
                Labs
              </Link>
            </nav>

            <Link
              href="/#contact"
              scroll={true}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-medium rounded-full px-3.5 py-1.5 border border-stone-300 hover:border-amber-500/70 bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-800 shadow-xs hover:shadow-sm transition-all"
            >
              <span>Contact</span>
              <Send className="w-3 h-3 text-amber-600 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
