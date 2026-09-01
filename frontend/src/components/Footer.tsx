import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#06080c] text-stone-400 py-12 border-t border-stone-800/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-800 via-teal-900 to-emerald-950 text-amber-200 flex items-center justify-center font-bold text-xs ring-1 ring-amber-500/30">
            E
          </div>
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
