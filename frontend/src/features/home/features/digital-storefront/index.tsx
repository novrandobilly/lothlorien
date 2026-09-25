"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { digitalStorefrontProjects, DigitalStorefrontProject } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { DigitalStorefrontCard } from "./features/DigitalStorefrontCard";

interface DigitalStorefrontSectionProps {
  title?: string;
  description?: string;
  projects?: DigitalStorefrontProject[];
  className?: string;
}

export function DigitalStorefrontSection({
  title = "Digital Storefront",
  description = "Explorations, creative experiments, and interactive prototypes built for the love of craft.",
  projects = digitalStorefrontProjects,
  className = "",
}: DigitalStorefrontSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability, projects]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth =
      el.querySelector<HTMLElement>(".storefront-card-item")?.offsetWidth || 320;
    const scrollAmount = cardWidth + 24; // Card width + gap

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="digital-storefront"
      className={`scroll-mt-20 relative bg-[#f4f3ee] border-y border-stone-200/60 py-10 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Uniform Centered Section Header */}
        <SectionHeader title={title} description={description} />

        {/* Carousel Container */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          {/* Controls visible when content overflows or on responsive screens */}
          {(canScrollLeft || canScrollRight) && (
            <div className="flex items-center justify-end gap-2 mb-3 sm:mb-4">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-300/80 bg-white text-stone-800 transition-all duration-200 hover:bg-stone-950 hover:text-white hover:border-stone-950 active:scale-95 disabled:opacity-30 disabled:pointer-events-none shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-300/80 bg-white text-stone-800 transition-all duration-200 hover:bg-stone-950 hover:text-white hover:border-stone-950 active:scale-95 disabled:opacity-30 disabled:pointer-events-none shadow-2xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Carousel Scroll Track - Left Aligned */}
          <div
            ref={scrollContainerRef}
            className="flex justify-start gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="storefront-card-item snap-start shrink-0 w-70 sm:w-76.25 md:w-81.25"
              >
                <DigitalStorefrontCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalStorefrontSection;
