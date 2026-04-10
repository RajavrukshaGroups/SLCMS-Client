import { Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function Accreditations() {
  const awards = [
    {
      id: "01",
      title: "National Medal of Computer Science",
      desc: "Conferred by the Government of India, this prestigious honour recognises individuals and institutions for their exceptional contributions to science, technology, and innovation, reflecting a commitment to excellence and national development.",
      highlight: true
    },
    {
      id: "02",
      title: "National Humanities Medal",
      desc: "Similar to the National Medal of Science, this medal is awarded for outstanding contributions to the humanities, including history, literature, philosophy, and cultural studies",
      highlight: false
    },
    {
      id: "03",
      title: "National Medal of Technology and Innovation",
      desc: "Presented by the President of India, this prestigious medal honours individuals and institutions for their significant contributions to the advancement of technology, fostering innovation and supporting the nation’s progress.",
      highlight: false
    },
    {
      id: "04",
      title: "MacArthur Fellowship",
      desc: "Four faculty members and two students have received this prestigious grant to support their creative work.",
      highlight: false
    },
    {
      id: "05",
      title: "Pulitzer Prizes",
      desc: "Universities with exceptional journalism programs may see their faculty or students awarded Pulitzer Prizes for outstanding achievements in journalism, literature, and musical composition",
      highlight: false
    },
    {
      id: "06",
      title: "Association of American Universities (AAU) Awards",
      desc: "Awarded in 2015 for exceptional contributions to research, education, or public service",
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-zinc-900">
            Accreditations and <br /> recognitions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className={`p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
                award.highlight 
                ? 'bg-lime-50 border-lime-200' 
                : 'bg-white border-zinc-100 hover:border-lime-200'
              }`}
            >
              <div className="text-sm font-bold mb-4 flex items-center gap-2">
                <span className={award.highlight ? 'text-lime-700' : 'text-zinc-400'}>{award.id}</span>
                <span className="text-zinc-900">{award.title}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
