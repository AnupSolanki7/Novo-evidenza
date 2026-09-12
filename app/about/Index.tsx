"use client";

import { IconType } from "react-icons";
import { LuClipboardCheck, LuHospital, LuLinkedin, LuMail, LuMapPin, LuPencilLine, LuPhone } from "react-icons/lu";

import MotionCard from "@/components/MotionCard";
import MotionDiv from "@/components/MotionDiv";
import FounderCard from "@/components/FounderCard";
import { pageBackdrop } from "@/components/site/PageBackdrop";
import PageMesh, { HeroMesh, HeroFade } from "@/components/site/PageMesh";
import RFPConfigurator from "@/components/site/RFPConfigurator";
import { Eyebrow, IconBadge, SectionHeading } from "@/components/site/ui";
import { FOUNDERS } from "@/utils/Constant";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const SERVICES: Service[] = [
  {
    title: "Expert SMO Services",
    description: "Comprehensive site management for clinical trials",
    icon: LuHospital,
  },
  {
    title: "Pharma Marketing Materials",
    description:
      "Scientific, compliant, and strategically crafted marketing content for pharmaceutical and healthcare brands",
    icon: LuPencilLine,
  },
  {
    title: "Clinical Trial Support",
    description: "End-to-end assistance for research projects",
    icon: LuClipboardCheck,
  },
];

const OFFICES = [
  {
    region: "India",
    lines: ["iHub, Ahmedabad", "Gujarat 380052, India"],
    href: "https://maps.app.goo.gl/JkRRAP1Vo663W7GN6",
  },
  {
    region: "Australia",
    lines: ["U-41, 27-29 Mary St", "Auburn, NSW 2144, Australia"],
    href: "https://maps.app.goo.gl/xoXuZhZrZZa4Y41u9",
  },
];

const EMAILS = ["vivoclinresearch@gmail.com", "vivoclinaustralia@gmail.com"];

const PHONES = [
  { label: "+61 425 342 368", href: "tel:+61425342368" },
  { label: "+91 91379 89793", href: "tel:+919137989793" },
  { label: "+91 99745 25632", href: "tel:+919974525632" },
];

export default function AboutPage() {
  return (
    <main className="relative isolate" style={pageBackdrop()}>
      <PageMesh />
      {/* Who We Are */}
      <section className="relative bg-[#0B132B]">
        <div className="relative overflow-hidden px-5 pb-20 pt-[128px] sm:px-6 lg:px-10 lg:pb-24 lg:pt-[168px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-48 h-[560px] w-[560px] rounded-full bg-sky-500/20 blur-[130px]"
          />
          <HeroMesh />

          <MotionDiv
            initialTranslateY={40}
            className="relative mx-auto max-w-4xl text-center"
          >
            <Eyebrow tone="dark">Who We Are</Eyebrow>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]">
              About VivoClin Research Services
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              <b className="font-semibold text-white">VivoClin</b> Research
              Services is at the forefront of advancing clinical research and
              pharma brand communication with precision and expertise. We
              specialize in comprehensive clinical trial site support and the
              development of scientifically accurate, compliance-driven pharma
              marketing materials. Our work bridges clinical evidence and strategic
              communication to support pharmaceutical innovation. With dedicated
              operations across regions, including our{" "}
              <b className="font-semibold text-white">Australia</b> division, we
              continue to expand our global presence in the pharmaceutical and
              clinical research ecosystem.
            </p>
          </MotionDiv>
        </div>

        <HeroFade />
      </section>

      {/* What we do */}
      <section className="relative isolate overflow-hidden py-20 lg:py-24">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <MotionCard key={service.title} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_50px_rgb(2,30,62,0.10)]">
                  <IconBadge icon={service.icon} />
                  <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </article>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={40}>
            <SectionHeading
              eyebrow="Leadership"
              title="Meet Our Leadership Team"
              lead="A team committed to driving innovation and excellence in healthcare."
            />
          </MotionDiv>

          <div className="mt-14 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {FOUNDERS.slice(0, 2).map((item) => (
                <MotionCard key={item.name} className="h-full">
                  <FounderCard item={item} />
                </MotionCard>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FOUNDERS.slice(2, 5).map((item) => (
                <MotionCard key={item.name} className="h-full">
                  <FounderCard item={item} />
                </MotionCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices & contact details */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <MotionDiv initialTranslateY={40}>
            <SectionHeading
              eyebrow="Global Offices"
              title="Send Us Your Enquiry"
              lead="Reach the team directly, or use the consultation request below."
            />
          </MotionDiv>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <MotionCard className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <IconBadge icon={LuMapPin} />
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
                  Address
                </h3>
                <ul className="mt-4 space-y-3">
                  {OFFICES.map((office) => (
                    <li key={office.region}>
                      <a
                        href={office.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 transition-colors hover:border-sky-200 hover:bg-sky-50/50"
                      >
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          {office.region}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-700">
                          {office.lines[0]}
                          <br />
                          {office.lines[1]}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionCard>

            <MotionCard className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <IconBadge icon={LuPhone} />
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
                  Contact
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {EMAILS.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2.5 text-sm text-slate-700 transition-colors hover:text-sky-700"
                      >
                        <LuMail
                          className="h-4 w-4 shrink-0 text-sky-500"
                          aria-hidden="true"
                        />
                        {email}
                      </a>
                    </li>
                  ))}
                  {PHONES.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="flex items-center gap-2.5 text-sm text-slate-700 transition-colors hover:text-sky-700"
                      >
                        <LuPhone
                          className="h-4 w-4 shrink-0 text-sky-500"
                          aria-hidden="true"
                        />
                        Ph: {phone.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://www.linkedin.com/company/vivoclin-research-services/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm text-slate-700 transition-colors hover:text-sky-700"
                    >
                      <LuLinkedin
                        className="h-4 w-4 shrink-0 text-sky-500"
                        aria-hidden="true"
                      />
                      linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </MotionCard>

            <MotionCard className="h-full">
              <div className="h-full overflow-hidden rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <iframe
                  title="Vivoclin Research — iHub Ahmedabad office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7773937822594!2d72.54143817509214!3d23.03194427916724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8521db921fad%3A0x8f192b2f852e333c!2siHub%20Gujarat!5e0!3m2!1sen!2sin!4v1739982132152!5m2!1sen!2sin"
                  className="h-full min-h-[280px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </MotionCard>
          </div>
        </div>
      </section>

      {/* Consultation / RFP */}
      <RFPConfigurator id="contact" />
    </main>
  );
}
