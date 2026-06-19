import { motion } from "framer-motion";
import Socials from "./other/Socials";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-line"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          © {new Date().getFullYear()} Tushar Bhatt
        </p>
        <p className="font-display font-medium text-sm text-muted order-first sm:order-none">
          Thanks for stopping by.
        </p>
        <Socials size="sm" />
      </div>
    </motion.footer>
  );
}
