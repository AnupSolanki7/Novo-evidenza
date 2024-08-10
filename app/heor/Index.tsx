"use client";

import { IoIosCheckmarkCircle } from "react-icons/io";
import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { button as buttonStyles } from "@nextui-org/theme";
import Pages from "@/components/page";
import { title } from "@/components/primitives";
import { HEORLIST } from "@/utils/Constant";
import clsx from "clsx";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

const Page = () => {
  const [selected, setSelected] = useState<any>(HEORLIST[0]);

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
          Health Economics & Outcomes Research
        </h1>
      </div>
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <p className="md:text-xl text-md text-danger-500 font-semibold mb-4">
          HEOR SERVICES
        </p>
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
      <div className="px-6 grid sticky pt-6 py-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-12 md:gap-6 justify-between h-max items-center max-w-[1220px] mx-auto">
        {HEORLIST.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx(
              index < 3 && "border-r-none md:border-r-1",
              "mx-[15%] sm:mx-0 h-max"
            )}
          >
            <div
                role="presentation"
              onClick={() => setSelected(item)}
              className={clsx(
                "min-h-[200px] h-[40%] hover:bg-[#333091] [&>h3]:hover:text-white [&>button]:hover:text-white [&>button]:hover:bg-danger-500 cursor-pointer  transition-all ease-in-out rounded-[30px] [&>*]:[&>*]:hover:fill-white [&>p]:hover:text-gray-200 bg-white flex justify-start items-center gap-4 flex-col p-8",
                selected.id === item.id &&
                  "!bg-[#333091] [&>p]:text-white  [&>*]:[&>*]:!fill-white "
              )}
            >
              <span className="text-6xl w-[60px] h-[60px] [&>*]:fill-[#333091]">
                {<item.icon />}
              </span>
              <p className="text-danger-500 text-center w-full font-semibold text-xl">
                {item.title}
              </p>
            </div>
          </MotionCard>
        ))}
      </div>

      <MotionDiv className="my-8 flex flex-col md:flex-row max-w-[1220px] mx-auto px-6">
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl mb-8 text-[#333091] font-bold">
            -{selected.title}
          </h3>
          <p className="font-semibold pl-3 text-danger-500">
            {selected.subTitle}
          </p>
          <ul className="pl-3 mt-8 flex flex-col gap-2">
            {selected.list.map((item: any, index:number) => (
              <li key={index} className="flex justify-start font-medium items-center text-[#333091] gap-1">
                <IoIosCheckmarkCircle className="flex-shrink-0 text-[#333091]" />
                {item}
              </li>
            ))}
          </ul>
          <Button
            as={Link}
            className={buttonStyles({
              color: "danger",
              radius: "full",
              variant: "shadow",
              className: "font-bold p-6 shadow-none mt-6 w-max ",
            })}
            href={"/about"}
            variant="flat"
          >
            Enquire
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0 items-center  " >
            <Image src={selected.image} className="w-full md:w-[50%] h-max" alt="img" width={500} height={500} />
        </div>
      </MotionDiv>
    </Pages>
  );
};

export default Page;
