"use client";

import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import MotionCard from "@/components/MotionCard";
import { WRITINGS } from "@/utils/Constant";
import { Link } from "@nextui-org/link";
import White from "../../assets/image/white.jpg";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import BannerItem from "../../assets/image/MedicalWriting.png";
import Image from "next/image";

const Page = () => {
  return (
    <Pages className="mt-[100px] h-max min-h-screen bg-white">
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-12 px-8 md:px-16  relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div> */}
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="md:text-6xl text-3xl w-full text-center font-extrabold text-white leading-tight">
            Medical Writing Services
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto text-lg">
            Expert Medical Documentation and Scientific Communication
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 md:px-16 bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-blue-100/30" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
            <MotionDiv className="w-full md:w-1/2">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-blue-600 md:text-5xl">
                Professional Medical Writing Services
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                At Vivoclin Research, we provide expert medical writing services
                tailored to meet the needs of healthcare, pharmaceutical, and
                life sciences organizations. Our goal is to deliver accurate,
                engaging, and compliant content that supports your business
                objectives and ensures effective communication with your target
                audience.
              </p>
              <Button
                as={Link}
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  className:
                    "font-semibold text-lg px-8 py-6 bg-blue-600 hover:bg-blue-800 transition-colors",
                })}
                href="/about"
              >
                Let&apos;s Connect
              </Button>
            </MotionDiv>

            <MotionDiv className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-blue-100/50 blur-2xl" />
                <Image
                  src={BannerItem}
                  className="relative w-full object-contain"
                  width={600}
                  height={600}
                  alt="Medical Writing Services"
                  priority
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine expertise, precision, and dedication to deliver
              exceptional medical writing services that meet your specific
              needs.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  Expertise in clinical pharmacy and life sciences
                </h3>
              </div>
            </MotionCard>

            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  Proven experience in medical writing across diverse
                  therapeutic areas
                </h3>
              </div>
            </MotionCard>

            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  Commitment to delivering high-quality, scientifically
                  accurate, and audience-focused content
                </h3>
              </div>
            </MotionCard>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        {/* Scientific Writing & Data Analysis Section */}
        <MotionDiv className="w-full px-6 mb-16 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Scientific Writing & Data Analysis Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver clear, precise, and impactful scientific content for
              academic, regulatory, and commercial needs, ensuring your message
              resonates. Our data analysis services transform complex data into
              actionable insights, providing accurate interpretations and
              structured presentations to support your objectives.
            </p>
          </div>
        </MotionDiv>

        {/* Writing Cards */}
        <div className="px-6 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {WRITINGS.map((item, index) => (
            <MotionCard key={item.title} className="h-full">
              <div className="group h-full bg-white border-2 border-gray-100 hover:border-blue-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-blue-500 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {item.subtitle}
                  </p>
                  {item.list && (
                    <ul className="space-y-3">
                      {item.list.map((li, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-blue-500">•</span>
                          <span className="text-gray-600">{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure high-quality
              deliverables that meet your expectations.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Understanding Your Needs: We work closely with you to
                  understand your objectives and audience.
                </p>
              </div>
            </MotionCard>

            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">
                  Research & Development
                </h3>
                <p className="text-gray-600">
                  Tailored Solutions: Every project is customized to ensure it
                  aligns with your goals and regulatory standards.
                </p>
              </div>
            </MotionCard>

            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">
                  Review & Delivery
                </h3>
                <p className="text-gray-600">
                  Timely Delivery: We value your time and ensure that every
                  project is delivered within the agreed timeline.
                </p>
              </div>
            </MotionCard>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full -ml-20 -mb-20" />

            {/* Content */}
            <MotionDiv className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Let's Work Together
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Whether you need assistance with regulatory documents,
                publication writing, or educational content, we're here to help.
                Reach out to us today to discuss your medical writing needs, and
                let us deliver the exceptional results you deserve.
              </p>

              <Button
                as={Link}
                href="/about"
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  className:
                    "font-semibold text-lg px-10 py-7 bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105",
                })}
              >
                <span className="flex items-center gap-2">
                  Contact us today
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </section>
    </Pages>
  );
};

export default Page;
