import { motion, useScroll, useSpring } from "framer-motion";
// import Background from "./Components/Background";
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
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen text-fg"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-fg origin-left z-[60]"
      />
      {/* <Background /> */}
      <Navbar />
      <div className="relative z-10">
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
      </div>
    </motion.div>
  );
}
