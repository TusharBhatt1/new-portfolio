import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaReacteurope,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiGit,
  SiTrpc
} from "react-icons/si";


export interface SkillsType {
  name: string;
  color: string; // Use Tailwind CSS color name
  icon: React.ReactNode;
}

export const allSkills: SkillsType[] = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "orange-400", // HTML5 orange color
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
    color: "blue-400", // CSS3 blue color
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "yellow-400", // JavaScript yellow color
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "blue-500", // React blue color
  },
  {
    name: "Next.js",
    icon: <FaReacteurope />,
    color: "gray-900", // Next.js black color
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "blue-600", // TypeScript blue color
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "teal-400", // Tailwind CSS teal color
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "purple-600", // Redux purple color
  },
  {
    name: "Git/Github",
    icon: <SiGit />,
    color: "black", // Zustand gold color
  },
  {
    name: "Trpc",
    icon: <SiTrpc />,
    color: "blue-500", // Node.js green color
  },
  {
    name: "Express",
    icon: <SiExpress/> ,
    color: "gray-900", // Express black color
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "green-600", // MongoDB green color
  },
];
