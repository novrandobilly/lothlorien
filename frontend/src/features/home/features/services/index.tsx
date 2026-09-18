"use client";

import React from "react";
import { servicesData, ServiceItem } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { ServiceCard } from "./features/ServiceCard";

interface ServicesSectionProps {
  title?: string;
  items?: ServiceItem[];
  className?: string;
}

export function ServicesSection({
  title = "What We Offer",
  items = servicesData,
  className = "",
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={`relative bg-[#fafaf9] py-14 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header (No description subtitle) */}
        <SectionHeader title={title} />

        {/* 3-Column Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Reassurance Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-stone-900 font-sans">
            <span>Fixed-Scope Milestones</span>
            <span className="text-stone-300">•</span>
            <span>Direct Senior Execution</span>
            <span className="text-stone-300">•</span>
            <span>Zero Hourly Surprises</span>
          </div>

          <p className="text-xs sm:text-sm text-stone-500 font-sans">
            Clear deliverables, fast turnaround, and transparent scopes before day one.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
