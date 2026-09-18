"use client";

import { ContactCard } from "./features/ContactCard";

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`scroll-mt-20 py-10 sm:py-14 lg:py-16 relative bg-[#fafaf9] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Contact Card */}
        <div className="max-w-4xl mx-auto">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
