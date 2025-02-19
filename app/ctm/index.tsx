import React from "react";
import Pages from "@/components/page";
import { Button } from "@nextui-org/button";
import {
  FaBandAid,
  FaBone,
  FaChartBar,
  FaClipboardCheck,
  FaDatabase,
  FaDna,
  FaEye,
  FaMicroscope,
  FaStethoscope,
  FaWifi,
} from "react-icons/fa";
import { GiDrop } from "react-icons/gi";
import Link from "next/link";

const index = () => {
  const services = [
    {
      title: "On-Site Monitoring",
      description:
        "Ensuring protocol compliance at investigational sites, verifying source data accuracy, and assessing site performance.",
      icon: <FaMicroscope className="h-12 w-12 text-blue-600 mb-4" />,
    },
    {
      title: "Remote Monitoring",
      description:
        "Using advanced tools to review data and documentation remotely, with real-time risk assessment and issue identification.",
      icon: <FaWifi className="h-12 w-12 text-blue-600 mb-4" />,
    },
    {
      title: "Risk-Based Monitoring (RBM)",
      description:
        "Focusing resources on critical data and processes, adopting a data-driven approach to identify and mitigate risks.",
      icon: <FaChartBar className="h-12 w-12 text-blue-600 mb-4" />,
    },
    {
      title: "Compliance Audits",
      description:
        "Ensuring adherence to ICH-GCP, regulatory guidelines, and study protocols. Preparing sites for regulatory inspections.",
      icon: <FaClipboardCheck className="h-12 w-12 text-blue-600 mb-4" />,
    },
    {
      title: "Data Monitoring and Quality Assurance",
      description:
        "Identifying and resolving data discrepancies, overseeing safety reporting and adverse event documentation.",
      icon: <FaDatabase className="h-12 w-12 text-blue-600 mb-4" />,
    },
  ];

  const specialties = [
    {
      name: "Gastroenterology",
      icon: <FaStethoscope className="w-8 h-8 text-blue-600" />,
      description:
        "Our gastroenterology team excels in researching digestive system disorders, from inflammatory bowel diseases to liver conditions. We conduct trials on innovative therapies for conditions like Crohn's disease, ulcerative colitis, and GERD, pushing the boundaries of gastrointestinal health.",
    },
    {
      name: "Dermatology",
      icon: <GiDrop className="w-8 h-8 text-blue-600" />,
      description:
        "In dermatology, we're at the forefront of skin health research. Our trials cover a wide spectrum, from acne and psoriasis to cutting-edge treatments for melanoma. We're committed to advancing therapies that improve both the health and aesthetics of the skin.",
    },
    {
      name: "Rheumatology",
      icon: <FaBone className="w-8 h-8 text-blue-600" />,
      description:
        "Our rheumatology specialists focus on groundbreaking research in autoimmune and inflammatory disorders. We conduct trials for conditions like rheumatoid arthritis, lupus, and osteoarthritis, aiming to develop treatments that enhance mobility and quality of life for patients.",
    },
    {
      name: "Immuno-Oncology",
      icon: <FaDna className="w-8 h-8 text-blue-600" />,
      description:
        "In the rapidly evolving field of immuno-oncology, we're pioneering trials that harness the power of the immune system to fight cancer. Our research spans various cancer types, exploring innovative approaches like CAR-T cell therapy and checkpoint inhibitors.",
    },
    {
      name: "Ophthalmology",
      icon: <FaEye className="w-8 h-8 text-blue-600" />,
      description:
        "Our ophthalmology research is dedicated to preserving and improving vision. We conduct trials on treatments for conditions such as macular degeneration, glaucoma, and diabetic retinopathy, utilizing advanced technologies to push the boundaries of eye care.",
    },
    {
      name: "Oncology",
      icon: <FaBandAid className="w-8 h-8 text-blue-600" />,
      description:
        "Our oncology team is committed to revolutionizing cancer treatment. We conduct trials across various cancer types, focusing on targeted therapies, combination treatments, and novel approaches to improve patient outcomes and quality of life during treatment.",
    },
  ];

  return (
    <Pages className="mt-[100px] h-max min-h-screen bg-white">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Partner in Clinical Excellence
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Advanced monitoring solutions and specialized expertise in diverse
            therapeutic areas to support your clinical trials.
          </p>
          <div className="space-x-4">
            <Link
              href={"/about"}
              className="bg-white px-6 py-3 rounded-xl font-semibold text-blue-600 hover:bg-blue-50"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Comprehensive Monitoring Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105 ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                } ${index < 2 ? "transform hover:-translate-y-2" : ""}`}
              >
                <div className={`${index < 2 ? "transform scale-10" : ""}`}>
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    index < 2 ? "text-2xl text-blue-600" : "text-2xl text-blue-600"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="specialties" className="py-20 bg-gray-50 px-8 md:px-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Therapeutic Expertise Across Diverse Areas
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-black">
            Our investigational sites specialize in a wide range of therapeutic
            areas, providing comprehensive support for clinical trials. Each
            specialty is backed by a team of experienced researchers and
            state-of-the-art facilities, ensuring high-quality, reliable
            results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded-xl">
                <div className="flex gap-3 justify-start items-center">
                  {specialty.icon}
                  <h3 className="text-xl text-black font-semibold">{specialty.name}</h3>
                </div>
                <div className="mt-4" >
                  <p className="text-sm text-black">{specialty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your clinical trials? Contact us today to learn how
            our monitoring services and therapeutic expertise can help.
          </p>
          <div className="space-x-4">
            <Link
              href={"/about"}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </Pages>
  );
};

export default index;
