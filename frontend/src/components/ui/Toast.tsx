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
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-900",
  },
  error: {
    icon: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-900",
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-900",
  },
  info: {
    icon: <Info className="w-5 h-5 text-sky-600 shrink-0" />,
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-900",
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
              "pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg transition-all duration-200 animate-in fade-in slide-in-from-bottom-3",
              config.bg,
              config.border
            )}
          >
            {config.icon}
            <div className={cn("flex-1 text-sm font-medium leading-5", config.text)}>
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
