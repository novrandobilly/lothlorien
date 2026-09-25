"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { VisualCard } from "./features/VisualCard";
import { visualCards } from "./constants";

export function HeroSection() {
  return (
    <section className="relative bg-[#fafaf9] pt-8 sm:pt-12 pb-6 sm:pb-8 overflow-hidden">
      {/* Subtle ambient warm background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-105 h-105 bg-[#f26522]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* =========================================================
              1. LEFT COLUMN: TYPOGRAPHY, STATUS & ACTION BUTTONS
             ========================================================= */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[50px] font-bold tracking-[-0.035em] text-stone-950 leading-[1.14] font-sans">
              <span className="block text-stone-500 font-medium tracking-tight">
                Great ideas start by listening.
              </span>
              <span className="block text-stone-950 font-bold tracking-tight mt-1 sm:mt-1.5">
                What are we building<span className="text-[#f26522]">?</span>
              </span>
            </h1>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-3.5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm sm:text-base font-semibold shadow-sm hover:shadow-md hover:shadow-stone-950/15 transition-all duration-200 group active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#f26522]" />
                <span>Let&apos;s talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full border border-stone-200/90 hover:border-stone-300 bg-white hover:bg-stone-50 text-stone-800 hover:text-stone-950 text-sm sm:text-base font-medium shadow-2xs transition-all duration-200 active:scale-95"
              >
                <span>See what I&apos;ve built</span>
              </Link>
            </div>
          </div>

          {/* =========================================================
              2. RIGHT COLUMN: VISUAL CARDS CONTAINER (BENTO GRID)
              Supports 1 full-width landscape card (col-span-2) + portrait cards.
              Includes top & bottom shadow fade effect.
             ========================================================= */}
          <div className="w-full lg:col-span-5 relative rounded-2xl overflow-hidden lg:mask-[linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)] px-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
              {visualCards.map((card) => (
                <VisualCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
