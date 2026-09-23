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
      className="scroll-mt-20 relative bg-[#fafaf9] py-10 sm:py-14 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title="Selected Works" />

        {/* Feature Cards Bento Grid */}
        <div className="mt-8 sm:mt-10 lg:mt-12 space-y-5 sm:space-y-6">
          {/* Main Top Feature Card (Highlighted Feature 1) */}
          <MainWorkCard work={mainSelectedWork} />

          {/* Bottom 2-Column Grid (Highlighted Features 2 & 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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
