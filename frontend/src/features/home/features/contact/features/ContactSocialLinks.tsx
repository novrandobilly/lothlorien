import React from "react";
import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SOCIAL_LINKS, SocialLink } from "../constants";

const ICON_MAP = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  whatsapp: WhatsAppIcon,
};

interface ContactSocialLinksProps {
  links?: SocialLink[];
  label?: string;
  className?: string;
}

export function ContactSocialLinks({
  links = SOCIAL_LINKS,
  label = "Connect elsewhere:",
  className = "",
}: ContactSocialLinksProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
        {label}
      </span>

      <div className="flex items-center justify-center gap-2.5 sm:gap-3">
        {links.map((item) => {
          const Icon = ICON_MAP[item.iconName];

          return (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-200/90 bg-stone-50 hover:bg-stone-100 hover:border-stone-300 text-stone-600 hover:text-stone-950 transition-all duration-200 hover:scale-110 shadow-2xs active:scale-95 group/social"
            >
              <Icon className="w-4.5 h-4.5 transition-transform duration-200 group-hover/social:scale-105" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
