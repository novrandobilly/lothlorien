import React from "react";

interface BotanicalDividerProps {
  className?: string;
  withHeart?: boolean;
}

export function BotanicalDivider({ className = "my-6", withHeart = false }: BotanicalDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      {/* Left Flourish Line */}
      <svg className="w-20 sm:w-28 h-5 text-[#C5A059]" viewBox="0 0 100 20" fill="none">
        <path
          d="M0 10 H70 Q82 10 88 5 Q92 2 96 8 Q92 14 86 12 Q80 10 75 12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        {/* Little leaf */}
        <path d="M60 10 Q66 5 72 9 Q66 12 60 10 Z" fill="#7A8B7B" opacity="0.8" />
        <circle cx="88" cy="5" r="1.5" fill="currentColor" />
      </svg>

      {/* Center Motif */}
      {withHeart ? (
        <span className="text-[#C08081] text-lg">❦</span>
      ) : (
        <div className="flex items-center gap-1 text-[#C5A059]">
          <span className="text-xs">✦</span>
          <span className="text-base text-[#D4AF37]">❖</span>
          <span className="text-xs">✦</span>
        </div>
      )}

      {/* Right Flourish Line (Mirrored) */}
      <svg className="w-20 sm:w-28 h-5 text-[#C5A059] -scale-x-100" viewBox="0 0 100 20" fill="none">
        <path
          d="M0 10 H70 Q82 10 88 5 Q92 2 96 8 Q92 14 86 12 Q80 10 75 12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M60 10 Q66 5 72 9 Q66 12 60 10 Z" fill="#7A8B7B" opacity="0.8" />
        <circle cx="88" cy="5" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export function CornerFloralFlourish({
  position = "top-left",
  className = "w-28 h-28 sm:w-36 sm:h-36",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const transformMap = {
    "top-left": "",
    "top-right": "-scale-x-100",
    "bottom-left": "-scale-y-100",
    "bottom-right": "-scale-x-100 -scale-y-100",
  };

  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${transformMap[position]} pointer-events-none select-none`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="roseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A598" />
          <stop offset="50%" stopColor="#C97A7E" />
          <stop offset="100%" stopColor="#8C4A52" />
        </radialGradient>
        <radialGradient id="peonyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F2D1D6" />
          <stop offset="60%" stopColor="#D9A5B3" />
          <stop offset="100%" stopColor="#A06375" />
        </radialGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8EAA90" />
          <stop offset="100%" stopColor="#4D6B51" />
        </linearGradient>
      </defs>

      {/* Gold Flourish Corner Border */}
      <path
        d="M6 130 V20 Q6 6 20 6 H130"
        stroke="#C5A059"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 120 V24 Q12 12 24 12 H120"
        stroke="#E6CA85"
        strokeWidth="0.8"
        strokeDasharray="3 3"
      />

      {/* Leaves Cluster */}
      <path d="M22 22 Q40 10 55 24 Q36 32 22 22 Z" fill="url(#leafGrad)" />
      <path d="M22 22 Q10 40 24 55 Q32 36 22 22 Z" fill="url(#leafGrad)" />
      <path d="M38 38 Q58 28 66 45 Q48 52 38 38 Z" fill="url(#leafGrad)" opacity="0.85" />

      {/* Corner Rose Blossom */}
      <circle cx="28" cy="28" r="16" fill="url(#roseGrad)" />
      <path
        d="M20 28 C20 22 36 22 36 28 C36 34 20 34 20 28 Z"
        stroke="#FDF6ED"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="28" cy="28" r="6" fill="#8C4A52" />
      <circle cx="28" cy="28" r="2.5" fill="#E6CA85" />

      {/* Secondary Peony Blossom */}
      <circle cx="58" cy="22" r="11" fill="url(#peonyGrad)" />
      <circle cx="22" cy="58" r="11" fill="url(#peonyGrad)" />

      {/* Gold Dot Accents */}
      <circle cx="8" cy="8" r="3" fill="#D4AF37" />
      <circle cx="20" cy="8" r="1.5" fill="#D4AF37" />
      <circle cx="8" cy="20" r="1.5" fill="#D4AF37" />
    </svg>
  );
}
