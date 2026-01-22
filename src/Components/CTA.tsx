import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative my-40 py-24 px-5 sm:px-7"
    >
      <div className="relative max-w-2xl mx-auto text-center space-y-12">
        {/* Main headline - confident and minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Let's work together
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px w-24 bg-slate-700 mx-auto"
          />
        </motion.div>

        {/* Subheading - understated */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed font-light"
        >
          Open to new opportunities and interesting conversations.
        </motion.p>

        {/* Primary CTA - minimal and confident */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pt-4"
        >
          <motion.a
            href="mailto:tusharbhatt0135@gmail.com"
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-white font-medium text-lg tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Subtle underline animation */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="relative">Get in touch</span>
            <motion.span
              initial={{ x: 0, opacity: 0.7 }}
              whileHover={{ x: 6, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <FaArrowRight className="text-sm" />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Subtle status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-slate-500 text-sm font-light"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-green-500/60"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span>Available for opportunities</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
