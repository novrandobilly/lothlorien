import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { kickserveDetail } from "../constants";

export function KickserveHero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-emerald-500/15 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Back Link & Category */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 hover:text-amber-200 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>{kickserveDetail.category}</span>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-stone-100 leading-[1.1] mb-6">
            {kickserveDetail.title}
          </h1>
          <p className="text-lg sm:text-xl text-stone-300 font-sans leading-relaxed max-w-3xl mb-8">
            {kickserveDetail.subtitle}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#interactive-demo">
              <LothlorienButton
                variant="gold"
                size="md"
                rightIcon={<Play className="w-4 h-4 fill-stone-950" />}
              >
                Try Interactive Demo
              </LothlorienButton>
            </a>
            <Link href="/#contact">
              <LothlorienButton variant="outline" size="md">
                Discuss a Project
              </LothlorienButton>
            </Link>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-stone-800/80">
          {kickserveDetail.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-linear-to-b from-[#0e121b] via-[#090c14] to-[#070910] border border-stone-800/80 hover:border-amber-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-amber-200 mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-200 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-stone-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{metric.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
