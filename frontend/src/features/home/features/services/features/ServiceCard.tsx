import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "../constants";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const {
    number,
    tag,
    title,
    description,
    formatTitle = "Format",
    format,
    ctaText = "Get in touch",
    ctaUrl = "#contact",
  } = service;

  return (
    <div className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full bg-white text-stone-950 border border-stone-200/80 transition-all duration-300 hover:border-stone-300 hover:shadow-md hover:-translate-y-0.5">
      <div>
        {/* =========================================================
            TOP ROW: TAG BADGE & NUMBER
           ========================================================= */}
        <div className="flex items-center justify-between gap-2 w-full">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-50 border border-stone-200/80 text-stone-700 font-sans shadow-2xs">
            {tag}
          </span>
          <span className="text-xl sm:text-2xl font-light font-sans text-stone-400 group-hover:text-stone-950 transition-colors duration-200">
            {number}
          </span>
        </div>

        {/* =========================================================
            TITLE
           ========================================================= */}
        <div className="mt-4 sm:mt-5">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans leading-tight text-stone-950">
            {title}
          </h3>
        </div>

        {/* =========================================================
            DESCRIPTION
           ========================================================= */}
        <p className="mt-3 text-[15px] sm:text-base font-sans text-stone-600 leading-relaxed">
          {description}
        </p>

        {/* =========================================================
            FORMAT / DELIVERY SPECIFICATIONS
           ========================================================= */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-stone-100">
          <span className="text-xs font-semibold uppercase tracking-wider font-sans text-stone-400">
            {formatTitle}
          </span>
          <ul className="mt-2.5 space-y-2">
            {format.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-stone-600 leading-snug"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-[#f26522]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* =========================================================
          SUBTLE CTA ANCHOR
         ========================================================= */}
      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          href={ctaUrl}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-950 group-hover:text-stone-950 transition-colors duration-200 font-sans group/cta"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 group-hover/cta:text-stone-950 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
