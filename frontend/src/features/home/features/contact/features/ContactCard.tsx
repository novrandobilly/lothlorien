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
      className={`rounded-2xl sm:rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-8 md:p-10 lg:p-11 transition-all duration-300 hover:border-stone-300 hover:shadow-sm ${className}`}
    >
      {/* Top Row: Avatar Profile + Main Headline & Email Action */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center md:text-left">
        {/* Left Column: Avatar & Name */}
        <ContactProfile
          avatarSrc={CONTACT_DETAILS.avatarSrc}
          name={CONTACT_DETAILS.name}
          role={CONTACT_DETAILS.role}
        />

        {/* Right Column: Heading, Subtitle & Action */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-950 font-sans leading-tight">
            {CONTACT_DETAILS.title}
          </h3>

          <p className="text-stone-500 text-[16px] mt-2 sm:mt-2.5 mb-5 sm:mb-6 max-w-xl font-sans leading-relaxed">
            {CONTACT_DETAILS.subtitle}
          </p>

          <ContactEmailButton email={CONTACT_DETAILS.email} />
        </div>
      </div>

      {/* Bottom Row: Divider & Social Profile Links */}
      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-stone-200/80">
        <ContactSocialLinks links={SOCIAL_LINKS} />
      </div>
    </div>
  );
}
