import React from "react";

interface SectionHeaderProps {
  title?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title = "Studio & Indie Releases",
  description = "High-utility digital tools and templates crafted in-house, alongside standout projects from indie developers we help market to the world.",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-950 font-sans">
        {title}
      </h2>

      {/* Decorative double underline accent */}
      <div className="flex flex-col items-center gap-1 mt-2.5">
        <span className="w-16 h-1 rounded-full bg-stone-300" />
        <span className="w-10 h-0.5 rounded-full bg-stone-200" />
      </div>

      {description && (
        <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-stone-500 font-sans max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
