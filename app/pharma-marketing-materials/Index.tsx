"use client";

import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";
import MotionCard from "@/components/MotionCard";
import { Link } from "@nextui-org/link";
import White from "../../assets/image/white.jpg";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import BannerItem from "../../assets/image/MedicalWriting.png";
import Image from "next/image";

const MARKETING_CONTENT = [
  {
    title: "Core Promotional Materials",
    subtitle:
      "Scientifically accurate and strategically positioned promotional content for effective HCP communication.",
    list: [
      "Visual Aids & Detailing Aids",
      "Leave-Behind Literature (LBL)",
      "Patient Education Leaflets",
      "Brand Core Messaging Documents",
      "Campaign Concepts & Key Visual Content",
    ],
  },
  {
    title: "Scientific & Evidence-Based Content",
    subtitle:
      "Evidence-led content translating clinical data into clear, compliant brand messages.",
    list: [
      "MOA & Disease Education Content",
      "Clinical Trial Data Interpretation",
      "Guideline-Based Positioning Statements",
      "Claim Substantiation & Referencing",
      "Competitor & Molecule Differentiation",
    ],
  },
  {
    title: "Digital & Multichannel Content",
    subtitle:
      "Medical-first digital content designed for modern pharma engagement channels.",
    list: [
      "E-detailing Content",
      "HCP Emailer & WhatsApp Campaign Content",
      "Website & Landing Page Medical Content",
      "LinkedIn & HCP Platform Content",
    ],
  },
  {
    title: "Launch & Lifecycle Support",
    subtitle:
      "End-to-end content support across product launch and brand lifecycle stages.",
    list: [
      "New Product Launch Content",
      "Line Extension Communication",
      "Brand Repositioning Support",
      "Therapy Area Education Decks",
      "Sales Force Training Presentations",
    ],
  },
];

const Page = () => {
  return (
    <Pages className="mt-[100px] h-max min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-12 px-8 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="md:text-6xl text-3xl w-full text-center font-extrabold text-white leading-tight">
            Pharma Marketing Material Development
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto text-lg">
            Scientific, compliant, and insight-driven marketing content for
            pharma and healthcare brands
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We develop pharma marketing materials that balance scientific
              credibility, regulatory compliance, and brand objectives.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  Strong clinical pharmacy & life sciences foundation
                </h3>
              </div>
            </MotionCard>

            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  Experience across multiple therapeutic areas
                </h3>
              </div>
            </MotionCard>

            <MotionCard className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-slate-700 mb-2">
                  Ethical, evidence-based & compliance-focused content
                </h3>
              </div>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 md:px-16 bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
            <MotionDiv className="w-full md:w-1/2">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-blue-600 md:text-5xl">
                Evidence-Led Pharma Brand Communication
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Vivoclin helps pharma brands translate complex clinical and
                scientific data into clear, credible, and compliant marketing
                materials that resonate with healthcare professionals.
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
              <Image
                src={BannerItem}
                className="relative w-full object-contain"
                width={600}
                height={600}
                alt="Pharma Marketing Material Development"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <MotionDiv className="w-full px-6 mb-16 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Our Pharma Marketing Material Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We support pharma brands with scientifically sound, strategically
              positioned marketing content across the product lifecycle.
            </p>
          </div>
        </MotionDiv>

        <div className="px-6 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {MARKETING_CONTENT.map((item) => (
            <MotionCard key={item.title} className="h-full">
              <div className="group h-full bg-white border-2 border-gray-100 hover:border-blue-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.subtitle}</p>
                <ul className="space-y-3">
                  {item.list.map((li, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 text-blue-500">•</span>
                      <span className="text-gray-600">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach balancing brand strategy, scientific
              evidence, and compliance.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Medical & Market Understanding",
              "Strategic Positioning & Content Development",
              "Medical Review & Final Delivery",
            ].map((step, i) => (
              <MotionCard
                key={i}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-slate-700 mb-4">
                    {step}
                  </h3>
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
