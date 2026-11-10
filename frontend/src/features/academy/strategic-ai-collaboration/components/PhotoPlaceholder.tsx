import React from "react";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  label: string;
  description: string;
  className?: string;
}

// Stand-in until the real photograph exists. Swap for next/image with the same aspect class.
export function PhotoPlaceholder({ label, description, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder foto: ${description}`}
      className={cn(
        "flex w-full items-center justify-center border border-[#D9D1C5] bg-[#EFE9E0] p-7",
        className
      )}
    >
      <p className="m-0 max-w-[280px] text-center text-sm leading-relaxed text-[#6E665E]">
        <strong className="mb-2 block text-xs tracking-[0.08em] text-[#3D3833]">{label}</strong>
        {description}
      </p>
    </div>
  );
}
