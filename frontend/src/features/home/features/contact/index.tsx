"use client";

import React from "react";
import { ContactCard } from "./features/ContactCard";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`scroll-mt-20 py-14 sm:py-20 lg:py-24 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <ContactCard />
      </div>
    </section>
  );
}

export default ContactSection;
