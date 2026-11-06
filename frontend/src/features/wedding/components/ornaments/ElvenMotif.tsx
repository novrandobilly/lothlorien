import React from "react";

export function ElvenLeafMotif({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="elvenGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9E8B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
        <linearGradient id="elvenGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4E7055" />
          <stop offset="100%" stopColor="#2D4834" />
        </linearGradient>
      </defs>

      {/* Elegant Mallorn / Lorien Brooch Leaf */}
      <path
        d="M50 10 C35 30 20 50 30 75 C38 88 50 90 50 90 C50 90 62 88 70 75 C80 50 65 30 50 10 Z"
        fill="url(#elvenGreen)"
        stroke="url(#elvenGold)"
        strokeWidth="2"
      />
      {/* Central Gold Vein */}
      <path
        d="M50 16 L50 86"
        stroke="url(#elvenGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Delicate Side Veins */}
      <path
        d="M50 30 Q40 38 35 44 M50 30 Q60 38 65 44 M50 48 Q38 56 34 64 M50 48 Q62 56 66 64 M50 66 Q42 74 38 80 M50 66 Q58 74 62 80"
        stroke="url(#elvenGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Crown / Star at Tip */}
      <circle cx="50" cy="12" r="3" fill="#FDF6ED" stroke="url(#elvenGold)" strokeWidth="1" />
    </svg>
  );
}
