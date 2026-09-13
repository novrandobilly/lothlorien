import React from "react";
import Image, { StaticImageData } from "next/image";

export interface VisualSlotProps {
  id: string;
  heightRatio: 1 | 2;
  bgClass: string;
  image?: StaticImageData | string;
  alt?: string;
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
  borderClass,
  isDark = false,
  accentElement,
}: VisualSlotProps) {
  const defaultBorder = isDark
    ? "border border-stone-800"
    : "border border-stone-200/80";

  // Height ratio: 2 -> aspect-[3/4], 1 -> aspect-[3/2]
  const aspectClass = heightRatio === 2 ? "aspect-[3/4]" : "aspect-[3/2]";

  return (
    <div
      className={`relative w-full ${aspectClass} ${bgClass} ${borderClass ?? defaultBorder} rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.01] select-none group`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      ) : (
        /* Clean placeholder with zero text, ready for image */
        accentElement && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {accentElement}
          </div>
        )
      )}
    </div>
  );
}
