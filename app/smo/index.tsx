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
import {
  PVSERVICES,
  REGULATORY_SERVICES,
  SMO_SERVICES,
} from "@/utils/Constant";
import Pv2 from "../../assets/image/pv2.png";
import clsx from "clsx";

const Page = () => {
  return (
    <Pages className="mt-[100px] h-max min-h-screen">
      <div className="w-full bg-danger-500 py-8 ">
        <h1 className="md:text-5xl text-2xl w-full text-center font-extrabold text-white">
          Site Management Organization (SMO)
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
            Discover the Power of Clinical Excellence
          </p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-gray-600  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            At Vivoclin Research SMO Division, a dedicated entity under
            Novotech, we have been shaping the future of clinical research
            across the APAC region since 2013. With a strong presence in South
            Korea, Taiwan, and Mainland China, and a team of over 300 skilled
            professionals, we bring innovation, precision, and impactful
            research to life.
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
            Redefining Clinical Research Excellence
          </h1>
          <p className="mt-4 text-sm md:text-md font-semibold text-[#333091] text-center">
            At Vivoclin Research, we bring over a decade of expertise in
            advancing clinical research across APAC. With specialized teams, a
            comprehensive service portfolio, and a strong focus on quality and
            compliance, we streamline clinical trial operations from start to
            finish. Our global and local reach, deep therapeutic expertise, and
            collaborative site partnerships empower us to deliver impactful
            results and set new benchmarks in the industry.
          </p>
        </div>
        <section className="flex flex-col relative w-full md:flex-row h-max ">
          <div className="left relative z-10 w-full md:w-1/3">
            {SMO_SERVICES?.slice(0, 3)?.map((item, index) => (
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
            {SMO_SERVICES?.slice(3, 6)?.map((item, index) => (
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
            Our Expertise
          </p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-gray-600  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            We are driven by a commitment to advancing medical knowledge,
            operating through three distinct units that form the pillars of our
            success:
          </h2>
          <ul className="list-disc pl-4 mt-4 flex text-left flex-col gap-4 text-gray-600 font-semibold">
            <li>
              Site Management Unit (SMU): Seamlessly optimizing clinical trial
              operations with services such as subject enrollment support,
              Clinical Research Coordinator expertise, and meticulous data
              entry.
            </li>
            <li>
              Clinical Pharmacology Unit (CPU): Achieving rapid trial initiation
              by eliminating hospital contracts, with first dosing milestones
              reached within just five weeks.
            </li>
            <li>
              SMO Operations: Comprehensive oversight, including quality
              management, IRB assistance, and AE/SAE reporting, ensuring
              compliance and success for every study.
            </li>
          </ul>
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
            Our Services
          </h1>
          <p className="mt-4 text-sm md:text-md font-semibold text-[#333091] text-center">
            We offer a comprehensive portfolio designed to optimize your
            clinical research journey
          </p>
        </div>
        <div className="py-8 h-max w-[70%] mx-auto gap-8  flex-wrap flex justify-between">
          <span className="px-4 flex justify-center h-[70px] w-full hover:ring-2 cursor-pointer items-center text-center py-3 border-2 font-semibold text-[#333091] border-[#333091] rounded-full ">
            Site Coordination: Schedule management, subject recruitment, AE/SAE
            reporting, and more.
          </span>
          <span className="px-4 flex justify-center h-[70px] w-full hover:ring-2 cursor-pointer items-center text-center py-3 border-2 font-semibold text-[#333091] border-[#333091] rounded-full ">
            Site Management: Ensuring operational efficiency with services such
            as data entry and equipment management.
          </span>
          <span className="px-4 flex justify-center h-[70px] w-full hover:ring-2 cursor-pointer items-center text-center py-3 border-2 font-semibold text-[#333091] border-[#333091] rounded-full ">
            Reporting: IRB submissions, protocol deviation reporting, and full
            regulatory compliance.
          </span>
          <span className="px-4 flex justify-center h-[70px] w-full hover:ring-2 cursor-pointer items-center text-center py-3 border-2 font-semibold text-[#333091] border-[#333091] rounded-full ">
            Contact Center: A 24-hour call center (coming soon) for real-time
            responses, privacy consultations, and query handling.
          </span>
        </div>
      </section>
    </Pages>
  );
};

export default Page;
