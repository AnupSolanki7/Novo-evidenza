"use client";

import React from "react";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageMesh from "@/components/site/PageMesh";
import PageHero from "@/components/site/PageHero";
import MotionDiv from "@/components/MotionDiv";
import { title } from "@/components/primitives";
import clsx from "clsx";
import MotionCard from "@/components/MotionCard";
import { PUBLICATIONS } from "@/utils/Constant";
import { Link } from "@nextui-org/link";
import { FaFilePdf } from "react-icons/fa";

const Page = () => {
  return (
    <main className="relative isolate" style={pageBackdrop()}>
      <PageMesh />
      <PageHero
        eyebrow="Publications"
        title="Research Publications"
        lead="Research Publications in which our contribution was acknowledged"
      />
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <p className="md:text-lg max-w-[70%] text-md text-gray-500 font-semibold my-4">
          The highly experienced medico-writing team have developed procedures
          and templates to ensure the modules of CTD’s are detail-oriented and
          additionally provide expertise in Bio Waiver Justifications and Well
          Established Use.
        </p>
      </MotionDiv>
      <div className="px-6 flex flex-col gap-6 mb-20 justify-between h-max items-center max-w-[1220px] mx-auto">
        {PUBLICATIONS.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx("border-r-none min-w-full md:border-r-1 w-full")}
          >
            <Link href={item.file} target="_blank" className="w-full">
              <div
                className={clsx(
                  "hover:bg-[#333091] w-full [&>h3]:hover:text-white  [&>*]:[&>*]:hover:bg-danger-500 [&>button]:hover:bg-danger-500 cursor-pointer  transition-all ease-in-out rounded-[30px] [&>*]:[&>*]:hover:fill-white [&>p]:hover:text-gray-200 bg-white flex justify-start items-center gap-4 flex-col p-6"
                )}
              >
                <h3 className="text-md text-left w-full font-semibold">{item.title}</h3>
                <p className="text-danger-500 text-left w-full font-semibold text-xs">
                  {item.subtitle}
                </p>
                <div className="w-full flex justify-start">
                  <span className="px-4 bg-[#333091] text-white py-2 border-2 rounded-full w-[150px] gap-2 flex justify-center items-center  ">
                    <FaFilePdf /> Download
                  </span>
                </div>
              </div>
            </Link>
          </MotionCard>
        ))}
      </div>
    </main>
  );
};

export default Page;
