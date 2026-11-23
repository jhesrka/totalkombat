"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InscripcionFormCard from "@/components/InscripcionFormCard";
import { Reveal } from "@/components/motion/MotionPrimitives";
import { EASE_CINEMATIC, SPRING_HOVER, VIEWPORT_ONCE } from "@/lib/motion";

const GARANTIAS = [
  {
    icon: (
      <svg viewBox="0 0 36 32" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="ins-g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE17D" />
            <stop offset="100%" stopColor="#B87A14" />
          </linearGradient>
        </defs>
        <polygon points="18,4 34,12 18,20 2,12" fill="url(#ins-g1)" />
        <path
          d="M8 16 V24 C8 26.5, 12.5 29, 18 29 C23.5 29, 28 26.5, 28 24 V16 L18 21 Z"
          fill="url(#ins-g1)"
        />
        <line
          x1="31"
          y1="13"
          x2="31"
          y2="24"
          stroke="#FFE17D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Formación\nProfesional",
  },
  {
    icon: (
      <svg viewBox="0 0 36 34" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="ins-g2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE17D" />
            <stop offset="100%" stopColor="#B87A14" />
          </linearGradient>
        </defs>
        <path
          d="M10 5 H26 V14 C26 19, 22.5 22.5, 18 22.5 C13.5 22.5, 10 19, 10 14 Z"
          fill="url(#ins-g2)"
        />
        <path
          d="M10 7 H6 C6 13, 8 15, 10 15 M26 7 H30 C30 13, 28 15, 26 15"
          fill="none"
          stroke="url(#ins-g2)"
          strokeWidth="2.4"
        />
        <rect x="16" y="22" width="4" height="5" fill="url(#ins-g2)" />
        <rect
          x="11"
          y="27"
          width="14"
          height="3.5"
          rx="1.5"
          fill="url(#ins-g2)"
        />
      </svg>
    ),
    label: "Entrenamiento\nSeguro",
  },
  {
    icon: (
      <svg viewBox="0 0 40 34" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="ins-g3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE17D" />
            <stop offset="100%" stopColor="#B87A14" />
          </linearGradient>
        </defs>
        <circle cx="11" cy="13" r="4" fill="url(#ins-g3)" />
        <path
          d="M4 28 C4 22.5, 7 20, 11 20 C13 20, 14.5 20.5, 15.5 21.5"
          fill="url(#ins-g3)"
        />
        <circle cx="29" cy="13" r="4" fill="url(#ins-g3)" />
        <path
          d="M36 28 C36 22.5, 33 20, 29 20 C27 20, 25.5 20.5, 24.5 21.5"
          fill="url(#ins-g3)"
        />
        <circle cx="20" cy="10.5" r="5" fill="url(#ins-g3)" />
        <path
          d="M11 30 C11 23, 14.5 19.5, 20 19.5 C25.5 19.5, 29 23, 29 30 Z"
          fill="url(#ins-g3)"
        />
      </svg>
    ),
    label: "Instructores\nCertificados",
  },
  {
    icon: (
      <svg viewBox="0 0 36 36" className="h-7 w-7" aria-hidden="true">
        <defs>
          <linearGradient id="ins-g4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE17D" />
            <stop offset="100%" stopColor="#B87A14" />
          </linearGradient>
        </defs>
        <path
          d="M18 4 L30 8.5 V17.5 C30 25, 24.8 30.5, 18 33 C11.2 30.5, 6 25, 6 17.5 V8.5 Z"
          fill="none"
          stroke="url(#ins-g4)"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path
          d="M13 18.5 L16.8 22.2 L24 14.8"
          fill="none"
          stroke="url(#ins-g4)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Ambiente\nDisciplinado",
  },
];

export default function FormularioInscripcionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const athletesY = useTransform(scrollYProgress, [0, 1], [14, -14]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 lg:py-12 border-b-2 border-[#E5B842]/50 bg-[#09090D] overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/fondodisiplina.webp')",
          }}
          className="absolute -top-[8%] -bottom-[8%] -left-[2%] -right-[2%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left & Center Column */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal direction="left" className="mb-5 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2">
                <span className="slash-red h-8 w-3.5" />
                <h2 className="font-display-italic text-[25px] sm:text-[32px] leading-none">
                  <span className="text-white">Formulario de </span>
                  <span className="text-gold-metallic">Inscripción</span>
                </h2>
              </div>
              <p className="text-[13.5px] sm:text-[14.5px] text-gray-200 max-w-[520px]">
                Déjanos tus datos y nos comunicaremos contigo para brindarte
                toda la información y confirmar tu cupo.
              </p>
            </Reveal>

            {/* 4 Skewed Badges + Combat Athletes */}
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4">
              <div className="sm:col-span-5 flex flex-col space-y-3">
                {GARANTIAS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: EASE_CINEMATIC,
                    }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="rounded-xl -skew-x-[15deg] border border-[#F5C74E]/80 bg-gradient-to-b from-[#17191F] to-[#0B0C10] shadow-[0_6px_18px_rgba(0,0,0,0.45),0_0_12px_rgba(245,199,78,0.2)] px-4 py-2.5 flex items-center gap-3 transition-[border-color,box-shadow] duration-300 group-hover:border-[#FFE58F] group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.6),0_0_18px_rgba(245,199,78,0.35)]">
                      <div className="skew-x-[15deg] flex items-center gap-3">
                        <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <span className="whitespace-pre-line text-[13px] sm:text-[13.5px] font-bold leading-tight text-white">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                style={{ y: athletesY }}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.65, delay: 0.12, ease: EASE_CINEMATIC }}
                className="sm:col-span-7 relative flex flex-col items-center justify-end mb-2 lg:-mb-12 pt-2 will-change-transform"
              >
                <div className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 h-[175px] w-[175px] sm:h-[195px] sm:w-[195px] rounded-full border-[3px] border-[#F5C74E]/80 shadow-[0_0_34px_rgba(245,199,78,0.75),inset_0_0_24px_rgba(245,199,78,0.35)]" />
                <img
                  src="/imagenes/disiplina1.webp"
                  alt="Taekwondo TOTAL KOMBAT"
                  className="relative z-10 w-full max-w-[320px] h-auto object-contain select-none -mb-16 sm:-mb-24 drop-shadow-[0_10px_22px_rgba(0,0,0,0.75)]"
                />
                <img
                  src="/imagenes/disiplina2.webp"
                  alt="Sambo TOTAL KOMBAT"
                  className="relative z-20 w-full max-w-[335px] h-auto object-contain select-none drop-shadow-[0_14px_26px_rgba(0,0,0,0.85)]"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <Reveal direction="right" delay={0.12} className="lg:col-span-5">
            <motion.div whileHover={{ y: -3 }} transition={SPRING_HOVER}>
              <InscripcionFormCard />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
