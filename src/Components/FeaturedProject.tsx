import { motion } from "framer-motion";
import SectionLabel from "./other/SectionLabel";
import Calcompanion from "@/assets/cal-companion.png";

const tags = ["WXT Framework", "Browser Extension", "Content Scripts", "Cal.com"];

const features = [
  "Quick access to recent upcoming / past bookings.",
  "Mark attendee show / no-show directly on Google Calendar events — via a content script that injects button nodes into the event dialog.",
];

export default function FeaturedProject() {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <SectionLabel index="04" title="Featured Project" />

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <h3 className="font-display text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight">
            Cal
            <br />
            Companion
          </h3>
          <p className="mt-5 text-muted leading-relaxed">
            The official browser extension for{" "}
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-fg font-medium"
            >
              Cal.com
            </a>
            , built from scratch.
          </p>

          <ul className="mt-6 space-y-3 text-muted">
            {features.map((f, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-px w-4 bg-faint shrink-0" />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-widest text-muted border border-line px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
            <a
              href="https://chromewebstore.google.com/detail/cal-companion/cbhlgojmamgmdijlkkokcmmjghgckahc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fg text-ink px-5 py-3 hover:bg-muted transition-colors"
            >
              Chrome Store ↗
            </a>
            <a
              href="https://x.com/Tushar0135/status/1953383306772222010"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line px-5 py-3 text-muted hover:text-fg hover:border-fg transition-colors"
            >
              Post on X ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="lg:col-span-7 border border-line bg-surface p-2 overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_90px_-30px_rgba(255,255,255,0.14)]"
        >
          <img
            src={Calcompanion}
            alt="Cal Companion browser extension"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
