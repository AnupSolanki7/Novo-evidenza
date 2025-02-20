import ServiceIcon1 from "@/assets/icons/ServiceIcon1";
import ServiceIcon2 from "@/assets/icons/ServiceIcon2";
import { HiSpeakerphone } from "react-icons/hi";
import ServiceIcon4 from "@/assets/icons/ServiceIcon4";
import Profile1 from "../assets/image/profile1.png";
import Hardik from "../assets/image/Hardik.jpeg";
import Kunal from "../assets/image/Kunal.jpeg";
import Kaif from "../assets/image/Kaif.jpeg";
import Gopal from "../assets/image/Gopal.jpeg";
import Profile2 from "../assets/image/profile2.png";
import Profile3 from "../assets/image/profile3.png";
import Profile4 from "../assets/image/profile4.png";
import Profile5 from "../assets/image/profile5.png";
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
  // {
  //   id: "heor",
  //   title: "HEOR",
  //   slug: "/heor",
  // },
  {
    id: "smo",
    title: "SMO",
    slug: "/smo",
  },
  {
    id: "medical-writing",
    title: "Medical Writing",
    slug: "/medical-writing",
  },
  {
    id: "ctm",
    title: "Clinical Trial Monitoring",
    slug: "/ctm",
  },
  // {
  //   id: "pv-regulatory",
  //   title: "PV and Regulatory",
  //   slug: "/pv-regulatory",
  // },

];

export const SERVICES = [
  // {
  //   id: "1",
  //   title: "Health Economics & Outcomes Research",
  //   subtitle:
  //     "Providing critical insights for strategic decision-making and maximizing product value.",
  //   link: "/heor",
  //   Icon: ServiceIcon1,
  // },
  {
    id: "1",
    title: "Site Management Organization (SMO)",
    subtitle:
      "Vivoclin's SMO: APAC clinical research leader in site management, trial startups, and compliance.",
    link: "/smo",
    Icon: ServiceIcon1,
  },
  {
    id: "2",
    title: "Medical Writing",
    subtitle:
      "Delivering clear, impactful scientific communication that resonates with global audiences.",
    link: "/medical-writing",
    Icon: ServiceIcon2,
  },
  {
    id: "3",
    title: "Clinical Trial Monitoring",
    subtitle:
      "Advanced monitoring solutions and specialized expertise in diverse therapeutic areas to support your clinical trials.",
    link: "/ctm",
    Icon: HiSpeakerphone,
  },
  // {
  //   id: "4",
  //   title: "Vivocilin Partner at Every Phase",
  //   subtitle:
  //     "Global clinical development with local expertise, advanced therapies, and cutting-edge operations.",
  //   link: "/about",
  //   Icon: ServiceIcon4,
  // },
];

export const ACHEIVEMENTS = [
  {
    icon: Achieve3,
    number: 134,
    title: "Project Delivery",
  },
  {
    icon: Achieve2,
    number: 102,
    title: "HTA Submissions",
  },
  {
    icon: Achieve4,
    number: 15,
    title: "Meta Analysis",
  },
  {
    icon: Achieve1,
    number: 130,
    title: "Manuscripts Delivered",
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
    image: Kunal,
    name: "Dr. Kunal Maheshwari",
    role: "Operation team",
    text: "Dr. Kunal Maheshwari is an experienced medical writer and clinical research professional with expertise in scientific writing, regulatory documentation, and medical communications. His proficiency in crafting high-quality manuscripts, clinical study reports, and regulatory submissions ensures clarity, accuracy, and compliance with industry standards. With a strong background in clinical research, he bridges the gap between scientific data and effective communication, contributing to impactful medical literature and research excellence.",
  },
  {
    image: Kaif,
    name: "Dr. Mohammad Kaif",
    role: "Operation team",
    text: "Dr. Mohammad Kaif is an experienced clinical research professional with expertise in study coordination and quality assurance. As a scientific writing expert, he has contributed to impactful research through numerous authored manuscripts. His multidisciplinary experience strengthens clinical trial execution and regulatory compliance.",
  },
  {
    image: Gopal,
    name: "Dr. Gopal Natesan",
    role: "Advisor",
    text: "Dr. Gopal Natesan is a distinguished pharmaceutical scientist with expertise in clinical research, medical writing, and regulatory sciences. With over two decades of experience, he has contributed to scientific communication, quality assurance, and research excellence. As the Director at Nirma University, Ahmedabad, he plays a key role in fostering industry collaborations and academic advancements. His expertise strengthens our commitment to high-quality research and regulatory support.",
  },
  {
    image: Hardik,
    name: "Dr. Hardik Pitroda",
    role: "Advisor",
    text: "Dr. Hardik Pitroda is an experienced dermatologist with over a decade of expertise in patient care. As a principal investigator in numerous clinical trials, he has contributed to advancements in medical science and therapeutic innovations. His deep understanding of clinical trial methodologies, regulatory compliance, and investigational treatments strengthens our research capabilities. With a strong commitment to evidence-based medicine, Dr. Pitroda plays a key role in ensuring the success and integrity of clinical trials.",
  },
  // {
  //   image: Profile3,
  //   name: "Dr. Dhaiwat Shukla",
  //   role: "Advisor",
  //   text: "Dr. Dhaiwat Shukla is a highly experienced rheumatologist with expertise in clinical research, immunology, and internal medicine. As a principal investigator in multiple clinical trials, he has contributed to advancements in rheumatology and related fields. With a strong foundation in academic research, he has authored numerous publications and actively collaborates with pharmaceutical companies in advisory roles. His expertise enhances our commitment to excellence in clinical trial management and site operations.",
  // },
];

export const HEORLIST = [
  {
    id: 1,
    icon: HeorIcon1,
    title: "Literature Reviews",
    subTitle:
      "Vivoclin Research specializes in high-quality evidence synthesis through end-to-end support for systematic literature reviews. We are experts in all stages of the SLRs, right from reconstructing SLR objectives to PICOS headings, till preparing SLR report. We hunt for evidence from all possible sources, and generate credible evidence.",
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
      "Vivoclin Research assists in development of health economic models to support reimbursements, health technology assessment (HTA) submissions, and to optimize market access strategies",
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

export const WRITINGS = [
  {
    title: `Clinical Writing`,
    subtitle: `We create precise and compliant documents for regulatory submissions to streamline your drug development process.`,
    list: [
      "Clinical study protocols",
      "Investigator brochures (IB)",
      "Clinical study reports (CSR)",
      "Informed consent forms (ICF)",
      "Drug safety narratives",
    ],
  },
  {
    title: `Scientific Publications and Manuscripts`,
    subtitle: `Our team supports you in sharing your research with the scientific community through well-crafted manuscripts.`,
    list: [
      "Journal articles (original research, reviews, and case reports)",
      "Systematic reviews and meta-analyses",
      "Abstracts and posters for conferences",
      "Book chapters",
    ],
  },
  {
    title: `Medical Communication and Education`,
    subtitle: `We develop educational and promotional content to inform and engage your target audience.`,
    list: [
      "Continuing Medical Education (CME) materials",
      "Patient education materials",
      "Disease awareness campaigns",
      "Training materials for healthcare professionals",
    ],
  },
  {
    title: `Health Technology Assessment (HTA) and Market Access Documents`,
    subtitle: `We help support your product's value proposition with robust evidence.`,
    list: [
      "Health economics and outcomes research (HEOR) content",
      "Value dossiers (AMCP, G-BA, etc.)",
      "Payer communication tools",
      "Budget impact models and cost-effectiveness analyses",
    ],
  },
  {
    title: `Editorial Support and Quality Control`,
    subtitle: `Our editorial team ensures your documents are polished and publication-ready.`,
    list: [
      "Medical editing and proofreading",
      "Formatting and styling to meet guidelines",
      "Peer review assistance",
    ],
  },
  {
    title: `Regulatory Documentation`,
    subtitle: `We assist in preparing comprehensive regulatory documentation for submissions and compliance.`,
    list: [
      "New Drug Applications (NDA)",
      "Investigational New Drug (IND) applications",
      "Safety update reports",
      "Product labeling documentation",
    ],
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

export const SMO_SERVICES = [
  {
    title: "Pioneering Clinical Excellence",
    description: "We are a trusted leader in clinical research across India, working with dedication and precision to advance healthcare",
    icon: ServiceIcon4,
    position: 5,
  },
  {
    title: "Expertise Across Core Units",
    description: "Our experienced teams provide complete research solutions through strong partnerships, ensuring high quality and reliable results",
    icon: HeorIcon5,
    position: 35,
  },
  {
    title: "Comprehensive Service Portfolio",
    description: "We offer complete support from start to finish, helping manage participants, schedules, and providing round-the-clock assistance to ensure smooth operations",
    icon: HeorIcon1,
    position: 65,
  },
  {
    title: "Global and Local Reach",
    description: "We work with clients worldwide while maintaining strong local connections, helping advance medical research at all stages",
    icon: HeorIcon2,
    position: 15,
  },
  {
    title: "Therapeutic Specialization",
    description: "Our research covers many medical areas including cancer, lung health, heart conditions, and brain disorders, with a personalized approach for each study",
    icon: HeorIcon3,
    position: 47,
  },
  {
    title: "Collaborative Partnerships for Success",
    description: "We work closely with many healthcare partners to improve research quality and achieve better results for patients",
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
