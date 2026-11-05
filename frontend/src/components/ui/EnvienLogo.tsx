import React from "react";
import Image, { type ImageProps } from "next/image";
import logoBlack from "@/assets/envienstudio-logo-black.svg";
import logoWhite from "@/assets/envienstudio-logo-white.svg";

export interface EnvienLogoProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  className?: string;
  variant?: "white" | "black" | "current";
  alt?: string;
}

export function EnvienLogo({
  className = "h-6 w-auto",
  variant = "black",
  alt = "Envien Studio Logo",
  ...props
}: EnvienLogoProps) {
  const logoSrc = variant === "white" ? logoWhite : logoBlack;

  return (
    <Image
      src={logoSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
