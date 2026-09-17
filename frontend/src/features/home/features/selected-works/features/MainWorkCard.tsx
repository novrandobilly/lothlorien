import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SelectedWorkItem } from "../constants";
import { WorkVisualPlaceholder } from "./WorkVisualPlaceholder";

interface MainWorkCardProps {
  work: SelectedWorkItem;
}

export function MainWorkCard({ work }: MainWorkCardProps) {
  const {
    title,
    subtitle,
    description,
    badge,
    tags,
    url,
    buttonText = "View Project",
    image,
    imageAlt,
    placeholderBg = "bg-white",
    accentColor,
  } = work;

  return (
    <div className="group relative w-full bg-[#f4f4f3] rounded-2xl sm:rounded-3xl border border-stone-200/80 overflow-hidden transition-all duration-300 hover:border-stone-300 hover:shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
        {/* =========================================================
            LEFT COLUMN: TITLE & COPY (Matching Highlighted Feature 1)
           ========================================================= */}
        <div className="lg:col-span-6 xl:col-span-7 p-6 sm:p-8 lg:p-12 lg:pb-12 flex flex-col justify-center text-left">
          {badge && (
            <div className="inline-flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor || "#f26522" }}
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                {badge}
              </span>
            </div>
          )}

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-950 font-sans">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1.5 text-base sm:text-lg font-medium text-stone-700 font-sans">
              {subtitle}
            </p>
          )}

          <p className="mt-4 text-sm sm:text-base text-stone-500 font-sans leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Tags list */}
          {tags && tags.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-stone-600 bg-white border border-stone-200/80 rounded-full font-sans"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action button */}
          {url && (
            <div className="mt-7">
              <Link
                href={url}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm font-semibold transition-all group-hover:gap-2 active:scale-95"
              >
                <span>{buttonText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          )}
        </div>

        {/* =========================================================
            RIGHT COLUMN: VISUAL PLACEHOLDER (Overflowing at bottom)
            Has top margin, left/right margins, and 0 bottom margin
           ========================================================= */}
        <div className="lg:col-span-6 xl:col-span-5 px-6 sm:px-8 lg:px-0 lg:pr-8 xl:pr-12 pt-0 lg:pt-10 flex justify-center lg:justify-end items-end w-full self-end">
          <WorkVisualPlaceholder
            image={image}
            alt={imageAlt || title}
            placeholderBg={placeholderBg}
            accentColor={accentColor}
            aspectClass="aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[380px] xl:h-[420px] w-full"
            overflowBottom={true}
          />
        </div>
      </div>
    </div>
  );
}
