"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function TransparenciaSection() {
  const uid = useId().replace(/:/g, "_");
  const goldGradId = `transpGold-${uid}`;

  const documentos: { title: string; pdfUrl?: string; downloadName?: string }[] = [
    { title: "Estatutos\ndel Club" },
    { title: "Reglamento\nInterno" },
    { title: "Documentos\nLegales" },
    { title: "Resoluciones" },
    {
      title: "Registro de\nDirectorio",
      pdfUrl: "/documentos/REGISTRO%20DIRECTORIO%20CLUB%202024.pdf",
      downloadName: "REGISTRO DIRECTORIO CLUB 2024.pdf",
    },
    { title: "Otros\nDocumentos" },
  ];

  return (
    <section
      id="transparencia"
      className="relative py-7 lg:py-9 bg-[#08080B] bg-cover bg-center bg-no-repeat overflow-hidden select-none"
      style={{ backgroundImage: "url('/imagenes/fondodisiplina.webp')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      {/* Gradiente dorado compartido para íconos */}
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF6C4" />
            <stop offset="40%" stopColor="#F5C74E" />
            <stop offset="80%" stopColor="#D48B16" />
            <stop offset="100%" stopColor="#9C5D06" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-7 lg:gap-8">
          {/* Left Description (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3.5 mb-2.5">
              {/* Ícono dorado 3D de carpeta/documento sin caja bordeada (idéntico a referencia) */}
              <svg
                viewBox="0 0 56 56"
                className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 drop-shadow-[0_2px_10px_rgba(245,199,78,0.4)]"
                fill="none"
              >
                <path
                  d="M8 14 C8 11 10 9 13 9 H23 L27 14 H44 C47 14 49 16 49 19 V43 C49 46 47 48 44 48 H13 C10 48 8 46 8 43 V14 Z"
                  stroke={`url(#${goldGradId})`}
                  strokeWidth="3.2"
                  fill="rgba(245, 199, 78, 0.08)"
                />
                <path
                  d="M17 18 H34 L41 25 V41 H17 V18 Z"
                  fill="#0A090C"
                  stroke={`url(#${goldGradId})`}
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 18 V25 H41"
                  stroke={`url(#${goldGradId})`}
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 28 H35 M22 33 H35 M22 38 H30"
                  stroke={`url(#${goldGradId})`}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>

              <h2 className="font-display-italic leading-[0.96]">
                <span className="block text-[25px] sm:text-[28px] text-white">
                  Transparencia
                </span>
                <span className="block text-[27px] sm:text-[31px] text-gold-metallic">
                  Institucional
                </span>
              </h2>
            </div>

            <p className="text-[13.5px] sm:text-[14px] leading-snug text-gray-200 max-w-[360px]">
              Creemos en una gestión clara, ordenada y responsable. Aquí puedes
              consultar y descargar la documentación oficial del club.
            </p>
          </motion.div>

          {/* Right 6 Document Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 pb-4 md:pb-3">
            {documentos.map((doc, idx) => (
              <motion.a
                key={idx}
                href={
                  doc.pdfUrl ??
                  `https://wa.me/593987654321?text=${encodeURIComponent(
                    `Hola TOTAL KOMBAT, solicito consultar el documento institucional: ${doc.title.replace("\n", " ")}`
                  )}`
                }
                download={doc.downloadName}
                target={doc.pdfUrl ? undefined : "_blank"}
                rel={doc.pdfUrl ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col items-center justify-start rounded-lg border border-[#E5B842]/75 bg-gradient-to-b from-[#17161B] via-[#0E0E12] to-[#08080A] px-2.5 pt-4 pb-7 text-center min-h-[138px] shadow-[0_6px_18px_rgba(0,0,0,0.45),inset_0_0_12px_rgba(229,184,66,0.08)] transition-all duration-300 hover:border-[#FFE58F] hover:shadow-[0_8px_24px_rgba(229,184,66,0.28)] will-change-transform"
              >
                {/* Ícono de documento dorado */}
                <svg
                  viewBox="0 0 44 50"
                  className="h-10 w-9 sm:h-11 sm:w-10 mb-2.5 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(245,199,78,0.35)]"
                  fill="none"
                >
                  <path
                    d="M8 5 H28 L37 14 V43 C37 44.5 35.5 46 34 46 H8 C6.5 46 5 44.5 5 43 V8 C5 6.5 6.5 5 8 5 Z"
                    stroke={`url(#${goldGradId})`}
                    strokeWidth="2.8"
                    fill="rgba(245, 199, 78, 0.08)"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27 5 V14 H37"
                    stroke={`url(#${goldGradId})`}
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 21 H29 M12 28 H29 M12 35 H23"
                    stroke={`url(#${goldGradId})`}
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="whitespace-pre-line text-[12.5px] sm:text-[13px] font-bold leading-tight text-white">
                  {doc.title}
                </span>

                {/* Botón circular rojo montado sobre el borde inferior */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-b from-[#E51C23] via-[#C40C14] to-[#8A0409] text-white border border-[#FF6B70]/45 shadow-[0_4px_12px_rgba(220,20,28,0.75)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(255,40,50,0.95)]">
                  <ArrowDown className="h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[2.8]" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
