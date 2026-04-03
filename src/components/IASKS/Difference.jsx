import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, Users, Globe } from "lucide-react";
import iasksStructure from "../../assets/iasks-structure.png";

const points = [
  { icon: <ShieldCheck className="w-6 h-6 text-gold" />, text: "Experienced Faculty from Delhi & Bangalore" },
  { icon: <Zap className="w-6 h-6 text-gold" />, text: "Structured Study Plan for 3 Years" },
  { icon: <TrendingUp className="w-6 h-6 text-gold" />, text: "Daily Mentorship & Doubt Clearing" },
  { icon: <CheckCircle2 className="w-6 h-6 text-gold" />, text: "Personal Progress Tracking Dashboard" },
  { icon: <Users className="w-6 h-6 text-gold" />, text: "Small Batch Size for Individual Attention" },
  { icon: <Globe className="w-6 h-6 text-gold" />, text: "Seamless Offline + Online Support" }
];

export default function Difference() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight text-electric-blue">
              What Makes This <br />
              <span className="text-gold">Program Different?</span>
            </h2>
            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-black/5 transition-colors border-black/5"
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
            <div className="glass p-4 rounded-[2.5rem] border-gold/10">
              <img
                // src="https://picsum.photos/seed/ias/800/800"
                src={iasksStructure}
                alt="IAS Aspirant"
                className="rounded-[2rem] w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl border-gold/10 bg-glow-gold bg-white">
                <p className="text-2xl font-bold text-gold">100%</p>
                <p className="text-xs text-dark-text/60 uppercase tracking-wider">Syllabus Coverage</p>
              </div>
              <div className="absolute -top-8 -right-8 glass p-6 rounded-3xl border-electric-blue/10 bg-glow-blue bg-white">
                <p className="text-2xl font-bold text-electric-blue">24/7</p>
                <p className="text-xs text-dark-text/60 uppercase tracking-wider">Expert Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
