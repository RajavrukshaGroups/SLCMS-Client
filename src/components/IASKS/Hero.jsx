// import { motion } from "motion/react";
// import { ArrowRight, Download, ChevronDown } from "lucide-react";
// import iasksBanner from "../../assets/iasks-banner.mp4";

// export default function Hero() {
//   return (
//     // <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//     //    <video
//     //     autoPlay
//     //     loop
//     //     muted
//     //     playsInline
//     //     className="absolute inset-0 w-full h-full object-cover"
//     //   >
//     //     <source src={iasksBanner} type="video/mp4" />
//     //     Your browser does not support the video tag.
//     //   </video>

// <section className="w-full flex items-center justify-center overflow-hidden">
//   <div className="relative w-full max-w-[1920px] aspect-video">
//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="absolute inset-0 w-full h-full object-cover"
//     >
//       <source src={iasksBanner} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     </div>
    
//     <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

//         {/* 🔥 ONLY Top Black Fade */}
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent" />
//     </div>
//       {/* Background with Particles/Glow Effect */}
//       {/* <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1A365D]/5 rounded-full blur-[120px]" />
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
//         <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#FCFAFA]/30 to-[#000604]" />
//       </div> */}

//       {/* Content */}
//       {/* <div className="container relative z-10 pt-18 md:pt-25 mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-wrap justify-center gap-6 mb-8"
//         >
//           <span className="px-4 py-1.5 rounded-full glass text-xs font-bold tracking-wider uppercase border-[#D4AF37]/20 text-[#D4AF37] bg-white/60">
//             UG + IAS Integrated
//           </span>
//           <span className="px-4 py-1.5 rounded-full glass text-xs font-bold tracking-wider uppercase border-[#1A365D]/20 text-[#1A365D] bg-white/50">
//             Limited Seats Available
//           </span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-[#1A365D]"
//         >
//           Start Your <span className="text-[#D4AF37] text-glow">IAS/KAS</span> Journey <br />
//           <span className="text-dark-text/90">Alongside Your Degree</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-md md:text-xl text-white max-w-2xl mx-auto mb-10 font-light leading-relaxed"
//         >
//           Crack UPSC/KPSC with expert guidance while completing your UG/PG. 
//           Build a foundation that puts you years ahead of the competition.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-6"
//         >
//           <button className="group relative px-8 py-4 bg-[#D4AF37] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 bg-glow-[#D4AF37]">
//             <span className="relative z-10 flex items-center gap-2">
//               Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//           </button>
//           <button className="px-8 py-4 glass text-[#1A365D] font-semibold rounded-full hover:bg-white transition-all flex items-center gap-2 border-[#1A365D]/10">
//             Download Brochure <Download className="w-5 h-5" />
//           </button>
//         </motion.div>
//       </div> */}

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 "
//         // style={{paddingTop:"30px"}}
//       >
//         {/* <span className="text-[10px] uppercase tracking-[0.3em] text-dark-text/30">Scroll</span> */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           <ChevronDown className="w-5 h-5 text-[#D4AF37]/50" />
//         </motion.div>
//       </motion.div>

//       {/* Officer Silhouette Overlay (Subtle) */}
//       <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-0 opacity-20">
//         <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent" />
//       </div>
//     </section>
//   );
// }


import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import iasksBanner from "../../assets/iasks-banner.mp4";

export default function Hero() {
  return (
    <section className="relative w-full h-[45vh] sm:h-[50vh] sm:py-0 md:h-[80vh] lg:h-screen md:overflow-hidden">

      {/* 🎥 Full Width + Full Height Video */}
      <div className="absolute inset-0 w-full -mb-13 md:-mb-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full md:object-cover"
        >
          <source src={iasksBanner} type="video/mp4" />
        </video>
      </div>

      {/* 🌑 Overlay Effects */}
      <div className="absolute inset-0 z-10">
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 " />

        {/* Glow Effects */}
        <div className="hidden md:block absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-72 md:w-96 h-40 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-72 md:w-96 h-40 sm:h-72 md:h-96 bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        {/* 🔥 Only Top Fade */}
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-b from-black/80 to-transparent" />
      </div>
      </div>

      {/* 📜 Content */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Start Your <span className="text-primary">IAS/KAS</span> Journey
          <br />
          <span className="text-white/80 text-sm sm:text-lg md:text-2xl font-medium">
            Alongside Your Degree
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs sm:text-sm md:text-lg text-white/70 max-w-2xl"
        >
          Crack UPSC/KPSC with expert guidance while completing your UG/PG.
          Build a strong foundation and stay ahead of the competition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:scale-105 transition">
            Apply Now
          </button>
          <button className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition">
            Download Brochure
          </button>
        </motion.div>
      </div> */}

      {/* ⬇ Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70" />
        </motion.div>
      </motion.div>

    </section>
  );
}