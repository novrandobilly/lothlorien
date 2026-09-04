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
        <div className="relative bg-linear-to-b from-[#151a28]/95 via-[#0e121a]/95 to-[#090b10]/95 backdrop-blur-2xl border border-amber-500/35 border-t-amber-300/55 border-b-amber-700/40 shadow-[inset_0_1px_1px_rgba(245,214,120,0.25),inset_0_-1px_1px_rgba(16,185,129,0.15),0_12px_32px_-4px_rgba(0,0,0,0.8)] rounded-full px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-stone-100 tracking-tight group/logo"
            aria-label="Envien Studio Home"
          >
            <EnvienLogo className="h-4 sm:h-4.5 w-auto text-amber-200/90 group-hover/logo:text-amber-100 group-hover/logo:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all" />
            <span className="text-base sm:text-lg font-bold tracking-tight font-serif text-stone-100 group-hover/logo:text-amber-200 transition-colors">
              Envien Studio
            </span>
          </Link>

          {/* Right side: Contact Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/#contact" scroll={true}>
              <LothlorienButton
                variant="outline"
                size="sm"
                className="shadow-xs hover:shadow-sm text-xs font-medium border-amber-500/40 hover:border-amber-400/80 hover:shadow-[0_0_15px_-2px_rgba(212,175,55,0.3)]"
                rightIcon={<Send className="w-3.5 h-3.5 text-amber-300" />}
              >
                Contact
              </LothlorienButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
