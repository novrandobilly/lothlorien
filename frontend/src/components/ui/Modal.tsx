"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { ModalOptions } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

const maxWidthStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export function ModalContainer({
  options,
  onClose,
}: {
  options: ModalOptions;
  onClose: () => void;
}) {
  const { title, content, actions, maxWidth = "md", closeOnBackdrop = true } = options;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
      onClick={() => {
        if (closeOnBackdrop) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full bg-[#111520] text-[#f5f2eb] rounded-2xl shadow-2xl border border-amber-500/25 overflow-hidden transition-all duration-200 animate-in zoom-in-95",
          maxWidthStyles[maxWidth]
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800">
          <div className="text-lg font-serif font-normal text-stone-100">
            {title || "Modal"}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-stone-400 hover:text-stone-200 transition-colors p-1 rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 text-stone-300 text-sm leading-relaxed font-sans">{content}</div>

        {actions && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#0d1017] border-t border-stone-800">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
