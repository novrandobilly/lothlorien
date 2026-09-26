"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

// Curated high-res Unsplash photo matching modern design & software engineering studio
const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  return (
    <section className="relative bg-stone-950 overflow-hidden">
      {/* Top Main Hero Canvas with Background Photo */}
      <div className="relative min-h-145 sm:min-h-165 lg:min-h-185 flex items-center overflow-hidden">
        {/* Background Photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_BG_IMAGE}
            alt="Envien Studio - Digital Product & Web Engineering Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] sm:object-right"
          />
          {/* Multi-stop gradient overlay for strong text contrast on the left while keeping photo visible on the right */}
          <div className="absolute inset-0 bg-linear-to-r from-stone-950/95 via-stone-950/80 to-stone-950/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-stone-950/40" />

          {/* Ambient warm studio glow */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-40 lg:pt-48 pb-28 sm:pb-36 lg:pb-40">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-bold tracking-[-0.035em] text-white leading-[1.14] font-sans drop-shadow-sm">
              <span className="block text-stone-300 font-medium tracking-tight">
                Great ideas start by listening.
              </span>
              <span className="block text-white font-bold tracking-tight mt-1 sm:mt-2">
                What should we build together
                <span className="text-[#f26522]">?</span>
              </span>
            </h1>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-3.5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#f26522] hover:bg-[#d95316] text-white text-sm sm:text-base font-semibold shadow-lg shadow-[#f26522]/25 transition-all duration-200 group active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Let&apos;s talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white text-sm sm:text-base font-medium shadow-2xs transition-all duration-200 active:scale-95"
              >
                <span>See what I&apos;ve built</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
