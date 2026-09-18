"use client";

import React from "react";
import { mainSelectedWork, secondarySelectedWorks } from "./constants";
import { MainWorkCard } from "./features/MainWorkCard";
import { SecondaryWorkCard } from "./features/SecondaryWorkCard";
import { SectionHeader } from "./features/SectionHeader";

export function SelectedWorksSection() {
  return (
    <section
      id="work"
      className="relative bg-[#fafaf9] pb-14 sm:pb-20 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title="Selected Works" />

        {/* Feature Cards Bento Grid */}
        <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
          {/* Main Top Feature Card (Highlighted Feature 1) */}
          <MainWorkCard work={mainSelectedWork} />

          {/* Bottom 2-Column Grid (Highlighted Features 2 & 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {secondarySelectedWorks.map((work) => (
              <SecondaryWorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorksSection;
