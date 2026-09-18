"use client";

import { ContactCard } from "./features/ContactCard";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`scroll-mt-20 pb-14 sm:pb-20 lg:pb-24 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Contact Card */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
