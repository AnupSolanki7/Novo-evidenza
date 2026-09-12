"use client";

import Image from "next/image";
import NextLink from "next/link";
import { LuArrowRight } from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import SiteImage from "../../assets/image/smo-investigational-site.jpg";
import { CheckMark, Eyebrow, StatusDot } from "./ui";

const SMO_SERVICES = [
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

/**
 * Metric strip figures come from the site's published accomplishment counters
 * (ACHEIVEMENTS in utils/Constant) — no new performance claims are introduced.
 */
const METRICS = [
  { value: "134+", label: "Projects Delivered" },
  { value: "102+", label: "HTA Submissions" },
  { value: "15+", label: "Meta Analyses" },
];

const SmoFeatureSplit = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Visual side */}
        <MotionCard className="order-2 lg:order-1">
          <figure className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgb(2,30,62,0.25)]">
            <Image
              src={SiteImage}
              alt="Equipped investigational site procedure room"
              quality={82}
              placeholder="blur"
              sizes="(max-width: 1024px) 92vw, 620px"
              className="aspect-[5/4] h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
            />

            {/* Floating live status tag */}
            <figcaption className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
              <StatusDot />
              Investigator Active
            </figcaption>

            <div className="absolute bottom-4 right-4 rounded-xl border border-white/60 bg-white/85 px-4 py-2.5 shadow-sm backdrop-blur-md">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Documentation
              </span>
              <span className="block text-sm font-bold text-slate-900">
                ICH-GCP Aligned
              </span>
            </div>
          </figure>
        </MotionCard>

        {/* Content side */}
        <MotionDiv initialTranslateY={50} className="order-1 lg:order-2">
          <Eyebrow>Site Operations</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Site Management Organization
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Comprehensive clinical trial management solutions ensuring quality,
            compliance, and efficiency
          </p>

          <div className="mt-7 border-l-2 border-sky-500 pl-6">
            <p className="text-[15px] leading-relaxed text-slate-700">
              Our comprehensive SMO services deliver excellence in clinical trial
              management through strategic site selection, seamless operational
              setup, and robust patient engagement programs. We optimize trial
              execution by combining industry expertise with innovative
              methodologies.
            </p>
          </div>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {SMO_SERVICES.map((service) => (
              <li key={service.title} className="flex items-start gap-3">
                <CheckMark className="mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Dark metric strip */}
          <dl className="relative mt-9 grid grid-cols-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#0B132B] shadow-[0_16px_40px_-16px_rgb(2,30,62,0.5)]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl"
            />
            {METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={
                  index > 0
                    ? "relative border-l border-white/10 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.04] sm:px-5"
                    : "relative px-4 py-5 transition-colors duration-300 hover:bg-white/[0.04] sm:px-5"
                }
              >
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block bg-gradient-to-br from-white to-slate-400 bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-2xl">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400 sm:text-[11px]">
                    {metric.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <NextLink
            href="/smo"
            className="group/cta mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_8px_24px_-8px_rgb(14,165,233,0.7)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgb(14,165,233,0.85)]"
          >
            Discover Our SMO Services
            <LuArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              aria-hidden="true"
            />
          </NextLink>
        </MotionDiv>
      </div>
    </section>
  );
};

export default SmoFeatureSplit;
