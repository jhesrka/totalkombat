"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Target, Users, Award, TrendingUp } from "lucide-react";
import { CornerRibbons } from "@/components/Icons";
import { Reveal, ParallaxLayer } from "@/components/motion/MotionPrimitives";
import { EASE_CINEMATIC, SPRING_HOVER, VIEWPORT_ONCE } from "@/lib/motion";

const BENEFICIOS = [
  {
    icon: <Flame className="h-8 w-8 text-[#D4951A] stroke-[2.2]" />,
    title: "Desarrollo",
    sub: "Físico y Mental",
  },
  {
    icon: <Target className="h-8 w-8 text-[#D4951A] stroke-[2.2]" />,
    title: "Disciplina",
    sub: "y Autocontrol",
  },
  {
    icon: <Users className="h-8 w-8 text-[#D4951A] stroke-[2.2]" />,
    title: "Trabajo",
    sub: "en Equipo",
  },
  {
    icon: <Award className="h-8 w-8 text-[#D4951A] stroke-[2.2]" />,
    title: "Participación",
    sub: "en Competencias",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#D4951A] stroke-[2.2]" />,
    title: "Crecimiento",
    sub: "Deportivo",
  },
];

export default function BeneficiosInscribirteSection() {
  return (
    <section className="bg-light-section relative py-10 lg:py-11 overflow-hidden border-b border-gray-300">
      <CornerRibbons />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <Reveal direction="up" className="mb-7 flex items-center justify-center gap-2.5">
          <span className="slash-red-sm" />
          <h2 className="font-display-italic text-[25px] sm:text-[31px]">
            <span className="text-[#111216]">Beneficios de </span>
            <span className="text-[#C81018]">Inscribirte</span>
          </h2>
        </Reveal>

        <ParallaxLayer offset={[10, -10]}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1100px] mx-auto">
            {BENEFICIOS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: EASE_CINEMATIC,
                }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="card-light-gold rounded-xl skew-box px-3 py-4 flex flex-col items-center justify-center text-center min-h-[112px] transition-[border-color,box-shadow] duration-300 group-hover:border-[#D4951A] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.12),0_0_16px_rgba(229,184,66,0.28)]">
                  <div className="unskew-box flex flex-col items-center">
                    <div className="mb-1.5 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="text-[13px] sm:text-[14px] font-extrabold text-[#111216] leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[12.5px] sm:text-[13.5px] font-semibold text-gray-800 leading-tight">
                      {item.sub}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ParallaxLayer>
      </div>
    </section>
  );
}
