import { motion } from "framer-motion";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Wom from "./Components/Wom";
import Experiences from "./Components/Experiences";
import FeaturedProject from "./Components/FeaturedProject";
import CTA from "./Components/CTA";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <Navbar />
      <div className="px-5 sm:px-7">
        <Experiences />
        <FeaturedProject />
        <Wom />
        <Skills />
        <Projects />
        <CTA />
        <Footer />
      </div>
    </motion.div>
  );
}
