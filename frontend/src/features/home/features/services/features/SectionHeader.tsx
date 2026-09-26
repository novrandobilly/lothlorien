import React from "react";

interface SectionHeaderProps {
  title?: string;
  className?: string;
}

export function SectionHeader({
  title = "Ways We Can Work Together",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
        {title}
      </h2>

      {/* Decorative double underline accent with #f26522 orange brand accent */}
      <div className="flex flex-col items-center gap-1 mt-2.5">
        <span className="w-16 h-1 rounded-full bg-[#f26522]" />
        <span className="w-10 h-0.5 rounded-full bg-[#f26522]/40" />
      </div>
    </div>
  );
}


