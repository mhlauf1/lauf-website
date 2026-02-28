"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
  threshold = 0.2,
}: StaggerChildrenProps) {
  const variants = staggerDelay !== 0.08
    ? {
        ...containerVariants,
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }
    : containerVariants;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
