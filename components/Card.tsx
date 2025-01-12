import { Button } from "@nextui-org/button";
import React from "react";
import { title } from "./primitives";
import { GiBottleVapors } from "react-icons/gi";
import ServiceIcon1 from "@/assets/icons/ServiceIcon1";
import { Link } from "@nextui-org/link";

const Card = ({
  item,
}: {
  item: {
    id: string;
    title: string;
    subtitle: string;
    link?: string;
    Icon: any;
  };
}) => {
  return (
    <Link href={item?.link}>
      <div className="min-h-[400px] h-[80%] hover:bg-[#333091] [&>h3]:hover:text-white [&>button]:hover:text-white [&>button]:hover:bg-danger-500   transition-all ease-in-out rounded-[30px] [&>*]:[&>*]:hover:fill-white [&>p]:hover:text-gray-200 bg-white flex justify-between items-center md:items-start flex-col gap-2 p-8">
        <span className="text-6xl w-[60px] h-[60px] [&>*]:fill-[#333091]">
          {<item.Icon />}
        </span>
        <h3
          className={title({
            className: "!text-xl h-14 text-danger-500 font-bold ",
          })}
        >
          {item.title}
        </h3>
        <p className="text-gray-500 h-max min-h-[100px]">{item.subtitle}</p>
        <Button
          className="font-bold shadow-none p-6 mt-6 w-max "
          href={"/about"}
          variant="flat"
        >
          Read More
        </Button>
      </div>
    </Link>
  );
};

export default Card;
