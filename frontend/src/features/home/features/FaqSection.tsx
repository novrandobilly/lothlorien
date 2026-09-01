"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What technical stack do you specialize in?",
      answer:
        "My core expertise is modern TypeScript, React, React Native, Next.js (App Router), TanStack Query, and Tailwind CSS. I also work extensively with PocketBase, REST, GraphQL, and modern styling/component libraries.",
    },
    {
      question: "How do you integrate with our existing backend and team?",
      answer:
        "Seamlessly. We establish clear API schemas (via Zod/OpenAPI/TypeScript) upfront so frontend and backend development can proceed in parallel. Communication happens via Slack/Discord, GitHub PRs, and async Loom video walkthroughs.",
    },
    {
      question: "Why choose a Senior Fractional Engineer over a traditional agency?",
      answer:
        "With Lothlorien, you work directly with a senior engineer and UI architect. There are no project managers acting as telephone games, no junior developers learning on your dime, and no bloated agency overhead. You get high craft and fast velocity.",
    },
    {
      question: "Do you build mobile apps with React Native?",
      answer:
        "Yes! I build cross-platform mobile apps using React Native and Expo. Because state management (TanStack Query) and data layers can be shared between web and mobile, this drastically cuts build time and maintenance costs.",
    },
    {
      question: "What is the typical turnaround for a 0-to-1 MVP sprint?",
      answer:
        "Most MVP sprints take between 2 to 3 weeks. You get weekly milestone builds, continuous test deployments on Vercel/Expo, and a production-ready repository upon completion.",
    },
    {
      question: "Who owns the code and intellectual property?",
      answer:
        "You do. 100% of the code, components, architecture assets, and documentation belong to your company from day one with zero vendor lock-in.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Everything you need to know about engagements, communication, and technical handoff.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200 bg-stone-50/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-stone-600 leading-relaxed border-t border-stone-100 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
