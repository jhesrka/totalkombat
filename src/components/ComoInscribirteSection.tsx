"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CornerRibbons } from "@/components/Icons";

function GoldDocIcon() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ci-gold-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5A928" />
          <stop offset="100%" stopColor="#9C6408" />
        </linearGradient>
      </defs>
      <path
        d="M9 7 H26 L32 13 V36 H9 Z"
        stroke="url(#ci-gold-1)"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <line x1="14" y1="16" x2="24" y2="16" stroke="url(#ci-gold-1)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="22" x2="22" y2="22" stroke="url(#ci-gold-1)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="28" x2="19" y2="28" stroke="url(#ci-gold-1)" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M23 28 L35 16 L39 20 L27 32 L22 33 Z"
        fill="url(#ci-gold-1)"
        stroke="#FFFFFF"
        strokeWidth="1"
      />
    </svg>
  );
}

function GoldWhatsAppOutlineIcon() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ci-gold-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5A928" />
          <stop offset="100%" stopColor="#9C6408" />
        </linearGradient>
      </defs>
      <path
        d="M22 6.5 C13.4 6.5, 6.5 13.2, 6.5 21.5 C6.5 24.5, 7.4 27.3, 8.9 29.7 L7.2 36.8 L14.5 34.9 C16.7 36.1, 19.3 36.8, 22 36.8 C30.6 36.8, 37.5 30.1, 37.5 21.7 C37.5 13.2, 30.6 6.5, 22 6.5 Z"
        stroke="url(#ci-gold-2)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M17 15.6 C16.6 15.6, 15.8 15.8, 15.3 16.4 C14.8 16.9, 13.8 17.9, 13.8 19.9 C13.8 21.9, 15.2 23.8, 15.4 24.2 C15.7 24.5, 18.3 28.7, 22.5 30.4 C25.9 31.7, 26.7 31.5, 27.4 31.4 C28.2 31.3, 29.9 30.3, 30.2 29.3 C30.5 28.3, 30.5 27.5, 30.4 27.3 C30.3 27.1, 30 27, 29.4 26.7 C28.9 26.4, 26.7 25.3, 26.2 25.2 C25.8 25, 25.4 25, 25.1 25.5 C24.8 26, 23.9 27, 23.7 27.2 C23.4 27.5, 23.1 27.5, 22.6 27.3 C22 27, 20.3 26.4, 18.3 24.6 C16.7 23.2, 15.8 21.4, 15.4 20.8 C15.1 20.3, 15.4 20, 15.6 19.7 C15.9 19.5, 16.2 19, 16.4 18.7 C16.6 18.4, 16.7 18.1, 16.8 17.8 C16.9 17.5, 16.9 17.2, 16.8 16.9 C16.7 16.7, 15.9 14.8, 15.6 14.2"
        fill="url(#ci-gold-2)"
      />
    </svg>
  );
}

function GoldCalendarIcon() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ci-gold-3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5A928" />
          <stop offset="100%" stopColor="#9C6408" />
        </linearGradient>
      </defs>
      <rect x="6.5" y="10" width="31" height="27.5" rx="3.5" stroke="url(#ci-gold-3)" strokeWidth="2.8" />
      <line x1="6.5" y1="17.5" x2="37.5" y2="17.5" stroke="url(#ci-gold-3)" strokeWidth="2.8" />
      <line x1="15.5" y1="6.5" x2="15.5" y2="12" stroke="url(#ci-gold-3)" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="28.5" y1="6.5" x2="28.5" y2="12" stroke="url(#ci-gold-3)" strokeWidth="2.8" strokeLinecap="round" />
      <rect x="12" y="22" width="4.5" height="4.5" rx="0.8" fill="url(#ci-gold-3)" />
      <rect x="19.8" y="22" width="4.5" height="4.5" rx="0.8" fill="url(#ci-gold-3)" />
      <rect x="27.5" y="22" width="4.5" height="4.5" rx="0.8" fill="url(#ci-gold-3)" />
      <rect x="12" y="29" width="4.5" height="4.5" rx="0.8" fill="url(#ci-gold-3)" />
      <rect x="19.8" y="29" width="4.5" height="4.5" rx="0.8" fill="url(#ci-gold-3)" />
    </svg>
  );
}

function GoldCheckCircleIcon() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ci-gold-4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5A928" />
          <stop offset="100%" stopColor="#9C6408" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="14.5" stroke="url(#ci-gold-4)" strokeWidth="3" />
      <path
        d="M15 22.5 L19.8 27 L29.5 17.5"
        stroke="url(#ci-gold-4)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoldArrowConnector() {
  return (
    <svg
      viewBox="0 0 18 28"
      className="hidden md:block h-6 w-4 shrink-0 text-[#D4951A] drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3 L14 14 L3 25"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PASOS = [
  {
    num: "1",
    icon: <GoldDocIcon />,
    content: (
      <>
        <strong className="font-extrabold text-[#111216]">Completa</strong>
        <span className="block">el formulario</span>
        <span className="block">de inscripción</span>
      </>
    ),
  },
  {
    num: "2",
    icon: <GoldWhatsAppOutlineIcon />,
    content: (
      <>
        <strong className="font-extrabold text-[#111216]">Recibe la</strong>
        <span className="block">confirmación</span>
        <span className="block">de tu solicitud</span>
      </>
    ),
  },
  {
    num: "3",
    icon: <GoldCalendarIcon />,
    content: (
      <>
        <strong className="font-extrabold text-[#111216]">Coordina tu</strong>
        <span className="block">ingreso y horario</span>
        <span className="block">de entrenamiento</span>
      </>
    ),
  },
  {
    num: "4",
    icon: <GoldCheckCircleIcon />,
    content: (
      <>
        <strong className="font-extrabold text-[#111216]">¡Listo!</strong>
        <span className="block">Comienza tu</span>
        <span className="block">formación en</span>
        <strong className="block font-extrabold text-[#111216]">
          TOTAL KOMBAT
        </strong>
      </>
    ),
  },
];

export default function ComoInscribirteSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] items-center gap-7 lg:gap-6">
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
              <span className="slash-red mt-0.5 h-9 w-3 shrink-0" />
              <h2 className="font-display-italic leading-[0.92] tracking-tight">
                <span className="block text-[29px] sm:text-[34px] text-[#111216]">
                  ¿Cómo
                </span>
                <span className="block text-[29px] sm:text-[34px] text-[#C81018]">
                  inscribirte?
                </span>
              </h2>
            </div>
            <p className="text-[13px] sm:text-[13.5px] leading-[1.38] text-[#1D1F26] font-medium max-w-[245px]">
              Es muy sencillo, solo completa el formulario, envía tu solicitud y
              nos pondremos en contacto contigo para confirmar tu cupo.
            </p>
          </motion.div>

          {/* Right 4 Numbered Step Cards */}
          <motion.div
            style={{ y: cardsY }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-stretch lg:justify-between gap-6 sm:gap-5 lg:gap-2.5 pt-3.5 will-change-transform"
          >
            {PASOS.map((paso, idx) => (
              <React.Fragment key={paso.num}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -5 }}
                  className="group lg:flex-1"
                >
                  <div className="relative -skew-x-[8deg] lg:-skew-x-[16deg] w-full h-full min-h-[158px] rounded-[18px] border-[1.5px] border-[#DFB349]/80 bg-gradient-to-b from-white via-[#FCF9F2] to-[#F7F3E8] px-3 pt-6 pb-3.5 shadow-[0_6px_18px_rgba(0,0,0,0.08),0_2px_8px_rgba(229,184,66,0.16)] transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#D4951A] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.13),0_0_16px_rgba(229,184,66,0.3)] flex flex-col items-center justify-center text-center">
                    {/* Top Red Skewed Parallelogram Ribbon Tab */}
                    <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 w-[66px] h-[23px] bg-gradient-to-br from-[#FF363D] via-[#D60E15] to-[#8C0408] shadow-[0_4px_10px_rgba(180,10,16,0.45)] flex items-center justify-center">
                      <span className="skew-x-[8deg] lg:skew-x-[16deg] block font-display-italic text-[15px] leading-none text-white">
                        {paso.num}
                      </span>
                    </div>

                    <div className="skew-x-[8deg] lg:skew-x-[16deg] flex flex-col items-center">
                      <div className="mb-2 transition-transform duration-300 ease-out group-hover:scale-105">
                        {paso.icon}
                      </div>
                      <p className="text-[12px] sm:text-[12.5px] font-medium leading-[1.22] text-[#1D1F26]">
                        {paso.content}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {idx < PASOS.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center px-0.5">
                    <GoldArrowConnector />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
