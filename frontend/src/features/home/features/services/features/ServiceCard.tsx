import React from "react";
import { ServiceItem } from "../constants";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const {
    number,
    title,
    whatYouGetTitle = "What You Get",
    whatYouGet,
    whyItMattersTitle = "Why It Matters",
    whyItMatters,
  } = service;

  return (
    <div className="group relative rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-10 flex flex-col min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] bg-white text-stone-950 border border-stone-200/90 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-stone-400 select-none">
      {/* =========================================================
          TOP: NUMBER (01, 02, 03) ALIGNED TO TOP-RIGHT
         ========================================================= */}
      <div className="flex justify-end w-full">
        <span className="text-3xl sm:text-4xl tracking-tight font-sans text-stone-700 group-hover:text-stone-950 font-normal transition-colors duration-200">
          {number}
        </span>
      </div>

      {/* =========================================================
          CONTENT: TITLE + WHAT YOU GET + WHY IT MATTERS
         ========================================================= */}
      <div className="mt-4 sm:mt-5 space-y-5 sm:space-y-6">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans leading-tight text-stone-950">
          {title}
        </h3>

        {/* Structured Sections */}
        <div className="space-y-5 sm:space-y-6">
          {/* Section 1: What You Get */}
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-sans text-stone-900">
              {whatYouGetTitle}
            </span>
            <ul className="mt-2.5 space-y-2">
              {whatYouGet.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm sm:text-base font-sans leading-relaxed text-stone-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2 bg-stone-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Why It Matters */}
          <div className="pt-1">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-sans text-stone-900">
              {whyItMattersTitle}
            </span>
            <ul className="mt-2.5 space-y-2">
              {whyItMatters.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm sm:text-base font-sans leading-relaxed text-stone-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2 bg-stone-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
