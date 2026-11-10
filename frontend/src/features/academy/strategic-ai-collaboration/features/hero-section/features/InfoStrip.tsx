import React from "react";

interface InfoStripProps {
  items: string[];
  compact: string;
}

export function InfoStrip({ items, compact }: InfoStripProps) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
      <p className="m-0 border-t-[1.5px] border-b border-t-[#16130F] border-b-[#E6E0D7] py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#3D3833] md:hidden">
        {compact}
      </p>
      <ul className="m-0 hidden list-none flex-wrap md:flex justify-between gap-x-6 gap-y-1.5 border-t-[1.5px] border-b border-t-[#16130F] border-b-[#E6E0D7] p-0 py-3 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#3D3833]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
