import { motion } from "framer-motion";
import {AiFillGithub} from "react-icons/ai"
import { TbWorld } from "react-icons/tb";
import { projectType } from "../../../public/ProjectsArray";

export default function ProjectBox({ project, index }: { project: projectType; index: number }) {
  const { name, liveLink, gitLink, tech, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="border border-slate-300 bg-white flex flex-col gap-4 inline-block p-4 rounded-md"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-bold text-black">{name}</p>
          <span className="flex text-2xl gap-4">
            <motion.a
              href={gitLink}
              className="bg-slate-700 hover:bg-black p-1 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillGithub/>
            </motion.a>
            <motion.a
              href={liveLink}
              className="bg-slate-700 hover:bg-black p-1 rounded-full"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <TbWorld/>
            </motion.a>
          </span>
        </div>
        <p className="text-xs text-slate-500">{tech}</p>
      </div>
      <motion.img
        className="w-full rounded-md"
        src={image}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
