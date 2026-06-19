import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experiences from "./Components/Experiences";
import OpenSource from "./Components/OpenSource";
import FeaturedProject from "./Components/FeaturedProject";
import Wom from "./Components/Wom";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-ink text-fg"
    >
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <OpenSource />
        <FeaturedProject />
        <Wom />
        <Skills />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
}
