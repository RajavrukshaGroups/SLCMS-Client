import { motion } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Clock,
  Sparkles,
} from "lucide-react";
import iasksStructure from "../../assets/iasks-structure.png";

const points = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
    text: "Experienced Faculty from Delhi & Bangalore",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#D4AF37]" />,
    text: "Structured Study Plan for 3 Years",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#D4AF37]" />,
    text: "Daily Mentorship & Doubt Clearing",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />,
    text: "Personal Progress Tracking Dashboard",
  },
  {
    icon: <Users className="w-5 h-5 text-[#D4AF37]" />,
    text: "Small Batch Size for Individual Attention",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#D4AF37]" />,
    text: "Seamless Offline + Online Support",
  },
  {
    icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
    text: "24/7 Library Facility",
  },
];

export default function Difference() {
  // Animation variants for staggered point cards
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-white">
      {/* subtle pattern (visible on white) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
        linear-gradient(#000 1px, transparent 1px),
        linear-gradient(90deg, #000 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-6 border border-gray-200">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-[#1f3d37]">
              What Makes This <br />
              <span className="text-[#D4AF37]">Program Different?</span>
            </h2>

            {/* Points */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-white hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/10">
                      {point.icon}
                    </div>

                    <p className="text-sm md:text-base text-gray-700 font-medium">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#1f3d37] font-bold">1000+</p>
                  <p className="text-gray-500 text-xs">Students Trained</p>
                </div>
              </div>

              <div className="w-px h-8 bg-gray-300" />

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#1f3d37] font-bold">85%</p>
                  <p className="text-gray-500 text-xs">Success Rate</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* RIGHT IMAGE (same mostly) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative p-3 rounded-[2rem] bg-gradient-to-tr from-[#D4AF37]/20 to-gray-100 shadow-xl">
              <img
                src={iasksStructure}
                alt="IAS Program Structure"
                className="rounded-[1.5rem] w-full object-cover"
              />

              {/* badges */}
              {/* <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-md border border-gray-200">
                <p className="text-2xl font-bold text-[#D4AF37]">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Syllabus Coverage
                </p>
              </div> */}

              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-md border border-gray-200">
                <p className="text-2xl font-bold text-[#1f3d37]">24/7</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Library Access
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
