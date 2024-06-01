"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { button as buttonStyles } from "@nextui-org/theme";

// import Logo from "../public/image_novo_evidenza-removebg-preview.png";
import { MENU_LIST } from "@/utils/Constant";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
// import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { title } from "./primitives";
import MotionDiv from "./MotionDiv";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const [isNavActive, setIsNavActive] = useState(false);
  const [y, setY] = useState(
    typeof window !== "undefined" ? window?.scrollY : 0
  );

  const handleNavigation = useCallback(
    (e: { currentTarget: any }) => {
      const window = e.currentTarget;
      setY(window?.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window?.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (y < 10 && path === "/") {
      setIsNavActive(true);
    } else {
      setIsNavActive(false);
    }
  }, [y]);

  return (
    <NextUINavbar
      maxWidth="full"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={clsx(
        "py-2 fixed transition-all h-[100px] ease-in-out bg-[#333091]",
        isNavActive ? "transition-all ease-in-out bg-transparent" : "shadow-lg "
      )}
      position="sticky"
    >
      <MotionDiv initialTranslateY={10} className="z-50">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              {/* <Image
              className="mix-blend-color-dodge"
              src={Logo}
              alt="logo"
              width={150}
              height={180}
            /> */}
              <h2
                className={title({
                  className: "text-white text-2xl ",
                })}
              >
                NOVO EVIDENZA
              </h2>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
      </MotionDiv>

      <MotionDiv initialTranslateY={10} className="z-50">
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <ul className="hidden  lg:flex gap-10 justify-start mr-8">
            {MENU_LIST.map((item) => (
              <NavbarItem isActive={item.slug === path} key={item.id}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary text-white data-[active=true]:font-extrabold"
                  )}
                  color="foreground"
                  href={item.slug}
                >
                  {item.title}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
          <NavbarItem className="hidden sm:flex gap-2"></NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className={buttonStyles({
                color: "danger",
                radius: "full",
                variant: "shadow",
                className: "font-bold shadow-none",
              })}
              href={"about"}
              variant="flat"
            >
              About Us
            </Button>
          </NavbarItem>
        </NavbarContent>
      </MotionDiv>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className=" [&>span]:before:bg-white [&>span]:before:h-[2px] [&>span]:after:h-[1.5px] [&>span]:after:bg-white " />
      </NavbarContent>

      <NavbarMenu className="bg-[#333091]">
        <div className="mx-4 justify-between pb-8 mt-[70px] h-[80vh]  flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            {MENU_LIST.map((item, index) => (
              <NavbarMenuItem key={item.id}>
                <Link
                  className="text-white underline "
                  href={item.slug}
                  size="lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            ))}
            <Button
              as={Link}
              className={buttonStyles({
                radius: "full",
                variant: "shadow",
                color: "danger",
                className: "font-bold text-white shadow-none mt-6 w-max ",
              })}
              href={"/about"}
              variant="flat"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Button>
          </div>
          <div className="mx-auto w-full">
            {/* <Image
              className="mix-blend-color-dodge"
              src={Logo}
              alt="logo"
              width={150}
              height={180}
            /> */}
            <h2
              className={title({
                className: "text-white text-center w-full ",
              })}
            >
              NOVO EVIDENZA
            </h2>
            <div className="border-t-2 text-white w-full text-sm ">
              <div className="flex flex-col w-full justify-between my-4">
                <p>copyright Novo Evidenza 2024. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
