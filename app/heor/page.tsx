import React from 'react'
import Page from './Index'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Economics and Outcomes Research (HEOR) | Novo Evidenza",
  description:
    "Providing Innovative Solutions and Services Across All HEOR & RWE Domains",
  icons: {
    icon: "/favicon.ico",
  },
  alternates:{
    canonical: "https://novo-evidenza.vercel.app/heor",
  }
};

const page = () => {
  return (
    <Page/>
  )
}

export default page