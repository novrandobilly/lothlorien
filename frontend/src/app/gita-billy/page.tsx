import React, { Suspense } from "react";
import { WeddingPageFeature } from "@/features/wedding";

export default function GitaBillyWeddingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF6EE] text-[#7C5E28] font-serif">
          <p className="tracking-widest uppercase text-xs animate-pulse">Loading Invitation...</p>
        </div>
      }
    >
      <WeddingPageFeature />
    </Suspense>
  );
}
