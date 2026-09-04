import React from "react";

export function TennisIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Outer Ball Boundary */}
      <circle cx="12" cy="12" r="9.5" />
      {/* Signature Tennis Seams */}
      <path d="M5.3 5.3C9.2 9.2 9.2 14.8 5.3 18.7" />
      <path d="M18.7 5.3C14.8 9.2 14.8 14.8 18.7 18.7" />
    </svg>
  );
}

export function BagelIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Outer Bagel Circle */}
      <circle cx="12" cy="12" r="9.5" />
      {/* Center Hole */}
      <circle cx="12" cy="12" r="3.5" />
      {/* Subtle sesame seeds around the crust */}
      <path d="M12 4.6v1.2" />
      <path d="M16.5 6.5l-.8.8" />
      <path d="M19.4 12h-1.2" />
      <path d="M16.5 17.5l-.8-.8" />
      <path d="M7.5 6.5l.8.8" />
      <path d="M4.6 12h1.2" />
      <path d="M7.5 17.5l.8-.8" />
    </svg>
  );
}
