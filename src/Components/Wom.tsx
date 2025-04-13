import Marquee from "react-fast-marquee";
import Heading from "./other/Heading";
import wom1 from "@/assets/wom/wom1.png";
import wom2 from "@/assets/wom/wom2.png";
import wom3 from "@/assets/wom/wom3.png";
import wom4 from "@/assets/wom/wom4.png";
import wom5 from "@/assets/wom/wom5.png";
import wom6 from "@/assets/wom/wom6.png";
import wom7 from "@/assets/wom/wom7.png";

export default function Wom() {
	const woms = [
		{ src: wom1, title: "IC4 @Cal.com" },
		{ src: wom2, title: "CEO @Cal.com" },
		{ src: wom3, title: "Head of Engineering @Cal.com" },
		{ src: wom4, title: "IC2 @Cal.com" },
		{ src: wom5, title: "IC3 @Cal.com" },
		{ src: wom6, title: "Director of Engineering @PocketFM" },
		{ src: wom7, title: "Lead Front End Engineer @PocketFM" },
	];

	return (
		<div>
			<Heading title="Word of mouth" />
			<Marquee speed={100} pauseOnHover>
				{woms.map(({ src, title }, index) => (
					<div key={index} className="mx-2 cursor-pointer">
						<img src={src} alt={`testimonial-${index + 1}`} className="h-20" />
						<p className="text-center mt-1 text-slate-400">{title}</p>
					</div>
				))}
			</Marquee>
		</div>
	);
}
