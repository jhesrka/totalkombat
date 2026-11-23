import type { Transition, Variants } from "framer-motion";

export const EASE_CINEMATIC: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.25,
  base: 0.55,
  slow: 0.7,
} as const;

export const SPRING_HOVER: Transition = {
  type: "spring",
  stiffness: 340,
  damping: 24,
};

export const SPRING_PILL: Transition = {
  type: "spring",
  stiffness: 360,
  damping: 28,
};

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.2,
} as const;

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const slideLeftVariant: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const slideRightVariant: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const scaleRevealVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export const staggerContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
