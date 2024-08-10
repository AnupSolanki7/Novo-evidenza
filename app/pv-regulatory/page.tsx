import React from 'react'
import Page from './Index'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacovigilance (PV) and Regulatory | Novo Evidenza",
  description:
    "Providing Innovative Solutions and Services Across All HEOR & RWE Domains",
  icons: {
    icon: "/favicon.ico",
  },
  alternates:{
    canonical: "https://novo-evidenza.vercel.app/pv-regulatory",
  }
};

const page = () => {
  return (
    <Page/>
  )
}

export default page