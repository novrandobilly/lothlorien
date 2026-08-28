"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Linkedin, Instagram, Github, PhoneCall } from "lucide-react";

export function CtaIntakeSection() {
  const [copied, setCopied] = useState(false);
  const email = "hello@lothlorien.dev";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
    },
    {
      name: "WhatsApp",
      icon: PhoneCall,
      url: "https://wa.me/",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-stone-300/70 p-10 sm:p-14 text-center shadow-xs hover:shadow-md transition-shadow">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-3 tracking-tight">
            Send a Letter!
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base mb-8 max-w-lg mx-auto font-sans leading-relaxed">
            Got questions, feedback, or just want to say hi? Drop a message in my mailbox.
          </p>

          {/* Email CTA Pill Button */}
          <div className="flex justify-center mb-10">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 bg-amber-700/85 hover:bg-amber-700 text-white font-medium px-8 py-4 rounded-full text-base sm:text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <Mail className="w-5 h-5 text-amber-200 group-hover:scale-110 transition-transform" />
              <span>{email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-stone-200/70 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mr-2">
              Connect elsewhere:
            </span>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100/80 text-stone-700 hover:bg-emerald-100 hover:text-emerald-900 hover:scale-110 transition-all border border-stone-200/60"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
