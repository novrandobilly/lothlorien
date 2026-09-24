import React from "react";
import Image, { StaticImageData } from "next/image";

interface WorkVisualPlaceholderProps {
  image?: StaticImageData | string;
  alt?: string;
  placeholderBg?: string;
  accentColor?: string;
  className?: string;
  aspectClass?: string;
  overflowBottom?: boolean;
  isOngoing?: boolean;
}

export function WorkVisualPlaceholder({
  image,
  alt = "Selected work showcase",
  placeholderBg = "bg-white",
  accentColor = "#78716c",
  className = "",
  aspectClass = "aspect-[16/10]",
  overflowBottom = true,
  isOngoing = false,
}: WorkVisualPlaceholderProps) {
  const roundedClass = overflowBottom
    ? "rounded-t-xl sm:rounded-t-2xl rounded-b-none border-b-0"
    : "rounded-xl sm:rounded-2xl";

  return (
    <div
      className={`relative w-full ${aspectClass} ${placeholderBg} ${roundedClass} border border-stone-200/80 shadow-sm overflow-hidden select-none group-hover:border-stone-300 transition-all duration-300 ${className}`}
    >
      {/* Subtle White Masking Overlay for Ongoing / Disabled Project */}
      {isOngoing && (
        <div className="absolute inset-0 z-10 bg-white/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 select-none transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-stone-200/90 shadow-sm text-stone-700 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Coming Soon</span>
          </div>
        </div>
      )}

      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover object-top transition-all duration-500 ${
            isOngoing
              ? "opacity-75 grayscale-[20%]"
              : "group-hover:scale-[1.01]"
          }`}
        />
      ) : (
        /* Dummy Image / Clean Mockup with top margin & bottom overflow */
        <div className="absolute inset-0 p-5 sm:p-6 pb-0 flex flex-col justify-start">
          {/* Mock Window Header / Browser Chrome */}
          <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-stone-200" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 sm:w-16 h-1.5 rounded-full bg-stone-100" />
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
            </div>
          </div>

          {/* Wireframe UI blocks flowing downwards into the bottom edge */}
          <div className="pt-4 sm:pt-5 space-y-3 sm:space-y-4 flex-1 flex flex-col">
            {/* Top metric row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="p-2 sm:p-2.5 rounded-lg bg-stone-50 border border-stone-100 space-y-1">
                <div className="h-1.5 w-8 rounded-full bg-stone-200" />
                <div className="h-3 w-12 rounded bg-stone-300/80" />
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-stone-50 border border-stone-100 space-y-1">
                <div className="h-1.5 w-10 rounded-full bg-stone-200" />
                <div className="h-3 w-14 rounded bg-stone-300/80" />
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-stone-50 border border-stone-100 space-y-1">
                <div className="h-1.5 w-6 rounded-full bg-stone-200" />
                <div className="h-3 w-10 rounded bg-stone-300/80" />
              </div>
            </div>

            {/* Simulated Data Table / Content Area overflowing downwards */}
            <div className="flex-1 rounded-t-lg bg-stone-50/80 border border-b-0 border-stone-100 p-3 sm:p-4 space-y-2.5">
              <div className="h-2.5 w-1/3 rounded-full bg-stone-200" />
              <div className="space-y-2 pt-1">
                <div className="h-2 w-full rounded-full bg-stone-200/70" />
                <div className="h-2 w-11/12 rounded-full bg-stone-200/60" />
                <div className="h-2 w-4/5 rounded-full bg-stone-200/60" />
                <div className="h-2 w-5/6 rounded-full bg-stone-200/50" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
