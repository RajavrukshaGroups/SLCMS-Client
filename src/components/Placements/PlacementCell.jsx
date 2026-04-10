import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import placementImage from "../../assets/placement-img.jpg";

const highlights = [
  "Strong Industry Connections",
  "Continuous Career Guidance",
  "End-to-End Placement Support",
];

export default function PlacementCell() {
  return (
    <section className="py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Section with Parallax/Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative group"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={placementImage}
                alt="Corporate interaction"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <p className="text-primary font-display font-bold text-xl">100%</p>
              <p className="text-black/70 text-xs font-poppins uppercase tracking-wider">Assistance</p>
            </motion.div>

            {/* Decorative background text */}
            <div className="absolute -top-10 -left-10 text-primary/5 font-display font-black text-8xl select-none pointer-events-none">
              ABOUT
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-accent font-poppins font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
              >
                The Bridge to Success
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Placement Cell: <br />
                <span className="italic">Your Career Partner</span>
              </h2>
              <p className="text-xl text-gray-600 font-sans mb-10 leading-relaxed border-l-4 border-accent pl-6">
                The Career Guidance and Placement Cell acts as a bridge between students and the corporate world. 
                Through continuous engagement with leading organizations, we ensure students are aligned with 
                industry expectations and career opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/5 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-primary font-poppins font-semibold text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <a href="/about">
                <button className="group relative px-10 py-4 bg-primary text-white font-poppins font-bold rounded-full overflow-hidden transition-all">
                  <span className="relative z-10">Learn More About Us</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
