"use client";

import React from "react";
import { Plus } from "lucide-react";
import { FaqItem } from "../constants";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const contentId = `faq-content-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <div className="border-b border-stone-300/80">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
      >
        <span className="font-extrabold text-base sm:text-lg md:text-xl uppercase tracking-tight text-stone-950 group-hover:text-stone-700 transition-colors">
          {item.question}
        </span>

        <span
          className={`shrink-0 ml-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-stone-900 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mb-5 sm:mb-6"
            : "grid-rows-[0fr] opacity-0 mb-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed pr-6 sm:pr-12">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
