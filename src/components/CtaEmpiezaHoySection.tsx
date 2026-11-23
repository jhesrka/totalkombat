"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import { useInscripcionModal } from "@/components/InscripcionModalProvider";

interface CtaEmpiezaHoySectionProps {
  title?: React.ReactNode;
  subtitle?: string | null;
}

export default function CtaEmpiezaHoySection({
  title,
  subtitle = "Forma parte de nuestra comunidad deportiva y descubre tu máximo potencial.",
}: CtaEmpiezaHoySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { openInscripcionModal } = useInscripcionModal();

  // Scroll bidireccional conectado al viewport de la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax suave para el fondo y contra-parallax 3D para la deportista
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const athleteY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  return (
    <section
      ref={sectionRef}
      className="group/cta relative z-20 bg-[#09090D] overflow-visible"
    >
      {/* Fondo contenido con parallax bidireccional para no desbordar */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/fondovive.webp')",
          }}
          className="absolute -top-[10%] -bottom-[10%] -left-[3%] -right-[3%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 py-6 lg:py-5">
          {/* Athlete Cutout (3 cols) - Entrada cinemática + contra-parallax + resplandor Hero en hover */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-3 relative self-stretch min-h-[125px] will-change-transform"
          >
            <motion.div
              style={{ y: athleteY }}
              className="group/athlete absolute bottom-[-20px] left-0 will-change-transform"
            >
              {/* Aura roja suave trasera que se intensifica al hacer hover */}
              <div className="pointer-events-none absolute inset-x-2 bottom-2 top-6 rounded-full bg-[radial-gradient(circle,rgba(229,28,35,0.45)_0%,rgba(245,199,78,0.18)_45%,transparent_75%)] opacity-0 blur-xl transition-opacity duration-500 group-hover/athlete:opacity-100" />

              <img
                src="/imagenes/ninainscripcion.webp?v=2"
                alt="Deportista TOTAL KOMBAT"
                className="relative z-10 h-[192px] xl:h-[202px] w-auto object-contain object-bottom select-none origin-bottom drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out group-hover/athlete:scale-[1.03] group-hover/athlete:drop-shadow-[0_12px_35px_rgba(229,28,35,0.65)]"
              />
            </motion.div>
          </motion.div>

          {/* Text (5 cols) - Entrada suave sincronizada */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:border-r lg:border-[#E5B842]/40 lg:pr-6 py-2 will-change-transform"
          >
            <h2 className="font-display-italic text-[32px] sm:text-[42px] leading-[1.02] mb-2">
              {title ?? (
                <>
                  <span className="text-white">¡Empieza </span>
                  <span className="text-gold-metallic">hoy!</span>
                </>
              )}
            </h2>
            {subtitle ? (
              <p className="text-[14.5px] sm:text-[15.5px] text-gray-200 font-medium max-w-[420px]">
                {subtitle}
              </p>
            ) : (
              <div className="mt-2 h-[3px] w-24 rounded-full bg-[#E5B842]" />
            )}
          </motion.div>

          {/* WhatsApp CTA Button (4 cols) - Entrada + Hover Premium con destello shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center justify-center lg:justify-end will-change-transform"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 360, damping: 22 }}
            >
              <button
                type="button"
                onClick={() => openInscripcionModal()}
                className="group relative overflow-hidden btn-kombat-red inline-flex items-center gap-3.5 rounded-full px-7 py-3.5 text-white shadow-red-glow border border-[#FFD54F]/40 transition-all duration-300 hover:border-[#FFE58F] hover:shadow-[0_0_28px_rgba(229,28,35,0.85),0_0_14px_rgba(245,199,78,0.4)] cursor-pointer"
              >
                {/* Destello diagonal shimmer en hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[220%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[20deg]" />

                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 border border-white/40 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <WhatsAppIcon className="h-6 w-6 text-white" />
                </span>
                <span className="relative z-10 text-left font-display-italic text-[17px] sm:text-[19px] leading-[1.05] uppercase tracking-wide">
                  SOLICITA TU
                  <br />
                  INSCRIPCIÓN
                </span>
                <ChevronRight className="relative z-10 h-6 w-6 stroke-[3] ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
