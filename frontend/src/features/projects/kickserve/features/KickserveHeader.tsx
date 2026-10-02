import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function KickserveHeader() {
  return (
    <div>
      {/* Top Back Link */}
      <div className="mb-4 sm:mb-6">
        <Link
          href="/#products"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-950 group-hover:-translate-x-1 transition-all" />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold font-sans text-stone-950 tracking-tight leading-tight">
        Kickserve App
      </h1>

      {/* Hero Summary Tagline */}
      <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed mt-4 mb-8 max-w-full">
        A lightweight session manager built for racquet sports (Tennis, Padel, Badminton, Table Tennis).
      </p>
    </div>
  );
}

export default KickserveHeader;
