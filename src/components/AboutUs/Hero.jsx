import { Users, GraduationCap, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import aboutHeroImg1 from "../../assets/aboutHeroImg1.png"
import aboutHeroImg2 from "../../assets/aboutHeroImg2.png"

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    {
      icon: <Users className="w-6 h-6 text-zinc-900" />,
      title: "35k+ Students Enrolled",
      desc: "Whether you're pursuing your passions, advancing your career, or exploring new opportunities, our diverse and vibrant campus offers endless possibilities for growth, learning, and discovery",
      bgColor: "bg-zinc-100"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-lime-600" />,
      title: "20 Years of Quality Academics",
      desc: "For over two decades, we've been committed to delivering excellence in education.",
      bgColor: "bg-lime-100"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "16 Accreditations & Awards",
      desc: "Our commitment to quality education and institutional excellence has been recognized through numerous accolades and accreditations",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-zinc-900 leading-[1.1] mb-6"
            >
              Creating 
              Industry-Ready <br />
              <span className="text-lime-600">Graduates</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-zinc-500 text-base sm:text-lg mb-12 max-w-lg"
            >
              Prepare for success with our industry-focused programs designed to produce graduates ready to excel in today's competitive job market
            </motion.p>

            <div className="space-y-6 sm:space-y-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex gap-4 sm:gap-6"
                >
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{stat.title}</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[550px] relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: y1 }}
              className="rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <img 
                src={aboutHeroImg1} 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="rounded-3xl overflow-hidden shadow-2xl mt-12"
            >
              <img 
                src={aboutHeroImg2} 
                alt="Graduation celebration" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
