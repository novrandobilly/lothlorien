import React from "react";
import Link from "next/link";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { servicesData } from "@/features/home/features/services/constants";
import { SOCIAL_LINKS } from "@/features/home/features/contact/constants";
import { Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/features/home/features/contact/features/WhatsAppIcon";

const SOCIAL_ICON_MAP = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  whatsapp: WhatsAppIcon,
};

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-12 sm:pt-16 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800/80">
          {/* Brand & Mission Column */}
          <div className="md:col-span-4 flex flex-col items-start space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white tracking-tight group/logo"
              aria-label="Envien Studio Home"
            >
              <EnvienLogo className="h-5 w-auto text-white" variant="white" />
              <span className="text-lg font-bold tracking-tight font-sans text-white">
                envien<span className="text-[#f26522]">studio</span>.
              </span>
            </Link>

            <p className="text-stone-400 text-sm font-sans leading-relaxed max-w-sm">
              Engineering resilient web systems, scalable digital products, and
              platform for creators.
            </p>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f26522] hover:text-[#ff7d42] transition-colors font-sans group/contact-btn"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/contact-btn:translate-x-0.5 group-hover/contact-btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 sm:col-span-4 flex flex-col items-start space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-stone-400">
              <li>
                <Link
                  href="/#work"
                  className="hover:text-white transition-colors duration-150"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-white transition-colors duration-150"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-envien-studio-works"
                  className="hover:text-white transition-colors duration-150"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors duration-150"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors duration-150"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-white transition-colors duration-150"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 sm:col-span-4 flex flex-col items-start space-y-3">
            <div className="flex items-center gap-2">
              <Link
                href="/#services"
                className="text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-stone-200 transition-colors font-sans"
              >
                Services
              </Link>
            </div>
            <ul className="space-y-2.5 text-sm font-sans text-stone-400">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/#${service.id}`}
                    className="hover:text-white transition-colors duration-150 block group/item"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 sm:col-span-4 flex flex-col items-start space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
              Connect
            </span>
            <div className="flex items-center gap-2.5 pt-1">
              {SOCIAL_LINKS.map((item) => {
                const Icon = SOCIAL_ICON_MAP[item.iconName];
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 hover:bg-stone-800 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
            <p className="text-xs text-stone-500 font-sans pt-2">
              Based in Jakarta, Indonesia. Collaborating globally.
            </p>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-start gap-4 text-xs font-sans text-stone-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Envien Studio. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
