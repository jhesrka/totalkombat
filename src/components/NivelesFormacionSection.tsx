"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Award, ChevronRight, X } from "lucide-react";
import { TaekwondoIcon, SamboIcon } from "@/components/Icons";

type DisciplineTab = "taekwondo" | "sambo";

interface NivelCard {
  title: string;
  badge: string;
  desc: string;
  beltImg?: string;
  samboPatches?: [string, string?];
  samboBase?: "red" | "blue";
}

const NIVELES_TAEKWONDO: NivelCard[] = [
  {
    title: "Inicial",
    badge: "10.º – 9.º Kup",
    desc: "Fundamentos y adaptación.",
    beltImg: "/imagenes/blanco.webp",
  },
  {
    title: "Básico",
    badge: "8.º – 7.º Kup",
    desc: "Desarrollo de técnica y control.",
    beltImg: "/imagenes/amarillo.webp",
  },
  {
    title: "Intermedio",
    badge: "6.º – 5.º Kup",
    desc: "Consolidación de habilidades.",
    beltImg: "/imagenes/verde.webp",
  },
  {
    title: "Avanzado",
    badge: "4.º – 3.º Kup",
    desc: "Perfeccionamiento y estrategia.",
    beltImg: "/imagenes/azul.webp",
  },
  {
    title: "Competitivo",
    badge: "2.º – 1.º Kup",
    desc: "Preparación para torneos y eventos.",
    beltImg: "/imagenes/rojo.webp",
  },
];

const NIVELES_SAMBO: NivelCard[] = [
  {
    title: "Inicial",
    badge: "Sin parche · Novato",
    desc: "Caídas (samostrakhovka) y postura base.",
    samboBase: "red",
  },
  {
    title: "Básico",
    badge: "Niveles 1–2 · Blanco / Amarillo",
    desc: "Agarres, desplazamientos y proyecciones iniciales.",
    samboBase: "blue",
    samboPatches: ["#F3F4F6", "#FACC15"],
  },
  {
    title: "Intermedio",
    badge: "Niveles 3–4 · Naranja / Verde",
    desc: "Derribos (brosok) y defensa personal.",
    samboBase: "red",
    samboPatches: ["#F97316", "#22C55E"],
  },
  {
    title: "Avanzado",
    badge: "Niveles 5–6 · Azul / Púrpura",
    desc: "Inmovilizaciones y luxaciones (bolevoy).",
    samboBase: "blue",
    samboPatches: ["#38BDF8", "#A855F7"],
  },
  {
    title: "Maestría",
    badge: "Marrón · Negro · Granate",
    desc: "Candidato a Maestro, Maestro y Gran Maestro.",
    samboBase: "red",
    samboPatches: ["#78350F", "#881337"],
  },
];

const ESCALA_KUP = [
  { grado: "10.º Kup", cinturon: "Blanco", nota: "Inicio del camino marcial" },
  { grado: "9.º Kup", cinturon: "Blanco punta amarilla", nota: "Transición inicial" },
  { grado: "8.º Kup", cinturon: "Amarillo", nota: "Bases técnicas y posturas" },
  { grado: "7.º Kup", cinturon: "Amarillo punta verde", nota: "Control y coordinación" },
  { grado: "6.º Kup", cinturon: "Verde", nota: "Desarrollo y precisión" },
  { grado: "5.º Kup", cinturon: "Verde punta azul", nota: "Consolidación técnica" },
  { grado: "4.º Kup", cinturon: "Azul", nota: "Velocidad y táctica" },
  { grado: "3.º Kup", cinturon: "Azul punta roja", nota: "Estrategia de combate" },
  { grado: "2.º Kup", cinturon: "Rojo", nota: "Dominio pre-competitivo" },
  { grado: "1.º Kup", cinturon: "Rojo punta negra", nota: "Antesala al cinturón negro" },
];

const ESCALA_SAMBO_FIAS = [
  { etapa: "Principiante", parche: "Sin parche", color: "#374151", nota: "Caídas y fundamentos" },
  { etapa: "Estudiante 1", parche: "Parche Blanco", color: "#F3F4F6", nota: "Técnica inicial" },
  { etapa: "Estudiante 2", parche: "Parche Amarillo", color: "#FACC15", nota: "Base de agarre" },
  { etapa: "Estudiante 3", parche: "Parche Naranja", color: "#F97316", nota: "Proyecciones básicas" },
  { etapa: "Estudiante 4", parche: "Parche Verde", color: "#22C55E", nota: "Técnica y combate" },
  { etapa: "Estudiante 5", parche: "Parche Azul", color: "#2563EB", nota: "Control en suelo" },
  { etapa: "Estudiante 6", parche: "Parche Púrpura", color: "#9333EA", nota: "Transición avanzada" },
  { etapa: "Candidato a Maestro", parche: "Parche Marrón", color: "#78350F", nota: "Especialización" },
  { etapa: "Maestro", parche: "Parche Negro", color: "#111216", nota: "Alto dominio FIAS" },
  { etapa: "Gran Maestro", parche: "Parche Granate", color: "#881337", nota: "Máxima distinción" },
];

function MiniBeltIllustration({ variant }: { variant: "poom" | "dan" }) {
  return (
    <svg
      viewBox="0 0 120 72"
      className="h-10 w-16 rounded-md border border-[#E5B842]/40 bg-[#0A0B0E] shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`belt-top-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={variant === "poom" ? "#990B11" : "#111216"} />
          <stop offset="50%" stopColor={variant === "poom" ? "#E51C23" : "#252830"} />
          <stop offset="100%" stopColor={variant === "poom" ? "#8A050A" : "#0D0E12"} />
        </linearGradient>
        <linearGradient id={`belt-bot-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#090A0D" />
          <stop offset="50%" stopColor="#1D2028" />
          <stop offset="100%" stopColor="#08090B" />
        </linearGradient>
      </defs>
      <polygon
        points="18,42 52,34 44,64 12,60"
        fill={variant === "poom" ? "#B91218" : "#171920"}
        stroke="#000"
        strokeWidth="1"
      />
      <polygon
        points="102,42 68,34 76,64 108,60"
        fill="#12141A"
        stroke="#000"
        strokeWidth="1"
      />
      {variant === "dan" && (
        <>
          <line x1="88" y1="45" x2="96" y2="57" stroke="#F5C74E" strokeWidth="2.5" />
          <line x1="83" y1="47" x2="91" y2="59" stroke="#F5C74E" strokeWidth="2.5" />
        </>
      )}
      <rect x="10" y="24" width="100" height="10" rx="2" fill={`url(#belt-top-${variant})`} />
      <rect x="10" y="34" width="100" height="10" rx="2" fill={`url(#belt-bot-${variant})`} />
      <rect
        x="47"
        y="21"
        width="26"
        height="26"
        rx="5"
        fill={variant === "poom" ? "#C81018" : "#1C1F26"}
        stroke="#F5C74E"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {variant === "poom" && (
        <rect x="47" y="34" width="26" height="13" rx="3" fill="#111216" />
      )}
    </svg>
  );
}

function SamboBeltIllustration({
  base = "red",
  patches,
}: {
  base?: "red" | "blue";
  patches?: [string, string?];
}) {
  const main = base === "red" ? "#C81018" : "#1D4ED8";
  const dark = base === "red" ? "#7F090E" : "#1E3A8A";
  const light = base === "red" ? "#EF4444" : "#3B82F6";

  return (
    <svg
      viewBox="0 0 180 96"
      className="h-full w-auto max-w-full select-none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sambo-belt-${base}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={dark} />
          <stop offset="50%" stopColor={light} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>

      {/* Belt tails */}
      <polygon
        points="42,48 82,42 64,88 26,82"
        fill={main}
        stroke="#050507"
        strokeWidth="1.5"
      />
      <polygon
        points="138,48 98,42 116,88 154,82"
        fill={dark}
        stroke="#050507"
        strokeWidth="1.5"
      />

      {/* Horizontal belt wrap */}
      <rect
        x="16"
        y="30"
        width="148"
        height="20"
        rx="5"
        fill={`url(#sambo-belt-${base})`}
        stroke="#050507"
        strokeWidth="1.2"
      />

      {/* Center knot */}
      <rect
        x="73"
        y="25"
        width="34"
        height="30"
        rx="7"
        fill={main}
        stroke="#F5C74E"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />

      {/* FIAS grade patch(es) on belt tail */}
      {patches?.[0] && (
        <polygon
          points="126,64 143,66 147,75 130,73"
          fill={patches[0]}
          stroke="#111216"
          strokeWidth="1"
        />
      )}
      {patches?.[1] && (
        <polygon
          points="36,64 53,62 49,71 32,73"
          fill={patches[1]}
          stroke="#111216"
          strokeWidth="1"
        />
      )}
    </svg>
  );
}

export default function NivelesFormacionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const [activeTab, setActiveTab] = useState<DisciplineTab>("taekwondo");
  const [modalOpen, setModalOpen] = useState(false);

  const niveles = activeTab === "taekwondo" ? NIVELES_TAEKWONDO : NIVELES_SAMBO;

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-10 lg:py-12 border-b-2 border-[#E5B842]/50 bg-[#09090D] overflow-hidden"
      >
        {/* Parallax background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              y: bgY,
              backgroundImage: "url('/imagenes/fondodisiplina.webp')",
            }}
            className="absolute -top-[8%] -bottom-[8%] -left-[2%] -right-[2%] bg-cover bg-center bg-no-repeat will-change-transform"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          {/* Heading + Discipline Toggle Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="slash-red-sm" />
              <h2 className="font-display-italic text-[25px] sm:text-[32px] text-white">
                Niveles de Formación
              </h2>
              <span className="slash-red-sm" />
            </div>

            {/* Discipline Selector Buttons */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E5B842]/40 bg-[#0D0F14]/90 p-1.5 backdrop-blur-sm shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                onClick={() => setActiveTab("taekwondo")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-wide transition-[background-color,color,border-color,box-shadow] duration-200 cursor-pointer ${
                  activeTab === "taekwondo"
                    ? "btn-kombat-red text-white border border-[#FFD54F]/50 shadow-red-glow"
                    : "border border-transparent text-gray-300 hover:text-white"
                }`}
              >
                <TaekwondoIcon className="h-4 w-4 text-[#F5C74E]" />
                <span>Taekwondo</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("sambo")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] sm:text-[13px] font-extrabold uppercase tracking-wide transition-[background-color,color,border-color,box-shadow] duration-200 cursor-pointer ${
                  activeTab === "sambo"
                    ? "btn-kombat-red text-white border border-[#FFD54F]/50 shadow-red-glow"
                    : "border border-transparent text-gray-300 hover:text-white"
                }`}
              >
                <SamboIcon className="h-4 w-4 text-[#F5C74E]" />
                <span>Sambo</span>
              </button>
            </div>

            <p className="mt-2.5 text-[12.5px] sm:text-[13.5px] text-gray-300 font-medium">
              {activeTab === "taekwondo"
                ? "Progresión oficial WT / Kukkiwon: 10 grados Kup hasta cinturón negro"
                : "Sistema oficial FIAS: cinturón rojo o azul con parche de grado (10 niveles)"}
            </p>
          </motion.div>

          {/* 5 Cards */}
          <motion.div style={{ y: cardsY }} className="will-change-transform">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2"
              >
              {niveles.map((nivel) => (
                <motion.div
                  key={`${activeTab}-${nivel.title}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 340, damping: 24 }}
                  className="group h-full"
                >
                  <div className="relative card-dark-gold rounded-2xl skew-box p-4 flex flex-col items-center justify-between text-center min-h-[192px] h-full transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[#F5C74E] group-hover:shadow-[0_14px_30px_rgba(0,0,0,0.6),0_0_22px_rgba(245,199,78,0.28)]">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_20%,rgba(245,199,78,0.12),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 unskew-box flex flex-col items-center justify-between h-full w-full">
                      <div className="w-full flex flex-col items-center">
                        <span className="mb-2 inline-block rounded-full border border-[#E5B842]/45 bg-[#E5B842]/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-[#F5C74E]">
                          {nivel.badge}
                        </span>
                        <div className="h-[68px] w-full flex items-center justify-center mb-2 overflow-hidden rounded-lg bg-[#0A0B0E]/80">
                          {nivel.beltImg ? (
                            <img
                              src={nivel.beltImg}
                              alt={`Cinturón nivel ${nivel.title}`}
                              className="h-full w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
                              <SamboBeltIllustration
                                base={nivel.samboBase}
                                patches={nivel.samboPatches}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display-italic text-[18px] sm:text-[20px] text-white mb-1">
                          {nivel.title}
                        </h3>
                        <p className="text-[12px] sm:text-[12.5px] text-gray-200 leading-snug">
                          {nivel.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          </motion.div>

          {/* Compact Destination Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 mx-auto max-w-[980px] rounded-2xl border border-[#E5B842]/45 bg-[#0E1015]/90 px-4 py-3 sm:px-6 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.45)] flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {activeTab === "taekwondo" ? (
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/imagenes/rojonegro.webp"
                    alt="Cinturón Poom rojinegro"
                    className="h-10 w-16 rounded-md border border-[#E5B842]/60 bg-gradient-to-b from-gray-100 to-gray-300 object-contain p-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] shrink-0"
                  />
                  <div className="text-left">
                    <p className="text-[12px] font-extrabold uppercase tracking-wide text-[#F5C74E]">
                      Grados Poom (1.º – 4.º)
                    </p>
                    <p className="text-[11.5px] text-gray-300">
                      Rojinegro · Menores de 15 años
                    </p>
                  </div>
                </div>

                <span className="hidden sm:block h-7 w-[1px] bg-[#E5B842]/30" />

                <div className="flex items-center gap-2.5">
                  <img
                    src="/imagenes/negro.webp"
                    alt="Cinturón Negro Dan"
                    className="h-10 w-16 rounded-md border border-[#E5B842]/60 bg-gradient-to-b from-gray-100 to-gray-300 object-contain p-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] shrink-0"
                  />
                  <div className="text-left">
                    <p className="text-[12px] font-extrabold uppercase tracking-wide text-[#F5C74E]">
                      Cinturón Negro Dan (1.º – 9.º)
                    </p>
                    <p className="text-[11.5px] text-gray-300">
                      Adultos · + 10.º Dan honorífico
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5">
                <div className="h-10 w-16 rounded-md border border-[#E5B842]/40 bg-[#0A0B0E] flex items-center justify-center shrink-0">
                  <SamboBeltIllustration base="red" patches={["#881337"]} />
                </div>
                <div className="text-left">
                  <p className="text-[12px] font-extrabold uppercase tracking-wide text-[#F5C74E]">
                    Normativa Oficial FIAS · Cinturón Rojo o Azul (Kurtka)
                  </p>
                  <p className="text-[11.5px] text-gray-300">
                    El rango se identifica por el parche de color: 6 grados de
                    Estudiante y 3 grados de Maestría.
                  </p>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group relative overflow-hidden btn-kombat-red inline-flex items-center gap-1.5 rounded-full border border-[#FFD54F]/50 px-4 py-2 text-[12px] font-extrabold uppercase tracking-wide text-white shadow-red-glow transition-[transform,border-color,box-shadow] duration-200 ease-out hover:scale-[1.03] hover:border-[#FFE58F] hover:shadow-[0_0_24px_rgba(229,28,35,0.8),0_0_12px_rgba(245,199,78,0.35)] shrink-0 cursor-pointer"
            >
              <Award className="h-3.5 w-3.5 text-[#F5C74E]" />
              <span>
                {activeTab === "taekwondo"
                  ? "Ver escala oficial"
                  : "Ver escala FIAS completa"}
              </span>
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal Escala Oficial */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[760px] max-h-[88vh] overflow-y-auto rounded-2xl border border-[#E5B842]/60 bg-[#0D0E13] p-5 sm:p-7 text-white shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
            >
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Cerrar escala oficial"
                className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 p-1.5 text-gray-300 transition hover:bg-white/15 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {activeTab === "taekwondo" ? (
                <>
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="slash-red-sm" />
                    <div>
                      <h3 className="font-display-italic text-[22px] sm:text-[26px] text-white leading-none">
                        Escala Oficial de Taekwondo
                      </h3>
                      <p className="mt-1 text-[12.5px] text-gray-300">
                        Lineamientos World Taekwondo (WT) / Kukkiwon
                      </p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="mb-2.5 text-[12px] font-extrabold uppercase tracking-wider text-[#F5C74E]">
                      1. Grados Kup — Cinturones de Color (10.º al 1.º)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ESCALA_KUP.map((item) => (
                        <div
                          key={item.grado}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[12.5px]"
                        >
                          <div>
                            <span className="font-bold text-[#F5C74E]">
                              {item.grado}
                            </span>
                            <span className="mx-1.5 text-gray-500">·</span>
                            <span className="font-semibold text-white">
                              {item.cinturon}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400 text-right">
                            {item.nota}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="rounded-xl border border-[#E5B842]/35 bg-[#13151C] p-3.5 flex items-center gap-3">
                      <img
                        src="/imagenes/rojonegro.webp"
                        alt="Cinturón Poom rojinegro"
                        className="h-12 w-20 rounded-lg border border-[#E5B842]/60 bg-gradient-to-b from-gray-100 to-gray-300 object-contain p-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] shrink-0"
                      />
                      <div>
                        <h4 className="text-[13px] font-extrabold text-[#F5C74E]">
                          2. Grados Poom (1.º al 4.º Poom)
                        </h4>
                        <p className="mt-0.5 text-[12px] text-gray-300 leading-snug">
                          Cinturón rojinegro para menores de 15 años. Al cumplir
                          la edad reglamentaria se convalida a grado Dan.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#E5B842]/35 bg-[#13151C] p-3.5 flex items-center gap-3">
                      <img
                        src="/imagenes/negro.webp"
                        alt="Cinturón Negro Dan"
                        className="h-12 w-20 rounded-lg border border-[#E5B842]/60 bg-gradient-to-b from-gray-100 to-gray-300 object-contain p-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] shrink-0"
                      />
                      <div>
                        <h4 className="text-[13px] font-extrabold text-[#F5C74E]">
                          3. Grados Dan (1.º al 9.º Dan)
                        </h4>
                        <p className="mt-0.5 text-[12px] text-gray-300 leading-snug">
                          Cinturón negro oficial para adultos (15+ años). El
                          10.º Dan es honorífico / póstumo.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="slash-red-sm" />
                    <div>
                      <h3 className="font-display-italic text-[22px] sm:text-[26px] text-white leading-none">
                        Escala Oficial de Sambo (FIAS)
                      </h3>
                      <p className="mt-1 text-[12.5px] text-gray-300">
                        Cinturón Rojo o Azul tradicional con parches oficiales de
                        grado
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ESCALA_SAMBO_FIAS.map((item, i) => (
                      <div
                        key={item.etapa}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[12.5px]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="h-3.5 w-3.5 rounded-sm border border-white/30 shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <div>
                            <span className="font-bold text-[#F5C74E]">
                              {i === 0 ? "0." : `${i}.`} {item.etapa}
                            </span>
                            <span className="block text-[11px] text-gray-300">
                              {item.parche}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] text-gray-400 text-right">
                          {item.nota}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
