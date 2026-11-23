"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CornerRibbons } from "@/components/Icons";

function IconLaurel() {
  return (
    <svg
      viewBox="0 0 44 40"
      className="h-9 w-9 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="res-gold-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF6C4" />
          <stop offset="48%" stopColor="#F5C74E" />
          <stop offset="100%" stopColor="#A6700C" />
        </linearGradient>
      </defs>
      {/* Left & Right Stems */}
      <path
        d="M17 34 C9 29, 6 19, 11 8 C12 7, 13 8, 12.5 9.5 C8.5 19, 11 27.5, 18.5 32.5 Z"
        fill="url(#res-gold-1)"
      />
      <path
        d="M27 34 C35 29, 38 19, 33 8 C32 7, 31 8, 31.5 9.5 C35.5 19, 33 27.5, 25.5 32.5 Z"
        fill="url(#res-gold-1)"
      />
      {/* Left Leaves */}
      {[
        [9, 11, -35],
        [7.5, 16.5, -25],
        [8, 22, -10],
        [10.5, 27, 12],
        [14.5, 31, 32],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={`ll-${i}`}
          cx={cx}
          cy={cy}
          rx="4.2"
          ry="2"
          transform={`rotate(${r} ${cx} ${cy})`}
          fill="url(#res-gold-1)"
        />
      ))}
      {[
        [13.5, 12.5, 30],
        [12, 18, 38],
        [12.5, 23.5, 45],
        [15, 28, 55],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={`li-${i}`}
          cx={cx}
          cy={cy}
          rx="3.8"
          ry="1.8"
          transform={`rotate(${r} ${cx} ${cy})`}
          fill="url(#res-gold-1)"
        />
      ))}
      {/* Right Leaves */}
      {[
        [35, 11, 35],
        [36.5, 16.5, 25],
        [36, 22, 10],
        [33.5, 27, -12],
        [29.5, 31, -32],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={`rl-${i}`}
          cx={cx}
          cy={cy}
          rx="4.2"
          ry="2"
          transform={`rotate(${r} ${cx} ${cy})`}
          fill="url(#res-gold-1)"
        />
      ))}
      {[
        [30.5, 12.5, -30],
        [32, 18, -38],
        [31.5, 23.5, -45],
        [29, 28, -55],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={`ri-${i}`}
          cx={cx}
          cy={cy}
          rx="3.8"
          ry="1.8"
          transform={`rotate(${r} ${cx} ${cy})`}
          fill="url(#res-gold-1)"
        />
      ))}
      {/* Top Star */}
      <polygon
        points="22,4 23.8,8.3 28.4,8.7 24.9,11.7 26,16.2 22,13.8 18,16.2 19.1,11.7 15.6,8.7 20.2,8.3"
        fill="url(#res-gold-1)"
      />
    </svg>
  );
}

function IconMedalLaurel() {
  return (
    <svg
      viewBox="0 0 44 42"
      className="h-9 w-9 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="res-gold-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF6C4" />
          <stop offset="48%" stopColor="#F5C74E" />
          <stop offset="100%" stopColor="#A6700C" />
        </linearGradient>
      </defs>
      {/* Top Shield / Crest */}
      <path
        d="M22 4 L31 8.5 V17.5 C31 23.5, 27 27.5, 22 30 C17 27.5, 13 23.5, 13 17.5 V8.5 Z"
        fill="url(#res-gold-2)"
        stroke="#FFF6C4"
        strokeOpacity="0.45"
        strokeWidth="0.9"
      />
      <polygon
        points="22,10 23.9,14.4 28.6,14.8 25,17.9 26.1,22.5 22,20 17.9,22.5 19,17.9 15.4,14.8 20.1,14.4"
        fill="#7D0408"
      />
      {/* Bottom Laurel Wreath */}
      <path
        d="M17 36 C10 32.5, 7 25, 9.5 17 C10.5 23, 12.5 29, 19.5 34 Z M27 36 C34 32.5, 37 25, 34.5 17 C33.5 23, 31.5 29, 24.5 34 Z"
        fill="url(#res-gold-2)"
      />
      <ellipse cx="8.5" cy="22" rx="3.2" ry="1.6" transform="rotate(-25 8.5 22)" fill="url(#res-gold-2)" />
      <ellipse cx="10.5" cy="28" rx="3.2" ry="1.6" transform="rotate(10 10.5 28)" fill="url(#res-gold-2)" />
      <ellipse cx="14.5" cy="33" rx="3.2" ry="1.6" transform="rotate(32 14.5 33)" fill="url(#res-gold-2)" />
      <ellipse cx="35.5" cy="22" rx="3.2" ry="1.6" transform="rotate(25 35.5 22)" fill="url(#res-gold-2)" />
      <ellipse cx="33.5" cy="28" rx="3.2" ry="1.6" transform="rotate(-10 33.5 28)" fill="url(#res-gold-2)" />
      <ellipse cx="29.5" cy="33" rx="3.2" ry="1.6" transform="rotate(-32 29.5 33)" fill="url(#res-gold-2)" />
    </svg>
  );
}

function IconAthleteBadge() {
  return (
    <svg
      viewBox="0 0 44 42"
      className="h-9 w-9 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="res-gold-3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF6C4" />
          <stop offset="48%" stopColor="#F5C74E" />
          <stop offset="100%" stopColor="#A6700C" />
        </linearGradient>
      </defs>
      {/* Head */}
      <circle cx="22" cy="9.5" r="4.5" fill="url(#res-gold-3)" />
      {/* Dobok Shoulders & Torso */}
      <path
        d="M10 32 L12.5 19 C13 16, 16.5 15, 22 15 C27.5 15, 31 16, 31.5 19 L34 32 Z"
        fill="url(#res-gold-3)"
      />
      {/* V-neck Collar */}
      <path
        d="M17.5 15 L22 23.5 L26.5 15"
        fill="none"
        stroke="#7D0408"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Black/Red Belt accent */}
      <rect x="13" y="25.5" width="18" height="2.4" rx="1" fill="#7D0408" />
      {/* Subtle Star Accent */}
      <polygon
        points="22,33 23,35.4 25.5,35.7 23.6,37.4 24.1,39.8 22,38.5 19.9,39.8 20.4,37.4 18.5,35.7 21,35.4"
        fill="url(#res-gold-3)"
      />
    </svg>
  );
}

const RESULTADOS = [
  {
    src: "/imagenes/participacion.webp",
    alt: "Participación en Torneos",
    line1: "Participación",
    line2: "en Torneos",
    icon: <IconLaurel />,
    stageClass: "pt-1.5",
    imgClass: "h-[132px] w-auto object-contain",
  },
  {
    src: "/imagenes/logros.webp",
    alt: "Logros deportivos",
    line1: "Logros",
    line2: "deportivos",
    icon: <IconMedalLaurel />,
    stageClass: "pt-0",
    imgClass: "h-[136px] w-auto object-contain object-top",
  },
  {
    src: "/imagenes/niñainscripcion.webp",
    alt: "Proyección Competitiva",
    line1: "Proyección",
    line2: "Competitiva",
    icon: <IconAthleteBadge />,
    stageClass: "pt-2",
    imgClass: "h-[128px] w-full object-contain object-bottom",
  },
];

export default function ResultadosProyeccionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <section
      ref={sectionRef}
      className="bg-light-section relative py-8 lg:py-10 overflow-hidden border-b border-gray-300"
    >
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[295px_1fr] items-center gap-7 lg:gap-8">
          {/* Left Copy */}
          <motion.div
            style={{ y: copyY }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left will-change-transform"
          >
            <div className="flex items-start justify-center lg:justify-start gap-2.5 mb-3">
              <span className="slash-red mt-1 h-8 w-3 shrink-0" />
              <h2 className="font-display-italic leading-[0.94] tracking-tight">
                <span className="block text-[28px] sm:text-[34px] text-[#111216]">
                  Resultados
                </span>
                <span className="block text-[28px] sm:text-[34px] text-[#C81018]">
                  y Proyección
                </span>
              </h2>
            </div>
            <p className="text-[13.5px] sm:text-[14px] leading-[1.4] text-[#1D1F26] font-medium max-w-[265px]">
              Impulsamos el talento deportivo de nuestros alumnos hacia
              competencias locales, provinciales y nacionales.
            </p>
          </motion.div>

          {/* Right 3 Skewed Parallelogram Cards */}
          <motion.div
            style={{ y: cardsY }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 lg:gap-4 px-1 will-change-transform"
          >
            {RESULTADOS.map((card, idx) => (
              <motion.div
                key={card.alt}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative -skew-x-[15deg] overflow-hidden rounded-[14px] border-[1.5px] border-[#E5B842]/80 bg-[#0A0B0E] shadow-[0_10px_24px_rgba(0,0,0,0.22),0_0_12px_rgba(229,184,66,0.18)] transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#FFE17D] group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.34),0_0_20px_rgba(245,199,78,0.34)] flex flex-col">
                  {/* Top Dark Image Stage */}
                  <div
                    className={`relative h-[138px] flex items-end justify-center overflow-hidden px-3 ${card.stageClass}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,199,78,0.32),transparent_58%),radial-gradient(circle_at_50%_55%,rgba(229,184,66,0.16),transparent_72%)]" />
                    <img
                      src={card.src}
                      alt={card.alt}
                      className={`relative z-10 skew-x-[15deg] select-none transition-transform duration-300 ease-out group-hover:scale-105 ${card.imgClass}`}
                    />
                  </div>

                  {/* Bottom Red Ribbon Banner */}
                  <div className="relative flex h-[56px] items-center justify-center bg-gradient-to-b from-[#DC151D] via-[#B80B12] to-[#7D0408] border-t border-[#F5C74E]/35 px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                    <div className="skew-x-[15deg] flex items-center gap-2.5">
                      {card.icon}
                      <div className="text-left font-bold text-[14px] sm:text-[15px] leading-[1.12] text-white tracking-tight">
                        <span className="block">{card.line1}</span>
                        <span className="block">{card.line2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
