"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { VisualCard } from "./features/VisualCard";
import { visualCardsColumn1, visualCardsColumn2 } from "./constants";

export function HeroSection() {
  return (
    <section className="relative bg-[#fafaf9]  pb-14 sm:pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-start">
          {/* =========================================================
              1. LEFT COLUMN: TYPOGRAPHY, CAPTION & ACTION BUTTONS
             ========================================================= */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center text-left self-center">
            {/* Main Headline (Sans-serif, bold, 3 lines matching screenshot) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-bold tracking-[-0.035em] text-stone-950 leading-[1.06] font-sans">
              From Idea to <br />
              Scalable Web <br />
              Systems Instantly
            </h1>

            {/* Subtitle Caption */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-stone-500 font-sans leading-relaxed max-w-lg">
              Stop wrestling with sluggish architectures. We engineer
              high-performance frontend systems, interactive platforms, and
              scalable digital products built for growth.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm sm:text-base font-semibold transition-all group active:scale-95"
              >
                <span>See Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-sm sm:text-base font-medium transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#f26522]" />
                <span>Book an Intro Call</span>
              </Link>
            </div>
          </div>

          {/* =========================================================
              2. RIGHT COLUMN: VISUAL CARDS CONTAINER
              Responsive: w-full on mobile, lg:col-span-5 on desktop.
              Shadow mask is desktop-only (hidden when stacked in column).
             ========================================================= */}
          <div className="w-full lg:col-span-5 relative rounded-xl lg:mask-[linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* --- Column 1 (Slots 1, 2, 3 -> Ratios: 2, 2, 1) --- */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {visualCardsColumn1.map((card) => (
                  <VisualCard key={card.id} {...card} />
                ))}
              </div>

              {/* --- Column 2 (Slots 4, 5, 6 -> Ratios: 1, 2, 2) --- */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {visualCardsColumn2.map((card) => (
                  <VisualCard key={card.id} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
