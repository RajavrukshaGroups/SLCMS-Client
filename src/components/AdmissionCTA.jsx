// import React from 'react';
// import { motion } from 'motion/react';
// import { ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from "../assets/backgroundImage.webp"

// export default function AdmissionCTA() {
//   const navigate = useNavigate();

//   return (
//     <section className="py-24 relative overflow-hidden"
//        style={{
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     opacity :"0.5px"
//   }}
//     >
//       <div className="absolute inset-0 bg-black/60" />
//                                       {/* teal-gradient */}
//       <div className="absolute inset-0 bg-pattern-academic opacity-10 pointer-events-none" /> 
       
//       {/* Decorative Circles */}
//       <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
//       <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
//       <div
//         className="max-w-5xl mx-auto px-6 relative z-10 text-center"
        
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="space-y-8"
          
//         >
//           <span className="text-accent-soft font-bold uppercase tracking-[0.4em] text-xs">Admissions Open 2024-25</span>
//           <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
//             Take the First Step Towards Your <span className="text-accent italic">Dream Career</span>
//           </h2>
//           <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
//             Join a community of innovators, thinkers, and leaders. Our admission process is now open for all undergraduate programs.
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-6 pt-4">
//             <button onClick={()=> navigate("/admissions")} className="px-10 py-5 bg-accent text-slate-900 rounded-full font-bold shadow-2xl hover:bg-white transition-all duration-300 flex items-center gap-3">
//               Apply Online Now
//               <ChevronRight className="w-5 h-5" />
//             </button>
            
//           </div>

//           <div className="pt-12 flex justify-center items-center gap-12 border-t border-white/10 mt-12">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-white">Mar 31</div>
//               <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Early Bird Deadline</div>
//             </div>
//             <div className="w-px h-10 bg-white/10" />
//             <div className="text-center">
//               <div className="text-2xl font-bold text-white">100%</div>
//               <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Scholarship Available</div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Library, Wifi, Users, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
//import backgroundImage from "../assets/backgroundImage.webp";
import backgroundImage from "../assets/library-background.jpg"

export default function AdmissionCTA() {
  const navigate = useNavigate();

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "1",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-pattern-academic opacity-10 pointer-events-none" />

      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <span className="text-accent-soft font-bold uppercase tracking-[0.4em] text-xs">
            Admissions Open 2025-26
          </span>

          <h2 className="text-2xl md:text-5xl font-display font-bold text-white leading-tight">
           Dedicated 24/7 Library Facilities for{" "}
            <span className="text-accent italic">Academic Excellence</span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Join a community of innovators, thinkers, and leaders. Our admission
            process is now open for all undergraduate programmes.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button
              onClick={() => navigate("/admissions")}
              className="px-10 py-5 bg-accent text-slate-900 rounded-full font-bold shadow-2xl hover:bg-white transition-all duration-300 flex items-center gap-3"
            >
              Apply Online Now
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Professional Facilities Row - replaces old deadline/scholarship stats */}
          <div className="pt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 border-t border-white/10 mt-12">
            <div className="flex items-center gap-3">
              <Library className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-xl font-bold text-white">24/7 Library</div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-bold">
                  Digital & Print Resources
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10" />

            <div className="flex items-center gap-3">
              <Wifi className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-xl font-bold text-white">Hi‑Tech Campus</div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-bold">
                  Smart Classrooms & Labs
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10" />

            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-xl font-bold text-white">Expert Mentors</div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-bold">
                  Industry Professionals
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10" />

            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent" />
              <div className="text-left">
                <div className="text-xl font-bold text-white">100% Placement</div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-bold">
                  Assistance Guaranteed
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}