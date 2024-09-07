import ServiceIcon1 from "@/assets/icons/ServiceIcon1";
import ServiceIcon2 from "@/assets/icons/ServiceIcon2";
import { HiSpeakerphone } from "react-icons/hi";
import ServiceIcon4 from "@/assets/icons/ServiceIcon4";
import Profile1 from "../assets/image/profile1.png";
import Profile2 from "../assets/image/profile2.png";
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
      "Providing critical insights for strategic decision-making and maximizing product value.",
    link: "/heor",
    Icon: ServiceIcon1,
  },
  {
    id: "2",
    title: "Medical Writing",
    subtitle:
      "Delivering clear, impactful scientific communication that resonates with global audiences.",
    link: "/about",
    Icon: ServiceIcon2,
  },
  {
    id: "3",
    title: "Pharmacovigilance",
    subtitle:
      " Enhancing patient safety through rigorous monitoring and analysis.",
    link: "/pv-regulatory",
    Icon: HiSpeakerphone,
  },
  {
    id: "4",
    title: "Regulatory Affairs",
    subtitle:
      " Navigating complex international regulations to ensure compliance and expedite market access",
    link: "/pv-regulatory",
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
    image: Profile2,
    name: "Dr. K. G. Maheshwari",
    role: "Founder",
    text: "Dr. Kunal Maheshwari, founder of Novo Evidenza, is a visionary leader in pharmaceutical research and medical writing. With an impressive portfolio of publications in international journals, he excels in Health Economics and Outcomes Research (HEOR). Overseeing more than 50 manuscripts, Dr. Maheshwari is dedicated to empowering researchers and advancing healthcare for a better, healthier world.",
  },
  {
    image: Profile1,
    name: "Md G Khan",
    role: "Co-Founder",
    text: "Md G Khan having 4 years experience in PV industry, he had published 68 papers in peer reviewed journals , 27+ book chapters and edited 2 books ( Clinical Research and Medical Writing) received several awards such as Young Researcher, Best Emerging Scientist through different organisations such as Biolegues , NFPS , Tech Awards . He has holding 1200+ on his name , khan is expanding and promoting healthcare through Novo Evidenza for better patient safety and better world",
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
  //   {
  //     title: `A versatile tissue matrix multifunctional scaffold protein
  // with multifaceted signaling: Unveiling its potential in the cancer battle`,
  //     subtitle: `Nidhi N. Shah · Bhavarth P. Dave · Kashvi C. Shah · Disha D. Shah · Kunal G. Maheshwari ·
  // Mehul R. Chorawala · Priyajeet S. Parekh · Maharsh Jani`,
  //     file: "https://drive.google.com/file/d/1mp2OK1zssbVXD1GHaH5qGT4l458tDa09/view?usp=sharing",
  //   },
  //   {
  //     title: `Analytical methods for quantification of non-steroidal anti-inflammatory
  // drugs in pharmaceutical and biological samples: An overview of
  // developments in the last decade`,
  //     subtitle: `Nisha H. Parikh a, Jyoti Solanki a, Palak K. Parikh a, Ketan Ranch b, Anuradha Gajjar a,
  // Bhavarth Dave c, Kunal Maheshwari c, Bharaneeswar Renukuntla d, Sai HS. Boddu e,f,*`,
  //     file: "https://drive.google.com/file/d/1tg1NSGqssOTX__QPar2QA1hXZ3admL-g/view?usp=sharing",
  //   },
  {
    title: `Pathophysiological Aspects and Therapeutic Armamentarium
of Alzheimer’s Disease: Recent Trends and Future Development`,
    subtitle: `Bhavarth P. Dave · Yesha B. Shah · Kunal G. Maheshwari · Kaif A. Mansuri · Bhadrawati S. Prajapati ·
Humzah I. Postwala · Mehul R. Chorawala`,
    file: "https://drive.google.com/file/d/1Dp8d-a4MHI6ZzIeRWBPyWg6oesqLxSDb/view?usp=sharing",
  },
  {
    title: `A comprehensive study of the basic formulation of supersaturated self-nanoemulsifying drug delivery systems (SNEDDS) of albendazolum`,
    subtitle: `Hani Alothaid, Mohammed S. Aldughaim, Azeez Oriyomi Yusuf, Umama Yezdani, Alaa Alhazmi, Mahmoud M. Habibullah, and Mohammad Gayoor Khang`,
    file: "https://ncbi.nlm.nih.gov/pmc/articles/PMC8510591/",
  },
];

export const PVSERVICES = [
  {
    title: "Adverse Event Reporting",
    description:
      "Collection and management of adverse event reports from healthcare professionals, patients, and other stakeholders.",
    icon: ServiceIcon4,
    position: 5,
  },
  {
    title: "Signal Detection",
    description:
      "Identifying new risks associated with pharmaceuticals through data analysis.",
    icon: HeorIcon5,
    position: 35,
  },
  {
    title: "Risk Management",
    description:
      "Developing and implementing strategies to minimize risks associated with drug use.",
    icon: HeorIcon1,
    position: 65,
  },
  {
    title: "Periodic Safety Update Reports (PSURs)",
    description:
      "Regular reports submitted to regulatory authorities that summarize the safety profile of a drug.",
    icon: HeorIcon2,
    position: 15,
  },
  {
    title: "Risk Evaluation",
    description:
      "Continuous assessment of the balance between the benefits and risks of a drug.",
    icon: HeorIcon3,
    position: 47,
  },
  {
    title: "Patient Safety Communication",
    description:
      "Informing healthcare providers and the public about safety issues related to pharmaceuticals.7.  Follow Up Question/ LSO Connection etc.",
    icon: HeorIcon4,
    position: 75,
  },
];

export const REGULATORY_SERVICES = [
  "Regulatory Strategy Development",
  "Regulatory Submission",
  "Compliance",
  "Labeling and Advertising Compliance",
  "Regulatory Intelligence",
  "Health Authority Interactions",
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
