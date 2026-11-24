"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Check } from "lucide-react";

export default function FormacionEdadesSection() {
  const categories = [
    {
      id: "ninos",
      title: "Niños",
      ageRange: "(4 – 11 años)",
      image: "/imagenes/nino.webp?v=8",
      alt: "Formación en artes marciales para niños",
    },
    {
      id: "jovenes",
      title: "Jóvenes",
      ageRange: "(12 – 17 años)",
      image: "/imagenes/joven.webp?v=8",
      alt: "Formación en artes marciales para jóvenes",
    },
    {
      id: "adultos",
      title: "Adultos",
      ageRange: "(18 – 30 años)",
      image: "/imagenes/adulto.webp?v=8",
      alt: "Formación en artes marciales para adultos",
    },
    {
      id: "master",
      title: "Máster",
      ageRange: "(31 en adelante)",
      image: "/imagenes/master.webp?v=8",
      alt: "Formación en artes marciales para categoría máster",
    },
  ];

  const levels = [
    "Iniciación",
    "Desarrollo",
    "Perfeccionamiento",
    "Competitivo",
  ];

  return (
    <section
      className="relative py-12 lg:py-16 overflow-hidden border-b-2 border-[#E5B842]/50 bg-[#0A090B] bg-cover bg-right bg-no-repeat select-none"
      style={{ backgroundImage: "url('/imagenes/formacion.webp')" }}
    >
      {/* Sutil overlay oscuro para asegurar máxima legibilidad de las tarjetas */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Encabezado: // Formación para todas las edades // */}
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
            className="font-display-italic text-[26px] sm:text-[34px] text-center"
          >
            <span className="text-white">Formación para </span>
            <span className="text-gold-metallic drop-shadow-[0_2px_12px_rgba(245,197,66,0.5)]">
              todas las edades
            </span>
          </motion.h2>
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="slash-red-sm origin-bottom"
          />
        </div>

        {/* Layout Principal: 4 Tarjetas Inclinadas (8 cols) + Bloque de Niveles (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
          {/* Columna Izquierda: 4 Tarjetas Inclinadas con la proporción exacta de la referencia */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 sm:gap-4 xl:gap-5 px-4 sm:px-0 justify-items-center">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="w-full max-w-[215px] flex justify-center will-change-transform"
              >
                <Link
                  href="/formacion"
                  className="group relative flex flex-col items-center w-full h-[150px] sm:h-[160px] xl:h-[170px]"
                >
                  {/* Marco Dorado Inclinado Neón idéntico a la referencia (skew -15deg, glow dorado superior + humo) */}
                  <div
                    className="
                      absolute inset-0 w-full h-full
                      rounded-2xl skew-x-[-15deg]
                      border-[2px] border-[#F5C74E]
                      bg-gradient-to-b from-[#18181C] via-[#0E0E12] to-[#060608]
                      shadow-[0_0_18px_rgba(245,199,78,0.5),inset_0_0_12px_rgba(245,199,78,0.18)]
                      transition-all duration-300
                      group-hover:border-[#FFE58F]
                      group-hover:shadow-[0_0_28px_rgba(245,199,78,0.85),inset_0_0_18px_rgba(245,199,78,0.25)]
                      overflow-hidden
                    "
                  >
                    {/* Textura de humo auténtico billowing dentro de la tarjeta */}
                    <img
                      src="/imagenes/card_smoke.webp"
                      alt=""
                      width={320}
                      height={220}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-65 mix-blend-screen pointer-events-none"
                    />

                    {/* Resplandor cenital y luz interior */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(245,199,78,0.18)_0%,transparent_75%)] pointer-events-none" />

                    {/* Línea de resplandor neón dorado intenso en el borde superior */}
                    <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FFF7C2] to-transparent shadow-[0_0_12px_#FFD700,0_0_22px_rgba(245,199,78,0.85)] pointer-events-none" />
                  </div>

                  {/* Atleta Recortado en 3D: Desborda por arriba con la cabeza (pop-out 3D) y se apoya en la base */}
                  <div
                    className="
                      absolute inset-x-0 bottom-0
                      flex items-end justify-center
                      pointer-events-none select-none z-20
                      overflow-visible
                    "
                  >
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      width={350}
                      height={360}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-[195px] sm:h-[210px] xl:h-[224px] w-auto max-w-[98%] object-contain object-bottom
                        drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)]
                        transition-transform duration-300 ease-out
                        group-hover:scale-108 block align-bottom
                      "
                    />
                  </div>

                  {/* Placa Roja Inclinada Inferior - Clon Exacto (skew -15deg, rojo con borde dorado neón) */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[93%] sm:w-[94%] z-30 pointer-events-none">
                    <div
                      className="
                        skew-x-[-15deg] rounded-xl px-2 py-1.5
                        bg-gradient-to-r from-[#D80010] via-[#F01825] to-[#B0000C]
                        border-[1.5px] border-[#F5C74E]
                        shadow-[0_4px_16px_rgba(220,18,26,0.8),0_0_10px_rgba(245,199,78,0.35)]
                        flex flex-col items-center justify-center text-center
                        transition-all duration-300
                        group-hover:border-[#FFF0B3]
                        group-hover:shadow-[0_6px_22px_rgba(235,20,30,0.95),0_0_14px_rgba(245,199,78,0.5)]
                        relative overflow-hidden
                      "
                    >
                      {/* Brillo especular superior del botón rojo */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

                      {/* Des-inclinamos el texto exactamente para que esté horizontal */}
                      <div className="skew-x-[15deg] w-full flex flex-col items-center justify-center text-center relative z-10">
                        <span className="text-[14.5px] sm:text-[15.5px] font-black text-white leading-none tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-center">
                          {cat.title}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-white/95 leading-tight tracking-tight mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] text-center">
                          {cat.ageRange}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Columna Derecha: Checklist de Entrenamiento por Niveles (4 cols en desktop) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start lg:border-l lg:border-[#E5B842]/40 lg:pl-7 xl:pl-9 xl:pr-14 pt-3 lg:pt-0">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5B842]/70 bg-[#E5B842]/15 text-[#FCE38A] shadow-[0_0_12px_rgba(229,184,66,0.3)]">
                <CalendarCheck className="h-6 w-6 stroke-[2.2]" />
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-extrabold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Entrenamiento
                <br />
                por niveles
              </h3>
            </div>

            <ul className="grid grid-cols-2 lg:flex lg:flex-col gap-x-6 gap-y-2.5 lg:gap-0 lg:space-y-2.5 text-[14px] sm:text-[15.5px] font-medium text-gray-100">
              {levels.map((lvl, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#F3C652] stroke-[3] shrink-0 drop-shadow-[0_0_6px_rgba(243,198,82,0.6)]" />
                  <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {lvl}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
