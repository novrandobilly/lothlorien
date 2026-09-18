"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";
import { ToastItem, ToastType } from "@/context/ToastContext";
import { cn } from "@/lib/utils";

const typeConfig: Record<
  ToastType,
  { icon: React.ReactNode; bg: string; border: string; text: string }
> = {
  success: {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />,
    bg: "bg-[#ecfdf5]/95 backdrop-blur-md",
    border: "border-emerald-300 shadow-lg shadow-emerald-700/10",
    text: "text-emerald-950",
  },
  error: {
    icon: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
    bg: "bg-white/95 backdrop-blur-md",
    border: "border-rose-200 shadow-lg shadow-rose-500/10",
    text: "text-rose-950",
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
    bg: "bg-white/95 backdrop-blur-md",
    border: "border-amber-200 shadow-lg shadow-amber-500/10",
    text: "text-amber-950",
  },
  info: {
    icon: <Info className="w-5 h-5 text-teal-600 shrink-0" />,
    bg: "bg-white/95 backdrop-blur-md",
    border: "border-teal-200 shadow-lg shadow-teal-500/10",
    text: "text-teal-950",
  },
};

export function ToastContainer({
  toasts,
  onDismiss,
}: {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}) {
  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"
    >
      {toasts.map((toast) => {
        const config = typeConfig[toast.type];
        return (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl transition-all duration-300 animate-toast-in",
              config.bg,
              config.border
            )}
          >
            {config.icon}
            <div className={cn("flex-1 text-sm font-semibold leading-5", config.text)}>
              {toast.message}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-stone-400 hover:text-stone-700 transition-colors p-0.5 rounded cursor-pointer"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
