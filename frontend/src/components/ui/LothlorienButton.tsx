import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
export type ButtonSize = "sm" | "md" | "lg";

export interface LothlorienButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-900 text-amber-100 hover:from-emerald-800 hover:via-emerald-700 hover:to-teal-800 active:from-emerald-950 active:to-teal-950 shadow-md shadow-emerald-950/40 border border-amber-500/40 hover:border-amber-400/70 hover:shadow-[0_0_20px_-3px_rgba(212,175,55,0.25)]",
  secondary:
    "bg-[#131722]/90 text-stone-200 hover:bg-[#1a2030] hover:text-amber-100 active:bg-[#0f121a] border border-stone-800 hover:border-amber-500/40 shadow-xs",
  outline:
    "border border-amber-500/35 bg-stone-900/30 text-amber-200/90 hover:bg-amber-500/10 hover:border-amber-400/65 hover:text-amber-100 active:bg-amber-500/20 backdrop-blur-xs",
  ghost:
    "bg-transparent text-stone-300 hover:text-amber-200 hover:bg-stone-800/40 active:bg-stone-800/60",
  gold:
    "bg-linear-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 font-semibold hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 active:from-amber-700 active:to-amber-600 shadow-md shadow-amber-950/40 border border-amber-300/60 hover:shadow-[0_0_20px_-3px_rgba(245,158,11,0.35)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
  md: "text-sm px-5 py-2 rounded-full gap-2",
  lg: "text-base px-7 py-3 rounded-full gap-2.5",
};

export const LothlorienButton = forwardRef<HTMLButtonElement, LothlorienButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="animate-spin shrink-0 h-4 w-4" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

LothlorienButton.displayName = "LothlorienButton";
