"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./features/SectionHeader";
import { ContactProfile } from "./features/ContactProfile";
import { ContactEmailButton } from "./features/ContactEmailButton";
import { ContactSocialLinks } from "./features/ContactSocialLinks";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "./constants";

interface ContactSectionProps {
  title?: string;
  className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = CONTACT_DETAILS.aboutParagraphs || [];

  return (
    <section
      id="contact"
      className={`scroll-mt-20 py-10 sm:py-14 lg:py-16 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader />

        {/* 2-Column Unboxed About Me + Contact Layout */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Avatar Profile & About Me Narrative */}
          <div className="w-full lg:col-span-7 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <ContactProfile
              avatarSrc={CONTACT_DETAILS.avatarSrc}
              name={CONTACT_DETAILS.name}
              role={CONTACT_DETAILS.role}
            />

            <div className="flex-1 flex flex-col items-start text-left">
              <div className="text-base text-stone-800 font-sans leading-relaxed">
                <div className="space-y-4">
                  {paragraphs.slice(0, 2).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {paragraphs.length > 2 && (
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4">
                        {paragraphs.slice(2).map((paragraph, idx) => (
                          <p key={idx + 2}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {paragraphs.length > 2 && (
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  aria-expanded={isExpanded}
                  className="inline-flex items-center gap-1.5 mt-3.5 text-sm font-semibold text-stone-600 hover:text-stone-950 transition-colors cursor-pointer group/btn font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
                >
                  <span>{isExpanded ? "See less" : "See more"}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 group-hover/btn:text-stone-950 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Contact Action & Social Profile Links */}
          <div className="w-full lg:col-span-5 flex flex-col items-start text-left lg:pl-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#f26522]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
                Get in Touch
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 font-sans leading-tight">
              {CONTACT_DETAILS.title}
            </h3>

            <p className="text-stone-500 text-[16px] mt-2.5 sm:mt-3 mb-6 sm:mb-7 max-w-md font-sans leading-relaxed">
              {CONTACT_DETAILS.subtitle}
            </p>

            <ContactEmailButton email={CONTACT_DETAILS.email} />

            {/* Social Links Row */}
            <div className="mt-7 sm:mt-8 pt-6 border-t border-stone-200/80 w-full">
              <ContactSocialLinks links={SOCIAL_LINKS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
