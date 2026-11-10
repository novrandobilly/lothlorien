import React from "react";
import Link from "next/link";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import { CtaLink } from "../../components/CtaLink";
import { ENROLL_ANCHOR } from "../../constants";

interface SalesHeaderProps {
  ctaLabel?: string;
}

// Logo and one action only: a sales page has a single way out, the form.
export function SalesHeader({ ctaLabel = "Daftar" }: SalesHeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-[18px] sm:px-8">
      <Link href="/" aria-label="Envien Studio, ke beranda" className="inline-flex min-h-11 items-center">
        <EnvienLogo className="h-6 w-auto" />
      </Link>
      <CtaLink href={ENROLL_ANCHOR} size="sm">
        {ctaLabel}
      </CtaLink>
    </header>
  );
}

export default SalesHeader;
