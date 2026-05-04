import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Cloud,
  MessageCircle,
  Globe,
} from "lucide-react";

// 🔹 Images
import GSTImg from "../assets/gst-img.jpg";
import ProjectManagement from "../assets/ProjectManagement.jpeg";
import cloudComputing from "../assets/cloudComputing.jpg";
import communicationSkills from "../assets/communicationSkills.jpg";
import foreignLanguage from "../assets/foreignLanguage.jpg";

const ValueAddedSection = () => {
  // 🔥 DATA INSIDE COMPONENT
  const valueAddedCourses = [
    {
      name: "GST Certification",
      icon: FileText,
      desc: "Practical training for B.Com students",
      color: "bg-amber-50 text-amber-600",
      img: GSTImg,
    },
    {
      name: "Project Management",
      icon: Briefcase,
      desc: "For BBA - Agile & PMP essentials",
      color: "bg-emerald-50 text-emerald-600",
      img: ProjectManagement,
    },
    {
      name: "Cloud Computing",
      icon: Cloud,
      desc: "AWS & Azure fundamentals (BCA)",
      color: "bg-purple-50 text-purple-600",
      img: cloudComputing,
    },
    {
      name: "Communication Skills",
      icon: MessageCircle,
      desc: "Professional etiquettes & public speaking",
      color: "bg-sky-50 text-sky-600",
      img: communicationSkills,
    },
    {
      name: "Foreign Language",
      icon: Globe,
      desc: "German / French / Japanese basics",
      color: "bg-rose-50 text-rose-600",
      img: foreignLanguage,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Value-Added Courses
          </h2>
          <p className="text-gray-400 mt-4">
            Certifications that boost your real-world skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {valueAddedCourses.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:border-transparent">

                  {/* Image */}
                  <div className="w-full h-24 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 ${item.color}`}>
                    <Icon size={18} />
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {item.name}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>

                  {/* Hover Line */}
                  <div className="w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full mt-4 transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueAddedSection;

