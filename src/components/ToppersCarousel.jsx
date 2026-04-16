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

  // BCA TOPPERS
  {
    name: 'Aishwarya S',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 9.15',
    dept: 'Computer Applications',
    image: AISHWARYA,
    quote: 'Technology is best when it brings people together — and learning it here has been wonderful.',
  },
  {
    name: 'Rakshitha M',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 9.03',
    dept: 'Computer Applications',
    image: RAKSHITHA,
    quote: 'Every line of code is a step closer to the future I envision for myself.',
  },
  {
    name: 'Swathi C R',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 9.03',
    dept: 'Computer Applications',
    image: SWATHI,
    quote: 'The department pushed me to think beyond textbooks and explore real solutions.',
  },
  {
    name: 'Bhavana R',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.81',
    dept: 'Computer Applications',
    image: BHAVANA,
    quote: 'Consistency and curiosity have been my greatest companions throughout this journey.',
  },
  {
    name: 'Suchita S',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.75',
    dept: 'Computer Applications',
    image: SUCHITA,
    quote: 'SLCMS gave me the confidence to take on challenges in the tech world.',
  },
  {
    name: 'Noor Ayesha',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.63',
    dept: 'Computer Applications',
    image: NOORAYESHA,
    quote: 'Learning here has been an experience that shaped both my skills and my character.',
  },
  {
    name: 'Lakshmitha K Y',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.53',
    dept: 'Computer Applications',
    image: LAKSHMITHA,
    quote: 'The faculty\'s dedication made every concept clear and every goal achievable.',
  },
  {
    name: 'Keerthana S',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.48',
    dept: 'Computer Applications',
    image: KEERTHANA,
    quote: 'Hard work paired with the right guidance always leads to success.',
  },
  {
    name: 'Pallavi D',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.32',
    dept: 'Computer Applications',
    image: PALLAVI,
    quote: 'Every challenge in this program made me stronger and more capable.',
  },
  {
    name: 'Meghana L',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.29',
    dept: 'Computer Applications',
    image: MEGHANA,
    quote: 'I am proud to represent the best of what SLCMS has nurtured in us.',
  },
  {
    name: 'Ruksa Taj',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.25',
    dept: 'Computer Applications',
    image: RUKSATAJ,
    quote: 'This college gave me the tools to turn my passion for tech into real results.',
  },
  {
    name: 'Surya B',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.23',
    dept: 'Computer Applications',
    image: SURYA,
    quote: 'The environment here constantly inspired me to aim higher each semester.',
  },
  {
    name: 'Saranya S',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.19',
    dept: 'Computer Applications',
    image: SARANYA,
    quote: 'Grateful to the entire SLCMS team for making this achievement possible.',
  },
  {
    name: 'Monisha B T',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.10',
    dept: 'Computer Applications',
    image: MONISHA,
    quote: 'Discipline and passion together can take you further than you imagine.',
  },
  {
    name: 'Shivakumar',
    course: 'BCA - 2024-25',
    rank: 'CGPA: 8.09',
    dept: 'Computer Applications',
    image: SHIVAKUMAR,
    quote: 'Being part of this topper\'s list is a milestone I will always cherish.',
  },
];

// Duplicate the list for seamless looping
const duplicatedToppers = [...toppers, ...toppers];

const TopperCard = ({ topper }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] mx-4">
    <div className="relative group bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col">
      <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-50 group-hover:text-teal-500/5 transition-colors" />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        {/* <div className="w-16 h-16 rounded-full overflow-hidden border-teal-500/20 p-1 bg-white shadow-inner shrink-0">
          <img 
            src={topper.image} 
            alt={topper.name} 
            className="w-full h-full object-cover rounded-full" 
          />
        </div> */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-teal-500/20 p-1 bg-white shadow-inner shrink-0">
          <img 
            src={topper.image} 
            alt={topper.name} 
            className="w-full h-full object-cover object-top rounded-full" 
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
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Department of Commerce, Management & Computer Applications</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              {/* Sri Lakshmi College of Management and Science <br/> */}
              <span className="text-teal-600 italic">Academic <spam className="text-gold">Toppers</spam> 2024-25</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-medium text-sm shadow-sm">
              BBA, B.Com & BCA Departments
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-linear-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-linear-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex py-4"
          animate={{
            x: [0, -3420],  // -3420 Adjusted based on card width + margin * number of unique items
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
          BBA, B.Com & BCA · Academic Year 2025-26
        </div>
      </div>
    </section>
  );
}