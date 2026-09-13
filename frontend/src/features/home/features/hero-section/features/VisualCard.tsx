import React from "react";
import { Image as ImageIcon } from "lucide-react";

export interface VisualSlotProps {
  id: string;
  slotNumber: string;
  title: string;
  subtitle: string;
  heightRatio: 1 | 2;
  bgClass: string;
  borderClass?: string;
  isDark?: boolean;
  imageUrl?: string; // Easy slot for user to plug real images later
  accentElement?: React.ReactNode;
}

export function VisualCard({
  slotNumber,
  title,
  subtitle,
  heightRatio,
  bgClass,
  borderClass,
  isDark = false,
  imageUrl,
  accentElement,
}: VisualSlotProps) {
  const defaultBorder = isDark
    ? "border border-stone-800"
    : "border border-stone-200/80";

  // Height ratio: 2 -> aspect-square (1:1), 1 -> aspect-[2/1] (2:1 width to height)
  // Both have identical width, so height ratio is exactly 2:1
  const aspectClass = heightRatio === 2 ? "aspect-[3/4]" : "aspect-[3/2]";

  return (
    <div
      className={`relative w-full ${aspectClass} ${bgClass} ${borderClass ?? defaultBorder} rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.01] select-none group`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className={`absolute inset-0 flex flex-col justify-between ${
            heightRatio === 1 ? "p-2.5 sm:p-3.5" : "p-3.5 sm:p-4"
          }`}
        >
          {/* Subtle Accent Graphics */}
          {accentElement && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {accentElement}
            </div>
          )}

          {/* Top Pill / Slot Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                isDark
                  ? "bg-white/10 text-stone-300 border border-white/15"
                  : "bg-black/5 text-stone-700 border border-black/5"
              }`}
            >
              {slotNumber}
            </span>
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                isDark ? "bg-white/10 text-white" : "bg-black/5 text-stone-700"
              }`}
            >
              <ImageIcon className="w-3 h-3" />
            </div>
          </div>

          {/* Bottom Label Context */}
          <div className="relative z-10">
            <p
              className={`text-xs sm:text-sm font-bold tracking-tight font-sans line-clamp-1 ${
                isDark ? "text-white" : "text-stone-900"
              }`}
            >
              {title}
            </p>
            <p
              className={`text-[10px] sm:text-[11px] font-sans line-clamp-1 ${
                isDark ? "text-stone-400" : "text-stone-500"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
