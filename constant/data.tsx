import { FaMobileAlt, FaProjectDiagram, FaTachometerAlt } from "react-icons/fa";
import {
  FaCode,
  FaGlobe,
  FaLayerGroup,
  FaPlug,
  FaRobot,
  FaVial,
} from "react-icons/fa6";
import { FaDiagramProject } from "react-icons/fa6";
import { MdWorkspacesFilled } from "react-icons/md";
import { ReactNode } from "react";

export interface AboutItem {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  modification: string;
  color: string;
}

export interface WorkingSkill {
  year: string;
  title: string;
  company: string;
  logo: string | null;
}

export interface EducationItem {
  year: string;
  title: string;
  title2: string;
  location: string;
}

export interface BlogItem {
  id: number;
  blogPhoto: string;
  date: string;
  title: string;
  category: string;
  description: string;
}

export interface Work {
  id: string;
  title: string;
  workPhoto: string;
  icon: ReactNode;
  category: string;
  Link: string;

  order: number;
}

export interface WorksData {
  professional: Work[];
  innovations: Work[];
  panoramas: Work[];
  symphonies: Work[];
}

export const aboutData: AboutItem[] = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "I build responsive, scalable, and user-friendly web applications using React, Next.js, TypeScript, and modern frontend technologies.",
    modification: "FD",
    color: "text-custom5",
    id: 1,
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description:
      "I build cross-platform mobile applications with React Native and Expo, focused on smooth, reliable, and intuitive user experiences.",
    modification: "MD",
    color: "text-amber-800",
    id: 2,
  },
  {
    icon: <FaLayerGroup />,
    title: "UI Development",
    description:
      "I turn designs and ideas into polished, responsive interfaces using reusable components and consistent design patterns.",
    modification: "UI",
    color: "text-cyan-700",
    id: 3,
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered Development",
    description:
      "I use AI tools and APIs to accelerate product development, from understanding business requirements and shaping solutions to building, integrating, testing, and deploying production-ready applications.",
    modification: "AI",
    color: "text-blue-700",
    id: 4,
  },
  {
    icon: <FaPlug />,
    title: "API Integration",
    description:
      "I connect applications with backend services and APIs for authentication, data management, payments, and other application workflows.",
    modification: "API",
    color: "text-custom6",
    id: 5,
  },
  {
    icon: <FaProjectDiagram />,
    title: "State Management",
    description:
      "I manage application state using Redux Toolkit, Zustand, and MobX, while using React Query for server-state management and data synchronization.",
    modification: "SM",
    color: "text-purple-700",
    id: 6,
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    description:
      "I optimize applications for faster loading, efficient rendering, and smoother interactions across web and mobile platforms.",
    modification: "PO",
    color: "text-green-700",
    id: 7,
  },
  {
    icon: <FaVial />,
    title: "Testing",
    description:
      "I write frontend tests with tools such as Jest to help maintain reliable, predictable, and maintainable applications.",
    modification: "TS",
    color: "text-red-700",
    id: 8,
  },
];

export const workingSkillsData: WorkingSkill[] = [
  {
    year: "Mar 2025 - Present",
    title: "Senior Frontend Developer",
    company: "Doos Logistics",
    logo: "/assets/logo/doos-logo.jpg",
  },
  {
    year: "Oct 2024 - Present",
    title: "Chief Technology Officer",
    company: "XpressDrop",
    logo: "/assets/logo/xpresdrop-logo.png",
  },
  {
    year: "Nov 2023 - Sep 2024",
    title: "Frontend Developer",
    company: "Saaspro Health",
    logo: "/assets/logo/saaspro_health_logo.jpeg",
  },
  {
    year: "Jul 2022 - Sep 2023",
    title: "Frontend Developer",
    company: "Edstream",
    logo: "/assets/logo/edstream-logo.jpeg",
  },
  {
    year: "Apr 2021 - Jul 2022",
    title: "Frontend Developer",
    company: "ShawSec",
    logo: "/assets/logo/shawsec-logo.jpg",
  },
  {
    year: "Jul 2018 - Feb 2021",
    title: "Mobile Application Developer",
    company: "Spouse Tech Limited",
    logo: "/assets/logo/spousetech-logo.jpg",
  },
];

export const educationData: EducationItem[] = [
  {
    year: "2019-2024",
    title: "Bsc in Computer Science",
    title2: "- University,",
    location: "Zaria City, KD",
  },
  {
    year: "2017-2019",
    title: "Diploma in Computer Science",
    title2: "- University,",
    location: "Zaria City, KD",
  },
];

export const blogData: BlogItem[] = [
  {
    blogPhoto: "/assets/blog/science.png",
    date: "18th-19th Centuries",
    title: "Earth Sciences - Unveiling the Planet's Story",
    category: "Science",
    description:
      "Earth sciences take us on a geological journey, unraveling the tales of rocks, oceans, and the dynamic atmosphere. Delve into the forces that shape our planet, from the mysteries of plate tectonics to the delicate balance of the Earth's climate.",
    id: 1,
  },
  {
    blogPhoto: "/assets/blog/coding.jpg",
    date: "Early 1990s",
    title: "The Canvas of Web Development",
    category: "Coding",
    description:
      "Web development is a canvas where programmers paint interactive landscapes. From the structure of HTML to the styling of CSS and the dynamic functionality of JavaScript, we explore how web developers weave together technologies to craft seamless and engaging digital experiences.",
    id: 2,
  },
  {
    blogPhoto: "/assets/blog/music.jpg",
    date: "19th Century",
    title: "The Rhythmic Tapestry of Jazz Genre",
    category: "Music",
    description:
      "Jazz, a genre born out of the African-American experience, is a celebration of freedom and improvisation. With its syncopated rhythms and soulful melodies, jazz has the power to transport listeners to smoky lounges of the past and avant-garde spaces of the future.",
    id: 3,
  },
  {
    blogPhoto: "/assets/blog/design.jpg",
    date: "20th Century",
    title: "The Artistry of Visual Composition",
    category: "Design",
    description:
      "At its core, design is an artful dance between form and function. Whether it's a sleek user interface or the layout of a physical space, the visual elements must harmonize to enhance both beauty and usability. We delve into the principles that designers employ to strike the delicate balance between aesthetics and functionality.",
    id: 4,
  },
];

export const worksData: WorksData = {
  professional: [
    {
      id: "doos-logistics",
      title: "Doos Logistics",
      icon: <FaGlobe />,
      category: "Professional",
      workPhoto: "/assets/images/doos-logistics.png",
      Link: "https://www.dooslogistics.com/",
      order: 1,
    },

    {
      id: "enerflow",
      title: "Enerflow",
      icon: <FaGlobe />,
      category: "Professional",
      workPhoto: "/assets/images/enerflow.png",
      Link: "https://enerfloweng.com/",
      order: 2,
    },
    {
      id: "xpressdrop",
      title: "XpressDrop",
      workPhoto: "/assets/images/xpressdrop.png",
      icon: <FaGlobe />,
      category: "Professional",
      Link: "https://www.usexpressdrop.com/",
      order: 3,
    },
  ],
  innovations: [
    {
      id: "chrome-extension-1",
      title: "Chrome Extension",
      workPhoto: "/assets/images/chromeextension.jpg",
      icon: <MdWorkspacesFilled />,
      category: "Innovations",
      Link: "https://zuri-internship-task-five.vercel.app/",
      order: 6,
    },
    {
      id: "real-estate-2",
      title: "Real Estate",
      workPhoto: "/assets/images/realestate.jpg",
      icon: <MdWorkspacesFilled />,
      category: "Innovations",
      Link: "https://poshhomez.vercel.app/",
      order: 5,
    },
  ],
  panoramas: [
    {
      id: "carro-cars-1",
      title: "Carro Cars Dealership",
      workPhoto: "/assets/images/carrocars.png",
      icon: <FaDiagramProject />,
      category: "Panoramas",
      Link: "https://carrocars.vercel.app/",
      order: 4,
    },
    {
      id: "dishup-food-2",
      title: "Dishup Food App",
      workPhoto: "/assets/images/dishupfoods.jpg",
      icon: <FaDiagramProject />,
      category: "Panoramas",
      Link: "https://dishup-food.vercel.app/",
      order: 7,
    },
  ],
  symphonies: [],
};
