"use client";

import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import MotionCard from "@/components/MotionCard";
import { PUBLICATIONS, WRITINGS } from "@/utils/Constant";
import { Link } from "@nextui-org/link";
import White from "../../assets/image/white.jpg";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import BannerItem from "../../assets/image/MedicalWriting.png";
import Image from "next/image";

const Page = () => {
  return (
    <Pages className="mt-[100px] h-max min-h-screen bg-white">
      <div className="w-full bg-danger-500 py-12">
        <h1 className="text-5xl w-full text-center font-extrabold text-white">
          Medical Writing Services
        </h1>
      </div>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex text-center md:text-left flex-col md:flex-row-reverse my-auto h-max mx-auto items-center justify-around gap-8 py-16"
      >
        <MotionCard bounce className="w-full flex justify-center md:w-1/2">
          <Image
            src={BannerItem}
            className="w-[80%] object-contain"
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
                "text-gray-600 !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
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

      {/* Scientific Writing & Data Analysis Section */}
      <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
        <h2
          className={title({
            size: "sm",
            className:
              "text-[#333091] font-bold text-center text-2xl leading-[28px] md:!text-3xl md:!leading-[35px] ",
          })}
        >
          Scientific Writing & Data Analysis Services
        </h2>
        <p className="md:text-lg max-w-[70%] text-md text-gray-500 font-semibold my-6">
          We deliver clear, precise, and impactful scientific content for
          academic, regulatory, and commercial needs, ensuring your message
          resonates. Our data analysis services transform complex data into
          actionable insights, providing accurate interpretations and structured
          presentations to support your objectives.
        </p>
      </MotionDiv>

      {/* Writing Cards */}
      <div className="px-6 flex flex-col gap-8 mb-20 justify-between items-center max-w-6xl mx-auto">
        {WRITINGS.map((item, index) => (
          <MotionCard
            key={item.title}
            className={clsx(
              "w-full rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            )}
          >
            <div
              className={clsx(
                "group border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 w-full transition-colors duration-300 ease-in-out rounded-lg p-8 flex flex-col items-start gap-6"
              )}
            >
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-gray-600 group-hover:text-indigo-500 transition-colors duration-300">
                {item.subtitle}
              </p>
              {item.list && (
                <ul className="list-disc pl-5 text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                  {item.list.map((li, index) => (
                    <li key={index} className="mb-2">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </MotionCard>
        ))}
      </div>

      {/* Contact Section */}
      <section
        style={{
          backgroundImage: `url(${White.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex py-10 text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4"
      >
        <MotionDiv className="md:w-[80%] my-8 px-[7%] w-full flex flex-col justify-center items-center">
          <p className="font-bold !text-2xl md:!text-5xl text-[#333091] mb-4">
            Let’s Work Together
          </p>

          <h3
            className={subtitle({
              className:
                "text-gray-600 font-[500] text-left !leading-[14px] !text-[18px] ",
            })}
          >
            Whether you need assistance with regulatory documents, publication
            writing, or educational content, we’re here to help. Reach out to us
            today to discuss your medical writing needs, and let us deliver the
            exceptional results you deserve.
          </h3>

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
              Contact us today!
            </Button>
          </div>
        </MotionDiv>
      </section>
    </Pages>
  );
};

export default Page;


