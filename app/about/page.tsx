import Page from "@/components/page";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <Page className="relative h-screen">
      <section className="flex flex-col md:flex-row my-auto h-full mx-auto items-center justify-around gap-4">
        <div className="w-full md:w-1/2 flex flex-col px-[7%] justify-start pt-[150px] md:pt-[180px] items-center h-full">
          <div className="w-full flex flex-col">
            <p className="font-bold text-3xl text-[#333091] mb-4 md:mb-8 ">
              The first step towards stress-free small business accounting
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
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.531481825186!2d72.56182356233502!3d23.039686216322487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ae790f142d%3A0x35c4f6c363885d2e!2sRiverfront%20Ahmedabad!5e0!3m2!1sen!2sin!4v1717086295038!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            className="border-0 h-[200px] w-full mb-8"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact w-full md:w-1/2 h-full"></div>
      </section>
    </Page>
  );
}
