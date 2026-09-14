"use client";

import NextLink from "next/link";
import React from "react";
import {
  LuArrowRight,
  LuChartColumn,
  LuClipboardCheck,
  LuDatabase,
  LuMicroscope,
  LuWifi,
} from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageHero from "@/components/site/PageHero";
import {
  GlowCard,
  IconBadge,
  SectionHeading,
  StepMarker,
} from "@/components/site/ui";
import { SPECIALTIES } from "@/utils/Constant";

const services = [
  {
    title: "On-Site Monitoring",
    description:
      "Ensuring protocol compliance at investigational sites, verifying source data accuracy, and assessing site performance.",
    icon: LuMicroscope,
  },
  {
    title: "Remote Monitoring",
    description:
      "Using advanced tools to review data and documentation remotely, with real-time risk assessment and issue identification.",
    icon: LuWifi,
  },
  {
    title: "Risk-Based Monitoring (RBM)",
    description:
      "Focusing resources on critical data and processes, adopting a data-driven approach to identify and mitigate risks.",
    icon: LuChartColumn,
  },
  {
    title: "Compliance Audits",
    description:
      "Ensuring adherence to ICH-GCP, regulatory guidelines, and study protocols. Preparing sites for regulatory inspections.",
    icon: LuClipboardCheck,
  },
  {
    title: "Data Monitoring and Quality Assurance",
    description:
      "Identifying and resolving data discrepancies, overseeing safety reporting and adverse event documentation.",
    icon: LuDatabase,
  },
];

const Index = () => {
  return (
    <main className="relative isolate" style={pageBackdrop()}>
      <PageHero
        eyebrow="Clinical Trial Monitoring"
        title="Your Partner in Clinical Excellence"
        lead={
          <>
            Advanced monitoring solutions and specialized expertise in diverse
            therapeutic areas to support your clinical trials.
            <span className="mt-8 block">
              <NextLink
                href="/about"
                className="group/cta inline-flex items-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-7 py-3.5 text-sm font-bold "
              >
                Learn More About Our Services
                <LuArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                  aria-hidden="true"
                />
              </NextLink>
            </span>
          </>
        }
      />

      {/* Monitoring solutions */}
      <section id="services" className="relative isolate py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Capabilities"
              title="Comprehensive Monitoring Solutions"
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <MotionCard
                key={service.title}
                delay={index * 0.06}
                className={`h-full transition-transform duration-500 hover:-translate-y-0.5 ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <IconBadge icon={service.icon} />
                      <StepMarker index={index + 1} />
                    </div>
                    <h3
                      className={`mt-6 font-semibold tracking-tight text-brand-ink ${
                        index < 2 ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-body">
                      {service.description}
                    </p>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic specialties */}
      <section
        id="specialties"
        className="relative isolate overflow-hidden py-20 lg:py-28"
      >

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Therapeutic Expertise"
              title="Therapeutic Expertise Across Diverse Areas"
              lead="Our investigational sites specialize in a wide range of therapeutic areas, providing comprehensive support for clinical trials. Each specialty is backed by a team of experienced researchers and state-of-the-art facilities, ensuring high-quality, reliable results."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SPECIALTIES.map((specialty, index) => (
              <MotionCard
                key={specialty.name}
                delay={index * 0.06}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-7">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-8 w-1 rounded-full bg-brand-accent"
                      />
                      <h3 className="text-lg font-semibold tracking-tight text-brand-ink">
                        {specialty.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-brand-body">
                      {specialty.description}
                    </p>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        id="contact"
        className="relative isolate overflow-hidden py-20 lg:py-28"
      >

        <MotionDiv
          initialTranslateY={32}
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Let&apos;s Work Together
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-16 bg-brand-accent"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-body sm:text-lg">
            Ready to elevate your clinical trials? Contact us today to learn how
            our monitoring services and therapeutic expertise can help.
          </p>

          <NextLink
            href="/about#contact"
            className="group/cta mt-9 inline-flex items-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-8 py-4 text-sm font-bold "
          >
            Contact Us Now
            <LuArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              aria-hidden="true"
            />
          </NextLink>
        </MotionDiv>
      </section>
    </main>
  );
};

export default Index;
