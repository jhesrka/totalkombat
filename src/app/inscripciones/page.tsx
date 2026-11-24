import React from "react";
import type { Metadata } from "next";
import InscripcionesHeroSection from "@/components/InscripcionesHeroSection";
import ComoInscribirteSection from "@/components/ComoInscribirteSection";
import FormularioInscripcionSection from "@/components/FormularioInscripcionSection";
import BeneficiosInscribirteSection from "@/components/BeneficiosInscribirteSection";
import PorQueElegirSection from "@/components/PorQueElegirSection";

export const metadata: Metadata = {
  title: "Inscripciones | Haz Parte de TOTAL KOMBAT en Quito",
  description:
    "Inicia tu formación en Taekwondo y Sambo con un proceso de inscripción rápido, claro y seguro. Completa el formulario de 3 pasos y confirma tu cupo por WhatsApp.",
  alternates: { canonical: "/inscripciones" },
  openGraph: {
    title: "Inscripciones | TOTAL KOMBAT Martial Arts Club",
    description:
      "Completa tu pre-inscripción en Taekwondo o Sambo en solo 3 pasos y confirma tu cupo por WhatsApp.",
    url: "https://totalkombat.vercel.app/inscripciones",
    images: [{ url: "/logo-og.png", width: 384, height: 150, alt: "TOTAL KOMBAT Logo Oficial" }],
  },
};

export default function InscripcionesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ==================== 1. HERO INSCRIPCIONES ==================== */}
      <InscripcionesHeroSection />

      {/* ==================== 2. ¿CÓMO INSCRIBIRTE? ==================== */}
      <ComoInscribirteSection />

      {/* ==================== 3. FORMULARIO DE INSCRIPCIÓN ==================== */}
      <FormularioInscripcionSection />

      {/* ==================== 4. BENEFICIOS DE INSCRIBIRTE ==================== */}
      <BeneficiosInscribirteSection />

      {/* ==================== 5. ¿POR QUÉ ELEGIR TOTAL KOMBAT? ==================== */}
      <PorQueElegirSection />
    </div>
  );
}
