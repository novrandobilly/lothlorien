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
      className={`scroll-mt-20 relative bg-stone-950 text-stone-300 border-y border-stone-800 py-12 sm:py-16 lg:py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Uniform Centered Section Header */}
        <SectionHeader title={title} />

        {/* Stacked Service Rows List */}
        <div className="mt-10 sm:mt-12 lg:mt-14 border-t border-stone-800 flex flex-col">
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
