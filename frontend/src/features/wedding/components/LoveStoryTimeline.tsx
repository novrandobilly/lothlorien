import React from "react";
import Image from "next/image";
import { LOVE_STORY_MILESTONES } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function LoveStoryTimeline() {
  return (
    <section id="wedding-story" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Our Journey of Love
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Kisah Kasih Billy &amp; Gita
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-lg mx-auto italic">
            Dari awal perjumpaan di bulan November 2025 hingga harapan kekal di September 2027 dan seterusnya.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Gold Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#ECC875] via-[#C5A059] to-[#8C6D36]" />

          <div className="space-y-12 sm:space-y-16">
            {LOVE_STORY_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.period}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#FFFDF9] border-2 border-[#C5A059] flex items-center justify-center shadow-md">
                    <span className="text-[#8C6D36] text-xs">❦</span>
                  </div>

                  {/* Content Card (offset left on mobile, alternated on desktop) */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="relative border border-[#C5A059]/35 rounded-2xl p-5 sm:p-6 bg-[#FFFDF9]/95 shadow-[0_10px_30px_rgba(197,160,89,0.06)] hover:shadow-md transition-shadow">
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6D36] text-[11px] font-serif uppercase tracking-widest font-semibold mb-3">
                        <span>✦</span> {milestone.period}
                      </div>

                      {/* Milestone Title */}
                      <h3
                        className="text-lg sm:text-xl font-serif font-bold text-[#2C2523] mb-2"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {milestone.title}
                      </h3>

                      {/* Image Preview if present */}
                      {milestone.image && (
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 border border-[#C5A059]/20">
                          <Image
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 400px"
                            className="object-cover"
                          />
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#5E524D] font-serif leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Highlight */}
                      {milestone.highlight && (
                        <p className="mt-3 text-[11px] sm:text-xs text-[#8C6D36] italic font-serif border-t border-[#C5A059]/20 pt-2">
                          &ldquo;{milestone.highlight}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
