import React from "react";
import type { Metadata } from "next";
import {
  Target,
  Eye,
} from "lucide-react";
import { CornerRibbons } from "@/components/Icons";
import NosotrosHeroSection from "@/components/NosotrosHeroSection";
import NuestraHistoriaSection from "@/components/NuestraHistoriaSection";
import IdentidadInstitucionalSection from "@/components/IdentidadInstitucionalSection";
import NuestrosValoresSection from "@/components/NuestrosValoresSection";
import TransparenciaSection from "@/components/TransparenciaSection";

export const metadata: Metadata = {
  title: "Nosotros | Historia, Misión, Visión y Equipo Directivo",
  description:
    "Conoce TOTAL KOMBAT: nuestra historia, identidad institucional, misión, visión, valores, equipo técnico y transparencia institucional en Quito, Ecuador.",
};

export default function NosotrosPage() {

  const equipo = [
    {
      role: "Director General",
      sub: "(Club TOTAL KOMBAT)",
      image: "/images/equipo-director-card.png",
    },
    {
      role: "Entrenadora",
      sub: "Taekwondo",
      image: "/images/equipo-taekwondo-card.png",
    },
    {
      role: "Entrenador",
      sub: "Sambo",
      image: "/images/equipo-sambo-card.png",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ==================== 1. HERO NOSOTROS ==================== */}
      <NosotrosHeroSection />

      {/* ==================== 2. NUESTRA HISTORIA ==================== */}
      <NuestraHistoriaSection />

      {/* ==================== 3. IDENTIDAD INSTITUCIONAL ==================== */}
      <IdentidadInstitucionalSection />

      {/* ==================== 4. NUESTRA MISIÓN & VISIÓN ==================== */}
      <section className="bg-light-section relative py-10 lg:py-11 overflow-hidden border-b border-gray-300">
        <CornerRibbons />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:divide-x lg:divide-gray-300">
            {/* Nuestra Misión */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:pr-6">
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C81018]/10 text-[#C81018]">
                  <Target className="h-9 w-9 stroke-[2.2]" />
                </div>
                <h2 className="font-display-italic leading-[0.95]">
                  <span className="block text-[18px] text-[#111216]">
                    Nuestra
                  </span>
                  <span className="block text-[27px] text-[#C81018]">
                    Misión
                  </span>
                </h2>
              </div>

              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-gray-800 font-medium">
                Formar deportistas íntegros y competitivos en Taekwondo y Sambo,
                promoviendo la disciplina, el respeto y los valores del deporte
                en un ambiente seguro e inclusivo.
              </p>
            </div>

            {/* Nuestra Visión */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:pl-8">
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C81018]/10 text-[#C81018]">
                  <Eye className="h-9 w-9 stroke-[2.2]" />
                </div>
                <h2 className="font-display-italic leading-[0.95]">
                  <span className="block text-[18px] text-[#111216]">
                    Nuestra
                  </span>
                  <span className="block text-[27px] text-[#C81018]">
                    Visión
                  </span>
                </h2>
              </div>

              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-gray-800 font-medium">
                Ser un club deportivo reconocido a nivel provincial y nacional
                por la calidad de su formación, sus resultados deportivos y su
                aporte al desarrollo del deporte en Pichincha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. NUESTROS VALORES ==================== */}
      <NuestrosValoresSection />

      {/* ==================== 6. EQUIPO DIRECTIVO Y TÉCNICO ==================== */}
      <section className="bg-light-section relative py-10 lg:py-12 overflow-hidden border-b border-gray-300">
        <CornerRibbons />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left Copy (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="slash-red h-8 w-3.5" />
                <h2 className="font-display-italic text-[24px] sm:text-[30px] leading-tight">
                  <span className="text-[#111216]">Equipo </span>
                  <span className="text-[#C81018]">Directivo y Técnico</span>
                </h2>
              </div>

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-800 font-medium">
                Contamos con un equipo de profesionales comprometidos con la
                formación, el desarrollo y la proyección deportiva de nuestros
                alumnos.
              </p>
            </div>

            {/* Right 3 Team Cards (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
              {equipo.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <img
                    src={member.image}
                    alt={`${member.role} - ${member.sub}`}
                    className="w-[215px] sm:w-full max-w-[225px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.22)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. TRANSPARENCIA INSTITUCIONAL ==================== */}
      <TransparenciaSection />
    </div>
  );
}

