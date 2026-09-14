"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  LuBone,
  LuDroplet,
  LuDna,
  LuEye,
  LuGauge,
  LuStethoscope,
} from "react-icons/lu";

import MotionDiv from "@/components/MotionDiv";
import { SPECIALTIES } from "@/utils/Constant";
import { ArrowLink, SectionHeading } from "./ui";

/** Icons map onto the specialties in the order the CTM page lists them. */
const ICONS = [
  LuStethoscope,
  LuDroplet,
  LuBone,
  LuDna,
  LuEye,
  LuGauge,
];

const TherapeuticAreas = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = ICONS[active];

  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <MotionDiv initialTranslateY={32}>
          <SectionHeading
            eyebrow="Therapeutic Expertise"
            title="Expertise Across Diverse Therapeutic Areas"
            lead="Our investigational sites specialize in a wide range of therapeutic areas, providing comprehensive support for clinical trials. Each specialty is backed by a team of experienced researchers and state-of-the-art facilities, ensuring high-quality, reliable results."
          />
        </MotionDiv>

        <MotionDiv
          initialTranslateY={32}
          delay={0.1}
          className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12"
        >
          {/* Selector */}
          <ul className="flex flex-col gap-1.5" role="tablist" aria-label="Therapeutic areas">
            {SPECIALTIES.map((specialty, index) => {
              const Icon = ICONS[index];
              const isActive = index === active;

              return (
                <li key={specialty.name}>
                  <button
                    type="button"
                    role="tab"
                    id={`ta-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls={`ta-panel-${index}`}
                    onClick={() => setActive(index)}
                    className={clsx(
                      "group flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-all duration-300",
                      isActive
                        ? "border-brand-accent/40 bg-white shadow-sm"
                        : "border-brand-line/70 bg-white/50 hover:border-brand-accent/40 hover:bg-white"
                    )}
                  >
                    <span
                      className={clsx(
                        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300",
                        isActive
                          ? "bg-brand-accent text-white"
                          : "bg-brand-accentSoft text-brand-accent ring-1 ring-inset ring-sky-100"
                      )}
                    >
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span
                      className={clsx(
                        "flex-1 text-[15px] font-semibold transition-colors",
                        isActive ? "text-brand-ink" : "text-brand-body group-hover:text-brand-ink"
                      )}
                    >
                      {specialty.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "h-1.5 w-1.5 rounded-full transition-all duration-300",
                        isActive ? "bg-brand-accent" : "bg-transparent"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <div
            id={`ta-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`ta-tab-${active}`}
            className="relative overflow-hidden rounded-md bg-[#0F172A] p-8 shadow-[0_2px_10px_rgb(16,24,40,0.06)] sm:p-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl"
            />

            <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-md bg-brand-accent text-white">
              <ActiveIcon className="h-7 w-7" aria-hidden="true" />
            </span>

            <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {SPECIALTIES[active].name}
            </h3>

            <p className="relative mt-5 text-[15px] leading-relaxed text-slate-300 sm:text-base">
              {SPECIALTIES[active].description}
            </p>

            <div className="relative mt-8 border-t border-white/10 pt-6">
              <ArrowLink href="/ctm" className="text-sky-300 hover:text-sky-200">
                Explore Clinical Trial Monitoring
              </ArrowLink>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default TherapeuticAreas;
