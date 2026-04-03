import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Students Guided", value: 1000, suffix: "+" },
  { label: "Success Rate", value: 95, suffix: "%" },
  { label: "Expert Faculty", value: 50, suffix: "+" }
];

function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Trust() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 glass rounded-3xl border-black/5 hover:border-gold/20 transition-all group bg-white/50"
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-gold mb-2 text-glow group-hover:scale-110 transition-transform">
                <Counter value={stat.value} />{stat.suffix}
              </h3>
              <p className="text-dark-text/40 text-sm uppercase tracking-widest font-medium group-hover:text-dark-text/60 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] border-black/5 relative overflow-hidden group bg-white/50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors" />
            <h4 className="text-2xl font-bold mb-4 text-gold">Designed by Experts</h4>
            <p className="text-dark-text/50 leading-relaxed">
              Our curriculum is meticulously crafted by former civil servants and subject matter experts to ensure 100% alignment with the latest UPSC/KPSC patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] border-black/5 relative overflow-hidden group bg-white/50"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-electric-blue/10 transition-colors" />
            <h4 className="text-2xl font-bold mb-4 text-electric-blue">Latest UPSC Pattern</h4>
            <p className="text-dark-text/50 leading-relaxed">
              Stay ahead with study materials and test series that reflect the evolving nature of the civil services examination, focusing on analytical depth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
