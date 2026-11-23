"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { CornerRibbons } from "@/components/Icons";

interface ExperienceItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export default function ExperienciaCarouselSection() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Dojang Profesional",
      category: "Instalaciones",
      image: "/images/exp-1.png",
      alt: "Formación grupal en dojang TOTAL KOMBAT",
    },
    {
      id: 2,
      title: "Combate Taekwondo",
      category: "Sparring Olímpico",
      image: "/images/exp-2.png",
      alt: "Combate competitivo de Taekwondo",
    },
    {
      id: 3,
      title: "Campeones y Medallas",
      category: "Logros Oficiales",
      image: "/images/exp-3.png",
      alt: "Medallistas y entrenadores de TOTAL KOMBAT",
    },
    {
      id: 4,
      title: "Cinturones Negros",
      category: "Perfeccionamiento",
      image: "/images/exp-4.png",
      alt: "Equipo de cinturones avanzados y negros",
    },
    {
      id: 5,
      title: "Semillero Infantil",
      category: "Comunidad Infantil",
      image: "/images/exp-5.png",
      alt: "Comunidad infantil de artes marciales",
    },
    {
      id: 6,
      title: "Sambo y Sumisión",
      category: "Defensa Personal",
      image: "/images/action-sambo.png",
      alt: "Entrenamiento de Sambo en TOTAL KOMBAT",
    },
  ];

  // Duplicamos la lista para crear un bucle infinito continuo e imperceptible
  const marqueeItems = [...experiences, ...experiences];
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const selectedItem =
    selectedIndex !== null ? experiences[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    setImgLoaded(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % experiences.length
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + experiences.length) % experiences.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, experiences.length]);

  return (
    <section className="relative bg-white py-7 sm:py-9 lg:py-11 overflow-hidden border-b border-[#E2E8F0] select-none">
      {/* Cintas Doradas Curvas en Esquinas Inferiores */}
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
        {/* Encabezado: / Vive la experiencia TOTAL KOMBAT */}
        <div className="mb-5 sm:mb-6 lg:mb-7 flex items-center justify-center gap-2 sm:gap-2.5">
          <span
            className="inline-block w-3 sm:w-3.5 h-4.5 sm:h-5.5 -skew-x-[22deg] bg-gradient-to-b from-[#FF2B33] via-[#DC141C] to-[#99080E] shadow-[0_0_8px_rgba(220,20,28,0.4)] flex-shrink-0"
            style={{ height: "1.35em" }}
          />
          <h2 className="font-display-italic text-[21px] sm:text-[26px] lg:text-[29px] tracking-tight text-center leading-none">
            <span className="text-[#0E0F13]">Vive la experiencia </span>
            <span className="text-[#D2141D] uppercase drop-shadow-[0_1px_2px_rgba(210,20,29,0.2)]">
              TOTAL KOMBAT
            </span>
          </h2>
        </div>

        {/* Viewport 3D con Perspective Suave */}
        <div
          className="relative w-full overflow-hidden py-2"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track Infinito Automático Continuo */}
          <motion.div
            className="flex gap-4 sm:gap-5 lg:gap-6 w-max cursor-pointer will-change-transform"
            animate={{
              x: isHovered ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 26,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((item, index) => (
              <button
                type="button"
                key={`${item.id}-${index}`}
                onClick={() => setSelectedIndex(index % experiences.length)}
                aria-label={`Ampliar foto: ${item.title}`}
                className="group relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] will-change-transform text-left cursor-pointer"
              >
                {/* Tarjeta Diagonal (-14deg) con Borde Dorado y Sutil Profundidad 3D */}
                <div
                  className="
                    relative w-full h-[165px] sm:h-[185px] lg:h-[205px]
                    rounded-2xl -skew-x-[14deg]
                    border-[1.8px] border-[#E5B842]/75
                    bg-[#0C0C0F]
                    shadow-[0_6px_18px_rgba(0,0,0,0.12),0_0_12px_rgba(229,184,66,0.22)]
                    transition-all duration-300 ease-out
                    group-hover:border-[#FFF0B3]
                    group-hover:shadow-[0_10px_26px_rgba(0,0,0,0.22),0_0_22px_rgba(245,199,78,0.55)]
                    group-hover:-translate-y-1.5 group-hover:scale-[1.03]
                    overflow-hidden
                  "
                >
                  {/* Foto Interior Des-inclinada (+14deg) con Zoom en Hover */}
                  <div className="absolute inset-0 w-full h-full skew-x-[14deg] scale-[1.28] overflow-hidden bg-[#0A0A0D]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="
                        w-full h-full object-cover object-center
                        transition-transform duration-500 ease-out
                        group-hover:scale-108
                        select-none pointer-events-none
                      "
                    />
                  </div>

                  {/* Subtle expand badge on hover */}
                  <span className="pointer-events-none absolute bottom-2.5 right-3 z-20 inline-flex items-center gap-1 rounded-full border border-[#F5C74E]/60 bg-black/70 px-2.5 py-1 text-[10.5px] font-bold text-[#FCE38A] opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 skew-x-[14deg]">
                    <Expand className="h-3 w-3" />
                    <span>Ampliar</span>
                  </span>

                  {/* Línea Superior de Resplandor Neón Dorado */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF7C2] to-transparent shadow-[0_0_10px_#FFD700] pointer-events-none z-10" />
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal Premium */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[880px] overflow-hidden rounded-2xl border border-[#E5B842]/65 bg-[#0B0C10] shadow-[0_24px_70px_rgba(0,0,0,0.85)]"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Cerrar visor"
                className="absolute right-3.5 top-3.5 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition hover:bg-[#C81018] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image stage with subtle loading shimmer */}
              <div className="relative aspect-[16/10] w-full bg-[#070709] flex items-center justify-center overflow-hidden">
                {!imgLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#0B0C10] via-[#171922] to-[#0B0C10]" />
                )}
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  onLoad={() => setImgLoaded(true)}
                  className={`h-full w-full object-contain transition-opacity duration-300 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Prev / Next arrows */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === null
                        ? 0
                        : (prev - 1 + experiences.length) % experiences.length
                    )
                  }
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5B842]/50 bg-black/65 text-[#FCE38A] transition hover:bg-[#E5B842] hover:text-[#111216] cursor-pointer"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev === null ? 0 : (prev + 1) % experiences.length
                    )
                  }
                  aria-label="Foto siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5B842]/50 bg-black/65 text-[#FCE38A] transition hover:bg-[#E5B842] hover:text-[#111216] cursor-pointer"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Caption bar */}
              <div className="flex items-center justify-between border-t border-[#E5B842]/30 bg-[#0D0F14] px-5 py-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5C74E]">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display-italic text-[18px] sm:text-[20px] text-white leading-tight">
                    {selectedItem.title}
                  </h3>
                </div>
                <span className="text-[12px] font-semibold text-gray-400">
                  {(selectedIndex ?? 0) + 1} / {experiences.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
