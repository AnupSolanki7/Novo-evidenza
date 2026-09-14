"use client";

import { IoIosCheckmarkCircle } from "react-icons/io";
import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { button as buttonStyles } from "@nextui-org/theme";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageHero from "@/components/site/PageHero";
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
    <main className="relative isolate" style={pageBackdrop()}>
      <PageHero
        eyebrow="HEOR Services"
        title={<>Health Economics &amp; Outcomes Research</>}
        lead="Providing Innovative Solutions and Services Across All HEOR & RWE Domains"
      />
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
          <h3 className="text-2xl mb-8 text-[#333091] font-semibold">
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
    </main>
  );
};

export default Page;
