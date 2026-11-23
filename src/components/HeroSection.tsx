"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Play, ChevronRight } from "lucide-react";
import { useInscripcionModal } from "@/components/InscripcionModalProvider";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { openInscripcionModal } = useInscripcionModal();

  // Scroll bidireccional suave conectado al contenedor del Hero
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
      className="relative flex min-h-[75vh] w-full items-end bg-[#050507] overflow-hidden border-b-2 border-[#E5B842]/60 select-none"
    >
      {/* Fondo con Parallax Bidireccional */}
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
          {/* Columna Izquierda: Textos y Botones */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-20 lg:col-span-5 flex flex-col items-start text-left pb-10 lg:pb-12 will-change-transform"
          >
            {/* 1. Tag Superior con entrada suave y resplandor */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-3 flex items-center shadow-lg"
            >
              <div className="relative flex items-center bg-[#070709] border-t-2 border-b-2 border-[#E5B842] px-4 py-1.5 overflow-hidden">
                <div className="w-4 h-6 -ml-4 mr-3 bg-gradient-to-r from-[#FF262D] to-[#990005] -skew-x-[25deg] shadow-[0_0_10px_rgba(255,30,40,0.8)]" />
                <span className="font-display-italic text-[13px] sm:text-[14px] font-black tracking-[0.18em] text-white uppercase italic">
                  TAEKWONDO &amp; SAMBO
                </span>
                <div className="w-5 h-6 -mr-4 ml-3.5 bg-gradient-to-r from-[#FF262D] via-[#B8060E] to-[#E5B842] -skew-x-[25deg] shadow-[0_0_10px_rgba(255,30,40,0.8)]" />
              </div>
            </motion.div>

            {/* 2. Título Cinemático con entrada staggered y desenfoque */}
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
              className="font-display-italic uppercase leading-[0.90] tracking-tight mb-4 select-none"
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
                className="block text-[42px] sm:text-[54px] xl:text-[62px] text-silver-metallic font-black"
              >
                DISCIPLINA
              </motion.span>

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
                className="block text-[38px] sm:text-[48px] xl:text-[55px] text-silver-metallic font-black"
              >
                QUE FORMA
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
                className="block text-[38px] sm:text-[62px] xl:text-[72px] text-gold-metallic font-black mt-1"
              >
                CAMPEONES
              </motion.span>
            </motion.h1>

            {/* 3. Párrafo Descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 max-w-[440px] text-[15px] sm:text-[16px] font-medium leading-[1.3] text-gray-200"
            >
              Entrenamiento profesional en artes marciales para niños, jóvenes y
              adultos.
            </motion.p>

            {/* 4. Botones CTA con Hovers Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-nowrap sm:flex-wrap items-center gap-2 sm:gap-4"
            >
              {/* Botón Rojo: Inscríbete Hoy */}
              <button
                type="button"
                onClick={() => openInscripcionModal()}
                className="btn-kombat-red group inline-flex items-center gap-1.5 sm:gap-3 rounded-full px-3.5 py-2.5 sm:px-7 sm:py-3 text-[11px] sm:text-[15px] font-extrabold uppercase tracking-wide text-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-white fill-white/10 stroke-[2.2] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span className="tracking-wider">INSCRÍBETE HOY</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              {/* Botón Transparente: Conoce el Club */}
              <Link
                href="/nosotros"
                className="btn-kombat-dark group inline-flex items-center gap-2 sm:gap-3 rounded-full px-3.5 py-2.5 sm:px-6 sm:py-3 text-[11.5px] sm:text-[15px] font-bold text-white backdrop-blur-[2px] whitespace-nowrap shrink-0"
              >
                <span className="flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#FFD452] bg-transparent text-[#FFD452] shadow-[0_0_8px_rgba(255,212,82,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#FFF8D0] group-hover:shadow-[0_0_14px_rgba(255,212,82,0.9)]">
                  <Play className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-current ml-0.5 text-[#FFD452] transition-transform duration-300 group-hover:scale-110" />
                </span>
                <span className="tracking-tight text-white font-semibold transition-colors duration-300 group-hover:text-[#FFF5C0]">
                  Conoce el Club
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Personajes con Entrada Cinemática y Parallax */}
          <motion.div
            style={{ y: characterY, scale: characterScale }}
            className="relative z-10 lg:col-span-7 flex items-end justify-center lg:justify-end self-end will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[760px] flex items-end justify-end"
            >
              <img
                src="/imagenes/personajeicicio.webp"
                alt="Atletas de Taekwondo y Sambo en TOTAL KOMBAT"
                className="w-full max-w-[690px] h-auto object-contain object-bottom select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] block align-bottom transition-all duration-500 hover:drop-shadow-[0_20px_45px_rgba(229,28,35,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

