import Image from "next/image";
import React from "react";
import { title } from "./primitives";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Card from "./Card";
import { SERVICES } from "@/utils/Constant";

const OurServices = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/6066a36d593d3ecd83e3efe1_2-layers.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex h-max lg:h-[95vh] text-center md:text-left flex-col  my-auto mx-auto items-center justify-start gap-4"
    >
      <div className=" my-8  px-6  w-full">
        <div className="w-full mt-4 flex flex-col text-center justify-center items-center">
          <p className="font-bold text-2xl text-white mb-4">Our Services</p>
          <h2
            className={title({
              size: "sm",
              className:
                "text-white  !font-normal text-center text-md leading-[28px] md:!text-xl md:!leading-[35px] ",
            })}
          >
            Providing Innovative Solutions and Services Across All HEOR and RWE
            Domains
          </h2>
        </div>
        <div className="px-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 justify-between mt-8 h-full items-center max-w-[1220px] mx-auto">
          {SERVICES.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
