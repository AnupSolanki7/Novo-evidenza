"use client";

import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";
import MotionCard from "@/components/MotionCard";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import BannerItem from "../../assets/image/New-technologies-in-pharmaceuticals.jpg";
import Image from "next/image";
import {
  FaSearchPlus,
  FaLayerGroup,
  FaTags,
  FaShieldAlt,
  FaCheckDouble,
  FaUserMd,
  FaXRay,
  FaHeartbeat,
  FaDatabase,
  FaNotesMedical,
  FaBrain,
  FaClipboardCheck,
  FaChartLine,
  FaFlask,
} from "react-icons/fa";

const CAPABILITIES = [
  {
    title: "Clinical Data Sourcing",
    subtitle:
      "Identification and sourcing of relevant clinical datasets through appropriate healthcare and clinical networks.",
    Icon: FaSearchPlus,
  },
  {
    title: "Data Curation & Structuring",
    subtitle:
      "Organizing heterogeneous clinical information into structured datasets aligned with specific AI development requirements.",
    Icon: FaLayerGroup,
  },
  {
    title: "Clinical Annotation",
    subtitle:
      "Expert-led annotation and labelling of clinical data using predefined protocols, ontologies, and annotation guidelines.",
    Icon: FaTags,
  },
  {
    title: "Data De-identification",
    subtitle:
      "Supporting appropriate de-identification and privacy-focused data handling workflows for permitted use cases.",
    Icon: FaShieldAlt,
  },
  {
    title: "Quality Control & Review",
    subtitle:
      "Multi-level review and quality-control processes to improve consistency, accuracy, and reliability of annotated datasets.",
    Icon: FaCheckDouble,
  },
  {
    title: "Clinical Validation",
    subtitle:
      "Clinician-led review and validation of datasets, outputs, and AI models against defined clinical criteria.",
    Icon: FaUserMd,
  },
];

const DATA_MODALITIES = [
  {
    title: "Medical Imaging",
    Icon: FaXRay,
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
    Icon: FaHeartbeat,
    list: [
      "ECG",
      "Echocardiography",
      "CathLab data",
      "Cardiovascular diagnostic information",
    ],
  },
  {
    title: "Clinical Data",
    Icon: FaDatabase,
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
    Icon: FaNotesMedical,
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
    Icon: FaBrain,
  },
  {
    title: "AI Validation",
    subtitle:
      "Create independent, clinically reviewed datasets for evaluating model performance and robustness.",
    Icon: FaClipboardCheck,
  },
  {
    title: "AI Evaluation",
    subtitle:
      "Support structured clinical assessment of AI-generated outputs against predefined criteria.",
    Icon: FaChartLine,
  },
  {
    title: "Research & Development",
    subtitle:
      "Support academic, healthcare, life-science, and technology organizations developing new clinical AI applications.",
    Icon: FaFlask,
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
    <Pages className="mt-[100px] h-max min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-12 px-8 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="md:text-6xl text-3xl w-full text-center font-extrabold text-white leading-tight">
            Clinical Data &amp; AI Solutions
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-3xl mx-auto text-lg">
            Building high-quality clinical datasets for the next generation of
            healthcare AI
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-8 md:px-16 bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
            <MotionDiv className="w-full md:w-1/2">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-blue-600 md:text-5xl">
                Clinically Meaningful Data for Healthcare AI
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Healthcare AI depends on more than large volumes of data. It
                requires{" "}
                <span className="font-semibold text-slate-800">
                  relevant, well-structured, clinically meaningful, and
                  quality-controlled data
                </span>
                .
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                At Vivoclin, we support healthcare AI companies, technology
                companies, research organizations, and life-science teams with
                clinical data sourcing, curation, annotation, quality control,
                and clinical validation &mdash; helping transform complex
                healthcare information into AI-ready datasets and clinically
                validated resources.
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
                href="/about#contact"
              >
                Discuss Your Data Requirements
              </Button>
            </MotionDiv>

            <MotionDiv className="w-full md:w-1/2">
              <Image
                src={BannerItem}
                className="relative w-full rounded-2xl object-cover shadow-xl"
                width={600}
                height={600}
                alt="Clinical Data and AI Solutions"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              From Clinical Data to AI-Ready Datasets
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Developing healthcare AI often requires specialized clinical data
              that is difficult to source, structure, and accurately label.
              Vivoclin brings together clinical expertise, data operations, and
              quality-focused workflows to support organizations throughout the
              data lifecycle.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((item) => (
              <MotionCard key={item.title} className="h-full">
                <div className="group h-full bg-white border-2 border-gray-100 hover:border-blue-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <item.Icon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Data We Support */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Clinical Data We Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can support a range of clinical data modalities depending on
              project requirements, availability, and permitted use.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {DATA_MODALITIES.map((item) => (
              <MotionCard key={item.title} className="h-full">
                <div className="group h-full bg-white border-2 border-gray-100 hover:border-blue-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <item.Icon />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {item.list.map((li, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-blue-500">&bull;</span>
                        <span className="text-gray-600">{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Healthcare AI */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Built for Healthcare AI
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our workflows can support different stages of AI development.
            </p>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AI_STAGES.map((item) => (
              <MotionCard key={item.title} className="h-full">
                <div className="h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className="flex flex-col items-center text-center">
                    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                      <item.Icon />
                    </span>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Expertise Meets Data Operations */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Clinical Expertise Meets Data Operations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Generic data annotation is not enough for healthcare. Clinical
              datasets often require an understanding of medical terminology,
              diagnostic context, clinical workflows, and specialty-specific
              interpretation. Vivoclin combines clinical expertise with
              structured data workflows to help organizations address this
              challenge.
            </p>
          </MotionDiv>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {WORKFLOW_STEPS.map((step, index) => (
              <MotionCard key={step} className="h-full">
                <div className="h-full rounded-xl border-2 border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
                  <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-slate-700">{step}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Engagement Models */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Flexible Engagement Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can support projects from initial feasibility through
              large-scale data programs.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {ENGAGEMENT_MODELS.map((item) => (
              <MotionCard key={item.title} className="h-full">
                <div className="h-full bg-white border-2 border-gray-100 hover:border-blue-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Designed Around Your Requirements */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Designed Around Your Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every AI development program has different data requirements. We
              can work with your team to define:
            </p>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REQUIREMENTS.map((item) => (
              <MotionCard key={item} className="h-full">
                <div className="flex h-full items-center gap-3 rounded-xl bg-white p-5 shadow-md transition-all hover:shadow-xl">
                  <FaCheckDouble className="flex-shrink-0 text-blue-500" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              </MotionCard>
            ))}
          </div>

          <MotionDiv className="mt-10 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you need a small validation dataset or a scalable clinical
              data program, we can structure the engagement around your
              requirements.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Why Work With Vivoclin */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Why Work With Vivoclin?
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIATORS.map((item) => (
              <MotionCard key={item.title} className="h-full">
                <div className="h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-slate-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-16 px-8 md:px-16">
        <MotionDiv className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for Clinical Data or AI Support?
          </h2>
          <p className="text-lg text-white/80 mb-4">
            Tell us what you are building and what your data requirements look
            like. Our team can work with you to assess feasibility, data
            requirements, annotation scope, and an appropriate engagement model.
          </p>
          <p className="text-xl md:text-2xl font-bold text-white mb-8">
            Let&apos;s Build Better Healthcare AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as={Link}
              className={buttonStyles({
                radius: "full",
                variant: "shadow",
                className:
                  "font-semibold text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50 transition-colors",
              })}
              href="/about#contact"
            >
              Talk to Our Team
            </Button>
            <Button
              as={Link}
              className={buttonStyles({
                radius: "full",
                variant: "bordered",
                className:
                  "font-semibold text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors",
              })}
              href="/about#contact"
            >
              Submit Your Data Requirement
            </Button>
          </div>
        </MotionDiv>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-10 px-8 md:px-16">
        <p className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          All data-related activities are subject to applicable laws,
          regulations, permissions, contractual requirements, and data-use
          rights. Data availability and project feasibility are assessed on a
          project-specific basis.
        </p>
      </section>
    </Pages>
  );
};

export default Page;
