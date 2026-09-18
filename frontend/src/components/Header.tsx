"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EnvienLogo } from "@/components/ui/EnvienLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-[#fafaf9]/90 backdrop-blur-xl border-b border-stone-200/80"
          : "bg-[#fafaf9] border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-stone-950 tracking-tight group/logo"
          aria-label="Envien Studio Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#f26522] text-white flex items-center justify-center">
            <EnvienLogo
              className="h-3.5 sm:h-4 w-auto text-white"
              variant="white"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight font-sans text-stone-950">
            envien<span className="text-[#f26522]">.</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium font-sans text-stone-600">
          <Link
            href="/#work"
            className="hover:text-stone-950 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#services"
            className="hover:text-stone-950 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            className="hover:text-stone-950 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

