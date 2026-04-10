// import React, { useState } from 'react';
// import { 
//   Search, 
//   Phone, 
//   Mail, 
//   MapPin, 
//   GraduationCap, 
//   Award, 
//   Calendar, 
//   ArrowRight, 
//   CheckCircle, 
//   Send, 
//   FileText, 
//   Briefcase, 
//   Cloud, 
//   MessageCircle, 
//   Globe,
//   X,
//   Menu
// } from 'lucide-react';

// // Course Data
// const coursesData = [
//   { 
//     id: 1, 
//     title: "B.Com", 
//     category: "ug", 
//     duration: "3 Years", 
//     desc: "Bachelor of Commerce with specialisation in Finance, Taxation & Accounting. Industry-ready curriculum with GST training.", 
//     img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop", 
//     badge: "Most Popular",
//     color: "from-blue-500 to-indigo-600"
//   },
//   { 
//     id: 2, 
//     title: "BBA", 
//     category: "ug", 
//     duration: "3 Years", 
//     desc: "Bachelor of Business Administration — Leadership, Marketing, HR & Entrepreneurship focus. Real-world case studies.", 
//     img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop", 
//     badge: "Top Rated",
//     color: "from-emerald-500 to-teal-600"
//   },
//   { 
//     id: 3, 
//     title: "BCA", 
//     category: "ug", 
//     duration: "3 Years", 
//     desc: "Bachelor of Computer Applications. Cloud computing, programming, and modern software development.", 
//     img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop", 
//     badge: "Tech Driven",
//     color: "from-purple-500 to-pink-600"
//   },
//   { 
//     id: 4, 
//     title: "B.Sc (CBZ)", 
//     category: "ug", 
//     duration: "3 Years", 
//     desc: "Bachelor of Science in Chemistry, Botany, Zoology. Advanced lab infrastructure & research mentorship.", 
//     img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop", 
//     badge: "Research Focus",
//     color: "from-amber-500 to-orange-600"
//   },
//   { 
//     id: 5, 
//     title: "BA (Journalism)", 
//     category: "ug", 
//     duration: "3 Years", 
//     desc: "Bachelor of Arts in Journalism & Mass Communication. Media training, digital storytelling.", 
//     img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b53?w=600&h=400&fit=crop", 
//     badge: "Creative",
//     color: "from-rose-500 to-red-600"
//   },
//   { 
//     id: 6, 
//     title: "M.Com", 
//     category: "pg", 
//     duration: "2 Years", 
//     desc: "Master of Commerce — Advanced Financial Management, Corporate Strategy & Analytics.", 
//     img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop", 
//     badge: "Postgraduate",
//     color: "from-slate-600 to-gray-800"
//   }
// ];

// // Value Added Courses
// const valueAddedCourses = [
//   { name: "GST Certification", icon: FileText, desc: "Practical training for B.Com students", color: "bg-blue-50 text-blue-600" },
//   { name: "Project Management", icon: Briefcase, desc: "For BBA - Agile & PMP essentials", color: "bg-emerald-50 text-emerald-600" },
//   { name: "Cloud Computing", icon: Cloud, desc: "AWS & Azure fundamentals (BCA)", color: "bg-purple-50 text-purple-600" },
//   { name: "Communication Skills", icon: MessageCircle, desc: "Professional etiquettes & public speaking", color: "bg-amber-50 text-amber-600" },
//   { name: "Foreign Language", icon: Globe, desc: "German / French / Japanese basics", color: "bg-rose-50 text-rose-600" }
// ];

// // Filter Chips Component
// const FilterChip = ({ label, value, active, onClick }) => (
//   <button
//     onClick={() => onClick(value)}
//     className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//       active 
//         ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
//         : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
//     }`}
//   >
//     {label}
//   </button>
// );

// // Course Card Component
// const CourseCard = ({ course, onExplore }) => (
//   <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
//     <div className="relative h-52 overflow-hidden">
//       <img 
//         src={course.img} 
//         alt={course.title} 
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />
//       <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
//         {course.badge}
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </div>
    
//     <div className="p-6">
//       <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
//         {course.category === 'ug' ? 'Undergraduate' : 'Postgraduate'}
//       </div>
//       <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
//         {course.title}
//       </h3>
//       <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
//         {course.desc}
//       </p>
      
//       <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//         <div className="flex items-center gap-2 text-gray-500 text-sm">
//           <Calendar size={16} />
//           <span>{course.duration}</span>
//         </div>
//         <button 
//           onClick={() => onExplore(course.title)}
//           className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group/btn hover:gap-3 transition-all"
//         >
//           Explore <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
//         </button>
//       </div>
//     </div>
//   </div>
// );

// // Value Card Component
// const ValueCard = ({ item }) => (
//   <div className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer">
//     <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//       <item.icon size={28} />
//     </div>
//     <h4 className="font-bold text-gray-800 mb-2">{item.name}</h4>
//     <p className="text-gray-500 text-sm">{item.desc}</p>
//   </div>
// );

// // Main App Component
// const CourseCatalog = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [toastMessage, setToastMessage] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     altPhone: '',
//     course: ''
//   });

//   const showToast = (message) => {
//     setToastMessage(message);
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   const handleExplore = (courseName) => {
//     showToast(`✨ Explore more about ${courseName}! Schedule a free consultation.`);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.email || !formData.phone || !formData.course) {
//       showToast('⚠️ Please fill all required fields.');
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       showToast('❌ Enter a valid email address.');
//       return;
//     }
//     if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
//       showToast('📞 Enter a valid 10-digit phone number.');
//       return;
//     }
//     showToast(`🎉 Thank you ${formData.fullName}! We'll contact you about ${formData.course}.`);
//     setFormData({ fullName: '', email: '', phone: '', altPhone: '', course: '' });
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Filter logic
//   const filteredCourses = coursesData.filter(course => {
//     const matchesFilter = activeFilter === 'all' || course.category === activeFilter;
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           course.desc.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
//       {/* Toast Notification */}
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-300">
//           <span>{toastMessage}</span>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse" />
//         <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        
//         <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
//           <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
//             <GraduationCap size={16} />
//             Excellence in Education since 2003
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//             <span className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
//               Shape Your Future
//             </span>
//             <br />
//             with Premium Courses
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
//             Industry-aligned programs, expert faculty, and career-focused curriculum designed to unlock your potential.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 md:px-6 py-12">
//         {/* Filter Bar */}
//         <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row justify-between gap-4 sticky top-4 z-20 backdrop-blur-sm bg-white/95 border border-gray-100">
//           <div className="relative flex-1">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search courses... (B.Com, BBA, M.Com)"
//               className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-2 flex-wrap">
//             <FilterChip label="All Programs" value="all" active={activeFilter === 'all'} onClick={setActiveFilter} />
//             <FilterChip label="Undergraduate" value="ug" active={activeFilter === 'ug'} onClick={setActiveFilter} />
//             <FilterChip label="Postgraduate" value="pg" active={activeFilter === 'pg'} onClick={setActiveFilter} />
//           </div>
//         </div>

//         {/* Courses Grid */}
//         {filteredCourses.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Search size={32} className="text-gray-400" />
//             </div>
//             <p className="text-gray-500 text-lg">No courses match your search. Try another keyword.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {filteredCourses.map(course => (
//               <CourseCard key={course.id} course={course} onExplore={handleExplore} />
//             ))}
//           </div>
//         )}

//         {/* Value Added Section */}
//         <div className="mt-20 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl p-8 md:p-10 border border-white/50 shadow-xl">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
//               <Award className="text-indigo-600" size={20} />
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Value-Added Certifications</h2>
//           </div>
//           <p className="text-gray-500 mb-8 ml-14">Beyond the syllabus — skill-boosting programs for real-world success.</p>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//             {valueAddedCourses.map((item, idx) => (
//               <ValueCard key={idx} item={item} />
//             ))}
//           </div>
//         </div>

//         {/* Enquiry & Why Us Section */}
//         <div className="grid md:grid-cols-2 gap-8 mt-16">
//           {/* Enquiry Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
//             <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Personalized Guidance</h3>
//             <p className="text-gray-500 mb-6">Fill the form — our counsellor will reach out within 24h.</p>
            
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name *"
//                   className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email *"
//                   className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number *"
//                   className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="altPhone"
//                   placeholder="Alternate Number (Optional)"
//                   className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition"
//                   value={formData.altPhone}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <select
//                   name="course"
//                   className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition bg-white"
//                   value={formData.course}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Interested Course *</option>
//                   <option>B.Com</option>
//                   <option>BBA</option>
//                   <option>BCA</option>
//                   <option>B.Sc (CBZ)</option>
//                   <option>BA</option>
//                   <option>M.Com</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 hover:shadow-xl"
//               >
//                 <Send size={18} /> Submit Enquiry
//               </button>
//             </form>
//           </div>

//           {/* Why Us */}
//           <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100">
//             <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-5">
//               <GraduationCap size={28} className="text-indigo-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Sri Lakshmi?</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <CheckCircle size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-600">100% Placement Assistance with top MNCs</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <CheckCircle size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-600">Industry Expert Sessions & Workshops</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <CheckCircle size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-600">Global Certifications & Paid Internships</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <CheckCircle size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-600">Foreign Language & Soft Skills Training</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <CheckCircle size={20} className="text-indigo-600 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-600">State-of-the-art Digital Library & Labs</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 mt-20 rounded-t-3xl">
//         <div className="container mx-auto px-4 md:px-6 py-12">
//           <div className="flex flex-wrap justify-between gap-6 border-b border-gray-800 pb-8">
//             <div className="flex items-center gap-2">
//               <Phone size={18} className="text-indigo-400" />
//               <span>+91 9535003404</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={18} className="text-indigo-400" />
//               <span>slgi2k3@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin size={18} className="text-indigo-400" />
//               <span>Bengaluru, Karnataka, India</span>
//             </div>
//           </div>
//           <div className="text-center pt-8 text-sm text-gray-500">
//             © 2025 Srilaksmi Management — Redefining Excellence
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes slide-in-from-bottom-5 {
//           from {
//             transform: translateY(1rem);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-in {
//           animation: slide-in-from-bottom-5 0.3s ease-out;
//         }
//         .bg-grid-pattern {
//           background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 1px);
//           background-size: 32px 32px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CourseCatalog;

// App.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Search, 
//   Phone, 
//   Mail, 
//   MapPin, 
//   GraduationCap, 
//   Award, 
//   Calendar, 
//   ArrowRight, 
//   CheckCircle, 
//   Send, 
//   FileText, 
//   Briefcase, 
//   Cloud, 
//   MessageCircle, 
//   Globe,
//   Quote,
//   BookOpen,
//   Compass,
//   Sparkles,
//   ChevronRight,
//   Feather,
//   Star,
//   Users,
//   Target,
//   Zap
// } from 'lucide-react';
// import BscImg from '../assets/Bsc.jpeg';
// import BBAImg from '../assets/BBA.jpeg';
// import BCOMImg from '../assets/BCOM-1.jpeg';
// import BAImg from '../assets/Ba-sl-clg.jpeg';
// import BCAImg from '../assets/computer-lab-scaled-1.webp';
// import MCOMImg from '../assets/m.com-img.png';
// import GSTImg from '../assets/gst-img.jpg';
// import ProjectManagement from '../assets/ProjectManagement.jpeg';
// import cloudComputing from '../assets/cloudComputing.jpg'
// import communicationSkills from '../assets/communicationSkills.jpg';
// import foreignLanguage from '../assets/foreignLanguage.jpg';
// import campusStory from '../assets/srilakshmi-degree-clg-building.jpg';

// // Course Data with storytelling elements
// const coursesData = [
//   { 
//     id: 1, 
//     title: "B.Com", 
//     category: "ug", 
//     duration: "3 Years", 
//     creds: "180 Credits",
//     desc: "Master the language of commerce — finance, taxation, and real-world accounting. GST-integrated training with industry practitioners.", 
//     longDesc: "A legacy program that transforms you into a financial architect. Specializations in Taxation, Corporate Accounting, and Financial Analytics.",
//     img: BCOMImg, 
//     badge: "Legacy Program",
//     color: "from-amber-500 to-orange-600",
//     outcomes: ["GST Certification", "Tally Proficiency", "Financial Modeling"]
//   },
//   { 
//     id: 2, 
//     title: "BBA", 
//     category: "ug", 
//     duration: "3 Years", 
//     creds: "180 Credits",
//     desc: "Leadership, strategy & entrepreneurship. Develop business acumen through case studies and live projects.", 
//     longDesc: "Build the mindset of tomorrow's leaders. Focus on Marketing, HR Analytics, and Family Business Management.",
//     img: BBAImg, 
//     badge: "Top Rated",
//     color: "from-emerald-500 to-teal-600",
//     outcomes: ["Project Management", "Leadership Skills", "Business Analytics"]
//   },
//   { 
//     id: 3, 
//     title: "BCA", 
//     category: "ug", 
//     duration: "3 Years", 
//     creds: "180 Credits",
//     desc: "Build digital tomorrow. Cloud computing, full-stack & AI foundations — code with creativity.", 
//     longDesc: "Industry-aligned curriculum with specializations in Cloud Computing, Cybersecurity, and Full-Stack Development.",
//     img: BCAImg, 
//     badge: "Tech Forward",
//     color: "from-purple-500 to-pink-600",
//     outcomes: ["Cloud Computing", "Full-Stack Dev", "AI Fundamentals"]
//   },
//   { 
//     id: 4, 
//     title: "B.Sc (CBZ)", 
//     category: "ug", 
//     duration: "3 Years", 
//     creds: "180 Credits",
//     desc: "Explore life sciences with research labs, field projects & holistic approach to biology.", 
//     longDesc: "Comprehensive curriculum in Chemistry, Botany, Zoology with research opportunities and industry collaborations.",
//     img: BscImg, 
//     badge: "Research Hub",
//     color: "from-blue-500 to-cyan-600",
//     outcomes: ["Lab Research", "Field Studies", "Environmental Science"]
//   },
//   { 
//     id: 5, 
//     title: "BA Journalism", 
//     category: "ug", 
//     duration: "3 Years", 
//     creds: "180 Credits",
//     desc: "Storytelling for the media age. Digital journalism, ethics, and communication mastery.", 
//     longDesc: "New-age media training covering digital storytelling, broadcast journalism, and content strategy.",
//     img: BAImg, 
//     badge: "Creative Edge",
//     color: "from-rose-500 to-red-600",
//     outcomes: ["Digital Media", "Content Strategy", "Broadcast Skills"]
//   },
//   { 
//     id: 6, 
//     title: "M.Com", 
//     category: "pg", 
//     duration: "2 Years", 
//     creds: "120 Credits",
//     desc: "Advanced financial strategy, analytics & corporate leadership. Elevate your commerce career.", 
//     longDesc: "Postgraduate excellence with focus on International Finance, Strategic Management, and Research Methodology.",
//     img: MCOMImg, 
//     badge: "Postgraduate Excellence",
//     color: "from-slate-600 to-gray-800",
//     outcomes: ["Corporate Finance", "Strategic Leadership", "Research Skills"]
//   }
// ];

// // Value Added Courses
// const valueAddedCourses = [
//   { name: "GST Certification", icon: FileText, desc: "Practical training for B.Com students", color: "bg-amber-50 text-amber-600", delay: 0,img: GSTImg },
//   { name: "Project Management", icon: Briefcase, desc: "For BBA - Agile & PMP essentials", color: "bg-emerald-50 text-emerald-600", delay: 100 , img: ProjectManagement },
//   { name: "Cloud Computing", icon: Cloud, desc: "AWS & Azure fundamentals (BCA)", color: "bg-purple-50 text-purple-600", delay: 200,img: cloudComputing },
//   { name: "Communication Skills", icon: MessageCircle, desc: "Professional etiquettes & public speaking", color: "bg-sky-50 text-sky-600", delay: 300 , img: communicationSkills},
//   { name: "Foreign Language", icon: Globe, desc: "German / French / Japanese basics", color: "bg-rose-50 text-rose-600", delay: 400, img: foreignLanguage }
// ];

// // Statistics
// const stats = [
//   { value: "15+", label: "Years of Excellence", icon: Star },
//   { value: "3000+", label: "Alumni Network", icon: Users },
//   { value: "100%", label: "Placement Assistance", icon: Target },
//   { value: "40+", label: "Industry Experts", icon: Zap }
// ];

// // Filter Chip Component
// const FilterChip = ({ label, value, active, onClick }) => (
//   <button
//     onClick={() => onClick(value)}
//     className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//       active 
//         ? 'bg-stone-800 text-white shadow-lg shadow-stone-200 scale-105' 
//         : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
//     }`}
//   >
//     {label}
//   </button>
// );

// // Course Card Component with storytelling
// const CourseCard = ({ course, onExplore, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div 
//       className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       data-aos="fade-up"
//       data-aos-delay={index * 100}
//     >
//       <div className="relative h-56 overflow-hidden">
//         <img 
//           src={course.img} 
//           alt={course.title} 
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
//           {course.badge}
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         {isHovered && (
//           <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//             <div className="flex gap-2 flex-wrap">
//               {course.outcomes.slice(0, 2).map((outcome, i) => (
//                 <span key={i} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">{outcome}</span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
      
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-2">
//           <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
//             {course.category === 'ug' ? 'Undergraduate' : 'Postgraduate'}
//           </div>
//           <div className="flex items-center gap-1 text-stone-400 text-xs">
//             <Calendar size={12} />
//             <span>{course.duration}</span>
//           </div>
//         </div>
//         <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
//           {course.title}
//         </h3>
//         <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
//           {course.desc}
//         </p>
        
//         <div className="flex items-center justify-between pt-4 border-t border-stone-100">
//           <div className="flex items-center gap-1 text-stone-400 text-xs">
//             <BookOpen size={12} />
//             <span>{course.creds}</span>
//           </div>
//           <button 
//             onClick={() => onExplore(course.title)}
//             className="flex items-center gap-2 text-stone-700 font-semibold text-sm group/btn hover:text-amber-700 transition-all"
//           >
//             Explore Journey <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Value Card Component
// const ValueCard = ({ item, index }) => (
//   <div 
//     className={`group ${item.color} rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100 cursor-pointer`}
//     data-aos="zoom-in"
//     data-aos-delay={item.delay}
//   >
//     <div className={`rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//       {/* <item.icon size={28} /> */}
//       <img src={item.img} alt={item.name} className="w-40 h-20 object-contain rounded-2xl" />
//     </div>
//     <h4 className="font-bold text-stone-800 mb-2">{item.name}</h4>
//     <p className="text-stone-500 text-sm">{item.desc}</p>
//   </div>
// );

// // Stat Card
// const StatCard = ({ stat, index }) => (
//   <div 
//     className="text-center p-6 bg-white rounded-2xl shadow-sm border border-stone-100"
//     data-aos="fade-up"
//     data-aos-delay={index * 100}
//   >
//     <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
//       <stat.icon size={20} className="text-amber-600" />
//     </div>
//     <div className="text-3xl font-bold text-stone-800">{stat.value}</div>
//     <div className="text-stone-500 text-sm mt-1">{stat.label}</div>
//   </div>
// );

// // Main App Component
// const CourseCatalog = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [toastMessage, setToastMessage] = useState(null);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     altPhone: '',
//     course: ''
//   });
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const showToast = (message) => {
//     setToastMessage(message);
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   const handleExplore = (courseName) => {
//     showToast(`✨ Discover more about ${courseName}! Schedule a free consultation with our counselors.`);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.email || !formData.phone || !formData.course) {
//       showToast('📖 Please fill all required fields to begin your story.');
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       showToast('❄️ Enter a valid email address.');
//       return;
//     }
//     if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
//       showToast('📞 Enter a valid 10-digit phone number.');
//       return;
//     }
//     showToast(`🎓 Thank you ${formData.fullName}! Your journey inquiry for ${formData.course} is received.`);
//     setFormData({ fullName: '', email: '', phone: '', altPhone: '', course: '' });
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Filter logic
//   const filteredCourses = coursesData.filter(course => {
//     const matchesFilter = activeFilter === 'all' || course.category === activeFilter;
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           course.desc.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   // Intersection Observer for fade-up animations
//   useEffect(() => {
//     const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20">
//       {/* Toast Notification */}
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 z-50 bg-stone-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-300">
//           <Sparkles size={16} className="text-amber-400" />
//           <span>{toastMessage}</span>
//         </div>
//       )}

//       {/* Hero Section with Storytelling */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-amber-50/40">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30 animate-pulse" />
//         <div className="absolute bottom-20 left-10 w-80 h-80 bg-stone-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        
//         <div className="container mx-auto px-4 md:px-6 py-12 md:py-18 relative z-10">
//           <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
//             <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
//               <Feather size={16} />
//               Legacy of wisdom since 2003
//             </div>
//             <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-stone-800 leading-[1.2]">
//               Crafting futures, {" "}
//               <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
//                 one story at a time
//               </span>
//             </h1>
//             <p className="text-stone-600 text-md md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
//               Where ambition meets mentorship. Our courses aren't just degrees — they're narratives of growth, resilience, and excellence.
//             </p>
//             {/* <div className="flex gap-5 justify-center mt-10">
//               <a 
//                 href="#courses" 
//                 className="group px-8 py-3 bg-stone-800 text-white rounded-full font-semibold hover:bg-stone-700 transition shadow-md flex items-center gap-2"
//               >
//                 Explore journeys <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
//               </a>
//               <a 
//                 href="#values" 
//                 className="px-8 py-3 border border-stone-300 rounded-full font-medium text-stone-700 hover:bg-stone-100 transition"
//               >
//                 Value add-ons
//               </a>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {/* <section className="py-12 bg-white border-y border-stone-100">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, idx) => (
//               <StatCard key={idx} stat={stat} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Philosophy Story Section */}
//       <section className="py-20 md:py-28 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div data-aos="fade-right" data-aos-duration="800">
//               <div className="inline-block mb-4">
//                 <span className="text-amber-600 text-sm tracking-widest font-semibold flex items-center gap-2">
//                   <Quote size={14} /> OUR PHILOSOPHY
//                 </span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-5">
//                 Education is the <br />art of awakening.
//               </h2>
//               <p className="text-stone-600 leading-relaxed text-lg">
//                 At Sri Lakshmi Management, we design experiences that go beyond textbooks. 
//                 Each program is woven with real-world insights, ethics, and leadership — 
//                 transforming students into architects of tomorrow.
//               </p>
//               <div className="mt-8 flex gap-3 flex-wrap">
//                 <div className="flex items-center gap-2 text-sm bg-stone-50 px-4 py-2 rounded-full">
//                   <GraduationCap size={16} className="text-amber-600" /> 40+ Industry Experts
//                 </div>
//                 <div className="flex items-center gap-2 text-sm bg-stone-50 px-4 py-2 rounded-full">
//                   <Globe size={16} className="text-amber-600" /> Global Certifications
//                 </div>
//               </div>
//             </div>
//             <div className="relative" data-aos="fade-left" data-aos-duration="900">
//               <div className="rounded-3xl overflow-hidden shadow-2xl">
//                 <img 
//                   src={campusStory}
//                   alt="Campus story" 
//                   className="w-full h-auto object-cover transition duration-700 hover:scale-105"
//                 />
//               </div>
//               <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-amber-100 rounded-full -z-10 blur-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/20">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
//             <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-3">
//               <BookOpen size={14} className="inline mr-1" /> Academic Chapters
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
//               Choose your <span className="border-b-4 border-amber-400">path</span>
//             </h2>
//             <p className="text-stone-500 mt-4">Each program is crafted to bridge passion with profession, backed by modern pedagogy.</p>
//           </div>
          
//           {/* Filter Bar */}
//           <div className="flex flex-col md:flex-row justify-between gap-5 mb-12" data-aos="fade-up" data-aos-delay="100">
//             <div className="relative w-full md:w-80">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search programs (BBA, B.Com..)"
//                 className="w-full pl-11 pr-4 py-3 rounded-full border border-stone-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 outline-none transition"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex gap-3 flex-wrap">
//               <FilterChip label="All Stories" value="all" active={activeFilter === 'all'} onClick={setActiveFilter} />
//               <FilterChip label="Undergraduate" value="ug" active={activeFilter === 'ug'} onClick={setActiveFilter} />
//               <FilterChip label="Postgraduate" value="pg" active={activeFilter === 'pg'} onClick={setActiveFilter} />
//             </div>
//           </div>

//           {/* Courses Grid */}
//           {filteredCourses.length === 0 ? (
//             <div className="text-center py-20" data-aos="fade-up">
//               <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Compass size={32} className="text-stone-400" />
//               </div>
//               <p className="text-stone-500 text-lg">No courses match your search. Try another keyword.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredCourses.map((course, idx) => (
//                 <CourseCard key={course.id} course={course} onExplore={handleExplore} index={idx} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Value Added Section */}
//       <section id="values" className="py-24 bg-white relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
//         <div className="container mx-auto px-4 md:px-6 relative z-2">
//           <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
//             <span className="text-amber-600 text-sm font-bold tracking-wider flex items-center justify-center gap-2">
//               <Award size={14} /> BEYOND CURRICULUM
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2">Value-Added Narratives</h2>
//             <p className="text-stone-500 mt-4">Certifications that turn knowledge into superpowers. Skills that make you industry-ready.</p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//             {valueAddedCourses.map((item, idx) => (
//               //<img src={item.img} alt={item.name} className="w-full h-10 object-cover rounded-lg mt-4" />
//               <ValueCard key={idx} item={item} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enquiry & Story Connect Section */}
//       <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/30">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-start">
//             <div data-aos="fade-right">
//               <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-800 text-xs font-bold mb-4">
//                 <Feather size={12} className="inline mr-1" /> Begin your chapter
//               </div>
//               <h3 className="text-3xl font-bold text-stone-800 mb-4">Let's write <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">your success</span> story.</h3>
//               <p className="text-stone-600 text-lg leading-relaxed">
//                 Our advisors help you navigate the perfect course and career pathway. 
//                 Share your dreams — we'll provide the roadmap.
//               </p>
//               <div className="mt-8 space-y-3">
//                 <div className="flex gap-3 items-center">
//                   <CheckCircle size={18} className="text-amber-600" />
//                   <span className="text-stone-700">Personalized career mapping</span>
//                 </div>
//                 <div className="flex gap-3 items-center">
//                   <CheckCircle size={18} className="text-amber-600" />
//                   <span className="text-stone-700">Scholarship guidance</span>
//                 </div>
//                 <div className="flex gap-3 items-center">
//                   <CheckCircle size={18} className="text-amber-600" />
//                   <span className="text-stone-700">Alumni mentorship network</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40" data-aos="fade-left">
//               <h4 className="text-xl font-bold text-stone-800 mb-5">Request Information</h4>
//               <form onSubmit={handleFormSubmit} className="space-y-5">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full name *"
//                   className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address *"
//                   className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone *"
//                   className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="tel"
//                   name="altPhone"
//                   placeholder="Alternate Number (Optional)"
//                   className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
//                   value={formData.altPhone}
//                   onChange={handleInputChange}
//                 />
//                 <select
//                   name="course"
//                   className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition bg-white"
//                   value={formData.course}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select your program *</option>
//                   <option>B.Com</option>
//                   <option>BBA</option>
//                   <option>BCA</option>
//                   <option>B.Sc (CBZ)</option>
//                   <option>BA</option>
//                   <option>M.Com</option>
//                 </select>
//                 <button
//                   type="submit"
//                   className="w-full bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-stone-200"
//                 >
//                   <Send size={18} /> Submit Enquiry
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

      
//       <style>{`
//         @keyframes slide-in-from-bottom-5 {
//           from { transform: translateY(1rem); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-in { animation: slide-in-from-bottom-5 0.3s ease-out; }
//         .bg-grid-pattern {
//           background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 1px);
//           background-size: 32px 32px;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .fade-up {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .fade-up.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CourseCatalog;

// CourseCatalog.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Send, 
  FileText, 
  Briefcase, 
  Cloud, 
  MessageCircle, 
  Globe,
  Quote,
  BookOpen,
  Compass,
  Sparkles,
  Feather,
  Star,
  Users,
  Target,
  Zap
} from 'lucide-react';
import BscImg from '../assets/Bsc.jpeg';
import BBAImg from '../assets/BBA.jpeg';
import BCOMImg from '../assets/BCOM-1.jpeg';
import BAImg from '../assets/Ba-sl-clg.jpeg';
import BCAImg from '../assets/computer-lab-scaled-1.webp';
import MCOMImg from '../assets/m.com-img.png';
import GSTImg from '../assets/gst-img.jpg';
import ProjectManagement from '../assets/ProjectManagement.jpeg';
import cloudComputing from '../assets/cloudComputing.jpg';
import communicationSkills from '../assets/communicationSkills.jpg';
import foreignLanguage from '../assets/foreignLanguage.jpg';
import campusStory from '../assets/srilakshmi-degree-clg-building.jpg';

// Course Data with storytelling elements
const coursesData = [
  { 
    id: 1, 
    title: "B.Com", 
    slug: "bcom",
    category: "ug", 
    duration: "3 Years", 
    creds: "180 Credits",
    desc: "Master the language of commerce — finance, taxation, and real-world accounting. GST-integrated training with industry practitioners.", 
    longDesc: "A legacy program that transforms you into a financial architect. Specializations in Taxation, Corporate Accounting, and Financial Analytics.",
    img: BCOMImg, 
    badge: "Legacy Program",
    color: "from-amber-500 to-orange-600",
    outcomes: ["GST Certification", "Tally Proficiency", "Financial Modeling"]
  },
  { 
    id: 2, 
    title: "BBA", 
    slug: "bba",
    category: "ug", 
    duration: "3 Years", 
    creds: "180 Credits",
    desc: "Leadership, strategy & entrepreneurship. Develop business acumen through case studies and live projects.", 
    longDesc: "Build the mindset of tomorrow's leaders. Focus on Marketing, HR Analytics, and Family Business Management.",
    img: BBAImg, 
    badge: "Top Rated",
    color: "from-emerald-500 to-teal-600",
    outcomes: ["Project Management", "Leadership Skills", "Business Analytics"]
  },
  { 
    id: 3, 
    title: "BCA", 
    slug: "bca",
    category: "ug", 
    duration: "3 Years", 
    creds: "180 Credits",
    desc: "Build digital tomorrow. Cloud computing, full-stack & AI foundations — code with creativity.", 
    longDesc: "Industry-aligned curriculum with specializations in Cloud Computing, Cybersecurity, and Full-Stack Development.",
    img: BCAImg, 
    badge: "Tech Forward",
    color: "from-purple-500 to-pink-600",
    outcomes: ["Cloud Computing", "Full-Stack Dev", "AI Fundamentals"]
  },
  { 
    id: 4, 
    title: "B.Sc (CBZ)", 
    slug: "bsc-cbz",
    category: "ug", 
    duration: "3 Years", 
    creds: "180 Credits",
    desc: "Explore life sciences with research labs, field projects & holistic approach to biology.", 
    longDesc: "Comprehensive curriculum in Chemistry, Botany, Zoology with research opportunities and industry collaborations.",
    img: BscImg, 
    badge: "Research Hub",
    color: "from-blue-500 to-cyan-600",
    outcomes: ["Lab Research", "Field Studies", "Environmental Science"]
  },
  { 
    id: 5, 
    title: "BA Journalism", 
    slug: "ba-journalism",
    category: "ug", 
    duration: "3 Years", 
    creds: "180 Credits",
    desc: "Storytelling for the media age. Digital journalism, ethics, and communication mastery.", 
    longDesc: "New-age media training covering digital storytelling, broadcast journalism, and content strategy.",
    img: BAImg, 
    badge: "Creative Edge",
    color: "from-rose-500 to-red-600",
    outcomes: ["Digital Media", "Content Strategy", "Broadcast Skills"]
  },
  { 
    id: 6, 
    title: "M.Com", 
    slug: "mcom",
    category: "pg", 
    duration: "2 Years", 
    creds: "120 Credits",
    desc: "Advanced financial strategy, analytics & corporate leadership. Elevate your commerce career.", 
    longDesc: "Postgraduate excellence with focus on International Finance, Strategic Management, and Research Methodology.",
    img: MCOMImg, 
    badge: "Postgraduate Excellence",
    color: "from-slate-600 to-gray-800",
    outcomes: ["Corporate Finance", "Strategic Leadership", "Research Skills"]
  }
];

// Value Added Courses
const valueAddedCourses = [
  { name: "GST Certification", icon: FileText, desc: "Practical training for B.Com students", color: "bg-amber-50 text-amber-600", delay: 0, img: GSTImg },
  { name: "Project Management", icon: Briefcase, desc: "For BBA - Agile & PMP essentials", color: "bg-emerald-50 text-emerald-600", delay: 100, img: ProjectManagement },
  { name: "Cloud Computing", icon: Cloud, desc: "AWS & Azure fundamentals (BCA)", color: "bg-purple-50 text-purple-600", delay: 200, img: cloudComputing },
  { name: "Communication Skills", icon: MessageCircle, desc: "Professional etiquettes & public speaking", color: "bg-sky-50 text-sky-600", delay: 300, img: communicationSkills },
  { name: "Foreign Language", icon: Globe, desc: "German / French / Japanese basics", color: "bg-rose-50 text-rose-600", delay: 400, img: foreignLanguage }
];

// Filter Chip Component
const FilterChip = ({ label, value, active, onClick }) => (
  <button
    onClick={() => onClick(value)}
    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-stone-800 text-white shadow-lg shadow-stone-200 scale-105' 
        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
    }`}
  >
    {label}
  </button>
);

// Course Card Component with navigation
const CourseCard = ({ course, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/course/${course.slug}`)}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={course.img} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
          {course.badge}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {isHovered && (
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex gap-2 flex-wrap">
              {course.outcomes.slice(0, 2).map((outcome, i) => (
                <span key={i} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">{outcome}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            {course.category === 'ug' ? 'Undergraduate' : 'Postgraduate'}
          </div>
          <div className="flex items-center gap-1 text-stone-400 text-xs">
            <Calendar size={12} />
            <span>{course.duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
          {course.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {course.desc}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <div className="flex items-center gap-1 text-stone-400 text-xs">
            <BookOpen size={12} />
            <span>{course.creds}</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course/${course.slug}`);
            }}
            className="flex items-center gap-2 text-stone-700 font-semibold text-sm group/btn hover:text-amber-700 transition-all"
          >
            View Details <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ item, index }) => (
  <div 
    className={`group ${item.color} rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-100 cursor-pointer`}
    data-aos="zoom-in"
    data-aos-delay={item.delay}
  >
    <div className="rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <img src={item.img} alt={item.name} className="w-40 h-20 object-contain rounded-2xl" />
    </div>
    <h4 className="font-bold text-stone-800 mb-2">{item.name}</h4>
    <p className="text-stone-500 text-sm">{item.desc}</p>
  </div>
);

// Main Catalog Component
const CourseCatalog = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    altPhone: '',
    course: ''
  });

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.course) {
      showToast('📖 Please fill all required fields to begin your story.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      showToast('❄️ Enter a valid email address.');
      return;
    }
    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      showToast('📞 Enter a valid 10-digit phone number.');
      return;
    }
    showToast(`🎓 Thank you ${formData.fullName}! Your journey inquiry for ${formData.course} is received.`);
    setFormData({ fullName: '', email: '', phone: '', altPhone: '', course: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Filter logic
  const filteredCourses = coursesData.filter(course => {
    const matchesFilter = activeFilter === 'all' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-800 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-300">
          <Sparkles size={16} className="text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-amber-50/40">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-stone-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-18 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Feather size={16} />
              Legacy of wisdom since 2003
            </div>
            <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-stone-800 leading-[1.2]">
              Crafting futures, {" "}
              <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                one story at a time
              </span>
            </h1>
            <p className="text-stone-600 text-md md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              Where ambition meets mentorship. Our courses aren't just degrees — they're narratives of growth, resilience, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="inline-block mb-4">
                <span className="text-amber-600 text-sm tracking-widest font-semibold flex items-center gap-2">
                  <Quote size={14} /> OUR PHILOSOPHY
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-5">
                Education is the <br />art of awakening.
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                At Srilakshmi college of management and science, we design experiences that go beyond textbooks. 
                Each program is woven with real-world insights, ethics, and leadership — 
                transforming students into architects of tomorrow.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-sm bg-stone-50 px-4 py-2 rounded-full">
                  <GraduationCap size={16} className="text-amber-600" /> 40+ Industry Experts
                </div>
                <div className="flex items-center gap-2 text-sm bg-stone-50 px-4 py-2 rounded-full">
                  <Globe size={16} className="text-amber-600" /> Global Certifications
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="900">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={campusStory}
                  alt="Campus story" 
                  className="w-full h-auto object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-amber-100 rounded-full -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-3">
              <BookOpen size={14} className="inline mr-1" /> Academic Chapters
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
              Choose your <span className="border-b-4 border-amber-400">path</span>
            </h2>
            <p className="text-stone-500 mt-4">Each program is crafted to bridge passion with profession, backed by modern pedagogy.</p>
          </div>
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between gap-5 mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                placeholder="Search programs (BBA, B.Com..)"
                className="w-full pl-11 pr-4 py-3 rounded-full border border-stone-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 outline-none transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              <FilterChip label="All Stories" value="all" active={activeFilter === 'all'} onClick={setActiveFilter} />
              <FilterChip label="Undergraduate" value="ug" active={activeFilter === 'ug'} onClick={setActiveFilter} />
              <FilterChip label="Postgraduate" value="pg" active={activeFilter === 'pg'} onClick={setActiveFilter} />
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20" data-aos="fade-up">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass size={32} className="text-stone-400" />
              </div>
              <p className="text-stone-500 text-lg">No courses match your search. Try another keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, idx) => (
                <CourseCard key={course.id} course={course} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Value Added Section */}
      <section id="values" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-2">
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <span className="text-amber-600 text-sm font-bold tracking-wider flex items-center justify-center gap-2">
              <Award size={14} /> BEYOND CURRICULUM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2">Value-Added Narratives</h2>
            <p className="text-stone-500 mt-4">Certifications that turn knowledge into superpowers. Skills that make you industry-ready.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueAddedCourses.map((item, idx) => (
              <ValueCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="enquiry-section" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div data-aos="fade-right">
              <div className="inline-block px-4 py-1 bg-amber-100 rounded-full text-amber-800 text-xs font-bold mb-4">
                <Feather size={12} className="inline mr-1" /> Begin your chapter
              </div>
              <h3 className="text-3xl font-bold text-stone-800 mb-4">Let's write <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">your success</span> story.</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                Our advisors help you navigate the perfect course and career pathway. 
                Share your dreams — we'll provide the roadmap.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex gap-3 items-center">
                  <CheckCircle size={18} className="text-amber-600" />
                  <span className="text-stone-700">Personalized career mapping</span>
                </div>
                <div className="flex gap-3 items-center">
                  <CheckCircle size={18} className="text-amber-600" />
                  <span className="text-stone-700">Scholarship guidance</span>
                </div>
                <div className="flex gap-3 items-center">
                  <CheckCircle size={18} className="text-amber-600" />
                  <span className="text-stone-700">Alumni mentorship network</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40" data-aos="fade-left">
              <h4 className="text-xl font-bold text-stone-800 mb-5">Request Information</h4>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name *"
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="altPhone"
                  placeholder="Alternate Number (Optional)"
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition"
                  value={formData.altPhone}
                  onChange={handleInputChange}
                />
                <select
                  name="course"
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition bg-white"
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <option value="">Select your program *</option>
                  <option>B.Com</option>
                  <option>BBA</option>
                  <option>BCA</option>
                  <option>B.Sc (CBZ)</option>
                  <option>BA Journalism</option>
                  <option>M.Com</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-stone-200"
                >
                  <Send size={18} /> Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slide-in-from-bottom-5 {
          from { transform: translateY(1rem); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-in { animation: slide-in-from-bottom-5 0.3s ease-out; }
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default CourseCatalog;