import { motion } from "framer-motion";

export default function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-10"
    >
      <span className="font-mono text-xs text-faint tracking-widest">
        {index}
      </span>
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        {title}
      </h2>
      <span className="flex-1 h-px bg-line" />
    </motion.div>
  );
}
