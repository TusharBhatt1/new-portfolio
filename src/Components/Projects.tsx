import { motion } from "framer-motion";
import SectionLabel from "./other/SectionLabel";
import ProjectBox from "./other/ProjectBox";
import { projects } from "../../public/ProjectsArray";

function Group({
  label,
  items,
  offset,
}: {
  label: string;
  items: typeof projects.fullStack;
  offset: number;
}) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6 flex items-center gap-3"
      >
        <span className="inline-block h-1.5 w-1.5 bg-fg" />
        {label}
      </motion.p>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((project, index) => (
          <ProjectBox key={project.name} project={project} index={index + offset} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <SectionLabel index="07" title="Projects" />

      <div className="space-y-16">
        <Group label="Full Stack" items={projects.fullStack} offset={0} />
        <Group
          label="Front End"
          items={projects.frontEnd}
          offset={projects.fullStack.length}
        />
      </div>
    </section>
  );
}
