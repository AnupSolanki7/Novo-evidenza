import Image from "next/image";
import React from "react";
import { title } from "./primitives";
import Card from "./Card";
import { SERVICES } from "@/utils/Constant";
import MotionDiv from "./MotionDiv";
import MotionCard from "./MotionCard";

const OurServices = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6066a36d593d3ecd83e3efe1_2-layers.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex h-max min-h-[95vh] text-center md:text-left flex-col  my-auto mx-auto items-center justify-center gap-4"
    >
      <div className=" my-8  px-6  w-full">
        <MotionDiv className="w-full mt-4 flex flex-col text-center justify-center items-center">
          <p className="font-bold text-3xl lg:text-5xl mb-8 text-white">Our Services</p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-white  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            We offer a comprehensive suite of services designed to meet the diverse needs of the pharmaceutical industry
          </h2>
          
        </MotionDiv>
        <div className="px-6 grid grid-cols-1  lg:grid-cols-3 gap-4 justify-between mt-8 h-full items-center max-w-[1220px] mx-auto">
          {SERVICES.map((item) => (
            <MotionCard key={item.id}>
              <Card item={item} />
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
