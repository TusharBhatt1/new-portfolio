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
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 h-px bg-line origin-left"
      />
    </motion.div>
  );
}
