"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CornerRibbons } from "@/components/Icons";

function GoldIconDumbbell() {
  return (
    <svg viewBox="0 0 64 44" className="h-11 w-12 drop-shadow-[0_2px_4px_rgba(184,122,20,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id="pe-gold-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C74E" />
          <stop offset="55%" stopColor="#D99B1E" />
          <stop offset="100%" stopColor="#9C680B" />
        </linearGradient>
      </defs>
      <rect x="6" y="13" width="6" height="18" rx="2.5" fill="url(#pe-gold-1)" />
      <rect x="13" y="8" width="7" height="28" rx="3" fill="url(#pe-gold-1)" />
      <rect x="20" y="19" width="24" height="6" rx="2" fill="url(#pe-gold-1)" />
      <rect x="44" y="8" width="7" height="28" rx="3" fill="url(#pe-gold-1)" />
      <rect x="52" y="13" width="6" height="18" rx="2.5" fill="url(#pe-gold-1)" />
    </svg>
  );
}

function GoldIconRunner() {
  return (
    <svg viewBox="0 0 56 56" className="h-11 w-11 drop-shadow-[0_2px_4px_rgba(184,122,20,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id="pe-gold-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C74E" />
          <stop offset="55%" stopColor="#D99B1E" />
          <stop offset="100%" stopColor="#9C680B" />
        </linearGradient>
      </defs>
      <circle cx="33" cy="11" r="5" fill="url(#pe-gold-2)" />
      <path
        d="M17 22 L27 17 L35 20 L43 17 C45 16.5, 46.5 19, 44.5 20.5 L36 25 L31 32 L38 38 L35 49 C34.5 51, 31 50.5, 31.2 48.2 L33.2 40 L25.5 34 L21 41 L12 45 C10 45.8, 8.8 43, 10.8 41.8 L18.5 38 L24 27 L20 24 L15 26 C13 26.8, 12 24, 14 23 Z"
        fill="url(#pe-gold-2)"
      />
    </svg>
  );
}

function GoldIconBrain() {
  return (
    <svg viewBox="0 0 56 52" className="h-11 w-11 drop-shadow-[0_2px_4px_rgba(184,122,20,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id="pe-gold-3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C74E" />
          <stop offset="55%" stopColor="#D99B1E" />
          <stop offset="100%" stopColor="#9C680B" />
        </linearGradient>
      </defs>
      <path
        d="M26 9 C20 9, 15 13, 14 18 C10 19, 8 23, 9 27 C7 31, 9 36, 14 38 C15 42, 19 44, 24 43 L26 43 Z"
        fill="url(#pe-gold-3)"
      />
      <path
        d="M30 9 C36 9, 41 13, 42 18 C46 19, 48 23, 47 27 C49 31, 47 36, 42 38 C41 42, 37 44, 32 43 L30 43 Z"
        fill="url(#pe-gold-3)"
      />
      {/* Brain inner sulci */}
      <path
        d="M17 20 C20 20, 22 22, 21 25 M14 28 C18 28, 21 30, 20 33 M39 20 C36 20, 34 22, 35 25 M42 28 C38 28, 35 30, 36 33"
        stroke="#FFF8E1"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function GoldIconTeam() {
  return (
    <svg viewBox="0 0 64 52" className="h-11 w-12 drop-shadow-[0_2px_4px_rgba(184,122,20,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id="pe-gold-4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C74E" />
          <stop offset="55%" stopColor="#D99B1E" />
          <stop offset="100%" stopColor="#9C680B" />
        </linearGradient>
      </defs>
      {/* Left person */}
      <circle cx="16" cy="18" r="5" fill="none" stroke="url(#pe-gold-4)" strokeWidth="2.8" />
      <path d="M7 38 C7 31, 11 27, 16 27 C19 27, 21 28, 23 30" fill="none" stroke="url(#pe-gold-4)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Right person */}
      <circle cx="48" cy="18" r="5" fill="none" stroke="url(#pe-gold-4)" strokeWidth="2.8" />
      <path d="M57 38 C57 31, 53 27, 48 27 C45 27, 43 28, 41 30" fill="none" stroke="url(#pe-gold-4)" strokeWidth="2.8" strokeLinecap="round" />
      {/* Center person */}
      <circle cx="32" cy="15" r="6.5" fill="url(#pe-gold-4)" />
      <path d="M19 42 C19 33, 24.5 28, 32 28 C39.5 28, 45 33, 45 42 Z" fill="url(#pe-gold-4)" />
    </svg>
  );
}

function GoldIconShield() {
  return (
    <svg viewBox="0 0 52 54" className="h-11 w-11 drop-shadow-[0_2px_4px_rgba(184,122,20,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id="pe-gold-5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C74E" />
          <stop offset="55%" stopColor="#D99B1E" />
          <stop offset="100%" stopColor="#9C680B" />
        </linearGradient>
      </defs>
      <path
        d="M26 6 L43 12 V25 C43 36, 35.5 44.5, 26 48 C16.5 44.5, 9 36, 9 25 V12 Z"
        fill="none"
        stroke="url(#pe-gold-5)"
        strokeWidth="3.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 26.5 L24 31.5 L34 20.5"
        fill="none"
        stroke="url(#pe-gold-5)"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PILARES = [
  { icon: <GoldIconDumbbell />, title: "Técnica", subtitle: "Marcial" },
  { icon: <GoldIconRunner />, title: "Preparación", subtitle: "Física" },
  { icon: <GoldIconBrain />, title: "Control", subtitle: "Mental" },
  { icon: <GoldIconTeam />, title: "Trabajo", subtitle: "en Equipo" },
  { icon: <GoldIconShield />, title: "Disciplina", subtitle: "y Valores" },
];

export default function PlanEntrenamientoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      className="bg-light-section relative py-8 lg:py-9 overflow-hidden border-b border-gray-300"
    >
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[295px_1fr] items-center gap-6 lg:gap-7">
          {/* Left Copy */}
          <motion.div
            style={{ y: copyY }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left will-change-transform"
          >
            <div className="flex items-start justify-center lg:justify-start gap-2.5 mb-2.5">
              <span className="slash-red mt-0.5 h-8 w-3 shrink-0" />
              <h2 className="font-display-italic leading-[0.94] tracking-tight">
                <span className="block text-[27px] sm:text-[31px] text-[#111216]">
                  Plan de
                </span>
                <span className="block text-[27px] sm:text-[31px] text-[#C81018]">
                  Entrenamiento
                </span>
              </h2>
            </div>
            <p className="text-[13.5px] leading-[1.4] text-[#1D1F26] font-medium max-w-[265px]">
              Programas diseñados para el desarrollo técnico, físico y mental de
              cada deportista.
            </p>
          </motion.div>

          {/* Right 5 Skewed Light Cards */}
          <motion.div
            style={{ y: cardsY }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 lg:gap-4 px-1 will-change-transform"
          >
            {PILARES.map((pilar, idx) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative -skew-x-[17deg] rounded-[12px] border border-[#E5B842]/75 bg-gradient-to-b from-white via-[#FCF9F2] to-[#F6F1E4] px-3 py-3.5 shadow-[0_6px_18px_rgba(0,0,0,0.08),0_2px_8px_rgba(229,184,66,0.16)] transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#D4951A] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.13),0_0_16px_rgba(229,184,66,0.3)] flex flex-col items-center justify-center text-center min-h-[118px]">
                  <span className="pointer-events-none absolute inset-x-3 -bottom-[1px] h-[2px] bg-gradient-to-r from-transparent via-[#F5C74E] to-transparent opacity-80" />
                  <div className="skew-x-[17deg] flex flex-col items-center">
                    <div className="mb-1.5 transition-transform duration-300 ease-out group-hover:scale-105">
                      {pilar.icon}
                    </div>
                    <div className="text-[14px] sm:text-[15px] font-extrabold text-[#111216] leading-tight">
                      {pilar.title}
                    </div>
                    <div className="text-[13px] sm:text-[13.5px] font-semibold text-[#2B2E36] leading-tight">
                      {pilar.subtitle}
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
