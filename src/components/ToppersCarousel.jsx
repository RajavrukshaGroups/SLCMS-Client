import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import unknown from '../assets/unknown.webp'


const toppers = [
  {
    name: 'Ananya Sharma',
    course: 'BCA - 2023 Batch',
    rank: 'University Rank 1',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    quote: 'The faculty support and modern labs at SLCMS helped me achieve my dreams.',
  },
  {
    name: 'Rahul Verma',
    course: 'BBA - 2023 Batch',
    rank: 'University Rank 3',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'SLCMS provided the perfect platform to develop my leadership skills.',
  },
  {
    name: 'Priya Patel',
    course: 'B.Com - 2022 Batch',
    rank: 'Gold Medalist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    quote: 'The placement cell is exceptional. I got placed in a top MNC before graduation.',
  },
];

export default function ToppersCarousel() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Academic Excellence</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              Our Academic <span className="text-primary italic">Toppers</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-primary/5 rounded-full text-primary font-bold text-sm">
              Batch of 2024 - 25
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {toppers.map((topper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="premium-card p-8 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 group-hover:text-accent/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {/* <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> */}
                   <img src={unknown} alt={topper.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{topper.name}</h4>
                  <p className="text-xs text-accent font-bold uppercase tracking-widest">{topper.course}</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
                <Star className="w-3 h-3 fill-accent" />
                {topper.rank}
              </div>

              <p className="text-slate-600 italic leading-relaxed text-sm">
                "{topper.quote}"
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 teal-gradient rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
