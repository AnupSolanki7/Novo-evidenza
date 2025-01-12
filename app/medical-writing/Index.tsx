"use client";

import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";
import { title } from "@/components/primitives";
import clsx from "clsx";
import MotionCard from "@/components/MotionCard";
import { PUBLICATIONS, WRITINGS } from "@/utils/Constant";
import { Link } from "@nextui-org/link";
import { FaFilePdf } from "react-icons/fa";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import BannerItem from "../../assets/image/MedicalWriting.png";
import Image from "next/image";

const Page = () => {
  return (
    <Pages className="mt-[100px] h-max min-h-screen">
      <div className="w-full bg-danger-500 py-8 ">
        <h1 className="text-5xl w-full text-center font-extrabold text-white">
          Medical Writing Services
        </h1>
      </div>
      <section
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex text-center md:text-left flex-col md:flex-row-reverse my-auto h-max mx-auto items-center justify-around gap-4"
      >
        {" "}
        <MotionCard bounce className="w-full flex justify-center md:w-1/2">
          <Image
            src={BannerItem}
            className="w-[70%] object-contain"
            width={500}
            height={500}
            alt="image"
          />
        </MotionCard>
        <MotionDiv className="md:w-1/2 px-[7%] py-[7%] w-full">
          <p className="font-bold text-4xl text-[#333091] mb-4">
            Professional Medical Writing Services
          </p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-gray-600  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            At Vivoclin Research, we provide expert medical writing services
            designed to communicate complex medical and scientific information
            clearly and effectively. Our team of skilled professionals ensures
            the delivery of high-quality, accurate, and compliant documents
            tailored to your specific needs.
          </h2>
          <div>
            <Button
              as={Link}
              className={buttonStyles({
                color: "danger",
                radius: "full",
                variant: "shadow",
                className: "font-bold shadow-none p-6 mt-6 w-max ",
              })}
              href={"/about"}
              variant="flat"
            >
              Let&apos;s Connect
            </Button>
          </div>
        </MotionDiv>
      </section>
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <h2
          className={title({
            size: "sm",
            className:
              "text-[#333091]  font-bold text-center text-2xl leading-[28px] md:!text-3xl md:!leading-[35px] ",
          })}
        >
          Scientific Writing & Data Analysis Services
        </h2>
        <p className="md:text-lg max-w-[70%] text-md text-gray-500 font-semibold my-4">
          We deliver clear, precise, and impactful scientific content for
          academic, regulatory, and commercial needs, ensuring your message
          resonates. Our data analysis services transform complex data into
          actionable insights, providing accurate interpretations and structured
          presentations to support your objectives.
        </p>
      </MotionDiv>
      <div className="px-6 flex flex-col gap-6 mb-20 justify-between h-max items-center max-w-[1220px] mx-auto">
        {WRITINGS.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx("rounded-xl min-w-full md:border-r-1 w-full")}
          >
            <div
              className={clsx(
                "hover:bg-[#333091] border-1 border-[#333091]  w-full [&>h3]:hover:text-white  [&>*]:[&>*]:hover:bg-danger-500 [&>button]:hover:bg-danger-500 cursor-pointer  transition-all ease-in-out rounded-[30px] [&>*]:[&>*]:hover:fill-white [&>p]:hover:text-gray-200 flex justify-start items-center gap-4 flex-col p-6"
              )}
            >
              <h3 className="text-md text-left w-full font-semibold">
                {item.title}
              </h3>
              <p className="text-danger-500 text-left w-full font-semibold text-xs">
                {item.subtitle}
              </p>
              {/* <div className="w-full flex justify-start">
                <span className="px-4 bg-[#333091] text-white py-2 border-2 rounded-full w-[150px] gap-2 flex justify-center items-center  ">
                  <FaFilePdf /> Download
                </span>
              </div> */}
            </div>
          </MotionCard>
        ))}
      </div>
    </Pages>
  );
};

export default Page;
