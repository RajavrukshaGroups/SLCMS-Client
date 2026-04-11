/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, GraduationCap, Atom, Dna, BookOpen, Code, Landmark, Languages, Palette } from "lucide-react";
import { useState } from "react";

const mentors = [
  {
    id: 1,
    name: "Jhonathan Cambell",
    role: "Math Instructor",
    image: "https://picsum.photos/seed/math-mentor/400/400",
    color: "text-red-500",
    borderColor: "border-red-500",
    icon: <BookOpen className="w-5 h-5 text-red-500" />,
    bg: "bg-red-50",
  },
  {
    id: 2,
    name: "Peter Kraigston",
    role: "Chemistry Instructor",
    image: "https://picsum.photos/seed/chemistry-mentor/400/400",
    color: "text-emerald-500",
    borderColor: "border-emerald-500",
    icon: <Atom className="w-5 h-5 text-emerald-500" />,
    bg: "bg-emerald-50",
  },
  {
    id: 3,
    name: "Liam Houston",
    role: "Physics Instructor",
    image: "https://picsum.photos/seed/physics-mentor/400/400",
    color: "text-teal-500",
    borderColor: "border-teal-500",
    icon: <GraduationCap className="w-5 h-5 text-teal-500" />,
    bg: "bg-teal-50",
  },
  {
    id: 4,
    name: "Mouroph Peterson",
    role: "Biology Instructor",
    image: "https://picsum.photos/seed/biology-mentor/400/400",
    color: "text-rose-500",
    borderColor: "border-rose-500",
    icon: <Dna className="w-5 h-5 text-rose-500" />,
    bg: "bg-rose-50",
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "CS Instructor",
    image: "https://picsum.photos/seed/cs-mentor/400/400",
    color: "text-blue-500",
    borderColor: "border-blue-500",
    icon: <Code className="w-5 h-5 text-blue-500" />,
    bg: "bg-blue-50",
  },
  {
    id: 6,
    name: "David Miller",
    role: "History Instructor",
    image: "https://picsum.photos/seed/history-mentor/400/400",
    color: "text-amber-500",
    borderColor: "border-amber-500",
    icon: <Landmark className="w-5 h-5 text-amber-500" />,
    bg: "bg-amber-50",
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    role: "Literature Instructor",
    image: "https://picsum.photos/seed/literature-mentor/400/400",
    color: "text-purple-500",
    borderColor: "border-purple-500",
    icon: <Languages className="w-5 h-5 text-purple-500" />,
    bg: "bg-purple-50",
  },
  {
    id: 8,
    name: "Marcus Thorne",
    role: "Art Instructor",
    image: "https://picsum.photos/seed/art-mentor/400/400",
    color: "text-orange-500",
    borderColor: "border-orange-500",
    icon: <Palette className="w-5 h-5 text-orange-500" />,
    bg: "bg-orange-50",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (mentors.length - 3));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (mentors.length - 3)) % (mentors.length - 3));
  };

  const visibleMentors = mentors.slice(currentIndex, currentIndex + 4);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden selection:bg-emerald-100">
      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
            Meet The Best Mentor For You
          </h1>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
            <button 
              onClick={next}
              className="p-3 rounded-full bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
            {visibleMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Connecting Dotted Lines (Visual Decoration) */}
                {index < visibleMentors.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dotted border-slate-300 z-0" />
                )}
                
                {/* Card Content */}
                <div className="flex flex-col items-center">
                  {/* Top Label (Alternate positions) */}
                  <div className={`mb-6 text-center transition-transform duration-500 group-hover:-translate-y-1 ${index % 2 === 0 ? 'order-last mt-6 mb-0' : 'order-first'}`}>
                    <h3 className={`text-2xl font-bold ${mentor.color}`}>
                      {mentor.name}
                    </h3>
                    <p className="text-slate-500 font-medium mt-1">
                      {mentor.role}
                    </p>
                  </div>

                  {/* Image Container with Dotted Border */}
                  <div className="relative p-4">
                    <div className="absolute inset-0 border-2 border-dotted border-slate-300 rounded-xl -m-2 group-hover:border-emerald-400 transition-colors duration-300" />
                    
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-xl">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-4 p-2 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        {mentor.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-100 rounded-full blur-[120px]" />
        </div>
      </main>
    </div>
  );
}
