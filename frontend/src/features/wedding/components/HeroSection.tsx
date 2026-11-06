import React from "react";
import { WEDDING_CONFIG } from "../constants/weddingData";
import { ArchFrame } from "./ornaments/ArchFrame";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function HeroSection() {
  return (
    <section
      id="wedding-hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Ambience Layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top,#ECC875_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        <ArchFrame showPeacocks={true} showDoves={true} className="my-4">
          <div className="py-6 sm:py-10 px-2 sm:px-6">
            {/* The Wedding of */}
            <p
              className="text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2 sm:mb-4"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Wedding of
            </p>

            {/* Groom's Name */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#7C5E28] leading-[1.1] font-normal drop-shadow-xs"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {WEDDING_CONFIG.groomNickname}
            </h1>

            {/* Elegant Ampersand */}
            <div className="my-1 sm:my-2">
              <span
                className="text-3xl sm:text-4xl md:text-5xl text-[#C08081] font-light italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &
              </span>
            </div>

            {/* Bride's Name */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#7C5E28] leading-[1.1] font-normal drop-shadow-xs"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {WEDDING_CONFIG.brideNickname}
            </h1>

            <BotanicalDivider className="my-5 sm:my-6" withHeart />

            {/* Date and Location Badge */}
            <div className="space-y-2">
              <p
                className="text-sm sm:text-base md:text-lg font-serif tracking-[0.2em] text-[#2C2523] uppercase font-semibold"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {WEDDING_CONFIG.weddingDateDisplay}
              </p>
              <p className="text-xs sm:text-sm text-[#7A6E68] font-serif italic tracking-wider">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </ArchFrame>

        {/* Scroll Prompt */}
        <div className="mt-8 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-[#8C6D36]">
            Scroll Down
          </span>
          <svg className="w-4 h-4 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
