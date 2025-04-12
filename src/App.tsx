import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<div>
				<Banner />
				<Skills />
				<Projects />
				<Footer />
			</div>
		</div>
	);
}
