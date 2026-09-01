"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { ArrowRight, Calendar } from "lucide-react";
import { ProofStripSection } from "./features/ProofStripSection";
import {
  heroPairs,
  ACTIVE_OUTCOME_STYLE,
  OUTCOME_STYLES,
} from "./constants";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroPairs.length);
        setIsVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentPair = heroPairs[index];

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24 bg-[#090b10]">
      {/* Dynamic rolling animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes rollOut {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        @keyframes rollIn {
          0% { transform: translateY(-8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-roll-out {
          animation: rollOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-roll-in {
          animation: rollIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `,
        }}
      />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-96 bg-radial from-emerald-500/10 via-amber-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-left">
        {/* Headline - Split into two stacked rows */}
        <div className="w-full">
          <h1 className="flex flex-col items-start gap-2.5 sm:gap-3.5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight font-serif text-stone-100 leading-tight">
            <span className="text-left">
              You already have a great{" "}
              <span
                className={`inline-block font-medium italic text-stone-100 border-b border-amber-500/40 pb-0.5 ${
                  isVisible ? "animate-roll-in" : "animate-roll-out"
                }`}
              >
                {currentPair.asset}
              </span>
            </span>
            <span className="text-left lg:whitespace-nowrap text-stone-100">
              Let&apos;s scale it into{" "}
              <span
                className={`inline-block font-medium ${
                  isVisible ? "animate-roll-in" : "animate-roll-out"
                } ${OUTCOME_STYLES[ACTIVE_OUTCOME_STYLE]}`}
              >
                {currentPair.outcome}
              </span>
              .
            </span>
          </h1>
        </div>

        {/* Action Buttons: Main CTA + Link text */}
        <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-start gap-5 sm:gap-7">
          <Link href="#problem-solution">
            <LothlorienButton
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4.5 h-4.5" />}
            >
              Find Your Bottleneck
            </LothlorienButton>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-stone-300 hover:text-amber-200 transition-colors group px-2 py-2"
          >
            <Calendar className="w-4.5 h-4.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="underline underline-offset-4 decoration-stone-700 group-hover:decoration-amber-400/70">
              Book a Call
            </span>
            <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>

        <ProofStripSection />
      </div>
    </section>
  );
}
