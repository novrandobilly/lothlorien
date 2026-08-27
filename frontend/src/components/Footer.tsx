import React from "react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
            L
          </div>
          <span className="font-semibold text-stone-200">
            Lothlorien Studio
          </span>
          <span>• Senior Frontend Engineering & UI Architecture</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="#work" className="hover:text-stone-200 transition-colors">
            Selected Work
          </a>
          <a
            href="#services"
            className="hover:text-stone-200 transition-colors"
          >
            Tiers
          </a>
          <a
            href="#contact"
            className="hover:text-stone-200 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-stone-500">
          © {new Date().getFullYear()} Lothlorien. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
