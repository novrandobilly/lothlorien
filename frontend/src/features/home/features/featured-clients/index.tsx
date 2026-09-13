"use client";

import React from "react";
import { featuredSystems } from "./constants";
import { FeaturedCard } from "./features/featured-card";

export function FeaturedClientsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-16 relative bg-[#131825] border-y border-stone-800/90"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold mb-2 block">
            Enterprise &amp; Client Engagements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif tracking-tight text-stone-100 leading-[1.15]">
            Featured Clients &amp; Enterprise Systems
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-stone-400 font-sans leading-relaxed">
            A curated selection of mission-critical platforms, high-concurrency
            fintech architectures, and corporate digital presences.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {featuredSystems.map((system) => (
            <div key={system.id} className="flex">
              <FeaturedCard system={system} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedClientsSection;
export * from "./constants";
