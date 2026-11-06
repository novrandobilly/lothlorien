"use client";

import React, { useState, useEffect } from "react";

export function FloatingNavDock() {
  const [activeSection, setActiveSection] = useState("wedding-hero");
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: "wedding-hero", label: "Home", icon: "🏛️" },
    { id: "wedding-couple", label: "Couple", icon: "💍" },
    { id: "wedding-events", label: "Events", icon: "📅" },
    { id: "wedding-story", label: "Story", icon: "📖" },
    { id: "wedding-gallery", label: "Gallery", icon: "🖼️" },
    { id: "wedding-gift", label: "Gift", icon: "🎁" },
    { id: "wedding-rsvp", label: "RSVP", icon: "✉️" },
    { id: "wedding-wishes", label: "Wishes", icon: "💬" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check current active section
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-md">
      <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#FFFDF9]/95 border border-[#C5A059]/40 shadow-xl backdrop-blur-md overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-serif transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#C5A059] text-white font-semibold shadow-xs"
                  : "text-[#7A6E68] hover:text-[#7C5E28] hover:bg-[#FAF6EE]"
              }`}
              title={item.label}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline-block text-[11px]">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
