"use client";

import Page from "@/components/page";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import MotionDiv from "@/components/MotionDiv";
import MotionCard from "@/components/MotionCard";
import { FOUNDERS } from "@/utils/Constant";
import clsx from "clsx";
import FounderCard from "@/components/FounderCard";

export default function AboutPage() {
  const formRef: any = useRef(null);
  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    const newErrors = {
      name: !values.name.length,
      email:
        !values.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email),
      phone: !values.phone || !/^\d{10}$/.test(values.phone),
      message: !values.message.length,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (event: any) => {
    setLoader(true);
    event.preventDefault();
    if (!validateForm()) {
      setLoader(false);
      return;
    }

    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      toast.success(
        "Thank you for your enquiry, we will get back to you shortly!"
      );
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setLoader(false);
    } catch (err) {
      setLoader(false);
      toast.error("Error, please try resubmitting the form");
    }
  };

  return (
    <Page className="relative h-max bg-white ">
      <section className="flex flex-col md:flex-row mt-[100px] h-full mx-auto items-center justify-around gap-4">
        <div className="w-full md:w-1/2 flex flex-col pt-[20px] md:pt-0 px-[7%] justify-start items-center h-full">
          <MotionDiv initialTranslateY={50} className="w-full flex flex-col">
            <p className="font-bold text-3xl text-[#333091] mb-4 md:mb-8 ">
              Send Us Your Enquiry
            </p>
            <p className="font-bold text-left w-full text-sm text-[#333091] mb-4 md:mb-8 ">
              {" "}
              Ready for a non-obligatory chat, got a quick question or comment?
            </p>
            <div className="w-full flex justify-between items-start mb-4 md:mb-8">
              <span className="w-1/2  md:w-1/3">
                <p className="font-bold text-xl text-[#333091] mb-4 ">
                  Address
                </p>
                <p className="text-sm text-[#333091] ">
                  55 Mt Maunganui Road Ahmedabad Gujarat 3116 India
                </p>
              </span>
              <span className="w-1/2 md:w-1/3 overflow-hidden">
                <p className="font-bold text-xl text-[#333091] mb-4 ">
                  Contact
                </p>
                <p className="text-sm text-[#333091] ">027 422 1373</p>
                <p className="text-sm text-[#333091] ">
                  danny@bringonmonday.com
                </p>
              </span>
            </div>
            <span className="w-full flex gap-4 justify-start items-center mb-8">
              <Link className="flex cursor-pointer justify-center items-center rounded-full w-8 h-8 bg-[#333091] ">
                <FaFacebookF className="text-lg text-white" />
              </Link>
              <Link className="flex cursor-pointer justify-center items-center rounded-full w-8 h-8 bg-[#333091] ">
                <FaInstagram className="text-lg text-white" />
              </Link>
            </span>
          </MotionDiv>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.531481825186!2d72.56182356233502!3d23.039686216322487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ae790f142d%3A0x35c4f6c363885d2e!2sRiverfront%20Ahmedabad!5e0!3m2!1sen!2sin!4v1717086295038!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            className="border-0 h-[200px] w-full mb-8"
            referrerPolicy="no-referrer-when-downgrade"
            title="address"
          ></iframe>
        </div>

        <div className="contact px-[7%] pt-[80px] w-full md:w-1/2 h-full">
          <MotionDiv>
            <h2 className={title({ className: "text-white" })}>
              GET IN TOUCH!
            </h2>
          </MotionDiv>
          <form ref={formRef} onSubmit={handleSubmit} className="py-[7%] ">
            <MotionDiv className="w-full flex  flex-col justify-start items-center gap-6">
              <Input
                onChange={onChange}
                type="text"
                name="name"
                className="input "
                placeholder="Enter your name"
                radius="none"
                labelPlacement="outside"
                classNames={{
                  label: "!text-white font-semibold",
                  helperWrapper: "absolute bottom-[-50%] font-semibold",
                  inputWrapper: "bg-white",
                }}
                value={values.name}
                label="Name"
                isInvalid={errors.name}
                errorMessage={errors.name ? "Name is required" : ""}
              />
              <Input
                type="email"
                name="email"
                onChange={onChange}
                placeholder="Enter your email"
                radius="none"
                className="bg-white "
                value={values.email}
                labelPlacement="outside"
                classNames={{
                  label: "!text-white font-semibold",
                  helperWrapper: "absolute bottom-[-50%] font-semibold",
                  inputWrapper: "bg-white",
                }}
                label="Email"
                isInvalid={errors.email}
                errorMessage={errors.email ? "Valid email is required" : ""}
              />
              <Input
                type="number"
                name="phone"
                className="bg-white "
                onChange={onChange}
                placeholder="Enter your phone"
                radius="none"
                value={values.phone}
                labelPlacement="outside"
                classNames={{
                  label: "!text-white font-semibold",
                  helperWrapper: "absolute bottom-[-50%] font-semibold",
                  inputWrapper: "bg-white",
                }}
                label="Phone"
                isInvalid={errors.phone}
                errorMessage={
                  errors.phone ? "Valid phone number is required" : ""
                }
              />
              <div className="w-full relative">
                <Textarea
                  type="text"
                  name="message"
                  onChange={onChange}
                  className="bg-white "
                  placeholder="Enter your message"
                  radius="none"
                  value={values.message}
                  labelPlacement="outside"
                  classNames={{
                    label: "!text-white font-semibold",
                    helperWrapper: "absolute bottom-[-20%] font-semibold",
                    mainWrapper: "relative",
                    inputWrapper: "bg-white",
                  }}
                  label="Message"
                  isInvalid={errors.message}
                  errorMessage={errors.message ? "Message is required" : ""}
                />
              </div>
              <div className="w-full justify-start items-center flex">
                <Button
                  isLoading={loader}
                  className={buttonStyles({
                    radius: "full",
                    variant: "shadow",
                    className:
                      "font-bold bg-[#333091] p-6 text-white shadow-none w-max ",
                  })}
                  variant="flat"
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </MotionDiv>
          </form>
        </div>
      </section>
      <section className="w-full about h-max md:h-[87vh] relative text-white">
        <MotionDiv className="w-full sticky px-6 py-[50px] z-10 flex flex-col text-center justify-center items-center">
          <h2
            className={title({
              size: "sm",
              className:
                "text-white mb-4 font-bold text-center text-2xl leading-[28px] md:!text-3xl md:!leading-[35px] ",
            })}
          >
            Meet your small business partners
          </h2>
          <p className="md:text-xl text-md text-white ">
            We are , co-founders of{" "}
            <p className={title({ className: "!text-[20px] text-[#333091]" })}>
              Novo Evidenza
            </p>{" "}
            and united by our love and passion for using business as a force for
            good
          </p>
        </MotionDiv>
        <div className="px-6 grid sticky pt-6 py-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-12 md:gap-4 justify-between h-max items-center max-w-[1220px] mx-auto">
          {FOUNDERS.map((item, index) => (
            <MotionCard key={index}>
              <FounderCard item={item} />
            </MotionCard>
          ))}
        </div>
      </section>
    </Page>
  );
}
