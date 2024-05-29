"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { TypeAnimation } from "react-type-animation";
import Banner from "../assets/image/banner.jpg";
import BannerItem from "../assets/image/banner-item.png";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import Page from "@/components/page";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <Page className="relative h-max">
      <Image
        alt="banner"
        width={1000}
        height={1000}
        className="w-full h-screen absolute top-0 left-0 "
        quality={100}
        src={Banner}
      />
      {/* banner */}
      <section className="flex flex-col md:flex-row w-full my-auto h-[100vh] px-6 max-w-[1220px] mx-auto items-center justify-center gap-[80px] md:gap-4 py-8 md:py-10">
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
            Let&apos;s Connect
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center z-10">
          <Image
            src={
              "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
            }
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[60%]"
          />
        </div>
      </section>
      {/* info */}
      <div className="relative h-max">
        {/* section1 */}
        <section className="flex text-center md:text-left flex-col md:flex-row my-auto h-max mx-auto items-center justify-around gap-4">
          <Image
            src={
              "https://www.en.etemaaddaily.com/pages/world/hyderabad/1428aloeveracarrotmadman6.jpg"
            }
            className="w-full md:w-1/2"
            width={500}
            height={500}
            alt="image"
          />
          <div className="md:w-1/2 my-8 px-[7%] w-full">
            <p className="font-bold text-2xl text-[#333091] mb-4">
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
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>
        {/* section2 */}
        <section className="flex bg-danger-500 h-screen text-center md:text-left flex-col md:flex-row-reverse my-auto mx-auto items-center justify-around gap-4">
          <Image
            src={
              "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
            }
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[50%] md:w-[20%]"
          />
          <div className="md:w-1/2 my-8 px-6  w-full">
            <p className="font-bold text-2xl text-white mb-4">Our Company</p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-white  !font-normal text-center !text-xl !leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-white" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ className: "!text-xl text-white" })}>
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
                  radius: "full",
                  variant: "shadow",
                  className: "font-bold bg-[#333091] text-white shadow-none mt-6 w-max ",
                })}
                href={siteConfig.links.sponsor}
                variant="flat"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>
        {/* section3 */}
        <section
          style={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6066a36d593d3ecd83e3efe1_2-layers.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex h-screen text-center md:text-left flex-col md:flex-row my-auto mx-auto items-center justify-around gap-4"
        >
          <Image
            src={
              "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
            }
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[50%] md:w-[20%]"
          />
          <div className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-2xl text-white mb-4">Our Company</p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-white  !font-normal text-center !text-xl !leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-white" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ className: "!text-xl text-white" })}>
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
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>
        {/* section4 */}
        <section
          style={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6068015a9c3b85556078f629_bom_kind_words_bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="flex h-screen text-center md:text-left flex-col md:flex-row-reverse my-auto mx-auto items-center justify-around gap-4"
        >
          <Image
            src={
              "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
            }
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[50%] md:w-[20%]"
          />
          <div className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-2xl text-white mb-4">Our Company</p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-white  !font-normal text-center !text-xl !leading-[35px] ",
              })}
            >
              <p className={title({ className: "!text-xl text-white" })}>
                Novo Evidenza &nbsp;
              </p>
              is registered LLP and established in 2024, Co Founder of Novo
              Evidenza is{" "}
              <p className={title({ className: "!text-xl text-white" })}>
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
                  radius: "full",
                  variant: "shadow",
                  className: "font-bold bg-[#333091] text-white shadow-none mt-6 w-max ",
                })}
                href={siteConfig.links.sponsor}
                variant="flat"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>
        {/* section5 */}
        <section
          className="flex h-screen text-center md:text-left flex-col md:flex-row my-auto mx-auto items-center justify-around gap-4"
        >
          <Image
            src={
              "https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/60669f3771e8b7227d00b04d_33-layers.png"
            }
            alt="banner-item"
            width={1000}
            height={1000}
            quality={100}
            className="w-[50%] md:w-[20%]"
          />
          <div className="md:w-1/2 my-8  px-6  w-full">
            <p className="font-bold text-2xl text-[#333091] mb-4">Our Company</p>
            <h2
              className={title({
                size: "sm",
                className:
                  "text-[#333091]  !font-normal text-center !text-xl !leading-[35px] ",
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
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
