"use client";

import React from "react";
import { SectionHeader } from "./features/SectionHeader";
import { ContactProfile } from "./features/ContactProfile";
import { ContactEmailButton } from "./features/ContactEmailButton";
import { ContactSocialLinks } from "./features/ContactSocialLinks";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "./constants";

interface ContactSectionProps {
  title?: string;
  className?: string;
}

export function ContactSection({
  title = "About & Contact",
  className = "",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`scroll-mt-20 py-10 sm:py-14 lg:py-16 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={title} />

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
              <div className="space-y-4 text-[16px] text-stone-600 font-sans leading-relaxed">
                {CONTACT_DETAILS.aboutParagraphs?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
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
