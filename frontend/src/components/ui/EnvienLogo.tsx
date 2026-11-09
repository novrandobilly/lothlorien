import React from "react";
import Image, { type ImageProps } from "next/image";
import logoColored from "@/assets/envienstudio-logo-colored.svg";
import logoWhite from "@/assets/envienstudio-logo-white.svg";

export interface EnvienLogoProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  className?: string;
  variant?: "white" | "colored";
  alt?: string;
}

export function EnvienLogo({
  className = "h-6 w-auto",
  variant = "colored",
  alt = "Envien Studio Logo",
  ...props
}: EnvienLogoProps) {
  const logoSrc = variant === "white" ? logoWhite : logoColored;

  return (
    <Image
      src={logoSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
