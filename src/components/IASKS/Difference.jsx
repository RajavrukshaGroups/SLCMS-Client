import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, Users, Globe, Clock } from "lucide-react";
import iasksStructure from "../../assets/iasks-structure.png";

const points = [
  { icon: <ShieldCheck className="w-6 h-6 text-gold" />, text: "Experienced Faculty from Delhi & Bangalore" },
  { icon: <Zap className="w-6 h-6 text-gold" />, text: "Structured Study Plan for 3 Years" },
  { icon: <TrendingUp className="w-6 h-6 text-gold" />, text: "Daily Mentorship & Doubt Clearing" },
  { icon: <CheckCircle2 className="w-6 h-6 text-gold" />, text: "Personal Progress Tracking Dashboard" },
  { icon: <Users className="w-6 h-6 text-gold" />, text: "Small Batch Size for Individual Attention" },
  { icon: <Globe className="w-6 h-6 text-gold" />, text: "Seamless Offline + Online Support" },
  { icon: <Clock className="w-6 h-6 text-gold" />, text: "24/7 Library Facility" }
];

export default function Difference() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Authentic Herringbone Pattern – Woven/V‑shaped weave */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 16px,
              rgba(0,0,0,0.02) 16px,
              rgba(0,0,0,0.02) 32px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 16px,
              rgba(0,0,0,0.015) 16px,
              rgba(0,0,0,0.015) 32px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              rgba(0,0,0,0.01) 20px,
              rgba(0,0,0,0.01) 40px
            )
          `
        }}
      />
      
      {/* Refined herringbone overlay using SVG (woven effect) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 60' width='120' height='60'%3E%3Cpath d='M0,0 L30,30 L60,0 L90,30 L120,0' stroke='%238B5A2B' stroke-width='1.2' fill='none' /%3E%3Cpath d='M0,30 L30,60 L60,30 L90,60 L120,30' stroke='%238B5A2B' stroke-width='1.2' fill='none' /%3E%3Cpath d='M0,0 L30,30 L60,0 L90,30 L120,0' stroke='%23D4AF37' stroke-width='0.5' fill='none' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "120px 60px"
        }}
      />

      {/* Additional woven texture (subtle noise) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />

      {/* Subtle gradient overlay to soften and give depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-electric-blue/5 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight text-electric-blue">
              What Makes This <br />
              <span className=" text-gold">Program Different?</span>
            </h2>
            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-black/5 transition-colors border border-black/5 bg-white/50 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-xl bg-gold/10">
                    {point.icon}
                  </div>
                  <p className="text-lg text-dark-text/80 font-medium">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-[100px] -z-10" />
            <div className="glass p-4 rounded-[2.5rem] border border-gold/10 bg-white/80 backdrop-blur-sm">
              <img
                src={iasksStructure}
                alt="IAS Aspirant"
                className="rounded-[2rem] w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl border border-gold/10 bg-white shadow-xl">
                <p className="text-2xl font-bold text-gold">100%</p>
                <p className="text-xs text-dark-text/60 uppercase tracking-wider">Syllabus Coverage</p>
              </div>
              <div className="absolute -top-8 -right-8 glass p-6 rounded-3xl border border-electric-blue/10 bg-white shadow-xl">
                <p className="text-2xl font-bold text-electric-blue">24/7</p>
                <p className="text-xs text-dark-text/60 uppercase tracking-wider">Library Facilities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}