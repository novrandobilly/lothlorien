"use client";

import React from "react";
import { FaqCategory } from "../constants";

interface CategoryNavProps {
  categories: FaqCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryNav({
  categories,
  activeCategoryId,
  onSelectCategory,
}: CategoryNavProps) {
  return (
    <div>
      {/* Desktop Vertical Category List (matching screenshot layout) */}
      <nav
        className="hidden lg:flex flex-col gap-5 mt-10 sm:mt-12"
        aria-label="FAQ categories"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeCategoryId;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-3 text-left transition-colors duration-200 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm py-1 ${
                isActive
                  ? "text-stone-950 font-extrabold"
                  : "text-stone-400 font-bold hover:text-stone-700"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon
                className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors shrink-0 ${
                  isActive
                    ? "text-stone-950"
                    : "text-stone-400 group-hover:text-stone-700"
                }`}
              />
              <span className="text-xs sm:text-sm uppercase tracking-wider font-sans">
                {cat.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile / Tablet Horizontal Category Scroll/Tabs */}
      <nav
        className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 pb-2 mt-6 sm:mt-8 border-b border-stone-300/70"
        aria-label="FAQ categories"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeCategoryId;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? "bg-stone-950 text-white shadow-xs"
                  : "bg-stone-200/70 text-stone-600 hover:bg-stone-300/80 hover:text-stone-900"
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
