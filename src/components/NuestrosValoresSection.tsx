"use client";

import React, { useId, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ValorItem {
  id: string;
  line1: string;
  line2?: string;
  renderIcon: (gradId: string) => React.ReactNode;
}

export default function NuestrosValoresSection() {
  const uid = useId().replace(/:/g, "_");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const valores: ValorItem[] = [
    {
      id: "disciplina",
      line1: "Disciplina",
      renderIcon: (gradId) => (
        <svg viewBox="0 0 64 52" className="h-10 w-12" fill="none">
          {/* Dos deportistas saludando / postura de disciplina en oro sólido 3D */}
          <circle cx="32" cy="11" r="6" fill={`url(#${gradId})`} />
          <path
            d="M17 20 C17 15 22 13 28 15 L32 18 L36 15 C42 13 47 15 47 20 L50 38 H42 L40 26 L36 29 V44 H28 V29 L24 26 L22 38 H14 L17 20 Z"
            fill={`url(#${gradId})`}
          />
          <path
            d="M21 22 L15 28 M43 22 L49 28"
            stroke="#09090C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "respeto",
      line1: "Respeto",
      renderIcon: (gradId) => (
        <svg viewBox="0 0 64 52" className="h-10 w-12" fill="none">
          {/* Apretón de manos dorado 3D */}
          <path
            d="M8 21 L18 14 L28 21 L23 27 L14 21 L8 25 Z"
            fill={`url(#${gradId})`}
          />
          <path
            d="M56 21 L46 14 L34 21 L26 27 C24 29 24 32 26 34 L34 40 C36 42 39 41 41 39 L51 29 L56 25 Z"
            fill={`url(#${gradId})`}
          />
          <path
            d="M14 26 L23 36 C25 38 28 38 30 36 L36 30"
            stroke={`url(#${gradId})`}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "responsabilidad",
      line1: "Responsabilidad",
      renderIcon: (gradId) => (
        <svg viewBox="0 0 56 56" className="h-10 w-10" fill="none">
          {/* Escudo con check dorado 3D */}
          <path
            d="M28 5 L47 12 V26 C47 39 38 48 28 52 C18 48 9 39 9 26 V12 L28 5 Z"
            stroke={`url(#${gradId})`}
            strokeWidth="3.6"
            fill="rgba(245, 199, 78, 0.12)"
          />
          <path
            d="M19 28 L25.5 34.5 L38 21"
            stroke={`url(#${gradId})`}
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "compromiso",
      line1: "Compromiso",
      renderIcon: (gradId) => (
        <svg viewBox="0 0 64 52" className="h-10 w-12" fill="none">
          {/* Tres figuras de equipo en oro 3D */}
          <circle cx="32" cy="14" r="6.5" fill={`url(#${gradId})`} />
          <path
            d="M21 38 C21 28 25.5 23 32 23 C38.5 23 43 28 43 38 Z"
            fill={`url(#${gradId})`}
          />
          <circle cx="15" cy="19" r="4.5" fill={`url(#${gradId})`} />
          <path
            d="M7 38 C7 30 10 26 15 26 C18 26 20 27 21 29 V38 H7 Z"
            fill={`url(#${gradId})`}
          />
          <circle cx="49" cy="19" r="4.5" fill={`url(#${gradId})`} />
          <path
            d="M57 38 C57 30 54 26 49 26 C46 26 44 27 43 29 V38 H57 Z"
            fill={`url(#${gradId})`}
          />
        </svg>
      ),
    },
    {
      id: "superacion",
      line1: "Superación",
      renderIcon: (gradId) => (
        <svg viewBox="0 0 60 52" className="h-10 w-11" fill="none">
          {/* Barras ascendentes + flecha hacia arriba en oro 3D */}
          <rect x="10" y="34" width="8" height="12" rx="1.5" fill={`url(#${gradId})`} />
          <rect x="22" y="27" width="8" height="19" rx="1.5" fill={`url(#${gradId})`} />
          <rect x="34" y="20" width="8" height="26" rx="1.5" fill={`url(#${gradId})`} />
          <path
            d="M11 26 L24 17 L32 21 L46 9"
            stroke={`url(#${gradId})`}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 8 H48 V18"
            stroke={`url(#${gradId})`}
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "trabajo",
      line1: "Trabajo en",
      line2: "Equipo",
      renderIcon: (gradId) => (
        <svg viewBox="0 0 56 56" className="h-10 w-10" fill="none">
          {/* Medalla con cinta y estrella en oro 3D */}
          <path
            d="M16 6 H25 L28 18 H20 L16 6 Z M40 6 H31 L28 18 H36 L40 6 Z"
            fill={`url(#${gradId})`}
          />
          <circle
            cx="28"
            cy="33"
            r="14"
            stroke={`url(#${gradId})`}
            strokeWidth="3.5"
            fill="rgba(245, 199, 78, 0.14)"
          />
          <path
            d="M28 24 L30.7 29.6 L36.8 30.5 L32.4 34.8 L33.4 40.8 L28 38 L22.6 40.8 L23.6 34.8 L19.2 30.5 L25.3 29.6 Z"
            fill={`url(#${gradId})`}
          />
        </svg>
      ),
    },
  ];

  const iconGradId = `valGoldIcon-${uid}`;
  const borderGradId = `valHexBorder-${uid}`;
  const bgGradId = `valHexBg-${uid}`;

  return (
    <section
      ref={sectionRef}
      className="relative py-6 lg:py-7 bg-[#08080B] overflow-hidden border-b-2 border-[#E5B842]/50 select-none"
    >
      {/* Fondo fondodisiplina.webp con Parallax Bidireccional */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/fondodisiplina.webp')",
          }}
          className="absolute -top-[10%] -bottom-[10%] -left-[3%] -right-[3%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Definición SVG compartida de gradientes metálicos oro y oro-rojo */}
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id={iconGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF6C4" />
            <stop offset="35%" stopColor="#F5C74E" />
            <stop offset="75%" stopColor="#D48B16" />
            <stop offset="100%" stopColor="#9C5D06" />
          </linearGradient>

          <linearGradient id={borderGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF7C8" />
            <stop offset="35%" stopColor="#F5C74E" />
            <stop offset="68%" stopColor="#E56A2C" />
            <stop offset="100%" stopColor="#FF262D" />
          </linearGradient>

          <linearGradient id={bgGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#141316" />
            <stop offset="55%" stopColor="#0A090C" />
            <stop offset="100%" stopColor="#050406" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4">
          {/* Title Left (2.5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-start gap-2.5">
              <span className="slash-red h-8 w-3 mt-1" />
              <h2 className="font-display-italic leading-[0.95]">
                <span className="block text-[26px] sm:text-[31px] text-white">
                  Nuestros
                </span>
                <span className="block text-[30px] sm:text-[36px] text-gold-metallic">
                  Valores
                </span>
              </h2>
            </div>
            <div className="mt-2.5 lg:ml-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#FF2A32] to-[#B8060E] shadow-[0_0_10px_rgba(229,28,35,0.8)]" />
          </motion.div>

          {/* 6 Pointy-Top Hexagons Right (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-3 sm:gap-3.5">
            {valores.map((val, idx) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.04 }}
                className="group relative flex flex-col items-center justify-center w-[134px] h-[146px] sm:w-[138px] sm:h-[150px] cursor-pointer will-change-transform"
              >
                {/* Pointy-top Hexágono SVG con borde superior dorado e inferior rojo neón */}
                <svg
                  viewBox="0 0 156 172"
                  fill="none"
                  className="absolute inset-0 w-full h-full drop-shadow-[0_4px_12px_rgba(229,28,35,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_6px_18px_rgba(245,199,78,0.5)]"
                >
                  <path
                    d="M72 7 C75.5 5 80.5 5 84 7 L142 40 C145.5 42 148 46 148 50 V122 C148 126 145.5 130 142 132 L84 165 C80.5 167 75.5 167 72 165 L14 132 C10.5 130 8 126 8 122 V50 C8 46 10.5 42 14 40 Z"
                    fill={`url(#${bgGradId})`}
                    stroke={`url(#${borderGradId})`}
                    strokeWidth="2.8"
                  />
                </svg>

                {/* Contenido centrado */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 pt-1">
                  <div className="mb-1.5 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_6px_rgba(229,184,66,0.35)]">
                    {val.renderIcon(iconGradId)}
                  </div>
                  <span className="text-[11.5px] sm:text-[12px] font-bold leading-[1.15] text-white tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {val.line1}
                    {val.line2 && (
                      <>
                        <br />
                        {val.line2}
                      </>
                    )}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
