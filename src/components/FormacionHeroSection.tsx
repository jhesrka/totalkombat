"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FormacionHeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll bidireccional suave conectado al contenedor del Hero (idéntico a Nosotros y Oferta)
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
          {/* Columna Izquierda: Copy */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-20 lg:col-span-6 flex flex-col items-start text-left pb-10 lg:pb-12 will-change-transform"
          >
            {/* 1. Tag Superior FORMACIÓN DEPORTIVA con slash lateral rojo premium */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3.5 inline-flex items-stretch gap-1.5"
            >
              <span className="w-2.5 -skew-x-[20deg] rounded-[3px] bg-gradient-to-b from-[#FF3B42] via-[#DC141C] to-[#8F050A] shadow-[0_0_12px_rgba(255,40,50,0.65)]" />
              <div className="relative flex items-center -skew-x-[20deg] rounded-[5px] bg-gradient-to-r from-[#D9141C] via-[#B40B12] to-[#7A0408] px-5 py-1.5 border border-[#FF5C62]/45 shadow-[0_4px_16px_rgba(217,20,28,0.55),inset_0_1px_1px_rgba(255,255,255,0.3)] overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="relative z-10 skew-x-[20deg] font-display-italic text-[14px] sm:text-[15px] font-black tracking-[0.12em] text-white uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  FORMACIÓN DEPORTIVA
                </span>
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
              className="font-display-italic uppercase leading-[0.94] tracking-tight mb-4 select-none"
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
                className="block whitespace-normal sm:whitespace-nowrap text-[30px] sm:text-[44px] xl:text-[50px] text-silver-metallic font-black"
              >
                UN PROCESO
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
                className="block whitespace-normal sm:whitespace-nowrap text-[30px] sm:text-[44px] xl:text-[50px] text-silver-metallic font-black"
              >
                INTEGRAL Y
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
                className="block whitespace-nowrap text-[38px] sm:text-[48px] xl:text-[56px] text-gold-metallic font-black mt-0.5"
              >
                PROFESIONAL
              </motion.span>
            </motion.h1>

            {/* 3. Párrafo Descriptivo + línea acento roja */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[440px] text-[15px] sm:text-[16px] font-medium leading-[1.35] text-gray-200"
            >
              Desarrolla tus habilidades, fortalece tu disciplina y alcanza tu
              máximo potencial.
            </motion.p>

            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 block h-1 w-14 origin-left rounded-full bg-gradient-to-r from-[#FF2A32] to-[#9E060B] shadow-[0_0_10px_rgba(229,28,35,0.75)]"
            />
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
                alt="Formación Deportiva Integral en TOTAL KOMBAT"
                className="w-full max-w-[560px] lg:max-w-[610px] h-auto object-contain object-bottom select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] block align-bottom transition-all duration-500 hover:drop-shadow-[0_20px_45px_rgba(229,28,35,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
