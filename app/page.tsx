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
    <Page className="relative h-max">
      <Image
        alt="banner"
        width={500}
        height={500}
        className="w-full h-screen absolute top-0 left-0 "
        src={
          "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6065960015886eb52bbe65e1_Image_1.jpg"
        }
      />
      <section className="flex w-full my-auto h-[100vh] px-6 max-w-[1220px] mx-auto items-center justify-start gap-4 py-8 md:py-10">
        <div className="flex z-10 flex-col justify-center items-center md:items-start w-full md:w-1/2">
          <h1
            className={title({
              size: "sm",
              className:
                "text-white text-center md:text-left !text-xl md:!text-4xl ",
            })}
          >
            Check out our services for your
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              className={
                "data-rotate-text !text-xl md:!text-4xl text-yellow-600 "
              }
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
              color: "danger",
              radius: "full",
              variant: "shadow",
              className: "font-bold shadow-none mt-6 w-max ",
            })}
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Let's Connect
          </Button>
        </div>
      </section>
      <div className="relative h-max">
        <section className="flex text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4">
          <Image
            src={
              "https://www.en.etemaaddaily.com/pages/world/hyderabad/1428aloeveracarrotmadman6.jpg"
            }
            className="w-1/2"
            width={500}
            height={500}
            alt="image"
          />
          <div className="md:w-1/2 px-[7%] w-full">
            <p className="font-semibold text-2xl text-[#333091] mb-4">
              Our Company
            </p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-gray-600  !font-normal text-center !text-xl !leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ className: "!text-xl text-[#333091]" })}>
                Dr. Kunal Maheswari
              </p>{" "}
              , the organization goal is to serve healthcare domain and help
              pharmaceutical, biotechnology, research organization, Institute
              for HEOR services, Medical Writing, PV , Regulatory, Medical
              scribe.
            </h2>
            <div>
              <Button
                isExternal
                as={Link}
                className={buttonStyles({
                  color: "danger",
                  radius: "full",
                  variant: "shadow",
                  className: "font-bold shadow-none mt-6 w-max ",
                })}
                href={siteConfig.links.sponsor}
                variant="flat"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
