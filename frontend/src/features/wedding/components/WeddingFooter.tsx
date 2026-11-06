import React from "react";
import { WEDDING_CONFIG } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function WeddingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 text-center border-t border-[#C5A059]/20 bg-[#F5EFEB]/60 relative">
      <div className="max-w-xl mx-auto space-y-4">
        <p className="text-xs sm:text-sm font-serif text-[#7A6E68] italic leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan yang mendalam bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        <BotanicalDivider className="my-4" withHeart />

        <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#8C6D36] font-semibold">
          With Love &amp; Gratitude
        </p>

        <h3
          className="text-4xl sm:text-5xl text-[#7C5E28] font-normal"
          style={{ fontFamily: "var(--font-script)" }}
        >
          {WEDDING_CONFIG.coupleNames}
        </h3>

        <p className="text-[11px] text-[#A69B95] font-serif tracking-widest uppercase pt-4">
          Lothlórien · December 2026
        </p>

        {/* Back to top button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5A059]/40 bg-[#FFFDF9] hover:bg-[#FAF6EE] text-[#8C6D36] text-[11px] font-serif uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>↑</span>
            <span>Kembali ke Atas</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
