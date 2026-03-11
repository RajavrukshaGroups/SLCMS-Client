import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function AdmissionCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 teal-gradient" />
      <div className="absolute inset-0 bg-pattern-academic opacity-10 pointer-events-none" />
      
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <span className="text-accent-soft font-bold uppercase tracking-[0.4em] text-xs">Admissions Open 2024-25</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Take the First Step Towards Your <span className="text-accent italic">Dream Career</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Join a community of innovators, thinkers, and leaders. Our admission process is now open for all undergraduate programs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <button className="px-10 py-5 bg-accent text-slate-900 rounded-full font-bold shadow-2xl hover:bg-white transition-all duration-300 flex items-center gap-3">
              Apply Online Now
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300">
              Download Prospectus
            </button>
          </div>

          <div className="pt-12 flex justify-center items-center gap-12 border-t border-white/10 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Mar 31</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Early Bird Deadline</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Scholarship Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
