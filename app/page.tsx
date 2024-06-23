"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { TypeAnimation } from "react-type-animation";
import Banner from "../assets/image/banner.jpg";
import BannerItem from "../assets/image/homeCompany.png";

import { subtitle, title } from "@/components/primitives";
import Page from "@/components/page";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import OurServices from "@/components/OurServices";
import MotionDiv from "@/components/MotionDiv";
import Accomplishment from "@/components/Accomplishment";
import MotionCard from "@/components/MotionCard";
import { PVSERVICES } from "@/utils/Constant";

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
        <div className="flex z-10 flex-col justify-center items-center md:items-start w-full md:w-1/2">
          <MotionDiv>
            <h1
              className={title({
                size: "sm",
                className: "text-white text-left !text-3xl md:!text-4xl ",
              })}
            >
              Novo Evidence is LLP established in 2024
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                className={
                  "data-rotate-text  !text-xl md:!text-4xl text-danger-600 "
                }
                sequence={[
                  " HEOR Solutions",
                  1000,
                  " PV Regulatory",
                  1000,
                  " RWE Solutions ",
                  1000,
                  " Medical Writing",
                  1000,
                  " Pharmacovigilance",
                  1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "50px" }}
                wrapper="p" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </h1>
            <p className={subtitle({ className: "text-white !text-md" })}>
              Novo Evidenza is Global Solutions and Services Provider
              Supporting, Large, Mid & Small global Life Sciences companies,
              (Pharmaceutical | Generics | Medical Device | Consumer Healthcare
              | Cosmetics | Biotechnology in their entire Regulatory process and
              Services, Pharmacovigilance Services, Health Economics and Outcome
              Research , Medical Writing, Medical Scribe)
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
              Let&apos;s Connect
            </Button>
          </MotionDiv>
        </div>
        <MotionCard className="w-full md:w-1/2 flex justify-center items-center z-10">
          <Image
            src={
              "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
            }
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[60%]"
          />
        </MotionCard>
      </section>
      {/* info */}
      <div className="relative bg-white h-max">
        {/* section1 */}
        <section className="flex text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4">
          <MotionCard className="w-full md:w-1/2">
            <Image
              src={BannerItem}
              className="w-full "
              width={500}
              height={500}
              alt="image"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8 px-[7%] w-full">
            <p className="font-bold text-2xl text-[#333091] mb-4">
              Our Company
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-gray-600  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Dr. Kunal Maheswari
              </p>{" "}
              , the organization goal is to serve healthcare domain and help
              pharmaceutical, biotechnology, research organization, Institute
              for HEOR services, Medical Writing, PV , Regulatory, Medical
              scribe.
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
        {/* section2 */}
        <section className="flex bg-danger-500 h-screen text-center md:text-left flex-col md:flex-row-reverse my-auto mx-auto items-center justify-around gap-4">
          <MotionCard className="w-[50%] md:w-[20%]">
            <Image
              src={
                "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
              }
              alt="banner-item"
              width={1000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8 px-6  w-full">
            <p className="font-bold text-3xl text-white mb-4">
              Health Economic and Outcome Research
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
                href={"/about"}
                variant="flat"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </MotionDiv>
        </section>
        {/* section3 */}
        <OurServices />
        {/* section4 */}
        <section
          style={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6068015a9c3b85556078f629_bom_kind_words_bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex h-screen text-center md:text-left flex-col md:flex-row-reverse my-auto mx-auto items-center justify-around gap-4"
        >
          <MotionCard className="w-[50%] md:w-[20%]">
            <Image
              src={
                "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
              }
              alt="banner-item"
              width={1000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-2xl text-white mb-4">
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
              TAT MET we will driver our services to client’s
            </h2>
            <ul className="list-disc pl-4 text-white font-semibold">
              {PVSERVICES.map((item) => (
                <li>{item?.title}</li>
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
                href={"/about"}
                variant="flat"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </MotionDiv>
        </section>
        {/* Accomplishment */}
        <Accomplishment />
        {/* section5 */}
        <section className="flex h-screen text-center md:text-left flex-col md:flex-row my-auto mx-auto items-center justify-around gap-4">
          <MotionCard className="w-[50%] md:w-[20%]">
            <Image
              src={
                "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
              }
              alt="banner-item"
              width={1000}
              height={1000}
              quality={100}
              className="w-full"
            />
          </MotionCard>
          <MotionDiv className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-2xl text-[#333091] mb-4">
              Regulatory Affairs
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-[#333091]  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Dr. Kunal Maheswari
              </p>{" "}
              , the organization goal is to serve healthcare domain and help
              pharmaceutical, biotechnology, research organization, Institute
              for HEOR services, Medical Writing, PV , Regulatory, Medical
              scribe.
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
      </div>
    </Page>
  );
}
