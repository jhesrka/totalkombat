"use client";

import React, { useState } from "react";
import { User, Users, Trophy, ChevronRight, CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

export default function QuickWhatsAppForm() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola TOTAL KOMBAT, solicito información sobre sus planes de entrenamiento.%0A• *Nombre:* ${
      nombre || "Interesado"
    }%0A• *Edad:* ${edad || "No especificada"}%0A• *Disciplina:* ${
      disciplina || "Taekwondo / Sambo"
    }`;
    window.open(`https://wa.me/593987654321?text=${texto}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-3.5 flex items-center justify-center lg:justify-start gap-2.5">
        <CalendarCheck className="h-6 w-6 text-[#F3C652]" />
        <h3 className="font-display-italic text-[20px] sm:text-[23px] text-white">
          Solicita información ahora
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-4">
        {/* 1. Nombre completo */}
        <div className="sm:col-span-5 relative flex items-center rounded-xl bg-white px-3.5 py-2.5 text-[#111216] shadow-inner border border-gray-300 focus-within:ring-2 focus-within:ring-[#E5B842]">
          <User className="h-4 w-4 text-gray-700 mr-2 shrink-0" />
          <input
            type="text"
            required
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full bg-transparent text-[13.5px] font-medium text-[#111216] placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* 2. Edad */}
        <div className="sm:col-span-3 relative flex items-center rounded-xl bg-white px-3.5 py-2.5 text-[#111216] shadow-inner border border-gray-300 focus-within:ring-2 focus-within:ring-[#E5B842]">
          <Users className="h-4 w-4 text-gray-700 mr-2 shrink-0" />
          <input
            type="number"
            min={3}
            max={99}
            required
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full bg-transparent text-[13.5px] font-medium text-[#111216] placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* 3. Disciplina de interés */}
        <div className="sm:col-span-4 relative flex items-center rounded-xl bg-white px-3.5 py-2.5 text-[#111216] shadow-inner border border-gray-300 focus-within:ring-2 focus-within:ring-[#E5B842]">
          <Trophy className="h-4 w-4 text-gray-700 mr-2 shrink-0" />
          <select
            required
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
            className="w-full bg-transparent text-[13.5px] font-medium text-[#111216] focus:outline-none cursor-pointer"
          >
            <option value="" disabled>
              Disciplina de interés
            </option>
            <option value="Taekwondo">Taekwondo</option>
            <option value="Sambo">Sambo</option>
            <option value="Taekwondo y Sambo">Ambas disciplinas</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center lg:justify-center">
        <button
          type="submit"
          className="btn-kombat-red inline-flex items-center gap-3 rounded-full px-8 py-3 text-[15px] sm:text-[16px] font-extrabold text-white shadow-red-glow"
        >
          <WhatsAppIcon className="h-5 w-5 text-white" />
          <span>Enviar por WhatsApp</span>
          <ChevronRight className="h-5 w-5 stroke-[3]" />
        </button>
      </div>
    </form>
  );
}

