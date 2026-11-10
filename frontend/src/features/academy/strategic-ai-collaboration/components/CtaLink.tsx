import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "min-h-11 px-[18px] text-[15px]",
  md: "min-h-12 px-[22px] text-base",
  lg: "min-h-[54px] px-[26px] text-lg",
};

// Flat orange action: ink text on orange (5.9:1), darkens on hover, presses 1px.
export function CtaLink({ href, children, size = "lg", className = "" }: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-[#F26522] font-bold text-[#16130F] transition-[background-color,transform] duration-150 hover:bg-[#E0571A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16130F]",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
