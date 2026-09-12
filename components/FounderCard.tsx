import Image from "next/image";
import React from "react";

const FounderCard = ({ item }: { item: any }) => {
  return (
    <article className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgb(2,30,62,0.14)]">
      <div className="relative mb-5 h-32 w-32 overflow-hidden rounded-full ring-4 ring-sky-100">
        <Image
          fill
          src={item.image}
          alt={item.name}
          sizes="128px"
          className="object-cover object-top"
          quality={100}
        />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-slate-900">
        {item.name}
      </h3>
      <p className="mt-1.5 text-sm font-semibold text-sky-700">{item.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
    </article>
  );
};

export default FounderCard;
