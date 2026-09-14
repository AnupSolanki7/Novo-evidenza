"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  LuArrowRight,
  LuChevronDown,
  LuMenu,
  LuSearch,
  LuX,
} from "react-icons/lu";

import Logo from "../assets/icons/VivoLogo";
import { MENU_LIST, SERVICE_NAV } from "@/utils/Constant";
import SiteSearch from "./site/SiteSearch";

const PRIMARY_LINKS = MENU_LIST.filter(
  (item) => !SERVICE_NAV.some((service) => service.slug === item.slug)
);

export const Navbar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const servicesRef = useRef<HTMLLIElement>(null);

  const isServiceRoute = SERVICE_NAV.some((item) => item.slug === path);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the transient menus whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsSearchOpen(false);
  }, [path]);

  // Dismiss the services dropdown on outside click or Escape.
  useEffect(() => {
    if (!isServicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isServicesOpen]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeAll = useCallback(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          "bg-[#0B132B]/80 text-white backdrop-blur-md",
          isScrolled
            ? "border-white/10 shadow-[0_8px_30px_rgb(2,12,34,0.35)]"
            : "border-white/5"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[84px] lg:px-10"
        >
          {/* Brand */}
          <NextLink
            href="/"
            onClick={closeAll}
            aria-label="Vivoclin Research — home"
            className="flex shrink-0 items-center"
          >
            <span className="block h-[46px] w-[150px] overflow-hidden [&>svg]:h-full [&>svg]:w-full">
              <Logo />
            </span>
          </NextLink>

          {/* Centre navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {PRIMARY_LINKS.map((item) => (
              <li key={item.id}>
                <NavLink href={item.slug} isActive={path === item.slug}>
                  {item.title}
                </NavLink>
              </li>
            ))}

            <li ref={servicesRef} className="relative">
              <button
                type="button"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen((open) => !open)}
                className={clsx(
                  "group relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isServiceRoute || isServicesOpen
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                )}
              >
                Services
                <LuChevronDown
                  className={clsx(
                    "h-4 w-4 transition-transform duration-300",
                    isServicesOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={clsx(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-sky-400 transition-transform duration-300",
                    isServiceRoute || isServicesOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </button>

              {isServicesOpen ? (
                <div className="absolute left-1/2 top-[calc(100%+14px)] w-[380px] -translate-x-1/2 overflow-hidden rounded-md border border-white/10 bg-[#0B132B]/95 p-2 shadow-[0_10px_40px_rgb(2,12,34,0.35)] backdrop-blur-md">
                  {SERVICE_NAV.map((service) => (
                    <NextLink
                      key={service.id}
                      href={service.slug}
                      onClick={closeAll}
                      className={clsx(
                        "group flex items-start gap-3 rounded-xl p-3 transition-colors",
                        path === service.slug
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      )}
                    >
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-white/10">
                        <service.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white">
                          {service.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">
                          {service.navSummary}
                        </span>
                      </span>
                    </NextLink>
                  ))}
                </div>
              ) : null}
            </li>

            <li>
              <NavLink href="/about" isActive={path === "/about"}>
                About Us
              </NavLink>
            </li>
          </ul>

          {/* Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search the site"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <LuSearch className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            <NextLink
              href="/about#contact"
              onClick={closeAll}
              className="hidden items-center gap-2 rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition-colors hover:bg-brand-accentDark sm:inline-flex"
            >
              Schedule RFP / Proposal
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </NextLink>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5 lg:hidden"
            >
              {isMenuOpen ? (
                <LuX className="h-5 w-5" aria-hidden="true" />
              ) : (
                <LuMenu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {isMenuOpen ? (
          <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/10 bg-[#0B132B]/95 px-4 pb-8 pt-4 backdrop-blur-md lg:hidden">
            <ul className="flex flex-col gap-1">
              {PRIMARY_LINKS.map((item) => (
                <li key={item.id}>
                  <NextLink
                    href={item.slug}
                    onClick={closeAll}
                    className={clsx(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      path === item.slug
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.title}
                  </NextLink>
                </li>
              ))}
            </ul>

            <p className="px-4 pb-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Services
            </p>
            <ul className="flex flex-col gap-1">
              {SERVICE_NAV.map((service) => (
                <li key={service.id}>
                  <NextLink
                    href={service.slug}
                    onClick={closeAll}
                    className={clsx(
                      "flex items-center gap-3 rounded-xl px-4 py-3 transition-colors",
                      path === service.slug
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <service.Icon className="h-[18px] w-[18px] text-sky-300" aria-hidden="true" />
                    <span className="text-base font-medium">{service.title}</span>
                  </NextLink>
                </li>
              ))}
              <li>
                <NextLink
                  href="/about"
                  onClick={closeAll}
                  className={clsx(
                    "mt-4 block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    path === "/about"
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  About Us
                </NextLink>
              </li>
            </ul>

            <NextLink
              href="/about#contact"
              onClick={closeAll}
              className="mt-6 flex items-center justify-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-accentDark"
            >
              Schedule RFP / Proposal
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </NextLink>
          </div>
        ) : null}

        {/* Reading progress rail */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-transparent"
        >
          <div
            className="h-full bg-brand-accent transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <SiteSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

const NavLink = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <NextLink
    href={href}
    className={clsx(
      "group relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      isActive ? "text-white" : "text-slate-300 hover:text-white"
    )}
  >
    {children}
    <span
      className={clsx(
        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-sky-400 transition-transform duration-300",
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      )}
    />
  </NextLink>
);
