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
  title = "Services",
  items = servicesData,
  className = "",
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={`scroll-mt-20 relative bg-[#f4f3ee] border-y border-stone-200/60 py-10 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Uniform Centered Section Header */}
        <SectionHeader title={title} />

        {/* Stacked Service Rows List */}
        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-stone-300/80 flex flex-col">
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
