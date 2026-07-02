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
      className="group border border-line bg-surface hover:border-fg/30 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_18px_50px_-20px_rgba(255,255,255,0.14)]"
    >
      <div className="overflow-hidden border-b border-line">
        <img
          src={image}
          alt={name}
          className="w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="font-display font-semibold text-base leading-snug">
            {name}
          </p>
          <span className="flex gap-1 text-lg shrink-0">
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-muted hover:text-fg transition-colors"
            >
              <AiFillGithub />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="p-1.5 text-muted hover:text-fg transition-colors"
            >
              <TbWorld />
            </a>
          </span>
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-faint leading-relaxed">
          {tech}
        </p>
      </div>
    </motion.div>
  );
}
