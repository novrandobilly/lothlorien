"use client";

import React from "react";
import { testimonialsData, TestimonialItem } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { TestimonialCard } from "./features/TestimonialCard";

interface TestimonialsSectionProps {
  title?: string;
  items?: TestimonialItem[];
  className?: string;
}

export function TestimonialsSection({
  title = "What they say",
  items = testimonialsData,
  className = "",
}: TestimonialsSectionProps) {
  return (
    <section
      id="what-they-say"
      className={`scroll-mt-20 py-10 sm:py-14 lg:py-16 relative bg-[#f4f3ee] border-y border-stone-200/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} />

        {/* 2-Column Testimonials Layout (Clean unboxed columns matching wireframe) */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 xl:gap-24 items-start">
          {items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
