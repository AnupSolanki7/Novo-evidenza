import React from "react";
import { Metadata } from "next";
import Page from "./index";

export const metadata: Metadata = {
  title: "Site Management Organization (SMO) | Vivoclin Research",
  description:
    "Vivoclin's SMO: APAC clinical research leader in site management, trial startups, and compliance.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://novo-evidenza.vercel.app/smo",
  },
};

const page = () => {
  return <Page/>;
};

export default page;
