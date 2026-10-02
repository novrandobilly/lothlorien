import React from "react";
import { ExternalLink } from "lucide-react";
import { KickserveHeader } from "./KickserveHeader";
import { KickserveFeatures } from "./KickserveFeatures";
import { KickserveGallery } from "./KickserveGallery";

export function KickserveManualCard() {
  return (
    <div className="w-full px-4 sm:px-6 flex flex-col items-center pt-24 sm:pt-28 md:pt-28 pb-12 sm:pb-16">
      {/* Main Card Container */}
      <div className="w-full max-w-4xl lg:max-w-5xl rounded-3xl bg-white border border-stone-200/80 shadow-xl shadow-stone-900/5 p-6 sm:p-10 md:p-12 text-stone-900">
        <KickserveHeader />
        <KickserveGallery />

        <KickserveFeatures />

        <div className="flex justify-center mb-10 sm:mb-12">
          <a
            href="https://kickserve.envienstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm sm:text-base font-semibold shadow-sm hover:shadow-md hover:shadow-stone-950/15 transition-all duration-200 active:scale-95 group"
          >
            <span>Launch Kickserve</span>
            <ExternalLink className="w-4 h-4 text-[#f26522] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default KickserveManualCard;
