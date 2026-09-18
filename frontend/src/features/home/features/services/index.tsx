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
      </div>
    </section>
  );
}

export default ServicesSection;
