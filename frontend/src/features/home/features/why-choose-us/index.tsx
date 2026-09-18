"use client";

import React from "react";
import { whyChooseUsItems, WhyChooseUsItem } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { WhyChooseUsCard } from "./features/WhyChooseUsCard";

interface WhyChooseUsSectionProps {
  title?: string;
  subtitle?: string;
  items?: WhyChooseUsItem[];
  className?: string;
}

export function WhyChooseUsSection({
  title = "Why Choose Us",
  subtitle,
  items = whyChooseUsItems,
  className = "",
}: WhyChooseUsSectionProps) {
  return (
    <section
      id="why-choose-us"
      className={`relative bg-[#fafaf9] py-14 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} subtitle={subtitle} />

        {/* 4-Column Strengths Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-10">
          {items.map((item) => (
            <WhyChooseUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
