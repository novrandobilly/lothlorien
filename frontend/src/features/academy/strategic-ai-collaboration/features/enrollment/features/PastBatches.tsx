import React from "react";
import { WorkshopBatch } from "../../../constants";

interface PastBatchesProps {
  label: string;
  status: string;
  batches: WorkshopBatch[];
}

export function PastBatches({ label, status, batches }: PastBatchesProps) {
  if (batches.length === 0) return null;

  return (
    <div className="flex flex-col gap-2.5 border-t border-[#3D3833] pt-2">
      <p className="m-0 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#8F867C]">{label}</p>
      <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
        {batches.map((batch) => (
          <li key={batch.id} className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-[15px] text-[#B5ACA2]">
            <span>
              {batch.code} · {batch.shortDate}
            </span>
            <span>{status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
