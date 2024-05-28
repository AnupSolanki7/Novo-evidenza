import clsx from "clsx";
import React from "react";

const Page = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={clsx("gap-4 w-full  max-w-full", className)}
    >
      {children}
    </div>
  );
};

export default Page;
