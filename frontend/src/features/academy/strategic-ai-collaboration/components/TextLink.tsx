import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}

// Secondary action: plain text with an orange underline that thickens on hover.
export function TextLink({ href, children, tone = "ink", className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center font-semibold underline decoration-[#F26522] decoration-2 underline-offset-[6px] transition-[text-decoration-thickness] hover:decoration-[3px]",
        tone === "ink" ? "text-[#16130F]" : "text-[#FAF7F2]",
        className
      )}
    >
      {children}
    </Link>
  );
}
