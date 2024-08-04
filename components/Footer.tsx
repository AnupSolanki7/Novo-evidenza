"use client";

import Image from "next/image";
import { link as linkStyles } from "@nextui-org/theme";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import React from "react";
import { title } from "./primitives";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import MotionDiv from "./MotionDiv";
import Logo from "@/assets/icons/Logo";

const Footer = () => {
  return (
    <footer className="w-full flex-col bg-[#333091] flex items-center justify-center py-3">
      <MotionDiv className="px-6 mx-auto  flex justify-start w-full mt-6 ">
        <Logo />
      </MotionDiv>
      <MotionDiv className="px-6 mx-auto flex overflow-hidden flex-col md:flex-row justify-start w-full mt-6 gap-12 md:gap-0 ">
        <div className=" w-full md:w-1/3 justify-start items-start flex flex-col gap-4 ">
          <span className="flex justify-start gap-1 text-white font-semibold items-start">
            <IoLocationSharp className="text-xl w-6 flex-shrink-0" />
            <p>Salar Nagar , Old City Hyderabad 50059</p>
          </span>
          <span className="flex justify-start gap-1 text-white font-semibold items-center">
            <FaPhoneAlt className="text-xl w-6 flex-shrink-0" />
            <p>Call Us: +91-9617330774</p>
          </span>
          <span className="flex justify-start gap-1 text-white font-semibold items-center">
            <IoIosMail className="text-xl w-6 flex-shrink-0" />
            <p className="flex-wrap">info.novoevidenza01@gmail.com</p>
          </span>
        </div>
        <div className=" w-full md:w-1/3  justify-start items-start md:items-center flex flex-col gap-4 ">
          <span className="flex flex-col gap-2">
            <span className="border-b-2 text-white font-semibold ">
              <p>Quick Links</p>
            </span>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"about-us"}
            >
              About us
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"services"}
            >
              Our services
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"ra"}
            >
              RA
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"medical-writing"}
            >
              Medical Writing
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"heor"}
            >
              HEOR
            </Link>
          </span>
        </div>
        <div className=" w-full md:w-1/3  justify-start items-start flex flex-col gap-4 ">
          <span className="border-b-2 text-white font-semibold">
            <p>Work with us</p>
          </span>
          <span className="flex justify-start gap-1 text-white font-semibold items-center">
            <p className="">
              We believe that work is to be pursued and enjoyed through
              commitment, teamwork, creative thinking, and an ethical approach
              in everything we do.
            </p>
          </span>
        </div>
      </MotionDiv>
      <div className="border-t-2 text-white w-full text-sm mt-6">
        <div className="flex w-full justify-between px-6 my-4">
          <p>copyright Novo Evidenza 2024. All rights reserved.</p>
          <p>Crafted by Anup</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
