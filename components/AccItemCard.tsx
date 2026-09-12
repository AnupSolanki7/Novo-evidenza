"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CardItem = ({ item }: { item: any }) => {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex h-full flex-col items-center gap-4 px-6 py-9 text-center transition-colors duration-300 hover:bg-white/[0.04] sm:items-start sm:text-left"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 [&>*]:h-6 [&>*]:w-6 [&>*]:fill-sky-300 [&>*]:[&>*]:fill-sky-300">
        <item.icon />
      </span>
      <div>
        <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {visible && <CountUp end={item.number} />}+
        </p>
        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
