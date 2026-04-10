import { motion } from 'motion/react';
import { Quote, Sparkles, Globe, BookOpenCheck, Award , Target ,CircleStar } from 'lucide-react';
import cleraMam from "../../assets/clera-mam.jpg"

export default function ChairmansMessage() {
  return (
    <section id="chairmans-message" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Message from the Leadership</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-6">
            Chairman's Message
          </h3>
          <p className="text-zinc-500 font-medium">Sri Lakshmi College of Management and Science</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Aspiration & Governing Body */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-10 rounded-[40px] border border-blue-100 relative"
            >
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <CircleStar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-4">ASPIRATION</h4>
              <p className="text-blue-800/80 leading-relaxed">
                Sri Lakshmi College of Management and Science started a glorious beginning in 2015, adopting the CBSC syllabus managed by the Dhanvantari Trust, adorning it as a jewel in the crown of the Sri Lakshmi Group of Institutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-900">The Governing Body</h4>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                The urge of our founders to tap education from the grass root level has paved way for the school which endeavours to bring about quality education in all the tiny tots nurture them with great care academics to mould the youth of today into responsibility future citizens of Indian and the worked at large, to realize the dreams come true of Global Education to create the <span className="font-bold text-blue-600">"Vishwa kutumbakam"</span>.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Mission & Signature */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 text-zinc-100 -z-10">
                <Quote className="w-32 h-32 fill-current" />
              </div>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                  Rooted with a mission of imparting education to all sections of society, Sri Lakshmi College of Management and Science started under the Danavanthri Educational Trust. The college has expanded in all directions, attracting the students right from Nepal to Kanyakumari and from Mizoram to Gujarat.
                </p>
                <p>
                  This is because the college encompasses knowledge, skills and values where teaching is done through experimental learning and discipline is interlaced by friendly mentoring. The college also aims at providing exemplary education and professionals to the dynamic and complex global society. Our curriculum, teaching and services demonstrate that we value the diverse profiles of our learners.
                </p>
                <div className="flex gap-4 items-start bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
                  <BookOpenCheck className="w-18 h-18 text-blue-600 mt-1" />
                  <p className="text-sm">
                    The college also penetrates through research, projects, guest lectures, seminars and workshops, which fortifies the students to emerge as functional successes, ready to take on career challenges in all the fields.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Signature Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-10 border-t border-zinc-100 flex items-center gap-6"
            >
              <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center  justify-center overflow-hidden text-white shadow-lg">
                <img src={cleraMam} alt="Clara Mam" className="w-full h-60 pt-12  object-cover rounded-full" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-zinc-900">Smt. Clara Robert</h5>
                <p className="text-blue-600 font-semibold">Vice Principal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
