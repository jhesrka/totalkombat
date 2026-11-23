"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Settings, Users, TrendingUp } from "lucide-react";
import { CornerRibbons } from "@/components/Icons";

const METODOLOGIA_ITEMS = [
  {
    icon: <Settings className="h-7 w-7 text-[#F5C74E] stroke-[1.9]" />,
    title: "Proceso por niveles",
    desc: "De principiante a competitivo.",
  },
  {
    icon: <Users className="h-7 w-7 text-[#F5C74E] stroke-[1.9]" />,
    title: "Entrenamiento guiado",
    desc: "Por instructores certificados.",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-[#F5C74E] stroke-[1.9]" />,
    title: "Evaluación y progreso",
    desc: "Seguimiento continuo del rendimiento.",
  },
];

export default function MetodologiaFormacionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const textY = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section
      ref={sectionRef}
      className="bg-light-section relative py-6 lg:py-5 overflow-hidden border-b border-gray-300"
    >
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          {/* Left Copy (4 cols) */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left will-change-transform"
          >
            <div className="flex items-start justify-center lg:justify-start gap-2.5 mb-3">
              <span className="slash-red mt-1 h-8 w-3 shrink-0" />
              <h2 className="font-display-italic leading-[0.95] tracking-tight">
                <span className="block text-[29px] sm:text-[35px] text-[#111216]">
                  Metodología
                </span>
                <span className="block text-[29px] sm:text-[35px]">
                  <span className="text-[#111216]">de </span>
                  <span className="text-[#C81018]">Formación</span>
                </span>
              </h2>
            </div>

            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.42] text-[#1D1F26] font-medium max-w-[335px]">
              Un modelo de enseñanza progresivo, seguro y estructurado, que
              combina la técnica, la preparación física, los valores y la
              competencia deportiva.
            </p>
          </motion.div>

          {/* Center Parallelogram Framed Image 4:3 (4 cols) */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center justify-center py-1 lg:px-2 will-change-transform"
          >
            <div className="group relative w-full max-w-[330px] aspect-[4/3] -skew-x-[15deg] overflow-hidden rounded-[18px] border-[1.5px] border-[#E5B842] bg-[#0B0C10] shadow-[0_12px_28px_rgba(0,0,0,0.32),0_0_16px_rgba(229,184,66,0.22)] transition-all duration-300 hover:border-[#FFE17D] hover:shadow-[0_16px_34px_rgba(0,0,0,0.42),0_0_24px_rgba(245,199,78,0.38)]">
              <img
                src="/imagenes/oferta.webp"
                alt="Cinturón negro TK - Metodología de Formación"
                className="h-full w-full skew-x-[15deg] scale-x-[1.14] scale-y-[1.01] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-x-[1.17] group-hover:scale-y-[1.04]"
              />
            </div>
          </motion.div>

          {/* Right 3 Items (4 cols) */}
          <div className="lg:col-span-4 lg:pl-4 flex flex-col">
            {METODOLOGIA_ITEMS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex items-center gap-4 py-3 first:pt-1 last:pb-1"
              >
                {/* Gold divider line below except last */}
                {idx < METODOLOGIA_ITEMS.length - 1 && (
                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#D4A438]/75 via-[#E5B842]/45 to-transparent" />
                )}

                <div className="relative flex h-[52px] w-[58px] shrink-0 items-center justify-center -skew-x-[12deg] rounded-[12px] border border-[#D4A438]/80 bg-gradient-to-b from-[#1B1D24] to-[#0B0C10] shadow-[0_6px_14px_rgba(0,0,0,0.38),0_0_12px_rgba(229,184,66,0.2)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#F5C74E] group-hover:shadow-[0_8px_18px_rgba(0,0,0,0.45),0_0_18px_rgba(245,199,78,0.4)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_at_center,rgba(245,199,78,0.16),transparent_70%)]" />
                  <div className="relative z-10 skew-x-[12deg] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h3 className="font-display-italic text-[16px] sm:text-[17px] text-[#111216] leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13.5px] text-[#2B2E36] font-medium leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
