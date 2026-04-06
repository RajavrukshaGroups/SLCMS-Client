// import { motion, useScroll, useSpring } from "motion/react";
// import { useRef } from "react";

// const steps = [
//   {
//     year: "Year 1",
//     title: "Foundation + Basics",
//     description: "Focus on NCERTs, basic concepts, and building a strong foundation in core subjects like History, Geography, and Polity."
//   },
//   {
//     year: "Year 2",
//     title: "Advanced + Practice",
//     description: "Deep dive into GS papers, optional subjects, and daily answer writing practice with expert feedback."
//   },
//   {
//     year: "Year 3",
//     title: "Full Preparation",
//     description: "Intensive mock tests, current affairs revision, and personality development for the final interview stage."
//   }
// ];

// export default function Timeline() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start center", "end center"]
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section ref={ref} className="py-24 px-6 relative overflow-hidden bg-black/[0.01]">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-electric-blue">
//             The <span className="text-gold text-glow">3-Year</span> Roadmap
//           </h2>
//           <p className="text-dark-text/50 max-w-xl mx-auto">
//             A step-by-step journey designed to align with your graduation years.
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-black/5 rounded-full" />
//           <motion.div
//             style={{ scaleY }}
//             className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-gold rounded-full origin-top shadow-[0_0_15px_rgba(212,175,55,0.3)]"
//           />

//           <div className="space-y-32">
//             {steps.map((step, index) => (
//               <div key={index} className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
//                 <div className="w-5/12 hidden md:block" />
                
//                 <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border-gold/30 flex items-center justify-center z-20 bg-light-bg">
//                   <div className="w-4 h-4 rounded-full bg-gold animate-pulse" />
//                 </div>

//                 <motion.div
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   className="w-full md:w-5/12 glass p-8 rounded-[2rem] border-black/5 hover:border-gold/30 transition-colors group bg-white/80"
//                 >
//                   <span className="text-gold font-bold text-sm uppercase tracking-widest mb-2 block group-hover:text-glow">
//                     {step.year}
//                   </span>
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors text-electric-blue">
//                     {step.title}
//                   </h3>
//                   <p className="text-dark-text/40 leading-relaxed group-hover:text-dark-text/60 transition-colors">
//                     {step.description}
//                   </p>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "motion/react";

// const steps = [
//   {
//     year: "Year 1",
//     subtitle: "Phase 1",
//     title: "NCERTs & Basics",
//     description: "Focus on NCERTs (6th-12th) and basic concepts to build a strong starting point.",
//     color: "bg-[#F59E0B]" // Orange
//   },
//   {
//     year: "Year 1",
//     subtitle: "Phase 2",
//     title: "Core Subjects",
//     description: "Building a strong foundation in core subjects like History, Geography, and Polity.",
//     color: "bg-[#B91C1C]" // Red
//   },
//   {
//     year: "Year 1",
//     subtitle: "Phase 3",
//     title: "Foundation Check",
//     description: "Consolidating basic knowledge and starting to read newspapers for current affairs.",
//     color: "bg-[#1E1B4B]" // Dark Blue
//   },
//   {
//     year: "Year 2",
//     subtitle: "Phase 1",
//     title: "GS Papers",
//     description: "Deep dive into General Studies papers (GS 1, 2, 3, and 4) with detailed study.",
//     color: "bg-[#F59E0B]"
//   },
//   {
//     year: "Year 2",
//     subtitle: "Phase 2",
//     title: "Optional Subject",
//     description: "Selecting and preparing your optional subject thoroughly alongside GS papers.",
//     color: "bg-[#B91C1C]"
//   },
//   {
//     year: "Year 2",
//     subtitle: "Phase 3",
//     title: "Answer Writing",
//     description: "Daily answer writing practice with expert feedback to improve presentation and speed.",
//     color: "bg-[#1E1B4B]"
//   },
//   {
//     year: "Year 3",
//     subtitle: "Phase 1",
//     title: "Intensive Mocks",
//     description: "Regular mock tests for both Prelims and Mains to build exam-day confidence.",
//     color: "bg-[#F59E0B]"
//   },
//   {
//     year: "Year 3",
//     subtitle: "Phase 2",
//     title: "Revision",
//     description: "Intensive current affairs revision and consolidating all subjects for the final push.",
//     color: "bg-[#B91C1C]"
//   },
//   {
//     year: "Year 3",
//     subtitle: "Phase 3",
//     title: "Interview Prep",
//     description: "Personality development and mock interviews for the final personality test stage.",
//     color: "bg-[#1E1B4B]"
//   }
// ];

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[#E5E7EB] py-20 px-4 font-sans selection:bg-accent selection:text-white">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-24"
//         >
//           <h1 className="text-4xl md:text-6xl font-display text-primary mb-4 tracking-wider">
//             THE 3-YEAR <span className="text-accent">ROADMAP</span>
//           </h1>
//           <div className="w-24 h-1 bg-accent mx-auto mb-6" />
//           <p className="text-slate-600 font-poppins max-w-2xl mx-auto uppercase tracking-widest text-sm font-semibold">
//             A step-by-step journey designed to align with your graduation years.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* The Snake Path (Desktop) */}
//           <div className="hidden lg:block absolute top-20 left-0 w-full h-[calc(100%-200px)] pointer-events-none">
//             <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
//               {/* Main Path with smooth semi-circle turns */}
//               <path 
//                 d="M50 60 H 833 A 140 140 0 0 1 833 340 H 166 A 140 140 0 0 0 166 620 H 950" 
//                 stroke="#D1D5DB" 
//                 strokeWidth="28" 
//                 strokeLinecap="round" 
//               />
              
//               {/* Directional Arrows */}
//               {/* Row 1 */}
//               <path d="M333 50 L 353 60 L 333 70" fill="#9CA3AF" />
//               <path d="M666 50 L 686 60 L 666 70" fill="#9CA3AF" />
              
//               {/* Turn 1 */}
//               <path d="M963 190 L 973 210 L 983 190" fill="#9CA3AF" />
              
//               {/* Row 2 */}
//               <path d="M666 330 L 646 340 L 666 350" fill="#9CA3AF" />
//               <path d="M333 330 L 313 340 L 333 350" fill="#9CA3AF" />
              
//               {/* Turn 2 */}
//               <path d="M16 470 L 26 490 L 36 470" fill="#9CA3AF" />
              
//               {/* Row 3 */}
//               <path d="M333 610 L 353 620 L 333 630" fill="#9CA3AF" />
//               <path d="M666 610 L 686 620 L 666 630" fill="#9CA3AF" />
//             </svg>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 lg:gap-y-48 gap-x-12 relative z-10">
//             {steps.map((_, index) => {
//               // Snake order logic
//               const row = Math.floor(index / 3);
//               const col = index % 3;
//               let stepIndex;
              
//               if (row === 1) {
//                 stepIndex = row * 3 + (2 - col);
//               } else {
//                 stepIndex = index;
//               }

//               const step = steps[stepIndex];

//               return (
//                 <motion.div
//                   key={stepIndex}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="flex flex-col items-center"
//                 >
//                   {/* Circular Version Header */}
//                   <div className={`w-40 h-40 rounded-full ${step.color} flex flex-col items-center justify-center text-white shadow-2xl relative z-20 mb-8 border-8 border-[#E5E7EB] transform transition-transform hover:scale-105 duration-300`}>
//                     <span className="text-4xl font-bold font-serif mb-1">{step.year}</span>
//                     <div className="w-16 h-0.5 bg-white/40 mb-2" />
//                     <span className="text-sm font-display uppercase tracking-widest text-center px-2 leading-tight">{step.subtitle}</span>
//                   </div>

//                   {/* Content Card */}
//                   <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm border-t-4 border-slate-200 relative">
//                     <div className="absolute -top-3 left-6 bg-slate-100 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-tighter text-slate-500">
//                       Major Changes
//                     </div>
//                     <p className="text-sm text-slate-600 leading-relaxed font-poppins mt-2">
//                       {step.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { BookOpen, PenTool, GraduationCap, ClipboardList, Target, Users, Award, Search, CheckCircle, ChevronDown, Flag } from "lucide-react";

const steps = [
  {
    year: "Year 1",
    subtitle: "Phase 1",
    title: "NCERTs & Basics",
    description: "Focus on NCERTs Text Book (6th-12th) and basic concepts to build a strong starting point.",
    color: "bg-[#F59E0B]", // Orange
    icon: BookOpen
  },
  {
    year: "Year 1",
    subtitle: "Phase 2",
    title: "Core Subjects",
    description: "Building a strong foundation in General Studies Subjects.",
    color: "bg-[#B91C1C]", // Red
    icon: Search
  },
  {
    year: "Year 1",
    subtitle: "Phase 3",
    title: "Foundation Check",
    description: "Consolidating basic knowledge and starting to analyze newspapers for current affairs.",
    color: "bg-[#1E1B4B]", // Dark Blue
    icon: CheckCircle
  },
  {
    year: "Year 2",
    subtitle: "Phase 1",
    title: "GS Papers",
    description: "Deep dive into General Studies papers (GS 1, GS 2, GS 3, and GS 4) with detailed study.",
    color: "bg-[#F59E0B]",
    icon: ClipboardList
  },
  {
    year: "Year 2",
    subtitle: "Phase 2",
    title: "Optional Subject",
    description: "Selecting and preparing your optional subject thoroughly along with GS papers.",
    color: "bg-[#B91C1C]",
    icon: Target
  },
  {
    year: "Year 2",
    subtitle: "Phase 3",
    title: "Answer Writing",
    description: "Daily answer writing practice and Experts feedback to improve Content presentation and speed.",
    color: "bg-[#1E1B4B]",
    icon: PenTool
  },
  {
    year: "Year 3",
    subtitle: "Phase 1",
    title: "Intensive Mocks",
    description: "Regular weekly mock tests for both Prelims and Mains to build exam-day confidence.",
    color: "bg-[#F59E0B]",
    icon: Award
  },
  {
    year: "Year 3",
    subtitle: "Phase 2",
    title: "Revision",
    description: "Intensive subject concept revision and integrating along with current affairs for the final push.",
    color: "bg-[#B91C1C]",
    icon: Users
  },
  {
    year: "Year 3",
    subtitle: "Phase 3",
    title: "Personality Test Guideance",
    description: "Personality development and mock interviews for the final personality test.",
    color: "bg-[#1E1B4B]",
    icon: GraduationCap
  }
];

export default function App() {
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen bg-[#F9F8F4] py-20 px-4 font-sans selection:bg-accent selection:text-white overflow-x-hidden relative">
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1, rotate }} className="absolute top-40 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2, rotate: -rotate }} className="absolute bottom-40 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-display text-primary mb-6 tracking-wider">
            THE 3-YEAR <span className="text-accent">ROADMAP</span>
          </h1>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-8" />
          <p className="text-slate-600 font-poppins max-w-2xl mx-auto uppercase tracking-[0.2em] text-sm font-bold leading-loose">
            A step-by-step journey designed to align with your graduation years.
          </p>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 flex flex-col items-center text-accent/60"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Scroll to Begin</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* The Snake Path (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-[calc(100%-200px)] pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Path (Gray) */}
              <path 
                id="mainPath"
                d="M50 60 H 833 A 140 140 0 0 1 833 340 H 166 A 140 140 0 0 0 166 620 H 950" 
                stroke="#E5E7EB" 
                strokeWidth="28" 
                strokeLinecap="round" 
              />
              
              {/* Animated Progress Path (Teal) */}
              <motion.path 
                d="M50 60 H 833 A 140 140 0 0 1 833 340 H 166 A 140 140 0 0 0 166 620 H 950" 
                stroke="#0F766E" 
                strokeWidth="28" 
                strokeLinecap="round"
                style={{ pathLength }}
              />

              {/* Traveler Dot */}
              <motion.circle
                r="18"
                fill="#C8A95A"
                filter="drop-shadow(0 0 10px rgba(200, 169, 90, 0.8))"
                style={{ 
                  offsetPath: "path('M50 60 H 833 A 140 140 0 0 1 833 340 H 166 A 140 140 0 0 0 166 620 H 950')",
                  offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"])
                }}
              />

              {/* Directional Arrows */}
              <g opacity="0.3">
                <path d="M333 50 L 353 60 L 333 70" fill="#9CA3AF" />
                <path d="M666 50 L 686 60 L 666 70" fill="#9CA3AF" />
                <path d="M963 190 L 973 210 L 983 190" fill="#9CA3AF" />
                <path d="M666 330 L 646 340 L 666 350" fill="#9CA3AF" />
                <path d="M333 330 L 313 340 L 333 350" fill="#9CA3AF" />
                <path d="M16 470 L 26 490 L 36 470" fill="#9CA3AF" />
                <path d="M333 610 L 353 620 L 333 630" fill="#9CA3AF" />
                <path d="M666 610 L 686 620 L 666 630" fill="#9CA3AF" />
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 lg:gap-y-48 gap-x-12 relative z-10">
            {steps.map((_, index) => {
              // Snake order logic
              const row = Math.floor(index / 3);
              const col = index % 3;
              let stepIndex;
              
              if (row === 1) {
                stepIndex = row * 3 + (2 - col);
              } else {
                stepIndex = index;
              }

              const step = steps[stepIndex];

              return (
                <StepItem key={stepIndex} step={step} index={index} />
              );
            })}
          </div>

          {/* Finish Flag */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-xl mb-4 border-4 border-white">
              <Flag size={32} />
            </div>
            <h3 className="text-2xl font-serif text-primary font-bold">Goal Achieved</h3>
            <p className="text-slate-500 font-poppins text-sm mt-2">Your journey to the IAS begins here.</p>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

function StepItem({ step, index }) {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1 
      }}
      className="flex flex-col items-center group relative"
    >
      {/* Floating Icon */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.2
        }}
        className="absolute -top-12 right-0 lg:-right-8 z-30 text-accent/40"
      >
        <Icon size={48} strokeWidth={1.5} />
      </motion.div>

      {/* Circular Version Header */}
      <div className={`w-44 h-44 rounded-full ${step.color} flex flex-col items-center justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative z-20 mb-10 border-[10px] border-[#F9F8F4] transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <span className="text-4xl font-bold font-serif mb-1 tracking-tighter">{step.year}</span>
        <div className="w-16 h-0.5 bg-white/40 mb-2" />
        <span className="text-xs font-display uppercase tracking-[0.2em] text-center px-4 leading-tight opacity-90">{step.subtitle}</span>
        
        {/* Decorative Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110 animate-pulse" />
      </div>

      {/* Content Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-full max-w-sm border-t-8 border-primary/10 relative overflow-hidden group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-serif text-primary mb-3 font-bold group-hover:text-accent transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-poppins">
            {step.description}
          </p>
        </div>

        {/* Bottom Accent */}
        <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${step.color}`} />
      </motion.div>
    </motion.div>
  );
}
