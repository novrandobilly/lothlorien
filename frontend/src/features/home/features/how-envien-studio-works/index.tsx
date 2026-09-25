"use client";

import React from "react";
import {
  howEnvienStudioWorksItems,
  HowEnvienStudioWorksItem,
} from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { HowEnvienStudioWorksCard } from "./features/HowEnvienStudioWorksCard";

interface HowEnvienStudioWorksSectionProps {
  title?: string;
  items?: HowEnvienStudioWorksItem[];
  className?: string;
}

export function HowEnvienStudioWorksSection({
  title = "How Envien Studio Works",
  items = howEnvienStudioWorksItems,
  className = "",
}: HowEnvienStudioWorksSectionProps) {
  return (
    <section
      id="how-envien-studio-works"
      className={`scroll-mt-20 relative bg-[#fafaf9] py-10 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} />

        {/* 4-Column Strengths Grid */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {items.map((item) => (
            <HowEnvienStudioWorksCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowEnvienStudioWorksSection;
