import React from "react";
import Image, { StaticImageData } from "next/image";

export interface VisualSlotProps {
  id: string;
  colSpan?: 1 | 2;
  aspectRatio?:
    | "landscape"
    | "portrait"
    | "square"
    | "16/10"
    | "16/9"
    | "7/8"
    | "3/4"
    | "4/3"
    | "1/1";
  heightRatio?: 1 | 2;
  bgClass: string;
  image?: StaticImageData | string;
  alt?: string;
  label?: string;
  borderClass?: string;
  objectPosition?: string;
  isDark?: boolean;
  accentElement?: React.ReactNode;
}

export function VisualCard({
  id,
  colSpan = 1,
  aspectRatio,
  heightRatio,
  bgClass,
  image,
  alt = "Visual showcase",
  label,
  borderClass = "",
  objectPosition = "object-top",
  isDark = false,
  accentElement,
}: VisualSlotProps) {
  // Determine aspect ratio class
  const getAspectClass = () => {
    if (aspectRatio === "landscape" || aspectRatio === "16/10")
      return "aspect-[16/10]";
    if (aspectRatio === "16/9") return "aspect-[16/9]";
    if (aspectRatio === "portrait" || aspectRatio === "3/4")
      return "aspect-[3/4]";
    if (aspectRatio === "square" || aspectRatio === "1/1")
      return "aspect-[1/1]";
    if (aspectRatio === "4/3") return "aspect-[4/3]";
    if (aspectRatio === "7/8") return "aspect-[7/8]";
    return heightRatio === 2 ? "aspect-[3/4]" : "aspect-[3/2]";
  };

  const aspectClass = getAspectClass();
  const colSpanClass = colSpan === 2 ? "col-span-2" : "col-span-1";

  return (
    <div
      className={`relative w-full ${colSpanClass} ${aspectClass} ${bgClass} ${borderClass} rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:shadow-md select-none group`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover ${objectPosition} transition-transform duration-500 ease-out group-hover:scale-105`}
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
