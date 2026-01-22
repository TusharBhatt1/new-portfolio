import { motion } from "framer-motion";
import Socials from "./other/Socials";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full flex md:flex-row flex-col justify-between items-center p-4 border-b border-slate-800 z-10 bg-black font-bold"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:block hidden"
      >
        Hey 👋 I'm Tushar Bhatt  , <span className="text-sm">Full Stack Front End Engineer with ~ a year of experience</span>
      </motion.h1>
      <Socials/>
    </motion.div>
  );
}
