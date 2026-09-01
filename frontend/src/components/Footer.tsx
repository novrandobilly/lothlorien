import React from "react";
import { EnvienLogo } from "@/components/ui/EnvienLogo";

export function Footer() {
  return (
    <footer className="bg-[#06080c] text-stone-400 py-12 border-t border-stone-800/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-3">
          <EnvienLogo className="h-4.5 w-auto text-stone-300" />
          <span className="font-serif font-medium text-stone-200 text-sm">Envien Studio</span>
          <span className="text-stone-500">• Senior Frontend Engineering &amp; UX Architecture</span>
        </div>

        <div className="text-stone-500 font-sans">
          &copy; {new Date().getFullYear()} Novrando Billy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
