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
      "inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em]",
      tone === "light" ? "text-brand-accent" : "text-sky-300",
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
        "text-[2rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.5rem] lg:text-[3rem]",
        tone === "light" ? "text-brand-ink" : "text-white"
      )}
    >
      {title}
    </h2>
    <span
      aria-hidden="true"
      className={clsx(
        "mt-7 block h-[3px] w-10 bg-brand-accent",
        align === "center" && "mx-auto"
      )}
    />
    {lead ? (
      <p
        className={clsx(
          "mt-7 text-[1.0625rem] leading-[1.7]",
          tone === "light" ? "text-brand-body" : "text-slate-300",
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
      "inline-flex h-11 w-11 items-center justify-center rounded-md",
      tone === "cyan" && "bg-brand-accentSoft text-brand-accent",
      tone === "teal" && "bg-brand-accentSoft text-brand-accent",
      tone === "slate" && "bg-slate-100 text-brand-body",
      tone === "onDark" && "bg-white/[0.06] text-sky-300",
      className
    )}
  >
    <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
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
      "group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accentDark",
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
      "inline-flex items-center rounded px-2 py-1 text-[11px] font-medium tracking-wide",
      tone === "slate" && "bg-slate-100 text-brand-body",
      tone === "cyan" && "bg-brand-accentSoft text-brand-accent",
      tone === "teal" && "bg-brand-accentSoft text-brand-accent"
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
    <path
      d="M4.5 10.5l3.4 3.4L15.5 6.3"
      className="stroke-brand-accent"
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
      "group/glow relative h-full rounded-md border border-brand-line bg-white transition-colors duration-300",
      "hover:border-brand-accent/40",
      className
    )}
  >
    <div className={clsx("relative h-full rounded-md", innerClassName)}>
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
      "group/glow relative h-full rounded-md border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/25",
      className
    )}
  >
    <div className={clsx("relative h-full rounded-md", innerClassName)}>
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
      "inline-flex shrink-0 items-center text-xs font-semibold tabular-nums tracking-[0.1em]",
      tone === "light" ? "text-brand-muted" : "text-sky-300/70"
    )}
  >
    {String(index).padStart(2, "0")}
  </span>
);
