import React from "react";
import Image, { StaticImageData } from "next/image";

export interface VisualSlotProps {
  id: string;
  heightRatio: 1 | 2;
  bgClass: string;
  image?: StaticImageData | string;
  alt?: string;
  label?: string;
  borderClass?: string;
  isDark?: boolean;
  accentElement?: React.ReactNode;
}

export function VisualCard({
  id,
  heightRatio,
  bgClass,
  image,
  alt = "Visual showcase",
  label,
  borderClass = "",
  isDark = false,
  accentElement,
}: VisualSlotProps) {
  // Height ratio: 2 -> aspect-[3/4], 1 -> aspect-[3/2]
  const aspectClass = heightRatio === 2 ? "aspect-[3/4]" : "aspect-[3/2]";

  return (
    <div
      className={`relative w-full ${aspectClass} ${bgClass} ${borderClass} rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-md select-none group`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-stone-950/75 via-stone-950/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Micro pill label on hover */}
          {label && (
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none">
              <span className="px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-xs text-[11px] font-medium text-stone-100 tracking-wide truncate border border-white/10 shadow-xs font-sans">
                {label}
              </span>
            </div>
          )}

          {accentElement && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {accentElement}
            </div>
          )}
        </>
      ) : (
        accentElement && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {accentElement}
          </div>
        )
      )}
    </div>
  );
}
