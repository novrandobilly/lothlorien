import React from "react";
import Image from "next/image";
import { GROOM_PROFILE, BRIDE_PROFILE } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function CoupleIntroSection() {
  return (
    <section id="wedding-couple" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            The Bride &amp; Groom
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Mempelai Yang Berbahagia
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-xl mx-auto italic">
            Dengan penuh rasa syukur dan sukacita, kami mengumumkan janji suci pernikahan kami.
          </p>
        </div>

        {/* Couple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative items-stretch">
          {/* Center Ampersand Watermark / Floating Badge for Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[#FFFDF9] border-2 border-[#C5A059] items-center justify-center shadow-lg">
            <span
              className="text-3xl text-[#7C5E28] italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &
            </span>
          </div>

          {/* GROOM CARD */}
          <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 md:p-10 bg-[#FFFDF9]/95 shadow-[0_15px_40px_rgba(197,160,89,0.08)] text-center flex flex-col items-center">
            {/* Inner Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

            {/* Arched Portrait Photo Frame */}
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#C5A059] p-1.5 shadow-md mb-6 bg-[#FAF6EE]">
              <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden">
                <Image
                  src={GROOM_PROFILE.image}
                  alt={`Portrait of ${GROOM_PROFILE.fullName}`}
                  fill
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Groom Nickname */}
            <h3
              className="text-4xl sm:text-5xl text-[#7C5E28] mb-1 font-normal"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {GROOM_PROFILE.nickname}
            </h3>

            {/* Full Name */}
            <p
              className="text-base sm:text-lg font-serif font-bold text-[#2C2523] tracking-wider mb-2"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              {GROOM_PROFILE.fullName}
            </p>

            {/* Parents */}
            <div className="my-3 py-2 px-4 rounded-xl bg-[#FAF6EE]/80 border border-[#C5A059]/25 text-xs sm:text-sm font-serif text-[#5E524D] leading-relaxed">
              <p className="italic text-[#8C6D36] text-[11px] uppercase tracking-wider mb-0.5">
                {GROOM_PROFILE.sonDaughterText}
              </p>
              <p className="font-semibold text-[#2C2523]">
                {GROOM_PROFILE.fatherName} &amp; {GROOM_PROFILE.motherName}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-xs sm:text-sm font-serif text-[#7A6E68] italic leading-relaxed max-w-sm mt-2 flex-1">
              &ldquo;{GROOM_PROFILE.bio}&rdquo;
            </p>

            {/* Role Badge */}
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6D36] text-[11px] font-serif uppercase tracking-widest font-semibold">
              <span>✦</span> The Groom <span>✦</span>
            </div>
          </div>

          {/* BRIDE CARD */}
          <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 md:p-10 bg-[#FFFDF9]/95 shadow-[0_15px_40px_rgba(197,160,89,0.08)] text-center flex flex-col items-center">
            {/* Inner Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

            {/* Arched Portrait Photo Frame */}
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#C5A059] p-1.5 shadow-md mb-6 bg-[#FAF6EE]">
              <div className="relative w-full h-full rounded-t-full rounded-b-xl overflow-hidden">
                <Image
                  src={BRIDE_PROFILE.image}
                  alt={`Portrait of ${BRIDE_PROFILE.fullName}`}
                  fill
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bride Nickname */}
            <h3
              className="text-4xl sm:text-5xl text-[#7C5E28] mb-1 font-normal"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {BRIDE_PROFILE.nickname}
            </h3>

            {/* Full Name */}
            <p
              className="text-base sm:text-lg font-serif font-bold text-[#2C2523] tracking-wider mb-2"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              {BRIDE_PROFILE.fullName}
            </p>

            {/* Parents */}
            <div className="my-3 py-2 px-4 rounded-xl bg-[#FAF6EE]/80 border border-[#C5A059]/25 text-xs sm:text-sm font-serif text-[#5E524D] leading-relaxed">
              <p className="italic text-[#8C6D36] text-[11px] uppercase tracking-wider mb-0.5">
                {BRIDE_PROFILE.sonDaughterText}
              </p>
              <p className="font-semibold text-[#2C2523]">
                {BRIDE_PROFILE.fatherName} &amp; {BRIDE_PROFILE.motherName}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-xs sm:text-sm font-serif text-[#7A6E68] italic leading-relaxed max-w-sm mt-2 flex-1">
              &ldquo;{BRIDE_PROFILE.bio}&rdquo;
            </p>

            {/* Role Badge */}
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6D36] text-[11px] font-serif uppercase tracking-widest font-semibold">
              <span>✦</span> The Bride <span>✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
