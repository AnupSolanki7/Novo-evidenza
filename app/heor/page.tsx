"use client";

import CardItem from "@/components/AccItemCard";
import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import Page from "@/components/page";
import { title } from "@/components/primitives";
import { ACHEIVEMENTS } from "@/utils/Constant";
import clsx from "clsx";
import React from "react";

const page = () => {
  return (
    <Page
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-[100px] h-screen"
    >
        <div className="w-full bg-danger-500 py-8 " >
      <h1 className="text-5xl w-full text-center font-extrabold text-white">
        Health Economics & Outcomes Research
      </h1>
        </div>
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <p className="md:text-xl text-md text-danger-500 font-semibold mb-4">HEOR SERVICES</p>
        <h2
          className={title({
            size: "sm",
            className:
              "text-[#333091]  font-bold text-center text-2xl leading-[28px] md:!text-3xl md:!leading-[35px] ",
          })}
        >
          Providing Innovative Solutions and Services Across All HEOR & RWE
          Domains
        </h2>
      </MotionDiv>
      <div className="px-6 grid sticky pt-6 py-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-12 md:gap-4 justify-between h-max items-center max-w-[1220px] mx-auto">
        {ACHEIVEMENTS.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx(
              index < 3 && "border-r-none md:border-r-1",
              "h-max md:h-[80px]"
            )}
          >
            <CardItem item={item} />
          </MotionCard>
        ))}
      </div>
    </Page>
  );
};

export default page;
