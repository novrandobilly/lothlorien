import React from "react";
import type { StaticImageData } from "next/image";
import { Photo } from "../../../components/Photo";

interface HeroPortraitProps {
  image: StaticImageData;
  alt: string;
}

export function HeroPortrait({ image, alt }: HeroPortraitProps) {
  return (
    <div className="flex min-w-0 flex-[1_1_320px] flex-col">
      <Photo
        src={image}
        alt={alt}
        priority
        sizes="(min-width: 1024px) 480px, 100vw"
        className="aspect-[4/5]"
      />
    </div>
  );
}
