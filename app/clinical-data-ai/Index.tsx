"use client";

import React from "react";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageHero from "@/components/site/PageHero";
import MotionDiv from "@/components/MotionDiv";
import MotionCard from "@/components/MotionCard";
import NextLink from "next/link";
import BannerItem from "../../assets/image/clinical-data-imaging.jpg";
import Image from "next/image";
import {
  LuArrowRight,
  LuBrain,
  LuChartLine,
  LuCheckCheck,
  LuClipboardCheck,
  LuDatabase,
  LuFlaskConical,
  LuLayers,
  LuNotebookPen,
  LuScanLine,
  LuHeartPulse,
  LuSearch,
  LuShieldCheck,
  LuTags,
  LuUserCheck,
} from "react-icons/lu";
import {
  CheckMark,
  Eyebrow,
  GlowCard,
  IconBadge,
  SectionHeading,
  StepMarker,
} from "@/components/site/ui";

const CAPABILITIES = [
  {
    title: "Clinical Data Sourcing",
    subtitle:
      "Identification and sourcing of relevant clinical datasets through appropriate healthcare and clinical networks.",
    Icon: LuSearch,
  },
  {
    title: "Data Curation & Structuring",
    subtitle:
      "Organizing heterogeneous clinical information into structured datasets aligned with specific AI development requirements.",
    Icon: LuLayers,
  },
  {
    title: "Clinical Annotation",
    subtitle:
      "Expert-led annotation and labelling of clinical data using predefined protocols, ontologies, and annotation guidelines.",
    Icon: LuTags,
  },
  {
    title: "Data De-identification",
    subtitle:
      "Supporting appropriate de-identification and privacy-focused data handling workflows for permitted use cases.",
    Icon: LuShieldCheck,
  },
  {
    title: "Quality Control & Review",
    subtitle:
      "Multi-level review and quality-control processes to improve consistency, accuracy, and reliability of annotated datasets.",
    Icon: LuCheckCheck,
  },
  {
    title: "Clinical Validation",
    subtitle:
      "Clinician-led review and validation of datasets, outputs, and AI models against defined clinical criteria.",
    Icon: LuUserCheck,
  },
];

const DATA_MODALITIES = [
  {
    title: "Medical Imaging",
    Icon: LuScanLine,
    list: [
      "X-ray",
      "CT",
      "MRI",
      "Ultrasound",
      "Other diagnostic imaging modalities",
    ],
  },
  {
    title: "Cardiology",
    Icon: LuHeartPulse,
    list: [
      "ECG",
      "Echocardiography",
      "CathLab data",
      "Cardiovascular diagnostic information",
    ],
  },
  {
    title: "Clinical Data",
    Icon: LuDatabase,
    list: [
      "Electronic health record-derived data",
      "Clinical records",
      "Laboratory data",
      "Diagnostic information",
      "Structured and semi-structured clinical datasets",
    ],
  },
  {
    title: "Clinical & Medical Text",
    Icon: LuNotebookPen,
    list: [
      "Clinical notes",
      "Medical reports",
      "Discharge summaries",
      "Medical literature",
      "Healthcare documentation",
      "Clinical NLP datasets",
    ],
  },
];

const AI_STAGES = [
  {
    title: "AI Training",
    subtitle:
      "Develop datasets with clinically meaningful labels and annotations for supervised and multimodal AI development.",
    Icon: LuBrain,
  },
  {
    title: "AI Validation",
    subtitle:
      "Create independent, clinically reviewed datasets for evaluating model performance and robustness.",
    Icon: LuClipboardCheck,
  },
  {
    title: "AI Evaluation",
    subtitle:
      "Support structured clinical assessment of AI-generated outputs against predefined criteria.",
    Icon: LuChartLine,
  },
  {
    title: "Research & Development",
    subtitle:
      "Support academic, healthcare, life-science, and technology organizations developing new clinical AI applications.",
    Icon: LuFlaskConical,
  },
];

const WORKFLOW_STEPS = [
  "Clinical experts",
  "Defined annotation protocols",
  "Structured data workflows",
  "Quality control",
  "Clinical review & adjudication",
  "AI-ready dataset",
];

const ENGAGEMENT_MODELS = [
  {
    title: "Pilot Projects",
    subtitle:
      "Start with a defined sample dataset to evaluate feasibility, annotation requirements, quality, and turnaround time.",
  },
  {
    title: "Dataset Development",
    subtitle:
      "Develop larger clinical datasets according to your specifications, including sourcing, annotation, curation, and QC.",
  },
  {
    title: "Ongoing Annotation Programs",
    subtitle:
      "Support continuous data annotation and clinical review requirements as your AI program scales.",
  },
  {
    title: "Clinical Validation Projects",
    subtitle:
      "Develop and execute structured clinical validation workflows for healthcare AI models and datasets.",
  },
];

const REQUIREMENTS = [
  "Target clinical population",
  "Data modality",
  "Dataset size",
  "Annotation requirements",
  "Label definitions",
  "Clinical specialties",
  "Quality thresholds",
  "Review methodology",
  "Delivery format",
  "Project timelines",
];

const DIFFERENTIATORS = [
  {
    title: "Clinical Understanding",
    subtitle:
      "Our workflows are designed around real clinical context rather than generic data processing.",
  },
  {
    title: "Flexible & Scalable",
    subtitle:
      "Engagements can start with a focused pilot and scale based on project requirements.",
  },
  {
    title: "Quality-Focused",
    subtitle:
      "Structured annotation guidelines, review processes, and QC help maintain dataset consistency.",
  },
  {
    title: "Multi-Specialty Capability",
    subtitle:
      "We can support projects spanning multiple clinical specialties and data modalities.",
  },
  {
    title: "End-to-End Support",
    subtitle:
      "From sourcing and curation to annotation, QC, and clinical validation, we can support multiple stages of the data lifecycle.",
  },
];

const Page = () => {
  return (
    <main className="relative isolate" style={pageBackdrop()}>
      {/* Header */}
      <PageHero
        eyebrow="Clinical Data & AI"
        title={<>Clinical Data &amp; AI Solutions</>}
        lead="Building high-quality clinical datasets for the next generation of healthcare AI"
      />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <MotionDiv initialTranslateY={40}>
            <Eyebrow>AI-Ready Data</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Clinically Meaningful Data for Healthcare AI
            </h2>
            <span
              aria-hidden="true"
              className="mt-6 block h-px w-16 bg-brand-accent"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-body sm:text-lg">
              Healthcare AI depends on more than large volumes of data. It
              requires{" "}
              <span className="font-semibold text-brand-ink">
                relevant, well-structured, clinically meaningful, and
                quality-controlled data
              </span>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-body sm:text-lg">
              At Vivoclin, we support healthcare AI companies, technology
              companies, research organizations, and life-science teams with
              clinical data sourcing, curation, annotation, quality control, and
              clinical validation &mdash; helping transform complex healthcare
              information into AI-ready datasets and clinically validated
              resources.
            </p>
            <NextLink
              href="/about#contact"
              className="group/cta mt-9 inline-flex items-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-7 py-3.5 text-sm font-bold "
            >
              Discuss Your Data Requirements
              <LuArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </NextLink>
          </MotionDiv>

          <MotionCard>
            <div className="group relative overflow-hidden rounded-md border border-brand-line shadow-[0_2px_10px_rgb(16,24,40,0.05)]">
              <Image
                src={BannerItem}
                alt="Clinicians reviewing medical imaging data on a workstation"
                quality={82}
                placeholder="blur"
                sizes="(max-width: 1024px) 92vw, 620px"
                className="aspect-[5/4] h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                priority
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
              />
            </div>
          </MotionCard>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Data Lifecycle"
              title="From Clinical Data to AI-Ready Datasets"
              lead="Developing healthcare AI often requires specialized clinical data that is difficult to source, structure, and accurately label. Vivoclin brings together clinical expertise, data operations, and quality-focused workflows to support organizations throughout the data lifecycle."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, index) => (
              <MotionCard
                key={item.title}
                delay={index * 0.06}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-8">
                    <div className="flex items-start justify-between">
                      <IconBadge icon={item.Icon} />
                      <StepMarker index={index + 1} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-brand-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-body">
                      {item.subtitle}
                    </p>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Data We Support */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Modalities"
              title="Clinical Data We Support"
              lead="We can support a range of clinical data modalities depending on project requirements, availability, and permitted use."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {DATA_MODALITIES.map((item, index) => (
              <MotionCard
                key={item.title}
                delay={index * 0.07}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center gap-4">
                      <IconBadge icon={item.Icon} />
                      <h3 className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
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

      {/* Built for Healthcare AI */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Applications"
              title="Built for Healthcare AI"
              lead="Our workflows can support different stages of AI development."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AI_STAGES.map((item, index) => (
              <MotionCard
                key={item.title}
                delay={index * 0.07}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <div className="group/glow relative h-full rounded-md border border-brand-line bg-white transition-colors duration-300 hover:border-brand-accent/40 hover:">
                  <article className="relative flex h-full flex-col rounded-md bg-white p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-white">
                      <item.Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-brand-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-body">
                      {item.subtitle}
                    </p>
                  </article>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Expertise Meets Data Operations */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Workflow"
              title="Clinical Expertise Meets Data Operations"
              lead="Generic data annotation is not enough for healthcare. Clinical datasets often require an understanding of medical terminology, diagnostic context, clinical workflows, and specialty-specific interpretation. Vivoclin combines clinical expertise with structured data workflows to help organizations address this challenge."
            />
          </MotionDiv>

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW_STEPS.map((step, index) => (
              <MotionCard
                key={step}
                delay={index * 0.05}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <li className="flex h-full list-none items-center gap-4 p-6">
                    <StepMarker index={index + 1} />
                    <p className="font-semibold leading-snug text-brand-ink">
                      {step}
                    </p>
                  </li>
                </GlowCard>
              </MotionCard>
            ))}
          </ol>
        </div>
      </section>

      {/* Flexible Engagement Models */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Engagement"
              title="Flexible Engagement Models"
              lead="We can support projects from initial feasibility through large-scale data programs."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {ENGAGEMENT_MODELS.map((item, index) => (
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
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Designed Around Your Requirements */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading
              eyebrow="Scoping"
              title="Designed Around Your Requirements"
              lead="Every AI development program has different data requirements. We can work with your team to define:"
            />
          </MotionDiv>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {REQUIREMENTS.map((item, index) => (
              <MotionCard key={item} delay={index * 0.04}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-brand-line bg-white px-5 py-4 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-[0_10px_30px_-12px_rgb(2,30,62,0.2)]">
                  <CheckMark />
                  <span className="font-semibold text-brand-ink">{item}</span>
                </div>
              </MotionCard>
            ))}
          </div>

          <MotionDiv initialTranslateY={28} className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-base leading-relaxed text-brand-body sm:text-lg">
              Whether you need a small validation dataset or a scalable clinical
              data program, we can structure the engagement around your
              requirements.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Why Work With Vivoclin */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={32}>
            <SectionHeading eyebrow="Differentiators" title="Why Work With Vivoclin?" />
          </MotionDiv>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, index) => (
              <MotionCard
                key={item.title}
                delay={index * 0.06}
                className="h-full transition-transform duration-500 hover:-translate-y-0.5"
              >
                <GlowCard>
                  <article className="flex h-full flex-col p-8">
                    <StepMarker index={index + 1} />
                    <h3 className="mt-6 text-lg font-semibold tracking-tight text-brand-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-body">
                      {item.subtitle}
                    </p>
                  </article>
                </GlowCard>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <MotionDiv
          initialTranslateY={32}
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Looking for Clinical Data or AI Support?
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-16 bg-brand-accent"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-body sm:text-lg">
            Tell us what you are building and what your data requirements look
            like. Our team can work with you to assess feasibility, data
            requirements, annotation scope, and an appropriate engagement model.
          </p>
          <p className="mt-6 text-xl font-semibold text-brand-ink sm:text-2xl">
            Let&apos;s Build Better Healthcare AI.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NextLink
              href="/about#contact"
              className="group/cta inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent text-white shadow-sm transition-colors hover:bg-brand-accentDark px-8 py-4 text-sm font-bold "
            >
              Talk to Our Team
              <LuArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </NextLink>
            <NextLink
              href="/about#contact"
              className="inline-flex items-center justify-center rounded-md border border-brand-line px-8 py-4 text-sm font-semibold text-brand-ink transition-all duration-300 hover:border-slate-400 hover:bg-white"
            >
              Submit Your Data Requirement
            </NextLink>
          </div>
        </MotionDiv>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-brand-line/70 py-10">
        <p className="mx-auto max-w-4xl px-5 text-center text-sm leading-relaxed text-slate-500 sm:px-6 lg:px-10">
          All data-related activities are subject to applicable laws,
          regulations, permissions, contractual requirements, and data-use
          rights. Data availability and project feasibility are assessed on a
          project-specific basis.
        </p>
      </section>
    </main>
  );
};

export default Page;
