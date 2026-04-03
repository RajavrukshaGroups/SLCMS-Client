import { motion } from "motion/react";
import { Search } from "lucide-react";

const materials = [
  { title: "NCERT Summary Notes", category: "Foundation", image: "https://picsum.photos/seed/notes1/600/800" },
  { title: "Current Affairs Monthly", category: "Updates", image: "https://picsum.photos/seed/notes2/600/400" },
  { title: "Mains Answer Writing", category: "Practice", image: "https://picsum.photos/seed/notes3/600/600" },
  { title: "Prelims Test Series", category: "Assessment", image: "https://picsum.photos/seed/notes4/600/500" },
  { title: "Ethics Case Studies", category: "Advanced", image: "https://picsum.photos/seed/notes5/600/700" },
  { title: "Geography Atlas", category: "Resources", image: "https://picsum.photos/seed/notes6/600/450" }
];

export default function StudyMaterials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black/[0.01]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-electric-blue">
            Premium <span className="text-gold">Study Materials</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto">
            Get exclusive access to our meticulously researched notes and practice papers.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group glass rounded-[2rem] overflow-hidden border-black/5 hover:border-gold/30 transition-all duration-500 break-inside-avoid bg-white/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 group-hover:blur-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-4 rounded-full glass bg-gold/20 text-gold mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <span className="px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-gold mb-2 bg-white">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-electric-blue text-center px-6">
                  {item.title}
                </h3>
              </div>

              <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-500">
                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-electric-blue">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
