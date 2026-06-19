import { motion } from "framer-motion";
import { SkillsType } from "@public/SkillsArray";

export default function SkillBox({
  skill,
  index,
}: {
  skill: SkillsType;
  index: number;
}) {
  const { name, icon, color } = skill;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group aspect-square flex flex-col items-center justify-center gap-3 border border-line bg-surface text-muted hover:border-fg hover:bg-white/5 transition-colors duration-300"
    >
      <span
        className={`text-${color} text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </span>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-fg transition-colors">
        {name}
      </p>
    </motion.div>
  );
}
