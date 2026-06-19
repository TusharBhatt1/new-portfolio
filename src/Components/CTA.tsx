import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-28 border-t border-line overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-[36rem] max-w-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent)]"
      />
      <div className="relative max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-faint mb-8"
        >
          08 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tighter leading-[0.95] text-[clamp(2.5rem,9vw,7rem)]"
        >
          LET&apos;S BUILD
          <br />
          SOMETHING<span className="text-faint">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl text-lg text-muted leading-relaxed"
        >
          Always open to new opportunities, interesting problems, or just
          connecting with fellow engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="mailto:tusharbhatt0135@gmail.com"
            className="group inline-flex items-center gap-3 bg-fg text-ink font-mono text-xs uppercase tracking-widest px-7 py-4 hover:bg-muted transition-colors"
          >
            Get in touch
            <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:tusharbhatt0135@gmail.com"
            className="link-underline font-mono text-xs uppercase tracking-widest text-muted hover:text-fg transition-colors"
          >
            tusharbhatt0135@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
