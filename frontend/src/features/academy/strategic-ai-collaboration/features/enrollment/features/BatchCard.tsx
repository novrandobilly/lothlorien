import React from "react";
import { SERIF, WorkshopBatch } from "../../../constants";
import { CtaLink } from "../../../components/CtaLink";

interface BatchCardProps {
  batch: WorkshopBatch;
  eyebrow: string;
  ctaPrefix: string;
  notOpenLabel: string;
  footnote: string;
}

// One open batch with its own checkout button. Without a payment link the button shows as not yet open.
export function BatchCard({ batch, eyebrow, ctaPrefix, notOpenLabel, footnote }: BatchCardProps) {
  const isOpen = batch.paymentUrl !== "";

  return (
    <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5 rounded bg-[#FAF7F2] p-[22px] text-[#16130F] sm:p-8">
      <div className="flex flex-col gap-1 border-b border-[#E6E0D7] pb-4">
        <span className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#6E665E]">{eyebrow}</span>
        <span className={`${SERIF} text-[26px] leading-snug`}>{batch.date}</span>
        <span className="text-[15px] text-[#3D3833]">
          {batch.code} · {batch.time} · Zoom · 3 jam · Maks. {batch.capacity} kursi
        </span>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-[32px] font-bold leading-none">{batch.price}</span>
        {batch.originalPrice && <span className="text-base text-[#8F867C] line-through">{batch.originalPrice}</span>}
        {batch.priceNote && <span className="text-[13px] font-semibold text-[#C24E12]">{batch.priceNote}</span>}
      </div>

      {isOpen ? (
        <CtaLink href={batch.paymentUrl} className="w-full">
          {ctaPrefix} — {batch.price}
        </CtaLink>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex min-h-[54px] w-full items-center justify-center rounded-md bg-[#E6E0D7] text-lg font-bold text-[#6E665E]"
        >
          {notOpenLabel}
        </span>
      )}
      <p className="m-0 text-center text-[13px] leading-normal text-[#6E665E]">{footnote}</p>
    </div>
  );
}
