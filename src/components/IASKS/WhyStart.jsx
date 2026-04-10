import { motion } from "motion/react";
import { Clock, Target, ShieldCheck, PenTool } from "lucide-react";

const cards = [
  {
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: "Save 2–3 Years",
    description: "Start preparation alongside your degree and be ready for the first attempt immediately after graduation."
  },
  {
    icon: <Target className="w-8 h-8 text-electric-blue" />,
    title: "Strong Early Foundation",
    description: "Master NCERTs and core concepts while your mind is most receptive and academic environment is supportive."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    title: "Higher Success Rate",
    description: "Statistics show that early starters have a significantly higher chance of cracking UPSC/KPSC in their first attempt."
  },
  {
    icon: <PenTool className="w-8 h-8 text-electric-blue" />,
    title: "Build Discipline Early",
    description: "Develop the critical thinking, analytical mindset, and answer-writing practice skills required for the mains exam."
  }
];

export default function WhyStart() {
  return (
    <section className="md:py-24 py-12 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-electric-blue">
            Why Start IAS/KAS During <span className="text-gold">UG/PG?</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto">
            The early bird catches the worm. Civil services preparation is a marathon, not a sprint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-8 rounded-3xl group transition-all hover:bg-gold/5 hover:border-gold/30 border-black/5"
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/5 w-fit group-hover:bg-gold/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors text-electric-blue">
                {card.title}
              </h3>
              <p className="text-dark-text/40 text-sm leading-relaxed group-hover:text-dark-text/60 transition-colors">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
