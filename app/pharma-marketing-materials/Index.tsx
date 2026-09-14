"use client";

import React from "react";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageHero from "@/components/site/PageHero";
import MotionDiv from "@/components/MotionDiv";
import MotionCard from "@/components/MotionCard";
import NextLink from "next/link";
import BannerItem from "../../assets/image/medical-writing-review.jpg";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import {
  CheckMark,
  Eyebrow,
  GlowCard,
  SectionHeading,
  StepMarker,
} from "@/components/site/ui";

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
    <main className="relative isolate" style={pageBackdrop()}>
      {/* Header */}
      <PageHero
        eyebrow="Medical Affairs"
        title="Pharma Marketing Material Development"
        lead="Scientific, compliant, and insight-driven marketing content for pharma and healthcare brands"
      />

      {/* Why Choose Us */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Why Vivoclin"
              title="Why Choose Us?"
              lead="We develop pharma marketing materials that balance scientific credibility, regulatory compliance, and brand objectives."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              "Strong clinical pharmacy & life sciences foundation",
              "Experience across multiple therapeutic areas",
              "Ethical, evidence-based & compliance-focused content",
            ].map((reason, index) => (
              <MotionCard
                key={reason}
                delay={index * 0.08}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-8">
                    <StepMarker index={index + 1} />
                    <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-brand-ink">
                      {reason}
                    </h3>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <MotionDiv initialTranslateY={40}>
            <Eyebrow>Brand Communication</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Evidence-Led Pharma Brand Communication
            </h2>
            <span
              aria-hidden="true"
              className="mt-6 block h-px w-16 bg-brand-accent"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-body sm:text-lg">
              Vivoclin helps pharma brands translate complex clinical and
              scientific data into clear, credible, and compliant marketing
              materials that resonate with healthcare professionals.
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

          <MotionCard>
            <figure className="group relative overflow-hidden rounded-md border border-brand-line shadow-[0_2px_10px_rgb(16,24,40,0.05)]">
              <Image
                src={BannerItem}
                alt="Scientific content being reviewed and annotated"
                quality={82}
                placeholder="blur"
                sizes="(max-width: 1024px) 92vw, 620px"
                className="aspect-[5/4] h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                priority
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
              />
            </figure>
          </MotionCard>
        </div>
      </section>

      {/* Services */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Deliverables"
              title="Our Pharma Marketing Material Services"
              lead="We support pharma brands with scientifically sound, strategically positioned marketing content across the product lifecycle."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {MARKETING_CONTENT.map((item, index) => (
              <MotionCard
                key={item.title}
                delay={index * 0.07}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <StepMarker index={index + 1} />
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-brand-body">
                      {item.subtitle}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {item.list.map((li) => (
                        <li key={li} className="flex items-start gap-2.5">
                          <CheckMark className="mt-px" />
                          <span className="text-sm leading-relaxed text-slate-700">
                            {li}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Process"
              title="Our Approach"
              lead="A structured approach balancing brand strategy, scientific evidence, and compliance."
            />
          </MotionDiv>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              "Medical & Market Understanding",
              "Strategic Positioning & Content Development",
              "Medical Review & Final Delivery",
            ].map((step, index) => (
              <MotionCard
                key={step}
                delay={index * 0.08}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <li className="group/glow relative h-full list-none rounded-md border border-brand-line bg-white transition-colors duration-300 hover:border-brand-accent/40 hover:">
                  <div className="relative flex h-full flex-col rounded-md bg-white p-8">
                    <StepMarker index={index + 1} />
                    <h3 className="mt-6 text-lg font-bold leading-snug tracking-tight text-brand-ink">
                      {step}
                    </h3>
                  </div>
                </li>
              </MotionCard>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default Page;
