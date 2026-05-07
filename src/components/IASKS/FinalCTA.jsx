import { motion } from "motion/react";
import { ArrowRight, MessageCircle, CheckCircle2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();

  const highlights = [
    "3-Year Integrated Program",
    "Expert Faculty & Mentorship",
    "Daily Practice & Test Series",
    "Online + Offline Learning",
  ];

  const stats = [
    { label: "Students Trained", value: "500+" },
    { label: "Success Rate", value: "90%" },
    { label: "Years of Excellence", value: "10+" },
  ];

  return (
    <section className="px-2 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-10 md:p-14 rounded-[1rem] border border-black/5 bg-white/80"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE (CTA) */}
            <div>
              <span className="px-5 py-2 rounded-full border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-6 inline-block">
                Limited Seats Available
              </span>

              <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight text-electric-blue">
                Don’t Wait Until Graduation. <br />
                <span className="text-gold">Start Your Journey Now.</span>
              </h2>

              <p className="text-dark-text/60 mb-8 text-sm md:text-base leading-relaxed">
                Get structured guidance, expert mentorship, and the right strategy
                to crack UPSC/KPSC with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/admissions")}
                  className="px-6 py-4 bg-gold text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-4 border border-black/10 rounded-full text-dark-text flex items-center justify-center gap-2 hover:bg-black/5 transition"
                >
                  Talk to Counsellor <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE (NEW CONTENT) */}
            <div className="space-y-6">

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-semibold text-zinc-900 mb-3">
                  Why Choose Us
                </h4>
                <ul className="space-y-2">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-lime-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/5">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-semibold text-electric-blue">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-sm text-zinc-500 pt-2">
                <Star className="w-4 h-4 text-gold" />
                Trusted by hundreds of aspirants across Karnataka
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}