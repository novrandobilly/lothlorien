import React from "react";

interface DoveMotifProps {
  className?: string;
  flip?: boolean;
}

export function DoveMotif({ className = "w-16 h-16", flip = false }: DoveMotifProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`doveWing-${flip ? "r" : "l"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F5EFE6" />
          <stop offset="100%" stopColor="#D9C7B2" />
        </linearGradient>
        <linearGradient id={`doveAccent-${flip ? "r" : "l"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECC875" />
          <stop offset="100%" stopColor="#C5A059" />
        </linearGradient>
      </defs>

      {/* Tail Feathers */}
      <path
        d="M20 58 C12 65 6 74 2 78 C12 74 22 68 28 60 Z"
        fill={`url(#doveWing-${flip ? "r" : "l"})`}
        stroke={`url(#doveAccent-${flip ? "r" : "l"})`}
        strokeWidth="0.8"
      />
      <path
        d="M24 55 C18 64 12 72 8 76 C17 71 27 65 32 57 Z"
        fill={`url(#doveWing-${flip ? "r" : "l"})`}
      />

      {/* Main Back Wing (Lifted High) */}
      <path
        d="M48 40 C42 22 50 6 72 2 C68 14 62 25 56 36 Z"
        fill={`url(#doveWing-${flip ? "r" : "l"})`}
        stroke={`url(#doveAccent-${flip ? "r" : "l"})`}
        strokeWidth="0.8"
      />
      <path
        d="M52 35 C50 20 58 10 74 6 C70 16 64 26 58 34 Z"
        fill="#FFFFFF"
        opacity="0.8"
      />

      {/* Dove Body */}
      <path
        d="M28 58 C38 60 56 56 68 46 C76 40 82 35 84 28 C78 28 72 32 64 36 C52 42 38 48 28 58 Z"
        fill={`url(#doveWing-${flip ? "r" : "l"})`}
      />

      {/* Head & Beak */}
      <circle cx="82" cy="27" r="7" fill="#FFFFFF" />
      <circle cx="84" cy="25.5" r="1.2" fill="#5A4A3A" />
      {/* Beak */}
      <path d="M88 27 L97 29 L88 31 Z" fill="#D4AF37" />

      {/* Front Forewing */}
      <path
        d="M45 46 C38 32 44 14 62 10 C58 24 54 36 48 48 Z"
        fill="#FFFFFF"
        stroke={`url(#doveAccent-${flip ? "r" : "l"})`}
        strokeWidth="0.8"
      />

      {/* Golden Olive Twig in Beak */}
      <path
        d="M93 29 C98 32 102 36 100 42"
        stroke={`url(#doveAccent-${flip ? "r" : "l"})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M96 32 Q99 30 101 33 Q98 34 96 32 Z"
        fill="#6B8E23"
        stroke={`url(#doveAccent-${flip ? "r" : "l"})`}
        strokeWidth="0.5"
      />
      <path
        d="M99 36 Q103 36 103 40 Q100 40 99 36 Z"
        fill="#6B8E23"
        stroke={`url(#doveAccent-${flip ? "r" : "l"})`}
        strokeWidth="0.5"
      />
    </svg>
  );
}
