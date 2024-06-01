"use client"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";
import clsx from "clsx";

const MotionDiv = ({
  children,
  className,
  initialOpacity = 0,
  initialTranslateY = 150,
  animateOpacity = 1,
  animateTranslateY = 0,
  transitionDuration = 1,
  transitionEase = "easeOut",
  triggerOnce = false,
}: {
  children: React.ReactNode;
  className?: string;
  initialOpacity?: number;
  initialTranslateY?: number;
  animateOpacity?: number;
  animateTranslateY?: number;
  transitionDuration?: number;
  transitionEase?: string;
  triggerOnce?: boolean;
}) => {
  const controls = useAnimation();
  const { ref, inView }: any = useInView({ triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: animateOpacity,
        translateY: animateTranslateY,
      });
    } else {
      controls.start({
        opacity: initialOpacity,
        translateY: initialTranslateY,
      });
    }
  }, [inView, controls, initialOpacity, initialTranslateY, animateOpacity, animateTranslateY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: initialOpacity, translateY: initialTranslateY }}
      animate={controls}
      transition={{ duration: transitionDuration, ease: transitionEase }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
