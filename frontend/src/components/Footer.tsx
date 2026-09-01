import React from "react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
            E
          </div>
          <span className="font-semibold text-stone-200">Envien Studio</span>
          <span>• Senior Frontend Engineering & UX Architect</span>
        </div>

        <div className="text-stone-500">
          © {new Date().getFullYear()} Envien Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
