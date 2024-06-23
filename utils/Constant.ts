import ServiceIcon1 from "@/assets/icons/ServiceIcon1";
import ServiceIcon2 from "@/assets/icons/ServiceIcon2";
import { HiSpeakerphone } from "react-icons/hi";
import ServiceIcon4 from "@/assets/icons/ServiceIcon4";
import Profile from "../assets/image/profile.png";
import Achieve1 from "@/assets/icons/Achieve1";
import Achieve2 from "@/assets/icons/Achieve2";
import Achieve3 from "@/assets/icons/Achieve3";
import Achieve4 from "@/assets/icons/Achieve4";
import HeorIcon1 from "@/assets/icons/HeorIcon1";
import HeorIcon2 from "@/assets/icons/HeorIcon2";
import HeorIcon3 from "@/assets/icons/HeorIcon3";
import HeorIcon4 from "@/assets/icons/HeorIcon4";
import HeorIcon5 from "@/assets/icons/HeorIcon5";
import ServiceIcon3 from "@/assets/icons/ServiceIcon3";

export const MENU_LIST = [
  {
    id: "home",
    title: "Home",
    slug: "/",
  },
  {
    id: "heor",
    title: "HEOR",
    slug: "/heor",
  },
  {
    id: "pv-regulatory",
    title: "PV and Regulatory",
    slug: "/pv-regulatory",
  },
  {
    id: "publications",
    title: "Publications",
    slug: "/publications",
  },
];

export const SERVICES = [
  {
    id: "1",
    title: "Health Economics & Outcomes Research",
    subtitle:
      "Delivering Holistic and Integrated HEOR Solutions Tailored to Meet Your Every Need",
    link: "/heor",
    Icon: ServiceIcon1,
  },
  {
    id: "2",
    title: "Real World Evidence",
    subtitle:
      "RWE Abstraction of Data from Real-World Sources and Synthesizing Real-World Evidence",
    link: "/heor",
    Icon: ServiceIcon2,
  },
  {
    id: "3",
    title: "Value Communications",
    subtitle:
      "Elevating Research Impact with Engaging Scientific Publications, Conference Assistance and Beyond",
    link: "/about",
    Icon: HiSpeakerphone,
  },
  {
    id: "4",
    title: "Competitive Intelligence",
    subtitle:
      "Generating Credible and Actionable Insights Enabling You to Stay Ahead of the Competition",
    link: "/about",
    Icon: ServiceIcon4,
  },
];

export const ACHEIVEMENTS = [
  {
    icon: Achieve3,
    number: 64,
    title: "Project Delivery",
  },
  {
    icon: Achieve2,
    number: 12,
    title: "HTA Submissions",
  },
  {
    icon: Achieve1,
    number: 3,
    title: "Pharmacovigilance Project",
  },
  {
    icon: Achieve4,
    number: 58,
    title: "CER for clients",
  },
  // {
  //   icon: HiSpeakerphone,
  //   number: 100,
  //   title: "Conference Support",
  // },
  // {
  //   icon: Achieve2,
  //   number: 150,
  //   title: "Publication Support",
  // },
];

export const FOUNDERS = [
  {
    image: Profile,
    name: "Kunal",
    role: "Co-Founder",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
  {
    image: Profile,
    name: "Kunal",
    role: "Co-Founder",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
];

export const HEORLIST = [
  {
    id: 1,
    icon: HeorIcon1,
    title: "Literature Reviews",
    subTitle:
      "Novo Evidenza specializes in high-quality evidence synthesis through end-to-end support for systematic literature reviews. We are experts in all stages of the SLRs, right from reconstructing SLR objectives to PICOS headings, till preparing SLR report. We hunt for evidence from all possible sources, and generate credible evidence.",
    list: [
      "PICOS, search strategy preparing and executing",
      "SLR protocol preparation and registration",
      "Database and grey literature search, screening, data extraction, quality assessment",
      "SLR report writing, periodic updates",
    ],
    image:
      "https://marksmanhealthcare.com/wp-content/uploads/2021/05/Literature-Reviews-Services.png",
  },
  {
    id: 2,
    icon: HeorIcon2,
    title: "Meta-Analysis",
    subTitle:
      "Our statisticians are proficient in data analysis using appropriate forms of statistical methods and generate insights about various outcomes. We have expertise in multiple forms of direct and indirect comparisons, using both frequentist and Bayesian methods",
    list: [
      "Direct and indirect treatment comparisons",
      "Meta-analyses, network meta-analysis",
      "Bayesian and frequentist statistics",
      "R, Stata, SPSS, WinBUGS/OpenBUGS, RevMan, and other software",
    ],
    image:
      "https://marksmanhealthcare.com/wp-content/uploads/2021/05/Evidence-generation-service-1.png",
  },
  {
    id: 3,
    icon: HeorIcon3,
    title: "Economic Modelling",
    subTitle:
      "Novo Evidenza assists in development of health economic models to support reimbursements, health technology assessment (HTA) submissions, and to optimize market access strategies",
    list: [
      "Decision tree model, Markov model, partitioned survival model",
      "Different types of cost analysis: CEA, CUA, COI/ BOI, CBA, BMI",
      "De-novo model conceptualization",
      "Country-specific modeling adaptations",
    ],
    image:
      "https://marksmanhealthcare.com/wp-content/uploads/2021/05/Economic-modelling.png",
  },
  {
    id: 4,
    icon: HeorIcon4,
    title: "Market Access",
    subTitle:
      "We understand that successful market access also depends on real-world evidence and HEOR. Because of our breadth of knowledge, we provide services throughout the product lifecycle to ensure optimal pricing and access.",
    list: [
      "Market access landscape assessment",
      "Reimbursement and pricing strategy",
      "Payer and pricing research",
      "Product assessment",
    ],
    image:
      "https://marksmanhealthcare.com/wp-content/uploads/2021/06/Market-Access-services.png",
  },
  {
    id: 5,
    icon: HeorIcon5,
    title: "CER",
    subTitle:
      "Medical devices seeking marketing authorization must submit a detailed clinical evaluation report (CER) to the regulators. Our team is experienced with preparing CERs for medical devices in accordance with the relevant guidelines, including MEDDEV 2.7/1",
    list: [
      "Clinical evaluation planning (CEP) and clinical evaluation report (CER)",
      "Background, current knowledge, state-of-the-art (SOTA)",
      "Detailed literature analysis for device under evaluation (DUE)",
      "Medical device details: design, materials, mode of operation, site of use, etc",
    ],
    image:
      "https://marksmanhealthcare.com/wp-content/uploads/2023/03/Clinical-Evaluation-Report-Service-1.png",
  },
];

export const PUBLICATIONS = [
  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },

  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },

  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },

  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },

  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },

  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },

  {
    title:
      "The Efficacy, Safety, and Economic Outcomes of Using Ferric Derisomaltose for the Management of Iron Deficiency in China: A Rapid Health Technology Assessment",
    subtitle: "Cureus 15(11): e48717. doi:10.7759/cureus.48717",
    file: "https://marksmanhealthcare.com/wp-content/uploads/2023/11/Real-world-Safety-and-Effectiveness-of-Sodium-Oxybate-in-the-Management-of-Narcolepsy.pdf",
  },
];

export const PVSERVICES = [
  {
    title: "ICSR",
    description:
      "We are a provider of pharmacovigilance, regulatory and quality & compliance consultancy, and operational services. We help innovative life sciences companies expedite the product development and commercialization journey, reducing time to market.",
    icon: ServiceIcon4,
    position: 5,
  },
  {
    title: "Case Submission",
    description:
      "We are a provider of pharmacovigilance, regulatory and quality & compliance consultancy, and operational services. We help innovative life sciences companies expedite the product development and commercialization journey, reducing time to market.",
    icon: HeorIcon5,
    position: 35,
  },
  {
    title: "Literature review",
    description:
      "We are a provider of pharmacovigilance, regulatory and quality & compliance consultancy, and operational services. We help innovative life sciences companies expedite the product development and commercialization journey, reducing time to market.",
    icon: HeorIcon1,
    position: 65,
  },
  {
    title: "Aggregate Reporting",
    description:
      "We are a provider of pharmacovigilance, regulatory and quality & compliance consultancy, and operational services. We help innovative life sciences companies expedite the product development and commercialization journey, reducing time to market.",
    icon: HeorIcon2,
    position: 20,
  },
  {
    title: "Signal detection",
    description:
      "We are a provider of pharmacovigilance, regulatory and quality & compliance consultancy, and operational services. We help innovative life sciences companies expedite the product development and commercialization journey, reducing time to market.",
    icon: HeorIcon3,
    position: 55,
  },
];

export const REGULATORY = [
  {
    title: "Submission Document Management and Tracking",
  },
  {
    title: "Regulatory Content Management",
  },
  {
    title: "Change Control Management",
  },
  {
    title: "Label Change Tracking",
  },
  {
    title: "Integrated Regulatory Information",
  },
  {
    title: "Regulatory Intelligence",
  },
  {
    title: "Reporting and Analytics",
  },
];
