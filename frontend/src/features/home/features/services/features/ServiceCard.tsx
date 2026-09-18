import React from "react";
import { ServiceItem } from "../constants";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const {
    number,
    timeline,
    title,
    whatYouGetTitle = "What You Get",
    whatYouGet,
    bestForTitle = "Best For",
    bestFor,
  } = service;

  return (
    <div className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-start h-full bg-white text-stone-950 border border-stone-200/80 transition-all duration-300 hover:border-stone-300 hover:shadow-sm select-none">
      {/* =========================================================
          TOP ROW: TOP-RIGHT NUMBER
         ========================================================= */}
      <div className="flex items-center justify-end w-full">
        <span className="text-2xl sm:text-3xl tracking-tight font-sans text-stone-400 group-hover:text-stone-950 font-light transition-colors duration-200">
          {number}
        </span>
      </div>

      {/* =========================================================
          TITLE & ESTIMATED TIMELINE
         ========================================================= */}
      <div className="mt-4 sm:mt-5">
        <div className="flex items-start mb-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans leading-tight text-stone-950">
            {title}
          </h3>
        </div>

        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-50 text-stone-600 border border-stone-200/80 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" />
          <span>Estimated {timeline}</span>
        </div>
      </div>

      {/* =========================================================
          STRUCTURED SECTIONS: WHAT YOU GET & BEST FOR
         ========================================================= */}
      <div className="mt-5 space-y-4">
        {/* Section 1: What You Get */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider font-sans text-stone-500">
            {whatYouGetTitle}
          </span>
          <ul className="mt-2.5 space-y-1.5">
            {whatYouGet.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[16px] font-sans leading-relaxed text-stone-600"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2 bg-stone-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Best For */}
        <div className="pt-0.5">
          <span className="text-xs font-semibold uppercase tracking-wider font-sans text-stone-500">
            {bestForTitle}
          </span>
          <ul className="mt-2.5 space-y-1.5">
            {bestFor.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-[16px] font-sans leading-relaxed text-stone-600"
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2 bg-stone-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
