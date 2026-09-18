"use client";

import React, { useState } from "react";
import { faqCategories, FaqCategory } from "./constants";
import { CategoryNav } from "./features/CategoryNav";
import { FaqAccordionItem } from "./features/FaqAccordionItem";

interface FaqSectionProps {
  title?: string;
  categories?: FaqCategory[];
  className?: string;
}

export function FaqSection({
  title = "FAQS",
  categories = faqCategories,
  className = "",
}: FaqSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categories[0]?.id || ""
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
      className={`scroll-mt-20 py-14 sm:py-20 lg:py-24 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Card Container styled after the reference design */}
        <div className="rounded-3xl sm:rounded-[36px] bg-[#f0ebe1] border border-stone-300/70 p-7 sm:p-10 md:p-14 lg:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: FAQS Header & Category Navigation */}
            <div className="w-full lg:col-span-4 flex flex-col justify-start">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-stone-950 font-sans uppercase leading-none">
                {title}
              </h2>

              <CategoryNav
                categories={categories}
                activeCategoryId={activeCategoryId}
                onSelectCategory={handleSelectCategory}
              />
            </div>

            {/* Right Column: Question Accordions List */}
            <div className="w-full lg:col-span-8 flex flex-col pt-2 lg:pt-0">
              <div className="flex flex-col">
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
