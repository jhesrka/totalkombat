"use client";

import React, { useId, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ModalidadesCategoriasSection() {
  const uid = useId().replace(/:/g, "_");
  const goldGradId = `modGold-${uid}`;
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll bidireccional conectado a la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  const categoriasEdad = [
    {
      title: "Niños",
      subtitle: "(5 – 11 años)",
      renderIcon: () => (
        <svg viewBox="0 0 64 52" className="h-9 w-11" fill="none">
          <circle cx="32" cy="14" r="6.5" fill={`url(#${goldGradId})`} />
          <path
            d="M21 38 C21 28 25.5 23 32 23 C38.5 23 43 28 43 38 Z"
            fill={`url(#${goldGradId})`}
          />
          <circle cx="15" cy="19" r="4.5" fill={`url(#${goldGradId})`} />
          <path
            d="M7 38 C7 30 10 26 15 26 C18 26 20 27 21 29 V38 H7 Z"
            fill={`url(#${goldGradId})`}
          />
          <circle cx="49" cy="19" r="4.5" fill={`url(#${goldGradId})`} />
          <path
            d="M57 38 C57 30 54 26 49 26 C46 26 44 27 43 29 V38 H57 Z"
            fill={`url(#${goldGradId})`}
          />
        </svg>
      ),
    },
    {
      title: "Jóvenes",
      subtitle: "(12 – 17 años)",
      renderIcon: () => (
        <svg viewBox="0 0 64 52" className="h-9 w-11" fill="none">
          <path
            d="M32 8 L58 20 L32 32 L6 20 L32 8 Z"
            fill={`url(#${goldGradId})`}
          />
          <path
            d="M16 27 V38 C16 42 23 45 32 45 C41 45 48 42 48 38 V27 L32 34 L16 27 Z"
            fill={`url(#${goldGradId})`}
          />
          <path
            d="M53 22 V36"
            stroke={`url(#${goldGradId})`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="53" cy="38" r="2.8" fill={`url(#${goldGradId})`} />
        </svg>
      ),
    },
    {
      title: "Adultos",
      subtitle: "(18 años en adelante)",
      renderIcon: () => (
        <svg viewBox="0 0 60 52" className="h-9 w-10" fill="none">
          <circle cx="27" cy="15" r="7.5" fill={`url(#${goldGradId})`} />
          <path
            d="M12 41 C12 30 18 25 27 25 C36 25 42 30 42 41 Z"
            fill={`url(#${goldGradId})`}
          />
          <circle cx="43" cy="18" r="4.5" fill={`url(#${goldGradId})`} opacity="0.85" />
          <path
            d="M41 26 C47 26 51 30 52 39 H44"
            stroke={`url(#${goldGradId})`}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      ),
    },
  ];

  const categoriasEtapa = [
    {
      title: "Formación",
      subtitle: "Básica",
      renderIcon: () => (
        <svg viewBox="0 0 64 48" className="h-9 w-11" fill="none">
          {/* Cinturón marcial anudado en oro sólido 3D */}
          <rect x="6" y="12" width="52" height="9" rx="3" fill={`url(#${goldGradId})`} />
          <rect x="26" y="10" width="12" height="13" rx="3" fill={`url(#${goldGradId})`} stroke="#09090B" strokeWidth="1.5" />
          <path
            d="M27 22 L15 41 L23 44 L31 25 Z"
            fill={`url(#${goldGradId})`}
          />
          <path
            d="M37 22 L49 41 L41 44 L33 25 Z"
            fill={`url(#${goldGradId})`}
          />
        </svg>
      ),
    },
    {
      title: "Formación",
      subtitle: "Avanzada",
      renderIcon: () => (
        <svg viewBox="0 0 60 52" className="h-9 w-10" fill="none">
          <rect x="10" y="34" width="8" height="12" rx="1.5" fill={`url(#${goldGradId})`} />
          <rect x="22" y="27" width="8" height="19" rx="1.5" fill={`url(#${goldGradId})`} />
          <rect x="34" y="20" width="8" height="26" rx="1.5" fill={`url(#${goldGradId})`} />
          <path
            d="M11 26 L24 17 L32 21 L46 9"
            stroke={`url(#${goldGradId})`}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 8 H48 V18"
            stroke={`url(#${goldGradId})`}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Competencia",
      subtitle: "Deportiva",
      renderIcon: () => (
        <svg viewBox="0 0 56 52" className="h-9 w-10" fill="none">
          <path
            d="M17 8 H39 V21 C39 28 34 33 28 33 C22 33 17 28 17 21 V8 Z"
            fill={`url(#${goldGradId})`}
          />
          <path
            d="M17 12 H10 C10 20 13 24 17 24 M39 12 H46 C46 20 43 24 39 24"
            stroke={`url(#${goldGradId})`}
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <rect x="25" y="32" width="6" height="8" fill={`url(#${goldGradId})`} />
          <rect x="18" y="40" width="20" height="5" rx="2" fill={`url(#${goldGradId})`} />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center py-10 sm:py-12 lg:py-14 min-h-[250px] lg:min-h-[285px] bg-[#F5F6F8] overflow-hidden border-b border-gray-300 select-none"
    >
      {/* Fondo fondomodalidad.webp con ancho al 100% para mantener visibles ambos personajes laterales */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/fondomodalidad.webp')",
          }}
          className="absolute -top-[4%] -bottom-[4%] inset-x-0 bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat will-change-transform"
        />
      </div>
      {/* Gradiente metálico dorado compartido */}
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF6C4" />
            <stop offset="35%" stopColor="#F5C74E" />
            <stop offset="75%" stopColor="#D48B16" />
            <stop offset="100%" stopColor="#9C5D06" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1000px] px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2.5 mb-0.5">
            <span className="slash-red-sm" />
            <h2 className="font-display-italic text-[24px] sm:text-[31px]">
              <span className="text-[#111216]">Modalidades y </span>
              <span className="text-[#C81018]">Categorías</span>
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] font-medium text-gray-800">
            Programas de entrenamiento adaptados a cada etapa de formación.
          </p>
        </motion.div>

        {/* 6 Tarjetas Inclinadas con Separador Dorado Central y contra-parallax */}
        <motion.div
          style={{ y: cardsY }}
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5 will-change-transform"
        >
          {/* Left 3 Age Cards */}
          <div className="w-full lg:w-[49%] grid grid-cols-3 gap-2.5 sm:gap-3">
            {categoriasEdad.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group cursor-pointer will-change-transform"
              >
                <div className="relative -skew-x-[14deg] overflow-hidden rounded-xl border-[1.5px] border-[#E5B842]/85 bg-gradient-to-b from-[#17161B] via-[#09090B] to-[#040405] px-2 py-3.5 flex flex-col items-center justify-center text-center min-h-[104px] shadow-[0_0_16px_rgba(229,184,66,0.42),inset_0_0_10px_rgba(229,184,66,0.12)] transition-all duration-300 group-hover:border-[#FFF0B3] group-hover:shadow-[0_0_26px_rgba(245,199,78,0.75)]">
                  {/* Destello shimmer diagonal en hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[220%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  {/* Brillo inferior cálido */}
                  <div className="pointer-events-none absolute inset-x-4 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF0A6] to-transparent shadow-[0_0_8px_#FFD700]" />

                  <div className="skew-x-[14deg] flex flex-col items-center relative z-10">
                    <div className="mb-1.5 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_6px_rgba(229,184,66,0.45)]">
                      {item.renderIcon()}
                    </div>
                    <div className="text-[13.5px] sm:text-[14.5px] font-extrabold text-white leading-tight">
                      {item.title}
                    </div>
                    <div className="sm:whitespace-nowrap text-[10px] sm:text-[10.5px] text-white/90 font-medium leading-tight mt-0.5 px-1 sm:px-0">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Separador vertical dorado sutil */}
          <div className="hidden lg:block w-[1.5px] h-20 bg-gradient-to-b from-transparent via-[#D4951A] to-transparent flex-shrink-0" />

          {/* Right 3 Stage Cards */}
          <div className="w-full lg:w-[49%] grid grid-cols-3 gap-2.5 sm:gap-3">
            {categoriasEtapa.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (idx + 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group cursor-pointer will-change-transform"
              >
                <div className="relative -skew-x-[14deg] overflow-hidden rounded-xl border-[1.5px] border-[#E5B842]/85 bg-gradient-to-b from-[#17161B] via-[#09090B] to-[#040405] px-2 py-3.5 flex flex-col items-center justify-center text-center min-h-[104px] shadow-[0_0_16px_rgba(229,184,66,0.42),inset_0_0_10px_rgba(229,184,66,0.12)] transition-all duration-300 group-hover:border-[#FFF0B3] group-hover:shadow-[0_0_26px_rgba(245,199,78,0.75)]">
                  {/* Destello shimmer diagonal en hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[220%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  {/* Brillo inferior cálido */}
                  <div className="pointer-events-none absolute inset-x-4 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF0A6] to-transparent shadow-[0_0_8px_#FFD700]" />

                  <div className="skew-x-[14deg] flex flex-col items-center relative z-10">
                    <div className="mb-1.5 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_6px_rgba(229,184,66,0.45)]">
                      {item.renderIcon()}
                    </div>
                    <div className="text-[13px] sm:text-[14px] font-extrabold text-white leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[12.5px] sm:text-[13.5px] font-extrabold text-white leading-tight">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
