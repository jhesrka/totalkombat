"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/MotionPrimitives";
import { SPRING_HOVER } from "@/lib/motion";

export default function PorQueElegirSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 lg:py-12 bg-[#09090D] overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/imagenes/fondodisiplina.webp')",
          }}
          className="absolute -top-[8%] -bottom-[8%] -left-[2%] -right-[2%] bg-cover bg-center bg-no-repeat will-change-transform"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Left Copy */}
          <Reveal direction="left" className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
              <span className="slash-red h-10 w-3.5" />
              <h2 className="font-display-italic leading-[0.98]">
                <span className="block text-[25px] sm:text-[30px] text-white">
                  ¿Por qué elegir
                </span>
                <span className="block text-[29px] sm:text-[34px] text-gold-metallic uppercase">
                  TOTAL KOMBAT?
                </span>
              </h2>
            </div>

            <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-200 font-medium">
              Porque combinamos formación deportiva, valores, disciplina y
              proyección competitiva en un ambiente seguro, respetuoso y
              profesional.
            </p>
          </Reveal>

          {/* Right Framed Dojang Photo */}
          <Reveal direction="right" delay={0.1} className="lg:col-span-7 flex justify-center lg:justify-end">
            <motion.div
              style={{ y: photoY }}
              whileHover={{ scale: 1.02 }}
              transition={SPRING_HOVER}
              className="will-change-transform"
            >
              <img
                src="/imagenes/nosotros1.webp"
                alt="Gimnasio y Dojang Oficial TOTAL KOMBAT"
                width={640}
                height={427}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[640px] h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
