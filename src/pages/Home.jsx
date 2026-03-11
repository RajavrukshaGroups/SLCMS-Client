import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CoursesPreview from '../components/CoursesPreview';
import ToppersCarousel from '../components/ToppersCarousel';
import Facilities from '../components/Facilities';
import AdmissionCTA from '../components/AdmissionCTA';
import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Building } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Hero />
      
      {/* Quick Stats Bar */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Years Excellence', val: '20+', icon: TrendingUp },
            { label: 'Expert Faculty', val: '150+', icon: Users },
            { label: 'Placements', val: '95%', icon: Award },
            { label: 'Campus Size', val: '25 Acres', icon: Building },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AboutSection />
      <CoursesPreview />
      <ToppersCarousel />
      
      {/* Campus Life Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs block">Vibrant Campus</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                Life at SLCMS: Beyond the <span className="text-primary italic">Classroom</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our campus is a melting pot of cultures and ideas. From technical symposiums to cultural festivals, we ensure our students have a well-rounded experience that prepares them for the real world.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-bg-premium border border-slate-100">
                  <div className="text-primary font-bold mb-2">50+ Events</div>
                  <p className="text-xs text-slate-500">Annual cultural and technical festivals.</p>
                </div>
                <div className="p-6 rounded-2xl bg-bg-premium border border-slate-100">
                  <div className="text-accent font-bold mb-2">15 Clubs</div>
                  <p className="text-xs text-slate-500">Student-led clubs for diverse interests.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="pt-12 space-y-4">
                <img src="https://images.unsplash.com/photo-1525921429624-479b6a29d84c?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Facilities />
      
      {/* Placement Partners */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">Our Placement Partners</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro'].map((brand) => (
              <span key={brand} className="text-2xl font-display font-bold text-slate-900">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </motion.div>
  );
}
