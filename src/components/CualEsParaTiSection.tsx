"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { TaekwondoIcon, SamboIcon } from "@/components/Icons";

export default function CualEsParaTiSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll bidireccional conectado a la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax multicapa bidireccional a 60 FPS
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const athleteY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const taekwondoPts = [
    "Disciplina y autocontrol",
    "Técnica y precisión",
    "Condición física y agilidad",
    "Proyección competitiva",
  ];

  const samboPts = [
    "Fuerza y resistencia",
    "Estrategia de combate",
    "Control y defensa personal",
    "Alto desarrollo físico",
  ];

  return (
    <section
      ref={sectionRef}
      className="group/cual relative z-20 py-7 lg:py-8 bg-[#09090D] overflow-visible border-b-2 border-[#E5B842]/50 select-none"
    >
      {/* Fondo portadavive.webp con Parallax Bidireccional */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/portadavive.webp')",
          }}
          className="absolute -top-[10%] -bottom-[10%] -left-[3%] -right-[3%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Deportista Izquierdo con Entrada + Contra-parallax + Resplandor Hero en hover */}
      <motion.div
        style={{ y: athleteY }}
        className="hidden xl:block pointer-events-none absolute left-0 bottom-0 h-[108%] z-20 will-change-transform"
      >
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          src="/imagenes/personaje2.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] transition-all duration-500 group-hover/cual:scale-[1.03] group-hover/cual:drop-shadow-[0_12px_32px_rgba(229,28,35,0.55)] origin-bottom select-none"
        />
      </motion.div>

      {/* Deportista Derecho con Entrada + Contra-parallax + Resplandor Hero en hover */}
      <motion.div
        style={{ y: athleteY }}
        className="hidden xl:block pointer-events-none absolute right-0 bottom-0 h-[108%] z-20 will-change-transform"
      >
        <motion.img
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          src="/imagenes/personaje1.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] transition-all duration-500 group-hover/cual:scale-[1.03] group-hover/cual:drop-shadow-[0_12px_32px_rgba(229,28,35,0.55)] origin-bottom select-none"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[960px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* Left Copy (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-6 will-change-transform"
          >
            <div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute right-1 top-1 bottom-1 w-[1px] rotate-[14deg] bg-gradient-to-b from-transparent via-[#E5B842]/75 to-transparent"
            />
            <h2 className="font-display-italic text-[25px] sm:text-[31px] leading-tight mb-2 sm:whitespace-nowrap">
              <span className="text-white">¿Cuál es </span>
              <span className="text-gold-metallic">para ti?</span>
            </h2>
            <p className="text-[13px] sm:text-[13.5px] leading-snug text-gray-200 max-w-[270px]">
              Conoce las principales fortalezas de cada disciplina y elige la que
              más se adapte a tus objetivos.
            </p>
          </motion.div>

          {/* Center Taekwondo List (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-4 flex flex-col items-start lg:pl-2 lg:pr-6 will-change-transform"
          >
            {/* Glowing Diagonal Gold Divider con destello central */}
            <div
              aria-hidden="true"
              className="hidden lg:flex items-center justify-center pointer-events-none absolute right-1 top-0 bottom-0 w-[2px] rotate-[14deg] bg-gradient-to-b from-transparent via-[#FCE38A] to-transparent shadow-[0_0_12px_#F3C652]"
            >
              <span className="h-3 w-3 rounded-full bg-[#FFF7C2] blur-[3px] shadow-[0_0_14px_#FFD700]" />
            </div>

            <motion.div
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 360, damping: 22 }}
              className="group/pill relative mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-[#E5B842]/75 bg-gradient-to-r from-[#D80010] via-[#EF1824] to-[#99080E] pl-2.5 pr-5 py-1 shadow-[0_4px_16px_rgba(220,20,28,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] cursor-pointer transition-shadow duration-300 hover:border-[#FFF0B3] hover:shadow-[0_6px_22px_rgba(229,28,35,0.9)]"
            >
              <TaekwondoIcon className="h-8 w-10 -my-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] transition-transform duration-300 group-hover/pill:scale-110" />
              <span className="font-display-italic text-[18px] text-white tracking-tight">
                Taekwondo
              </span>
            </motion.div>

            <ul className="space-y-1.5 text-[13px] sm:text-[13.5px] font-medium text-gray-100">
              {taekwondoPts.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
                >
                  <Check className="h-4 w-4 text-[#F3C652] stroke-[3] shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Sambo List (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-start lg:pl-4 will-change-transform"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 360, damping: 22 }}
              className="group/pill relative mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-[#E5B842]/75 bg-gradient-to-r from-[#D80010] via-[#EF1824] to-[#99080E] pl-2.5 pr-5 py-1 shadow-[0_4px_16px_rgba(220,20,28,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] cursor-pointer transition-shadow duration-300 hover:border-[#FFF0B3] hover:shadow-[0_6px_22px_rgba(229,28,35,0.9)]"
            >
              <SamboIcon className="h-8 w-10 -my-1.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] transition-transform duration-300 group-hover/pill:scale-110" />
              <span className="font-display-italic text-[18px] text-white tracking-tight">
                Sambo
              </span>
            </motion.div>

            <ul className="space-y-1.5 text-[13px] sm:text-[13.5px] font-medium text-gray-100">
              {samboPts.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
                >
                  <Check className="h-4 w-4 text-[#F3C652] stroke-[3] shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
