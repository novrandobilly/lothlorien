import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SelectedWorkItem } from "../constants";
import { WorkVisualPlaceholder } from "./WorkVisualPlaceholder";

interface MainWorkCardProps {
  work: SelectedWorkItem;
}

export function MainWorkCard({ work }: MainWorkCardProps) {
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
    <div className="group relative w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 overflow-hidden transition-all duration-300 hover:border-stone-300 hover:shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
        {/* =========================================================
            LEFT COLUMN: TITLE & COPY (Matching Highlighted Feature 1)
           ========================================================= */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left">
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span
                  className={`w-2 h-2 rounded-full ${isOngoing ? "animate-pulse" : ""}`}
                  style={{
                    backgroundColor:
                      accentColor || (isOngoing ? "#f59e0b" : "#f26522"),
                  }}
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                  {badge}
                </span>
              </div>
            )}

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-950 font-sans">
              {title}
            </h3>

            <p className="mt-3 text-[16px] text-stone-500 font-sans leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Client Logo & Action button in the same row */}
          {(clientLogo ||
            (tags && tags.length > 0) ||
            url ||
            isOngoing ||
            disabled) && (
            <div className="mt-6 sm:mt-8 flex items-center justify-between gap-3">
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
                    className="h-4 sm:h-4.5 w-auto object-contain select-none"
                  />
                </div>
              ) : tags && tags.length > 0 ? (
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-stone-600 bg-stone-50 border border-stone-200/80 rounded-full font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <div />
              )}

              {/* Right side: Action button (hover scoped only to button) */}
              {isOngoing || disabled ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stone-50 text-stone-400 text-xs font-medium border border-stone-200/50 cursor-not-allowed select-none shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>{buttonText || "Ongoing Project"}</span>
                </div>
              ) : (
                url && (
                  <Link
                    href={url}
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
            RIGHT COLUMN: VISUAL PLACEHOLDER (Overflowing at bottom)
            Proper top padding matching left column
           ========================================================= */}
        <div className="lg:col-span-6 px-6 sm:px-8 lg:px-0 lg:pr-8 xl:pr-10 pt-6 sm:pt-8 lg:pt-10 flex justify-center lg:justify-end items-end w-full self-end">
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
    </div>
  );
}
