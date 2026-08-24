"use client";

import React from "react";
import { ToastProvider } from "@/context/ToastContext";
import { ModalProvider } from "@/context/ModalContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  );
}
