import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { projectType } from "../../../public/ProjectsArray";

export default function ProjectBox({
  project,
  index,
}: {
  project: projectType;
  index: number;
}) {
  const { name, liveLink, gitLink, tech, image } = project;

  return (
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="group flex h-full flex-col overflow-hidden border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-fg/30 hover:shadow-[0_18px_50px_-20px_rgba(255,255,255,0.14)]"
      >
        <div className="aspect-[16/9] overflow-hidden border-b border-line">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="min-h-[3.5rem] font-display text-base font-semibold leading-7">
              {name}
            </h3>
      
            <div className="flex shrink-0 gap-1 text-lg">
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted transition-colors hover:text-fg"
              >
                <AiFillGithub />
              </a>
      
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted transition-colors hover:text-fg"
              >
                <TbWorld />
              </a>
            </div>
          </div>
      
          <p className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-widest leading-relaxed text-faint">
            {tech}
          </p>
        </div>
      </motion.div>
  );
}
