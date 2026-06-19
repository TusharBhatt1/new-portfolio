import { motion, useReducedMotion } from "framer-motion";

interface Blob {
  className: string;
  anim: { x: number[]; y: number[]; scale: number[]; opacity: number[] };
  duration: number;
}

// Large, soft, slowly-drifting monochrome glows — a calm "aurora" that keeps
// the dark background feeling alive without pulling focus from the content.
const blobs: Blob[] = [
  {
    className: "left-[-12%] top-[2%] h-[42rem] w-[42rem]",
    anim: { x: [0, 70, 0], y: [0, 50, 0], scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] },
    duration: 28,
  },
  {
    className: "right-[-16%] top-[28%] h-[46rem] w-[46rem]",
    anim: { x: [0, -60, 0], y: [0, 70, 0], scale: [1, 1.12, 1], opacity: [1, 0.6, 1] },
    duration: 34,
  },
  {
    className: "left-[24%] bottom-[-14%] h-[40rem] w-[40rem]",
    anim: { x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.22, 1], opacity: [0.7, 1, 0.7] },
    duration: 31,
  },
  {
    className: "right-[8%] bottom-[6%] h-[34rem] w-[34rem]",
    anim: { x: [0, -45, 0], y: [0, -55, 0], scale: [1, 1.16, 1], opacity: [0.6, 1, 0.6] },
    duration: 26,
  },
];

export default function Background() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.className}`}
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), transparent 0%)",
          }}
          animate={reduce ? undefined : b.anim}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}
