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
    "bg-linear-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-700 active:from-emerald-900 active:to-teal-900 shadow-md shadow-emerald-900/20 border border-emerald-600/40",
  secondary:
    "bg-stone-100 text-stone-800 hover:bg-stone-200 active:bg-stone-300 border border-stone-200 shadow-xs",
  outline:
    "border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 hover:border-stone-400 shadow-2xs",
  ghost:
    "bg-transparent text-stone-700 hover:text-stone-900 hover:bg-stone-100 active:bg-stone-200",
  gold:
    "bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold border border-amber-300 shadow-md shadow-amber-500/20",
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
