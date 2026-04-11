import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Book, Code, Briefcase, Microscope, ChevronRight, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Bachelor of Business Administration',
    code: 'BBA',
    icon: Briefcase,
    desc: 'Master the fundamentals of management, marketing, and finance for the corporate world.',
    color: 'bg-blue-500',
    link:'/course/bba'
  },
  {
    title: 'Bachelor of Computer Applications',
    code: 'BCA',
    icon: Code,
    desc: 'Dive deep into software development, database management, and emerging technologies.',
    color: 'bg-emerald-500',
    link:'/course/bca'
  },
  {
    title: 'Bachelor of Commerce',
    code: 'B.Com',
    icon: Book,
    desc: 'Specialized training in accounting, taxation, and financial management.',
    color: 'bg-amber-500',
    link:'/course/bcom'
  },
  {
    title: 'Bachelor of Science',
    code: 'B.Sc',
    icon: Microscope,
    desc: 'Explore the wonders of science with our specialized programs in Physics and Chemistry.',
    color: 'bg-rose-500',
    link:'/course/bsc-cbz'
  },
];

export default function CoursesPreview() {
  return (
    <section className="py-24 bg-bg-premium relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-mandala opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Academic Programs</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Choose Your <span className="text-primary italic">Path</span> to Success
          </h2>
          <p className="text-slate-600">
            Our diverse range of undergraduate programs is designed to equip students with the skills and knowledge needed to excel in their chosen fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <a href={course.link}>
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="premium-card p-8 group cursor-pointer h-full flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl ${course.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <course.icon className="w-7 h-7" />
                </div>
                
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">{course.code}</span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-4">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {course.desc}
                  </p>
                </div>
                {/* <a href={course.link}> */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">3 Year Program</span>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                </div>
                {/* </a> */}
              </motion.div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/courses"
            className="inline-block px-10 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
}
