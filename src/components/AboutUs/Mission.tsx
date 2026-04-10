import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Mission() {
  const values = [
    "Academic Excellence",
    "Professional Development",
    "Research and Innovation",
    "Diversity and Inclusion"
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-6">Our Mission</h2>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              The mission of our college revolves around providing undergraduate education and fostering a supportive environment for students to grow academically, personally, and professionally.
            </p>
            <div className="space-y-4">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold text-zinc-700">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="absolute -inset-4 bg-lime-400/20 rounded-[40px] -rotate-2" />
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200" 
                alt="Library study" 
                className="w-full h-[300px] sm:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Fostering talent & leaderships</h3>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-md">
                  To provide high-quality undergraduate education that fosters critical thinking, intellectual curiosity, and a deep understanding of the chosen field of study.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
