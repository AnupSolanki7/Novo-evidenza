"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Logo from "../public/image_novo_evidenza-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Page from "@/components/page";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <Page
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6065960015886eb52bbe65e1_Image_1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="relative h-max"
    >
      <section className="flex flex-col w-full  my-auto h-[100vh] max-w-[1220px] mx-auto items-center justify-start gap-4 py-8 md:py-10">
        <h1
          className={title({
            size: "sm",
            className: "text-white text-left !text-xl md:!text-4xl w-1/2",
          })}
        >
          Check out our services for your
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            className={"data-rotate-text !text-xl md:!text-4xl text-yellow-600 "}
            sequence={[
              " HEOR solutions",
              1000,
              " PV",
              1000,
              " Regulatory",
              1000,
              " Medical Writing",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "50px" }}
            wrapper="p" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
          , we have a team of experts in these domains
        </h1>
        <Button
            isExternal
            as={Link}
            className={buttonStyles({
              color: "warning",
              radius: "full",
              variant: "shadow",
              className:"font-semibold"
            })}
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Let's Connect
          </Button>
      </section>
      <div
        style={{
          background: "linear-gradient(to bottom, lightblue, white)",
        }}
        className="relative h-max"
      >
        <section className="flex text-center md:text-left flex-col md:flex-row my-auto h-max max-w-[1220px] mx-auto items-center justify-around gap-4 py-8 md:py-10">
          <Image
            src={
              "https://marksmanhealthcare.com/wp-content/uploads/2023/03/MM_-12.png"
            }
            className="md:w-1/4 w-1/2"
            width={500}
            height={500}
            alt="image"
          />
          <div className="md:w-1/2 w-full">
            <p className="font-semibold text-xl text-[#0078A1] mb-4">
              Our Company
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-gray-600 !font-normal text-center !text-2xl !leading-[35px] ",
              })}
            >
              <p className={title({ color: "cyan", className: "!text-2xl" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ color: "violet", className: "!text-2xl" })}>
                Dr. Kunal Maheswari
              </p>{" "}
              , the organization goal is to serve healthcare domain and help
              pharmaceutical, biotechnology, research organization, Institute
              for HEOR services, Medical Writing, PV , Regulatory, Medical
              scribe.
            </h2>
          </div>
        </section>
      </div>
    </Page>
  );
}
