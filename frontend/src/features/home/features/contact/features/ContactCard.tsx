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
      className={`rounded-2xl sm:rounded-3xl bg-[#f4f4f3] border border-stone-200/80 p-7 sm:p-9 md:p-12 transition-all duration-300 hover:border-stone-300 hover:shadow-sm ${className}`}
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
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-950 font-sans leading-tight">
            {CONTACT_DETAILS.title}
          </h3>

          <p className="text-stone-500 text-sm sm:text-base mt-2.5 sm:mt-3 mb-6 sm:mb-8 max-w-xl font-sans leading-relaxed">
            {CONTACT_DETAILS.subtitle}
          </p>

          <ContactEmailButton email={CONTACT_DETAILS.email} />
        </div>
      </div>

      {/* Bottom Row: Divider & Social Profile Links */}
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-200/80">
        <ContactSocialLinks links={SOCIAL_LINKS} />
      </div>
    </div>
  );
}
