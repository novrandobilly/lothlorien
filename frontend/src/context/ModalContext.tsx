"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ModalContainer } from "@/components/ui/Modal";

export interface ModalOptions {
  title?: React.ReactNode;
  content: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  closeOnBackdrop?: boolean;
}

interface ModalContextValue {
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);

  const openModal = useCallback((options: ModalOptions) => {
    setModalOptions(options);
  }, []);

  const closeModal = useCallback(() => {
    setModalOptions(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isOpen: modalOptions !== null,
      }}
    >
      {children}
      {modalOptions && (
        <ModalContainer options={modalOptions} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
