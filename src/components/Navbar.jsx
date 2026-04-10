//main navbar

// import React, { useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { GraduationCap, Menu, X, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { cn } from '../lib/utils';
// import SlCMSLogo from '../assets/slcms_logo.webp'


// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About Us', path: '/about' },
//   { name: 'IAS/KAS', path: '/iaskas' },
//   { name: 'Courses', path: '/courses' },
//   // { name: 'Admissions', path: '/admissions' },
//   { name: 'Gallery', path: '/gallery' },
//   { name: 'Placements', path: '/placements' },
//   { name: 'E-Library', path: '/e-library' },
//   { name: 'AICTE', path: '/aicte' },
//   { name: 'Contact', path: '/contact' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [scrolled, setScrolled] = React.useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

// // useEffect(() => {
// //   const handleScroll = () => {
// //     const triggerPoint = window.innerHeight; // 100vh
// //     setScrolled(window.scrollY > triggerPoint);
// //   };

// //   window.addEventListener('scroll', handleScroll);
// //   return () => window.removeEventListener('scroll', handleScroll);
// // }, []);

//   return (
//     // <></>
//     <nav
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
//         scrolled ? 'glass-nav py-3' : 'bg-transparent py-2 md:py-6' //: 'bg-transparent py-6
//       )}
//     >
   
//     {/* <nav
//   className={cn(
//     'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
//     scrolled
//       ? 'translate-y-0 opacity-100 glass-nav py-3'
//       : '-translate-y-full opacity-0 pointer-events-none'
//   )}
// > */}
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 group">
//           {/* <div className="w-12 h-12 teal-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
//             <GraduationCap className="text-white w-7 h-7" />

//           </div> */}
//           <img src={SlCMSLogo} className='w-12 h-15'/>
//           <div className="flex flex-col">
//             <span className="font-display text-xl font-bold tracking-wider text-primary leading-none">SLCMS</span>
//             <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">Academic Excellence</span>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={cn(
//                 'relative text-sm font-medium tracking-wide transition-colors duration-300 py-2',
//                  scrolled ? 'text-slate-600  hover:text-primary' : 'text-white hover:text-primary', //text-slate-600
//                 //location.pathname === link.path ? 'text-primary' : 'text-[#ffffff] hover:text-primary' //text-slate-600
//               )}
//             >
//               {link.name}
//               {location.pathname === link.path && (
//                 <motion.div
//                   layoutId="nav-underline"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
//                 />
//               )}
//             </Link>
//           ))}
//           <Link
//             to="/admissions"
//             className="px-6 py-2.5 teal-gradient text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
//           >
//             Apply Now
//             <ChevronRight className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="lg:hidden p-2 text-primary"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-4"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   'text-lg font-medium py-2 border-b border-slate-50',
//                   location.pathname === link.path ? 'text-primary' : 'text-slate-600'
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//               to="/admissions"
//               onClick={() => setIsOpen(false)}
//               className="mt-4 px-6 py-3 teal-gradient text-white rounded-xl text-center font-semibold"
//             >
//               Apply Now
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { cn } from '../lib/utils';
// import SlCMSLogo from '../assets/slcms_logo.png';

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About Us', path: '/about' },
//   { name: 'IASKAS', path: '/iaskas' },
//   { name: 'Courses', path: '/courses' },
//   { name: 'Gallery', path: '/gallery' },
//   { name: 'Placements', path: '/placements' },
//   { name: 'E-Library', path: '/e-library' },
//   { name: 'AICTE', path: '/aicte' },
//   { name: 'Contact', path: '/contact' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const location = useLocation();

//   return (
//     <nav className="sticky top-0 z-50 transition-all duration-500 glass-nav py-3">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 group">
//           <img src={SlCMSLogo} className="w-12 h-15" alt="logo" />
//           <div className="flex flex-col">
//             <span className="font-display text-xl font-bold tracking-wider text-primary leading-none">
//               SLCMS
//             </span>
//             <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
//               Academic Excellence
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={cn(
//                 'relative text-sm font-medium tracking-wide transition-colors duration-300 py-2',
//                 location.pathname === link.path
//                   ? 'text-primary'
//                   : 'text-slate-600 hover:text-primary'
//               )}
//             >
//               {link.name}

//               {location.pathname === link.path && (
//                 <motion.div
//                   layoutId="nav-underline"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
//                 />
//               )}
//             </Link>
//           ))}

//           <Link
//             to="/admissions"
//             className="px-6 py-2.5 teal-gradient text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
//           >
//             Apply Now
//             <ChevronRight className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="lg:hidden p-2 text-primary"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-4"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={cn(
//                   'text-lg font-medium py-2 border-b border-slate-50',
//                   location.pathname === link.path
//                     ? 'text-primary'
//                     : 'text-slate-600'
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               to="/admissions"
//               onClick={() => setIsOpen(false)}
//               className="mt-4 px-6 py-3 teal-gradient text-white rounded-xl text-center font-semibold"
//             >
//               Apply Now
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


// import React from 'react';
// import { Lock, ChevronDown, Search, ArrowUpRight } from 'lucide-react';
// import SlCMSLogo from '../assets/slcms_logo.webp'

// const Navbar = () => {
//   return (
//     <nav id="main-navbar" className="w-full bg-white border-b border-gray-200 font-sans">
//       <div className="max-w-[1440px] mx-auto flex h-full">
//         {/* Logo Section */}
//         <div id="logo-section" className="flex items-center gap-3 px-8 py-3 border-r border-gray-100 min-w-[280px]">
//           <div className="text-[#E67E22]">
//             {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
//               <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//             </svg> */}
//             <img src={SlCMSLogo} alt="SLCMS Logo" className="w-20 h-23" />
//           </div>
//           <div className="flex flex-col leading-tight">
//             <span className="text-[11px] font-bold tracking-wider text-gray-800 uppercase">Sri Lakshmi College of</span>
//             <span className="text-[11px] font-bold tracking-wider text-gray-800 uppercase">Management & Science</span>
//             <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase">Bangalore</span>
//           </div>
//         </div>

//         {/* Right Content Area */}
//         <div className="flex flex-col flex-1">
//           {/* Top Row */}
//           <div id="top-nav-row" className="flex items-center justify-between border-b border-gray-100 h-1/2">
//             <div className="flex items-center gap-8 px-8">
//               <a href="#" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">Library</a>
//               <a href="#" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">Jobs</a>
//               <a href="#" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">Alumni</a>
              
//               <div className="flex items-center gap-3 ml-4">
//                 <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full text-[13px] text-gray-700 hover:bg-gray-100 transition-colors">
//                   Staff <Lock size={12} className="text-[#0000ffde]" />
//                 </button>
//                 <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full text-[13px] text-gray-700 hover:bg-gray-100 transition-colors">
//                   Faculties <ChevronDown size={14} className="text-gray-400" />
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center h-full">
//               <div className="flex items-center gap-2 px-6 border-l border-gray-100 h-full  bg-gold text-black relative overflow-hidden z-10 px-6 py-2 
//                 before:content-[''] before:absolute before:top-0 before:left-[-100%] 
//                 before:w-full before:h-full before:bg-primary before:transition-all 
//                 before:duration-400 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-[-1] 
//                 hover:before:left-0 hover:text-white  transition-colors ">
//                 {/* <Search size={18} className="text-primary" />
//                 <input 
//                   type="text" 
//                   placeholder="Search here..." 
//                   className="bg-transparent border-none outline-none text-[13px] w-48 placeholder:text-gray-400"
//                 /> */}
//                 <a 
//                 //key={item.name}
//                 href="/contact" 
//                 className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors`}
//               >
//                 Contact
//                 {/* <ChevronDown size={14} className={item.active ? 'text-[#7b0af4]' : 'text-gray-400'} /> */}
//               </a>
//               </div>
//               {/* bg-primary text-white text-[14px] font-medium hover:bg-gold hover:text-black transition-colors */}
//               <button id="login-button" className="flex items-center gap-3 px-10 h-full bg-primary text-white relative overflow-hidden z-10 px-6 py-2 
//                 before:content-[''] before:absolute before:top-0 before:left-[-100%] 
//                 before:w-full before:h-full before:bg-gold before:transition-all 
//                 before:duration-400 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-[-1] 
//                 hover:before:left-0 hover:text-black">
//                 Apply Now <ArrowUpRight size={16} />
//               </button>
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div id="bottom-nav-row" className="flex items-center gap-8 px-8 h-1/2">
//             {[
//               { name: 'About', active: true },
//               { name: 'IAS/KAS' },
//               { name: 'Courses' },
//               { name: 'Gallery' },
//               { name: 'Placements' },
//               { name: 'AICTE' }
//             ].map((item) => (
//               <a 
//                 key={item.name}
//                 href="#" 
//                 className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors ${
//                   item.active ? 'text-primary' : 'text-gray-700 hover:text-primary'
//                 }`}
//               >
//                 {item.name}
//                 {/* <ChevronDown size={14} className={item.active ? 'text-[#7b0af4]' : 'text-gray-400'} /> */}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Lock, ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SlCMSLogo from '../assets/slcms_logo.webp'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { 
      name: 'About', href: '/about', 
      active: true,
      dropdown: [
        { name: 'Overview', href: '/about/overview' },
        { name: 'Administration', href: '/about/administration' },
        { name: "Chairman's Message", href: '/about/chairmans-message' },
        { name: 'College', href: '/about/college' }
      ]
    },
    { name: 'IAS/KAS', href: '/iaskas' },
    { 
      name: 'Courses' , href: '/courses',
      dropdown: [
        { name: 'B.com', href: '/course/bcom' },
        { name: 'BBA', href: '/course/bba' },
        { name: 'BCA', href: '/course/bca' },
        { name: 'B.Sc', href: '/course/bsc-cbz' },
        { name: 'BA', href: '/course/ba-journalism' },
        { name: 'M.Com', href: '/course/mcom' }
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Placements', href: '/placements' },
    { 
      name: 'AICTE', href: '/aicte',
      dropdown: [
        { name: 'LOA', href: '#' },
        { name: 'AICTE Mandatory Disclosure', href: '#' },
        { name: 'Student and Faculty Feedback', href: '#' }
      ]
    }
  ];

  return (
    <nav id="main-navbar" className="w-full bg-white border-b border-gray-200 font-sans sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row h-auto lg:h-24">
        {/* Logo Section */}
        
        <div id="logo-section" className="flex items-center justify-between lg:justify-start gap-3 px-4 lg:px-8 py-3 border-b lg:border-b-0 lg:border-r border-gray-100 min-w-full lg:min-w-[320px]">
          <a href="/">
            <div className="flex items-center gap-3">
              <div className="text-gold">
                {/* Fallback logo if asset is missing */}
                {/* <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gold text-xl">SL</span>
                  
                </div> */}
                <img src={SlCMSLogo} alt="SLCMS Logo" className="w-20 h-23 object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] lg:text-[11px] font-bold tracking-wider text-gray-800 uppercase">Sri Lakshmi College of</span>
                <span className="text-[10px] lg:text-[11px] font-bold tracking-wider text-gray-800 uppercase">Management & Science</span>
                <span className="text-[10px] lg:text-[11px] font-bold tracking-wider text-gray-500 uppercase">Bangalore</span>
              </div>
            </div>
          </a>
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */} 
        {/* flex-1 */}
        <div className="hidden lg:flex flex-col flex-1"> 
          {/* Top Row */}
          <div id="top-nav-row" className="flex items-center justify-between border-b border-gray-100 h-1/2">
          
            <div className="flex items-center gap-8 px-8">
              <a href="#" className="text-[13px] text-gray-600 hover:text-primary transition-colors">E-Library</a>
              <a href="#" className="text-[13px] text-gray-600 hover:text-primary transition-colors">Jobs</a>
              <a href="#" className="text-[13px] text-gray-600 hover:text-primary transition-colors">Alumni</a>
              
              <div className="flex items-center gap-3 ml-4">
                <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full text-[13px] text-gray-700 hover:bg-gray-100 transition-colors">
                  Staff <Lock size={12} className="text-primary" />
                </button>
                <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full text-[13px] text-gray-700 hover:bg-gray-100 transition-colors">
                  Faculties <ChevronDown size={14} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex items-center h-full">
              <div className="flex items-center h-full">
                <a 
                  href="/contact" 
                  className="flex items-center gap-2 px-8 h-full bg-gold text-white relative overflow-hidden z-10 
                    before:content-[''] before:absolute before:top-0 before:left-[-100%] 
                    before:w-full before:h-full before:bg-primary before:transition-all 
                    before:duration-400 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-[-1] 
                    hover:before:left-0 hover:text-white transition-colors text-[14px] font-medium"
                >
                  Contact
                </a>
              </div>
              <a 
                id="login-button" 
                href="/admissions"
                className="flex items-center gap-3 px-10 h-full bg-primary text-white relative overflow-hidden z-10 
                  before:content-[''] before:absolute before:top-0 before:left-[-100%] 
                  before:w-full before:h-full before:bg-gold before:transition-all 
                  before:duration-400 before:ease-[cubic-bezier(0.25,1,0.5,1)] before:z-[-1] 
                  hover:before:left-0 hover:text-black transition-colors text-[14px] font-medium"
              >
                Apply Now <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div id="bottom-nav-row" className="flex items-center gap-8 px-8 h-1/2">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors h-full ${
                    item.active ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-xl py-2 z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {/* Main Links */}
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <a
                        href={item.href}
                        onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-[14px] font-medium transition-colors ${
                          item.active ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        {item.dropdown && <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                      </a>
                      
                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {item.dropdown && activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50/50 rounded-lg ml-4 mt-1"
                          >
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-2.5 text-[13px] text-gray-600 hover:text-primary"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <hr className="border-gray-100" />

                {/* Secondary Links */}
                <div className="flex flex-wrap gap-4 px-2">
                  <a href="#" className="text-[13px] text-gray-600">E-Library</a>
                  <a href="#" className="text-[13px] text-gray-600">Jobs</a>
                  <a href="#" className="text-[13px] text-gray-600">Alumni</a>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-[13px] text-gray-700">
                      Staff <Lock size={12} className="text-primary" />
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-[13px] text-gray-700">
                      Faculties <ChevronDown size={14} className="text-gray-400" />
                    </button>
                  </div>
                  <a 
                    href="/contact" 
                    className="w-full py-3 bg-gold text-white text-center rounded-lg font-medium"
                  >
                    Contact
                  </a>
                  <a
                    href="/admissions"
                    className="w-full py-3 bg-primary text-white text-center rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    Apply Now <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
