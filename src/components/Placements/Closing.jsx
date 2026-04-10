import { motion } from "motion/react";

export default function Closing() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            “We don’t just prepare students for jobs — <br />
            <span className="text-accent italic">we prepare them for success.</span>”
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a href="/admissions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-accent text-primary font-poppins font-bold rounded-full shadow-lg shadow-accent/20 hover:bg-accent-light transition-all"
            >
              Start Your Journey
            </motion.button>
            </a>
              <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-poppins font-bold rounded-full border-2 border-white/20 hover:bg-white/10 transition-all"
            >
              Contact Placement Cell
            </motion.button>
            </a>

          </div>
        </motion.div>
      </div>

      {/* Decorative background text */}
      <div className="absolute -bottom-10 left-0 w-full text-center opacity-[0.03] select-none pointer-events-none">
        <span className="text-[12vw] font-display font-black text-white whitespace-nowrap">
          FUTURE LEADERS • SUCCESS • CAREERS
        </span>
      </div>
    </section>
  );
}
