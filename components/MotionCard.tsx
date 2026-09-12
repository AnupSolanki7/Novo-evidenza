"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Card reveal: a short rise with a barely-perceptible scale settle.
 * `bounce` keeps the original floating treatment used on hero imagery.
 * `delay` lets a grid stagger its children.
 */
const MotionCard = ({
  children,
  className,
  style,
  bounce = false,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: any;
  bounce?: boolean;
  delay?: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-40px 0px" });

  if (bounce) {
    return (
      <motion.div
        ref={ref}
        style={style}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: [24, -6, 0] } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 22, scale: 0.985 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 22, scale: 0.985 }
      }
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
