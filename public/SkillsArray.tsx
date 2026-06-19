import {
  FaJsSquare,
  FaReact,
  FaReacteurope,
  FaNodeJs,
} from "react-icons/fa";
import { FaGaugeHigh } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiGit,
} from "react-icons/si";


export interface SkillsType {
  name: string;
  color: string; // Use Tailwind CSS color name
  icon: React.ReactNode;
}

export const allSkills: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "yellow-400", // JavaScript yellow color
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "blue-600", // TypeScript blue color
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "blue-500", // React blue color
  },
  {
    name: "Next.js",
    icon: <FaReacteurope />,
    color: "gray-100", // Next.js (light on dark)
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
    name: "Node",
    icon: <FaNodeJs />,
    color: "green-500", // Node.js green
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "gray-300", // Express (light on dark)
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "green-600", // MongoDB green color
  },
  {
    name: "Git/Github",
    icon: <SiGit />,
    color: "orange-500", // Git orange
  },
  {
    name: "Performance",
    icon: <FaGaugeHigh />,
    color: "green-400", // web vitals / speed
  },
  {
    name: "Claude AI",
    icon: <HiSparkles />,
    color: "orange-400", // Claude warm tone
  },
];
