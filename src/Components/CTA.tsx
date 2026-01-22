import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative my-32 py-20 px-5 sm:px-7"
    >
      {/* Subtle background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/30 rounded-3xl"
      />
      
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Let's build something
            <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent inline-block pb-3">
              remarkable together
            </span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Always open to discussing new opportunities, interesting projects, or just connecting with fellow developers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          {/* Primary CTA */}
          <motion.a
            href="mailto:tusharbhatt0135@gmail.com"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden shadow-lg shadow-white/10 no-underline-hover"
            style={{ textDecoration: 'none' }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2 z-10">
              Get in touch
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight className="text-sm" />
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary CTA
          <motion.a
            href="mailto:tusharbhatt0135@gmail.com"
            className="group px-8 py-4 border border-slate-700 text-white font-medium rounded-full hover:border-slate-500 transition-colors duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "rgb(148, 163, 184)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="flex items-center gap-2">
              <motion.span
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <FaEnvelope className="text-sm" />
              </motion.span>
              Email me
            </span>
          </motion.a> */}
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8"
        >
          <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
            <motion.div
              className="h-px w-12 bg-slate-700"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <span>Available for opportunities</span>
            <motion.div
              className="h-px w-12 bg-slate-700"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
