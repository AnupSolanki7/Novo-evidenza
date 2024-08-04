import Image from "next/image";
import React from "react";
import logo from "../image/Logo.png"

const Logo = ({color="white"}:{color?:string}) => {
  return (
    <Image src={logo} className="mix-blend-color-burn" width={80} height={80} alt="logo" color={color} />
  );
};

export default Logo;
