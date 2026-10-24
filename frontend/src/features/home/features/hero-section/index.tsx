import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
  return (
    <section className="relative bg-stone-950 overflow-hidden">
      {/* Top Main Hero Canvas with Background Photo */}
      <div className="relative min-h-svh sm:min-h-165 lg:min-h-185 flex items-center overflow-hidden">
        {/* Background Photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_BG_IMAGE}
            alt="Envien Studio - Digital Product & Web Engineering Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%] sm:object-right"
          />
          {/* Multi-stop gradient overlay for strong text contrast on the left while keeping photo visible on the right */}
          <div className="absolute inset-0 bg-linear-to-r from-stone-950/95 via-stone-950/75 to-stone-950/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 via-transparent to-stone-950/40" />

          {/* Ambient warm studio glow */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-28 sm:pb-36 lg:pb-40">
          <div className="max-w-3xl">
            {/* ========================================================================= */}
            {/* EXPERIMENTAL HERO CONTENT (Active)                                        */}
            {/* 1. Value Proposition Headline                                             */}
            {/* 2. Money Back Guarantee                                                   */}
            {/* 3. 1-minute assessment prompt & dummy button                              */}
            {/* ========================================================================= */}
            {/* <div>
              <h1 className="text-[clamp(2.1rem,5.8vw,3.75rem)] font-bold tracking-tight text-white leading-[1.18] font-sans drop-shadow-sm">
                Let&apos;s build your business landing page that you love and
                proud of in <span className="text-[#f26522]">3 weeks</span>.
              </h1>

              <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-stone-200 text-xs sm:text-sm font-medium backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-[#f26522] shrink-0" />
                <span>
                  Money Back Guarantee if you&apos;re not happy with the design
                </span>
              </div>

              <p className="mt-4 sm:mt-5 max-w-2xl text-base md:text-lg text-stone-300 font-normal leading-relaxed drop-shadow-xs">
                Take this 1 minute assessment to determine your style and
                preferences. See if we&apos;re good fit.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Button
                  href="#assessment"
                  className="w-full sm:w-auto"
                  leftIcon={<Sparkles className="w-4 h-4 text-white" />}
                >
                  Take 1-Minute Assessment
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  leftIcon={<MessageSquare className="w-4 h-4 text-white" />}
                >
                  Let&apos;s talk
                </Button>
                <Link
                  href="#work"
                  className="inline-flex items-center justify-start sm:justify-start gap-2 py-2 px-1 text-sm sm:text-base font-medium text-stone-300 hover:text-white transition-colors group/work"
                >
                  <span>See recent works</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover/work:text-white group-hover/work:translate-x-1 transition-all" />
                </Link>
              </div>
            </div> */}

            {/* ========================================================================= */}
            {/* ORIGINAL HERO CONTENT (Commented out for experiment toggle)               */}
            {/* To switch back: comment out the experimental block above and uncomment   */}
            {/* the block below.                                                          */}
            {/* ========================================================================= */}
            {/*
            <div>
              <h1 className="text-[clamp(2rem,6.8vw,3.75rem)] font-bold tracking-tight text-white leading-[1.15] font-sans drop-shadow-sm">
                <span className="block whitespace-nowrap text-stone-300 font-medium tracking-tight">
                  Listening comes first.
                </span>
                <span className="block whitespace-nowrap text-white font-bold tracking-tight mt-1 sm:mt-1.5">
                  What&apos;s your vision<span className="text-[#f26522]">?</span>
                </span>
              </h1>

              <p className="mt-5 sm:mt-6 max-w-2xl text-base md:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed drop-shadow-xs">
                Great products are never built from guesswork.
              </p>
              <p className="max-w-2xl text-base md:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed drop-shadow-xs">
                When clarity leads the architecture, growth naturally follows.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Button
                  href="#contact"
                  className="w-full sm:w-auto"
                  leftIcon={<MessageSquare className="w-4 h-4 text-white" />}
                >
                  Let&apos;s talk
                </Button>
                <Link
                  href="#work"
                  className="inline-flex items-center justify-start sm:justify-start gap-2 py-2 px-1 text-sm sm:text-base font-medium text-stone-300 hover:text-white transition-colors group/work"
                >
                  <span>See recent works</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover/work:text-white group-hover/work:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
            */}
            <div>
              {/* Responsive 2-tier Headline */}
              {/* Presets:
                  - Default / Balanced: text-[clamp(1.5rem,3.4vw,2.65rem)]
                  - Compact:            text-[clamp(1.35rem,3vw,2.4rem)]
                  - Large:              text-[clamp(1.65rem,3.8vw,2.85rem)]
              */}
              <h1 className="text-[clamp(1.35rem,3vw,2.4rem)] font-bold tracking-tight text-white leading-[1.18] font-sans drop-shadow-sm">
                <span className="block whitespace-normal sm:whitespace-nowrap text-stone-300 font-medium tracking-tight">
                  Build a website you truly love and are proud of.
                </span>
                <span className="block whitespace-normal sm:whitespace-nowrap text-white font-bold tracking-tight mt-1 sm:mt-1.5">
                  Live for your business in{" "}
                  <span className="text-[#f26522]">3 weeks.</span>
                </span>
              </h1>
              {/* <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-stone-200 text-xs sm:text-sm font-medium backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-[#f26522] shrink-0" />
                <span>
                  Money Back Guarantee if you&apos;re not happy with the design
                </span>
              </div> */}
              <p className="mt-5 sm:mt-6 max-w-2xl text-base md:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed drop-shadow-xs">
                Money back guarantee if you&apos;re not happy with the design
              </p>
              {/* <p className="max-w-2xl text-base md:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed drop-shadow-xs">
                When clarity leads the architecture, growth naturally follows.
              </p> */}

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Button
                  href="#contact"
                  className="w-full sm:w-auto"
                  leftIcon={<MessageSquare className="w-4 h-4 text-white" />}
                >
                  Let&apos;s talk
                </Button>
                <Link
                  href="#work"
                  className="inline-flex items-center justify-start sm:justify-start gap-2 py-2 px-1 text-sm sm:text-base font-medium text-stone-300 hover:text-white transition-colors group/work"
                >
                  <span>See recent works</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover/work:text-white group-hover/work:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
