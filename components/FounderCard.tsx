import Image from "next/image";
import React from "react";

const FounderCard = ({ item }: { item: any }) => {
  return (
    <div className="group relative h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
      <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden ring-4 ring-[#333091]/20">
        <Image fill src={item.image} alt={item.name} className="object-cover" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
      <h5 className="text-[#333091] font-semibold text-lg mb-3">{item.role}</h5>
      <p className="text-center text-gray-600 leading-relaxed">{item.text}</p>
    </div>
  );
};

export default FounderCard;
