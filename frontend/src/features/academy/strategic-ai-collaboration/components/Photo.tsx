import React from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface PhotoProps {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

// Local photo with a blur placeholder while it loads. The aspect class on the wrapper keeps the layout stable.
export function Photo({ src, alt, sizes, priority = false, className = "" }: PhotoProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-[#EFE9E0]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover"
      />
    </div>
  );
}
