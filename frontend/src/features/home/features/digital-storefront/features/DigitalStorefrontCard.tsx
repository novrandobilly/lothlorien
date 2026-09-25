import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { DigitalStorefrontProject } from "../constants";

interface DigitalStorefrontCardProps {
  project: DigitalStorefrontProject;
}

export function DigitalStorefrontCard({ project }: DigitalStorefrontCardProps) {
  const isComingSoon = project.status === "coming_soon";

  return (
    <div
      className={`group relative flex flex-col justify-between w-full h-130 sm:h-137.5 rounded-3xl bg-white border border-stone-200/80 overflow-hidden ${
        isComingSoon
          ? "opacity-40 select-none cursor-default"
          : "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {/* =========================================================
          1. TOP DECK (45%): TAGS, ICON, BIG TITLE, & DESCRIPTION (TOP ALIGNED)
         ========================================================= */}
      <div className="p-5 sm:p-6 pb-2 flex flex-col items-start text-left h-[45%]">
        {/* Top Badges Row & Icon */}
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-stone-50 border border-stone-200/80 text-stone-700 font-sans shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Right Icon */}
          <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200/80 flex items-center justify-center text-xs font-semibold shrink-0 text-stone-700 shadow-2xs">
            {project.categoryIcon || <Sparkles className="w-3.5 h-3.5" />}
          </div>
        </div>

        {/* Top-aligned Big Bold Title (Twice bigger again) & Short Description */}
        <div className="mt-3.5 sm:mt-4 space-y-1 sm:space-y-1.5 text-left w-full">
          <h3 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight font-sans text-stone-950 leading-[1.02] sm:leading-[1.04]">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-sans text-stone-500 leading-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* =========================================================
          2. BOTTOM DECK (55%): SEAMLESS VISUAL CONTAINER
         ========================================================= */}
      <div className="relative w-full h-[55%] rounded-t-2xl sm:rounded-t-3xl overflow-hidden bg-stone-900 flex items-end p-4 sm:p-5">
        {/* Gradient Artwork / Visual Preview */}
        <div
          className={`absolute inset-0 bg-linear-to-tr ${
            project.visualGradient ||
            "from-stone-900 via-stone-800 to-stone-700"
          } opacity-90 transition-transform duration-700 ${
            !isComingSoon ? "group-hover:scale-105" : ""
          }`}
        />

        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />

        {/* Centered Decorative Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <span className="text-5xl sm:text-6xl font-bold font-sans tracking-tighter text-white uppercase text-center px-4">
            STOREFRONT
          </span>
        </div>

        {/* Bottom Floating Action Button */}
        <div className="relative z-10 w-full flex items-center justify-start">
          {isComingSoon ? (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/10">
              <Clock className="w-3 h-3 text-amber-300" />
              <span>Coming Soon</span>
            </div>
          ) : (
            <Link
              href={project.demoUrl || "#"}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-stone-900 text-xs sm:text-sm font-semibold transition-all duration-200 hover:shadow-md active:scale-95 group/btn"
            >
              <span>Explore</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-stone-900 text-white flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
