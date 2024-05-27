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

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import Logo from "../public/image_novo_evidenza-removebg-preview.png"
import { MENU_LIST } from "@/utils/Constant";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export const Navbar = () => {
  const path = usePathname();

  return (
    <NextUINavbar maxWidth="full" className="py-2" shouldHideOnScroll position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={Logo} alt="logo" width={150} height={180} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

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
                  "data-[active=true]:text-primary data-[active=true]:font-extrabold"
                )}
                color="foreground"
                href={item.slug}
              >
                {item.title}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button 
            isExternal
            as={Link}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {MENU_LIST.map((item, index) => (
            <NavbarMenuItem key={item.id}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === MENU_LIST.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.slug}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
