import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "../constants";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  const {
    number,
    title,
    description,
    benefitsTitle = service.formatTitle || "Benefits",
    benefits = service.format || [],
    ctaText = "Get in touch",
    ctaUrl = "#contact",
  } = service;

  // Format number with leading slash: /01, /02, etc.
  const formattedNumber = `/${number.replace(/^\/?/, "")}`;

  return (
    <div
      className={`group relative py-5 sm:py-6 lg:py-7 border-b border-stone-300/80 transition-colors duration-300 ${className}`}
    >
      {/* Mobile (< md) Layout: Number and Title on top */}
      <div className="flex md:hidden items-start gap-3 mb-2.5">
        <span className="text-lg font-serif italic text-stone-400 shrink-0 mt-0.5">
          {formattedNumber}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-stone-950 font-sans leading-snug">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-start">
        {/* =========================================================
            COLUMN 1: NUMBER (Tablet & Desktop >= md)
           ========================================================= */}
        <div className="hidden md:block md:col-span-1 pt-0.5">
          <span className="text-lg sm:text-xl lg:text-2xl font-serif italic text-stone-400 group-hover:text-stone-950 transition-colors duration-200">
            {formattedNumber}
          </span>
        </div>

        {/* =========================================================
            COLUMN 2: SERVICE TITLE (Tablet & Desktop >= md)
           ========================================================= */}
        <div className="hidden md:flex md:col-span-5 lg:col-span-6 flex-col items-start pr-2 lg:pr-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-normal tracking-tight text-stone-950 font-sans leading-snug">
            {title}
          </h3>
        </div>

        {/* =========================================================
            COLUMN 3: DESCRIPTION, BENEFITS SPECIFICATIONS & CTA
           ========================================================= */}
        <div className="w-full md:col-span-6 lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Description */}
            <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed">
              {description}
            </p>

            {/* Benefits Specifications */}
            {benefits && benefits.length > 0 && (
              <div className="mt-3 sm:mt-3.5 pt-2.5 sm:pt-3 border-t border-stone-200/70">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider font-sans text-stone-400">
                  {benefitsTitle}
                </span>
                <ul className="mt-1.5 space-y-1 sm:space-y-1.5">
                  {benefits.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-[13px] font-sans text-stone-600 leading-tight"
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1 bg-[#f26522]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Screenshot-styled CTA Anchor with expanding dash line and arrow */}
          <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-stone-200/70 flex items-center justify-between">
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-stone-600 hover:text-stone-950 group/cta transition-colors duration-200 font-sans"
            >
              <span>{ctaText}</span>
              <span className="inline-block w-6 sm:w-8 h-px bg-stone-300 group-hover/cta:bg-stone-950 group-hover/cta:w-10 sm:group-hover/cta:w-12 transition-all duration-200" />
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/cta:text-[#f26522] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
