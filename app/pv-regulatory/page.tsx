import React from "react";
import Pages from "@/components/page";
import MotionDiv from "@/components/MotionDiv";

const Page = () => {
  return (
    <Pages
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/60656386cb77057bb09f78eb/606c5ca05beae50a3e02e799_Fill_1_Copy_3_%2B_Fill_1_Copy_Mask.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-[100px] h-max min-h-screen"
    >
      <div className="w-full bg-danger-500 py-8 ">
        <h1 className="text-5xl w-full text-center font-extrabold text-white">
        PV Regulatory
        </h1>
      </div>
    </Pages>
  );
};

export default Page;
