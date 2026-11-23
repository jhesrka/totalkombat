"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IdentidadInstitucionalSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll bidireccional conectado al viewport de la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax multicapa bidireccional a 60 FPS
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const combatY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const logoY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      ref={sectionRef}
      className="relative py-4 lg:py-5 bg-[#09090D] overflow-hidden border-b-2 border-[#E5B842]/50 select-none"
    >
      {/* Fondo fondonosotros.webp con Parallax Bidireccional */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/fondonosotros.webp')",
          }}
          className="absolute -top-[10%] -bottom-[10%] -left-[3%] -right-[3%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-6">
          {/* Left Copy (5 cols) - Entrada escalonada */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center lg:justify-start gap-2.5 mb-2"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="slash-red-sm origin-bottom"
              />
              <h2 className="font-display-italic text-[23px] sm:text-[28px] leading-none">
                <span className="text-white">Identidad </span>
                <span className="text-gold-metallic">Institucional</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:border-l-2 lg:border-[#E5B842] lg:pl-3.5"
            >
              <p className="text-[13px] sm:text-[14px] leading-snug text-gray-200">
                Somos un club deportivo especializado en Taekwondo y Sambo,
                enfocado en la formación, la disciplina y el desarrollo
                competitivo, con un compromiso firme con nuestros deportistas y
                la comunidad.
              </p>
            </motion.div>
          </div>

          {/* Center Silhouettes combat.webp (4 cols) - Contra-parallax + Entrada + Hover Resplandor */}
          <motion.div
            style={{ y: combatY }}
            className="lg:col-span-4 flex items-center justify-center will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group/combat relative cursor-pointer will-change-transform"
            >
              {/* Aura roja/azul sutil en hover */}
              <div className="pointer-events-none absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(229,28,35,0.45)_0%,rgba(59,130,246,0.22)_50%,transparent_75%)] opacity-0 blur-xl transition-opacity duration-500 group-hover/combat:opacity-100" />

              <img
                src="/imagenes/combat.webp"
                alt="Siluetas de Taekwondo y Sambo"
                className="relative z-10 h-[145px] sm:h-[160px] lg:h-[175px] w-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.75)] transition-all duration-500 group-hover/combat:drop-shadow-[0_12px_30px_rgba(229,28,35,0.65)] select-none"
              />
            </motion.div>
          </motion.div>

          {/* Right Official Logo (3 cols) - Parallax + Entrada + Hover Dorado */}
          <motion.div
            style={{ y: logoY }}
            className="lg:col-span-3 flex items-center justify-center lg:justify-end will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.06 }}
              className="cursor-pointer will-change-transform"
            >
              <img
                src="/imagenes/logo.webp"
                alt="Logo Oficial TOTAL KOMBAT"
                className="w-full max-w-[220px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(229,184,66,0.28)] transition-all duration-300 hover:drop-shadow-[0_6px_22px_rgba(245,199,78,0.6)] select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
