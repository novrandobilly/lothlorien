"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { WEDDING_CONFIG } from "../constants/weddingData";
import { CornerFloralFlourish } from "./ornaments/BotanicalDivider";
import { DoveMotif } from "./ornaments/DoveMotif";
import { PeacockMotif } from "./ornaments/PeacockMotif";

interface CoverPortalProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function CoverPortal({ isOpen, onOpen }: CoverPortalProps) {
  const searchParams = useSearchParams();
  const rawRecipient = searchParams.get("to") || searchParams.get("u") || searchParams.get("guest");
  const recipientName = rawRecipient ? decodeURIComponent(rawRecipient).replace(/\+/g, " ") : "Tamu Undangan";

  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenClick = () => {
    setIsAnimating(true);
    // Trigger opening callback to start audio and unblock scroll
    onOpen();
    setTimeout(() => {
      // Allow DOM scroll to hero section
      const heroElement = document.getElementById("wedding-hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  if (isOpen && !isAnimating) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-1000 ease-in-out ${
        isAnimating
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
      style={{
        background: "radial-gradient(ellipse at center, #FDFBF7 0%, #FAF6EE 55%, #F4EBD9 100%)",
      }}
    >
      {/* Botanical Corner Flourishes */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
        <CornerFloralFlourish position="top-left" className="w-24 h-24 sm:w-36 sm:h-36" />
      </div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <CornerFloralFlourish position="top-right" className="w-24 h-24 sm:w-36 sm:h-36" />
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
        <CornerFloralFlourish position="bottom-left" className="w-24 h-24 sm:w-36 sm:h-36" />
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
        <CornerFloralFlourish position="bottom-right" className="w-24 h-24 sm:w-36 sm:h-36" />
      </div>

      {/* Center Envelope / Royal Invitation Card */}
      <div className="relative w-full max-w-lg sm:max-w-xl mx-auto border-2 border-[#C5A059]/50 rounded-3xl p-6 sm:p-10 md:p-12 bg-[#FFFDF9]/95 shadow-[0_25px_60px_rgba(197,160,89,0.2)] text-center backdrop-blur-sm">
        {/* Inner Gold Foil Double Border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/60 rounded-2xl pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#C5A059]/30 rounded-xl pointer-events-none" />

        {/* Top Floating Doves Accent */}
        <div className="flex items-center justify-center gap-6 mb-3 sm:mb-4">
          <DoveMotif className="w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059] opacity-80" />
          <span className="text-[#C5A059] text-xs font-serif tracking-[0.3em] uppercase">
            Wedding Invitation
          </span>
          <DoveMotif className="w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059] opacity-80" flip />
        </div>

        {/* Header Title */}
        <p className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#8C6D36] uppercase font-medium">
          The Wedding Celebration of
        </p>

        {/* Couple Names */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-[#7C5E28] my-3 sm:my-4 font-normal"
          style={{ fontFamily: "var(--font-script)" }}
        >
          {WEDDING_CONFIG.coupleNames}
        </h1>

        {/* Date Display */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80 mb-6 sm:mb-8">
          <span className="text-[#C5A059] text-xs">✦</span>
          <span className="font-serif text-xs sm:text-sm tracking-widest text-[#7C5E28] font-semibold">
            {WEDDING_CONFIG.weddingDateShort}
          </span>
          <span className="text-[#C5A059] text-xs">✦</span>
        </div>

        {/* Recipient Box */}
        <div className="relative max-w-sm mx-auto mb-8 sm:mb-10 px-5 py-4 rounded-2xl bg-gradient-to-b from-[#FAF6EE] to-[#F5EFEB] border border-[#C5A059]/35 shadow-xs">
          <p className="text-[11px] sm:text-xs font-serif tracking-widest uppercase text-[#8C6D36] mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#2C2523] my-1 capitalize">
            {recipientName}
          </p>
          <p className="text-[10px] sm:text-xs text-[#7A6E68] italic font-serif leading-relaxed mt-1">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di hari bahagia kami.
          </p>
        </div>

        {/* Open Invitation CTA Button */}
        <button
          onClick={handleOpenClick}
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#A07830] text-[#FFFDF9] font-serif tracking-widest text-xs sm:text-sm uppercase font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden border border-[#ECC875]"
        >
          {/* Shimmer Sweep Animation */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />

          {/* Wax Seal / Envelope Icon */}
          <span className="w-6 h-6 rounded-full bg-[#FFFDF9]/20 flex items-center justify-center text-xs">
            ✉
          </span>
          <span>Buka Undangan</span>
        </button>

        {/* Gentle Notice */}
        <p className="text-[10px] text-[#A69B95] mt-4 font-sans tracking-wide">
          Tap untuk membuka undangan & memutar musik latar
        </p>

        {/* Bottom Peacocks Accent */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#C5A059]/15">
          <PeacockMotif className="w-12 h-14 text-[#C5A059] opacity-75" />
          <span className="text-[#C08081] text-xs">❦ 🌸 ❦</span>
          <PeacockMotif className="w-12 h-14 text-[#C5A059] opacity-75" flip />
        </div>
      </div>
    </div>
  );
}
