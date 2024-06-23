'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const GrowFromDot = ({
  children,
  className,
  style,
  bounce = false
}: {
  children: React.ReactNode;
  className?: string;
  style?: any;
  bounce?: boolean;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={bounce ? {} : { opacity: 0, translate: 0 }}
      animate={
        bounce
          ? { y: [0, -10, 0] }
          : inView
          ? { opacity: 1, translate: 1 }
          : { opacity: 0, translate: 0 }
      }
      transition={
        bounce
          ? { duration: 1, ease: "easeInOut", repeat: Infinity }
          : { duration: 0.5, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default GrowFromDot;
