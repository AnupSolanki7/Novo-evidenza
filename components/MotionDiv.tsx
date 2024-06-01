"use client"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";
import clsx from "clsx";

const MotionDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();
  const { ref, inView }: any = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 });
    } else {
      controls.start({
        opacity: 0,
        translateY: window.scrollY > ref.current?.offsetTop ? -100 : 100,
      });
    }
  }, [inView, controls, ref]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 150 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className={clsx(className, "font-poppins")}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
