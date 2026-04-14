// import React from 'react';
// import { motion } from 'motion/react';
// import { Star, Quote } from 'lucide-react';
// import unknown from '../assets/unknown.webp'


// const toppers = [
//   {
//     name: 'Ananya Sharma',
//     course: 'BCA - 2023 Batch',
//     rank: 'University Rank 1',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
//     quote: 'The faculty support and modern labs at SLCMS helped me achieve my dreams.',
//   },
//   {
//     name: 'Rahul Verma',
//     course: 'BBA - 2023 Batch',
//     rank: 'University Rank 3',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
//     quote: 'SLCMS provided the perfect platform to develop my leadership skills.',
//   },
//   {
//     name: 'Priya Patel',
//     course: 'B.Com - 2022 Batch',
//     rank: 'Gold Medalist',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
//     quote: 'The placement cell is exceptional. I got placed in a top MNC before graduation.',
//   },
// ];

// export default function ToppersCarousel() {
//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
//           <div className="max-w-2xl">
//             <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Academic Excellence</span>
//             <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
//               Our Academic <span className="text-primary italic">Toppers</span>
//             </h2>
//           </div>
//           <div className="flex gap-4">
//             <div className="px-6 py-3 bg-primary/5 rounded-full text-primary font-bold text-sm">
//               Batch of 2024 - 25
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {toppers.map((topper, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               className="premium-card p-8 relative group"
//             >
//               <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 group-hover:text-accent/10 transition-colors" />
              
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                   {/* <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> */}
//                    <img src={unknown} alt={topper.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900 text-lg">{topper.name}</h4>
//                   <p className="text-xs text-accent font-bold uppercase tracking-widest">{topper.course}</p>
//                 </div>
//               </div>

//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
//                 <Star className="w-3 h-3 fill-accent" />
//                 {topper.rank}
//               </div>

//               <p className="text-slate-600 italic leading-relaxed text-sm">
//                 "{topper.quote}"
//               </p>

//               <div className="absolute bottom-0 left-0 right-0 h-1.5 teal-gradient rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';
import AISHWARYA from '../assets/Toppers/AISHWARYA S.png';
import ARBINTAJ from '../assets/Toppers/ARBIN TAJ.png';
import NITHYALAKSHMI from '../assets/Toppers/NITHYALAKSHMI H K.png';
import ROOPA from '../assets/Toppers/ROOPA SHREE.png';
import RESHAM from '../assets/Toppers/RESHAM M.png';
import SIMRAN from '../assets/Toppers/SIMRAN N.png';
import NAYANA from '../assets/Toppers/NAYANA YADAV CH.png';
import TEJASWINI from '../assets/Toppers/TEJASWINI T N.png';
import SANGEETHA from '../assets/Toppers/SANGEETHA D.png';
import JOYCEPETER from '../assets/Toppers/JOYCE PETER.png';
import BHAVANA from '../assets/Toppers/BHAVANA R.png';
import KEERTHANA from '../assets/Toppers/KEERTHANA S.png';
import LAKSHMITHA from '../assets/Toppers/LAKSHMITHA K Y.png';
import MEGHANA from '../assets/Toppers/MEGHANA L.png';
import MONISHA from '../assets/Toppers/MONISHA B T.png';
import NAYANAYADAV from '../assets/Toppers/NAYANA YADAV CH.png';
import NOORAYESHA from '../assets/Toppers/NOOR AYESHA.png';
import PALLAVI from '../assets/Toppers/PALLAVI D.png';
import RAKSHITHA from '../assets/Toppers/RAKSHITHA M.png';
import RUKSATAJ from '../assets/Toppers/RUKSA TAJ.png';
import SARANYA from '../assets/Toppers/SARANYA S.png';
import SHIVAKUMAR from '../assets/Toppers/SHIVAKUMAR.png';
import SUCHITA from '../assets/Toppers/SUCHITA S.png';
import SURYA from '../assets/Toppers/SURYA B.png';
import SWATHI from '../assets/Toppers/SWATHI C R.png';


const toppers = [
  // BBA TOPPERS
  {
    name: 'Resham M',
    course: 'BBA - 2024-25',
    rank: 'CGPA: 9.17',
    dept: 'Commerce & Management',
    image: RESHAM,
    quote: 'Hard work and consistent effort are the keys to academic success at SLCMS.',
  },
  {
    name: 'Nayana Yadav CH',
    course: 'BBA - 2024-25',
    rank: 'CGPA: 8.75',
    dept: 'Commerce & Management',
    image: NAYANA,
    quote: 'The guidance from our faculty helps us reach our highest potential.',
  },
  {
    name: 'Simran N',
    course: 'BBA - 2024-25',
    rank: 'CGPA: 8.67',
    dept: 'Commerce & Management',
    image: SIMRAN,
    quote: 'Grateful for the academic environment that fosters excellence.',
  },
  {
    name: 'Nithyalakshmi H K',
    course: 'BBA - 2024-25',
    rank: 'CGPA: 8.62',
    dept: 'Commerce & Management',
    image: NITHYALAKSHMI,
    quote: 'Persistence and dedication always pay off in the long run.',
  },
  {
    name: 'Roopa Shree',
    course: 'BBA - 2024-25',
    rank: 'CGPA: 8.15',
    dept: 'Commerce & Management',
    image: ROOPA,
    quote: 'A supportive campus makes all the difference in achieving goals.',
  },
  {
    name: 'Arbintaj',
    course: 'BBA - 2024-25',
    rank: 'CGPA: 8.13',
    dept: 'Commerce & Management',
    image: ARBINTAJ,
    quote: 'Success is a journey of continuous learning and improvement.',
  },
  // B.COM TOPPERS
  {
    name: 'Tejaswini T N',
    course: 'B.Com - 2024-25',
    rank: 'CGPA: 8.27',
    dept: 'Commerce & Management',
    image: TEJASWINI,
    quote: 'The commerce department provides a solid foundation for our careers.',
  },
  {
    name: 'Sangeetha D',
    course: 'B.Com - 2024-25',
    rank: 'CGPA: 8.13',
    dept: 'Commerce & Management',
    image: SANGEETHA,
    quote: 'Academic achievement is a result of focus and great mentorship.',
  },
  {
    name: 'Joyce Peter',
    course: 'B.Com - 2024-25',
    rank: 'CGPA: 8.01',
    dept: 'Commerce & Management',
    image: JOYCEPETER,
    quote: 'Blessed to be part of the SLCMS family and its success story.',
  },
];

// Duplicate the list for seamless looping
const duplicatedToppers = [...toppers, ...toppers];

const TopperCard = ({ topper }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] mx-4">
    <div className="relative group bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col">
      <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-50 group-hover:text-teal-500/5 transition-colors" />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-16 h-16 rounded-full overflow-hidden border-teal-500/20 p-1 bg-white shadow-inner shrink-0">
          <img 
            src={topper.image} 
            alt={topper.name} 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-teal-600 transition-colors">{topper.name}</h4>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">{topper.dept}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-widest border border-teal-100">
          <Award className="w-3 h-3" />
          {topper.course}
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-amber-100">
          <Star className="w-3 h-3 fill-amber-500" />
          {topper.rank}
        </div>
      </div>

      <p className="text-slate-600 italic leading-relaxed text-sm relative z-10 flex-grow">
        "{topper.quote}"
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    </div>
  </div>
);

export default function App() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Department of Commerce & Management</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              {/* Sri Lakshmi College of Management and Science <br/> */}
              <span className="text-teal-600 italic">Academic Toppers 2024-25</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-medium text-sm shadow-sm">
              BBA & B.Com Departments
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex py-4"
          animate={{
            x: [0, -3420], // Adjusted based on card width + margin * number of unique items
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45, // Slightly slower for readability
              ease: "linear",
            },
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedToppers.map((topper, i) => (
            <TopperCard key={i} topper={topper} />
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center md:hidden">
        <div className="inline-block px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-medium text-sm">
          Academic Year 2024-25
        </div>
      </div>
    </section>
  );
}