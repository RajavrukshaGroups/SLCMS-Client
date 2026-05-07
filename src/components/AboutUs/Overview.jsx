import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  Users2,
  Landmark,
  BookOpen,
  Laptop,
  Trophy,
  Sparkles,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function Overview() {
  const sections = [
    {
      title: "VISION",
      points: [
        "Commitment to student success & teaching excellence",
        "Empower social, cultural & economic vitality",
        "Education for all — inclusive & accessible",
      ],
      icon: <Target className="w-8 h-8" />,
      gradient: "from-emerald-500 to-lime-500",
      bgLight: "bg-emerald-50",
    },
    {
      title: "MISSION",
      points: [
        "Value-driven nation-building through youth development",
        "Discipline as foundation for responsible living",
        "Foster responsible, sensitive & proactive citizens",
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      gradient: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
    },
  ];

  const features = [
    {
      title: "Discipline and Values",
      points: [
        "Integrity & self-discipline in every campus activity",
        "Build responsible citizens & nation-builders",
        "Values as continuous, integral part of learning",
      ],
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-amber-600",
    },
    {
      title: "Expert Faculty",
      points: [
        "Individual student counselling & mentoring",
        "Focus on innovative teaching tools & technology",
        "Dedicated career guidance & growth suggestions",
        "Experienced department in science & commerce",
      ],
      icon: <Users2 className="w-5 h-5" />,
      color: "text-blue-600",
    },
  ];

  const infrastructure = [
    {
      title: "Vast Auditorium",
      icon: <Landmark className="w-4 h-4" />,
      color: "bg-rose-100 text-rose-600",
    },
    {
      title: "Smart Board Classes",
      icon: <Laptop className="w-4 h-4" />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Modern Library",
      icon: <BookOpen className="w-4 h-4" />,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Business & Science Labs",
      icon: <GraduationCap className="w-4 h-4" />,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Computer Lab",
      icon: <Laptop className="w-4 h-4" />,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Indoor & Outdoor Sports",
      icon: <Trophy className="w-4 h-4" />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="overview"
      className="py-12 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 bg-lime-100 text-lime-700 rounded-full px-3 py-1.5 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold tracking-wider">
              KNOW US BETTER
            </span>
          </motion.div>
          <h2 className="text-sm font-bold text-lime-600 tracking-widest uppercase mb-3">
            Overview
          </h2>
          <h3 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 mb-5 leading-tight">
            Sri Lakshmi College of <br />
            <span className="bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Management and Science
            </span>
          </h3>
          <div className="w-24 h-0.5 bg-gradient-to-r from-lime-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className={`${section.bgLight} p-6 rounded-2xl border border-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`bg-gradient-to-br ${section.gradient} p-2.5 rounded-xl text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-zinc-900 mb-3 flex items-center gap-2">
                    {section.title}
                    <span className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></span>
                  </h4>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-base text-zinc-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discipline & Staff */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                className="group"
              >
                <div className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105 duration-300`}
                  >
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
                      {feature.title}
                      <motion.span
                        variants={floatAnimation}
                        initial="initial"
                        animate="animate"
                        className="text-sm font-normal text-lime-500"
                      >
                        ★
                      </motion.span>
                    </h4>
                    <ul className="space-y-1.5">
                      {feature.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-base text-zinc-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-tr from-lime-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-zinc-900">
                Campus Infrastructure
              </h4>
            </div>
            <p className="text-zinc-500 mb-5 leading-relaxed text-sm border-l-4 border-lime-400 pl-3 italic">
              Spacious, smart, and well‑maintained — designed for excellence.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {infrastructure.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex items-center gap-2 p-2.5 rounded-lg ${item.color} shadow-sm hover:shadow-md transition-all cursor-default`}
                >
                  <div className="p-1 rounded-md bg-white/60">{item.icon}</div>
                  <span className="text-sm font-semibold text-zinc-700">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
