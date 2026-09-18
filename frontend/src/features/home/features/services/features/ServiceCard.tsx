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
    icon: Icon,
    timeline,
    title,
    whatYouGetTitle = "What You Get",
    whatYouGet,
    bestForTitle = "Best For",
    bestFor,
    ctaText,
    ctaUrl = "#contact",
  } = service;

  return (
    <div className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-white text-stone-950 border border-stone-200/90 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-stone-400 select-none">
      <div>
        {/* =========================================================
            TOP ROW: TOP-LEFT ICON & TOP-RIGHT NUMBER
           ========================================================= */}
        <div className="flex items-center justify-between w-full">
          <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200/80 flex items-center justify-center text-stone-800 group-hover:bg-stone-950 group-hover:text-white transition-all duration-300 shadow-xs">
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span className="text-2xl sm:text-3xl tracking-tight font-sans text-stone-500 group-hover:text-stone-950 font-light transition-colors duration-200">
            {number}
          </span>
        </div>

        {/* =========================================================
            TITLE & ESTIMATED TIMELINE (UNDER TITLE)
           ========================================================= */}
        <div className="mt-5">
          <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight font-sans leading-tight text-stone-950">
            {title}
          </h3>

          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-700 font-mono border border-stone-200/60">
            <span>⚡ Estimated {timeline}</span>
          </div>
        </div>

        {/* =========================================================
            STRUCTURED SECTIONS: WHAT YOU GET & BEST FOR
           ========================================================= */}
        <div className="mt-6 space-y-5">
          {/* Section 1: What You Get */}
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-sans text-stone-900">
              {whatYouGetTitle}
            </span>
            <ul className="mt-2.5 space-y-1.5">
              {whatYouGet.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-[13px] font-sans leading-relaxed text-stone-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-stone-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Best For */}
          <div className="pt-0.5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-sans text-stone-900">
              {bestForTitle}
            </span>
            <ul className="mt-2.5 space-y-1.5">
              {bestFor.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-[13px] font-sans leading-relaxed text-stone-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 bg-stone-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================================
          ACTION CTA BUTTON
         ========================================================= */}
      <div className="mt-6 sm:mt-8 pt-4 border-t border-stone-100">
        <Link
          href={ctaUrl}
          className="w-full py-2.5 px-4 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 group/btn active:scale-95 shadow-sm"
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
