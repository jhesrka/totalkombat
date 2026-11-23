"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 35,
  once = true,
  amount = 0.2,
  className = "",
  ...props
}: ScrollRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "zoom":
        return { opacity: 0, scale: 0.92 };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "zoom":
        return { opacity: 1, scale: 1 };
      case "none":
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Kinematic premium curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

