"use client";

import clsx from "clsx";
import React, { useId, useState } from "react";
import toast from "react-hot-toast";
import { LuArrowRight } from "react-icons/lu";

import MotionDiv from "@/components/MotionDiv";
import { Eyebrow } from "./ui";

type Values = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

/**
 * Consultation / enquiry form. Fields and validation rules are the site's
 * original four: name, email, phone and message.
 */
const RFPConfigurator = ({
  id = "contact",
  className,
}: {
  id?: string;
  className?: string;
}) => {
  const uid = useId();

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [loader, setLoader] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: false }));
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(true);

    if (!validateForm()) {
      setLoader(false);

      return;
    }

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => formData.append(key, value));

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      await response.json();
      toast.success(
        "Thank you for your enquiry, we will get back to you shortly!"
      );
      setValues(EMPTY);
    } catch (err) {
      toast.error("Error, please try resubmitting the form");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section
      id={id}
      className={clsx(
        "relative isolate overflow-hidden py-20 lg:py-28",
        className
      )}
    >

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-10">
        <MotionDiv initialTranslateY={32} className="text-center">
          <Eyebrow>Consultation Request</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Schedule a Consultation &amp; Request for Proposal (RFP)
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-16 bg-gradient-to-r from-sky-500 to-teal-400"
          />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
            Ready for a non-obligatory chat, got a quick question or comment?
          </p>
        </MotionDiv>

        <MotionDiv initialTranslateY={40} delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_28px_70px_-24px_rgb(2,30,62,0.28)] sm:p-9">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  id={`${uid}-name`}
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={onChange}
                  error={errors.name ? "Name is required" : undefined}
                />
                <TextField
                  id={`${uid}-email`}
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={onChange}
                  error={errors.email ? "Valid email is required" : undefined}
                />
              </div>

              <div className="mt-5">
                <TextField
                  id={`${uid}-phone`}
                  label="Phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter your phone"
                  value={values.phone}
                  onChange={onChange}
                  error={
                    errors.phone ? "Valid phone number is required" : undefined
                  }
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor={`${uid}-message`}
                  className="mb-1.5 block text-sm font-semibold text-slate-800"
                >
                  Message <span className="text-sky-600">*</span>
                </label>
                <textarea
                  id={`${uid}-message`}
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={errors.message || undefined}
                  aria-describedby={
                    errors.message ? `${uid}-message-error` : undefined
                  }
                  className={clsx(
                    "w-full resize-y rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition-colors placeholder:text-slate-400",
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-200 focus:border-sky-500"
                  )}
                />
                {errors.message ? (
                  <p
                    id={`${uid}-message-error`}
                    className="mt-1.5 text-xs font-medium text-red-600"
                  >
                    Message is required
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={loader}
                className="group/cta mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_30px_-8px_rgb(14,165,233,0.7)] transition-all duration-300 hover:shadow-[0_14px_38px_-8px_rgb(14,165,233,0.85)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loader ? "Sending…" : "Send Enquiry"}
                {!loader ? (
                  <LuArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            </form>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

const TextField = ({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  inputMode,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  inputMode?: "numeric";
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1.5 block text-sm font-semibold text-slate-800"
    >
      {label} <span className="text-sky-600">*</span>
    </label>
    <input
      id={id}
      name={name}
      type={type}
      inputMode={inputMode}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-invalid={Boolean(error) || undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={clsx(
        "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition-colors placeholder:text-slate-400",
        error
          ? "border-red-400 focus:border-red-500"
          : "border-slate-200 focus:border-sky-500"
      )}
    />
    {error ? (
      <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
        {error}
      </p>
    ) : null}
  </div>
);

export default RFPConfigurator;
