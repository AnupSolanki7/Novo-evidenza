"use client";

import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import {
  LuArrowRight,
  LuCalendarCheck,
  LuHeadset,
  LuHospital,
  LuFileChartColumn,
} from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageHero from "@/components/site/PageHero";
import {
  ArrowLink,
  CheckMark,
  Eyebrow,
  GlowCard,
  IconBadge,
  SectionHeading,
  StepMarker,
} from "@/components/site/ui";
import { SMO_SERVICES } from "@/utils/Constant";
import FacilityImage from "../../assets/image/smo-clinical-facility.jpg";
import LabImage from "../../assets/image/smo-laboratory-analysis.jpg";

const coreExpertise = [
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

const servicePortfolio = [
  {
    title: "Site Coordination",
    description:
      "Schedule management, subject recruitment, AE/SAE reporting, and more.",
    icon: LuCalendarCheck,
  },
  {
    title: "Site Management",
    description:
      "Ensuring operational efficiency with services such as data entry and equipment management.",
    icon: LuHospital,
  },
  {
    title: "Reporting",
    description:
      "IRB submissions, protocol deviation reporting, and full regulatory compliance.",
    icon: LuFileChartColumn,
  },
  {
    title: "Contact Center",
    description:
      "A 24-hour call center (coming soon) for real-time responses, privacy consultations, and query handling.",
    icon: LuHeadset,
  },
];

const Page = () => {
  return (
    <main className="relative isolate" style={pageBackdrop()}>
      <PageHero
        eyebrow="Site Operations"
        title="Clinical Trial SMO Services"
        lead="Comprehensive Site Management Solutions for Clinical Trials"
      />

      {/* Intro split */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <MotionCard className="order-2 lg:order-1">
            <figure className="group relative overflow-hidden rounded-md border border-brand-line shadow-[0_2px_10px_rgb(16,24,40,0.05)]">
              <Image
                src={FacilityImage}
                alt="Modern clinical research facility interior"
                quality={82}
                placeholder="blur"
                sizes="(max-width: 1024px) 92vw, 620px"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                priority
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
              />
            </figure>
          </MotionCard>

          <MotionDiv initialTranslateY={40} className="order-1 lg:order-2">
            <Eyebrow>SMO Division</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Discover the Power of{" "}
              <span className="text-brand-accent">
                Clinical Excellence
              </span>
            </h2>
            <span
              aria-hidden="true"
              className="mt-7 block h-[3px] w-10 bg-brand-accent"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-body sm:text-lg">
              At Vivoclin Research SMO Division, we provide end-to-end Site
              Management Organization (SMO) services to streamline your clinical
              trials. From site selection and patient recruitment to regulatory
              compliance and quality assurance, our services are designed to
              ensure the success of your studies while reducing operational
              burdens for sponsors and CROs.
            </p>

            <NextLink
              href="/about"
              className="group/cta mt-9 inline-flex items-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-7 py-3.5 text-sm font-bold "
            >
              Let&apos;s Connect
              <LuArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </NextLink>
          </MotionDiv>
        </div>
      </section>

      {/* Redefining excellence — six pillars */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Our Approach"
              title="Redefining Clinical Research Excellence"
              lead="We specialize in optimizing clinical trial operations through expert site management, quality compliance, and efficient processes. Our experienced teams work collaboratively to ensure successful trial outcomes while maintaining the highest industry standards."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SMO_SERVICES.map((item: any, index: number) => (
              <MotionCard
                key={item.title}
                delay={index * 0.06}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-8">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accentSoft ring-1 ring-inset ring-sky-100 [&>*]:h-6 [&>*]:w-6 [&>*]:fill-sky-600">
                        <item.icon />
                      </span>
                      <StepMarker index={index + 1} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-brand-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-body">
                      {item.description}
                    </p>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core expertise split */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading eyebrow="Capabilities" title="Our Core Expertise" />
          </MotionDiv>

          <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="grid gap-5 sm:grid-cols-2">
              {coreExpertise.map((service, index) => (
                <MotionCard
                  key={service.title}
                  delay={index * 0.07}
                  className="h-full transition-transform duration-500 hover:-translate-y-0.5"
                >
                  <GlowCard>
                    <article className="flex h-full flex-col p-7">
                      <StepMarker index={index + 1} />
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-ink">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-brand-body">
                        {service.description}
                      </p>
                    </article>
                  </GlowCard>
                </MotionCard>
              ))}
            </div>

            <MotionCard>
              <figure className="group relative overflow-hidden rounded-md border border-brand-line shadow-[0_2px_10px_rgb(16,24,40,0.05)]">
                <Image
                  src={LabImage}
                  alt="Researcher pipetting samples into a multi-well plate"
                  quality={82}
                  placeholder="blur"
                  sizes="(max-width: 1024px) 92vw, 480px"
                  className="aspect-square h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
                />
              </figure>
            </MotionCard>
          </div>

          <MotionDiv initialTranslateY={28} className="mt-14 flex justify-center">
            <NextLink
              href="/about"
              className="group/cta inline-flex items-center gap-2 rounded-md bg-brand-ink px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Explore Our Services
              <LuArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </NextLink>
          </MotionDiv>
        </div>
      </section>

      {/* Service portfolio */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Portfolio"
              title="Our Services"
              lead="We offer a comprehensive portfolio designed to optimize your clinical research journey"
            />
          </MotionDiv>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {servicePortfolio.map((service, index) => (
              <MotionCard
                key={service.title}
                delay={index * 0.07}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <div className="group/glow relative h-full rounded-md border border-brand-line bg-white transition-colors duration-300 hover:border-brand-accent/40 hover:">
                  <article className="relative flex h-full items-start gap-4 rounded-md bg-white p-7">
                    <IconBadge icon={service.icon} />
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-brand-ink">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-brand-body">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </div>
              </MotionCard>
            ))}
          </div>

          <MotionDiv initialTranslateY={28} className="mt-14 text-center">
            <ArrowLink href="/about#contact">
              Send us your enquiry
            </ArrowLink>
          </MotionDiv>
        </div>
      </section>
    </main>
  );
};

export default Page;
