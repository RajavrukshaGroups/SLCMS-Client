import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Users, Trophy, ChevronRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import founder from "../assets/founder.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.about-content > *', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern-academic opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="about-image relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={founder}
              alt="Campus Life"
              className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute -bottom-10 -right-10 premium-card p-8 shadow-2xl z-20 hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years of Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">10k+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Alumni Worldwide</div>
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-accent/20 rounded-full -z-10" />
        </div>

        <div className="about-content space-y-8">
          <div>
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              A Tradition of <span className="text-primary italic">Academic</span> Excellence Since 2004
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            Sri Lakshmi College of Management & Science (SLCMS) stands as a beacon of higher education, dedicated to fostering intellectual growth and professional development. Our curriculum is meticulously crafted to bridge the gap between academic theory and corporate reality.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: GraduationCap, title: 'Expert Faculty', desc: 'Learn from industry veterans and academic scholars.' },
              { icon: BookOpen, title: 'Modern Labs', desc: 'State-of-the-art facilities for practical learning.' },
              { icon: Users, title: 'Global Network', desc: 'Connect with a diverse community of learners.' },
              { icon: Trophy, title: 'Placement Support', desc: 'Dedicated cell for career guidance and jobs.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="group flex items-center gap-3 text-primary font-bold hover:text-accent transition-colors">
              Discover More About Our Vision
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
