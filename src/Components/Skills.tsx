import { motion } from "framer-motion";
import SectionLabel from "./other/SectionLabel";
import { allSkills } from "../../public/SkillsArray";
import SkillBox from "./other/SkillBox";

export default function Skills() {
  const skills = allSkills;
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <SectionLabel index="06" title="Skills" />

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <SkillBox key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-center font-mono text-xs uppercase tracking-widest text-faint"
      >
        & more
      </motion.p>
    </section>
  );
}
