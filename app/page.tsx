import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Logo from "../public/image_novo_evidenza-removebg-preview.png";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Page from "@/components/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Page
        style={{
          backgroundImage:
            "url(https://mtechaccess.co.uk/wp-content/uploads/2021/07/iStock-926462276-scaled.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative h-max"
      >
        <div className="absolute inset-0 bg-red-400 opacity-50 pointer-events-none"></div>
        <section className="flex  my-auto h-max max-w-[1220px] mx-auto items-center justify-center gap-4 py-8 md:py-10">
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="w-1/3 z-10"
          />
        </section>
      </Page>
      <Page className="relative h-max">
        <section className="flex my-auto mb-[100px] h-max max-w-[1220px] mx-auto items-center justify-center gap-4 py-8 md:py-10">
          <h1
            className={title({
              size: "sm",
              className: "text-gray-600 text-center !leading-[50px]",
            })}
          >
            <p className={title({ color: "cyan", size: "sm" })}>
              Novo Evidenza &nbsp;
            </p>
            is registered LLP and established in 2024, Co Founder of Novo
            Evidenza is{" "}
            <p className={title({ color: "violet", size: "sm" })}>
              Dr. Kunal Maheswari
            </p>{" "}
            , the organization goal is to serve healthcare domain and help
            pharmaceutical, biotechnology, research organization, Institute for
            HEOR services, Medical Writing, PV , Regulatory, Medical scribe.
          </h1>
        </section>
      </Page>
      <Page
        style={{
          background: "linear-gradient(to bottom, lightblue, white)"
        }}
        className="relative h-max"
      >
        <section className="flex my-auto h-max max-w-[1220px] mx-auto items-center justify-center gap-4 py-8 md:py-10">
        <Image src={'https://marksmanhealthcare.com/wp-content/uploads/2023/03/MM_-12.png'} className="" width={500} height={500} alt="image" />
          <h1
            className={title({
              size: "sm",
              className: "text-gray-600 text-center !leading-[50px]",
            })}
          >
            <p className={title({ color: "cyan", size: "sm" })}>
              Novo Evidenza &nbsp;
            </p>
            is registered LLP and established in 2024, Co Founder of Novo
            Evidenza is{" "}
            <p className={title({ color: "violet", size: "sm" })}>
              Dr. Kunal Maheswari
            </p>{" "}
            , the organization goal is to serve healthcare domain and help
            pharmaceutical, biotechnology, research organization, Institute for
            HEOR services, Medical Writing, PV , Regulatory, Medical scribe.
          </h1>
        </section>
      </Page>
    </>
  );
}
