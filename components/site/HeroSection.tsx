"use client";

import Image from "next/image";
import NextLink from "next/link";
import { LuArrowRight, LuFileCheck, LuShieldCheck } from "react-icons/lu";

import MotionDiv from "@/components/MotionDiv";
import HeroImage from "../../assets/image/hero-dna-research.jpg";
import { StatusDot } from "./ui";

/**
 * Hero KPI ribbon values are drawn from the site's published accomplishment
 * figures (see ACHEIVEMENTS in utils/Constant) — no new metrics are invented.
 */
const HERO_KPIS = [
  { value: "134+", label: "Projects Delivered" },
  { value: "102+", label: "HTA Submissions" },
  { value: "130+", label: "Manuscripts Delivered" },
];

/** Capability marquee — every item is a service the site actually describes. */
const MARQUEE_ITEMS = [
  "Site Identification & Feasibility",
  "On-Site Monitoring",
  "Risk-Based Monitoring",
  "Patient Recruitment & Retention",
  "Regulatory Compliance & Ethics",
  "Medical Writing",
  "Clinical Annotation",
  "Compliance Audits",
  "Data Quality Assurance",
  "Clinical Validation",
];

const HeroSection = () => {
  return (
    <section className="relative bg-[#0B132B]">
      <div className="relative overflow-hidden">

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 pb-16 pt-[124px] sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-[168px]">
          {/* Left column */}
          <MotionDiv initialTranslateY={32} className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              <StatusDot />
              ICH-GCP, FDA &amp; Local Guideline Compliance
            </span>

            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-[3.25rem] lg:text-[4.25rem]">
              Advancing Clinical
              <br className="hidden sm:block" /> Research with{" "}
              <span className="text-brand-accent">Precision</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-[1.0625rem]">
              <b className="font-semibold text-white">VivoClin</b> Research
              Services specializes in comprehensive clinical trial site support and
              pharma marketing materials. With dedicated divisions, including our{" "}
              <b className="font-semibold text-white">Australia</b> branch, our
              expert team ensures meticulous execution and delivers high-quality
              research that drives medical innovation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <NextLink
                href="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-7 py-3.5 text-sm font-bold "
              >
                Learn More
                <LuArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </NextLink>
              <NextLink
                href="/about#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                Schedule RFP / Proposal
              </NextLink>
            </div>

            {/* KPI ribbon */}
            <dl className="mt-12 grid grid-cols-3 border-t border-white/15 pt-8">
              {HERO_KPIS.map((kpi, index) => (
                <div
                  key={kpi.label}
                  className={
                    index > 0 ? "border-l border-white/10 pl-5 sm:pl-7" : "pr-5"
                  }
                >
                  <dt className="sr-only">{kpi.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {kpi.value}
                    </span>
                    <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400 sm:text-xs">
                      {kpi.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </MotionDiv>

          {/* Right column — composite visual */}
          <MotionDiv
            initialTranslateY={40}
            delay={0.15}
            transitionDuration={0.9}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src={HeroImage}
                  alt="Illustration of a DNA double helix representing clinical research"
                  quality={85}
                  placeholder="blur"
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="h-auto w-full rounded-md object-cover"
                  priority
                />
              </div>

              {/* Floating glass metric cards */}
              <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-md border border-white/15 bg-[#0B132B]/90 px-4 py-3 backdrop-blur-sm sm:-left-8">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/[0.06] text-brand-accent">
                  <LuShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">
                    Regulatory
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    ICH-GCP Aligned
                  </span>
                </span>
              </div>

              <div
                className="absolute -right-2 bottom-10 flex items-center gap-3 rounded-md border border-white/15 bg-[#0B132B]/90 px-4 py-3 backdrop-blur-sm sm:-right-6"
               
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/[0.06] text-brand-accent">
                  <LuFileCheck className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">
                    Documentation
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    Complete &amp; Audit-Ready
                  </span>
                </span>
              </div>
            </div>
          </MotionDiv>
        </div>

        {/* Capability marquee */}
        <div className="relative border-t border-white/10 py-5">
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-10">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400"
                  aria-hidden={index >= MARQUEE_ITEMS.length}
                >
                  <span className="h-1 w-1 rounded-full bg-brand-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
