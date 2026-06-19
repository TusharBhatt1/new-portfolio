import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaArrowRight } from "react-icons/fa";

const stack = [
  "FRONTEND ENGINEER",
  "REACT",
  "TYPESCRIPT",
  "NEXT.JS",
  "TAILWIND",
  "NODE",
  "PERFORMANCE",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 sm:pt-44">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.3em] text-faint mb-8"
          >
            01 — Portfolio / 2026
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-bold leading-[0.92] tracking-tighter text-[clamp(3rem,12vw,9.5rem)]"
          >
            <span className="text-sheen">
              TUSHAR
              <br />
              BHATT
            </span>
            <span className="text-faint">.</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-line pt-8"
          >
            <p className="max-w-xl text-lg text-muted leading-relaxed">
              <span className="text-fg font-medium">
                Full-stack frontend engineer
              </span>{" "}
              building with AI.
              <br />
              Worked at amazing places like{" "}
              <a
                href="https://refold.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-fg font-medium"
              >
                Refold AI
              </a>
              {" "}and{" "}
              <a
                href="https://pocketfm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-fg font-medium"
              >
                Pocket FM
              </a>{" "}
              &{" "}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-fg font-medium"
              >
                Cal.com
              </a>
              .
            </p>

            <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-muted shrink-0">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 bg-fg" />
                Bengaluru, India
              </span>
              <span className="flex items-center gap-2">
                <span className="relative inline-block h-1.5 w-1.5 bg-fg">
                  <span className="absolute inset-0 animate-ping bg-fg opacity-75" />
                </span>
                Available for work
              </span>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-fg text-ink font-mono text-xs uppercase tracking-widest px-6 py-4 hover:bg-muted transition-colors"
            >
              Get in touch
              <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-3 border border-line text-fg font-mono text-xs uppercase tracking-widest px-6 py-4 hover:border-fg transition-colors"
            >
              View skills
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex items-center gap-3 text-faint"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <span className="animate-nudge text-sm leading-none">↓</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 border-y border-line py-4 select-none"
      >
        <Marquee speed={40} gradient={false}>
          {stack.map((s, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-xs uppercase tracking-[0.3em] text-faint flex items-center gap-6"
            >
              {s}
              <span className="text-line">/</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
