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
      className="flex flex-col md:flex-row justify-center items-center md:items-start gap-2 md:gap-4"
      ref={ref}
    >
      <span className="text-6xl flex justify-center items-center [&>*]:fill-white [&>*]:[&>*]:fill-white ">
        <item.icon />
      </span>
      <div className="flex justify-center md:items-start items-center flex-col">
        <p className="text-4xl font-bold">
          {visible && <CountUp end={item.number} />}+
        </p>
        <p className="whitespace-normal break-words">{item.title}</p>
      </div>
    </div>
  );
};

export default CardItem;
