import React from "react";
import Link from "next/link";
import { LothlorienButton } from "@/components/ui/LothlorienButton";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300">
      <div className="bg-[#0e121a]/85 backdrop-blur-xl border border-amber-500/20 shadow-lg shadow-black/40 rounded-full px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-stone-100 tracking-tight group"
          aria-label="Envien Studio Home"
        >
          <EnvienLogo className="h-4 sm:h-4.5 w-auto text-stone-100 group-hover:text-amber-200 transition-colors" />
          <span className="text-base sm:text-lg font-bold tracking-tight font-serif text-stone-100 group-hover:text-amber-200 transition-colors">
            Envien Studio
          </span>
        </Link>

        {/* Right side: Contact Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/#contact">
            <LothlorienButton
              variant="outline"
              size="sm"
              className="shadow-xs hover:shadow-sm text-xs font-medium"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Contact
            </LothlorienButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
