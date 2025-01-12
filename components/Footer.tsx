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
        <span className="flex items-center" >
          <Logo />{" "}
          <h2 className="md:text-3xl text-xl w-full text-center font-extrabold text-white">
            VivoClin Research
          </h2>
        </span>
      </MotionDiv>
      <MotionDiv className="px-6 mx-auto flex overflow-hidden flex-col md:flex-row justify-start w-full mt-6 gap-12 md:gap-0 ">
        <div className=" w-full md:w-1/3 justify-start items-start flex flex-col gap-4 ">
          <span className="flex justify-start gap-1 text-white font-semibold items-start">
            <IoLocationSharp className="text-xl w-6 flex-shrink-0" />
            <p>Near AEC Cross Road , Memnagar, Ahmedabad</p>
          </span>
          <span className="flex justify-start gap-1 text-white font-semibold items-center">
            <FaPhoneAlt className="text-xl w-6 flex-shrink-0" />
            <span className="text-white flex justify-start items-center gap-2">
              Call Us:
              <span className="flex gap-2">
                {/* <Link className="text-white" href={"tel:9617330774"}>
                  +91-9617330774
                </Link> */}
                <Link className="text-white" href={"tel:9974525632"}>
                  +91-9974525632
                </Link>
              </span>
            </span>
          </span>
          <span className="flex justify-start gap-1 text-white font-semibold items-center">
            <IoIosMail className="text-xl w-6 flex-shrink-0" />
            <Link
              className="flex-wrap text-white"
              href={"mailto:Info.novoevidenza@gmail.com"}
            >
              Info.novoevidenza@gmail.com
            </Link>
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
              href={"/heor"}
            >
              HEOR
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"/pv-regulatory"}
            >
              PV & Regulatory
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"/publications"}
            >
              Publications
            </Link>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
              )}
              color="foreground"
              href={"/about"}
            >
              About Us
            </Link>
          </span>
        </div>
        <div className=" w-full md:w-1/3  justify-start items-start flex flex-col gap-4 ">
          <span className="border-b-2 text-white font-semibold">
            <p>Join Us on a Global Journey of Innovation</p>
          </span>
          <span className="flex justify-start gap-1 text-white font-semibold items-center">
            <p className="">
              Partner with Vivoclin Research to experience a partnership rooted
              in expertise and innovation. Together, we’ll navigate the
              intricate pharmaceutical landscape, unlocking potential and
              creating lasting impact on a global scale.
            </p>
          </span>
        </div>
      </MotionDiv>
      <div className="border-t-2 text-white w-full text-sm mt-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full justify-between px-6 my-4">
          <p>copyright Vivoclin Research 2024. All rights reserved.</p>
          <Link
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
            )}
            color="foreground"
            target="_blank"
            href={"https://anup-gamma.vercel.app/"}
          >
            <p>Crafted by Anup Solanki</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
