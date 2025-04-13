import Marquee from "react-fast-marquee";
import Heading from "./other/Heading";
import wom1 from "@/assets/wom/wom1.png";
import wom2 from "@/assets/wom/wom2.png";
import wom3 from "@/assets/wom/wom3.png";
import wom4 from "@/assets/wom/wom4.png";
import wom5 from "@/assets/wom/wom5.png";


export default function Wom() {
	const woms = [wom1, wom2, wom3, wom4, wom5];

	return (
		<div>
			<Heading title="Word of mouth" />
			<Marquee speed={100} pauseOnHover>
				{woms.map((wom, index) => (
					<div key={index} className="mx-2">
						<img
							src={wom}
							alt={`testimonial-${index + 1}`}
							className="h-20 cursor-pointer"
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
}
