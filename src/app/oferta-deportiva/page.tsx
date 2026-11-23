import React from "react";
import type { Metadata } from "next";
import CtaEmpiezaHoySection from "@/components/CtaEmpiezaHoySection";
import OfertaHeroSection from "@/components/OfertaHeroSection";
import ConoceDisciplinasSection from "@/components/ConoceDisciplinasSection";
import ModalidadesCategoriasSection from "@/components/ModalidadesCategoriasSection";
import CualEsParaTiSection from "@/components/CualEsParaTiSection";
import PlanesPreciosSection from "@/components/PlanesPreciosSection";

export const metadata: Metadata = {
  title: "Oferta Deportiva | Taekwondo, Sambo, Categorías y Planes",
  description:
    "Conoce nuestras disciplinas de alto nivel: Taekwondo y Sambo en Quito. Modalidades para niños, jóvenes y adultos, formación básica, avanzada y planes mensuales.",
};

export default function OfertaDeportivaPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ==================== 1. HERO OFERTA DEPORTIVA ==================== */}
      <OfertaHeroSection />

      {/* ==================== 2. CONOCE NUESTRAS DISCIPLINAS ==================== */}
      <ConoceDisciplinasSection />

      {/* ==================== 3. MODALIDADES Y CATEGORÍAS ==================== */}
      <ModalidadesCategoriasSection />

      {/* ==================== 4. ¿CUÁL ES PARA TI? ==================== */}
      <CualEsParaTiSection />

      {/* ==================== 5. PLANES Y PRECIOS ==================== */}
      <PlanesPreciosSection />

      {/* ==================== 6. SOLICITA TU INSCRIPCIÓN ==================== */}
      <CtaEmpiezaHoySection
        title={
          <>
            <span className="block text-white">¿Listo para</span>
            <span className="block text-white">entrenar con</span>
            <span className="block text-gold-metallic">nosotros?</span>
          </>
        }
        subtitle={null}
      />
    </div>
  );
}

