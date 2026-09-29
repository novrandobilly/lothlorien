"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assessmentData } from "../constants";

export function AssessmentGallery() {
  const [activeId, setActiveId] = useState<string>(
    assessmentData.gallery[0]?.id || "participant-portal",
  );

  const activeItem =
    assessmentData.gallery.find((item) => item.id === activeId) ||
    assessmentData.gallery[0];

  return (
    <div className="w-full my-6 sm:my-8">
      {/* Desktop Image Frame Container */}
      <div className="w-full rounded-2xl sm:rounded-3xl bg-stone-900 border border-stone-200/80 shadow-xl shadow-stone-900/5 overflow-hidden">
        {/* Clean Desktop Browser Chrome Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-stone-950 border-b border-stone-800">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="w-12 sm:w-16" />
        </div>

        {/* Clean Screenshot Display */}
        <div className="relative w-full aspect-16/10 sm:aspect-16/10 bg-stone-950 overflow-hidden">
          <Image
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top transition-opacity duration-300"
            priority
          />
        </div>
      </div>

      {/* Capsule Options - Simple Text with No Icons and No Extra Tags */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-5">
        {assessmentData.gallery.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-stone-950 text-white font-semibold shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-950 border border-stone-200/80 hover:border-stone-300 font-medium hover:bg-stone-50"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
