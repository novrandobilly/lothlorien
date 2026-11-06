import React from "react";
import { GANDALF_QUOTE } from "../constants/weddingData";
import { ElvenLeafMotif } from "./ornaments/ElvenMotif";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function GandalfQuoteSection() {
  return (
    <section id="wedding-gandalf" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorative Elven Starburst */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,#D4AF37_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="relative border-2 border-[#C5A059]/50 rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#233529] via-[#1D2C22] to-[#152219] text-[#FDF6ED] shadow-[0_25px_60px_rgba(20,40,25,0.35)]">
          {/* Inner Golden Filigree Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#D4AF37]/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#C5A059]/20 rounded-xl pointer-events-none" />

          {/* Elven Leaf of Lothlorien / Mallorn Brooch */}
          <div className="flex justify-center mb-6">
            <ElvenLeafMotif className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]" />
          </div>

          <p
            className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#E6CA85] font-semibold mb-4"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Lothlórien Blessing &amp; Reflection
          </p>

          {/* The Gandalf Quote */}
          <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#FFFDF9] italic leading-relaxed max-w-2xl mx-auto mb-6">
            &ldquo;{GANDALF_QUOTE.text}&rdquo;
          </blockquote>

          <BotanicalDivider className="my-6 opacity-70" />

          {/* Attribution */}
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-serif font-bold text-[#E6CA85] tracking-wider"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              {GANDALF_QUOTE.speaker}
            </p>
            <p className="text-xs text-[#A6BAA9] font-serif italic">
              {GANDALF_QUOTE.source}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
