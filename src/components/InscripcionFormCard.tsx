"use client";

import React, { useState } from "react";
import {
  ClipboardCheck,
  User,
  Calendar,
  GraduationCap,
  ChevronRight,
  Loader2,
  Check,
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

interface InscripcionFormCardProps {
  defaultDisciplina?: string;
  defaultPlan?: string;
  onSubmitted?: () => void;
}

export default function InscripcionFormCard({
  defaultDisciplina = "",
  defaultPlan = "",
  onSubmitted,
}: InscripcionFormCardProps) {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [disciplina, setDisciplina] = useState(defaultDisciplina);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const planLine = defaultPlan ? `%0A4. *Plan de interés:* ${defaultPlan}` : "";
    const msg = `Hola TOTAL KOMBAT, quiero realizar mi pre-inscripción:%0A%0A1. *Nombre completo:* ${nombre}%0A2. *Edad:* ${edad} años%0A3. *Disciplina de interés:* ${disciplina}${planLine}%0A%0AQuedo atento(a) para confirmar mi cupo y horario.`;

    setTimeout(() => {
      window.open(`https://wa.me/593987654321?text=${msg}`, "_blank");
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        onSubmitted?.();
      }, 900);
    }, 420);
  };

  return (
    <div className="relative rounded-2xl border-[2.5px] border-[#F3C652] bg-gradient-to-b from-white via-[#F9FAFB] to-[#EFF1F5] p-6 sm:p-7 text-[#111216] shadow-[0_0_38px_rgba(243,198,82,0.62)] overflow-hidden">
      {/* Top-Right Red Corner Ribbon */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-gradient-to-b from-[#FF2A32] to-[#9E050B] border-b border-[#F3C652]/75 shadow-md" />

      {/* Form Header */}
      <div className="mb-5 text-center">
        <div className="inline-flex items-center justify-center gap-2.5 mb-1">
          <ClipboardCheck className="h-8 w-8 text-[#C81018] stroke-[2.2]" />
          <h3 className="font-display-italic text-[26px] sm:text-[30px] leading-none">
            <span className="text-[#111216]">Inscríbete </span>
            <span className="text-[#C81018]">Ahora</span>
          </h3>
        </div>
        <p className="text-[13px] sm:text-[13.5px] font-medium text-gray-700 leading-tight">
          Completa el siguiente formulario
          <br />
          <span className="font-semibold text-gray-800">(solo 3 preguntas)</span>
        </p>
        {defaultPlan && (
          <span className="mt-2 inline-block rounded-full border border-[#D4951A]/50 bg-[#FFF8E1] px-3 py-0.5 text-[11.5px] font-bold text-[#9C6408]">
            Plan seleccionado: {defaultPlan}
          </span>
        )}
      </div>

      {/* 4 Questions Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* 1. Nombre completo */}
        <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm focus-within:border-[#D4951A] focus-within:ring-2 focus-within:ring-[#F3C652]/50">
          <User className="h-4 w-4 text-gray-800 mr-2.5 shrink-0" />
          <input
            type="text"
            required
            placeholder="1. Nombre completo *"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full bg-transparent text-[13.5px] sm:text-[14px] font-medium text-[#111216] placeholder-gray-700 focus:outline-none"
          />
        </div>

        {/* 2. Edad */}
        <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm focus-within:border-[#D4951A] focus-within:ring-2 focus-within:ring-[#F3C652]/50">
          <Calendar className="h-4 w-4 text-gray-800 mr-2.5 shrink-0" />
          <input
            type="number"
            min={3}
            max={99}
            required
            placeholder="2. Edad *"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full bg-transparent text-[13.5px] sm:text-[14px] font-medium text-[#111216] placeholder-gray-700 focus:outline-none"
          />
        </div>

        {/* 3. Disciplina de interés */}
        <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm focus-within:border-[#D4951A] focus-within:ring-2 focus-within:ring-[#F3C652]/50">
          <GraduationCap className="h-4 w-4 text-gray-800 mr-2.5 shrink-0" />
          <select
            required
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
            className="w-full bg-transparent text-[13.5px] sm:text-[14px] font-medium text-[#111216] focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              3. Disciplina de interés *
            </option>
            <option value="Taekwondo">Taekwondo</option>
            <option value="Sambo">Sambo</option>
            <option value="Taekwondo y Sambo">Ambas (Taekwondo y Sambo)</option>
          </select>
        </div>

        {/* Submit Button with Loading & Sent Feedback */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-kombat-red flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-white shadow-red-glow transition-opacity duration-200 disabled:opacity-85 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin text-white shrink-0" />
                <span className="text-center font-bold text-[15px] sm:text-[16px] leading-tight">
                  Preparando pre-inscripción...
                </span>
              </>
            ) : status === "sent" ? (
              <>
                <Check className="h-6 w-6 text-[#FFE58F] stroke-[3] shrink-0" />
                <span className="text-center font-bold text-[15px] sm:text-[16px] leading-tight">
                  ¡Listo! Abriendo WhatsApp
                </span>
              </>
            ) : (
              <>
                <WhatsAppIcon className="h-7 w-7 text-white shrink-0" />
                <span className="text-center font-bold text-[15px] sm:text-[16.5px] leading-tight">
                  Enviar Pre-Inscripción
                </span>
                <ChevronRight className="h-6 w-6 stroke-[3] shrink-0" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

