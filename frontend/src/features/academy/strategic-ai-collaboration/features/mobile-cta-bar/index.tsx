"use client";

import React, { useEffect, useState } from "react";
import { CtaLink } from "../../components/CtaLink";
import { ENROLL_ANCHOR, openBatches, WorkshopBatch } from "../../constants";

interface MobileCtaBarProps {
  batch?: WorkshopBatch;
  ctaLabel?: string;
  heroId?: string;
  enrollId?: string;
}

// Phone only: appears once the hero has scrolled away, hides while the enrollment section is on screen.
export function MobileCtaBar({
  batch = openBatches[0],
  ctaLabel = "Daftar",
  heroId = "hero",
  enrollId = "daftar",
}: MobileCtaBarProps) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [enrollVisible, setEnrollVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const enroll = document.getElementById(enrollId);
    if (!hero || !enroll) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting);
        if (entry.target === enroll) setEnrollVisible(entry.isIntersecting);
      });
    });
    observer.observe(hero);
    observer.observe(enroll);
    return () => observer.disconnect();
  }, [heroId, enrollId]);

  if (!batch) return null;
  const visible = !heroVisible && !enrollVisible;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-[#16130F] bg-[#FAF7F2] px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] transition-transform duration-200 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#6E665E]">
          {batch.code} · {batch.shortDate}
        </span>
        <span className="text-[17px] font-bold text-[#16130F]">{batch.price}</span>
      </span>
      <CtaLink href={ENROLL_ANCHOR} size="md">
        {ctaLabel}
      </CtaLink>
    </div>
  );
}

export default MobileCtaBar;
