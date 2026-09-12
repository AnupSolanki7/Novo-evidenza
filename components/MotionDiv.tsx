"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import clsx from "clsx";

/** Editorial easing — a soft decelerate that reads as deliberate, not bouncy. */
const EASE = [0.22, 1, 0.36, 1] as const;

const MotionDiv = ({
  children,
  className,
  initialOpacity = 0,
  initialTranslateY = 28,
  animateOpacity = 1,
  animateTranslateY = 0,
  transitionDuration = 0.7,
  delay = 0,
  triggerOnce = true,
}: {
  children: React.ReactNode;
  className?: string;
  initialOpacity?: number;
  initialTranslateY?: number;
  animateOpacity?: number;
  animateTranslateY?: number;
  transitionDuration?: number;
  transitionEase?: string;
  delay?: number;
  triggerOnce?: boolean;
}) => {
  const { ref, inView } = useInView({ triggerOnce, rootMargin: "-60px 0px" });

  // Long legacy offsets (the old default was 150px) read as a lurch on a
  // marketing page — clamp anything oversized down to a calm rise.
  const offset = Math.min(initialTranslateY, 40);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: initialOpacity, y: offset }}
      animate={
        inView
          ? { opacity: animateOpacity, y: animateTranslateY }
          : { opacity: initialOpacity, y: offset }
      }
      transition={{ duration: transitionDuration, ease: EASE, delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
