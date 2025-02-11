'use client'

import React from "react";
import Pages from "@/components/page";
import BannerItem from "../../assets/image/homeBg.png";
import Footprint from "../../assets/image/footprints.gif";
import { button as buttonStyles } from "@nextui-org/theme";
import MotionDiv from "@/components/MotionDiv";
import Image from "next/image";
import MotionCard from "@/components/MotionCard";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { SMO_SERVICES } from "@/utils/Constant";
import Pv2 from "../../assets/image/pv2.png";
import clsx from "clsx";
import { smoServices } from "../page";

const Page = () => {
  return (
    <Pages className="mt-[100px]  max-w-[1990px] mx-auto h-max min-h-screen">
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-12 px-8 md:px-16  relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div> */}
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="md:text-6xl text-3xl w-full text-center font-extrabold text-white leading-tight">
            Clinical Trial SMO Services
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive Site Management Solutions for Clinical Trials
          </p>
        </div>
      </div>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <MotionCard
            bounce
            className="w-full md:w-1/2 flex justify-center p-0 md:p-6"
          >
            <Image
              src={BannerItem}
              className="w-full max-w-[500px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              width={500}
              height={500}
              alt="Clinical Excellence Banner"
              priority
            />
          </MotionCard>
          <MotionDiv className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <p className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Discover the Power of Clinical Excellence
              </p>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>
            <h2 className="text-gray-700 text-lg md:text-xl leading-relaxed">
              At Vivoclin Research SMO Division, we provide end-to-end Site
              Management Organization (SMO) services to streamline your clinical
              trials. From site selection and patient recruitment to regulatory
              compliance and quality assurance, our services are designed to
              ensure the success of your studies while reducing operational
              burdens for sponsors and CROs.
            </h2>
            <Button
              as={Link}
              className={buttonStyles({
                color: "danger",
                radius: "full",
                // variant: "shadow",
                className:
                  "font-bold shadow-lg bg-slate-700 p-6 hover:transform hover:scale-105 transition-all duration-300",
              })}
              href={"/about"}
              variant="flat"
            >
              Let&apos;s Connect
            </Button>
          </MotionDiv>
        </div>
      </section>
      <section className="pt-8 md:pt-[100px] px-8 md:px-16 bg-white ">
        <div className="w-full py-8 mx-auto max-w-full md:max-w-[50%] ">
          <h1 className="text-3xl md:text-5xl w-full text-center font-extrabold text-slate-700">
            Redefining Clinical Research Excellence
          </h1>
          <p className="mt-4 text-sm md:text-md font-semibold text-blue-600 text-center">
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
                <h1 className="text-2xl w-full text-center font-extrabold text-slate-700">
                  {item?.title}
                </h1>
                <p className="mt-4 text-sm font-semibold text-blue-600 text-center">
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
                <h1 className="text-2xl w-full text-center font-extrabold text-slate-700">
                  {item?.title}
                </h1>
                <p className="mt-4 text-sm font-semibold text-blue-600 text-center">
                  {item?.description}
                </p>
              </MotionCard>
            ))}
          </div>
        </section>
      </section>
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333091] mb-4">
              Our Core Expertise
            </h2>
            <div className="w-32 h-1 bg-[#333091] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5">
              <div className="grid md:grid-cols-2 gap-6">
                {smoServices?.map((service, index) => (
                  <MotionCard
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 bg-primary-600/10 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-primary-600 font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </div>

            <MotionCard bounce className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={Pv2}
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={600}
                  alt="Expertise Illustration"
                  priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#333091]/20 to-transparent"></div> */}
              </div>
            </MotionCard>
          </div>

          <div className="mt-12 text-center">
            <Button
              as={Link}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                className:
                  "font-bold shadow-lg bg-[#333091] hover:bg-[#252269] text-white px-8 py-6",
              })}
              href={"/about"}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 px-8 md:px-16 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-medium text-[#333091]/80 max-w-2xl mx-auto">
              We offer a comprehensive portfolio designed to optimize your
              clinical research journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Site Coordination",
                description:
                  "Schedule management, subject recruitment, AE/SAE reporting, and more.",
                icon: "📋",
              },
              {
                title: "Site Management",
                description:
                  "Ensuring operational efficiency with services such as data entry and equipment management.",
                icon: "🏥",
              },
              {
                title: "Reporting",
                description:
                  "IRB submissions, protocol deviation reporting, and full regulatory compliance.",
                icon: "📊",
              },
              {
                title: "Contact Center",
                description:
                  "A 24-hour call center (coming soon) for real-time responses, privacy consultations, and query handling.",
                icon: "☎️",
              },
            ].map((service, index) => (
              <MotionCard
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#333091]/10"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#333091]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>
    </Pages>
  );
};

export default Page;
