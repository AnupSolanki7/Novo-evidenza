import React from "react";
import AboutPage from "./Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivoclin Research | LLP established in 2024",
  description:
    "Vivoclin Research is Global Solutions and Services Provider Supporting, Large, Mid & Small global Life Sciences companies",
  icons: {
    icon: "/favicon.ico",
  },
  alternates:{
    canonical: "https://novo-evidenza.vercel.app/about",
  }
};

const page = () => {
  return <AboutPage />;
};

export default page;
