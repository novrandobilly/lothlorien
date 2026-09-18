"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TestimonialItem } from "../constants";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, author, role, avatarSrc, initials, profileUrl } = testimonial;

  const paragraphs = quote
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const hasMultipleParagraphs = paragraphs.length > 1;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full text-left">
      {/* Quote Body with Italic, Quotes, and Expandable Multi-Paragraph Support */}
      <div className="space-y-3 sm:space-y-3.5">
        {!isExpanded && hasMultipleParagraphs ? (
          <p className="italic text-stone-700 font-sans text-[16px] leading-relaxed">
            &ldquo;{paragraphs[0]}&hellip;&rdquo;{" "}
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="not-italic inline-flex items-center text-sm font-semibold text-stone-950 underline underline-offset-2 hover:text-[#f26522] transition-colors cursor-pointer ml-1.5"
            >
              Show more
            </button>
          </p>
        ) : (
          paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="italic text-stone-700 font-sans text-[16px] leading-relaxed"
            >
              {idx === 0 && <span>&ldquo;</span>}
              {p}
              {idx === paragraphs.length - 1 && (
                <>
                  <span>&rdquo;</span>{" "}
                  {hasMultipleParagraphs && (
                    <button
                      type="button"
                      onClick={() => setIsExpanded(false)}
                      className="not-italic inline-flex items-center text-sm font-semibold text-stone-950 underline underline-offset-2 hover:text-[#f26522] transition-colors cursor-pointer ml-2"
                    >
                      Show less
                    </button>
                  )}
                </>
              )}
            </p>
          ))
        )}
      </div>

      {/* Author Details (Avatar + Name & Role) - Clickable Link */}
      <div className="mt-8 sm:mt-10">
        {profileUrl ? (
          <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/author inline-flex items-center gap-3.5 sm:gap-4 text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-lg p-1 -m-1"
            aria-label={`${author}'s Profile`}
          >
            {/* Avatar / Initials Circle */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-300/80 group-hover/author:border-stone-400 flex items-center justify-center font-bold text-sm text-stone-800 shadow-2xs shrink-0 overflow-hidden relative transition-all">
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt={author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <span className="font-sans font-bold tracking-tight text-stone-800">
                  {initials || author.charAt(0)}
                </span>
              )}
            </div>

            {/* Name and Role */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm sm:text-base font-sans text-stone-950 group-hover/author:text-stone-700 transition-colors leading-tight">
                  {author}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/author:text-stone-800 group-hover/author:translate-x-0.5 group-hover/author:-translate-y-0.5 transition-all" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans mt-0.5">
                {role}
              </span>
            </div>
          </Link>
        ) : (
          <div className="inline-flex items-center gap-3.5 sm:gap-4 text-left">
            {/* Avatar */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-300/80 flex items-center justify-center font-bold text-sm text-stone-800 shadow-2xs shrink-0 overflow-hidden relative">
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt={author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <span className="font-sans font-bold tracking-tight text-stone-800">
                  {initials || author.charAt(0)}
                </span>
              )}
            </div>

            {/* Name & Role */}
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base font-sans text-stone-950 leading-tight">
                {author}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans mt-0.5">
                {role}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
