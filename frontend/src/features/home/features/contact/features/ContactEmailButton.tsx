"use client";

import React, { useState, useCallback } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { useToast } from "@/context/ToastContext";

interface ContactEmailButtonProps {
  email?: string;
  className?: string;
}

export function ContactEmailButton({
  email = "novrandobilly@gmail.com",
  className = "",
}: ContactEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopied(true);
      toast.success("Email address copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      toast.error("Failed to copy email address");
    }
  }, [email, toast]);

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      aria-label={`Copy email address ${email} to clipboard`}
      className={`group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 font-sans select-none active:scale-95 ${
        copied
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 border border-emerald-400"
          : "bg-linear-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:via-amber-500 hover:to-amber-500 text-stone-950 border border-amber-300/80 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-5 h-5 text-white stroke-[2.5] animate-in zoom-in-50 duration-200" />
          <span>Email Copied!</span>
        </>
      ) : (
        <>
          <Mail className="w-5 h-5 text-stone-950 transition-transform duration-300 group-hover:scale-110" />
          <span className="tracking-tight">{email}</span>
          <Copy className="w-4 h-4 text-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-0.5" />
        </>
      )}
    </button>
  );
}
