import { motion } from "framer-motion";

export default function Heading({
  title,
  alignment = "center",
}: {
  title: string;
  alignment?: "center" | "left";
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-${alignment} text-2xl font-extrabold mt-20 mb-10 `}
    >
      {title}
    </motion.p>
  );
}
