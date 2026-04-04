import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import SlCMSLogo from '../assets/slcms_logo.webp'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-pattern-academic" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              {/* <div className="w-12 h-12 teal-gradient rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white w-7 h-7" />
              </div> */}
               <img src={SlCMSLogo} className='w-12 h-15'/>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-white leading-none">SLCMS</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Academic Excellence</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering minds and shaping futures through quality education and innovative learning environments. Sri Lakshmi College of Management & Science is committed to excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-accent" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Courses', 'Admissions', 'Placements', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-accent" />
              Resources
            </h4>
            <ul className="space-y-4">
              {['E-Library', 'AICTE Info', 'Feedback', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-accent group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-accent" />
              Get In Touch
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-slate-400">
                  123 Academic Square, Knowledge Park,<br />
                  Bangalore, Karnataka - 560001
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-slate-400">+91 80 1234 5678</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-slate-400">info@slcms.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sri Lakshmi College of Management & Science. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
