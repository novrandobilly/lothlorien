"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Instagram, Github, User } from "lucide-react";
import { useToast } from "@/context/ToastContext";

function WhatsAppIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface ContactUsSectionProps {
  avatarSrc?: string;
}

export function ContactUsSection({
  avatarSrc = "/envien-contact.webp",
}: ContactUsSectionProps) {
  const email = "novrandobilly@gmail.com";
  const { toast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email address copied to clipboard!");
    } catch {
      toast.error("Failed to copy email to clipboard");
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/novrandobilly/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/novrandobilly",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/envien.billy/",
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      url: "https://wa.me/+6282130006695",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-12 relative bg-[#f5f6f8] border-t border-stone-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-xl shadow-stone-900/5 hover:border-amber-400/80 transition-all">
          {/* Main Content Area: Flex row on tablet/desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-10 text-center md:text-left mb-6 sm:mb-8">
            {/* Photo / Avatar Column */}
            <div className="shrink-0 flex flex-col items-center md:items-start">
              <div className="relative group/avatar cursor-pointer">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-md shadow-stone-900/10 flex items-center justify-center relative">
                  {avatarSrc ? (
                    <Image
                      src={avatarSrc}
                      alt="Novrando Billy"
                      fill
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-b from-stone-100 to-stone-200 text-stone-400">
                      <User className="w-12 h-12 stroke-[1.3]" />
                    </div>
                  )}
                </div>

                {/* Online Indicator Dot */}
                <span
                  className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5"
                  title="Active & responding"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                </span>
              </div>

              <div className="mt-3 text-center md:text-left">
                <div className="text-sm font-sans font-bold text-stone-900">
                  Novrando Billy
                </div>
                <div className="text-xs text-amber-700 font-sans font-medium">
                  Envien Studio
                </div>
              </div>
            </div>

            {/* Text & Action Column */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-stone-900 mb-2 leading-[1.15]">
                Let&apos;s Connect
              </h2>

              <p className="text-stone-600 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed font-sans">
                Available for frontend architecture, advisory, and select client engagements.
              </p>

              {/* Email CTA Button (copies email & triggers toast) */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold px-7 py-3 rounded-full text-sm sm:text-base shadow-md shadow-amber-500/20 border border-amber-300 hover:-translate-y-0.5 transition-all group cursor-pointer font-sans"
                aria-label="Copy email address"
              >
                <Mail className="w-4.5 h-4.5 text-stone-950 group-hover:scale-110 transition-transform" />
                <span>{email}</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans">
              Connect elsewhere:
            </span>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-50 text-stone-600 hover:text-amber-800 hover:bg-amber-50 hover:border-amber-300 hover:scale-110 transition-all border border-stone-200 shadow-2xs"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
