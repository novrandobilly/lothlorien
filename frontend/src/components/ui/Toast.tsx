"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";
import { ToastItem, ToastType } from "@/context/ToastContext";
import { cn } from "@/lib/utils";

const typeConfig: Record<
  ToastType,
  {
    icon: React.ReactNode;
    bg: string;
    border: string;
    text: string;
    closeBtn: string;
  }
> = {
  success: {
    icon: <CheckCircle2 className="w-5 h-5 text-white shrink-0" />,
    bg: "bg-emerald-600 shadow-xl shadow-emerald-950/20",
    border: "border-emerald-500",
    text: "text-white font-medium",
    closeBtn: "text-emerald-100 hover:text-white hover:bg-emerald-700/60 focus-visible:ring-white/40",
  },
  error: {
    icon: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
    bg: "bg-white shadow-xl shadow-rose-950/10",
    border: "border-rose-200",
    text: "text-rose-950 font-medium",
    closeBtn: "text-stone-400 hover:text-stone-700 hover:bg-stone-100 focus-visible:ring-rose-300",
  },
  warning: {
    icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
    bg: "bg-white shadow-xl shadow-amber-950/10",
    border: "border-amber-200",
    text: "text-amber-950 font-medium",
    closeBtn: "text-stone-400 hover:text-stone-700 hover:bg-stone-100 focus-visible:ring-amber-300",
  },
  info: {
    icon: <Info className="w-5 h-5 text-teal-600 shrink-0" />,
    bg: "bg-white shadow-xl shadow-teal-950/10",
    border: "border-teal-200",
    text: "text-teal-950 font-medium",
    closeBtn: "text-stone-400 hover:text-stone-700 hover:bg-stone-100 focus-visible:ring-teal-300",
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
      className="fixed bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-5 sm:translate-x-0 z-50 flex flex-col items-center sm:items-end gap-2 w-[calc(100%-2rem)] max-w-sm sm:w-full pointer-events-none"
    >
      {toasts.map((toast) => {
        const config = typeConfig[toast.type];
        return (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-300 animate-toast-in w-full font-sans",
              config.bg,
              config.border
            )}
          >
            {config.icon}
            <div className={cn("flex-1 text-sm leading-snug tracking-tight", config.text)}>
              {toast.message}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className={cn(
                "p-1 rounded-md transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2",
                config.closeBtn
              )}
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
