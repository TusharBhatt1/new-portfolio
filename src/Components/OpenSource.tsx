import { motion } from "framer-motion";
import { ReactNode } from "react";
import SectionLabel from "./other/SectionLabel";

interface Entry {
  amount?: string;
  title: string;
  body: ReactNode;
  href: string;
}

const entries: Entry[] = [
  {
    amount: "$50",
    title: "Disable cancel / reschedule per event",
    body: (
      <>
        High-priority Cal.com feature blocking users end-to-end from canceling
        or rescheduling, on both frontend and backend. Added relevant tests.
      </>
    ),
    href: "https://github.com/calcom/cal.com/pull/20489",
  },
  {
    amount: "$10",
    title: "Logo sync fix",
    body: <>Fixed a logo sync issue on the Cal.com app by altering the API response.</>,
    href: "https://github.com/calcom/cal.com/pull/20190",
  },
  {
    title: "Zero.email — keyboard mail selection",
    body: (
      <>
        Contributed a high-priority feature to{" "}
        <span className="italic">Zero.email</span>, allowing users to
        select/deselect mail using the keyboard.
      </>
    ),
    href: "https://github.com/Mail-0/Zero/pull/615",
  },
  {
    title: "react-images-trimming-tool-tb",
    body: (
      <>
        Published an npm package for efficient frontend image trimming —
        reducing backend dependencies and costs.
      </>
    ),
    href: "https://www.npmjs.com/package/react-images-trimming-tool-tb",
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <SectionLabel index="03" title="Open Source" />

      <div className="grid md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-4">
          <p className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Bounties &
            <br />
            contributions
          </p>
          <div className="mt-6 inline-flex items-baseline gap-3 border border-line px-5 py-4">
            <span className="font-display text-5xl font-bold">$60</span>
            <span className="font-mono text-xs uppercase tracking-widest text-faint">
              won in bounties
            </span>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col">
          {entries.map((e, i) => (
            <motion.a
              key={e.title}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-start gap-5 py-6 border-t border-line first:border-t-0 hover:bg-surface/60 transition-colors px-2 -mx-2"
            >
              <span className="font-mono text-sm text-faint shrink-0 w-14">
                {e.amount ?? "—"}
              </span>
              <div className="flex-1">
                <p className="font-display font-semibold text-lg text-fg group-hover:underline underline-offset-4 decoration-line">
                  {e.title}
                </p>
                <p className="mt-1 text-muted leading-relaxed">{e.body}</p>
              </div>
              <span className="font-mono text-xs text-faint group-hover:text-fg transition-colors shrink-0 mt-1">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
