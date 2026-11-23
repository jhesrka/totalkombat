"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NuestraHistoriaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll bidireccional suave conectado al viewport de la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax multicapa bidireccional a 60 FPS
  const ribbonY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const photoY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const laurelY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      ref={sectionRef}
      className="bg-light-section relative overflow-hidden border-b border-gray-300 select-none"
    >
      {/* Cintas doradas discretas en esquina inferior izquierda con parallax suave */}
      <motion.div
        style={{ y: ribbonY }}
        className="pointer-events-none absolute bottom-0 left-0 w-24 sm:w-32 h-16 sm:h-24 select-none z-0 overflow-hidden opacity-90 will-change-transform"
      >
        <svg viewBox="0 0 240 160" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="historiaGoldL" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8F590A" />
              <stop offset="45%" stopColor="#D89E28" />
              <stop offset="75%" stopColor="#FFE79A" />
              <stop offset="100%" stopColor="#C9901C" />
            </linearGradient>
          </defs>
          <path
            d="M-20 160 C25 152 80 130 130 68 C145 50 156 30 162 10 C145 20 125 42 105 64 C60 112 18 136 -20 142 Z"
            fill="url(#historiaGoldL)"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-4 lg:gap-2">
          {/* Left Copy (5 cols) - Entrada escalonada */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left justify-center py-6 lg:py-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center lg:justify-start gap-2.5 mb-2.5"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="slash-red h-7 w-3 origin-bottom"
              />
              <h2 className="font-display-italic text-[26px] sm:text-[32px] leading-none">
                <span className="text-[#111216]">Nuestra </span>
                <span className="text-[#C81018]">Historia</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 text-[13px] sm:text-[14px] leading-relaxed text-gray-800 font-medium max-w-[440px]"
            >
              <strong className="font-extrabold text-[#C81018]">
                TOTAL KOMBAT
              </strong>{" "}
              nace con la visión de formar deportistas íntegros, promoviendo el
              desarrollo físico, mental y competitivo a través de las artes
              marciales.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[13px] sm:text-[14px] leading-relaxed text-gray-800 font-medium max-w-[440px]"
            >
              Con el paso del tiempo, nos hemos consolidado como un club
              referente en la formación de deportistas en Taekwondo y Sambo, con
              participación en eventos locales, provinciales y nacionales.
            </motion.p>
          </div>

          {/* Center Diagonal Belt & Silhouettes Image (5 cols) - Parallax + Entrada + Hover Premium */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-span-5 relative flex items-center justify-center will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 24 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group/historia relative w-full max-w-[450px] cursor-pointer will-change-transform"
            >
              {/* Slash rojo diagonal decorativo arriba a la izquierda */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="pointer-events-none absolute top-1.5 left-[8.5%] z-20 origin-bottom"
              >
                <span className="block h-7 w-2.5 -skew-x-[20deg] bg-gradient-to-b from-[#FF2A32] via-[#DC141C] to-[#8F050A] shadow-[0_0_8px_rgba(229,28,35,0.55)] transition-transform duration-300 group-hover/historia:scale-110" />
              </motion.div>

              {/* Contenedor diagonal (~20°) con fondo negro integrado para no cortar a los deportistas */}
              <div
                className="relative w-full aspect-[2.2/1] bg-[#060608] overflow-hidden drop-shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover/historia:drop-shadow-[0_12px_28px_rgba(200,16,24,0.28)]"
                style={{
                  clipPath: "polygon(16% 0%, 100% 0%, 84% 100%, 0% 100%)",
                }}
              >
                <img
                  src="/imagenes/nosotros1.webp"
                  alt="Historia y cinturón negro de TOTAL KOMBAT"
                  className="h-full w-full object-contain object-center pl-[10%] pr-[4%] select-none transition-transform duration-500 ease-out group-hover/historia:scale-[1.05]"
                />
                {/* Difuminado sutil en borde izquierdo para fundir con el negro del marco */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#060608] via-[#060608]/60 to-transparent" />
                {/* Destello diagonal sutil en hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover/historia:translate-x-[220%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[20deg]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Laurel Badge (2 cols) - Parallax + Entrada + Hover Dorado */}
          <motion.div
            style={{ y: laurelY }}
            className="lg:col-span-2 flex items-center justify-center py-5 lg:py-6 will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.06 }}
              className="cursor-pointer will-change-transform"
            >
              <img
                src="/imagenes/trayectoria.webp"
                alt="Trayectoria, Disciplina, Formación y Competencia"
                className="w-[175px] lg:w-[200px] h-auto object-contain select-none transition-all duration-300 hover:drop-shadow-[0_6px_18px_rgba(229,184,66,0.45)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
