import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SectionLabel from "./other/SectionLabel";
import wom1 from "@/assets/wom/wom1.png";
import wom2 from "@/assets/wom/wom2.png";
import wom3 from "@/assets/wom/wom3.png";
import wom4 from "@/assets/wom/wom4.png";
import wom5 from "@/assets/wom/wom5.png";
import wom6 from "@/assets/wom/wom6.png";
import wom7 from "@/assets/wom/wom7.png";

export default function Wom() {
  const woms = [
    { src: wom1, title: "IC4 @ Cal.com" },
    { src: wom2, title: "CEO @ Cal.com" },
    { src: wom3, title: "Head of Engineering @ Cal.com" },
    { src: wom4, title: "IC2 @ Cal.com" },
    { src: wom5, title: "IC3 @ Cal.com" },
    { src: wom6, title: "Director of Engineering @ Pocket FM" },
    { src: wom7, title: "Lead Frontend Engineer @ Pocket FM" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <SectionLabel index="05" title="Word of Mouth" />

      <Marquee speed={45} pauseOnHover gradient={false}>
        {woms.map(({ src, title }, index) => (
          <motion.div
            key={index}
            className="mx-3 cursor-pointer group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="border border-line bg-surface p-3 group-hover:border-faint transition-colors">
              <img
                src={src}
                alt={`testimonial-${index + 1}`}
                className="h-24 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-faint">
              {title}
            </p>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}
