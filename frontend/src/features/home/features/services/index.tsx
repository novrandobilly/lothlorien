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
      className={`scroll-mt-20 relative bg-[#fafaf9] py-10 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header (No description subtitle) */}
        <SectionHeader title={title} />

        {/* 3-Column Cards Grid */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
