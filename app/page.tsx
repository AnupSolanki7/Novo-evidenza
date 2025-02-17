"use client";

import { Link } from "@nextui-org/link";
import Pharma from "../assets/image/pharma.png";
import Pharma1 from "../assets/image/pharma2.png";
import Pharma2 from "../assets/image/pharma3.png";
import Page from "@/components/page";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import OurServices from "@/components/OurServices";
import MotionDiv from "@/components/MotionDiv";
import Accomplishment from "@/components/Accomplishment";
import MotionCard from "@/components/MotionCard";
import { FaArrowRight } from "react-icons/fa";

const smoServices = [
  {
    title: "Site Identification & Feasibility",
    description:
      "Selecting optimal sites based on protocol needs, infrastructure, and investigator expertise.",
  },
  {
    title: "Site Setup & Initiation",
    description:
      "Managing regulatory approvals, site activation, and investigator training for compliance.",
  },
  {
    title: "Patient Recruitment & Retention",
    description:
      "Implementing digital strategies and outreach programs to enhance enrollment and retention.",
  },
  {
    title: "Regulatory Compliance & Ethics",
    description:
      "Ensuring adherence to ICH-GCP, FDA, and local guidelines with complete documentation.",
  },
];

export default function Home() {
  const visionPoints = [
    "To be a global leader in clinical research services, setting benchmarks for innovation, precision, and ethical excellence.",
    "To revolutionize clinical research by delivering seamless trial management and impactful medical writing, driving advancements in patient care worldwide.",
    "To empower healthcare through flawless execution of clinical trials and transformative scientific solutions, ensuring a healthier future for all.",
  ];

  return (
    <Page className="relative h-max bg-gradient-to-r from-blue-50 to-white">
      {/* banner */}
      <section className="flex relative flex-col pt-[130px] md:pt-0 md:flex-row w-full min-h-[900px] container mx-auto px-16 items-center justify-center gap-12 ">
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
        <section className="relative py-24 bg-gradient-to-br from-blue-50 via-blue-200 to-sky-100">
          <div className="container mx-auto px-8 lg:px-16">
            <MotionDiv className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-12" />
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {[
                {
                  title: "Quality & Compliance",
                  description:
                    "To provide end-to-end support for clinical trials with an unwavering commitment to quality, compliance, and patient-centricity.",
                  icon: "🎯",
                },
                {
                  title: "Innovation & Impact",
                  description:
                    "To bridge the gap between scientific discovery and patient outcomes through exceptional site management and impactful medical writing.",
                  icon: "💡",
                },
                {
                  title: "Ethical Solutions",
                  description:
                    "To empower our partners with reliable, innovative, and ethical solutions that transform clinical research into meaningful advancements in healthcare.",
                  icon: "⚖️",
                },
                {
                  title: "Excellence & Precision",
                  description:
                    "To ensure excellence in clinical trial support and deliver scientific narratives that resonate with clarity, precision, and impact.",
                  icon: "✨",
                },
              ].map((mission, index) => (
                <MotionCard
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">
                          {mission.icon}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {mission.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pl-16">
                      {mission.description}
                    </p>
                  </div>
                </MotionCard>
              ))}
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
        {/* section3 */}
        <OurServices />
        {/* section2 */}
        <section className="relative py-32 overflow-hidden">
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          </div>

          <div className="container relative z-10 mx-auto px-8 md:px-16">
            {/* Section Header */}
            <MotionDiv className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Site Management Organization
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive clinical trial management solutions ensuring
                quality, compliance, and efficiency
              </p>
              <div className="w-24 h-1 bg-primary-600 mx-auto mt-6 rounded-full" />
            </MotionDiv>

            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left: Services Grid */}
              <div className="w-full lg:w-3/5">
                <div className="grid gap-8">
                  <MotionCard className=" rounded-xl p-8  transition-all duration-300">
                    <div className="space-y-8">
                      <div className="border-l-4 border-primary-600 pl-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Our comprehensive SMO services deliver excellence in clinical trial management through strategic site selection, seamless operational setup, and robust patient engagement programs. We optimize trial execution by combining industry expertise with innovative methodologies.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {smoServices.map((service, index) => (
                          <MotionCard
                            key={index}
                            className="group p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <h3 className="text-primary-600 font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </MotionCard>
                        ))}
                      </div>
                    </div>
                  </MotionCard>
                </div>
              </div>

              {/* Right: Image */}
              <div className="w-full lg:w-2/5">
                <MotionCard bounce className="rounded-3xl overflow-hidden ">
                  <div className="relative group">
                    <Image
                      src={Pharma1}
                      alt="SMO Services"
                      width={900}
                      height={900}
                      className="object-cover w-full transform transition-transform group-hover:scale-105 duration-700"
                      quality={100}
                    />
                  </div>
                </MotionCard>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center">
              <Button
                as={Link}
                href="/smo"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:opacity-90 rounded-full px-10 py-6 font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                endContent={<FaArrowRight className="ml-2" />}
              >
                Discover Our SMO Services
              </Button>
            </div>
          </div>
        </section>

        {/* section4 */}
        <Accomplishment />
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

        {/* section5 */}
        <section className="relative py-32 overflow-hidden">
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <MotionDiv className="w-full flex flex-col items-center space-y-12">
              {/* Enhanced Heading */}
              <div className="text-center space-y-6 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
                  Partner with{" "}
                  <span className="text-primary-600">Excellence</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform your clinical research journey with industry-leading
                  expertise and innovative solutions
                </p>
                <div className="w-32 h-1.5 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto rounded-full" />
              </div>

              {/* Enhanced Content Card */}
              <div className="grid gap-8 w-full max-w-6xl">
                <MotionCard className="bg-gradient-to-br from-primary-600 to-blue-700 text-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Why Choose Vivoclin?
                  </h3>
                  <p className="text-lg text-center leading-relaxed mb-8">
                    Join forces with a partner that combines scientific
                    excellence with operational precision. Our dedicated team
                    ensures your research goals are met with the highest
                    standards of quality and compliance.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      as={Link}
                      href="/about"
                      className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
                      endContent={<FaArrowRight />}
                    >
                      contact us
                    </Button>
                  </div>
                </MotionCard>
              </div>
            </MotionDiv>
          </div>
        </section>
      </div>
    </Page>
  );
}
