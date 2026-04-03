import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Starting my IAS preparation in the first year of my BA was the best decision. The structured guidance helped me manage both college and UPSC effortlessly.",
    name: "Ananya K.",
    tagline: "Final Year BA Student | UPSC Aspirant",
    image: "https://picsum.photos/seed/student1/100/100"
  },
  {
    quote: "The faculty here is exceptional. They don't just teach subjects; they teach you how to think like a civil servant. The mentorship is truly personal.",
    name: "Rahul S.",
    tagline: "B.Tech Graduate | KAS Aspirant",
    image: "https://picsum.photos/seed/student2/100/100"
  },
  {
    quote: "The answer writing practice and regular feedback sessions gave me the confidence I needed. I feel much more prepared for the mains now.",
    name: "Meera V.",
    tagline: "MA Political Science | UPSC Aspirant",
    image: "https://picsum.photos/seed/student3/100/100"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black/[0.01]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-electric-blue">
            Hear from Our <span className="text-gold">Aspirants</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto">
            Real stories from students who started their journey early and are now on the path to success.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-12 rounded-[3rem] border-black/5 relative overflow-hidden group bg-white/80"
            >
              <div className="absolute top-0 right-0 p-12 text-gold/5 group-hover:text-gold/10 transition-colors">
                <Quote className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <p className="text-md md:text-lg font-medium italic mb-10 leading-relaxed text-dark-text/90">
                  "{testimonials[index].quote}"
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border-2 border-gold/30 overflow-hidden group-hover:scale-110 transition-transform">
                    <img
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gold group-hover:text-glow transition-colors">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-sm text-dark-text/40 uppercase tracking-widest font-medium group-hover:text-dark-text/60 transition-colors">
                      {testimonials[index].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-gold w-8 shadow-[0_0_10px_rgba(212,175,55,0.3)]' : 'bg-black/10 hover:bg-black/20'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full glass p-4 rounded-full border-black/5 hover:border-gold/30 text-dark-text/40 hover:text-gold transition-all hidden md:flex bg-white/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full glass p-4 rounded-full border-black/5 hover:border-gold/30 text-dark-text/40 hover:text-gold transition-all hidden md:flex bg-white/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
