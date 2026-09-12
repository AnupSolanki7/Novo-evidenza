"use client";

import Image from "next/image";
import NextLink from "next/link";
import { LuArrowRight, LuFileCheck, LuShieldCheck } from "react-icons/lu";

import MotionDiv from "@/components/MotionDiv";
import HeroImage from "../../assets/image/hero-dna-research.jpg";
import { HeroMesh, HeroFade } from "./PageMesh";
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
        {/* Layered atmosphere: colour mesh → grain → hairline mesh */}
        <div
          aria-hidden="true"
          className="bg-mesh pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="bg-grain pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
        />
        <HeroMesh />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 pb-16 pt-[124px] sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-[168px]">
          {/* Left column */}
          <MotionDiv initialTranslateY={32} className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-200 backdrop-blur-sm">
              <StatusDot />
              ICH-GCP, FDA &amp; Local Guideline Compliance
            </span>

            <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[3.25rem] lg:text-[4.25rem]">
              Advancing Clinical
              <br className="hidden sm:block" /> Research with{" "}
              <span className="relative whitespace-nowrap">
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent">
                  Precision
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 240 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full"
                >
                  <path
                    d="M2 8.5C48 3.5 96 2.5 142 4.5c32 1.4 64 3.4 96 5"
                    fill="none"
                    stroke="url(#heroUnderline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="heroUnderline" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_8px_30px_-6px_rgb(56,189,248,0.6)] transition-all duration-300 hover:shadow-[0_12px_40px_-6px_rgb(56,189,248,0.75)]"
              >
                Learn More
                <LuArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </NextLink>
              <NextLink
                href="/about#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                Schedule RFP / Proposal
              </NextLink>
            </div>

            {/* KPI ribbon */}
            <dl className="mt-12 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
              {HERO_KPIS.map((kpi, index) => (
                <div
                  key={kpi.label}
                  className={`group px-4 py-5 transition-colors duration-300 hover:bg-white/[0.04] sm:px-6 ${
                    index > 0 ? "border-l border-white/10" : ""
                  }`}
                >
                  <dt className="sr-only">{kpi.label}</dt>
                  <dd>
                    <span className="block bg-gradient-to-br from-white to-slate-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
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
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[2rem] bg-gradient-to-tr from-sky-500/25 to-teal-400/15 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_30px_80px_-20px_rgb(2,12,34,0.9)] backdrop-blur-sm">
                <Image
                  src={HeroImage}
                  alt="Illustration of a DNA double helix representing clinical research"
                  quality={85}
                  placeholder="blur"
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                  priority
                />
                {/* Gentle top sheen across the frame */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-[#0B132B]/50 via-transparent to-white/5"
                />
              </div>

              {/* Floating glass metric cards */}
              <div className="animate-float-slow absolute -left-3 top-8 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B132B]/85 px-4 py-3 shadow-[0_10px_40px_rgb(2,12,34,0.45)] backdrop-blur-md sm:-left-8">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
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
                className="animate-float-slow absolute -right-2 bottom-10 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B132B]/85 px-4 py-3 shadow-[0_10px_40px_rgb(2,12,34,0.45)] backdrop-blur-md sm:-right-6"
                style={{ animationDelay: "1.4s" }}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300 ring-1 ring-inset ring-sky-400/20">
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
                  className="flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300"
                  aria-hidden={index >= MARQUEE_ITEMS.length}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HeroFade />
    </section>
  );
};

export default HeroSection;
