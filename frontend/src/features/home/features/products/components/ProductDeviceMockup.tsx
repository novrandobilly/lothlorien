import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductDeviceMockupProps {
  image: StaticImageData | string;
  imageAlt: string;
  href: string;
  isExternal?: boolean;
  className?: string;
  priority?: boolean;
}

export function ProductDeviceMockup({
  image,
  imageAlt,
  href,
  isExternal = false,
  className = "",
  priority = false,
}: ProductDeviceMockupProps) {
  return (
    <div
      className={`px-5 sm:px-6 lg:px-7 pb-6 pt-4 flex justify-center items-center w-full bg-stone-50/50 border-t border-stone-100 ${className}`}
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="relative block w-full max-w-44 sm:max-w-50 md:max-w-48 lg:max-w-54 xl:max-w-58 rounded-[28px] sm:rounded-[34px] p-1 sm:p-1.5 bg-stone-950 border-[1.5px] sm:border-2 border-stone-800/90 shadow-lg shadow-stone-950/10 ring-1 ring-stone-950/20 active:scale-98"
      >
        {/* Smartphone Screen Viewport - Symmetrical Smooth Thin Bezel */}
        <div className="relative w-full aspect-750/1334 rounded-[24px] sm:rounded-[30px] overflow-hidden bg-stone-900 border border-stone-800/30 shadow-inner">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 240px"
            priority={priority}
          />
        </div>
      </Link>
    </div>
  );
}

export default ProductDeviceMockup;


