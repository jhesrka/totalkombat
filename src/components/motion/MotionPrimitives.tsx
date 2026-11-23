"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  DURATION,
  EASE_CINEMATIC,
  VIEWPORT_ONCE,
  fadeUpVariant,
  scaleRevealVariant,
  slideLeftVariant,
  slideRightVariant,
} from "@/lib/motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[70] h-[2.5px] origin-left bg-gradient-to-r from-[#E51C23] via-[#F5C74E] to-[#E51C23] shadow-[0_0_8px_rgba(245,199,78,0.65)] pointer-events-none"
    />
  );
}

type RevealDirection = "up" | "left" | "right" | "scale";

const VARIANT_BY_DIRECTION = {
  up: fadeUpVariant,
  left: slideLeftVariant,
  right: slideRightVariant,
  scale: scaleRevealVariant,
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = DURATION.base,
  className = "",
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={VARIANT_BY_DIRECTION[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{
        duration,
        delay,
        ease: EASE_CINEMATIC,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({
  children,
  offset = [12, -12],
  className = "",
}: {
  children: React.ReactNode;
  offset?: [number, number];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], offset);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
