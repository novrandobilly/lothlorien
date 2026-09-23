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
    badge,
    clientLogo,
    clientName,
    tags,
    url,
    buttonText = "See more",
    image,
    imageAlt,
    placeholderBg = "bg-white",
    accentColor,
    isOngoing,
    disabled,
  } = work;

  return (
    <div className="group relative w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-stone-300 hover:shadow-sm">
      {/* =========================================================
          TOP: TITLE, BADGE, COPY, CLIENT LOGO & CTA BUTTON
         ========================================================= */}
      <div className="p-5 sm:p-6 pb-0">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-2">
            <span
              className={`w-2 h-2 rounded-full ${isOngoing ? "animate-pulse" : ""}`}
              style={{ backgroundColor: accentColor || (isOngoing ? "#f59e0b" : "#78716c") }}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
              {badge}
            </span>
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 font-sans">
          {title}
        </h3>

        <p className="mt-2 text-[16px] text-stone-500 font-sans leading-relaxed">
          {description}
        </p>

        {/* Client Logo & Action Button in the same row */}
        {(clientLogo || (tags && tags.length > 0) || url || isOngoing || disabled) && (
          <div className="mt-3.5 sm:mt-4 flex items-center justify-between gap-2.5">
            {/* Left side: Client Logo (or tags fallback) */}
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
                  className="h-4 sm:h-[18px] w-auto object-contain select-none"
                />
              </div>
            ) : tags && tags.length > 0 ? (
              <div className="flex flex-wrap items-center gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-stone-600 bg-stone-50 border border-stone-200/80 rounded-full font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <div />
            )}

            {/* Right side: Action Button or Disabled/Ongoing indicator */}
            {isOngoing || disabled ? (
              <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-stone-100 text-stone-400 text-xs sm:text-sm font-medium cursor-not-allowed border border-stone-200/70 shrink-0 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{buttonText || "Ongoing Project"}</span>
              </div>
            ) : (
              url && (
                <Link
                  href={url}
                  className="group/btn inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold transition-all hover:gap-2 active:scale-95 shrink-0"
                >
                  <span>{buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
          placeholderBg={placeholderBg}
          accentColor={accentColor}
          aspectClass="aspect-[16/10] sm:aspect-[16/11]"
          overflowBottom={true}
          isOngoing={isOngoing}
          className="w-full shadow-sm"
        />
      </div>
    </div>
  );
}
