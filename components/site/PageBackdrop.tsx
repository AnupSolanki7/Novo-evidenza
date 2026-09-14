/**
 * The page-wide background.
 *
 * Deliberately almost flat: a near-white canvas with only a faint cool tint at
 * the top and bottom, so sections separate by whitespace and rule weight rather
 * than by colour blocks. The navy at the top of a page is painted by the hero
 * itself (see HeroSection / PageHero), which hands over via a fade block placed
 * directly after its content — that keeps the hand-over correct at every
 * breakpoint without anchoring anything in pixels.
 */
export const pageGradient = () =>
  "linear-gradient(to bottom, #F7F9FB 0%, #FFFFFF 26%, #FFFFFF 74%, #F7F9FB 100%)";

/** The style object a page's <main> spreads onto itself. */
export const pageBackdrop = () => ({
  backgroundImage: pageGradient(),
});

export default pageBackdrop;
