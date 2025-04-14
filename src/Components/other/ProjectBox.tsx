import {AiFillGithub} from "react-icons/ai"
import { TbWorld } from "react-icons/tb";
import { projectType } from "../../../public/ProjectsArray";

export default function ProjectBox({ project }: { project: projectType }) {
  const { name, liveLink, gitLink, tech, image } = project;

  return <div className="border border-slate-300 bg-white  flex flex-col gap-4  inline-block p-4 rounded-md">
    <div className="flex flex-col gap-2 ">
        <div className="flex items-center justify-between  gap-2">
        <p className="text-sm font-bold">{name}</p>
        <span className="flex text-2xl gap-4">
          <a href={gitLink} className="bg-slate-700 hover:bg-black p-1 rounded-full"><AiFillGithub/></a>
          <a href={liveLink}  className="bg-slate-700 hover:bg-black p-1 rounded-full"><TbWorld/></a>
        </span>
       
        </div>
        <p className="text-xs text-slate-500">{tech}</p>
        
    </div>
    <img className="w-full rounded-md" src={image} />
  </div>;
}
