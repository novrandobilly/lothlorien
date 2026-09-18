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
      className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 relative bg-[#f2eee6] border-y border-stone-200/80 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} />

        {/* 2-Column Testimonials Layout (Clean unboxed columns matching wireframe) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
          {items.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
