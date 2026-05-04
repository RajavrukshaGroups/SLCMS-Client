import React from "react";
import { motion } from "motion/react";
import {
  Clock,
  Target,
  ShieldCheck,
  PenTool,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    icon: <Clock className="w-7 h-7 text-white" />,
    title: "Complete Syllabus Before Graduation",
    description:
      "Finish NCERTs, standard books, and multiple revision cycles during UG/PG so your first attempt is fully prepared.",
    gradient: "from-amber-500 to-yellow-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
  },
  {
    icon: <Target className="w-7 h-7 text-white" />,
    title: "Prelims + Mains Integrated Approach",
    description:
      "Prepare concepts, answer writing, and current affairs together instead of restarting preparation after graduation.",
    gradient: "from-[#0f2f2c] to-[#1f6f64]",
    iconBg: "bg-[#0f2f2c]",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-white" />,
    title: "Multiple Attempts with Advantage",
    description:
      "Starting early gives you more serious attempts with better maturity, improving your chances of final selection.",
    gradient: "from-amber-500 to-yellow-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
  },
  {
    icon: <PenTool className="w-7 h-7 text-white" />,
    title: "Answer Writing from Early Stage",
    description:
      "Develop structured thinking and writing skills early — the key factor in scoring high in Mains.",
    gradient: "from-[#0f2f2c] to-[#1f6f64]",
    iconBg: "bg-[#0f2f2c]",
  },
];

export default function WhyStart() {
  return (
    <section className="relative overflow-hidden bg-white mb-3">
      {/* 🔥 Premium Horizontal Scrolling Header (matches college dark green theme) */}
      <div className="absolute top-0 left-0 w-full bg-[#0f2f2c] py-4 border-b border-amber-400/30 z-10 overflow-hidden shadow-md">
        <div className="marquee">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-8 text-amber-300 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold whitespace-nowrap"
            >
              <span>NCERT + STANDARD BOOKS FROM DAY ONE</span>
              <span className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
              <span>PRELIMS + MAINS INTEGRATED PREPARATION</span>
              <span className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
              <span>DAILY ANSWER WRITING PRACTICE</span>
              <span className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
              <span>CURRENT AFFAIRS + STATIC SYLLABUS LINKING</span>
              <span className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
              <span>REVISION CYCLES THAT BUILD RETENTION</span>
              <span className="w-1.5 h-1.5 bg-amber-400/60 rounded-full" />
              <span>TEST SERIES WITH REAL EXAM PATTERN</span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .marquee {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* ========== MAIN CONTENT – COLLEGE BRANDING ========== */}
      <div className="container mx-auto px-4 pt-28 md:pt-32 relative z-10">
        {/* Decorative college emblem accent */}
        {/* <div className="absolute top-20 left-5">
          <GraduationCap className="w-40 h-40 text-[#0f2f2c]" />
        </div> */}

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* <div className="inline-block bg-[#0f2f2c]/10 rounded-full px-4 py-1 text-[#0f2f2c] text-sm font-semibold mb-4">
            🎯 Early Bird Advantage
          </div> */}
          <p className="text-[#0f2f2c] uppercase tracking-[0.4em] text-xs mb-3">
            Early Bird Advantage
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-[#0f2f2c]">Why Start IAS/KAS During </span>
            {/* <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent"> */}
            <span className="bg-[#D4AF37] bg-clip-text text-transparent">
              UG/PG?
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto my-4 rounded-full" />

          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            The early bird catches the worm. Civil services preparation is a
            marathon, not a sprint.{" "}
            {/* <span className="text-amber-600 font-semibold"> */}
            <span className="text-[#D4AF37] font-semibold">
              Start early, lead the nation.
            </span>
          </p>
        </motion.div>

        {/* Cards – Solid, Vibrant, College‑worthy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative"
            >
              {/* Card with solid white bg, shadow, gold top border */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col border border-gray-100">
                {/* Colored top bar matching icon gradient */}
                <div className={`h-1.5 bg-gradient-to-r ${card.gradient}`} />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Icon with gradient background */}
                  {/* <div
                    className={`mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </div> */}
                  <div
                    className={`mb-5 w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shadow-sm group-hover:scale-105 transition`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#0f2f2c] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
