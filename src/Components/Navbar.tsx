import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Socials from "./other/Socials";
import avatar from "@/assets/hacker.png";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Skills₹", href: "#skills" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-ink/80 backdrop-blur-md py-3"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-bold text-lg tracking-tight flex items-center gap-3 group"
        >
          <img
            src={avatar}
            alt="Tushar Bhatt"
            className="h-9 w-9 rounded-full object-contain bg-surface p-1 border border-line"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-mono text-xs uppercase tracking-widest text-muted hover:text-fg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Socials size="sm" />
      </div>
    </motion.header>
  );
}
