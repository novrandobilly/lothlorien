"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-28 sm:pb-36 lg:pb-40">
          <div className="max-w-3xl">
            {/* Primary Headline - Strictly 2 rows, no wrap on all screen sizes */}
            <h1 className="text-[clamp(1.15rem,5.5vw,3.75rem)] font-bold tracking-tight text-white leading-[1.15] font-sans drop-shadow-sm">
              <span className="block whitespace-nowrap text-stone-300 font-medium tracking-tight">
                Great ideas start by listening.
              </span>
              <span className="block whitespace-nowrap text-white font-bold tracking-tight mt-1 sm:mt-1.5">
                What are we building<span className="text-[#f26522]">?</span>
              </span>
            </h1>

            {/* Subtitle / Philosophy & Value Proposition Placeholder */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed drop-shadow-xs">
              We engineer high-performance web systems, bespoke digital products, and intuitive user experiences designed to scale seamlessly with your business.
            </p>

            {/* Actions: Structured Solid Primary Button + Minimal Text Link */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
              <Button
                href="#contact"
                leftIcon={<MessageSquare className="w-4 h-4 text-white" />}
                rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              >
                Let&apos;s talk
              </Button>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 py-2 px-1 text-sm sm:text-base font-medium text-stone-300 hover:text-white transition-colors group/work"
              >
                <span>See what I&apos;ve built</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover/work:text-white group-hover/work:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
