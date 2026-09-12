import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Plus_Jakarta_Sans,
  Poppins,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPoppins = Poppins({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

/**
 * Primary brand typeface: geometric, authoritative, tightened letterforms.
 * Exposed as --font-jakarta and consumed by `font-sans` / `font-display`.
 */
export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
