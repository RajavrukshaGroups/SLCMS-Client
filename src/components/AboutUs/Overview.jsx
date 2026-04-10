import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldCheck, Users2, Landmark, BookOpen, Laptop, Trophy } from 'lucide-react';

export default function Overview() {
  const sections = [
    {
      title: "VISION",
      content: "Sri Lakshmi College of Management and Science of Educational Institutions are committed to the students' success and excellence in teaching. We empower the students to enrich the social, cultural and economic vitality. We believe that education is for all.",
      icon: <Target className="w-8 h-8 text-lime-600" />,
      bgColor: "bg-lime-50"
    },
    {
      title: "MISSION",
      content: "Sri Lakshmi College of Management and Science of Educational Institutions are committed to the students' success and excellence in teaching. We empower the students to enrich the social, cultural and economic vitality. We believe that education is for all.",
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-purple-50"
    }
  ];

  const features = [
    {
      title: "Discipline and Values",
      content: "We at Sri Lakshmi Institutions believe that if we are to succeed in the task of nation-building, our youth need to develop a sense of values and discipline which will form the basis for their approach to everything around them, making them responsible and sensitive citizens. Instilling a deep sense of values and discipline is a continuous process and an integral part of all activities at the college.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Staff",
      content: "Staffs are involved in individual students' counselling committee. Staff in our college are more concentrated on innovative teaching tools and technology. Staff gives more preference and suggestions for the individual career growth of students. Srilakshmi has a department with vice-experienced staff in science and commerce.",
      icon: <Users2 className="w-6 h-6" />
    }
  ];

  const infrastructure = [
    { title: "Vast Auditorium", icon: <Landmark className="w-5 h-5" /> },
    { title: "Smart Board Classes", icon: <Laptop className="w-5 h-5" /> },
    { title: "Modern Library", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Business & Science Labs", icon: <Laptop className="w-5 h-5" /> },
    { title: "Computer Lab", icon: <Laptop className="w-5 h-5" /> },
    { title: "Indoor & Outdoor Sports", icon: <Trophy className="w-5 h-5" /> }
  ];

  return (
    <section id="overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-lime-600 tracking-widest uppercase mb-4">Overview</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-6">
            Sri Lakshmi College of <br /> Management and Science
          </h3>
          <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full" />
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`${section.bgColor} p-10 rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="mb-6">{section.icon}</div>
              <h4 className="text-2xl font-bold text-zinc-900 mb-4">{section.title}</h4>
              <p className="text-zinc-600 leading-relaxed italic">
                "{section.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Discipline & Staff */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4">{feature.title}</h4>
                  <p className="text-zinc-500 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 p-10 sm:p-12 rounded-[40px] border border-zinc-100"
          >
            <h4 className="text-2xl font-bold text-zinc-900 mb-8">Infrastructure</h4>
            <p className="text-zinc-500 mb-10 leading-relaxed">
              The Srilakshmi Group of Institutions has an excellent environment consisting of a vast auditorium, smart board classes and other necessary facilities. Classrooms offered by Srilakshmi are very spacious and well-maintained.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {infrastructure.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100">
                  <div className="text-lime-600">{item.icon}</div>
                  <span className="text-sm font-semibold text-zinc-700">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
