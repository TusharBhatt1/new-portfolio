import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Wom from "./Components/Wom";
import Experiences from "./Components/Experiences";
import FeaturedProject from "./Components/FeaturedProject";

export default function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="max-w-5xl m-auto px-5 sm:px-7">
        <Experiences />
        <FeaturedProject />
        <Wom />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
