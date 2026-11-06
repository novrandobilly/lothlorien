import React from "react";
import { PeacockMotif } from "./PeacockMotif";
import { DoveMotif } from "./DoveMotif";

interface ArchFrameProps {
  children?: React.ReactNode;
  showPeacocks?: boolean;
  showDoves?: boolean;
  className?: string;
}

export function ArchFrame({
  children,
  showPeacocks = true,
  showDoves = true,
  className = "",
}: ArchFrameProps) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      {/* Background Pavilion Architecture Watermark (Subtle Sketch Style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14] bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      {/* Decorative Arch Border Container */}
      <div className="relative border border-[#E6CA85]/70 rounded-t-[140px] sm:rounded-t-[220px] rounded-b-2xl p-5 sm:p-8 md:p-12 bg-gradient-to-b from-[#FFFDF9]/95 via-[#FCF9F2]/90 to-[#FAF6EE]/95 shadow-[0_20px_50px_rgba(197,160,89,0.12)] backdrop-blur-xs">
        {/* Inner Gold Inset Line */}
        <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/40 rounded-t-[130px] sm:rounded-t-[210px] rounded-b-xl pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#C5A059]/25 rounded-t-[125px] sm:rounded-t-[205px] rounded-b-lg pointer-events-none" />

        {/* Top Arch Crown & Floral Swag */}
        <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
          {/* Imperial Crest */}
          <div className="w-12 h-8 sm:w-16 sm:h-10 text-[#C5A059] flex items-center justify-center">
            <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
              <path
                d="M30 4 L34 16 L46 16 L36 24 L40 36 L30 28 L20 36 L24 24 L14 16 L26 16 Z"
                fill="#C5A059"
                stroke="#E6CA85"
                strokeWidth="1"
              />
              <circle cx="30" cy="4" r="3" fill="#D4AF37" />
              <circle cx="14" cy="16" r="2" fill="#D4AF37" />
              <circle cx="46" cy="16" r="2" fill="#D4AF37" />
            </svg>
          </div>

          {/* Top Floral Banner */}
          <div className="flex items-center gap-1.5 -mt-1">
            <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[#C08081] text-xs sm:text-sm">🌸</span>
            <span className="text-[#8C4A52] text-sm sm:text-base">❦</span>
            <span className="text-[#C08081] text-xs sm:text-sm">🌸</span>
            <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
        </div>

        {/* Doves at Upper Arch Curves */}
        {showDoves && (
          <>
            <div className="absolute top-8 left-4 sm:top-12 sm:left-8 z-10 pointer-events-none animate-pulse duration-1000">
              <DoveMotif className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-xs" />
            </div>
            <div className="absolute top-8 right-4 sm:top-12 sm:right-8 z-10 pointer-events-none animate-pulse duration-1000">
              <DoveMotif className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-xs" flip />
            </div>
          </>
        )}

        {/* Main Content inside the Arch */}
        <div className="relative z-10">{children}</div>

        {/* Bottom Peacocks & Floral Garden Bed */}
        {showPeacocks && (
          <div className="relative mt-8 sm:mt-12 pt-6 border-t border-[#C5A059]/20 flex items-end justify-between overflow-visible pointer-events-none">
            {/* Left Peacock */}
            <div className="-ml-3 sm:-ml-6 -mb-4 sm:-mb-6">
              <PeacockMotif className="w-20 h-24 sm:w-28 sm:h-32 drop-shadow-sm" />
            </div>

            {/* Center Botanical Rose Garland */}
            <div className="flex-1 flex flex-col items-center justify-end px-2 pb-2">
              <div className="flex items-center gap-1 sm:gap-2 text-[#C08081] text-xs sm:text-sm opacity-90">
                <span>🍃</span>
                <span>🌹</span>
                <span className="text-sm sm:text-base">🌸</span>
                <span>🌹</span>
                <span>🍃</span>
              </div>
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-[#8C6D36] mt-1 font-medium">
                Love · Faith · Eternity
              </p>
            </div>

            {/* Right Peacock */}
            <div className="-mr-3 sm:-mr-6 -mb-4 sm:-mb-6">
              <PeacockMotif className="w-20 h-24 sm:w-28 sm:h-32 drop-shadow-sm" flip />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
