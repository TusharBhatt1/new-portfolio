import { motion } from "framer-motion";
import Heading from "./other/Heading";
import { GoDotFill } from "react-icons/go";
import ProjectBox from "./other/ProjectBox";
import {projects} from "../../public/ProjectsArray"

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <Heading title="Projects" />
        <div className="px-4 md:px-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-bold flex items-center gap-2 my-4">
                <GoDotFill/> <span>Full Stack</span> 
              </p>
              <div className="grid md:grid-cols-2 gap-14">
                {projects.fullStack.map((project, index) => (
                  <ProjectBox key={project.name} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-bold text-xl flex gap-2 items-center my-5 mt-12">
                <GoDotFill/> <span>Front End</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
                {projects.frontEnd.map((project, index) => (
                  <ProjectBox key={project.name} project={project} index={index + projects.fullStack.length} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
