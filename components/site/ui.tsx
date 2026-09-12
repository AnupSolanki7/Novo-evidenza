"use client";

import clsx from "clsx";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import NextLink from "next/link";

/**
 * Small capsule label that sits above a section heading.
 * Used to give each band a consistent "technical" eyebrow.
 */
export const Eyebrow = ({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) => (
  <span
    className={clsx(
      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
      tone === "light"
        ? "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-100"
        : "bg-white/5 text-sky-300 ring-1 ring-inset ring-white/10",
      className
    )}
  >
    {children}
  </span>
);

/** Section heading block: eyebrow + title + optional lead paragraph. */
export const SectionHeading = ({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) => (
  <div
    className={clsx(
      align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left",
      className
    )}
  >
    {eyebrow ? (
      <div className="mb-5">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
    ) : null}
    <h2
      className={clsx(
        "text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
        tone === "light" ? "text-slate-900" : "text-white"
      )}
    >
      {title}
    </h2>
    <span
      aria-hidden="true"
      className={clsx(
        "mt-6 block h-px w-16 bg-gradient-to-r from-sky-500 to-teal-400",
        align === "center" && "mx-auto"
      )}
    />
    {lead ? (
      <p
        className={clsx(
          "mt-6 text-base leading-relaxed sm:text-lg",
          tone === "light" ? "text-slate-600" : "text-slate-300",
          align === "center" && "mx-auto"
        )}
      >
        {lead}
      </p>
    ) : null}
  </div>
);

/** Monoline icon in a soft tinted badge. */
export const IconBadge = ({
  icon: Icon,
  tone = "cyan",
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone?: "cyan" | "teal" | "slate" | "onDark";
  className?: string;
}) => (
  <span
    className={clsx(
      "inline-flex h-12 w-12 items-center justify-center rounded-xl",
      tone === "cyan" && "bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-100",
      tone === "teal" &&
        "bg-teal-50 text-teal-600 ring-1 ring-inset ring-teal-100",
      tone === "slate" &&
        "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
      tone === "onDark" && "bg-white/5 text-sky-300 ring-1 ring-inset ring-white/10",
      className
    )}
  >
    <Icon className="h-6 w-6" aria-hidden="true" />
  </span>
);

/** Text link with an animated underline and a nudging arrow. */
export const ArrowLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <NextLink
    href={href}
    className={clsx(
      "group/link inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800",
      className
    )}
  >
    <span className="animated-underline">{children}</span>
    <LuArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
      aria-hidden="true"
    />
  </NextLink>
);

/** Small discrete tag used on bento cards. */
export const Tag = ({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "cyan" | "teal";
}) => (
  <span
    className={clsx(
      "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide",
      tone === "slate" && "bg-slate-100 text-slate-600",
      tone === "cyan" && "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-100",
      tone === "teal" && "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100"
    )}
  >
    {children}
  </span>
);

/** Custom SVG checkmark used in feature bullet lists. */
export const CheckMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={clsx("h-5 w-5 flex-shrink-0", className)}
  >
    <circle cx="10" cy="10" r="9" className="fill-sky-50 stroke-sky-200" strokeWidth="1" />
    <path
      d="M6 10.2l2.6 2.6L14 7.4"
      className="stroke-sky-600"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Live status dot with an optional pulse. */
export const StatusDot = ({
  tone = "emerald",
  className,
}: {
  tone?: "emerald" | "cyan";
  className?: string;
}) => (
  <span className={clsx("relative flex h-2 w-2", className)}>
    <span
      className={clsx(
        "absolute inline-flex h-full w-full animate-pulse-dot rounded-full",
        tone === "emerald" ? "bg-emerald-400" : "bg-sky-400"
      )}
    />
    <span
      className={clsx(
        "relative inline-flex h-2 w-2 rounded-full",
        tone === "emerald" ? "bg-emerald-400" : "bg-sky-400"
      )}
    />
  </span>
);

/**
 * Premium surface: a hairline gradient edge that warms on hover, with an
 * inner white card. Used for the cards that carry the most weight on a page.
 */
export const GlowCard = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => (
  <div
    className={clsx(
      "group/glow relative h-full rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 p-px transition-all duration-500",
      "hover:from-sky-300 hover:to-teal-200 hover:shadow-[0_20px_60px_-15px_rgb(2,132,199,0.25)]",
      className
    )}
  >
    <div
      className={clsx(
        "relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-white",
        innerClassName
      )}
    >
      {/* Corner sheen that fades in on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/0 blur-3xl transition-colors duration-500 group-hover/glow:bg-sky-400/10"
      />
      {children}
    </div>
  </div>
);

/** Same treatment, tuned for the deep canvas sections. */
export const GlowCardDark = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => (
  <div
    className={clsx(
      "group/glow relative h-full rounded-2xl bg-gradient-to-b from-white/15 to-white/5 p-px transition-all duration-500 hover:from-sky-400/50 hover:to-teal-300/20",
      className
    )}
  >
    <div
      className={clsx(
        "relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-[#0B132B]",
        innerClassName
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/0 blur-3xl transition-colors duration-500 group-hover/glow:bg-sky-400/15"
      />
      {children}
    </div>
  </div>
);

/** Numeric step marker for ordered sequences. */
export const StepMarker = ({
  index,
  tone = "light",
}: {
  index: number;
  tone?: "light" | "dark";
}) => (
  <span
    className={clsx(
      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold tabular-nums",
      tone === "light"
        ? "bg-slate-900 text-white"
        : "bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950"
    )}
  >
    {String(index).padStart(2, "0")}
  </span>
);
