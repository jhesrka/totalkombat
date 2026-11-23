import React from "react";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#070709]/85 backdrop-blur-md"
      role="status"
      aria-live="polite"
      aria-label="Cargando contenido"
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(245,199,78,0.28),transparent_70%)] animate-pulse" />
          <img
            src="/imagenes/logo.webp"
            alt="TOTAL KOMBAT"
            className="relative h-14 w-auto object-contain drop-shadow-[0_4px_16px_rgba(229,184,66,0.45)]"
          />
        </div>

        <div className="h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[pulse_1.1s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#E51C23] via-[#F5C74E] to-[#E51C23]" />
        </div>
      </div>
    </div>
  );
}
