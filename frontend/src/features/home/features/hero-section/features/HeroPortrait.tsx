"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface HeroPortraitProps {
  imageSrc?: string;
  name?: string;
  title?: string;
}

export function HeroPortrait({
  imageSrc,
  name = "Novrando Billy",
  title = "Senior Frontend & UX Architect",
}: HeroPortraitProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(imageSrc && !imageError);

  return (
    <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] mx-auto lg:mx-0">
      {/* Sleek, minimal photo card */}
      <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-stone-800/80 bg-[#0e121a] shadow-lg shadow-black/40 group hover:border-stone-700 transition-colors">
        {showImage && imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-linear-to-b from-stone-900/60 to-stone-950/80">
            <div className="w-20 h-20 rounded-full bg-stone-800/60 border border-stone-700/50 flex items-center justify-center mb-4 text-stone-500 group-hover:text-stone-400 group-hover:border-stone-600 transition-colors">
              <User className="w-10 h-10 stroke-[1.3]" />
            </div>
            <span className="text-xs font-medium text-stone-400 tracking-wide">
              {name}
            </span>
            <span className="text-[11px] text-stone-500 mt-0.5 font-mono">
              Portrait Photo
            </span>
          </div>
        )}
      </div>

      {/* Understated caption */}
      <div className="mt-3 flex items-center justify-between px-1 text-xs text-stone-500">
        <span className="text-stone-400 font-serif font-medium">{name}</span>
        <span className="text-stone-500 text-[11px] font-sans">{title}</span>
      </div>
    </div>
  );
}
