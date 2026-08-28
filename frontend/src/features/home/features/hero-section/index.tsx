"use client";

import React, { useState, useEffect } from "react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { ArrowRight, Calendar } from "lucide-react";
import { ProofStripSection } from "./features/ProofStripSection";

const heroPairs = [
  {
    asset: "master spreadsheet",
    outcome: "a real-time dashboard",
  },
  {
    asset: "consulting framework",
    outcome: "a dedicated client portal",
  },
  {
    asset: "scoring methodology",
    outcome: "an interactive web engine",
  },
  {
    asset: "manual admin workflow",
    outcome: "a custom business system",
  },
];

// Choose from: "emerald" | "gradient" | "highlight"
const ACTIVE_OUTCOME_STYLE: "emerald" | "gradient" | "highlight" = "gradient";

const OUTCOME_STYLES = {
  emerald: "text-emerald-700 border-b-2 border-emerald-500 pb-0.5",
  gradient:
    "bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent border-b-2 border-emerald-500/70 pb-0.5 inline-block",
  highlight:
    "bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-md border border-emerald-100/80 shadow-2xs inline-block",
};

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
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-96 bg-emerald-100/60 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-left">
        {/* Headline - Split into two stacked rows */}
        <div className="w-full">
          <h1 className="flex flex-col items-start gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal tracking-tight text-stone-900 leading-snug">
            <span className="text-left">
              You already have a great{" "}
              <span
                className={`inline-block font-extrabold text-stone-900 border-b-2 border-emerald-500/30 pb-0.5 ${
                  isVisible ? "animate-roll-in" : "animate-roll-out"
                }`}
              >
                {currentPair.asset}
              </span>
            </span>
            <span className="text-left lg:whitespace-nowrap text-stone-900">
              Let&apos;s scale it into{" "}
              <span
                className={`inline-block font-extrabold ${
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
        <div className="mt-16 flex flex-wrap items-center justify-start gap-6 sm:gap-8">
          <a href="#problem-solution">
            <LothlorienButton
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Find Your Bottleneck
            </LothlorienButton>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-semibold text-stone-700 hover:text-emerald-700 transition-colors group px-3 py-2"
          >
            <Calendar className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-emerald-600">
              Book a Call
            </span>
            <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        <ProofStripSection />
      </div>
    </section>
  );
}
