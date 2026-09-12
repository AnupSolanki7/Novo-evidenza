import React from "react";

import MotionDiv from "@/components/MotionDiv";
import { HeroMesh, HeroFade } from "./PageMesh";
import { Eyebrow } from "./ui";

/**
 * Shared deep-canvas page header used by the service pages so they sit
 * coherently beneath the glassmorphic navigation bar.
 */
const PageHero = ({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) => (
  <section className="relative bg-[#0B132B]">
    <div className="relative overflow-hidden px-5 pb-16 pt-[128px] sm:px-6 lg:px-10 lg:pb-20 lg:pt-[160px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[540px] w-[540px] rounded-full bg-sky-500/20 blur-[130px]"
      />
      <HeroMesh />

      <MotionDiv
        initialTranslateY={40}
        className="relative mx-auto max-w-4xl text-center"
      >
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        <h1
          className={`text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1] ${
            eyebrow ? "mt-6" : ""
          }`}
        >
          {title}
        </h1>
        {lead ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {lead}
          </p>
        ) : null}
      </MotionDiv>
    </div>

    <HeroFade />
  </section>
);

export default PageHero;
