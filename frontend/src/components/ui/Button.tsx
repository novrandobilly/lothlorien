"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#f26522] hover:bg-[#e05616] text-white shadow-lg shadow-[#f26522]/25 hover:shadow-xl hover:shadow-[#f26522]/30",
  secondary:
    "border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white shadow-2xs",
  outline:
    "border border-stone-200/90 hover:border-stone-300 bg-white hover:bg-stone-50 text-stone-800 hover:text-stone-950 shadow-2xs",
  dark:
    "bg-stone-950 hover:bg-stone-900 text-white shadow-md shadow-stone-950/20 hover:shadow-lg hover:shadow-stone-950/25",
  ghost:
    "bg-transparent text-stone-300 hover:text-white hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs rounded-lg gap-2",
  md: "px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl gap-2.5",
  lg: "px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg rounded-xl gap-3",
};

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> &
  LinkProps & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "group inline-flex items-center justify-center font-semibold transition-all duration-200 font-sans select-none active:translate-y-0 active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:-translate-y-0.5",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="animate-spin shrink-0 h-4 w-4" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if ("href" in props && typeof props.href === "string") {
      const { href, ...linkProps } = props as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    const { type = "button", disabled, ...buttonProps } = props as ButtonAsButton;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
