import { motion } from 'motion/react';
import { Landmark, BookOpen, Microscope, Presentation, Users, Music } from 'lucide-react';
import srilakshmiDegreeClgBuilding from "../../assets/srilakshmi-degree-clg-building.png"

export default function College() {
  const facilities = [
    {
      title: "Classrooms",
      desc: "Designed with meticulous attention to detail and use of space, providing a world-class backdrop for learning.",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Seminar Halls",
      desc: "Equipped with modern audio-visual tools for guest lectures, workshops, and student presentations.",
      icon: <Presentation className="w-6 h-6" />
    },
    {
      title: "Learning Centres",
      desc: "Dedicated spaces for collaborative study and research, fostering a culture of academic inquiry.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Specialized Labs",
      desc: "State-of-the-art labs for science and computer studies, enabling hands-on experimental learning.",
      icon: <Microscope className="w-6 h-6" />
    }
  ];

  return (
    <section id="college" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-4">Campus Life</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-6">
            College Infrastructure
          </h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Good spacious environment the classrooms, libraries, labs, seminar halls and learning centres of Sri Lakshmi Group of Institutions have been designed with meticulous attention to detail and use of space, making it a truly a world-class backdrop against which students pursue higher studies.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {facilities.map((f, idx) => (
                <div key={idx} className="p-6 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2">{f.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-400/10 rounded-[40px] rotate-2" />
            <div className="relative rounded-4xl overflow-hidden shadow-2xl">
              <img 
                src={srilakshmiDegreeClgBuilding}
                alt="College Campus" 
                className="w-full h-125 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Library Section */}
        <div className="bg-white rounded-[40px] p-8 sm:p-16 border border-zinc-100 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-extrabold text-zinc-900">Library</h4>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                The spacious library houses a diverse collection of over 10,000 volumes apart from subscriptions to leading national and international periodicals and journals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Music className="w-3 h-3" />
                  </div>
                  <p className="text-zinc-500 text-sm">
                    The audio-visual section houses an extensive range of CDROMs, audio and video tapes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-3 h-3" />
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Serves as a rich workspace for students to do research and referencing in their respective course of study.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" 
                  alt="Library books" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" 
                  alt="Library study area" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
