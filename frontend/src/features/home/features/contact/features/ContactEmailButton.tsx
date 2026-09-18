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
      className={`group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base cursor-pointer transition-all duration-200 font-sans select-none active:scale-95 shadow-sm ${
        copied
          ? "bg-emerald-600 text-white"
          : "bg-stone-950 hover:bg-stone-800 text-white"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-[2.5]" />
          <span>Email Copied!</span>
        </>
      ) : (
        <>
          <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-stone-300 group-hover:text-white transition-colors" />
          <span className="tracking-tight">{email}</span>
          <Copy className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-200 transition-colors ml-0.5" />
        </>
      )}
    </button>
  );
}
