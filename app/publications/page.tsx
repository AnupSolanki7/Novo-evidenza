"use client";

import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";
import { title } from "@/components/primitives";
import clsx from "clsx";
import MotionCard from "@/components/MotionCard";
import { PUBLICATIONS } from "@/utils/Constant";
import { Link } from "@nextui-org/link";
import { FaFilePdf } from "react-icons/fa";

const Page = () => {
  return (
    <Pages
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-[100px] h-max min-h-screen"
    >
      <div className="w-full bg-danger-500 py-8 ">
        <h1 className="text-5xl w-full text-center font-extrabold text-white">
          PUBLICATIONS
        </h1>
      </div>
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <p className="md:text-xl text-md text-danger-500 font-semibold mb-4">
          Publications
        </p>
        <h2
          className={title({
            size: "sm",
            className:
              "text-[#333091]  font-bold text-center text-2xl leading-[28px] md:!text-3xl md:!leading-[35px] ",
          })}
        >
          Research Publications in which our contribution was acknowledged
        </h2>
      </MotionDiv>
      <div className="px-6 flex flex-col md:gap-6 mb-20 justify-between h-max items-center max-w-[1220px] mx-auto">
        {PUBLICATIONS.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx(
              index < 3 && "border-r-none md:border-r-1 w-full",
              "mx-[15%] sm:mx-0 h-max"
            )}
          >
            <Link href={item.file} target="_blank">
              <div
                className={clsx(
                  "hover:bg-[#333091] [&>h3]:hover:text-white  [&>*]:[&>*]:hover:bg-danger-500 [&>button]:hover:bg-danger-500 cursor-pointer  transition-all ease-in-out rounded-[30px] [&>*]:[&>*]:hover:fill-white [&>p]:hover:text-gray-200 bg-white flex justify-start items-center gap-4 flex-col p-6"
                )}
              >
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-danger-500 text-left w-full font-semibold text-xs">
                  {item.subtitle}
                </p>
                <div className="w-full flex justify-start">
                  <span className="px-4 bg-[#333091] text-white py-2 border-2 rounded-full w-[150px] gap-2 flex justify-center items-center  ">
                  <FaFilePdf />  Download
                  </span>
                </div>
              </div>
            </Link>
          </MotionCard>
        ))}
      </div>
    </Pages>
  );
};

export default Page;
