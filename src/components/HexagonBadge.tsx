"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";

interface HexagonBadgeProps {
  icon: React.ReactNode;
  title?: string;
  titleMain?: string;
  titleSub?: string;
  variant?: "gold" | "crimson";
  index?: number;
}

export default function HexagonBadge({
  icon,
  title,
  titleMain,
  titleSub,
  variant = "gold",
  index = 0,
}: HexagonBadgeProps) {
  const uid = useId().replace(/:/g, "_");

  const main = titleMain || (title ? title.split(" ")[0] : "");
  const sub = titleSub || (title ? title.split(" ").slice(1).join(" ") : "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center justify-center w-[148px] h-[142px] sm:w-[162px] sm:h-[154px] select-none cursor-pointer will-change-transform"
    >
      {/* SVG Medallón Hexagonal con Borde Oro Pulido y Fondo Negro Mate Lujoso */}
      <svg
        viewBox="0 0 180 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          absolute inset-0 w-full h-full
          drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)]
          group-hover:drop-shadow-[0_8px_18px_rgba(212,155,39,0.35)]
          transition-all duration-300
        "
      >
        <defs>
          {/* Fondo negro puro azabache con leve gradiente de profundidad */}
          <linearGradient id={`hexBg-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#181512" />
            <stop offset="45%" stopColor="#0B0A0B" />
            <stop offset="100%" stopColor="#030303" />
          </linearGradient>

          {/* Calidez dorada interior muy sutil en hover (sin sobreexposición) */}
          <radialGradient id={`hexHoverGlow-${uid}`} cx="50%" cy="100%" r="70%">
            <stop offset="0%" stopColor="rgba(235, 185, 65, 0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Borde exterior de oro pulido reflectante */}
          <linearGradient id={`hexBorderGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="25%" stopColor="#F5D061" />
            <stop offset="55%" stopColor="#C98F1D" />
            <stop offset="85%" stopColor="#F5D061" />
            <stop offset="100%" stopColor="#96610A" />
          </linearGradient>

          {/* Bisel interno fino dorado */}
          <linearGradient id={`hexInnerRim-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 245, 200, 0.28)" />
            <stop offset="100%" stopColor="rgba(212, 155, 39, 0.15)" />
          </linearGradient>
        </defs>

        {/* 1. Base negra sólida y borde dorado pulido */}
        <path
          d="M52 8 H128 C134 8 139 11 142 16 L172 74 C175 79 175 85 172 90 L142 148 C139 153 134 156 128 156 H52 C46 156 41 153 38 148 L8 90 C5 85 5 79 8 74 L38 16 C41 11 46 8 52 8 Z"
          fill={`url(#hexBg-${uid})`}
          stroke={`url(#hexBorderGold-${uid})`}
          strokeWidth="3.2"
        />

        {/* 2. Suave calidez interior sutil en hover */}
        <path
          d="M52 8 H128 C134 8 139 11 142 16 L172 74 C175 79 175 85 172 90 L142 148 C139 153 134 156 128 156 H52 C46 156 41 153 38 148 L8 90 C5 85 5 79 8 74 L38 16 C41 11 46 8 52 8 Z"
          fill={`url(#hexHoverGlow-${uid})`}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        {/* 3. Bisel interno de definición */}
        <path
          d="M54 13 H126 C131 13 135 15 137 19 L165 74 C167 78 167 86 165 90 L137 145 C135 149 131 151 126 151 H54 C49 151 45 149 43 145 L15 90 C13 86 13 78 15 74 L43 19 C45 15 49 13 54 13 Z"
          stroke={`url(#hexInnerRim-${uid})`}
          strokeWidth="1"
        />
      </svg>

      {/* Contenido Central: Icono Oro 3D + Texto de Alta Definición */}
      <div className="relative z-10 flex flex-col items-center justify-center px-3.5 text-center pointer-events-none">
        {/* Contenedor de Icono con color oro reflectante y sombra */}
        <div className="mb-2 text-[#F5CA55] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-0.5">
          {icon}
        </div>

        {/* Línea 1: Palabra principal en negrita de alta visibilidad */}
        <span className="text-[13px] sm:text-[14px] font-black leading-[1.1] text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
          {main}
        </span>

        {/* Línea 2: Subtítulo con peso medio nítido */}
        {sub && (
          <span className="text-[10.5px] sm:text-[11.5px] font-semibold leading-[1.15] text-gray-200 tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] mt-0.5">
            {sub}
          </span>
        )}
      </div>
    </motion.div>
  );
}
