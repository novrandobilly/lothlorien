"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "../constants/weddingData";
import { BotanicalDivider } from "./ornaments/BotanicalDivider";

export function PhotoGallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % GALLERY_PHOTOS.length;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    });
  }, []);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handleClose, handleNext, handlePrev]);

  return (
    <section id="wedding-gallery" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-[#8C6D36] font-semibold mb-2"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Memories in Frame
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#7C5E28] font-normal"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Galeri Foto Pre-Wedding
          </h2>
          <BotanicalDivider className="my-4" />
          <p className="text-xs sm:text-sm font-serif text-[#7A6E68] max-w-lg mx-auto italic">
            Setiap detik yang terekam adalah bukti kasih dan anugerah yang menuntun langkah kami bersama.
          </p>
        </div>

        {/* Responsive Photo Grid (Breakpoints: 1 col mobile, 2 col sm, 3 col md/lg, 4 col xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => {
            const isTall = photo.aspect === "portrait";

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`group relative rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#FFFDF9] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isTall ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85]">
                    View Photo
                  </span>
                  <p className="text-xs sm:text-sm font-serif italic line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Modal Content Box */}
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 sm:right-0 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
                aria-label="Close photo preview"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl">
                <Image
                  src={GALLERY_PHOTOS[selectedPhotoIndex].url}
                  alt={GALLERY_PHOTOS[selectedPhotoIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption & Counter Bar */}
              <div className="w-full mt-3 flex items-center justify-between text-white/90 px-2">
                <p className="text-xs sm:text-sm font-serif italic">
                  {GALLERY_PHOTOS[selectedPhotoIndex].caption}
                </p>
                <span className="text-xs font-serif tracking-widest uppercase text-[#E6CA85] shrink-0 ml-4">
                  {selectedPhotoIndex + 1} / {GALLERY_PHOTOS.length}
                </span>
              </div>

              {/* Prev Navigation Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white border border-white/20 transition-all z-20 cursor-pointer"
                aria-label="Previous photo"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next Navigation Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white border border-white/20 transition-all z-20 cursor-pointer"
                aria-label="Next photo"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
