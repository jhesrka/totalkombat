"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TaekwondoIcon, SamboIcon } from "@/components/Icons";

export default function DisciplinasSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reactivo suave conectado a la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax cinematográfico en el fondo
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  // Micro-parallax kinemático contra-scroll para los atletas (efecto 3D dinámico)
  const fighterY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 sm:pt-16 pb-8 sm:pb-10 border-b-2 border-[#E5B842]/50 bg-[#08080B] overflow-hidden"
    >
      {/* Fondo con Parallax Kinemático Bidireccional */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: "url('/imagenes/fondodisiplina.webp')",
        }}
        className="pointer-events-none absolute -top-[10%] -bottom-[10%] -left-[5%] -right-[5%] bg-cover bg-center bg-no-repeat will-change-transform"
      />

      {/* Sutil overlay para realzar el contraste y nitidez de las tarjetas */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Section Title con animación de entrada sincronizada y margen protegido */}
        <div className="relative z-20 mb-10 sm:mb-14 flex items-center justify-center gap-3">
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="slash-red-sm origin-bottom"
          />
          <motion.h2
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-italic text-[25px] sm:text-[32px] text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            Nuestras Disciplinas
          </motion.h2>
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="slash-red-sm origin-bottom"
          />
        </div>

        {/* 2 Skewed Discipline Cards con entrada kinemática stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1140px] mx-auto px-2 sm:px-4 mt-2 sm:mt-4">
          {/* Tarjeta 1: Taekwondo */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative"
          >
            <Link
              href="/oferta-deportiva"
              className="group relative block card-dark-gold rounded-2xl skew-box p-0 h-[146px] sm:h-[152px] overflow-visible transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(229,184,66,0.22)]"
            >
              {/* Imagen de fondo de la tarjeta con zoom cinematográfico en hover */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: "url('/imagenes/fondocards.webp')" }}
              />

              {/* Botón circular rojo flotante con micro-interacción de flecha y resplandor */}
              <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-4 z-30 unskew-box">
                <span className="btn-kombat-red flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-white shadow-[0_4px_12px_rgba(229,28,35,0.7)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(229,28,35,0.95)]">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Contenido sobre el fondo */}
              <div className="relative z-10 unskew-box flex w-full h-full items-end justify-between px-4 sm:px-5 pb-0 pt-2 gap-3 overflow-visible">
                {/* Personaje con contra-parallax y desborde 3D */}
                <motion.div
                  style={{ y: fighterY }}
                  className="relative w-[54%] sm:w-[56%] -ml-6 flex items-end justify-center pointer-events-none select-none z-20 will-change-transform"
                >
                  <img
                    src="/imagenes/disiplina1.webp"
                    alt="Taekwondo en TOTAL KOMBAT"
                    className="w-full max-w-[315px] sm:max-w-[335px] h-auto object-contain object-bottom drop-shadow-[0_12px_22px_rgba(0,0,0,0.95)] transition-transform duration-300 group-hover:scale-105 block align-bottom"
                  />
                </motion.div>

                {/* Textos y disciplina */}
                <div className="w-[46%] sm:w-[44%] flex flex-col items-start pr-2 z-10 self-center py-2 pb-6">
                  <TaekwondoIcon className="h-8 w-11 mb-1 drop-shadow-[0_2px_8px_rgba(235,185,65,0.4)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display-italic text-[22px] sm:text-[26px] text-white leading-none mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Taekwondo
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-200 leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    Técnica, control y
                    <br />
                    alto rendimiento.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tarjeta 2: Sambo */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="relative"
          >
            <Link
              href="/oferta-deportiva"
              className="group relative block card-dark-gold rounded-2xl skew-box p-0 h-[146px] sm:h-[152px] overflow-visible transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(229,184,66,0.22)]"
            >
              {/* Imagen de fondo de la tarjeta con zoom cinematográfico en hover */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: "url('/imagenes/fondocards.webp')" }}
              />

              {/* Botón circular rojo flotante con micro-interacción de flecha y resplandor */}
              <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-4 z-30 unskew-box">
                <span className="btn-kombat-red flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-white shadow-[0_4px_12px_rgba(229,28,35,0.7)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(229,28,35,0.95)]">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Contenido sobre el fondo */}
              <div className="relative z-10 unskew-box flex w-full h-full items-end justify-between px-4 sm:px-5 pb-0 pt-2 gap-3 overflow-visible">
                {/* Luchadores de Sambo con contra-parallax y desborde estético superior sin invadir el título */}
                <motion.div
                  style={{ y: fighterY }}
                  className="relative w-[50%] sm:w-[52%] -ml-4 flex items-end justify-center pointer-events-none select-none z-20 will-change-transform"
                >
                  <img
                    src="/imagenes/disiplina2.webp"
                    alt="Sambo en TOTAL KOMBAT"
                    className="w-full max-w-[205px] sm:max-w-[218px] h-auto object-contain object-bottom drop-shadow-[0_12px_22px_rgba(0,0,0,0.95)] transition-transform duration-300 group-hover:scale-105 block align-bottom"
                  />
                </motion.div>

                {/* Textos y disciplina */}
                <div className="w-[50%] sm:w-[48%] flex flex-col items-start pr-2 z-10 self-center py-2 pb-6">
                  <SamboIcon className="h-8 w-11 mb-1 drop-shadow-[0_2px_8px_rgba(235,185,65,0.4)] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-display-italic text-[22px] sm:text-[26px] text-white leading-none mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Sambo
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-200 leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    Fuerza, estrategia
                    <br />
                    y dominio del combate.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

