import React from "react";

interface PeacockMotifProps {
  className?: string;
  flip?: boolean;
}

export function PeacockMotif({ className = "w-24 h-24", flip = false }: PeacockMotifProps) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
    >
      <defs>
        {/* Peacock Body Gradient */}
        <linearGradient id={`peacockBody-${flip ? "r" : "l"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A7B9B" />
          <stop offset="50%" stopColor="#1E4D6B" />
          <stop offset="100%" stopColor="#123145" />
        </linearGradient>

        {/* Tail Feather Gradient */}
        <linearGradient id={`peacockTail-${flip ? "r" : "l"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A8E72" />
          <stop offset="50%" stopColor="#2C6E49" />
          <stop offset="100%" stopColor="#1C4530" />
        </linearGradient>

        {/* Gold Shimmer Gradient */}
        <linearGradient id={`goldShimmer-${flip ? "r" : "l"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECC875" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#8C6D36" />
        </linearGradient>

        {/* Wing Feather Pattern */}
        <radialGradient id={`peacockEye-${flip ? "r" : "l"}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E4D6B" />
          <stop offset="40%" stopColor="#2A7B9B" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#2C6E49" />
        </radialGradient>
      </defs>

      {/* Sweeping Tail Plumage Base */}
      <path
        d="M60 110 C45 130 30 160 25 190 C35 195 55 192 70 185 C85 178 95 160 90 135 Z"
        fill={`url(#peacockTail-${flip ? "r" : "l"})`}
        opacity="0.9"
      />
      <path
        d="M70 120 C60 145 50 175 48 198 C65 198 85 190 100 175 C108 155 100 135 88 120 Z"
        fill={`url(#peacockTail-${flip ? "r" : "l"})`}
        opacity="0.85"
      />

      {/* Decorative Tail Eyes */}
      <circle cx="45" cy="175" r="9" fill={`url(#peacockEye-${flip ? "r" : "l"})`} />
      <circle cx="45" cy="175" r="4" fill="#123145" />
      <circle cx="70" cy="180" r="10" fill={`url(#peacockEye-${flip ? "r" : "l"})`} />
      <circle cx="70" cy="180" r="5" fill="#123145" />
      <circle cx="85" cy="160" r="8" fill={`url(#peacockEye-${flip ? "r" : "l"})`} />
      <circle cx="85" cy="160" r="4" fill="#123145" />
      <circle cx="58" cy="150" r="8" fill={`url(#peacockEye-${flip ? "r" : "l"})`} />
      <circle cx="58" cy="150" r="4" fill="#123145" />

      {/* Gold Feather Filigree Details */}
      <path
        d="M45 166 Q52 175 45 184 M70 170 Q78 180 70 190 M85 152 Q92 160 85 168"
        stroke={`url(#goldShimmer-${flip ? "r" : "l"})`}
        strokeWidth="1.2"
        fill="none"
      />

      {/* Wing Layer */}
      <path
        d="M75 95 C60 105 52 125 58 145 C70 140 85 130 92 115 C96 102 90 95 75 95 Z"
        fill={`url(#goldShimmer-${flip ? "r" : "l"})`}
        opacity="0.85"
      />
      {/* Wing Scallop Lines */}
      <path
        d="M65 110 Q75 115 85 110 M63 120 Q75 125 86 118 M62 130 Q72 135 82 128"
        stroke="#7A5A20"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Breast & Neck */}
      <path
        d="M92 65 C88 80 82 95 80 115 C85 120 95 115 98 105 C102 90 104 75 98 65 Z"
        fill={`url(#peacockBody-${flip ? "r" : "l"})`}
      />
      <path
        d="M95 40 C93 50 90 60 92 68 C96 68 100 62 101 52 C102 44 98 40 95 40 Z"
        fill={`url(#peacockBody-${flip ? "r" : "l"})`}
      />

      {/* Peacock Head & Beak */}
      <ellipse cx="98" cy="38" rx="8" ry="7" fill={`url(#peacockBody-${flip ? "r" : "l"})`} />
      {/* Beak */}
      <path d="M104 38 L114 41 L104 43 Z" fill="#D4AF37" />
      {/* Eye */}
      <circle cx="100" cy="36" r="1.8" fill="#FFFFFF" />
      <circle cx="100.5" cy="36" r="1" fill="#123145" />

      {/* Regal Crest / Crown */}
      <path d="M96 32 L91 20 M97 31 L97 18 M99 32 L103 21" stroke="#D4AF37" strokeWidth="1.2" />
      <circle cx="91" cy="19" r="2.5" fill="#2A7B9B" stroke="#D4AF37" strokeWidth="0.8" />
      <circle cx="97" cy="17" r="2.5" fill="#2A7B9B" stroke="#D4AF37" strokeWidth="0.8" />
      <circle cx="103" cy="20" r="2.5" fill="#2A7B9B" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Perched Feet & Branch */}
      <path
        d="M20 188 C40 185 80 188 120 192 C140 194 155 193 160 190"
        stroke="#8C6D36"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M78 185 L76 190 M84 185 L84 191" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
