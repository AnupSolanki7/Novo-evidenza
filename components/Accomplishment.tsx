import React from "react";
import MotionDiv from "./MotionDiv";
import { title } from "./primitives";
import { ACHEIVEMENTS, SERVICES } from "@/utils/Constant";
import MotionCard from "./MotionCard";
import clsx from "clsx";
import CardItem from "./AccItemCard";

const Accomplishment = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://marksmanhealthcare.com/wp-content/uploads/2021/05/funfact-1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-max md:h-[60vh] relative text-white"
    >
      <div className="absolute inset-0 bg-[#06194b] opacity-90 "></div>
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <p className="md:text-xl text-md text-white mb-4">ACCOMPLISHMENTS</p>
        <h2
          className={title({
            size: "sm",
            className:
              "text-white  font-bold text-center text-2xl leading-[28px] md:!text-3xl md:!leading-[35px] ",
          })}
        >
          Adding Value to HEOR Evidence Generation
        </h2>
      </MotionDiv>
      <div className="px-6 grid sticky pt-6 py-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-12 md:gap-4 justify-between h-max items-center max-w-[1220px] mx-auto">
        {ACHEIVEMENTS.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx(index < 3 && "border-r-none md:border-r-1", "h-max md:h-[80px]")}
          >
            <CardItem item={item} />
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

export default Accomplishment;
