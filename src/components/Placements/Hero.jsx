import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import PlacementHeroImg from "../../assets/placement-hero-img.jpg";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("journey");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with cinematic image/gradient */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={PlacementHeroImg}
          alt="Students in corporate setting"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/60" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
        >
          Shaping Careers.
          <span className="text-accent">Building Futures.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Empowering students with the right guidance, skills, and opportunities to succeed in the corporate world.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={scrollToNext}
          className="group relative px-8 py-4 bg-accent text-white font-poppins font-bold rounded-full overflow-hidden transition-all hover:bg-accent-light animate-glow"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Placements
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>

      {/* Parallax elements or subtle motion */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
