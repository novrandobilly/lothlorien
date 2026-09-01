import React from "react";
import { EnvienLogo } from "@/components/ui/EnvienLogo";

export function Footer() {
  return (
    <footer className="bg-[#06080c] text-stone-400 py-10 sm:py-12 border-t border-stone-800/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <EnvienLogo className="h-4 sm:h-4.5 w-auto text-stone-300 shrink-0" />
            <span className="font-serif font-medium text-stone-200 text-sm">Envien Studio</span>
          </div>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span className="text-stone-500 text-xs">Senior Frontend Engineering &amp; UX Architecture</span>
        </div>

        <div className="text-stone-500 font-sans text-xs">
          &copy; {new Date().getFullYear()} Novrando Billy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
