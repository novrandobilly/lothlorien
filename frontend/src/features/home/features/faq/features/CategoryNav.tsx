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
      {/* Category Eyebrow matching Selected Works */}
      <div className="hidden lg:inline-flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#f26522]" />
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
          Categories
        </span>
      </div>

      {/* Desktop Vertical Category List */}
      <nav
        className="hidden lg:flex flex-col gap-2"
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
              className={`flex items-center gap-3 text-left transition-all duration-200 cursor-pointer rounded-xl px-4 py-3 text-sm font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
                isActive
                  ? "bg-stone-950 text-white font-semibold shadow-xs"
                  : "bg-transparent text-stone-600 font-medium hover:text-stone-950 hover:bg-stone-200/60"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon
                className={`w-4 h-4 transition-colors shrink-0 ${
                  isActive ? "text-white" : "text-stone-400"
                }`}
              />
              <span className="tracking-tight">
                {cat.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile / Tablet Horizontal Category Scroll/Tabs */}
      <nav
        className="flex lg:hidden overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-2 pb-2 mb-0 border-b border-stone-200/80"
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
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-xs font-semibold font-sans transition-all cursor-pointer ${
                isActive
                  ? "bg-stone-950 text-white shadow-xs"
                  : "bg-white border border-stone-200/80 text-stone-600 hover:text-stone-950 hover:border-stone-300"
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
