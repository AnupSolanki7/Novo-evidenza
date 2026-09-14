import Image from "next/image";
import React from "react";

const FounderCard = ({ item }: { item: any }) => {
  return (
    <article className="group flex h-full flex-col items-center rounded-md border border-brand-line bg-white p-7 text-center shadow-[0_1px_3px_rgb(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_10px_rgb(16,24,40,0.05)]">
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
      <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
        {item.name}
      </h3>
      <p className="mt-1.5 text-sm font-semibold text-brand-accent">{item.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-brand-body">{item.text}</p>
    </article>
  );
};

export default FounderCard;
