"use client";

import NextLink from "next/link";
import React from "react";
import {
  LuLinkedin,
  LuLock,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

import Logo from "@/assets/icons/VivoLogo";
import MotionDiv from "./MotionDiv";
import { SERVICE_NAV } from "@/utils/Constant";

const OFFICES = [
  {
    region: "India",
    address: "iHub Ahmedabad, Gujarat 380052, India",
    href: "https://maps.app.goo.gl/JkRRAP1Vo663W7GN6",
  },
  {
    region: "Australia",
    address: "U-41, 27-29 Mary St, Auburn, NSW 2144, Australia",
    href: "https://maps.app.goo.gl/X8gx9HQbd3M1dJ5V9",
  },
];

const PHONES = [
  { label: "+61 425 342 368", href: "tel:+61425342368" },
  { label: "+91 91379 89793", href: "tel:+919137989793" },
  { label: "+91 99745 25632", href: "tel:+919974525632" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#070D1E] pb-16 pt-16 text-slate-400">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <MotionDiv
          initialTranslateY={40}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {/* 1 — Brand + offices */}
          <div className="lg:pr-6">
            <NextLink href="/" aria-label="Vivoclin Research — home">
              <span className="block h-[46px] w-[150px] overflow-hidden [&>svg]:h-full [&>svg]:w-full">
                <Logo />
              </span>
            </NextLink>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Partner with Vivoclin Research to experience a partnership rooted
              in expertise and innovation. Together, we&rsquo;ll navigate the
              intricate pharmaceutical landscape, unlocking potential and
              creating lasting impact on a global scale.
            </p>

            <ul className="mt-6 space-y-3">
              {OFFICES.map((office) => (
                <li key={office.region}>
                  <a
                    href={office.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <LuMapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {office.region}
                      </span>
                      <span className="block leading-relaxed">
                        {office.address}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2 — Services */}
          <nav aria-label="Footer services">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICE_NAV.map((service) => (
                <li key={service.id}>
                  <NextLink
                    href={service.slug}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3 — Company */}
          <nav aria-label="Footer company links">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <NextLink
                  href="/"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Home
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/about"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  About Us
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/about#contact"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Schedule RFP / Proposal
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* 4 — Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Contact
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:Vivoclinresearch@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <LuMail className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                  Vivoclinresearch@gmail.com
                </a>
              </li>
              {PHONES.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <LuPhone
                      className="h-4 w-4 shrink-0 text-sky-400"
                      aria-hidden="true"
                    />
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/company/vivoclin-research-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <LuLinkedin
                    className="h-4 w-4 shrink-0 text-sky-400"
                    aria-hidden="true"
                  />
                  linkedin
                </a>
              </li>
            </ul>

            <NextLink
              href="/about#contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-accentDark"
            >
              Send Us Your Enquiry
            </NextLink>
          </div>
        </MotionDiv>

        {/* Baseline */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>copyright Vivoclin Research 2025. All rights reserved.</p>

          <p className="flex items-center gap-2">
            <LuLock className="h-3.5 w-3.5 text-brand-body" aria-hidden="true" />
            Protocol documents are handled under confidentiality agreement.
          </p>

          <a
            href="https://anup-gamma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-300"
          >
            Crafted by Anup Solanki
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
