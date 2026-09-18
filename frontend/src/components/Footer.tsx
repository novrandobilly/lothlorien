import React from "react";
import { EnvienLogo } from "@/components/ui/EnvienLogo";

export function Footer() {
  return (
    <footer className="bg-[#f4f3ee] text-stone-600 py-8 sm:py-10 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <EnvienLogo className="h-4 sm:h-4.5 w-auto text-stone-800 shrink-0" variant="current" />
            <span className="font-sans font-bold text-stone-900 text-sm">Envien Studio</span>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="text-stone-500 text-xs">Senior Frontend Engineering &amp; UX Architecture</span>
        </div>

        <div className="text-stone-500 font-sans text-xs">
          &copy; {new Date().getFullYear()} Novrando Billy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
