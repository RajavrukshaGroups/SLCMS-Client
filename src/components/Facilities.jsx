import React from 'react';
import { motion } from 'motion/react';
import { Building2, Coffee, Library, Wifi, ShieldCheck, Dumbbell } from 'lucide-react';

const facilities = [
  { icon: Library, title: 'Central Library', desc: 'Over 50,000 books and digital resources.' },
  { icon: Wifi, title: 'Smart Campus', desc: 'High-speed Wi-Fi and tech-enabled classrooms.' },
  { icon: Coffee, title: 'Modern Cafeteria', desc: 'Hygienic and diverse food options for students.' },
  { icon: ShieldCheck, title: 'Secure Hostel', desc: 'Safe and comfortable living spaces for outstation students.' },
  { icon: Dumbbell, title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities for physical fitness.' },
  { icon: Building2, title: 'Auditorium', desc: 'State-of-the-art venue for seminars and cultural events.' },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-bg-premium relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-academic opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">World-Class Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Facilities for <span className="text-primary italic">Holistic</span> Growth
          </h2>
          <p className="text-slate-600">
            We provide a comprehensive environment that supports both academic excellence and personal development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6 items-start group"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:teal-gradient group-hover:text-accent transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
