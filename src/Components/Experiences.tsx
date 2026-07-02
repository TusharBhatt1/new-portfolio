import { motion } from "framer-motion";
import { ReactNode } from "react";
import calIcon from "@/assets/cal-com-icon.svg";
import pfmIcon from "@/assets/pfm-logo.png";
import refoldIcon from "@/assets/refold-logo.png";
import SectionLabel from "./other/SectionLabel";

interface Role {
  company: string;
  href: string;
  logo: string;
  title: string;
  period: string;
  location: string;
  points: ReactNode[];
}

// Highlight: emphasizes a key term within an experience bullet.
const H = ({ children }: { children: ReactNode }) => (
  <span className="text-fg font-medium">{children}</span>
);

// Tool: AI tooling reference, set apart in italic.
const T = ({ children }: { children: ReactNode }) => (
  <span className="italic text-fg/90">{children}</span>
);

const roles: Role[] = [
  {
    company: "Refold AI",
    href: "https://refold.ai",
    logo: refoldIcon,
    title: "Software Engineer",
    period: "Mar 2026 - Present",
    location: "Bengaluru",
    points: [
      <>
        Added <H>child / sibling node logic</H> with backend support to enhance
        canvas interactivity.
      </>,
      <>
        Designed and implemented a full-stack Tags feature, building REST APIs, 
        database models, and frontend integration.
      </>
      <>
        Boosted performance via <H>lazy loading</H>, minimizing unnecessary DOM
        renders.
      </>,
      <>
        Built an <H>integration graph</H> with D3.js to visualize workflows.
      </>,
      <>
        Leveraged <T>Claude AI</T> to accelerate development, debugging, and
        repetitive tasks.
      </>,
    ],
  },
  {
    company: "Pocket FM",
    href: "https://pocketfm.com",
    logo: pfmIcon,
    title: "Software Engineer, Frontend",
    period: "Jul 2024 – Mar 2026",
    location: "Bengaluru (Remote)",
    points: [
      <>
        Optimized the Next.js frontend of pocketfm.com, reducing initial bundle
        size <H>326KB → 270KB</H>.
      </>,
      <>
        Shipped an <H>image-trimming feature</H> with the Pocket Toons team,
        reducing backend calls and S3 costs.
      </>,
      <>
        Revamped the Newsroom application using <H>Next.js and React Query</H>.
      </>,
      <>
        Built with <H>TypeScript, Tailwind and Shadcn UI</H> — E2E tests in
        Cypress, component tests in Vitest, backend in Contentful CMS.
      </>,
      <>
        Raised Lighthouse scores <H>70 → ~100</H> — LCP 3.5s → 1.2s, CLS 0.25 →
        0.02, TBT 400ms → 50ms.
      </>,
      <>
        Leveraged <T>Cursor AI</T> to speed up refactoring during a{" "}
        <H>bundle-size reduction</H>.
      </>,
    ],
  },
  {
    company: "Cal.com",
    href: "https://cal.com",
    logo: calIcon,
    title: "Software Engineer Intern",
    period: "Feb – May 2025",
    location: "USA (Remote)",
    points: [
      <>
        Built features end-to-end and reviewed close to <H>150 PRs</H>.
      </>,
      <>
        Hands-on across the full stack —{" "}
        <H>Next.js, TypeScript, Tailwind, Prisma, tRPC and PostgreSQL</H>.
      </>,
      <>
        Fixed a <H>high-priority spam issue</H> by capping{" "}
        <span className="italic">seatsPerTimeSlot</span> on front and backend to
        prevent mass fake bookings (
        <a
          href="https://github.com/calcom/cal.com/pull/20213"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-fg"
        >
          PR ↗
        </a>
        ).
      </>,
      <>
        Improved <H>URL hygiene</H> by omitting default query params unless
        explicitly set, boosting shareability (
        <a
          href="https://github.com/calcom/cal.com/pull/20447"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-fg"
        >
          PR ↗
        </a>
        ) — and much more.
      </>,
      <>
        Leveraged <T>ChatGPT</T> for faster documentation, debugging and
        repetitive tasks.
      </>,
    ],
  },
];

export default function Experiences() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 sm:px-8 py-28">
      <SectionLabel index="02" title="Experience" />

      <div className="flex flex-col">
        {roles.map((role, i) => (
          <motion.article
            key={role.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-line first:border-t-0 group"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <img
                  src={role.logo}
                  alt={role.company}
                  className="size-9 rounded-full transition-transform duration-300 group-hover:scale-110"
                />
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-display font-bold text-xl"
                >
                  {role.company}
                </a>
              </div>
              <p className="mt-4 font-display text-base text-fg">{role.title}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-faint">
                {role.period}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-faint">
                {role.location}
              </p>
            </div>

            <ul className="md:col-span-8 space-y-4 text-muted">
              {role.points.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-faint transition-colors duration-300 group-hover:bg-fg" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
