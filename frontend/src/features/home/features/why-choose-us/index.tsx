"use client";

import React from "react";
import { whyChooseUsItems, WhyChooseUsItem } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { WhyChooseUsCard } from "./features/WhyChooseUsCard";

interface WhyChooseUsSectionProps {
  title?: string;
  items?: WhyChooseUsItem[];
  className?: string;
}

export function WhyChooseUsSection({
  title = "Why Choose Us",
  items = whyChooseUsItems,
  className = "",
}: WhyChooseUsSectionProps) {
  return (
    <section
      id="why-choose-us"
      className={`scroll-mt-20 relative bg-[#f4f3ee] border-y border-stone-200/60 py-10 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} />

        {/* 4-Column Strengths Grid */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {items.map((item) => (
            <WhyChooseUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
