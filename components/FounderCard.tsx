import Image from "next/image";
import React from "react";

const FounderCard = ({ item }: { item: any }) => {
  return (
    <div className="flex px-8 flex-col justify-start items-center gap-2">
      <Image width={150} height={150} src={item.image} alt="image" />
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <h5 className="text-[#333091] font-bold">{item.role}</h5>
      <p className="text-center" >{item.text}</p>
    </div>
  );
};

export default FounderCard;
