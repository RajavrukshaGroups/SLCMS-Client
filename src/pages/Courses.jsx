import React from 'react';
import { motion } from 'motion/react';
import { Book, Code, Briefcase, Microscope, Laptop, Calculator, GraduationCap, Globe, Users, Award } from 'lucide-react';

const departments = [
  {
    title: 'Department of Management',
    icon: Briefcase,
    color: 'bg-blue-500',
    courses: ['BBA (Bachelor of Business Administration)', 'MBA (Master of Business Administration) - Coming Soon'],
    desc: 'Preparing future business leaders with a focus on innovation, ethics, and strategic thinking.',
  },
  {
    title: 'Department of Computer Science',
    icon: Laptop,
    color: 'bg-emerald-500',
    courses: ['BCA (Bachelor of Computer Applications)', 'B.Sc (Computer Science)'],
    desc: 'Empowering students with cutting-edge technical skills in software, AI, and data science.',
  },
  {
    title: 'Department of Commerce',
    icon: Calculator,
    color: 'bg-amber-500',
    courses: ['B.Com (General)', 'B.Com (Accounting & Finance)', 'B.Com (Computer Applications)'],
    desc: 'Providing a strong foundation in financial accounting, taxation, and business laws.',
  },
  {
    title: 'Department of Science',
    icon: Microscope,
    color: 'bg-rose-500',
    courses: ['B.Sc (Physics)', 'B.Sc (Chemistry)', 'B.Sc (Mathematics)'],
    desc: 'Fostering scientific inquiry and research excellence in fundamental sciences.',
  },
  {
    title: 'Department of Humanities',
    icon: Globe,
    color: 'bg-indigo-500',
    courses: ['BA (English Literature)', 'BA (Economics)'],
    desc: 'Developing critical thinking and cultural awareness through the study of literature and society.',
  },
];

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-bg-premium"
    >
      <div className="absolute top-0 left-0 w-full h-96 teal-gradient opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Academic Wings</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6">Departments & <span className="text-primary italic">Programs</span></h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our diverse range of departments, each committed to providing world-class education and fostering academic excellence.
          </p>
        </div>

        <div className="grid gap-12">
          {departments.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] ${dept.color} text-white flex items-center justify-center shrink-0 shadow-2xl`}>
                <dept.icon className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{dept.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">{dept.desc}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {dept.courses.map((course, j) => (
                    <div key={j} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm font-semibold text-slate-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <button className="px-8 py-4 teal-gradient text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 transition-all">
                  Department Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Departments', val: '8', icon: Building },
            { label: 'UG Programs', val: '15', icon: GraduationCap },
            { label: 'PG Programs', val: '5', icon: Award },
            { label: 'Research Centers', val: '3', icon: Microscope },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 premium-card">
              <div className="text-4xl font-display font-bold text-primary mb-2">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const Building = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M16 18h.01"/></svg>
);
