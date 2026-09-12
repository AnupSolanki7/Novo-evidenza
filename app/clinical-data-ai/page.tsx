import React from "react";
import { Metadata } from "next";
import Page from "./Index";

export const metadata: Metadata = {
  title: "Clinical Data & AI Solutions | Vivoclin Research",
  description:
    "Clinical data sourcing, curation, annotation, quality control, and clinical validation to build AI-ready datasets for healthcare AI.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://novo-evidenza.vercel.app/clinical-data-ai",
  },
};

const page = () => {
  return <Page />;
};

export default page;
