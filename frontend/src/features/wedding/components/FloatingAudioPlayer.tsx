"use client";

import React, { useState, useRef, useEffect } from "react";
import { WEDDING_CONFIG } from "../constants/weddingData";

interface FloatingAudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function FloatingAudioPlayer({ autoPlayTrigger = false }: FloatingAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy without user interaction; user can tap anytime
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={WEDDING_CONFIG.music.src}
        loop
        preload="auto"
      />

      {/* Floating Controller Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-40">
        <button
          onClick={togglePlay}
          className={`relative group flex items-center gap-2 p-2.5 sm:p-3 rounded-full bg-[#FFFDF9]/90 border-2 border-[#C5A059] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer ${
            isPlaying ? "shadow-[#C5A059]/30" : ""
          }`}
          title={isPlaying ? "Jeda Musik" : "Putar Musik"}
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          {/* Rotating Vinyl Disc */}
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#2C2523] via-[#7C5E28] to-[#2C2523] border border-[#D4AF37] flex items-center justify-center relative ${
              isPlaying ? "animate-spin [animation-duration:4s]" : ""
            }`}
          >
            {/* Center Vinyl Hole */}
            <div className="w-3 h-3 rounded-full bg-[#FFFDF9] border border-[#C5A059]" />
          </div>

          {/* Icon Badge */}
          <span className="text-xs text-[#7C5E28] font-bold pr-1 hidden sm:inline-block">
            {isPlaying ? "♪ Playing" : "⏸ Paused"}
          </span>
        </button>
      </div>
    </>
  );
}
