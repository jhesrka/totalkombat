"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Target } from "lucide-react";

export default function DescubreSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll bidireccional suave conectado a esta sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax bidireccional suave: la imagen se mueve ligeramente a contrapaso
  const imgY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);

  return (
    <section
      ref={sectionRef}
      className="bg-light-section relative py-8 sm:py-9 border-b border-gray-300 overflow-hidden"
    >
      {/* Sutil resplandor ambiental dorado de fondo */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(229,184,66,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Columna Izquierda: Textos y Pilares */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Título de Sección con barra roja animada */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="slash-red h-11 w-4 origin-bottom"
              />
              <h2 className="font-display-italic leading-[0.98]">
                <span className="block text-[28px] sm:text-[33px] text-[#111216]">
                  Descubre
                </span>
                <span className="block text-[32px] sm:text-[38px] text-[#C81018] uppercase tracking-tight">
                  TOTAL KOMBAT
                </span>
              </h2>
            </div>

            <p className="mb-7 text-[14.5px] sm:text-[15.5px] leading-relaxed text-gray-800 font-medium">
              Más que un club, somos una comunidad deportiva comprometida con
              la formación integral de deportistas, la disciplina, el respeto y
              la superación personal.
            </p>

            {/* 3 Pilares con Micro-interacciones Hover Premium */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.2 },
                },
              }}
              className="grid grid-cols-3 w-full divide-x divide-[#D49B27]/50 pt-1"
            >
              {/* Pilar 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="pillar-card flex flex-col items-center text-center cursor-pointer select-none"
              >
                <div className="pillar-icon mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B842]/10 transition-all duration-300">
                  <Award className="h-7 w-7 text-[#D4951A] stroke-[2.2]" />
                </div>
                <span className="text-[12.5px] sm:text-[13.5px] font-extrabold leading-tight text-[#111216]">
                  Formación
                  <br />
                  Deportiva
                </span>
              </motion.div>

              {/* Pilar 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="pillar-card flex flex-col items-center text-center cursor-pointer select-none"
              >
                <div className="pillar-icon mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B842]/10 transition-all duration-300">
                  <Users className="h-7 w-7 text-[#D4951A] stroke-[2.2]" />
                </div>
                <span className="text-[12.5px] sm:text-[13.5px] font-extrabold leading-tight text-[#111216]">
                  Valores y
                  <br />
                  Disciplina
                </span>
              </motion.div>

              {/* Pilar 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="pillar-card flex flex-col items-center text-center cursor-pointer select-none"
              >
                <div className="pillar-icon mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B842]/10 transition-all duration-300">
                  <Target className="h-7 w-7 text-[#D4951A] stroke-[2.2]" />
                </div>
                <span className="text-[12.5px] sm:text-[13.5px] font-extrabold leading-tight text-[#111216]">
                  Proyección
                  <br />
                  Competitiva
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Imagen Enmarcada con Scroll Parallax y Hover Premium */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center lg:justify-end will-change-transform"
          >
            <div className="group relative w-full max-w-[650px] overflow-hidden rounded-2xl transition-all duration-500 hover:drop-shadow-[0_20px_40px_rgba(212,149,26,0.35)]">
              {/* Imagen del Dojang */}
              <img
                src="/images/gym-dojang-framed.png"
                alt="Instalaciones y tatami profesional de TOTAL KOMBAT"
                className="w-full h-auto object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Efecto Glass Sheen dinámico al hacer Hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

