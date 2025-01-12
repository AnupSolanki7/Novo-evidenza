"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Banner from "../assets/image/banner.jpg";
import Pharma from "../assets/image/pharma.png";
import Pharma1 from "../assets/image/pharma2.png";
import Pharma2 from "../assets/image/pharma3.png";
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
                className: "text-white text-left !text-2xl md:!text-4xl ",
              })}
            >
              Welcome to VivoClin Research Services LLP: Redefining Clinical
              Excellence
            </h1>
            <p className={subtitle({ className: "text-white" })}>
              At VivoClin Research Services, we specialize in delivering
              comprehensive site support and management for clinical trials,
              ensuring seamless execution from start to finish. Our expertise
              also extends to exceptional medical writing services, tailored to
              meet the highest standards of precision and clarity. Partner with
              us to transform clinical research into groundbreaking outcomes
              that elevate patient care globally.
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
              Let&apos;s Connect <FaArrowRight />
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
        <section
          style={{
            backgroundImage: `url(${White.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex py-10 text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4"
        >
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
            <ul className="flex flex-col gap-2 justify-start items-start list-decimal">
              <li
                className={subtitle({
                  className:
                    "text-gray-600 font-[500] text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To be a global leader in clinical research services, setting
                benchmarks for innovation, precision, and ethical excellence.
              </li>
              <li
                className={subtitle({
                  className:
                    "text-gray-600 font-[500] text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To revolutionize clinical research by delivering seamless trial
                management and impactful medical writing, driving advancements
                in patient care worldwide.
              </li>
              <li
                className={subtitle({
                  className:
                    "text-gray-600 font-[500] text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To empower healthcare through flawless execution of clinical
                trials and transformative scientific solutions, ensuring a
                healthier future for all.
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
              Site Management Organization (SMO)
            </p>
            <ul className="flex flex-col gap-2 justify-start items-start ">
              <li
                className={title({
                  size: "sm",
                  className:
                    "text-white text-left flex flex-col !font-normal  text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
                })}
              >
                <p className={title({ className: "!text-xl text-white" })}>
                  Site Management Unit (SMU): &nbsp;
                </p>
                Streamlines clinical trials with subject enrollment, Clinical
                Research Coordinator services, and data entry.
              </li>
              <li
                className={title({
                  size: "sm",
                  className:
                    "text-white flex flex-col !font-normal text-left text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
                })}
              >
                <p className={title({ className: "!text-xl text-white" })}>
                  Clinical Pharmacology Unit (CPU):&nbsp;
                </p>
                Rapid startup process, achieving first dosing milestones within
                five weeks.
              </li>
              <li
                className={title({
                  size: "sm",
                  className:
                    "text-white flex flex-col !font-normal text-left text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
                })}
              >
                <p className={title({ className: "!text-xl text-white" })}>
                  SMO Operations:&nbsp;
                </p>
                Ensures study compliance with quality management, IRB
                assistance, and AE/SAE reporting.
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
                  &nbsp; SMO &nbsp;
                </p>
                team is globally working and we are providing services under the
                roof of solutions.
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
                href={"/smo"}
                variant="flat"
              >
                SMO Services
              </Button>
            </div>
          </MotionDiv>
        </section>
        {/* section3 */}
        <OurServices />
        {/* section4 */}
        <section
          style={{
            backgroundImage: `url(${White.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex py-10 text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4"
        >
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
              Our Mission
            </p>
            <ul className="flex flex-col gap-2 justify-start items-start list-decimal ">
              <li
                className={subtitle({
                  className:
                    "text-gray-600  font-[500]  text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To provide end-to-end support for clinical trials with an
                unwavering commitment to quality, compliance, and
                patient-centricity.
              </li>
              <li
                className={subtitle({
                  className:
                    "text-gray-600  font-[500]  text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To bridge the gap between scientific discovery and patient
                outcomes through exceptional site management and impactful
                medical writing.
              </li>
              <li
                className={subtitle({
                  className:
                    "text-gray-600  font-[500]  text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To empower our partners with reliable, innovative, and ethical
                solutions that transform clinical research into meaningful
                advancements in healthcare.
              </li>
              <li
                className={subtitle({
                  className:
                    "text-gray-600  font-[500]  text-left !leading-[14px] !text-[18px] ",
                })}
              >
                To ensure excellence in clinical trial support and deliver
                scientific narratives that resonate with clarity, precision, and
                impact.
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
              Medical Writing
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-white  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                At Vivoclin Research &nbsp;
              </p>
              we provide expert medical writing services designed to communicate
              complex medical and scientific information clearly and
              effectively. Our team of skilled professionals ensures the
              delivery of high-quality, accurate, and compliant documents
              tailored to your specific needs.
            </h2>
            <ul className="list-disc pl-4 mt-4 flex text-left flex-col gap-4 text-white font-semibold">
              <li>
                Regulatory documents for clinical trials and drug development.
              </li>
              <li>
                Educational and training materials for healthcare professionals
                and patients.
              </li>
              <li>
                Publication support, including manuscript preparation and
                journal submissions.
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
        {/* <section className="flex min-h-screen h-max text-center md:text-left flex-col md:flex-row my-auto mx-auto items-center justify-around gap-4">
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
        </section> */}
        <section
          style={{
            backgroundImage: `url(${White.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex py-10 text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4"
        >
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
              Partner with Us
            </p>

            <h3
              className={subtitle({
                className:
                  "text-gray-600  font-[500]  text-left !leading-[14px] !text-[18px] ",
              })}
            >
              With Vivoclin Research, you gain a trusted partner committed to
              delivering excellence in medical writing, scientific
              documentation, and data analysis. Let us help you present your
              research and clinical data in the best light, ensuring impactful
              communication and successful outcomes.
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
                Contact us today to learn more!
              </Button>
            </div>
          </MotionDiv>
        </section>
      </div>
    </Page>
  );
}
