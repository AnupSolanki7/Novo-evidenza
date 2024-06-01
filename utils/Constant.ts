import ServiceIcon1 from "@/assets/icons/ServiceIcon1";
import ServiceIcon2 from "@/assets/icons/ServiceIcon2";
import { HiSpeakerphone } from "react-icons/hi";
import ServiceIcon4 from "@/assets/icons/ServiceIcon4";
import { subtitle } from "@/components/primitives";
import Achieve1 from "@/assets/icons/Achieve1";
import Achieve2 from "@/assets/icons/Achieve2";
import Achieve3 from "@/assets/icons/Achieve3";
import Achieve4 from "@/assets/icons/Achieve4";

export const MENU_LIST = [
  {
    id: "home",
    title: "HEOR",
    slug: "/",
  },
  {
    id: "medical",
    title: "Medical Writing",
    slug: "/medical-writting",
  },
  {
    id: "pv-regulatory",
    title: "PV and Regulatory",
    slug: "/pv-regulatory",
  },
  {
    id: "medical-scribe",
    title: "Medical Scribe",
    slug: "/medical-scribe",
  },
];

export const SERVICES = [
  {
    id: "1",
    title: "Health Economics & Outcomes Research",
    subtitle:
      "Delivering Holistic and Integrated HEOR Solutions Tailored to Meet Your Every Need",
    link: "/",
    Icon: ServiceIcon1,
  },
  {
    id: "2",
    title: "Real World Evidence",
    subtitle:
      "RWE Abstraction of Data from Real-World Sources and Synthesizing Real-World Evidence",
    link: "/",
    Icon: ServiceIcon2,
  },
  {
    id: "3",
    title: "Value Communications",
    subtitle:
      "Elevating Research Impact with Engaging Scientific Publications, Conference Assistance and Beyond",
    link: "/",
    Icon: HiSpeakerphone,
  },
  {
    id: "4",
    title: "Competitive Intelligence",
    subtitle:
      "Generating Credible and Actionable Insights Enabling You to Stay Ahead of the Competition",
    link: "/",
    Icon: ServiceIcon4,
  },
];

export const ACHEIVEMENTS = [
  {
    icon: Achieve1,
    number: "200+",
    title: "Project Deliverables",
  },
  {
    icon: Achieve2,
    number: "200+",
    title: "Project Deliverables",
  },
  {
    icon: Achieve3,
    number: "200+",
    title: "Project Deliverables",
  },
  {
    icon: Achieve4,
    number: "200+",
    title: "Project Deliverables",
  },
];
