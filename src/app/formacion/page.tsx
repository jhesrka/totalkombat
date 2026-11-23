import React from "react";
import type { Metadata } from "next";
import FormacionHeroSection from "@/components/FormacionHeroSection";
import MetodologiaFormacionSection from "@/components/MetodologiaFormacionSection";
import NivelesFormacionSection from "@/components/NivelesFormacionSection";
import PlanEntrenamientoSection from "@/components/PlanEntrenamientoSection";
import BeneficiosFormacionSection from "@/components/BeneficiosFormacionSection";
import ResultadosProyeccionSection from "@/components/ResultadosProyeccionSection";
import CtaEmpiezaHoySection from "@/components/CtaEmpiezaHoySection";

export const metadata: Metadata = {
  title: "Formación Deportiva | Metodología, Niveles y Cinturones",
  description:
    "Un proceso integral y profesional en Taekwondo y Sambo. Conoce nuestra metodología de formación, niveles desde cinturón blanco hasta competitivo y plan de entrenamiento.",
};

export default function FormacionPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ==================== 1. HERO FORMACIÓN DEPORTIVA ==================== */}
      <FormacionHeroSection />

      {/* ==================== 2. METODOLOGÍA DE FORMACIÓN ==================== */}
      <MetodologiaFormacionSection />

      {/* ==================== 3. NIVELES DE FORMACIÓN (5 BELTS) ==================== */}
      <NivelesFormacionSection />

      {/* ==================== 4. PLAN DE ENTRENAMIENTO ==================== */}
      <PlanEntrenamientoSection />

      {/* ==================== 5. BENEFICIOS DE LA FORMACIÓN ==================== */}
      <BeneficiosFormacionSection />

      {/* ==================== 6. RESULTADOS Y PROYECCIÓN ==================== */}
      <ResultadosProyeccionSection />

      {/* ==================== 7. CTA BANNER: ¿QUIERES FORMARTE CON NOSOTROS? ==================== */}
      <CtaEmpiezaHoySection
        title={
          <>
            <span className="block text-white">¿Quieres formarte</span>
            <span className="block text-gold-metallic">con nosotros?</span>
          </>
        }
        subtitle={null}
      />
    </div>
  );
}

