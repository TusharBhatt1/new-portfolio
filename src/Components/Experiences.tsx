import { motion } from "framer-motion";
import calIcon from "@/assets/cal-com-icon.svg";
import pfmIcon from "@/assets/pfm-logo.png";
import dollar50 from "@/assets/dollar50.png";
import dollar10 from "@/assets/dollar10.png";
import reactLib from "@/assets/react-lib.png";

export default function Experiences() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mt-28 flex md:flex-row flex-col gap-20 justify-between"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:hidden block pb-3 text-lg mb-2"
        >
          Hey 👋 I'm Tushar Bhatt ,{" "}
          <span className="text-sm">
            Full Stack Front End Engineer with ~ an year of experience.
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Experiences
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-7"
        >
          <div className="flex gap-2 text-lg">
            <img src={pfmIcon} className="size-8 rounded-full" />
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span>Frontend Engineer at</span>
                <a
                  className="font-bold"
                  href="https://pocketfm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pocket FM{" "}
                </a>
              </div>
              <span className="text-sm text-slate-400">
                Bengaluru (Remote) | Jul 2024 – Present (Intern → Contract)
              </span>
            </div>
          </div>
          <div className="mt-4 text-slate-200">
            <ul style={{ listStyleType: "disc" }} className="space-y-2 pl-4">
              <li>
                Owned, maintained and contributed to multiple production repositories, including pocketfm.com, xtra, blaze, and
                aural-ui.
              </li>
              <li>
                Collaborated with the Pocket Toons team to implement an image
                trimming feature, reducing backend calls and S3 costs.
              </li>

              <li>
                Revamped the Newsroom application for Pocket FM using Next.js
                and React Query.
              </li>
              <li>
                Utilized TypeScript, Tailwind, and Shadcn UI in the tech stack.
              </li>
              <li>
                Conducted E2E testing with Cypress and component testing with
                Vitest.
              </li>
              <li>Managed backend in Contentful CMS.</li>
              <li>
                Improved website performance, raising Lighthouse scores from 70
                to nearly 100, optimizing LCP (3.5s to 1.2s), CLS (0.25 to
                0.02), and TBT (400ms to 50ms).
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}

        >
          <div className="flex gap-2 text-lg">
            <img src={calIcon} className="size-8 rounded-full" />
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span>Software Engineer Intern at</span>
                <a
                  className="font-bold"
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cal.com{" "}
                </a>
              </div>
              <span className="text-sm text-slate-400">
                USA (Remote) | Feb 2025 - May 2025
              </span>
            </div>
          </div>
          <div className="mt-4 text-slate-200">
            <ul style={{ listStyleType: "disc" }} className="space-y-2 pl-4">
              <li>
                Built simple to complex features and reviewed close to 150 PRs.
              </li>
              <li>
                Hands on with Full stack technologies -{" "}
                <span className="italic">
                  {" "}
                  Nextjs , Typescript , Tailwind , Prisma , TRPC and PostgresSQL{" "}
                </span>
              </li>
              <li>
                Fixed a high-priority spam issue by capping{" "}
                <span className="italic">
                  seatsPerTimeSlot both the Front and Backend ,
                </span>{" "}
                to prevent mass fake bookings with high{" "}
                <span className="italic">seatsPerTimeSlot</span>. (
                <a
                  href="https://github.com/calcom/cal.com/pull/20213"
                  target="_blank"
                  className="italic underline"
                  rel="noopener noreferrer"
                >
                  PR
                </a>
                )
              </li>
              <li>
                Improved URL hygiene by omitting default query parameters
                (pageSize, pageIndex) unless explicitly set, reducing
                unnecessary clutter and improving shareability (
                <a
                  href="https://github.com/calcom/cal.com/pull/20447"
                  target="_blank"
                  className="italic underline"
                  rel="noopener noreferrer"
                >
                  PR
                </a>
                ) and much more.
              </li>
              <li>
                Was closely working with team and community members to ship new
                features.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Open Source
        </motion.h2>
        <div className="mt-7">
          <ul style={{ listStyleType: "disc" }} className="space-y-2 pl-4">
            <li className="text-lg font-bold"> Won Bounties worth $60</li>

            <li>
              Built a High priority feature to allow hosts to disable
              Cancellation/Rescheduling for an event - $50 (
              <a
                href="https://github.com/calcom/cal.com/pull/20489"
                target="_blank"
                className="italic underline"
                rel="noopener noreferrer"
              >
                PR
              </a>
              ) <br />
              Blocks users e2e from canceling or rescheduling from both Frontend
              and Backend. Added relevant tests.
              <img src={dollar50} className="my-4" />
            </li>

            <li>
              Fixed logo sync issue on the App by altering API response - $10 (
              <a
                href="https://github.com/calcom/cal.com/pull/20190"
                target="_blank"
                className="italic underline"
                rel="noopener noreferrer"
              >
                PR
              </a>
              ) <img src={dollar10} className="my-4" />
            </li>
            <li>
              Contributed to{" "}
              <a
                href="https://0.email.com"
                target="_blank"
                className="italic underline"
                rel="noopener noreferrer"
              >
                Zero.email
              </a>{" "}
              for an High priority feature , allowing users to select/deselect
              mail using keyboard (
              <a
                href="https://github.com/Mail-0/Zero/pull/615"
                target="_blank"
                className="italic underline"
                rel="noopener noreferrer"
              >
                PR
              </a>
              ){" "}
            </li>
            <li>
              Built{" "}
              <a
                href="https://www.npmjs.com/package/react-images-trimming-tool-tb"
                target="_blank"
                className="italic underline"
                rel="noopener noreferrer"
              >
                react-images-trimming-tool-tb{" "}
              </a>{" "}
              : A React package for efficient frontend images trimming ,
              reducing backend dependencies and costs.
              <img src={reactLib} className="my-4" />
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
