"use client";

import React from "react";
import { motion } from "framer-motion";
import HexagonBadge from "@/components/HexagonBadge";
import { CornerRibbons } from "@/components/Icons";

export default function BeneficiosSection() {
  const benefits = [
    {
      titleMain: "Disciplina",
      titleSub: "y constancia",
      icon: (
        /* Pesa de gimnasio / mancuerna oro 3D */
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <defs>
            <linearGradient id="goldDumbbell" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5BF" />
              <stop offset="35%" stopColor="#F5C74E" />
              <stop offset="80%" stopColor="#C48918" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
          </defs>
          <path
            fill="url(#goldDumbbell)"
            d="M6 9C5.4 9 5 9.4 5 10V12H3C2.4 12 2 12.4 2 13V19C2 19.6 2.4 20 3 20H5V22C5 22.6 5.4 23 6 23H8C8.6 23 9 22.6 9 22V10C9 9.4 8.6 9 8 9H6ZM26 9C25.4 9 25 9.4 25 10V22C25 22.6 25.4 23 26 23H28C28.6 23 29 22.6 29 22V20H31C31.6 20 32 19.6 32 19V13C32 12.4 31.6 12 31 12H29V10C29 9.4 28.6 9 28 9H26ZM10 14.5V17.5C10 17.8 10.2 18 10.5 18H23.5C23.8 18 24 17.8 24 17.5V14.5C24 14.2 23.8 14 23.5 14H10.5C10.2 14 10 14.2 10 14.5Z"
          />
        </svg>
      ),
    },
    {
      titleMain: "Confianza",
      titleSub: "y seguridad",
      icon: (
        /* Escudo con checkmark oro 3D */
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <defs>
            <linearGradient id="goldShield" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5BF" />
              <stop offset="35%" stopColor="#F5C74E" />
              <stop offset="80%" stopColor="#C48918" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
          </defs>
          <path
            fill="url(#goldShield)"
            d="M16 2.5L4.5 7V15C4.5 22 9.4 28.2 16 29.8C22.6 28.2 27.5 22 27.5 15V7L16 2.5ZM14.1 22.2L9.2 17.3L11.5 15L14.1 17.6L20.8 10.9L23.1 13.2L14.1 22.2Z"
          />
        </svg>
      ),
    },
    {
      titleMain: "Defensa",
      titleSub: "personal",
      icon: (
        /* Puño cerrado marcial de combate oro 3D */
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <defs>
            <linearGradient id="goldFist" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5BF" />
              <stop offset="35%" stopColor="#F5C74E" />
              <stop offset="80%" stopColor="#C48918" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
          </defs>
          <path
            fill="url(#goldFist)"
            d="M22 5.5C20.8 5.5 19.8 6.4 19.8 7.6V8.8H18.2V6.6C18.2 5.4 17.2 4.5 16 4.5C14.8 4.5 13.8 5.4 13.8 6.6V8.8H12.8V7.6C12.8 6.4 11.8 5.5 10.6 5.5C9.4 5.5 8.5 6.4 8.5 7.6V16.2L7.7 15.4C6.9 14.6 5.6 14.6 4.8 15.4C4 16.2 4 17.5 4.8 18.3L11.2 24.7C12.8 26.3 15 27.2 17.3 27.2H21.5C24.8 27.2 27.5 24.5 27.5 21.2V11C27.5 9.8 26.5 8.8 25.3 8.8V7.6C25.3 6.4 24.3 5.5 23.1 5.5H22Z"
          />
        </svg>
      ),
    },
    {
      titleMain: "Mejor",
      titleSub: "condición física",
      icon: (
        /* Corredor en velocidad oro 3D */
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <defs>
            <linearGradient id="goldRunner" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5BF" />
              <stop offset="35%" stopColor="#F5C74E" />
              <stop offset="80%" stopColor="#C48918" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
          </defs>
          <circle cx="21" cy="6.5" r="3.2" fill="url(#goldRunner)" />
          <path
            fill="url(#goldRunner)"
            d="M19 12L15 15.2L17.6 21.5L14.2 27.5H11L13.8 20.2L11.2 16.8L6.5 18.2V15L11.2 12.8L15.5 9.8C16.4 9.1 17.6 9.3 18.3 10.1L20.8 13.2H25.5V16.2H19.6L19 12Z"
          />
        </svg>
      ),
    },
    {
      titleMain: "Trabajo",
      titleSub: "en equipo",
      icon: (
        /* 3 personas en equipo oro 3D */
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <defs>
            <linearGradient id="goldTeam" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5BF" />
              <stop offset="35%" stopColor="#F5C74E" />
              <stop offset="80%" stopColor="#C48918" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="9.5" r="3.4" fill="url(#goldTeam)" />
          <path fill="url(#goldTeam)" d="M16 14.8C13 14.8 9.2 16.2 9.2 19.2V22H22.8V19.2C22.8 16.2 19 14.8 16 14.8Z" />
          <circle cx="7.2" cy="11.8" r="2.6" fill="url(#goldTeam)" />
          <path fill="url(#goldTeam)" d="M7.2 16.2C5.9 16.2 3.2 17 3.2 18.8V20.8H7.8V19.2C7.8 18 8.4 17 9.1 16.3C8.5 16.2 7.8 16.2 7.2 16.2Z" />
          <circle cx="24.8" cy="11.8" r="2.6" fill="url(#goldTeam)" />
          <path fill="url(#goldTeam)" d="M24.8 16.2C24.2 16.2 23.5 16.2 22.9 16.3C23.6 17 24.2 18 24.2 19.2V20.8H28.8V18.8C28.8 17 26.1 16.2 24.8 16.2Z" />
        </svg>
      ),
    },
    {
      titleMain: "Participación",
      titleSub: "en competencias",
      icon: (
        /* Trofeo de campeonato oro 3D */
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <defs>
            <linearGradient id="goldTrophy" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF5BF" />
              <stop offset="35%" stopColor="#F5C74E" />
              <stop offset="80%" stopColor="#C48918" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
          </defs>
          <path
            fill="url(#goldTrophy)"
            d="M25 5.5H22V3.5H10V5.5H7C5.2 5.5 3.8 6.9 3.8 8.7C3.8 11.6 6.1 14 9 14.3C9.9 16.2 11.7 17.6 13.9 18L13 22.2H10V25.2H22V22.2H19.1L18.2 18C20.4 17.6 22.2 16.2 23.1 14.3C26 14 28.2 11.6 28.2 8.7C28.2 6.9 26.8 5.5 25 5.5ZM6.5 8.7C6.5 8 7.1 7.4 7.8 7.4H9.8V12.4C7.9 12 6.5 10.5 6.5 8.7ZM25.5 8.7C25.5 10.5 24.1 12 22.2 12.4V7.4H24.2C24.9 7.4 25.5 8 25.5 8.7Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-light-section relative py-12 lg:py-16 overflow-hidden border-b border-gray-300 select-none">
      {/* Cintas Doradas Curvas Discretas en Esquinas */}
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Título de Sección: // ¿Qué puedes conseguir? // */}
        <div className="mb-10 sm:mb-12 flex items-center justify-center gap-3">
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="slash-red-sm origin-bottom"
          />
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-italic text-[26px] sm:text-[34px] text-[#111216] tracking-wide drop-shadow-sm"
          >
            ¿Qué puedes conseguir?
          </motion.h2>
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="slash-red-sm origin-bottom"
          />
        </div>

        {/* 6 Medallones Hexagonales Estables (solo se eleva individualmente el que recibe hover) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:gap-5 max-w-[1180px] mx-auto">
          {benefits.map((item, idx) => (
            <HexagonBadge
              key={idx}
              index={idx}
              icon={item.icon}
              titleMain={item.titleMain}
              titleSub={item.titleSub}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
