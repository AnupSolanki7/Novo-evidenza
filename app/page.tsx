"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Banner from "../assets/image/banner.jpg";
import Pharma from "../assets/image/pharma.png";
import Pharma1 from "../assets/image/pharma2.png";
import Pharma2 from "../assets/image/pharma3.png";
import Pharma3 from "../assets/image/pharma4.png";
import White from "../assets/image/white.jpg";

import { subtitle, title } from "@/components/primitives";
import Page from "@/components/page";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import OurServices from "@/components/OurServices";
import MotionDiv from "@/components/MotionDiv";
import Accomplishment from "@/components/Accomplishment";
import MotionCard from "@/components/MotionCard";
import { PVSERVICES, REGULATORY } from "@/utils/Constant";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <Page className="relative h-max bg-[#333091]">
      {/* banner */}
      <section className="flex relative flex-col pt-[140px] md:flex-row w-full my-auto h-max md:h-[100vh] px-6 max-w-[1220px] mx-auto items-center justify-center gap-[40px] md:gap-4 py-8 md:py-10">
        <Image
          alt="banner"
          width={1000}
          height={1000}
          className="w-full h-full md:h-screen absolute top-0 left-0 "
          quality={100}
          src={Banner}
        />
        <div className="flex z-10 flex-col text-center md:text-left justify-center items-center md:items-start w-full md:w-1/2">
          <MotionDiv>
            <h1
              className={title({
                size: "sm",
                className: "text-white text-left !text-3xl md:!text-5xl ",
              })}
            >
              Welcome to Novo Evidenza: Pioneering Pharmaceutical Solutions.
            </h1>
            <p className={subtitle({ className: "text-white" })}>
            At Novo Evidenza, we are at the forefront of pharmaceutical consultancy, delivering innovative solutions that propel your research forward. With expertise in Health Economics and Outcomes Research (HEOR), medical writing, pharmacovigilance, and regulatory affairs, we empower organizations worldwide to achieve their research and development goals.
            </p>
          </MotionDiv>
          <MotionDiv>
            <Button
              as={Link}
              className={buttonStyles({
                color: "danger",
                radius: "full",
                variant: "shadow",
                className: "font-bold shadow-none mt-6 p-6 w-max ",
              })}
              href={"/about"}
              variant="flat"
            >
              Let&apos;s Connect <FaArrowRight/>
            </Button>
          </MotionDiv>
        </div>
        <MotionCard
          bounce
          className="w-full md:w-1/2 flex justify-center items-center z-10"
        >
          <Image
            src={Pharma}
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[90%]"
          />
        </MotionCard>
      </section>
      {/* info */}
      <div className="relative bg-white h-max">
        {/* section1 */}
        <section     style={{
            backgroundImage:
              `url(${White.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }} className="flex py-10 text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4">
          
          {/* <MotionCard  className="w-full flex justify-center md:w-1/2">
            <Image
              src={BannerItem}
              className="w-[70%] object-contain"
              width={500}
              height={500}
              alt="image"
            />
          </MotionCard> */}
          <MotionDiv className="md:w-[80%] my-8 px-[7%] w-full flex flex-col justify-center items-center">
            <p className="font-bold !text-2xl md:!text-5xl text-[#333091] mb-4">
            Our Vision
            </p>
            <h2
              className={subtitle({
                className:
                  "text-gray-600 font-[500] text-center !leading-[14px] !text-[18px] ",
              })}
            >
              We envision a world where pharmaceutical innovation thrives, driven by seamless and effective research processes. Our mission is to simplify complexities, enabling your organization to focus on developing transformative therapies that improve lives globally.
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
                Know More
              </Button>
            </div>
          </MotionDiv>
        </section>
        {/* section2 */}
        <section className="flex bg-danger-500 min-h-screen h-max text-center md:text-left flex-col md:flex-row-reverse my-auto mx-auto items-center justify-around gap-4">
          <MotionCard bounce className="w-[80%] md:w-[30%]">
            <Image
              src={Pharma1}
              alt="banner-item"
              width={1000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8 px-6  w-full">
            <p className="font-bold text-3xl lg:text-5xl mb-8 text-white">
              Health Economic and Outcome Research
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-white text-left block  !font-normal  text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Novo Evidenza &nbsp;
              </p>
              is providing end to end support for health economics and outcomes
              services.
            </h2>
            <ul className="flex flex-col gap-2 justify-start items-start ">
              <li
                className={title({
                  size: "sm",
                  className:
                    "text-white  !font-normal text-left text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
                })}
              >
                <p className={title({ className: "!text-xl text-[#333091]" })}>
                  Value :- &nbsp;
                </p>
                We are committed to creating the high quality scientific
                evidence to improve the value of medications and health
                technology.
              </li>
              <li
                className={title({
                  size: "sm",
                  className:
                    "text-white  !font-normal text-left text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
                })}
              >
                <p className={title({ className: "!text-xl text-[#333091]" })}>
                  Motive :- &nbsp;
                </p>
                To generate high quality evidence based products with cost
                effective and budget effective as per client demands .
              </li>
              <li
                className={title({
                  size: "sm",
                  className:
                    "text-white  !font-normal text-left text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
                })}
              >
                Our
                <p className={title({ className: "!text-xl text-white" })}>
                  &nbsp; HEOR &nbsp;
                </p>
                team is globally working and we are providing below services
                under the roof of solutions.
              </li>
            </ul>
            <div>
              <Button
                as={Link}
                className={buttonStyles({
                  radius: "full",
                  variant: "shadow",
                  className:
                    "font-bold bg-[#333091] text-white p-6 shadow-none mt-6 w-max ",
                })}
                href={"/heor"}
                variant="flat"
              >
                HEOR Services
              </Button>
            </div>
          </MotionDiv>
        </section>
        {/* section3 */}
        <OurServices />
        {/* section4 */}
        <section     style={{
            backgroundImage:
              `url(${White.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }} className="flex py-10 text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4">
          
          {/* <MotionCard  className="w-full flex justify-center md:w-1/2">
            <Image
              src={BannerItem}
              className="w-[70%] object-contain"
              width={500}
              height={500}
              alt="image"
            />
          </MotionCard> */}
          <MotionDiv className="md:w-[80%] my-8 px-[7%] w-full flex flex-col justify-center items-center">
            <p className="font-bold !text-2xl md:!text-5xl text-[#333091] mb-4">
            Who We Are
            </p>
            <h2
              className={subtitle({
                className:
                  "text-gray-600  font-[500]  text-center !leading-[14px] !text-[18px] ",
              })}
            >
              Novo Evidenza is a leading international consultancy led by a team of seasoned pharmaceutical professionals. Our experts combine deep industry knowledge with practical experience, ensuring that every project is handled with precision and care.
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
                Know More
              </Button>
            </div>
          </MotionDiv>
        </section>
        <section
          style={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6068015a9c3b85556078f629_bom_kind_words_bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex min-h-screen h-max text-center md:text-left flex-col md:flex-row-reverse my-auto mx-auto items-center justify-around gap-4"
        >
          <MotionCard bounce className="w-[80%] md:w-[30%]">
            <Image
              src={Pharma2}
              alt="banner-item"
              width={1000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-3xl lg:text-5xl mb-8 text-white">
              Pharmacovigilance
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-white  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Novo Evidenza &nbsp;
              </p>
              is helping pharmacovigilance activities our team is well trained
              in all prospective and we understand the industry demand as per
              TAT MET we will deliver our services to clients
            </h2>
            <ul className="list-disc pl-4 flex text-left flex-col gap-4 text-white font-semibold">
              {PVSERVICES.map((item) => (
                <li key={item.title}>{item?.title}</li>
              ))}
            </ul>
            <div>
              <Button
                as={Link}
                className={buttonStyles({
                  radius: "full",
                  variant: "shadow",
                  className:
                    "font-bold bg-[#333091] text-white p-6 shadow-none mt-6 w-max ",
                })}
                href={"/pv-regulatory"}
                variant="flat"
              >
                PV Services
              </Button>
            </div>
          </MotionDiv>
        </section>
        {/* Accomplishment */}
        <Accomplishment />
        {/* section5 */}
        <section className="flex min-h-screen h-max text-center md:text-left flex-col md:flex-row my-auto mx-auto items-center justify-around gap-4">
          <MotionCard bounce className="w-[80%] md:w-[30%]">
            <Image
              src={Pharma3}
              alt="banner-item"
              width={1000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-3xl lg:text-5xl mb-8 text-[#333091]">
              Regulatory Affairs
            </p>
            <ul className="list-disc pl-4 flex text-left flex-col gap-4 text-[#333091] font-semibold">
              {REGULATORY.map((item) => (
                <li key={item.title}>{item?.title}</li>
              ))}
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
                href={"/pv-regulatory"}
                variant="flat"
              >
                Regulatory Services
              </Button>
            </div>
          </MotionDiv>
        </section>
      </div>
    </Page>
  );
}
