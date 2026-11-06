import React from "react";
import { EVENTS_DATA } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function EventDetailsSection() {
  return (
    <section id="wedding-events" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Wedding Events
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Rangkaian Acara Bahagia
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-lg mx-auto italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>

        {/* 2 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {EVENTS_DATA.map((event, index) => (
            <div
              key={event.id}
              className="relative border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 md:p-10 bg-[#FFFDF9]/95 shadow-[0_15px_40px_rgba(197,160,89,0.08)] flex flex-col justify-between"
            >
              {/* Inner Border */}
              <div className="absolute inset-2 sm:inset-3 border border-[#E6CA85]/40 rounded-2xl pointer-events-none" />

              <div>
                {/* Event Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#8C6D36] text-[11px] font-serif uppercase tracking-widest font-semibold">
                    {index === 0 ? "✝ Sakramen Pernikahan" : "🥂 Perayaan Resepsi"}
                  </span>
                  <span className="text-[#C5A059] text-xs">✦ ❖ ✦</span>
                </div>

                {/* Event Title */}
                <h3
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2523] mb-1"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8C6D36] font-serif italic mb-6">
                  {event.subtitle}
                </p>

                {/* Time & Date Box */}
                <div className="space-y-4 my-6 p-4 rounded-2xl bg-[#FAF6EE] border border-[#C5A059]/20">
                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#7C5E28] shrink-0">
                      📅
                    </div>
                    <div>
                      <p className="text-[11px] font-serif uppercase tracking-wider text-[#8C6D36] font-semibold">
                        Hari &amp; Tanggal
                      </p>
                      <p className="text-sm sm:text-base font-serif font-bold text-[#2C2523]">
                        {event.dateText}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#7C5E28] shrink-0">
                      ⏰
                    </div>
                    <div>
                      <p className="text-[11px] font-serif uppercase tracking-wider text-[#8C6D36] font-semibold">
                        Waktu
                      </p>
                      <p className="text-sm sm:text-base font-serif font-bold text-[#2C2523]">
                        {event.timeText}
                      </p>
                    </div>
                  </div>

                  {/* Venue & Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#7C5E28] shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-[11px] font-serif uppercase tracking-wider text-[#8C6D36] font-semibold">
                        Tempat &amp; Lokasi
                      </p>
                      <p className="text-sm sm:text-base font-serif font-bold text-[#2C2523]">
                        {event.venueName}
                      </p>
                      <p className="text-xs text-[#7A6E68] mt-1 font-serif leading-relaxed">
                        {event.venueAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Note */}
                {event.note && (
                  <p className="text-[11px] sm:text-xs text-[#7A6E68] italic font-serif leading-relaxed mb-6">
                    * {event.note}
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-4 border-t border-[#C5A059]/20 text-center">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#A07830] text-[#FFFDF9] font-serif text-xs uppercase tracking-widest font-semibold hover:shadow-md hover:scale-[1.01] transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span>Buka Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
