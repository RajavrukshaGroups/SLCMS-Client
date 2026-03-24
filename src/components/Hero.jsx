import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Play, Award, BookOpen, Users } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import collegeImage from "../assets/srilakshmi-degree-clg-building.png"

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
      .from('.hero-title', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' }, '-=0.4')
      .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-btns', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.hero-stats', { opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out' }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center  md:pt-30 overflow-hidden bg-bg-premium">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-academic opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent/5 to-transparent" />
      
      {/* Animated Circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div ref={textRef}>
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-accent/20 shadow-sm mb-8">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Accredited A+ Institution</span>
          </div>
          
          <h1 className="hero-title text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
            Shaping the <span className="text-primary italic">Leaders</span> of <span className="text-accent underline decoration-accent/30 underline-offset-8">Tomorrow</span>
          </h1>
          
          <p className="hero-desc text-lg text-slate-600 leading-relaxed max-w-xl mb-10 font-sans">
            Experience academic excellence at Sri Lakshmi College of Management & Science. We provide a transformative learning journey designed for the modern corporate landscape.
          </p>
          
          <div className="hero-btns flex flex-wrap gap-5 md:pb-12">
            <button className="px-8 py-4 teal-gradient text-white rounded-full font-bold shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Explore Courses
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-primary rounded-full font-bold shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="w-4 h-4 fill-primary" />
              </div>
              Virtual Tour
            </button>
          </div>

          {/* <div className="hero-stats mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-10">
            {[
              { label: 'Students', value: '5000+', icon: Users },
              { label: 'Courses', value: '25+', icon: BookOpen },
              { label: 'Placements', value: '95%', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-accent">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div> */}
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div className="aspect-4/2.5 -mt-25 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={collegeImage}
                alt="University Campus"
                //className="w-full h-full "
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-18 -left-10 premium-card p-4 max-w-60"
            >
              <div className="flex items-center gap-4 mb-4 ">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Excellence</h4>
                  <p className="text-sm font-medium text-primary-dark">Top Ranked College</p>
                </div>
              </div>
              <p className="text-sm font-normal text-slate-700 leading-relaxed">
                Recognized for outstanding contribution to management education.
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pattern-mandala opacity-20" />
          <div className="absolute top-1/2 -right-20 w-64 h-64 border border-accent/20 rounded-full" />
        </div>
      </div>

      {/* Wave Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-15 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c67.81-23.09,144.29-30.52,214.34-12C241.25,112.5,273.63,103.4,321.39,56.44Z"></path>
        </svg>
      </div> */}
    </section>
  );
}
