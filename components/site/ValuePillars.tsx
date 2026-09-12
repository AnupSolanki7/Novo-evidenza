"use client";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { LuScale, LuSparkles, LuTarget } from "react-icons/lu";

import { ArrowLink, GlowCard, IconBadge, SectionHeading } from "./ui";

/**
 * The three mission pillars, rendered as elevated cards.
 * Titles and body copy are the site's existing mission statements; the emoji
 * markers they previously used map onto the monoline icons below.
 */
const PILLARS = [
  {
    title: "Quality & Compliance",
    description:
      "To provide end-to-end support for clinical trials with an unwavering commitment to quality, compliance, and patient-centricity.",
    icon: LuTarget,
    href: "/smo",
  },
  {
    title: "Ethical Solutions",
    description:
      "To empower our partners with reliable, innovative, and ethical solutions that transform clinical research into meaningful advancements in healthcare.",
    icon: LuScale,
    href: "/about",
  },
  {
    title: "Excellence & Precision",
    description:
      "To ensure excellence in clinical trial support and deliver scientific narratives that resonate with clarity, precision, and impact.",
    icon: LuSparkles,
    href: "/pharma-marketing-materials",
  },
];

const ValuePillars = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <MotionDiv initialTranslateY={40}>
          <SectionHeading
            eyebrow="Purpose &amp; Principles"
            title="Our Mission"
            lead="Three commitments that shape how every trial, every dataset and every deliverable leaves our hands."
          />
        </MotionDiv>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <MotionCard
              key={pillar.title}
              delay={index * 0.08}
              className="h-full transition-transform duration-500 hover:-translate-y-1.5"
            >
              <GlowCard>
                <article className="flex h-full flex-col p-8">
                  <div className="flex items-start justify-between">
                    <IconBadge icon={pillar.icon} />
                    <span className="text-5xl font-bold leading-none tracking-tight text-slate-100 transition-colors duration-500 group-hover/glow:text-sky-100">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <ArrowLink href={pillar.href}>Learn more</ArrowLink>
                  </div>
                </article>
              </GlowCard>
            </MotionCard>
          ))}
        </div>

        <MotionDiv initialTranslateY={30} className="mt-12 flex justify-center">
          <ArrowLink href="/about" className="text-base">
            Learn More About Our Mission
          </ArrowLink>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ValuePillars;
