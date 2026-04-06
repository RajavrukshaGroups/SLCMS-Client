import { motion } from "motion/react";
import { BookOpen, Award, Newspaper, Edit3, Users,Building  } from "lucide-react";

const courses = [
  {
    icon: <BookOpen className="w-8 h-8 text-gold" />,
    title: "Foundation Course",
    bullets: ["NCERT Basics", "Subject Introduction", "Core Concepts"]
  },
  {
    icon: <Award className="w-8 h-8 text-electric-blue" />,
    title: "Advanced Preparation",
    bullets: ["General Studies Papers 1-4","SA Preparation" ,"Optional Subjects"]
  },
  {
    icon: <Newspaper className="w-8 h-8 text-gold" />,
    title: "Current Affairs",
    bullets: ["Daily News Analysis",  "Editorial Discussions","Monthly Magazines",]
  },
  {
    icon: <Edit3 className="w-8 h-8 text-electric-blue" />,
    title: "Answer Writing",
    bullets: ["Mains Answer Writing Practice", "Answer Writing Feedback Sessions"] //, "Structure Building"
  },
  {
    icon: <Users className="w-8 h-8 text-gold" />,
    title: "Mock Tests & Interview",
    bullets: ["Prelims Test Series", "Mains Test Series", "Personality Test Guidance"]
  },
   {
    icon: <Building className="w-8 h-8 text-gold" />,
    title: "Facilities",
    bullets: ["Study Materials", "24/7 Library Access", "Hostel Facility"]
  }
];

export default function CourseOverview() {
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
            Comprehensive <span className="text-gold">Course Overview</span>
          </h2>
          <p className="text-dark-text/50 max-w-xl mx-auto">
            A structured path to success, designed by experts for aspiring civil servants.
          </p>
        </motion.div>

        <div className="relative flex flex-wrap justify-center gap-10">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent hidden lg:block" />

          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative z-10 glass p-8 rounded-3xl w-full md:w-[300px] group transition-all hover:bg-gold/5 hover:border-gold/30 border-black/5"
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/5 w-fit group-hover:bg-gold/10 transition-colors">
                {course.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors text-electric-blue">
                {course.title}
              </h3>
              <ul className="space-y-3">
                {course.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-sm text-dark-text/40 flex items-center gap-2 group-hover:text-dark-text/60 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-gold" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
