"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Image as ImageIcon } from "lucide-react";
import { ProofStripSection } from "./features/ProofStripSection";

interface VisualSlotProps {
  id: string;
  slotNumber: string;
  title: string;
  subtitle: string;
  heightRatio: 1 | 2;
  bgClass: string;
  borderClass?: string;
  isDark?: boolean;
  imageUrl?: string; // Easy slot for user to plug real images later
  accentElement?: React.ReactNode;
}

function VisualCard({
  slotNumber,
  title,
  subtitle,
  heightRatio,
  bgClass,
  borderClass,
  isDark = false,
  imageUrl,
  accentElement,
}: VisualSlotProps) {
  const defaultBorder = isDark
    ? "border border-stone-800"
    : "border border-stone-200/80";

  // Height ratio: 2 -> aspect-square (1:1), 1 -> aspect-[2/1] (2:1 width to height)
  // Both have identical width, so height ratio is exactly 2:1
  const aspectClass = heightRatio === 2 ? "aspect-[3/4]" : "aspect-[3/2]";

  return (
    <div
      className={`relative w-full ${aspectClass} ${bgClass} ${borderClass ?? defaultBorder} rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.01] select-none group`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className={`absolute inset-0 flex flex-col justify-between ${
            heightRatio === 1 ? "p-2.5 sm:p-3.5" : "p-3.5 sm:p-4"
          }`}
        >
          {/* Subtle Accent Graphics */}
          {accentElement && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {accentElement}
            </div>
          )}

          {/* Top Pill / Slot Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                isDark
                  ? "bg-white/10 text-stone-300 border border-white/15"
                  : "bg-black/5 text-stone-700 border border-black/5"
              }`}
            >
              {slotNumber}
            </span>
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                isDark ? "bg-white/10 text-white" : "bg-black/5 text-stone-700"
              }`}
            >
              <ImageIcon className="w-3 h-3" />
            </div>
          </div>

          {/* Bottom Label Context */}
          <div className="relative z-10">
            <p
              className={`text-xs sm:text-sm font-bold tracking-tight font-sans line-clamp-1 ${
                isDark ? "text-white" : "text-stone-900"
              }`}
            >
              {title}
            </p>
            <p
              className={`text-[10px] sm:text-[11px] font-sans line-clamp-1 ${
                isDark ? "text-stone-400" : "text-stone-500"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

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
              {/* --- Column 1 (Slots 1, 2, 3 -> Ratios: 2, 1, 2) --- */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* 1st Card: Height Ratio 2 */}
                <VisualCard
                  id="slot-1"
                  slotNumber="01"
                  title="Brand Architecture"
                  subtitle="Warm Sand • Ratio 2"
                  heightRatio={2}
                  bgClass="bg-[#f3ebe1]"
                />

                {/* 2nd Card: Height Ratio 1 */}
                <VisualCard
                  id="slot-2"
                  slotNumber="02"
                  title="Enterprise Systems"
                  subtitle="Noir Monochrome • Ratio 1"
                  heightRatio={2}
                  bgClass="bg-[#121316]"
                  isDark={true}
                  accentElement={
                    <div className="absolute inset-x-6 top-1/2 h-px bg-white/10" />
                  }
                />

                {/* 3rd Card: Height Ratio 2 */}
                <VisualCard
                  id="slot-3"
                  slotNumber="03"
                  title="System Visuals"
                  subtitle="Deep Obsidian • Ratio 2"
                  heightRatio={1}
                  bgClass="bg-[#0a0a0c]"
                  isDark={true}
                />
              </div>

              {/* --- Column 2 (Slots 4, 5, 6 -> Ratios: 2, 2, 1) --- */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* 4th Card: Height Ratio 2 */}
                <VisualCard
                  id="slot-4"
                  slotNumber="04"
                  title="Product Experience"
                  subtitle="Organic Sage • Ratio 2"
                  heightRatio={1}
                  bgClass="bg-[#e4ece5]"
                />

                {/* 5th Card: Height Ratio 2 */}
                <VisualCard
                  id="slot-5"
                  slotNumber="05"
                  title="Core Interfaces"
                  subtitle="Cyan & Amber • Ratio 2"
                  heightRatio={2}
                  bgClass="bg-gradient-to-b from-[#328ebc] 50% to-[#e09819] 50%"
                  isDark={true}
                  accentElement={
                    <div className="absolute right-6 inset-y-0 w-8 flex flex-col justify-around py-3 opacity-30">
                      <div className="w-full h-1 bg-white rounded-full" />
                      <div className="w-full h-1 bg-white rounded-full" />
                      <div className="w-full h-1 bg-white rounded-full" />
                      <div className="w-full h-1 bg-white rounded-full" />
                    </div>
                  }
                />

                {/* 6th Card: Height Ratio 1 */}
                <VisualCard
                  id="slot-6"
                  slotNumber="06"
                  title="Studio Showcase"
                  subtitle="Ceramic Tone • Ratio 1"
                  heightRatio={2}
                  bgClass="bg-[#eae4dc]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Metric Proof Strip below */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-stone-200/80">
          <ProofStripSection />
        </div>
      </div>
    </section>
  );
}
