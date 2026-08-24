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
    "bg-emerald-700 text-white hover:bg-emerald-800 active:bg-emerald-900 shadow-sm border border-emerald-600/30",
  secondary:
    "bg-stone-100 text-stone-900 hover:bg-stone-200 active:bg-stone-300 border border-stone-200",
  outline:
    "border border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100 active:bg-stone-200",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 active:bg-stone-200",
  gold:
    "bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 shadow-sm border border-amber-500/40",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
  md: "text-sm px-4 py-2 rounded-lg gap-2",
  lg: "text-base px-6 py-2.5 rounded-xl gap-2.5",
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
