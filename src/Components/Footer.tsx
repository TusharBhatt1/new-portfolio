import { motion } from "framer-motion";
import Socials from "./other/Socials";
import { FaFireAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center gap-4 p-7 bg-black text-white text-center mt-12"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold flex justify-center items-center gap-2"
      >
        Thank you for the Visit{" "}
        <motion.span
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <FaFireAlt className="text-yellow-400"/>
        </motion.span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-4 sm:flex-row justify-between items-center"
      >
        <Socials />
        <p>&copy; {new Date().getFullYear()} Tushar Bhatt. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
