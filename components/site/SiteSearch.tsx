"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { LuCornerDownLeft, LuSearch, LuX } from "react-icons/lu";

import { SITE_INDEX } from "@/utils/Constant";

/**
 * Lightweight client-side navigator for the quick-search trigger in the header.
 * It filters the site's real routes only — there is no remote search backend.
 */
const SiteSearch = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return SITE_INDEX;

    return SITE_INDEX.filter((entry) =>
      `${entry.title} ${entry.summary} ${entry.keywords.join(" ")}`
        .toLowerCase()
        .includes(term)
    );
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");

      return;
    }

    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();

        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, results.length - 1));
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
      }

      if (event.key === "Enter" && results[activeIndex]) {
        event.preventDefault();
        router.push(results[activeIndex].slug);
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, results, activeIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Vivoclin Research"
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[15vh]"
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4">
          <LuSearch className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search services, capabilities and pages…"
            aria-label="Search services, capabilities and pages"
            className="h-14 w-full border-0 bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <LuX className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <ul className="max-h-[320px] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-slate-500">
              No pages match “{query}”.
            </li>
          ) : (
            results.map((entry, index) => (
              <li key={entry.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    router.push(entry.slug);
                    onClose();
                  }}
                  className={clsx(
                    "flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                    index === activeIndex ? "bg-sky-50" : "hover:bg-slate-50"
                  )}
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-100">
                    <entry.Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-slate-900">
                      {entry.title}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-slate-500">
                      {entry.summary}
                    </span>
                  </span>
                  {index === activeIndex ? (
                    <LuCornerDownLeft
                      className="mt-1 h-4 w-4 shrink-0 text-sky-500"
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SiteSearch;
