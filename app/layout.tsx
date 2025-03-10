import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Script from "next/script";

import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import { fontPoppins } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VivoClin Research | LLP established in 2024",
  description:
    "VivoClin Research is Global Solutions and Services Provider Supporting, Large, Mid & Small global Life Sciences companies",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "VivoClin Research | LLP established in 2024",
    description:
      "VivoClin Research is Global Solutions and Services Provider Supporting, Large, Mid & Small global Life Sciences companies",
    images:
      "https://novo-evidenza.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.64d38d4b.png&w=96&q=75",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JSJTN6N91K"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JSJTN6N91K');
          `}
        </Script>
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontPoppins.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
