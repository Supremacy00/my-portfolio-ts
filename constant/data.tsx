import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { BiSolidCustomize } from "react-icons/bi";
import { FaDiagramProject } from "react-icons/fa6";
import { MdWorkspacesFilled } from "react-icons/md";
import { ReactNode } from "react";

export interface AboutItem {
  icon: ReactNode;
  title: string;
  description: string;
  modification: string;
  id: number;
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
  blogPhoto: string;
  date: string;
  title: string;
  category: string;
  description: string;
  id: number;
}

export interface Work {
  title: string;
  workPhoto: string;
  icon: ReactNode;
  category: string;
  Link: string;
  id: string;
}

export interface WorksData {
  innovations: Work[];
  panoramas: Work[];
  symphonies: Work[];
}

export const aboutData: AboutItem[] = [
  {
    icon: <BiSolidCustomize />,
    title: "Branding & Logo",
    description:
      "I create designs to help people to quickly identify their products and organization.",
    modification: "BL",
    id: 1,
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I create and design the user interface (UI) and user experience (UX) of websites.",
    modification: "WD",
    id: 2,
  },
  {
    icon: <FaRegLightbulb />,
    title: "Mobile Development",
    description:
      "Mobile Developer, passionate about building seamless and innovative apps that enhance everyday experiences.",
    modification: "UD",
    id: 3,
  },
  {
    icon: <FaRegLightbulb />,
    title: "Photoshop",
    description:
      "Photoshop Expert, photoshop is an image creation, graphic design and photo editing software.",
    modification: "PS",
    id: 4,
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
  innovations: [
    {
      title: "Chrome Extension",
      workPhoto: "/assets/images/chromeextension.jpg",
      icon: <MdWorkspacesFilled />,
      category: "Innovations",
      Link: "https://zuri-internship-task-five.vercel.app/",
      id: "chrome-extension-1",
    },
    {
      title: "Real Estate",
      workPhoto: "/assets/images/realestate.jpg",
      icon: <MdWorkspacesFilled />,
      category: "Innovations",
      Link: "https://poshhomez.vercel.app/",
      id: "real-estate-2",
    },
  ],
  panoramas: [
    {
      title: "Carro Cars Dealership",
      workPhoto: "/assets/images/carrocars.png",
      icon: <FaDiagramProject />,
      category: "Panoramas",
      Link: "https://carrocars.vercel.app/",
      id: "carro-cars-1",
    },
    {
      title: "Dishup Food App",
      workPhoto: "/assets/images/dishupfoods.jpg",
      icon: <FaDiagramProject />,
      category: "Panoramas",
      Link: "https://dishup-food.vercel.app/",
      id: "dishup-food-2",
    },
  ],
  symphonies: [],
};
