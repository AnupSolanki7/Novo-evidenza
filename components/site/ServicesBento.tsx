"use client";

import NextLink from "next/link";
import React from "react";
import {
  LuActivity,
  LuArrowRight,
  LuBrainCircuit,
  LuBuilding2,
  LuMegaphone,
} from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { CheckMark, GlowCard, IconBadge, SectionHeading, StatusDot, Tag } from "./ui";

/**
 * Featured services occupy two columns and expose their full capability list;
 * standard services take a single column. Copy is carried over verbatim from
 * the existing service pages and the SERVICES constant.
 */
const FEATURED = [
  {
    id: "smo",
    title: "Site Management Organization",
    href: "/smo",
    icon: LuBuilding2,
    summary:
      "Vivoclin's SMO: APAC clinical research leader in site management, trial startups, and compliance.",
    tags: ["Site Management", "Trial Start-Up", "ICH-GCP"],
    features: [
      "Site Identification & Feasibility",
      "Site Setup & Initiation",
      "Patient Recruitment & Retention",
      "Regulatory Compliance & Ethics",
    ],
    diagram: "flow" as const,
  },
  {
    id: "ctm",
    title: "Clinical Trial Monitoring",
    href: "/ctm",
    icon: LuActivity,
    summary:
      "Advanced monitoring solutions and specialized expertise in diverse therapeutic areas to support your clinical trials.",
    tags: ["On-Site", "Remote", "Risk-Based"],
    features: [
      "On-Site Monitoring",
      "Remote Monitoring",
      "Risk-Based Monitoring (RBM)",
      "Compliance Audits",
      "Data Monitoring and Quality Assurance",
    ],
    diagram: "coverage" as const,
  },
];

const STANDARD = [
  {
    id: "pharma-marketing-materials",
    title: "Pharma Marketing Materials",
    href: "/pharma-marketing-materials",
    icon: LuMegaphone,
    summary:
      "Scientifically accurate, compliant, and strategically positioned marketing content for pharmaceutical brands.",
    tags: ["Promotional", "Medical Affairs"],
  },
  {
    id: "clinical-data-ai",
    title: "Clinical Data & AI Solutions",
    href: "/clinical-data-ai",
    icon: LuBrainCircuit,
    summary:
      "Clinical data sourcing, curation, annotation, QC, and clinical validation to build AI-ready healthcare datasets.",
    tags: ["Annotation", "Clinical Validation"],
  },
];

/** Compact site-lifecycle flow shown inside the SMO featured card. */
const FlowDiagram = () => (
  <div className="rounded-xl border border-brand-line bg-slate-50/70 p-4">
    <div className="flex items-center justify-between gap-1.5">
      {["Identify", "Initiate", "Recruit", "Comply"].map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-1 flex-col items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[11px] font-semibold text-brand-accent ring-1 ring-inset ring-sky-200">
              {index + 1}
            </span>
            <span className="text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              {step}
            </span>
          </div>
          {index < 3 ? (
            <span
              aria-hidden="true"
              className="mb-5 h-px flex-1 bg-brand-line"
            />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  </div>
);

/** Monitoring-mode coverage strip shown inside the CTM featured card. */
const CoverageDiagram = () => (
  <div className="rounded-xl border border-brand-line bg-slate-50/70 p-4">
    <div className="mb-3 flex items-center gap-2">
      <StatusDot tone="cyan" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        Monitoring Modes
      </span>
    </div>
    <div className="space-y-2.5">
      {[
        { label: "On-Site", width: "w-full" },
        { label: "Remote", width: "w-4/5" },
        { label: "Risk-Based", width: "w-3/5" },
      ].map((row) => (
        <div key={row.label} className="flex items-center gap-3">
          <span className="w-[72px] shrink-0 text-[11px] font-medium text-slate-500">
            {row.label}
          </span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
            <span
              className={`block h-full rounded-full bg-brand-accent ${row.width}`}
            />
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ServicesBento = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <MotionDiv initialTranslateY={40}>
          <SectionHeading
            eyebrow="Capabilities"
            title="Integrated CRO Services"
            lead="We offer a comprehensive suite of services designed to meet the diverse needs of the pharmaceutical industry"
          />
        </MotionDiv>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Row 1 — featured SMO + standard */}
          <MotionCard className="h-full lg:col-span-2">
            <FeaturedCard service={FEATURED[0]} />
          </MotionCard>
          <MotionCard delay={0.08} className="h-full">
            <StandardCard service={STANDARD[0]} />
          </MotionCard>

          {/* Row 2 — standard + featured CTM */}
          <MotionCard delay={0.16} className="h-full">
            <StandardCard service={STANDARD[1]} />
          </MotionCard>
          <MotionCard delay={0.24} className="h-full lg:col-span-2">
            <FeaturedCard service={FEATURED[1]} />
          </MotionCard>
        </div>
      </div>
    </section>
  );
};

const FeaturedCard = ({ service }: { service: (typeof FEATURED)[number] }) => (
  <GlowCard className="transition-transform duration-500 hover:-translate-y-0.5">
    <article className="flex h-full flex-col p-7 sm:p-8">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex items-center gap-4">
        <IconBadge icon={service.icon} />
        <h3 className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl">
          {service.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <Tag key={tag} tone="cyan">
            {tag}
          </Tag>
        ))}
      </div>
    </div>

    <p className="mt-5 text-[15px] leading-relaxed text-brand-body">
      {service.summary}
    </p>

    <div className="mt-6 grid flex-1 gap-6 sm:grid-cols-2">
      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckMark className="mt-px" />
            <span className="text-sm leading-relaxed text-slate-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-start">
        <div className="w-full">
          {service.diagram === "flow" ? <FlowDiagram /> : <CoverageDiagram />}
        </div>
      </div>
    </div>

    <div className="mt-7 border-t border-brand-line pt-5">
      <NextLink
        href={service.href}
        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accentDark"
      >
        <span className="animated-underline">Explore {service.title}</span>
        <LuArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
          aria-hidden="true"
        />
      </NextLink>
    </div>
    </article>
  </GlowCard>
);

const StandardCard = ({ service }: { service: (typeof STANDARD)[number] }) => (
  <GlowCard className="transition-transform duration-500 hover:-translate-y-0.5">
    <article className="flex h-full flex-col p-7 sm:p-8">
    <IconBadge icon={service.icon} />
    <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand-ink">
      {service.title}
    </h3>
    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-body">
      {service.summary}
    </p>
    <div className="mt-5 flex flex-wrap gap-1.5">
      {service.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
    <div className="mt-6 border-t border-brand-line pt-5">
      <NextLink
        href={service.href}
        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accentDark"
      >
        <span className="animated-underline">Read more</span>
        <LuArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
          aria-hidden="true"
        />
      </NextLink>
    </div>
    </article>
  </GlowCard>
);

export default ServicesBento;
