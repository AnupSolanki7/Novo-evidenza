"use client";

import React from "react";

import MotionCard from "./MotionCard";
import MotionDiv from "./MotionDiv";
import CardItem from "./AccItemCard";
import { ACHEIVEMENTS } from "@/utils/Constant";
import { SectionHeading } from "./site/ui";

const Accomplishment = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-24">

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <MotionDiv initialTranslateY={40}>
          <SectionHeading
            eyebrow="Accomplishments"
            title="Enhancing Healthcare Outcomes Through Evidence-Based Research"
            />
        </MotionDiv>

        <div className="relative mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-white/10 shadow-[0_2px_10px_rgb(16,24,40,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {ACHEIVEMENTS.map((item) => (
            <MotionCard key={item.title} className="bg-[#0B132B]">
              <CardItem item={item} />
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishment;
