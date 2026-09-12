"use client";

import NextLink from "next/link";
import { LuArrowRight } from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import { GlowCard, SectionHeading } from "./ui";

const VISION_POINTS = [
  "To be a global leader in clinical research services, setting benchmarks for innovation, precision, and ethical excellence.",
  "To revolutionize clinical research by delivering seamless trial management and impactful pharma marketing materials, driving advancements in patient care worldwide.",
  "To empower healthcare through flawless execution of clinical trials and transformative scientific solutions, ensuring a healthier future for all.",
];

const VisionSection = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <MotionDiv initialTranslateY={40}>
          <SectionHeading
            eyebrow="Where We Are Headed"
            title="Our Vision"
          />
        </MotionDiv>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VISION_POINTS.map((point, index) => (
            <MotionCard
              key={point}
              delay={index * 0.08}
              className="h-full transition-transform duration-500 hover:-translate-y-1.5"
            >
              <GlowCard>
                <article className="flex h-full flex-col p-8">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 text-base font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
                    {point}
                  </p>
                </article>
              </GlowCard>
            </MotionCard>
          ))}
        </div>

        <MotionDiv initialTranslateY={30} className="mt-12 flex justify-center">
          <NextLink
            href="/about"
            className="group/cta inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Discover More About Us
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

export default VisionSection;
