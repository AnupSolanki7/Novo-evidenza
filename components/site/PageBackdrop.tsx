/**
 * The page-wide background gradient.
 *
 * This covers the light body of the page only. The navy at the top is painted
 * by the hero itself (see HeroSection / PageHero), which then hands over via a
 * fade block placed directly after its content.
 *
 * That split is deliberate: an earlier version anchored the navy band in pixels
 * via a `heroHeight` prop, which meant the hand-over drifted whenever the hero
 * rendered taller or shorter than the guess — different copy lengths, and every
 * breakpoint. Letting the hero own its own background removes the guess: the
 * fade is always exactly at the end of the hero, at any size.
 */
export const pageGradient = () =>
  "linear-gradient(to bottom, #EEF3F9 0%, #F8FAFC 20%, #FFFFFF 58%, #F4F8FC 100%)";

/** The style object a page's <main> spreads onto itself. */
export const pageBackdrop = () => ({
  backgroundImage: pageGradient(),
});

export default pageBackdrop;
