import { motion } from "framer-motion";
import Heading from "./other/Heading";
import { allSkills } from "../../public/SkillsArray";
import SkillBox from "./other/SkillBox";

export default function Skills() {
  const skills = allSkills;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-7">
        <Heading title="Skills" />
        <div className="flex justify-around items-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-12 justify-center items-center">
            {skills.map((skill, index) => (
              <SkillBox key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          & more
        </motion.p>
      </div>
    </motion.div>
  );
}
