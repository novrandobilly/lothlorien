"use client";

import React, { useState, useEffect } from "react";
import { WEDDING_CONFIG } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function SaveTheDateCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTime = () => {
      const targetTime = new Date(WEDDING_CONFIG.weddingDateISO).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleGoogleCalendar = () => {
    const { title, description, location, startDate, endDate } = WEDDING_CONFIG.calendarEvent;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownloadIcs = () => {
    const { title, description, location, startDate, endDate } = WEDDING_CONFIG.calendarEvent;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Billy & Gita Wedding//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Wedding-Billy-Gita.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="wedding-countdown" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] shadow-[0_20px_50px_rgba(197,160,89,0.12)] text-center">
          {/* Inner Accent */}
          <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D36] text-xs font-serif uppercase tracking-[0.25em] font-semibold mb-4">
            <span>✦</span> Save The Date <span>✦</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Menghitung Hari Menuju Bahagia
          </h2>

          <p
            className="text-sm sm:text-base font-serif tracking-[0.2em] text-[#2C2523] uppercase font-semibold mt-3"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {WEDDING_CONFIG.weddingDateDisplay}
          </p>

          <BotanicalDivider className="my-6" />

          {/* Countdown Units */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto my-6 sm:my-8">
            {/* Days */}
            <div className="bg-[#FFFDF9] border border-[#C5A059]/30 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#7C5E28]">
                {isMounted ? String(timeLeft.days).padStart(2, "0") : "--"}
              </span>
              <span className="text-[11px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#8C6D36] mt-1 font-semibold">
                Hari
              </span>
            </div>

            {/* Hours */}
            <div className="bg-[#FFFDF9] border border-[#C5A059]/30 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#7C5E28]">
                {isMounted ? String(timeLeft.hours).padStart(2, "0") : "--"}
              </span>
              <span className="text-[11px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#8C6D36] mt-1 font-semibold">
                Jam
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-[#FFFDF9] border border-[#C5A059]/30 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#7C5E28]">
                {isMounted ? String(timeLeft.minutes).padStart(2, "0") : "--"}
              </span>
              <span className="text-[11px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#8C6D36] mt-1 font-semibold">
                Menit
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-[#FFFDF9] border border-[#C5A059]/30 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#7C5E28]">
                {isMounted ? String(timeLeft.seconds).padStart(2, "0") : "--"}
              </span>
              <span className="text-[11px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#8C6D36] mt-1 font-semibold">
                Detik
              </span>
            </div>
          </div>

          {/* Calendar Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              onClick={handleGoogleCalendar}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#C5A059] hover:bg-[#A07830] text-white text-xs sm:text-sm font-serif tracking-wider uppercase font-semibold transition-all duration-200 shadow-md cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Simpan ke Google Calendar</span>
            </button>

            <button
              onClick={handleDownloadIcs}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#C5A059] bg-[#FFFDF9] hover:bg-[#FAF6EE] text-[#7C5E28] text-xs sm:text-sm font-serif tracking-wider uppercase font-semibold transition-all duration-200 shadow-xs cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download iCal (.ics)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
