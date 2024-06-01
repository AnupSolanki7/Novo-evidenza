import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CardItem = ({ item }: { item: any }) => {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5 // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-start md:justify-start gap-2 md:gap-4"
      ref={ref}
    >
      <span className="w-full text-6xl flex justify-center items-center md:w-[20%] [&>*]:fill-white [&>*]:[&>*]:fill-white ">
        <item.icon />
      </span>
      <div className="flex justify-center md:items-start items-center w-full md:w-[80%] flex-col">
        <p className="text-4xl font-bold">
          {visible && <CountUp end={item.number} />}+
        </p>
        <p >{item.title}</p>
      </div>
    </div>
  );
};

export default CardItem;
