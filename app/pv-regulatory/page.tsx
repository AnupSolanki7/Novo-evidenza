import React from "react";
import Pages from "@/components/page";
import BannerItem from "../../assets/image/homeBg.png";
import Footprint from "../../assets/image/footprints.gif";
import { button as buttonStyles } from "@nextui-org/theme";
import MotionDiv from "@/components/MotionDiv";
import { title } from "@/components/primitives";
import Image from "next/image";
import MotionCard from "@/components/MotionCard";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { PVSERVICES, REGULATORY_SERVICES } from "@/utils/Constant";
import Pv2 from "../../assets/image/pv2.png";
import clsx from "clsx";

const Page = () => {
  return (
    <Pages className="mt-[100px] h-max min-h-screen">
      <div className="w-full bg-danger-500 py-8 ">
        <h1 className="text-5xl w-full text-center font-extrabold text-white">
          PV & Regulatory Services
        </h1>
      </div>
      <section
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4"
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
            Pharmacovigilance
          </p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-gray-600  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            <p className={title({ className: "!text-xl text-[#333091]" })}>
              Pharmacovigilance &nbsp;
            </p>
            is the science and activities related to the detection, assessment,
            understanding, and prevention of adverse effects or any other
            drug-related problems. The main aim of PV is to ensure patient
            safety and to improve public health by identifying and evaluating
            potential risks associated with pharmaceuticals.
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
      <section className="pt-8 md:pt-[100px] px-4 bg-white ">
        <div className="w-full py-8 mx-auto max-w-full md:max-w-[50%] ">
          <h1 className="text-3xl md:text-5xl w-full text-center font-extrabold text-danger-500">
            Services We Provide
          </h1>
          <p className="mt-4 text-sm md:text-md font-semibold text-[#333091] text-center">
            We are a provider of pharmacovigilance, regulatory and quality &
            compliance consultancy, and operational services. We help innovative
            life sciences companies expedite the product development and
            commercialization journey, reducing time to market.
          </p>
        </div>
        <section className="flex flex-col relative w-full md:flex-row h-max ">
          <div className="left relative z-10 w-full md:w-1/3">
            {PVSERVICES?.slice(0, 3)?.map((item, index) => (
              <MotionCard
                key={index}
                style={{ top: `${String(item?.position)}%` }}
                className={clsx(
                  "static md:absolute  w-full md:w-[100%] lg:w-[70%] right-0 py-8 mx-auto flex flex-col justify-center items-center"
                )}
              >
                <span className="w-12 h-12 [&>*]:fill-[#333091] [&>*]:w-12 [&>*]:h-12">
                  <item.icon />
                </span>
                <h1 className="text-2xl w-full text-center font-extrabold text-[#333091]">
                  {item?.title}
                </h1>
                <p className="mt-4 text-sm font-semibold text-[#333091] text-center">
                  {item?.description}
                </p>
              </MotionCard>
            ))}
          </div>
          <div className="w-full z-[1] opacity-40 absolute top-[15%] md:static md:w-1/3 flex justify-center items-start">
            <Image src={Footprint} alt="gif" />
          </div>
          <div className="right relative z-10 w-full md:w-1/3">
            {PVSERVICES?.slice(3, 6)?.map((item, index) => (
              <MotionCard
                key={index}
                style={{ top: `${String(item?.position)}%` }}
                className={clsx(
                  "static md:absolute w-full md:w-[100%] lg:w-[70%] left-0 py-8 mx-auto flex flex-col justify-center items-center"
                )}
              >
                <span className="w-12 h-12 [&>*]:fill-[#333091] [&>*]:w-12 [&>*]:h-12">
                  <item.icon />
                </span>
                <h1 className="text-2xl w-full text-center font-extrabold text-[#333091]">
                  {item?.title}
                </h1>
                <p className="mt-4 text-sm font-semibold text-[#333091] text-center">
                  {item?.description}
                </p>
              </MotionCard>
            ))}
          </div>
        </section>
      </section>
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
            src={Pv2}
            className="w-[70%] object-contain"
            width={500}
            height={500}
            alt="image"
          />
        </MotionCard>
        <MotionDiv className="md:w-1/2 px-[7%] py-[7%] w-full">
          <p className="font-bold text-4xl text-[#333091] mb-4">
            Regulatory Services
          </p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-gray-600  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            <p className={title({ className: "!text-xl text-[#333091]" })}>
              Regulatory &nbsp;
            </p>
            services involve ensuring that pharmaceutical products meet all
            regulatory requirements set by government authorities. Our services
            ensure that products are safe, effective, and of high quality before
            they reach the market and while they are on the market.
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
      <section className="pt-8 md:py-[100px] px-4 bg-white ">
        <div className="w-full py-8 mx-auto max-w-full md:max-w-[50%] ">
          <h1 className="text-3xl md:text-5xl w-full text-center font-extrabold text-danger-500">
            Services We Provide
          </h1>
          <p className="mt-4 text-sm md:text-md font-semibold text-[#333091] text-center">
            We are a provider of pharmacovigilance, regulatory and quality &
            compliance consultancy, and operational services. We help innovative
            life sciences companies expedite the product development and
            commercialization journey, reducing time to market.
          </p>
        </div>
        <div className="py-8 h-max w-[70%] mx-auto gap-8  flex-wrap flex justify-between">
          {REGULATORY_SERVICES?.map((service) => (
            <span
              style={{
                backgroundImage: 
                  "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="px-4 flex justify-center w-[300px] hover:ring-2 cursor-pointer items-center text-center py-3 border-2 font-semibold text-[#333091] border-[#333091] rounded-full "
            >
              {service}
            </span>
          ))}
        </div>
      </section>
    </Pages>
  );
};

export default Page;
