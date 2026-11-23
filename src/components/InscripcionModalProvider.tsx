"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import InscripcionFormCard from "@/components/InscripcionFormCard";

export interface InscripcionModalOptions {
  disciplina?: string;
  plan?: string;
}

interface InscripcionModalContextValue {
  openInscripcionModal: (options?: InscripcionModalOptions) => void;
  closeInscripcionModal: () => void;
}

const InscripcionModalContext = createContext<InscripcionModalContextValue | null>(null);

export function useInscripcionModal() {
  const ctx = useContext(InscripcionModalContext);
  if (!ctx) {
    throw new Error("useInscripcionModal debe usarse dentro de InscripcionModalProvider");
  }
  return ctx;
}

export default function InscripcionModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<InscripcionModalOptions>({});

  const openInscripcionModal = useCallback((opts?: InscripcionModalOptions) => {
    setOptions(opts ?? {});
    setIsOpen(true);
  }, []);

  const closeInscripcionModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeInscripcionModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeInscripcionModal]);

  return (
    <InscripcionModalContext.Provider
      value={{ openInscripcionModal, closeInscripcionModal }}
    >
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeInscripcionModal}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[460px]"
            >
              <button
                type="button"
                onClick={closeInscripcionModal}
                aria-label="Cerrar formulario de inscripción"
                className="absolute -right-2 -top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[#F3C652]/75 bg-[#0D0E13] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-[#C81018] cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <InscripcionFormCard
                key={`${options.disciplina ?? ""}-${options.plan ?? ""}`}
                defaultDisciplina={options.disciplina}
                defaultPlan={options.plan}
                onSubmitted={closeInscripcionModal}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </InscripcionModalContext.Provider>
  );
}
