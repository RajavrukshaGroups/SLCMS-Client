import React from 'react';
import { motion } from 'motion/react';

export default function PlaceholderPage({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-40 pb-20 bg-bg-premium"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6">{title}</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="premium-card p-12 text-center max-w-4xl mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed">
            We are currently updating our <span className="text-primary font-bold">{title}</span> page to provide you with the most accurate and premium experience. Please check back soon for detailed information about our institution's excellence.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 bg-slate-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
