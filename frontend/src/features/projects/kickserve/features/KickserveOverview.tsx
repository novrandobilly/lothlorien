import React from "react";
import { AlertCircle, CheckCircle, Lightbulb } from "lucide-react";
import { kickserveDetail } from "../constants";

export function KickserveOverview() {
  const { overview } = kickserveDetail;

  return (
    <section className="py-20 bg-[#0c0f17] border-y border-stone-800/90 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Background Narrative */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            Background & Motivation
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-100 mb-6">
            Bridging Physical Court Chaos with Clean Digital Flow
          </h2>
          <p className="text-stone-300 font-sans text-base sm:text-lg leading-relaxed">
            {overview.background}
          </p>
        </div>

        {/* Problem vs Solution Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="p-8 rounded-3xl bg-linear-to-b from-[#191114] to-[#0f0b0d] border border-red-900/40 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-800/50 text-red-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-stone-100">
                  The Bottleneck
                </h3>
                <p className="text-xs text-red-300/80 font-sans">
                  The friction in typical social sports organizing
                </p>
              </div>
            </div>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              {overview.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="p-8 rounded-3xl bg-linear-to-b from-[#0c1815] to-[#07100e] border border-emerald-500/40 shadow-xl relative">
            <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              The Architecture
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-600/50 text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium text-stone-100">
                  The Kickserve Solution
                </h3>
                <p className="text-xs text-emerald-400/80 font-sans">
                  Instant, zero-login, offline-first execution
                </p>
              </div>
            </div>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              {overview.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
