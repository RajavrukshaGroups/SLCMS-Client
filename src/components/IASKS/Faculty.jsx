import { motion } from "motion/react";
import { useRef } from "react";

const faculty = [
  {
    name: "Dr. Arvind Kumar",
    tagline: "Former IAS Officer | Ethics & Polity Expert",
    image: "https://picsum.photos/seed/faculty1/400/400"
  },
  {
    name: "Ms. Priya Sharma",
    tagline: "UPSC Topper (AIR 45) | Geography Specialist",
    image: "https://picsum.photos/seed/faculty2/400/400"
  },
  {
    name: "Mr. Rajesh Varma",
    tagline: "15+ Years Experience | History & Culture",
    image: "https://picsum.photos/seed/faculty3/400/400"
  },
  {
    name: "Dr. Sneha Reddy",
    tagline: "KAS Topper | Economics & Current Affairs",
    image: "https://picsum.photos/seed/faculty4/400/400"
  },
  {
    name: "Mr. Amit Singh",
    tagline: "CSAT Expert | Logical Reasoning & Aptitude",
    image: "https://picsum.photos/seed/faculty5/400/300"
  }
];

export default function Faculty() {
  const scrollRef = useRef(null);

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
            Learn from the <span className="text-gold text-glow">Best Minds</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto">
            Our faculty members are not just teachers; they are mentors who have walked the path.
          </p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[300px] md:w-[250px] glass p-6 rounded-[2.5rem] border-black/5 snap-center group relative overflow-hidden bg-white/50"
            >
              <div className="relative mb-6 overflow-hidden rounded-full aspect-square border-4 border-black/5 group-hover:border-gold/30 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest text-white bg-gold">View Profile</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors text-electric-blue">
                  {member.name}
                </h3>
                <p className="text-sm text-dark-text/40 leading-relaxed group-hover:text-dark-text/60 transition-colors">
                  {member.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
