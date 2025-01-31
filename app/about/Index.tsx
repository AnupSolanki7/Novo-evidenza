"use client";

import Page from "@/components/page";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import {
  FaArrowRight,
  FaHospital,
  FaPencilAlt,
  FaClipboardCheck,
  FaFileAlt,
  FaLinkedin,
} from "react-icons/fa";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import MotionDiv from "@/components/MotionDiv";
import MotionCard from "@/components/MotionCard";
import { FOUNDERS } from "@/utils/Constant";
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

  const services = [
    {
      title: "Expert SMO Services",
      description: "Comprehensive site management for clinical trials",
      icon: FaHospital,
    },
    {
      title: "Medical Writing",
      description: "High-quality scientific and regulatory documentation",
      icon: FaPencilAlt,
    },
    {
      title: "Clinical Trial Support",
      description: "End-to-end assistance for research projects",
      icon: FaClipboardCheck,
    },
    {
      title: "Regulatory Affairs",
      description: "Expert guidance in regulatory document preparation",
      icon: FaFileAlt,
    },
  ];

  return (
    <Page className="relative h-max bg-white ">
      {/* Who We Are Section */}

      <section className="bg-gradient-to-r mt-[100px] from-blue-50 to-white py-20">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About VivoClin Research Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              VivoClin Research Services is at the forefront of advancing
              clinical research with precision and expertise. We specialize in
              comprehensive clinical trial site support and medical writing,
              ensuring meticulous execution and high-quality research that
              drives medical innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6 flex items-start space-x-4">
                  <div className=" bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <service.icon className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Members Section */}
      <section className="w-full bg-gradient-to-b from-blue-600 to-blue-700 py-20">
        <MotionDiv className="w-full max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h2
              className={title({
                size: "lg",
                className: "text-white mb-6 font-bold tracking-tight",
              })}
            >
              Meet Our Leadership Team
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              We are the co-founders of{" "}
              <span className="font-semibold text-blue-300">
                Vivoclin Research
              </span>
              , driven by our shared vision of transforming healthcare through
              innovation and excellence.
            </p>
          </div>
        </MotionDiv>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FOUNDERS.map((item, index) => (
              <MotionCard
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <FounderCard item={item} />
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="flex flex-col md:flex-row h-full mx-auto items-center justify-around gap-4"
      >
        <div className="w-full md:w-1/2 flex flex-col pt-[20px] md:pt-0 px-[7%] justify-start items-center h-full">
          <MotionDiv initialTranslateY={50} className="w-full flex flex-col">
            <p className="font-bold text-3xl text-blue-600 mb-4 md:mb-8 ">
              Send Us Your Enquiry
            </p>
            <p className="font-bold text-left w-full whitespace-pre-wrap text-sm text-slate-700 mb-4 md:mb-8 ">
              {" "}
              Ready for a non-obligatory chat, got a quick question or comment?
            </p>
            <div className="w-full flex-col lg:flex-row gap-8 lg:gap-0 flex justify-between items-start mb-4 md:mb-8">
              <span className="w-1/2  md:w-1/3">
                <p className="font-bold text-xl text-blue-600 mb-4 ">Address</p>
                <p className="text-sm text-slate-700 ">
                  Near AEC Cross Road , Memnagar, Ahmedabad 380052 India
                </p>
              </span>
              <span className="w-1/2 md:w-1/3 ">
                <p className="font-bold text-xl text-blue-600 mb-4 ">Contact</p>
                <Link
                  className="text-sm text-slate-700 "
                  href={"mailto:Info.novoevidenza@gmail.com"}
                >
                  Info.novoevidenza@gmail.com
                </Link>
              </span>
            </div>
            <span className="w-full flex gap-4 justify-start items-center mb-8">
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/novo-evidenza/"
                className="flex cursor-pointer justify-center items-center rounded-full w-8 h-8 bg-blue-600 "
              >
                <FaLinkedin className="text-lg text-white" />
              </Link>
            </span>
          </MotionDiv>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.142446574321!2d72.54400357509287!3d23.05523867915088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e849f1da34b99%3A0x4fa0ffc47a78afa9!2sAEC%20Cross%20Rd%2C%20Naranpura%2C%20Ahmedabad%2C%20Gujarat%20380063!5e0!3m2!1sen!2sin!4v1725298358308!5m2!1sen!2sin"
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
                      "font-bold bg-slate-700 p-6 text-white shadow-none w-max ",
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
    </Page>
  );
}
