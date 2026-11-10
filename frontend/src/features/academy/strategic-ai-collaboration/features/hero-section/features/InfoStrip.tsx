import React from "react";

interface InfoStripProps {
  items: string[];
}

export function InfoStrip({ items }: InfoStripProps) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
      <ul className="m-0 flex list-none flex-wrap justify-between gap-x-6 gap-y-1.5 border-t-[1.5px] border-b border-t-[#16130F] border-b-[#E6E0D7] p-0 py-3 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#3D3833]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
