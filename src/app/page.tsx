import React from "react";
import HeroSection from "@/components/HeroSection";
import DescubreSection from "@/components/DescubreSection";
import DisciplinasSection from "@/components/DisciplinasSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import FormacionEdadesSection from "@/components/FormacionEdadesSection";
import ExperienciaCarouselSection from "@/components/ExperienciaCarouselSection";
import CtaEmpiezaHoySection from "@/components/CtaEmpiezaHoySection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ==================== 1. HERO SECTION CINEMÁTICO ==================== */}
      <HeroSection />

      {/* ==================== 2. DESCUBRE TOTAL KOMBAT ==================== */}
      <DescubreSection />

      {/* ==================== 3. NUESTRAS DISCIPLINAS ==================== */}
      <DisciplinasSection />

      {/* ==================== 4. ¿QUÉ PUEDES CONSEGUIR? ==================== */}
      <BeneficiosSection />

      {/* ==================== 5. FORMACIÓN PARA TODAS LAS EDADES ==================== */}
      <FormacionEdadesSection />

      {/* ==================== 6. VIVE LA EXPERIENCIA TOTAL KOMBAT (CARRUSEL PREMIUM) ==================== */}
      <ExperienciaCarouselSection />

      {/* ==================== 7. CTA BANNER: ¡EMPIEZA HOY! ==================== */}
      <CtaEmpiezaHoySection />
    </div>
  );
}

