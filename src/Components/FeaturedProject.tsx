import { motion } from "framer-motion";
import Heading from "./other/Heading";
import Calcompanion from "@/assets/cal-companion.png";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Heading title="Featured Project" alignment="left" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-5"
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg">
            Built Official Browser Extension for{" "}
            <a
              className="font-bold"
              target="_blank"
              href="https://cal.com"
              rel="noopener noreferrer"
            >
              Cal.com{" "}
            </a>{" "}
            from scratch using WXT framework :{" "}
            <a
              className="text-blue-400"
              target="_blank"
              href="https://chromewebstore.google.com/detail/cal-companion/cbhlgojmamgmdijlkkokcmmjghgckahc?hl=en-US&utm_source=ext_sidebar"
            >
              Cal Companion
            </a>
          </p>

          <h3>Currently packed with -</h3>
          <ul style={{ listStyleType: "disc" }} className="space-y-2 pl-4">
            <li>Quick access to recent upcoming/past bookings</li>
            <li>
              Ability to mark attendee show/no show on Google Calendar event -
              by using the content script and adding button nodes to
              calender.google event dialog
            </li>
          </ul>
          <span>
            <a
              className="text-slate-400"
              href="https://x.com/Tushar0135/status/1953383306772222010"
              target="_blank"
            >
              View Post on X (Twitter)
            </a>
          </span>
        </div>

        <motion.img
          src={Calcompanion}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </motion.div>
  );
}
