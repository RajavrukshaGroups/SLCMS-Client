import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-2 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-electric-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-16 md:p-24 rounded-[1rem] border-black/5 relative overflow-hidden group bg-white/80"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-gold/5 via-transparent to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-6 py-2 rounded-full glass border-gold/30 text-gold text-sm font-bold uppercase tracking-widest mb-8 inline-block"
            >
              Limited Seats Available
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-5xl font-bold md:font-extrabold mb-8 tracking-tight leading-tight text-electric-blue"
            >
              Don’t Wait Until Graduation. <br />
              <span className="text-gold text-glow">Start Your Journey Now.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-dark-text/50 text-md md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join the elite academy that transforms students into civil servants. 
              Get the guidance you need to crack UPSC/KPSC in your first attempt.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button className="group relative px-10 py-5 bg-gold text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 bg-glow-gold">
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-10 py-5 glass text-dark-text font-semibold rounded-full hover:bg-black/5 transition-all flex items-center gap-2 bg-white/50">
                Talk to Counsellor <MessageCircle className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
