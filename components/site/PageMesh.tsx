import React from "react";

/**
 * The page-wide hairline mesh, in the slate tint that reads against the light
 * body gradient. It spans the whole page so there is never an edge where the
 * pattern starts or stops mid-scroll; over the navy hero these lines are
 * effectively invisible, and the hero paints its own lighter mesh on top.
 *
 * zIndex is set inline rather than via a `-z-*` class: Tailwind v3 does not
 * emit negative z-index utilities, so such a class is dropped at build time.
 * `isolate` on <main> keeps this contained, so the mesh sits above the page
 * gradient but beneath all content, whether a section is positioned or not.
 *
 * The blurred layer is inset inside an `overflow-hidden` wrapper so the blur
 * cannot bleed a halo past the page edges.
 */
const PageMesh = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
    style={{ zIndex: -1 }}
  >
    <div
      className="mesh-on-light absolute -inset-4 blur-[0.7px]"
      style={{
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 88%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 88%, rgba(0,0,0,0) 100%)",
      }}
    />
  </div>
);

/**
 * The lighter mesh used inside the navy hero. Rendered as an absolute layer
 * over the hero's own content wrapper, so it sizes itself to the hero at any
 * breakpoint without a pixel guess.
 */
export const HeroMesh = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div className="mesh-on-dark absolute -inset-4 blur-[0.7px]" />
  </div>
);

/**
 * Hand-off between the navy hero and the light body. A normal block element,
 * so it always sits immediately after the hero's content regardless of how
 * tall that content is — no pixel anchoring, correct at every breakpoint.
 */
export const HeroFade = () => (
  <div
    aria-hidden="true"
    className="h-28 bg-gradient-to-b from-[#0B132B] via-[#35486B] to-[#EEF3F9] sm:h-36"
  />
);

export default PageMesh;
