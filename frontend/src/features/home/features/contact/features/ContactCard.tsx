import React from "react";
import { ContactProfile } from "./ContactProfile";
import { ContactEmailButton } from "./ContactEmailButton";
import { ContactSocialLinks } from "./ContactSocialLinks";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "../constants";

interface ContactCardProps {
  className?: string;
}

export function ContactCard({ className = "" }: ContactCardProps) {
  return (
    <div
      className={`rounded-3xl bg-white border border-stone-200/90 p-7 sm:p-9 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-stone-300/90 ${className}`}
    >
      {/* Top Row: Avatar Profile + Main Headline & Email Action */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-14 text-center md:text-left">
        {/* Left Column: Avatar & Name */}
        <ContactProfile
          avatarSrc={CONTACT_DETAILS.avatarSrc}
          name={CONTACT_DETAILS.name}
          role={CONTACT_DETAILS.role}
        />

        {/* Right Column: Heading, Subtitle & Action */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-stone-900 leading-[1.15]">
            {CONTACT_DETAILS.title}
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-2.5 sm:mt-3 mb-6 sm:mb-8 max-w-xl font-sans leading-relaxed">
            {CONTACT_DETAILS.subtitle}
          </p>

          <ContactEmailButton email={CONTACT_DETAILS.email} />
        </div>
      </div>

      {/* Bottom Row: Divider & Social Profile Links */}
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-100">
        <ContactSocialLinks links={SOCIAL_LINKS} />
      </div>
    </div>
  );
}
