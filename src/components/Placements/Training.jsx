import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Lightbulb, 
  Presentation, 
  UserCheck, 
  Handshake, 
  FileText, 
  MessageSquare, 
  TrendingUp 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Presentation Skills", icon: Presentation },
  { name: "Personal Grooming", icon: UserCheck },
  { name: "Interview Handling", icon: Handshake },
  { name: "Resume Building", icon: FileText },
  { name: "Business Communication", icon: MessageSquare },
  { name: "Positive Career Mindset", icon: TrendingUp },
];

export default function Training() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".skill-card");
    const iconContainers = gsap.utils.toArray(".skill-icon-inner");
    
    // Initial setup for drawing effect
    const paths = gsap.utils.toArray(".skill-icon-inner svg path, .skill-icon-inner svg circle, .skill-icon-inner svg rect");
    gsap.set(paths, { strokeDasharray: 100, strokeDashoffset: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(".training-title", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(cards, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(iconContainers, 
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.4"
    )
    .to(paths, {
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.02,
      ease: "power2.inOut"
    }, "-=0.2");

    // Persistent floating animation
    iconContainers.forEach((icon, i) => {
      gsap.to(icon, {
        y: -5,
        rotation: i % 2 === 0 ? 5 : -5,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

  }, { scope: containerRef });

  const onMouseEnter = (index) => {
    const icon = containerRef.current?.querySelectorAll(".skill-icon-inner")[index];
    if (icon) {
      gsap.to(icon, {
        scale: 1.2,
        rotation: 360,
        duration: 0.6,
        ease: "back.out(1.7)",
        overwrite: "auto"
      });
    }
  };

  const onMouseLeave = (index) => {
    const icon = containerRef.current?.querySelectorAll(".skill-icon-inner")[index];
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  return (
    <section id="training" ref={containerRef} className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background narrative text */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[25vw] font-display font-black text-primary leading-none">
          SKILLS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 training-title gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-poppins font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Professional Development
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
              Training & <br />
              <span className="text-accent italic">Development</span>
            </h2>
          </div>
          <p className="text-gray-500 font-sans text-lg max-w-md leading-relaxed border-l-2 border-accent pl-6">
            Our comprehensive training modules are designed to bridge the gap between academic knowledge and corporate excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              className="skill-card group p-10 rounded-3xl bg-gray-50 border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 mb-8 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <div className="skill-icon-inner flex items-center justify-center w-full h-full">
                  <skill.icon className="w-8 h-8 block" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                {skill.name}
              </h3>
              <div className="w-8 h-0.5 bg-accent/30 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
          
          {/* Decorative CTA card */}
          <div className="skill-card p-10 rounded-3xl bg-primary flex flex-col items-start justify-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <p className="font-display italic text-2xl mb-6 text-accent relative z-10">Ready to level up?</p>
            <a href="/contact">
            <button className="px-8 py-3 bg-accent text-primary font-bold rounded-full text-sm hover:bg-white transition-all duration-300 relative z-10">
              Join Workshop
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
