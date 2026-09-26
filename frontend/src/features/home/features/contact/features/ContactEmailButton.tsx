"use client";

import React, { useCallback } from "react";
import { Mail } from "lucide-react";
import { useToast } from "@/context/ToastContext";
import { Button } from "@/components/ui/Button";

interface ContactEmailButtonProps {
  email?: string;
  className?: string;
}

export function ContactEmailButton({
  email = "novrandobilly@gmail.com",
  className = "",
}: ContactEmailButtonProps) {
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

      toast.success("Email address copied to clipboard!");
    } catch {
      toast.error("Failed to copy email address");
    }
  }, [email, toast]);

  return (
    <Button
      variant="dark"
      type="button"
      onClick={handleCopyEmail}
      aria-label={`Copy email address ${email} to clipboard`}
      leftIcon={
        <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-stone-400 group-hover:text-white transition-colors" />
      }
      className={className}
    >
      <span className="tracking-tight">{email}</span>
    </Button>
  );
}

export default ContactEmailButton;
