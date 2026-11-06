import React from "react";
import Image from "next/image";
import { BIBLE_VERSE } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function PreWedVerseSection() {
  return (
    <section id="wedding-verse" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Ornate Scripture Card */}
        <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-10 md:p-12 bg-[#FFFDF9]/90 shadow-[0_15px_40px_rgba(197,160,89,0.08)] text-center backdrop-blur-xs mb-12">
          {/* Inner Frame */}
          <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

          {/* Cross / Dove Floral Accent */}
          <div className="flex justify-center items-center gap-2 mb-4 text-[#C5A059]">
            <span className="text-xs">✦</span>
            <span className="text-xl text-[#7C5E28]">✝</span>
            <span className="text-xs">✦</span>
          </div>

          <p
            className="text-xs sm:text-sm font-serif tracking-[0.25em] uppercase text-[#8C6D36] font-semibold mb-4"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {BIBLE_VERSE.verse}
          </p>

          {/* Scripture English */}
          <blockquote className="font-serif text-base sm:text-lg md:text-xl text-[#3D332A] italic leading-relaxed max-w-2xl mx-auto mb-4 font-normal">
            &ldquo;{BIBLE_VERSE.quoteEn}&rdquo;
          </blockquote>

          {/* Scripture Indonesian */}
          <p className="text-xs sm:text-sm text-[#7A6E68] font-serif leading-relaxed max-w-2xl mx-auto">
            &ldquo;{BIBLE_VERSE.quoteId}&rdquo;
          </p>

          <BotanicalDivider className="mt-6 mb-2" />
        </div>

        {/* Pre-wedding Photo Showcase Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Photo Card */}
          <div className="group relative bg-[#FFFDF9] p-3 sm:p-4 rounded-2xl border border-[#C5A059]/30 shadow-md hover:shadow-xl transition-all duration-300 transform sm:-rotate-1 hover:rotate-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Billy and Gita pre-wedding portrait in golden hour"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-serif tracking-widest uppercase opacity-90">Pre-Wedding Story</p>
                <p className="text-lg font-serif italic">A Lifetime of Grace</p>
              </div>
            </div>
            <p className="text-center font-serif text-xs text-[#8C6D36] mt-3 tracking-widest uppercase font-medium">
              Novrando Billy &amp; Gita
            </p>
          </div>

          {/* Right Photo Card */}
          <div className="group relative bg-[#FFFDF9] p-3 sm:p-4 rounded-2xl border border-[#C5A059]/30 shadow-md hover:shadow-xl transition-all duration-300 transform sm:rotate-1 hover:rotate-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80"
                alt="Billy and Gita holding hands near elven trees"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-serif tracking-widest uppercase opacity-90">Pre-Wedding Story</p>
                <p className="text-lg font-serif italic">Two Souls Bound in Faith</p>
              </div>
            </div>
            <p className="text-center font-serif text-xs text-[#8C6D36] mt-3 tracking-widest uppercase font-medium">
              Saturday, 05 December 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
