import React from "react";

interface SectionHeaderProps {
  title?: string;
}

export function SectionHeader({
  title = "Common Questions",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-stone-950 font-sans">
        {title}
      </h2>

      {/* Decorative double underline accent matching selected works */}
      <div className="flex flex-col items-center gap-1 mt-3">
        <span className="w-20 h-1 rounded-full bg-stone-300" />
        <span className="w-12 h-0.5 rounded-full bg-stone-200" />
      </div>
    </div>
  );
}
