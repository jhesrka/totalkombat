"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, ShieldCheck, Users } from "lucide-react";

export default function InscripcionesHeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll bidireccional suave conectado al contenedor del Hero (idéntico a Nosotros, Oferta y Formación)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax bidireccional multicapa a 60 FPS acelerado por GPU
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const characterY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const characterScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[60vh] w-full items-end bg-[#050507] overflow-hidden border-b-2 border-[#E5B842]/60 select-none"
    >
      {/* Fondo heroinicio.webp con Parallax Bidireccional */}
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          backgroundImage: "url('/imagenes/heroinicio.webp')",
        }}
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
      />

      {/* Degradado inferior para perfecta unión visual */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050507]/40 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10 pt-10 pb-0 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6">
          {/* Columna Izquierda: Copy + 3 Pilares */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-20 lg:col-span-6 flex flex-col items-start text-left pb-8 lg:pb-10 will-change-transform"
          >
            {/* 1. Tag Superior INSCRIPCIONES con slash lateral rojo premium */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3.5 inline-flex items-stretch gap-1.5"
            >
              <span className="w-2.5 -skew-x-[20deg] rounded-[3px] bg-gradient-to-b from-[#FF3B42] via-[#DC141C] to-[#8F050A] shadow-[0_0_12px_rgba(255,40,50,0.65)]" />
              <div className="relative flex items-center -skew-x-[20deg] rounded-[5px] bg-gradient-to-r from-[#D9141C] via-[#B40B12] to-[#7A0408] px-5 py-1.5 border border-[#FF5C62]/45 shadow-[0_4px_16px_rgba(217,20,28,0.55),inset_0_1px_1px_rgba(255,255,255,0.3)] overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="relative z-10 skew-x-[20deg] font-display-italic text-[14px] sm:text-[15px] font-black tracking-[0.14em] text-white uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  INSCRIPCIONES
                </span>
              </div>
            </motion.div>

            {/* 2. Título Cinemático */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.15 },
                },
              }}
              className="font-display-italic uppercase leading-[0.94] tracking-tight mb-3.5 select-none"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="block whitespace-normal sm:whitespace-nowrap text-[30px] sm:text-[44px] xl:text-[52px] text-silver-metallic font-black"
              >
                HAZ PARTE DE
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 35, scale: 0.94, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="block whitespace-normal sm:whitespace-nowrap text-[34px] sm:text-[48px] xl:text-[56px] text-gold-metallic font-black mt-0.5"
              >
                TOTAL KOMBAT
              </motion.span>
            </motion.h1>

            {/* 3. Párrafo Descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 max-w-[440px] text-[14.5px] sm:text-[15.5px] font-medium leading-[1.35] text-gray-200"
            >
              Inicia tu formación en Taekwondo y Sambo con un proceso de
              inscripción rápido, claro y seguro.
            </motion.p>

            {/* 4. 3 Hero Pillars con entrada suave */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 w-full max-w-[430px] divide-x divide-[#E5B842]/40 pt-1"
            >
              <div className="group/pillar flex flex-col items-center text-center pr-3 transition-transform duration-300 hover:-translate-y-0.5">
                <CalendarCheck className="h-7 w-7 text-[#F3C652] mb-1.5 drop-shadow-[0_0_8px_rgba(243,198,82,0.45)] transition-transform duration-300 group-hover/pillar:scale-110" />
                <span className="text-[11.5px] sm:text-[12.5px] font-bold leading-tight text-white">
                  Cupos
                  <br />
                  Limitados
                </span>
              </div>
              <div className="group/pillar flex flex-col items-center text-center px-3 transition-transform duration-300 hover:-translate-y-0.5">
                <ShieldCheck className="h-7 w-7 text-[#F3C652] mb-1.5 drop-shadow-[0_0_8px_rgba(243,198,82,0.45)] transition-transform duration-300 group-hover/pillar:scale-110" />
                <span className="text-[11.5px] sm:text-[12.5px] font-bold leading-tight text-white">
                  Proceso
                  <br />
                  Original
                </span>
              </div>
              <div className="group/pillar flex flex-col items-center text-center pl-3 transition-transform duration-300 hover:-translate-y-0.5">
                <Users className="h-7 w-7 text-[#F3C652] mb-1.5 drop-shadow-[0_0_8px_rgba(243,198,82,0.45)] transition-transform duration-300 group-hover/pillar:scale-110" />
                <span className="text-[11.5px] sm:text-[12.5px] font-bold leading-tight text-white">
                  Acompañamiento
                  <br />
                  Personalizado
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Atletas con Entrada Cinemática, Parallax y Hover Hero */}
          <motion.div
            style={{ y: characterY, scale: characterScale }}
            className="relative z-10 lg:col-span-6 flex items-end justify-center lg:justify-end self-end will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[760px] flex items-end justify-end"
            >
              <img
                src="/imagenes/personajeoferta.webp"
                alt="Inscripciones TOTAL KOMBAT"
                className="w-full max-w-[560px] lg:max-w-[610px] h-auto object-contain object-bottom select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] block align-bottom transition-all duration-500 hover:drop-shadow-[0_20px_45px_rgba(229,28,35,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
