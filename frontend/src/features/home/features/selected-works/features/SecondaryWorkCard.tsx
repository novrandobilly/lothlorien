import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SelectedWorkItem } from "../constants";
import { WorkVisualPlaceholder } from "./WorkVisualPlaceholder";

interface SecondaryWorkCardProps {
  work: SelectedWorkItem;
}

export function SecondaryWorkCard({ work }: SecondaryWorkCardProps) {
  const {
    title,
    description,
    clientLogo,
    clientName,
    url,
    buttonText = "See more",
    image,
    imageAlt,
    isDisabled,
  } = work;

  const isExternal =
    work.isExternal ?? (url ? /^https?:\/\//.test(url) : false);

  return (
    <div className="group relative w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-stone-300 hover:shadow-sm">
      {/* =========================================================
          TOP: TITLE, COPY, CLIENT LOGO & CTA BUTTON
         ========================================================= */}
      <div className="p-5 sm:p-6 pb-0">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 font-sans">
          {title}
        </h3>

        <p className="mt-2 text-[16px] text-stone-500 font-sans leading-relaxed">
          {description}
        </p>

        {/* Client Logo & Action Button in the same row */}
        {(clientLogo || url || isDisabled) && (
          <div className="mt-3.5 sm:mt-4 flex items-center justify-between gap-2.5">
            {/* Left side: Client Logo */}
            {clientLogo ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xs font-medium text-stone-400 font-sans">
                  Client:
                </span>
                <Image
                  src={clientLogo}
                  alt={clientName || "Client logo"}
                  height={18}
                  width={70}
                  className="h-4 sm:h-4.5 w-auto object-contain select-none"
                />
              </div>
            ) : (
              <div />
            )}

            {/* Right side: Action Button or Disabled indicator */}
            {isDisabled ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stone-50 text-stone-400 text-xs font-medium border border-stone-200/50 cursor-not-allowed select-none shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                <span>{buttonText || "Coming Soon"}</span>
              </div>
            ) : (
              url && (
                <Link
                  href={url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group/btn inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stone-50 hover:bg-stone-100/80 text-stone-600 hover:text-stone-950 text-xs font-medium border border-stone-200/80 hover:border-stone-300 transition-all active:scale-95 shrink-0"
                >
                  <span>{buttonText}</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover/btn:text-stone-700 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              )
            )}
          </div>
        )}
      </div>

      {/* =========================================================
          BOTTOM: VISUAL CONTAINER (Overflowing at bottom)
          Has top margin, left/right margins, and 0 bottom margin
         ========================================================= */}
      <div className="mt-3.5 sm:mt-4 px-5 sm:px-6 w-full flex justify-center items-end">
        <WorkVisualPlaceholder
          image={image}
          alt={imageAlt || title}
          aspectClass="aspect-[16/10] sm:aspect-[16/11]"
          overflowBottom={true}
          isDisabled={isDisabled}
          className="w-full shadow-sm"
        />
      </div>
    </div>
  );
}
