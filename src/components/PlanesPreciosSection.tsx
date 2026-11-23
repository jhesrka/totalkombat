"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CornerRibbons } from "@/components/Icons";
import { useInscripcionModal } from "@/components/InscripcionModalProvider";
import { ParallaxLayer } from "@/components/motion/MotionPrimitives";

type MedalVariant = "silver" | "gold" | "red";

function PlanMedal({ variant }: { variant: MedalVariant }) {
  const palette = {
    silver: {
      ribbonOuter: "#8C929C",
      ribbonInner: "#D1D5DB",
      rimLight: "#F9FAFB",
      rimDark: "#6B7280",
      faceTop: "#E5E7EB",
      faceBottom: "#9CA3AF",
      starFill: "#FFFFFF",
      starStroke: "#6B7280",
    },
    gold: {
      ribbonOuter: "#B87A14",
      ribbonInner: "#F5C74E",
      rimLight: "#FFF3B0",
      rimDark: "#9A6308",
      faceTop: "#FFE17D",
      faceBottom: "#C98916",
      starFill: "#FFFDF2",
      starStroke: "#9A6308",
    },
    red: {
      ribbonOuter: "#990B11",
      ribbonInner: "#F5C74E",
      rimLight: "#FFE17D",
      rimDark: "#9A6308",
      faceTop: "#EF232B",
      faceBottom: "#8A050A",
      starFill: "#FFE17D",
      starStroke: "#B87A14",
    },
  }[variant];

  const gradId = `medal-face-${variant}`;
  const rimId = `medal-rim-${variant}`;

  return (
    <svg
      viewBox="0 0 48 56"
      className="h-[46px] w-[40px] shrink-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.75)] select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={rimId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.rimLight} />
          <stop offset="100%" stopColor={palette.rimDark} />
        </linearGradient>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.faceTop} />
          <stop offset="100%" stopColor={palette.faceBottom} />
        </linearGradient>
      </defs>

      {/* Ribbons */}
      <polygon
        points="11,30 22,30 16,53 11,48 6,52"
        fill={palette.ribbonOuter}
        stroke={palette.rimLight}
        strokeWidth="0.7"
      />
      <polygon
        points="26,30 37,30 42,52 37,48 32,53"
        fill={palette.ribbonInner}
        stroke={palette.rimLight}
        strokeWidth="0.7"
      />

      {/* Outer Rim */}
      <circle
        cx="24"
        cy="21"
        r="19"
        fill={`url(#${rimId})`}
        stroke={palette.rimDark}
        strokeWidth="1"
      />
      {/* Inner Face */}
      <circle
        cx="24"
        cy="21"
        r="15.5"
        fill={`url(#${gradId})`}
        stroke={palette.rimLight}
        strokeWidth="0.9"
      />
      {/* Star */}
      <polygon
        points="24,10.5 27.1,16.9 34.2,17.9 29,22.9 30.3,29.9 24,26.6 17.7,29.9 19,22.9 13.8,17.9 20.9,16.9"
        fill={palette.starFill}
        stroke={palette.starStroke}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PLANES: {
  name: string;
  variant: MedalVariant;
  features: string[];
  price: string;
}[] = [
  {
    name: "Plan Básico",
    variant: "silver",
    features: [
      "Entrenamiento grupal",
      "Formación por niveles",
      "Seguimiento del progreso",
    ],
    price: "$XX.XX",
  },
  {
    name: "Plan Intermedio",
    variant: "gold",
    features: [
      "Entrenamiento grupal",
      "Preparación técnica",
      "Evaluaciones periódicas",
      "Acceso a eventos internos",
    ],
    price: "$XX.XX",
  },
  {
    name: "Plan Competitivo",
    variant: "red",
    features: [
      "Entrenamiento especializado",
      "Preparación para competencias",
      "Acompañamiento técnico",
      "Participación en torneos",
    ],
    price: "$XX.XX",
  },
];

export default function PlanesPreciosSection() {
  const { openInscripcionModal } = useInscripcionModal();
  return (
    <section
      id="planes"
      className="bg-light-section relative py-10 lg:py-11 overflow-hidden border-b border-gray-300"
    >
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[315px_1fr] items-center gap-7 lg:gap-8">
          {/* Left Heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-2.5">
              <span className="slash-red h-7 w-3 shrink-0" />
              <h2 className="font-display-italic text-[25px] sm:text-[31px] leading-none sm:whitespace-nowrap tracking-tight">
                <span className="text-[#111216]">Planes y </span>
                <span className="text-[#C81018]">Precios</span>
              </h2>
            </div>
            <p className="text-[13.5px] sm:text-[14px] leading-[1.45] text-[#1D1F26] font-medium max-w-[305px]">
              Elige el plan que se adapte a tus objetivos y forma parte de TOTAL
              KOMBAT.
            </p>
          </motion.div>

          {/* Right 3 Pricing Cards */}
          <ParallaxLayer offset={[10, -10]}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {PLANES.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative rounded-[14px] -skew-x-[4deg] bg-gradient-to-b from-[#17191F] via-[#0F1015] to-[#08090C] border border-[#D4A438]/75 shadow-[0_12px_28px_rgba(0,0,0,0.42),0_0_16px_rgba(229,184,66,0.2)] transition-all duration-300 hover:border-[#F5C74E] hover:shadow-[0_16px_34px_rgba(0,0,0,0.55),0_0_24px_rgba(245,199,78,0.35)] px-4 pt-3.5 pb-4 flex flex-col justify-between min-h-[246px]"
              >
                {/* Subtle corner gold highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-[radial-gradient(circle_at_92%_6%,rgba(245,199,78,0.22),transparent_42%),radial-gradient(circle_at_12%_96%,rgba(245,199,78,0.12),transparent_45%)]" />

                <div className="relative z-10 skew-x-[4deg] flex flex-col h-full justify-between">
                  <div>
                    {/* Framed Header with Medal */}
                    <div className="relative mb-3.5 rounded-[9px] border border-[#D4A438]/55 bg-gradient-to-r from-[#1D1F27]/90 via-[#14151B]/95 to-[#1D1F27]/90 px-3 py-2 flex items-center gap-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {/* Bottom gold glow line under header */}
                      <span className="pointer-events-none absolute inset-x-4 -bottom-[1px] h-[2px] bg-gradient-to-r from-transparent via-[#F5C74E] to-transparent opacity-85 blur-[0.5px]" />

                      <div className="-mt-3.5 -mb-2 -ml-1">
                        <PlanMedal variant={plan.variant} />
                      </div>
                      <h3 className="font-display-italic text-[17.5px] sm:text-[18.5px] text-white tracking-wide leading-none">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Checklist */}
                    <ul className="space-y-2 text-[12.5px] sm:text-[13px] text-gray-100 mb-4 px-0.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#F3C652] stroke-[3] shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price Button */}
                  <button
                    type="button"
                    onClick={() => openInscripcionModal({ plan: plan.name })}
                    className="relative overflow-hidden flex w-full items-baseline justify-center gap-1.5 rounded-[10px] py-2 px-3 bg-gradient-to-b from-[#E52229] via-[#C61017] to-[#8C080D] border border-[#F5C74E]/45 shadow-[0_4px_14px_rgba(200,16,24,0.45),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all duration-300 group-hover:border-[#F5C74E]/80 hover:brightness-110 cursor-pointer"
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-[220%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-[20deg]" />
                    <span className="relative z-10 font-display-italic text-[21px] sm:text-[23px] leading-none text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="relative z-10 text-[12.5px] font-medium text-white/95">
                      / mensual
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
            </div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
}
