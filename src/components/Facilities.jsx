// import React from 'react';
// import { motion } from 'motion/react';
// import { Building2, Coffee, Library, Wifi, ShieldCheck, Dumbbell } from 'lucide-react';

// const facilities = [
//   { icon: Library, title: 'Central Library', desc: 'Over 50,000 books and digital resources.' },
//   { icon: Wifi, title: 'Smart Campus', desc: 'High-speed Wi-Fi and tech-enabled classrooms.' },
//   { icon: Coffee, title: 'Modern Cafeteria', desc: 'Hygienic and diverse food options for students.' },
//   { icon: ShieldCheck, title: 'Secure Hostel', desc: 'Safe and comfortable living spaces for outstation students.' },
//   { icon: Dumbbell, title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities for physical fitness.' },
//   { icon: Building2, title: 'Auditorium', desc: 'State-of-the-art venue for seminars and cultural events.' },
// ];

// export default function Facilities() {
//   return (
//     <section className="py-24 bg-bg-premium relative overflow-hidden">
//       <div className="absolute inset-0 bg-pattern-academic opacity-[0.03] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">World-Class Infrastructure</span>
//           <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
//             Facilities for <span className="text-primary italic">Holistic</span> Growth
//           </h2>
//           <p className="text-slate-600">
//             We provide a comprehensive environment that supports both academic excellence and personal development.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {facilities.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.02 }}
//               className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 items-start group"
//             >
//               <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:teal-gradient group-hover:text-accent transition-all duration-500">
//                 <item.icon className="w-7 h-7" />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
//                 <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { motion } from 'motion/react';

// // --- Animated Icon Components ---

// const LibraryIcon = () => {
//   const page1 = useRef(null);
//   const page2 = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
//     tl.to(page1.current, { duration: 0.8, attr: { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v13H6.5a2.5 2.5 0 0 0-2.5 2.5" }, ease: "power1.inOut" })
//       .to(page1.current, { duration: 0.8, attr: { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10v13H6.5a2.5 2.5 0 0 0-2.5 2.5" }, ease: "power1.inOut" }, 0)
//       .to(page2.current, { duration: 0.8, x: -2, ease: "slow(0.7, 0.7, false)" }, 0);
      
//     gsap.to(".lib-page", {
//       scaleX: 0.8,
//       transformOrigin: "left",
//       duration: 1.5,
//       stagger: 0.3,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut"
//     });
//   }, []);

//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
//       <path className="lib-page" d="M8 7h6" />
//       <path className="lib-page" d="M8 11h8" />
//       <path className="lib-page" d="M8 15h6" />
//     </svg>
//   );
// };

// const WifiIcon = () => {
//   useEffect(() => {
//     gsap.to(".wifi-wave", {
//       opacity: 0.2,
//       duration: 0.8,
//       stagger: {
//         each: 0.2,
//         repeat: -1,
//         yoyo: true
//       },
//       ease: "power2.inOut"
//     });
//   }, []);

//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M5 13a10 10 0 0 1 14 0" className="wifi-wave" />
//       <path d="M8.5 16.5a5 5 0 0 1 7 0" className="wifi-wave" />
//       <path d="M2 8.82a15 15 0 0 1 20 0" className="wifi-wave" />
//       <line x1="12" y1="20" x2="12.01" y2="20" />
//     </svg>
//   );
// };

// const CoffeeIcon = () => {
//   useEffect(() => {
//     gsap.to(".steam", {
//       y: -10,
//       opacity: 0,
//       duration: 2,
//       stagger: 0.5,
//       repeat: -1,
//       ease: "none"
//     });
//   }, []);

//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
//       <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
//       <line x1="6" y1="2" x2="6" y2="5" className="steam" />
//       <line x1="10" y1="2" x2="10" y2="5" className="steam" />
//       <line x1="14" y1="2" x2="14" y2="5" className="steam" />
//     </svg>
//   );
// };

// const ShieldIcon = () => {
//   const glintRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(glintRef.current, 
//       { strokeDashoffset: 40 },
//       { strokeDashoffset: -40, duration: 3, repeat: -1, ease: "power1.inOut" }
//     );
//   }, []);

//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
//       <path ref={glintRef} d="m9 12 2 2 4-4" strokeDasharray="40" />
//     </svg>
//   );
// };

// const DumbbellIcon = () => {
//   useEffect(() => {
//     gsap.to(".dumbbell", {
//       rotation: 15,
//       transformOrigin: "center",
//       duration: 1,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut"
//     });
//   }, []);

//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dumbbell">
//       <path d="M14.4 14.4 9.6 9.6" />
//       <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l-1.767 1.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829" />
//       <path d="m21.5 21.5-1.4-1.4" />
//       <path d="m3.9 3.9-1.4-1.4" />
//       <path d="M18 4a2 2 0 1 0-2 2" />
//       <path d="M7 17a2 2 0 1 0 2 2" />
//       <path d="M6.414 6.414 17.586 17.586" />
//     </svg>
//   );
// };

// const AuditoriumIcon = () => {
//   useEffect(() => {
//     gsap.to(".light-beam", {
//       opacity: 0.3,
//       duration: "random(1, 2)",
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut"
//     });
//   }, []);

//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect width="20" height="12" x="2" y="3" rx="2" />
//       <path d="M22 15v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4" />
//       <path d="M6 3v12" className="light-beam" />
//       <path d="M18 3v12" className="light-beam" />
//       <path d="M12 3v12" className="light-beam" />
//     </svg>
//   );
// };

// // --- Facilities Section Component ---

// const facilities = [
//   { icon: LibraryIcon, title: 'Central Library', desc: 'Over 50,000 books and digital resources.' },
//   { icon: WifiIcon, title: 'Smart Campus', desc: 'High-speed Wi-Fi and tech-enabled classrooms.' },
//   { icon: CoffeeIcon, title: 'Modern Cafeteria', desc: 'Hygienic and diverse food options for students.' },
//   { icon: ShieldIcon, title: 'Secure Hostel', desc: 'Safe and comfortable living spaces for outstation students.' },
//   { icon: DumbbellIcon, title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities for physical fitness.' },
//   { icon: AuditoriumIcon, title: 'Auditorium', desc: 'State-of-the-art venue for seminars and cultural events.' },
// ];

// export default function Facilities() {
//   const gridRef = useRef(null);
//   const dotsRef = useRef(null);

//   useEffect(() => {
//     if (gridRef.current) {
//       gsap.to(gridRef.current, {
//         x: -20,
//         y: -10,
//         duration: 20,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }
//     if (dotsRef.current) {
//       gsap.to(dotsRef.current, {
//         x: 10,
//         y: 20,
//         duration: 15,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });
//     }
//   }, []);

//   return (
//     <section id="facilities-section" className="py-24 bg-bg-premium relative overflow-hidden">
//       {/* Background Layers */}
//       <div ref={gridRef} className="absolute inset-[-50px] bg-pattern-grid pointer-events-none" />
//       <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
//       <div ref={dotsRef} className="absolute inset-[-50px] bg-pattern-academic opacity-[0.08] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.span 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
//           >
//             World-Class Infrastructure
//           </motion.span>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6"
//           >
//             Facilities for <span className="text-accent italic font-serif">Holistic</span> Growth
//           </motion.h2>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-700 text-lg font-poppins font-light leading-relaxed"
//           >
//             We provide a comprehensive environment that supports both academic excellence and personal development through state-of-the-art equipment and spaces.
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {facilities.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ scale: 1.02, y: -5 }}
//               className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 items-start group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
//             >
//               <div className="w-16 h-16 shrink-0 rounded-2xl bg-bg-premium flex items-center justify-center text-primary group-hover:teal-gradient group-hover:text-white transition-all duration-500 shadow-inner">
//                 <item.icon />
//               </div>
//               <div>
//                 <h4 className="text-xl font-display font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">
//                   {item.title}
//                 </h4>
//                 <p className="text-slate-600 text-sm leading-relaxed font-poppins">
//                   {item.desc}
//                 </p>
//                 <div className="mt-4 w-8 h-1 bg-accent-soft/30 group-hover:w-full group-hover:bg-accent transition-all duration-500 rounded-full" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

// ---------------- ICONS (UNCHANGED) ----------------

const LibraryIcon = () => {
  const page1 = useRef(null);
  const page2 = useRef(null);

  useEffect(() => {
    gsap.to(".lib-page", {
      scaleX: 0.8,
      transformOrigin: "left",
      duration: 1.5,
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path className="lib-page" d="M8 7h6" />
      <path className="lib-page" d="M8 11h8" />
      <path className="lib-page" d="M8 15h6" />
    </svg>
  );
};

const WifiIcon = () => {
  useEffect(() => {
    gsap.to(".wifi-wave", {
      opacity: 0.2,
      duration: 0.8,
      stagger: { each: 0.2, repeat: -1, yoyo: true },
    });
  }, []);

  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13a10 10 0 0 1 14 0" className="wifi-wave" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" className="wifi-wave" />
    </svg>
  );
};

const CoffeeIcon = () => {
  useEffect(() => {
    gsap.to(".steam", {
      y: -10,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      repeat: -1,
    });
  }, []);

  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="5" className="steam" />
    </svg>
  );
};

const ShieldIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const DumbbellIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const AuditoriumIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="12" x="2" y="3" rx="2" />
  </svg>
);

// ---------------- DATA WITH IMAGE URLS ----------------

const facilities = [
  {
    icon: LibraryIcon,
    title: 'Central Library',
    desc: 'Over 50,000 books and digital resources.',
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200'
  },
  {
    icon: WifiIcon,
    title: 'Smart Campus',
    desc: 'High-speed Wi-Fi and tech-enabled classrooms.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200'
  },
  {
    icon: CoffeeIcon,
    title: 'Modern Cafeteria',
    desc: 'Hygienic and diverse food options.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200'
  },
  {
    icon: ShieldIcon,
    title: 'Secure Hostel',
    desc: 'Safe and comfortable living spaces.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200'
  },
  {
    icon: DumbbellIcon,
    title: 'Sports Complex',
    desc: 'Indoor and outdoor sports facilities.',
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200'
  },
  {
    icon: AuditoriumIcon,
    title: 'Auditorium',
    desc: 'State-of-the-art venue for events.',
    img: 'https://images.unsplash.com/photo-1503424886307-b090341d25d1?q=80&w=1200'
  }
];

// ---------------- COMPONENT ----------------

export default function Facilities() {
  const gridRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    gsap.to(gridRef.current, {
      x: -20,
      y: -10,
      duration: 20,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(dotsRef.current, {
      x: 10,
      y: 20,
      duration: 15,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="py-14 bg-blue-950 relative overflow-hidden text-white">

      {/* Background */}
      <div ref={gridRef} className="absolute inset-0 opacity-10 bg-grid-pattern" />
      <div ref={dotsRef} className="absolute inset-0 opacity-10 bg-dot-pattern" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6">
        <h2 className="text-5xl font-bold">
          Campus <span className="text-yellow-400">Facilities</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Designed for modern learning and student lifestyle.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">

        {facilities.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >

            {/* Image */}
            <img
              src={item.img}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition" />

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-end">

              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <item.icon />
              </div>

              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-gray-300 text-sm mt-1">{item.desc}</p>

              <div className="mt-3 h-[2px] w-10 bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}