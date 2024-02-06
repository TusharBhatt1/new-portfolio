import Heading from "./other/Heading";
import { GoDotFill } from "react-icons/go";
import ProjectBox from "./other/ProjectBox";
import {projects} from "../../public/ProjectsArray"

export default function Projects() {
  return (
    <div>
      <div>
        <Heading title="Projects" />
        <div className="px-4 md:px-20">
        <div>
          <div>
            <p className="text-xl font-bold flex items-center gap-2 my-4 ">
              <GoDotFill/> <span>Full Stack</span> 
            </p>
            <div className="grid md:grid-cols-2 gap-14 ">
              {projects.fullStack.map((project) => (
                <ProjectBox key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold text-xl flex gap-2 items-center my-5 mt-12">
              <GoDotFill/> <span>Front End</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 ">
              {projects.frontEnd.map((project) => (
                <ProjectBox key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
  
    </div>
  );
}
