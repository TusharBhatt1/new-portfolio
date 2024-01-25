import { useEffect, useState } from "react";
import Achievements from "./Components/Achievements";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Loader from "./Components/other/Loader";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 6000);
  }, []);

  if (!showLoader) {
    return (
      <div className="flex flex-col">
        <Navbar />
        <div>
          <Banner />
          <Skills />
          <Projects />
          <Achievements />
          <Footer />
        </div>
      </div>
    );
  } else return <Loader />;
}
