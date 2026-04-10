import { motion } from "motion/react";
import { BarChart3, Target, Users, Brain } from "lucide-react";
import React from "react";

const assistanceItems = [
  {
    title: "Profiling & Assessment",
    icon: BarChart3,
    description: "In-depth analysis of student capabilities and career aspirations to identify the ideal corporate fit.",
  },
  {
    title: "Interview Preparation",
    icon: Target,
    description: "Comprehensive mock interviews, body language coaching, and technical drills led by industry experts.",
  },
  {
    title: "Industry Interaction",
    icon: Users,
    description: "Direct engagement with corporate leaders through guest lectures, networking events, and site visits.",
  },
  {
    title: "Skill Enhancement",
    icon: Brain,
    description: "Continuous learning programs focused on the latest industry trends and high-demand professional skills.",
  },
];

export default function Assistance() {
  return (
    <section id="assistance" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-poppins font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Placement Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary max-w-2xl leading-tight"
          >
            A Disciplined Approach to <br />
            <span className="text-accent italic">Career Readiness</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {assistanceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-sans leading-relaxed text-base max-w-md">
                    {item.description}
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
