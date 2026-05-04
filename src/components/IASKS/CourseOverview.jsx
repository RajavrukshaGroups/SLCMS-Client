import { motion } from "motion/react";
import {
  BookOpen,
  Award,
  Newspaper,
  Edit3,
  Users,
  Building,
} from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Foundation Course",
    bullets: ["NCERT Basics", "Subject Introduction", "Core Concepts"],
    color: "gold",
  },
  {
    icon: Award,
    title: "Advanced Preparation",
    bullets: [
      "General Studies Papers 1–4",
      "Essay Preparation",
      "Optional Subjects",
    ],
    color: "green",
  },
  {
    icon: Newspaper,
    title: "Current Affairs",
    bullets: [
      "Daily News Analysis",
      "Editorial Discussions",
      "Monthly Magazines",
    ],
    color: "gold",
  },
  {
    icon: Edit3,
    title: "Answer Writing",
    bullets: ["Mains Answer Writing Practice", "Detailed Feedback Sessions"],
    color: "green",
  },
  {
    icon: Users,
    title: "Mock Tests & Interview",
    bullets: [
      "Prelims Test Series",
      "Mains Test Series",
      "Personality Guidance",
    ],
    color: "gold",
  },
  {
    icon: Building,
    title: "Facilities",
    bullets: ["Study Materials", "24/7 Library Access", "Hostel Facility"],
    color: "green",
  },
];

// Child animation variants for title and bullets
const cardContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function CourseOverview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#0f2f2c] uppercase tracking-[0.4em] text-xs mb-6">
            Structured Learning Path
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-[#0f2f2c]">Comprehensive </span>
            {/* <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent"> */}
            <span className="bg-[#D4AF37] bg-clip-text text-transparent">
              Course Overview
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto my-4 rounded-full" />

          <p className="text-gray-600 max-w-xl mx-auto">
            A step-by-step preparation system designed to take you from
            fundamentals to final selection in Civil Services.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isGold = course.color === "gold";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  {/* Top Accent Line */}
                  <div
                    className={`h-1.5 ${
                      isGold
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500"
                        : "bg-gradient-to-r from-[#0f2f2c] to-[#1f6f64]"
                    }`}
                  />

                  <div className="p-6">
                    {/* Icon with its own animation */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm transition ${
                        isGold
                          ? "bg-gradient-to-br from-amber-500 to-yellow-500"
                          : "bg-[#0f2f2c]"
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Animated Title + Bullets Container */}
                    <motion.div
                      variants={cardContentVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-20px" }}
                    >
                      {/* Title */}
                      <motion.h3
                        variants={itemVariants}
                        className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-[#0f2f2c] transition"
                      >
                        {course.title}
                      </motion.h3>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {course.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            variants={bulletVariants}
                            custom={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
