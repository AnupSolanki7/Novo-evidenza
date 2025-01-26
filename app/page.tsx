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
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const visionPoints = [
    "To be a global leader in clinical research services, setting benchmarks for innovation, precision, and ethical excellence.",
    "To revolutionize clinical research by delivering seamless trial management and impactful medical writing, driving advancements in patient care worldwide.",
    "To empower healthcare through flawless execution of clinical trials and transformative scientific solutions, ensuring a healthier future for all.",
  ];
  const smoServices = [
    {
      title: "Site Management Unit (SMU)",
      description:
        "Streamlines clinical trials with subject enrollment, Clinical Research Coordinator services, and data entry.",
    },
    {
      title: "Clinical Pharmacology Unit (CPU)",
      description:
        "Rapid startup process, achieving first dosing milestones within five weeks.",
    },
    {
      title: "SMO Operations",
      description:
        "Ensures study compliance with quality management, IRB assistance, and AE/SAE reporting.",
    },
  ];

  return (
    <Page className="relative h-max bg-gradient-to-r from-blue-50 to-white">
      {/* banner */}
      <section className="flex relative flex-col pt-40 md:flex-row w-full min-h-[900px] container mx-auto px-16 items-center justify-center gap-12 ">
        <div className="flex z-10 flex-col text-center md:text-left justify-center items-center md:items-start w-full md:w-1/2 space-y-6">
          <div className="text-slate-800">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Advancing Clinical Research with Precision
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              VivoClin Research Services specializes in comprehensive clinical
              trial site support and medical writing. Our expert team ensures
              meticulous execution and delivers high-quality research that
              drives medical innovation.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              as={Link}
              href="/about"
              color="primary"
              variant="solid"
              className="px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105"
              endContent={<FaArrowRight />}
            >
              Learn More
            </Button>
            {/* <Button
              variant="bordered"
              color="primary"
              className="px-8 py-4 rounded-full"
            >
              Contact Us
            </Button> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <MotionCard
            bounce
            className="w-full max-w-md rounded-2xl overflow-hidden transform transition-transform hover:scale-105"
          >
            <Image
              src={Pharma}
              alt="Clinical Research"
              layout="responsive"
              quality={90}
              placeholder="blur"
              className="object-cover"
            />
          </MotionCard>
        </div>
      </section>
      {/* info */}
      <div className="relative max-w-[1990px] mx-auto bg-gradient-to-br from-sky-50 to-white h-max">
        {/* section1 */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-primary-800/95" />

          <MotionDiv className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <div className="w-24 h-1 bg-secondary-400 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {visionPoints.map((point, index) => (
                  <MotionCard
                    key={index}
                    className="bg-gray-100/30 backdrop-blur-xl  rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                    // whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 bg-secondary-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed font-medium">
                        {point}
                      </p>
                    </div>
                  </MotionCard>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  as={Link}
                  href="/about"
                  className="bg-white text-primary-600 text-sm hover:bg-white/90 rounded-full px-8 py-4 font-semibold transition-transform hover:scale-105"
                  endContent={<FaArrowRight />}
                >
                  Discover More About Us
                </Button>
              </div>
            </div>
          </MotionDiv>
        </section>
        {/* section2 */}
        <section className="relative py-32 overflow-hidden">
          {/* Light gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
            <div className="absolute inset-0 opacity-5" />
          </div>

          <div className="container relative z-10 mx-auto px-8 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-20">
              {/* Content Section */}
              <div className="w-full md:w-1/2 text-gray-800 space-y-10">
                <MotionDiv>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-600">
                    Site Management Organization (SMO)
                  </h2>

                  <div className="space-y-10">
                    {smoServices.map((service, index) => (
                      <MotionCard
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300"
                      >
                        <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </MotionCard>
                    ))}
                  </div>
                </MotionDiv>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <MotionCard
                  bounce
                  className="rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                >
                  <div className="relative">
                    <Image
                      src={Pharma1}
                      alt="SMO Services"
                      width={900}
                      height={900}
                      className="object-cover w-full"
                      quality={100}
                    />
                  </div>
                </MotionCard>
              </div>
            </div>
          </div>
          <div className="mt-14 w-full flex justify-center ">
            <Button
              as={Link}
              href="/smo"
              className="bg-primary-600 text-white hover:bg-primary-700 rounded-full px-10 py-6 font-semibold transition-transform hover:scale-105"
              endContent={<FaArrowRight />}
            >
              Explore SMO Services
            </Button>
          </div>
        </section>
        {/* section3 */}
        <OurServices />
        {/* section4 */}
        <section className="relative py-24 bg-gradient-to-br from-blue-50 via-blue-200 to-sky-100">
          <div className="container mx-auto px-8 lg:px-16">
            <MotionDiv className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-12" />
            </MotionDiv>

            <div className="grid md:grid-cols-1 gap-8 items-center">
              <div className="space-y-6">
                {[
                  "To provide end-to-end support for clinical trials with an unwavering commitment to quality, compliance, and patient-centricity.",
                  "To bridge the gap between scientific discovery and patient outcomes through exceptional site management and impactful medical writing.",
                  "To empower our partners with reliable, innovative, and ethical solutions that transform clinical research into meaningful advancements in healthcare.",
                  "To ensure excellence in clinical trial support and deliver scientific narratives that resonate with clarity, precision, and impact.",
                ].map((mission, index) => (
                  <MotionCard
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {mission}
                      </p>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                as={Link}
                href="/about"
                className="bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:opacity-90 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
                endContent={<FaArrowRight />}
              >
                Learn More About Our Mission
              </Button>
            </div>
          </div>
        </section>
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-blue-50">
          <div className="container relative z-10 mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              {/* Image Column */}
              <div className="w-full md:w-2/5">
                <MotionCard
                  bounce
                  className="rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500"
                >
                  <Image
                    src={Pharma2}
                    alt="Medical Writing Services"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-full object-cover"
                  />
                </MotionCard>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-3/5 space-y-8">
                <MotionDiv>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
                    Medical Writing
                  </h2>

                  <div className="prose prose-lg text-gray-700 mb-8">
                    <p className="text-lg md:text-xl leading-relaxed">
                      At{" "}
                      <span className="text-primary-600 font-semibold">
                        Vivoclin Research Services
                      </span>
                      , we deliver exceptional medical writing solutions
                      tailored for healthcare, pharmaceutical, and life sciences
                      organizations. Our expert team ensures precise, engaging,
                      and compliant content that meets industry standards.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Regulatory documents for clinical trials and drug development",
                      "Educational and training materials for healthcare professionals and patients",
                      "Publication support, including manuscript preparation and journal submissions",
                    ].map((item, index) => (
                      <MotionCard
                        key={index}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-700 font-medium">{item}</p>
                        </div>
                      </MotionCard>
                    ))}
                  </div>
                </MotionDiv>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full flex justify-center">
            <Button
              as={Link}
              href="/medical-writing"
              className="bg-primary-600 text-white hover:bg-primary-700 rounded-full px-8 py-4 font-semibold transition-transform hover:scale-105"
              endContent={<FaArrowRight />}
            >
              Explore Medical Writing Services
            </Button>
          </div>
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
        <section className="relative py-24 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <MotionDiv className="w-full flex flex-col items-center space-y-8">
              {/* Heading */}
              <div className="text-center space-y-4 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                  Partner with Us
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl">
                <MotionCard className="prose prose-lg text-center">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    With{" "}
                    <span className="font-semibold text-primary-600">
                      Vivoclin Research
                    </span>
                    , you gain a trusted partner committed to delivering
                    excellence in medical writing, scientific documentation, and
                    data analysis. Let us help you present your research and
                    clinical data in the best light, ensuring impactful
                    communication and successful outcomes.
                  </p>
                </MotionCard>

                <div className="mt-10 flex justify-center">
                  <Button
                    as={Link}
                    href="/about"
                    className="bg-primary-600 text-white hover:bg-primary-700 rounded-full px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
                    endContent={<FaArrowRight />}
                  >
                    Contact us today to learn more!
                  </Button>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>
      </div>
    </Page>
  );
}
