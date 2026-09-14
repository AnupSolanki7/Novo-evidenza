"use client";

import NextLink from "next/link";
import { LuArrowRight, LuCircleCheck, LuFileText } from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { CheckMark, Eyebrow, StatusDot } from "./ui";

const DELIVERABLES = [
  "Visual aids, detailing aids, and leave-behind literature for HCP engagement",
  "Evidence-based brand messaging, MOA content, and guideline-aligned positioning",
  "Digital, launch, and lifecycle marketing content for pharma brands",
];

/** Deliverable pipeline mirrors the site's stated medical review workflow. */
const PIPELINE = [
  { name: "Visual & Detailing Aids", stage: "Medical Review", progress: 100 },
  { name: "MOA & Disease Education", stage: "Claim Referencing", progress: 78 },
  { name: "Launch & Lifecycle Content", stage: "Drafting", progress: 45 },
];

const WORKFLOW = [
  "Medical & Market Understanding",
  "Strategic Positioning & Content Development",
  "Medical Review & Final Delivery",
];

/** Clean document-workflow dashboard mockup used as the visual side. */
const DeliverableDashboard = () => (
  <div className="overflow-hidden rounded-md border border-brand-line bg-white shadow-[0_2px_10px_rgb(16,24,40,0.05)]">
    {/* Dashboard chrome */}
    <div className="flex items-center justify-between border-b border-brand-line bg-slate-50/80 px-5 py-3.5">
      <div className="flex items-center gap-2.5">
        <LuFileText className="h-4 w-4 text-brand-accent" aria-hidden="true" />
        <span className="text-sm font-semibold text-brand-ink">
          Content Deliverables
        </span>
      </div>
      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
        <StatusDot />
        In Review
      </span>
    </div>

    {/* Progress rows */}
    <div className="space-y-5 px-5 py-6">
      {PIPELINE.map((item) => (
        <div key={item.name}>
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <span className="truncate text-[13px] font-semibold text-brand-ink">
              {item.name}
            </span>
            <span className="shrink-0 text-[11px] font-medium text-slate-500">
              {item.stage}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-brand-accent"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Verification workflow */}
    <div className="border-t border-brand-line bg-slate-50/60 px-5 py-5">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        Review Workflow
      </p>
      <ul className="space-y-2.5">
        {WORKFLOW.map((step, index) => (
          <li key={step} className="flex items-center gap-2.5">
            <LuCircleCheck
              className={
                index === 0
                  ? "h-4 w-4 shrink-0 text-teal-500"
                  : "h-4 w-4 shrink-0 text-slate-300"
              }
              aria-hidden="true"
            />
            <span className="text-[13px] text-slate-700">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MedicalAffairsSplit = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Content side */}
        <MotionDiv initialTranslateY={50}>
          <Eyebrow>Medical Affairs</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Pharma Marketing Material Development
          </h2>

          <p className="mt-6 text-base leading-relaxed text-brand-body sm:text-lg">
            At{" "}
            <span className="font-semibold text-brand-accent">
              Vivoclin Research Services
            </span>
            , we develop scientifically accurate, strategically positioned, and
            compliance-driven pharma marketing materials. Our content bridges
            clinical evidence and brand communication to help pharma companies
            engage healthcare professionals with clarity and credibility.
          </p>

          <ul className="mt-8 space-y-4">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckMark className="mt-0.5" />
                <span className="text-[15px] leading-relaxed text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <NextLink
            href="/pharma-marketing-materials"
            className="group/cta mt-9 inline-flex items-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-7 py-3.5 text-sm font-bold "
          >
            Explore Pharma Marketing Services
            <LuArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              aria-hidden="true"
            />
          </NextLink>
        </MotionDiv>

        {/* Visual side */}
        <MotionCard>
          <DeliverableDashboard />
        </MotionCard>
      </div>
    </section>
  );
};

export default MedicalAffairsSplit;
