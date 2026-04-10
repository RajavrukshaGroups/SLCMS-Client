import { motion } from 'motion/react';
import { User, GraduationCap, Briefcase, Users, Quote } from 'lucide-react';
import founder from "../../assets/founder-edi.png"
import principal from "../../assets/principal.jpg"
import cleraMam from "../../assets/clera-mam.jpg"

export default function Administration() {
  const leaders = [
    {
      name: "Sri N. Ramachandraiah",
      role: "Founder, Chairman",
      icon: founder,
      type: "Founder"
    },
    {
      name: "Dr Joseph Ravi",
      role: "Principal",
      icon: principal,
      type: "Principal"
    },
    {
      name: "Smt. Clara Robert",
      role: "Administrator",
      icon: cleraMam,
      type: "Administrator"
    }
  ];

  return (
    <section id="administration" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-purple-600 tracking-widest uppercase mb-4">Administration</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-6">
            Management & Leadership
          </h3>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Key Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group text-center"
            >
              <div className="w-26 h-26 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
               <img src={leader.icon} alt={leader.name} className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-2">{leader.type}</div>
              <h4 className="text-xl font-bold text-zinc-900 mb-1">{leader.name}</h4>
              <p className="text-zinc-500 text-sm">{leader.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Principal's Message */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-purple-200">
                <Quote className="w-20 h-20 fill-current" />
              </div>
              <div className="relative z-10">
                <h4 className="text-3xl font-extrabold text-zinc-900 mb-6">Principal's Message</h4>
                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p className="font-medium text-zinc-900">
                    "Today, children in India are growing in a more challenging and demanding environment. The rate of change in every sphere is rapid; with the enhancement of knowledge exchange and technological development, the world is going to be flatter and faster."
                  </p>
                  <p>
                    The college curriculum is orientated to boost the scholastic, physical, emotional, social and cultural needs of the student. A strong requirement today is to simultaneously weave a firm moral fibre in the student’s personality. The key to this goal is to pursue a value-based education process.
                  </p>
                  <p>
                    The practice of value-orientated process acts as a nucleus around which all our college activities revolve. We are very conscious of the fact that emotional stability plays a very significant role in the healthy growth of the students.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-10 rounded-[40px] border border-zinc-100 shadow-sm space-y-6 text-zinc-600 leading-relaxed"
          >
            <p>
              One of the important tools to achieve this is through more interaction and one-to-one rapport with our students. This open and interactive approach also helps in discovering and strengthening inherent talent in the student in all fields. All our college activities are based on a participatory spirit that reduces the inhibition levels of the students and thus assists the students in becoming aware of their potential.
            </p>
            <p>
              The college atmosphere evokes a team spirit among the students and faculties with the conviction that ‘We Can Do It.’ The college motto ‘Discipline, Dedication, Distinction' constantly inspires us to achieve greater heights. We promote the joy and excitement of learning and also enjoy the pleasure of our achievements.
            </p>
            <p>
              Rooted with a mission of imparting education to all sections of society, Sri Lakshmi College of Management and Science was started under the Danavanthri Educational Trust in 2015. The college has expanded in all directions, attracting the students right from throughout the country.
            </p>
            <div className="pt-6 border-t border-zinc-100">
              <p className="text-sm italic">
                "The college encompasses knowledge, skills and values where teaching is done through experimental learning and discipline is interlaced by friendly mentoring."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Faculty & Staff */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
              alt="Faculty meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-lime-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-4">Faculty and Staff</h4>
                <p className="text-zinc-500 leading-relaxed">
                  The faculty members are highly qualified, and they are committed to providing quality education. Guest lecturers and seminars are held regularly by inviting eminent scholars, resourceful dignitaries, and teachers who are well versed in different fields.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
              <p className="text-zinc-600 text-sm leading-relaxed">
                Inviting highly qualified persons of eminence to enlighten the students on the healthcare, medical, paramedical and management industries as well as to develop and maintain good industry-institute relationships is also one of the best features of the curriculum activities, which will create job opportunities for their brilliant students.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
