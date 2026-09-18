"use client";

import React, { useState } from "react";
import { faqCategories, FaqCategory } from "./constants";
import { SectionHeader } from "./features/SectionHeader";
import { CategoryNav } from "./features/CategoryNav";
import { FaqAccordionItem } from "./features/FaqAccordionItem";

interface FaqSectionProps {
  title?: string;
  categories?: FaqCategory[];
  className?: string;
}

export function FaqSection({
  title = "Common Questions",
  categories = faqCategories,
  className = "",
}: FaqSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categories[0]?.id || "",
  );
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const activeCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  const handleToggleQuestion = (id: string) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  const handleSelectCategory = (id: string) => {
    setActiveCategoryId(id);
    setOpenQuestionId(null);
  };

  return (
    <section
      id="faq"
      className={`scroll-mt-20 py-10 sm:py-14 lg:py-16 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} />

        {/* Main 2-Column FAQ Panel matching site style */}
        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-2xl sm:rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-stone-300 hover:shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Category Navigation */}
            <div className="w-full lg:col-span-4 flex flex-col justify-start">
              <CategoryNav
                categories={categories}
                activeCategoryId={activeCategoryId}
                onSelectCategory={handleSelectCategory}
              />
            </div>

            {/* Right Column: Question Accordions List */}
            <div className="w-full lg:col-span-8 flex flex-col pt-1 lg:pt-0">
              <div className="flex flex-col min-h-[220px] sm:min-h-[235px] lg:min-h-[245px]">
                {activeCategory?.questions.map((q) => (
                  <FaqAccordionItem
                    key={q.id}
                    item={q}
                    isOpen={openQuestionId === q.id}
                    onToggle={() => handleToggleQuestion(q.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
