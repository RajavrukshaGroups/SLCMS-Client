import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, BookOpen, Zap, Trophy } from "lucide-react";

const steps = [
  {
    id: "discover",
    title: "Discover",
    description: "Identify the right career path",
    icon: Search,
  },
  {
    id: "prepare",
    title: "Prepare",
    description: "Skill-based training and workshops",
    icon: BookOpen,
  },
  {
    id: "transform",
    title: "Transform",
    description: "Build confidence and professionalism",
    icon: Zap,
  },
  {
    id: "achieve",
    title: "Achieve",
    description: "Secure placements in top companies",
    icon: Trophy,
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);
  const dotLeft = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="py-24 bg-primary overflow-hidden relative">
      {/* Background narrative text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black text-white whitespace-nowrap">
          YOUR JOURNEY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            From Student to Professional
          </motion.h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="relative pt-20 pb-10">
          {/* Connecting Line Container */}
          <div className="absolute top-[120px] left-0 w-full h-0.5 bg-white/10 hidden md:block" />
          
          {/* Active Line */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-[120px] left-0 h-0.5 bg-accent hidden md:block z-10"
          />

          {/* Traveling Dot */}
          <motion.div
            style={{ left: dotLeft }}
            className="absolute top-[120px] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] hidden md:block z-20"
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-accent/50 rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-accent shadow-xl relative z-10"
                  >
                    <step.icon className="w-10 h-10" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-primary font-bold rounded-full flex items-center justify-center text-sm z-20">
                    0{index + 1}
                  </div>
                </div>

                <motion.div 
                  whileInView={{ scale: [0.95, 1], opacity: [0.5, 1] }}
                  transition={{ duration: 0.5 }}
                  className="glass-dark p-6 rounded-2xl w-full border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm font-sans">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
