import { motion } from "framer-motion";
import { SkillsType } from "@public/SkillsArray";

export default function SkillBox({ skill, index }: { skill: SkillsType; index: number }) {
  const { name, icon, color } = skill;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
      className="hover:bg-slate-800 bg-slate-700 cursor-pointer border border-black text-sm sm:text-md p-4 sm:p-12 flex flex-col justify-center items-center h-20 w-20 rounded-xl"
    >
      <motion.span
        className={`text-${color} text-xl sm:text-3xl p-2 rounded-full`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.span>
      <p className="mt-2">{name}</p>
    </motion.div>
  );
}
