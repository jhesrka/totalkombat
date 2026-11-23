"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TaekwondoIcon, SamboIcon, CornerRibbons } from "@/components/Icons";
import { useInscripcionModal } from "@/components/InscripcionModalProvider";

export default function ConoceDisciplinasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { openInscripcionModal } = useInscripcionModal();

  // Scroll bidireccional conectado a la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Micro-parallax kinemático contra-scroll para los atletas (efecto 3D dinámico)
  const fighterY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-light-section relative py-10 lg:py-12 overflow-hidden border-b border-gray-300 select-none"
    >
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Heading con entrada suave */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2.5 mb-1">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="slash-red-sm origin-bottom"
            />
            <h2 className="font-display-italic text-[25px] sm:text-[32px]">
              <span className="text-[#111216]">Conoce nuestras </span>
              <span className="text-[#C81018]">Disciplinas</span>
            </h2>
          </div>
          <p className="text-[13.5px] sm:text-[14.5px] font-medium text-gray-700">
            Dos artes marciales con enfoque formativo, deportivo y competitivo.
          </p>
        </motion.div>

        {/* 2 Cards Inclinadas idénticas a la sección Nuestras Disciplinas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1160px] mx-auto px-2 sm:px-4 mt-2">
          {/* Tarjeta 1: Taekwondo */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative"
          >
            <div className="group relative block card-dark-gold rounded-2xl skew-box p-0 min-h-[195px] sm:min-h-[205px] overflow-visible transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(229,184,66,0.28)]">
              {/* Fondo fondocards.webp con zoom en hover */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: "url('/imagenes/fondocards.webp')" }}
              />

              {/* Contenido des-inclinado */}
              <div className="relative z-10 unskew-box flex w-full h-full min-h-[195px] sm:min-h-[205px] items-end justify-between px-4 sm:px-5 pb-0 pt-2 gap-3 overflow-visible">
                {/* Atleta Taekwondo con contra-parallax y desborde 3D */}
                <motion.div
                  style={{ y: fighterY }}
                  className="relative w-[50%] sm:w-[52%] -ml-6 flex items-end justify-center pointer-events-none select-none z-20 will-change-transform"
                >
                  <img
                    src="/imagenes/disiplina1.webp"
                    alt="Taekwondo Olímpico en TOTAL KOMBAT"
                    className="w-full max-w-[300px] sm:max-w-[325px] h-auto object-contain object-bottom drop-shadow-[0_12px_22px_rgba(0,0,0,0.95)] transition-transform duration-300 group-hover:scale-105 block align-bottom"
                  />
                </motion.div>

                {/* Textos + Botón Conoce más */}
                <div className="w-[50%] sm:w-[48%] flex flex-col items-start pr-2 z-10 self-center py-4">
                  <TaekwondoIcon className="h-8 w-11 mb-1 drop-shadow-[0_2px_8px_rgba(235,185,65,0.4)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display-italic text-[24px] sm:text-[27px] text-white leading-none mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Taekwondo
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-gray-200 leading-snug mb-3.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    Disciplina olímpica que desarrolla la técnica, el control,
                    la disciplina y el alto rendimiento.
                  </p>
                  <button
                    type="button"
                    onClick={() => openInscripcionModal({ disciplina: "Taekwondo" })}
                    className="btn-kombat-red inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-bold text-white shadow-[0_4px_14px_rgba(229,28,35,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_18px_rgba(229,28,35,0.9)] cursor-pointer"
                  >
                    <span>Conoce más</span>
                    <ChevronRight className="h-4 w-4 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 2: Sambo */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative"
          >
            <div className="group relative block card-dark-gold rounded-2xl skew-box p-0 min-h-[195px] sm:min-h-[205px] overflow-visible transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(229,184,66,0.28)]">
              {/* Fondo fondocards.webp con zoom en hover */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: "url('/imagenes/fondocards.webp')" }}
              />

              {/* Contenido des-inclinado */}
              <div className="relative z-10 unskew-box flex w-full h-full min-h-[195px] sm:min-h-[205px] items-end justify-between px-4 sm:px-5 pb-0 pt-2 gap-3 overflow-visible">
                {/* Luchadores de Sambo con contra-parallax y desborde 3D */}
                <motion.div
                  style={{ y: fighterY }}
                  className="relative w-[48%] sm:w-[50%] -ml-4 flex items-end justify-center pointer-events-none select-none z-20 will-change-transform"
                >
                  <img
                    src="/imagenes/disiplina2.webp"
                    alt="Sambo en TOTAL KOMBAT"
                    className="w-full max-w-[205px] sm:max-w-[225px] h-auto object-contain object-bottom drop-shadow-[0_12px_22px_rgba(0,0,0,0.95)] transition-transform duration-300 group-hover:scale-105 block align-bottom"
                  />
                </motion.div>

                {/* Textos + Botón Conoce más */}
                <div className="w-[52%] sm:w-[50%] flex flex-col items-start pr-2 z-10 self-center py-4">
                  <SamboIcon className="h-8 w-11 mb-1 drop-shadow-[0_2px_8px_rgba(235,185,65,0.4)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display-italic text-[24px] sm:text-[27px] text-white leading-none mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Sambo
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-gray-200 leading-snug mb-3.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    Arte marcial de origen ruso que fortalece la fuerza, la
                    estrategia y el dominio del combate.
                  </p>
                  <button
                    type="button"
                    onClick={() => openInscripcionModal({ disciplina: "Sambo" })}
                    className="btn-kombat-red inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-bold text-white shadow-[0_4px_14px_rgba(229,28,35,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_18px_rgba(229,28,35,0.9)] cursor-pointer"
                  >
                    <span>Conoce más</span>
                    <ChevronRight className="h-4 w-4 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
