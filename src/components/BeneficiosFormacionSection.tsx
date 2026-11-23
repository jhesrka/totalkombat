"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const BENEFICIOS = [
  "Mejora de la condición física y coordinación.",
  "Desarrollo de la autoconfianza.",
  "Formación en valores y disciplina.",
  "Preparación para competencias.",
  "Acompañamiento profesional y seguro.",
];

function FormacionLaurelBadge() {
  return (
    <div className="relative flex flex-col items-center justify-center w-[210px] sm:w-[225px] select-none">
      {/* Laurel + Kicking Silhouette + Stars SVG */}
      <svg
        viewBox="0 0 220 185"
        className="w-full h-auto drop-shadow-[0_6px_18px_rgba(245,199,78,0.28)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="laurel-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF0A8" />
            <stop offset="45%" stopColor="#E5B842" />
            <stop offset="100%" stopColor="#A67412" />
          </linearGradient>
        </defs>

        {/* Top Taekwondo kicking silhouette */}
        <g transform="translate(82, 4)" fill="url(#laurel-gold)">
          <circle cx="14" cy="14" r="5" />
          <path d="M18 20 L31 24 L56 6 L61 11 L35 33 L29 49 L21 49 L25 32 L12 31 L5 41 L0 37 L10 23 Z" />
          <path d="M22 33 L18 54 L25 54 L29 36 Z" />
        </g>

        {/* Left Laurel Branch */}
        <g fill="url(#laurel-gold)">
          <path d="M44 156 C22 132, 16 96, 28 54 C30 50, 34 52, 32 56 C22 94, 28 128, 48 152 Z" />
          {[
            [24, 62, -35],
            [19, 76, -30],
            [17, 91, -20],
            [18, 106, -10],
            [22, 121, 5],
            [28, 134, 20],
            [37, 146, 35],
          ].map(([cx, cy, rot], idx) => (
            <ellipse
              key={`l-out-${idx}`}
              cx={cx}
              cy={cy}
              rx="8"
              ry="3.6"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
          {[
            [34, 68, 25],
            [30, 83, 30],
            [29, 98, 35],
            [31, 113, 40],
            [35, 127, 50],
            [42, 139, 60],
          ].map(([cx, cy, rot], idx) => (
            <ellipse
              key={`l-in-${idx}`}
              cx={cx}
              cy={cy}
              rx="7.5"
              ry="3.4"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
        </g>

        {/* Right Laurel Branch */}
        <g fill="url(#laurel-gold)">
          <path d="M176 156 C198 132, 204 96, 192 54 C190 50, 186 52, 188 56 C198 94, 192 128, 172 152 Z" />
          {[
            [196, 62, 35],
            [201, 76, 30],
            [203, 91, 20],
            [202, 106, 10],
            [198, 121, -5],
            [192, 134, -20],
            [183, 146, -35],
          ].map(([cx, cy, rot], idx) => (
            <ellipse
              key={`r-out-${idx}`}
              cx={cx}
              cy={cy}
              rx="8"
              ry="3.6"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
          {[
            [186, 68, -25],
            [190, 83, -30],
            [191, 98, -35],
            [189, 113, -40],
            [185, 127, -50],
            [178, 139, -60],
          ].map(([cx, cy, rot], idx) => (
            <ellipse
              key={`r-in-${idx}`}
              cx={cx}
              cy={cy}
              rx="7.5"
              ry="3.4"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
        </g>

        {/* Bottom 3 Stars */}
        {[
          [84, 158, 0.72],
          [110, 162, 0.92],
          [136, 158, 0.72],
        ].map(([x, y, s], idx) => (
          <polygon
            key={`star-${idx}`}
            points="0,-10 2.9,-3.2 10,-2.4 4.8,2.4 6.2,9.4 0,5.8 -6.2,9.4 -4.8,2.4 -10,-2.4 -2.9,-3.2"
            transform={`translate(${x}, ${y}) scale(${s})`}
            fill="url(#laurel-gold)"
          />
        ))}
      </svg>

      {/* Center White Text */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-5 text-center">
        <span className="font-sans text-[14.5px] sm:text-[15.5px] font-extrabold tracking-wide text-white leading-[1.15] uppercase">
          FORMACIÓN
        </span>
        <span className="font-sans text-[14.5px] sm:text-[15.5px] font-extrabold tracking-wide text-white leading-[1.15] uppercase">
          INTEGRAL
        </span>
        <span className="font-sans text-[14.5px] sm:text-[15.5px] font-extrabold tracking-wide text-white leading-[1.15] uppercase">
          DEPORTIVA
        </span>
      </div>
    </div>
  );
}

export default function BeneficiosFormacionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <section
      ref={sectionRef}
      className="group/beneficios relative border-b-2 border-[#E5B842]/50 overflow-hidden bg-[#09090D]"
    >
      {/* Parallax Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/formacion.webp')",
          }}
          className="absolute -top-[8%] -bottom-[8%] -left-[2%] -right-[2%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
      </div>

      {/* Left Photo aligned bottom, no filter or mask, with contra-parallax */}
      <motion.div
        style={{ y: photoY }}
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative lg:absolute lg:inset-y-0 lg:left-0 lg:w-[44%] xl:w-[42%] flex items-end justify-start pt-3 lg:pt-4 overflow-hidden will-change-transform"
      >
        <img
          src="/imagenes/ninoentrenador.webp"
          alt="Entrenamiento guiado con paos en TOTAL KOMBAT"
          className="h-[220px] sm:h-[260px] lg:h-full w-full object-contain object-left-bottom select-none transition-transform duration-500 ease-out group-hover/beneficios:scale-[1.02]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* Spacer for Left Photo on Desktop */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Center Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="slash-red h-7 w-3 shrink-0" />
              <h2 className="font-display-italic text-[25px] sm:text-[31px] leading-none">
                <span className="text-gold-metallic">Beneficios </span>
                <span className="text-white">de la Formación</span>
              </h2>
            </div>

            <ul className="space-y-2.5 text-[14px] sm:text-[15.5px] font-medium text-gray-100">
              {BENEFICIOS.map((beneficio, idx) => (
                <motion.li
                  key={beneficio}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group/item flex items-center gap-2.5 transition-transform duration-200 ease-out hover:translate-x-1.5"
                >
                  <Check className="h-4 w-4 text-[#F5C74E] stroke-[3] shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="transition-colors duration-200 group-hover/item:text-[#FCE38A]">
                    {beneficio}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
