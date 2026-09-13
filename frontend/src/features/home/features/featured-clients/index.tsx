"use client";

import React from "react";
import { featuredSystems } from "./constants";
import { FeaturedCard } from "./features/featured-card";

export function FeaturedClientsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-white border-b border-stone-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title (Uppercase, bold, matching screenshot) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-stone-950 uppercase mb-8 sm:mb-12">
          Featured &amp; Enterprise
        </h2>

        {/* Divided List Rows */}
        <div className="border-t border-stone-200 divide-y divide-stone-200">
          {featuredSystems.map((system) => (
            <FeaturedCard key={system.id} system={system} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedClientsSection;
export * from "./constants";
