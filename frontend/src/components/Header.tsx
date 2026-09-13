"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { ArrowUpRight } from "lucide-react";

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

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-sans text-stone-600">
          <Link
            href="/"
            className="text-stone-950 font-semibold hover:text-[#f26522] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:text-stone-950 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#work"
            className="hover:text-stone-950 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#labs"
            className="hover:text-stone-950 transition-colors"
          >
            Labs
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold rounded-full px-4 sm:px-5 py-2 sm:py-2.5 bg-stone-950 text-white hover:bg-stone-800 transition-all shadow-sm active:scale-95"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}

