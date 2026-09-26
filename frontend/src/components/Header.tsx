"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 w-full flex flex-col items-center pointer-events-none">
      {/* Floating Pill Capsule Bar - Option 1: True Frosted Acrylic / Light Glass */}
      <div
        className={cn(
          "w-full max-w-4xl lg:max-w-5xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ease-out backdrop-blur-xl",
          isScrolled
            ? "bg-white/80 border border-stone-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_12px_32px_-6px_rgba(0,0,0,0.08)]"
            : "bg-white/70 border border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_10px_28px_-6px_rgba(0,0,0,0.15)]"
        )}
      >
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 tracking-tight group transition-transform hover:scale-102"
          aria-label="Envien Studio Home"
        >
          <EnvienLogo
            className="h-4.5 sm:h-5 w-auto text-stone-950"
            variant="black"
          />
          <span className="text-base sm:text-lg font-bold tracking-tight font-sans text-stone-950">
            envien<span className="text-[#f26522]">studio</span>.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 text-xs lg:text-sm font-semibold text-stone-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full transition-all hover:text-stone-950 hover:bg-stone-900/5 text-stone-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button with morphing icon animation */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative md:hidden inline-flex items-center justify-center rounded-full p-2 text-stone-700 hover:bg-stone-900/5 hover:text-stone-950 transition-colors w-9 h-9"
          aria-label="Toggle Navigation Menu"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <Menu
              className={cn(
                "absolute h-5 w-5 transition-all duration-300 ease-out",
                isMobileMenuOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              )}
            />
            <X
              className={cn(
                "absolute h-5 w-5 transition-all duration-300 ease-out",
                isMobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown Card - Downward Dropdown Unfold Animation */}
      <div
        className={cn(
          "w-full max-w-sm rounded-3xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden mt-2",
          isMobileMenuOpen
            ? "max-h-72 opacity-100 translate-y-0 pointer-events-auto visible shadow-2xl"
            : "max-h-0 opacity-0 -translate-y-3 pointer-events-none invisible shadow-none"
        )}
      >
        <div
          className={cn(
            "p-4 sm:p-5 rounded-3xl backdrop-blur-xl transition-all duration-300",
            isScrolled
              ? "bg-white/80 border border-stone-200/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_12px_32px_-6px_rgba(0,0,0,0.08)]"
              : "bg-white/70 border border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_10px_28px_-6px_rgba(0,0,0,0.15)]"
          )}
        >
          <nav className="flex flex-col gap-1 text-sm font-semibold">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 30 + 40}ms` : "0ms",
                }}
                className={cn(
                  "rounded-xl px-4 py-2.5 text-stone-700 hover:bg-stone-900/5 hover:text-[#f26522] transition-all duration-200",
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
