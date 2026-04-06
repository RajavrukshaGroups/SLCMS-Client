import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I manage IAS preparation along with my college degree?",
    answer: "Absolutely. Our 3-year integrated program is thoughtfully designed to complement your UG/PG studies. We focus on building a strong conceptual foundation in the initial years, enabling you to effectively balance both your academics and Civil Services preparation with ease."
  },
  {
    question: "Is this program suitable for complete beginners?",
    answer: "Yes. Our Foundation Course is specifically designed for beginners, starting from NCERT fundamentals. We do not require any prior knowledge and provide clear, structured, step-by-step guidance to support you throughout your entire civil services preparation journey."
  },
  {
    question: "Are online classes available if I’m unable to attend offline sessions?",
    answer: "Yes. We offer a flexible hybrid learning model where all classes are conducted live online and also recorded for later access. This ensures you can learn from anywhere at your convenience, while still benefiting from in-person mentorship and support at our physical centers."
  },
  {
    question: "What is the total duration of the integrated course?",
    answer: "The integrated program is designed to span 3 years, aligned with your graduation timeline. Additionally, we offer 1-year and 2-year intensive programs for students who have already begun their degree and wish to accelerate their preparation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black/[0.01]">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-electric-blue">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto">
            Everything you need to know about starting your civil services journey with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-[2rem] border-black/5 overflow-hidden group bg-white/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
              >
                <span className="text-lg font-bold text-dark-text/90 group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full glass border-black/10 group-hover:border-gold/30 transition-all ${openIndex === index ? 'bg-gold text-white rotate-180' : 'text-gold'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-dark-text/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
