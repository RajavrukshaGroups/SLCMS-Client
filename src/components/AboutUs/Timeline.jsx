import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Flag, GraduationCap, Users, Shield, Cpu, Lightbulb, PartyPopper,BrainCircuit } from 'lucide-react';
import { useRef } from 'react';

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const milestones = [
    {
      year: "2004 A.D",
      title: "The college was founded with the motivation of fostering sharp minded individuals and quality education",
      icon: <Flag className="w-5 h-5" />,
      pos: "top-10 left-[10%]",
      threshold: 0.1
    },
    {
      year: "2010 A.D",
      title: "Reached the milestone of enrolling 10k students.",
      icon: <GraduationCap className="w-5 h-5" />,
      pos: "top-40 left-[40%]",
      threshold: 0.3
    },
    {
      year: "2015 A.D",
      title: "We got recognitions & awards by Pulitzer Prizes and National Science Foundation",
      icon: <Users className="w-5 h-5" />,
      pos: "top-19 left-[70%]",
      threshold: 0.4
    },
    {
      year: "2018 A.D",
      title: "Introduction of two new programs - Networking & Cyber Security and Multimedia",
      icon: <Shield className="w-5 h-5" />,
      pos: "bottom-60 right-[15%]",
      threshold: 0.65
    },
    {
      year: "2023 A.D",
      title: "Reached the milestone of enrolling 30k students.",
      icon: <Cpu className="w-5 h-5" />,
      pos: "bottom-40 left-[50%]",
      threshold: 0.8
    },
    {
      year: "2026 A.D",
      title: "With the advancements in Artificial Intelligence in everyday life the college established an AI & ML research lab",
      icon: <BrainCircuit className="w-5 h-5" />,
      pos: "bottom-20 left-[20%]",
      threshold: 0.9
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-4"
          >
            The Flashback to {" "}
           <spam className="text-lime-600">Sri Lakshmi College's</spam>  {" "}
            History
          </motion.h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative h-[800px] w-full">
          {/* Curved Path SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800" fill="none">
            <motion.path
              d="M 100 150 Q 300 50 500 150 T 900 150 Q 1000 300 800 500 T 500 450 T 200 600 T 150 750"
              stroke="#84cc16"
              strokeWidth="2"
              strokeDasharray="8 8"
              style={{ pathLength }}
            />
          </svg>

          {milestones.map((m, idx) => (
            <Milestone key={idx} milestone={m} progress={scrollYProgress} />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative space-y-12 pl-8 border-l-2 border-dashed border-lime-500 ml-4">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 w-10 h-10 bg-white rounded-full border-2 border-lime-500 flex items-center justify-center z-10">
                {m.icon}
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
                <div className="text-lime-600 font-bold text-sm mb-1">{m.year}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{m.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Milestone({ milestone, progress }) {
  const opacity = useTransform(progress, [milestone.threshold - 0.05, milestone.threshold], [0, 1]);
  const scale = useTransform(progress, [milestone.threshold - 0.05, milestone.threshold], [0.5, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`absolute ${milestone.pos} group z-10`}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-lime-500 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
          {milestone.icon}
        </div>
        <div className="absolute top-14 left-0 w-48 pointer-events-none group-hover:pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-xl shadow-xl border border-zinc-100 transform -translate-x-1/2 left-1/2 relative"
          >
            <div className="text-lime-600 font-bold text-sm mb-1">{milestone.year}</div>
            <p className="text-zinc-600 text-xs leading-relaxed">{milestone.title}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
