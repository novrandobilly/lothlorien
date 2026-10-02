import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { kickserveProduct } from "../../../constants";
import ProductDeviceMockup from "../../../components/ProductDeviceMockup";

export function KickserveProduct() {
  const {
    title,
    headline,
    description,
    specs,
    ctaText,
    ctaUrl,
    image,
    imageAlt,
  } = kickserveProduct;

  return (
    <div className="group/card relative w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-stone-300 hover:shadow-md">
      {/* =========================================================
          TOP: TITLE, HEADLINE, DESCRIPTION, SPECS & CTA
         ========================================================= */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col items-start text-left flex-1 justify-between">
        {/* Upper narrative content */}
        <div className="w-full">
          {/* Title & Subtitle Header */}
          <div className="w-full">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-tight">
              {title}
            </h3>
            <p className="mt-1 text-sm sm:text-base font-semibold text-stone-800 font-sans leading-snug">
              {headline}
            </p>
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* Lower content: Specs & CTA Button (aligned to the same baseline) */}
        <div className="w-full mt-6">
          {/* Compact Specs list */}
          {specs && specs.length > 0 && (
            <div className="pt-3.5 border-t border-stone-200/70 w-full space-y-1.5 text-xs font-sans min-h-19 flex flex-col justify-start">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="font-semibold uppercase tracking-wider text-stone-400 shrink-0 min-w-22 text-[11px]">
                    {spec.label}:
                  </span>
                  <span className="text-stone-700 font-medium truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-5 w-full">
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-stone-950/15 group/btn active:scale-95"
            >
              <span>{ctaText}</span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
                <ArrowRight className="w-2.5 h-2.5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM: SMARTPHONE VIEWPORT MOCKUP
         ========================================================= */}
      <ProductDeviceMockup
        image={image}
        imageAlt={imageAlt}
        href={ctaUrl}
        isExternal={false}
        priority={true}
      />
    </div>
  );
}

export default KickserveProduct;
