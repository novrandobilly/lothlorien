import React from "react";
import { Cpu, Trophy, BarChart3, Share2, Check } from "lucide-react";
import { kickserveDetail } from "../constants";

const ICON_MAP = {
  Cpu,
  Trophy,
  BarChart3,
  Share2,
};

export function KickserveFeatures() {
  return (
    <section className="py-24 bg-[#090b10] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-100 mb-4">
            Key Architectural Features
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base">
            Engineered for blistering speed, offline resilience, and intuitive court-side operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kickserveDetail.features.map((feature, idx) => {
            const Icon =
              ICON_MAP[feature.icon as keyof typeof ICON_MAP] || Cpu;

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-linear-to-b from-[#0e121b] via-[#090c14] to-[#070910] border border-stone-800/80 hover:border-amber-500/40 shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 group-hover:scale-105 group-hover:border-amber-400/40 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-stone-100 group-hover:text-amber-200 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-stone-400 text-sm leading-relaxed mb-6 font-sans">
                  {feature.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-stone-800/80">
                  {feature.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
