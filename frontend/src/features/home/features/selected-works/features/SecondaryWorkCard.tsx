import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SelectedWorkItem } from "../constants";
import { WorkVisualPlaceholder } from "./WorkVisualPlaceholder";

interface SecondaryWorkCardProps {
  work: SelectedWorkItem;
}

export function SecondaryWorkCard({ work }: SecondaryWorkCardProps) {
  const {
    title,
    subtitle,
    description,
    badge,
    tags,
    url,
    buttonText = "View Details",
    image,
    imageAlt,
    placeholderBg = "bg-white",
    accentColor,
  } = work;

  return (
    <div className="group relative w-full bg-[#f4f4f3] rounded-2xl sm:rounded-3xl border border-stone-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-stone-300 hover:shadow-sm">
      {/* =========================================================
          TOP: TITLE, BADGE, COPY, CAPSULE TAGS & CTA BUTTON
         ========================================================= */}
      <div className="p-6 sm:p-8 pb-0">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor || "#78716c" }}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
              {badge}
            </span>
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 font-sans">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm sm:text-base font-medium text-stone-700 font-sans">
            {subtitle}
          </p>
        )}

        <p className="mt-3 text-[16px] text-stone-500 font-sans leading-relaxed">
          {description}
        </p>

        {/* Capsule Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium text-stone-600 bg-white border border-stone-200/80 rounded-full font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button under the capsule tags (matching row 1 style) */}
        {url && (
          <div className="mt-5 sm:mt-6">
            <Link
              href={url}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold transition-all group-hover:gap-2 active:scale-95"
            >
              <span>{buttonText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>

      {/* =========================================================
          BOTTOM: VISUAL CONTAINER (Overflowing at bottom)
          Has top margin, left/right margins, and 0 bottom margin
         ========================================================= */}
      <div className="mt-8 px-6 sm:px-8 w-full flex justify-center items-end">
        <WorkVisualPlaceholder
          image={image}
          alt={imageAlt || title}
          placeholderBg={placeholderBg}
          accentColor={accentColor}
          aspectClass="aspect-[16/10] sm:aspect-[16/11]"
          overflowBottom={true}
          className="w-full shadow-sm"
        />
      </div>
    </div>
  );
}
