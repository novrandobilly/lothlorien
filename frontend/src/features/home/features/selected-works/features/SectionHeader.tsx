import React from "react";

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
}

export function SectionHeader({
  title = "Selected Works",
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-stone-950 font-sans">
        {title}
      </h2>

      {/* Decorative double underline accent matching screenshot design */}
      <div className="flex flex-col items-center gap-1 mt-3">
        <span className="w-20 h-1 rounded-full bg-stone-300" />
        <span className="w-12 h-0.5 rounded-full bg-stone-200" />
      </div>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-stone-500 max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
