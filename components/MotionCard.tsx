'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const GrowFromDot = ({
  children,
  className,
  style
}: {
  children: React.ReactNode;
  className?: string;
  style?:any
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default GrowFromDot;
