// import React from "react";
// import {
//   FaBuilding,
//   FaGraduationCap,
//   FaChartLine,
//   FaMapMarkerAlt,
//   FaCheckCircle,
//   FaTrophy,
//   FaBriefcase,
//   FaArrowRight,
// } from "react-icons/fa";

// // Sample dataset of placed students
// const placedStudentsData = [
//   {
//     id: 1,
//     name: "Riya Sharma",
//     role: "Software Development Engineer",
//     course: "Full Stack Development (MERN + Cloud)",
//     lpa: "24.5 LPA",
//     company: "Microsoft",
//     location: "Bangalore, India",
//     initials: "RS",
//     gradient: "from-blue-800 to-blue-600",
//   },
//   {
//     id: 2,
//     name: "Aarav Mehta",
//     role: "Data Scientist",
//     course: "Data Science & AI",
//     lpa: "32.0 LPA",
//     company: "Google",
//     location: "Hyderabad, India",
//     initials: "AM",
//     gradient: "from-teal-700 to-teal-500",
//   },
//   {
//     id: 3,
//     name: "Sanya Kapoor",
//     role: "Cloud Architect",
//     course: "Cloud Computing & DevOps",
//     lpa: "18.2 LPA",
//     company: "Amazon",
//     location: "Pune, India",
//     initials: "SK",
//     gradient: "from-indigo-800 to-indigo-600",
//   },
//   {
//     id: 4,
//     name: "Ishaan Nair",
//     role: "Security Analyst",
//     course: "Cybersecurity & Risk Management",
//     lpa: "15.8 LPA",
//     company: "Deloitte",
//     location: "Gurugram, India",
//     initials: "IN",
//     gradient: "from-slate-700 to-slate-500",
//   },
//   {
//     id: 5,
//     name: "Ananya Verma",
//     role: "Business & Strategy Analyst",
//     course: "MBA in Marketing & Analytics",
//     lpa: "20.3 LPA",
//     company: "McKinsey & Company",
//     location: "Mumbai, India",
//     initials: "AV",
//     gradient: "from-emerald-800 to-emerald-600",
//   },
//   {
//     id: 6,
//     name: "Kunal Saxena",
//     role: "Machine Learning Engineer",
//     course: "AI & Deep Learning",
//     lpa: "28.6 LPA",
//     company: "Apple",
//     location: "Bangalore, India",
//     initials: "KS",
//     gradient: "from-amber-800 to-amber-600",
//   },
//   {
//     id: 7,
//     name: "Pooja Reddy",
//     role: "Product Manager",
//     course: "Product Management & Growth",
//     lpa: "22.0 LPA",
//     company: "Adobe",
//     location: "Noida, India",
//     initials: "PR",
//     gradient: "from-rose-800 to-rose-500",
//   },
//   {
//     id: 8,
//     name: "Vikram Singh",
//     role: "Digital Marketing Lead",
//     course: "Digital Marketing & Brand Strategy",
//     lpa: "12.4 LPA",
//     company: "Unilever",
//     location: "Chennai, India",
//     initials: "VS",
//     gradient: "from-cyan-800 to-cyan-600",
//   },
// ];

// // Single student card component (for reusability)
// const StudentCard = ({ student }) => {
//   return (
//     <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col">
//       <div className="p-6 flex flex-col gap-4">
//         {/* Profile row: Avatar + Name + Role */}
//         <div className="flex items-start gap-4">
//           <div
//             className={`w-16 h-16 rounded-full bg-gradient-to-br ${student.gradient} flex items-center justify-center text-white font-bold text-xl shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
//           >
//             {student.initials}
//           </div>
//           <div className="flex-1">
//             <h4 className="text-xl font-bold text-gray-800 tracking-tight">
//               {student.name}
//             </h4>
//             <div className="inline-flex items-center gap-1.5 mt-1 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
//               <FaBriefcase className="w-3 h-3" />
//               <span>{student.role}</span>
//             </div>
//           </div>
//         </div>

//         {/* Details grid - course, LPA, company, location */}
//         <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
//           {/* Course background */}
//           <div className="flex items-start gap-3 text-sm">
//             <FaGraduationCap className="w-4 h-4 text-blue-600 mt-0.5" />
//             <div>
//               <span className="font-semibold text-gray-700">Course background</span>
//               <p className="text-gray-600 font-medium">{student.course}</p>
//             </div>
//           </div>

//           {/* LPA */}
//           <div className="flex items-center gap-3 text-sm">
//             <FaChartLine className="w-4 h-4 text-emerald-600" />
//             <div>
//               <span className="font-semibold text-gray-700">Annual CTC</span>
//               <div className="inline-block ml-2 bg-blue-50 text-blue-800 font-bold px-2.5 py-0.5 rounded-full text-xs">
//                 ₹ {student.lpa}
//               </div>
//             </div>
//           </div>

//           {/* Company */}
//           <div className="flex items-center gap-3 text-sm">
//             <FaBuilding className="w-4 h-4 text-indigo-600" />
//             <div>
//               <span className="font-semibold text-gray-700">Company</span>
//               <span className="ml-2 font-bold text-gray-800">{student.company}</span>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="flex items-center gap-3 text-sm">
//             <FaMapMarkerAlt className="w-4 h-4 text-gray-500" />
//             <div>
//               <span className="font-semibold text-gray-700">Location</span>
//               <span className="ml-2 text-gray-600">{student.location}</span>
//             </div>
//           </div>
//         </div>

//         {/* Footer badge */}
//         <div className="flex justify-end mt-1 pt-1 border-t border-gray-100">
//           <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
//             <FaCheckCircle className="w-3.5 h-3.5 text-teal-600" />
//             <span>Placed · 2025 Cohort</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Placed Students Section Component
// const PlacedStudentsSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
//             <FaTrophy className="w-4 h-4" />
//             <span>2025 Placement Highlights</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
//             Our Placed{" "}
//             <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
//               Success Architects
//             </span>
//           </h2>
//           <p className="text-gray-500 mt-4 text-lg">
//             Real profiles — real journeys. Students placed in top-tier multinational
//             corporations with outstanding compensation packages.
//           </p>
//         </div>

//         {/* Stats Row (Corporate credibility) */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
//             <p className="text-2xl font-black text-gray-800">500+</p>
//             <p className="text-sm text-gray-500">Total Placements</p>
//           </div>
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
//             <p className="text-2xl font-black text-gray-800">52 LPA</p>
//             <p className="text-sm text-gray-500">Highest CTC</p>
//           </div>
//           <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
//             <p className="text-2xl font-black text-gray-800">180+</p>
//             <p className="text-sm text-gray-500">Recruiters</p>
//           </div>
//         </div>

//         {/* Students Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {placedStudentsData.map((student) => (
//             <StudentCard key={student.id} student={student} />
//           ))}
//         </div>

//         {/* CTA for corporate view */}
//         <div className="flex justify-center mt-14">
//           <button className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-xl">
//             View All Placement Records
//             <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlacedStudentsSection;

// import React, { useState } from "react";
// import {
//   FaBriefcase,
//   FaGraduationCap,
//   FaBuilding,
//   FaMapMarkerAlt,
//   FaChartLine,
//   FaTrophy,
//   FaFilter,
// } from "react-icons/fa";

// // Sample dataset
// const allStudents = [
//   {
//     id: 1,
//     name: "Riya Sharma",
//     role: "Software Engineer",
//     course: "Full Stack Development",
//     lpa: 24.5,
//     company: "Microsoft",
//     location: "Bangalore",
//     category: "top",
//   },
//   {
//     id: 2,
//     name: "Aarav Mehta",
//     role: "Data Scientist",
//     course: "Data Science & AI",
//     lpa: 32.0,
//     company: "Google",
//     location: "Hyderabad",
//     category: "top",
//   },
//   {
//     id: 3,
//     name: "Sanya Kapoor",
//     role: "Cloud Architect",
//     course: "Cloud Computing",
//     lpa: 18.2,
//     company: "Amazon",
//     location: "Pune",
//     category: "top",
//   },
//   {
//     id: 4,
//     name: "Ishaan Nair",
//     role: "Security Analyst",
//     course: "Cybersecurity",
//     lpa: 15.8,
//     company: "Deloitte",
//     location: "Gurugram",
//     category: "standard",
//   },
//   {
//     id: 5,
//     name: "Ananya Verma",
//     role: "Strategy Consultant",
//     course: "MBA Analytics",
//     lpa: 20.3,
//     company: "McKinsey",
//     location: "Mumbai",
//     category: "top",
//   },
//   {
//     id: 6,
//     name: "Kunal Saxena",
//     role: "ML Engineer",
//     course: "Deep Learning",
//     lpa: 28.6,
//     company: "Apple",
//     location: "Bangalore",
//     category: "top",
//   },
//   {
//     id: 7,
//     name: "Pooja Reddy",
//     role: "Product Manager",
//     course: "Product Management",
//     lpa: 22.0,
//     company: "Adobe",
//     location: "Noida",
//     category: "top",
//   },
//   {
//     id: 8,
//     name: "Vikram Singh",
//     role: "Digital Marketing Lead",
//     course: "Digital Marketing",
//     lpa: 12.4,
//     company: "Unilever",
//     location: "Chennai",
//     category: "standard",
//   },
// ];

// const PlacedStudentsSection = () => {
//   const [filter, setFilter] = useState("all");

//   // Filter logic
//   const getFilteredStudents = () => {
//     if (filter === "topCompanies") {
//       return allStudents.filter((s) => s.category === "top");
//     }
//     if (filter === "highCtc") {
//       return allStudents.filter((s) => s.lpa >= 20);
//     }
//     return allStudents;
//   };

//   const filteredStudents = getFilteredStudents();

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-4">
//             <FaTrophy className="text-yellow-500" />
//             <span className="text-sm font-medium text-gray-600">
//               Placement Success 2025
//             </span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Our Placed Students
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto mt-2">
//             Graduates now working at top companies worldwide
//           </p>
//         </div>

//         {/* Stats row */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
//           <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
//             <p className="text-2xl font-bold text-indigo-600">500+</p>
//             <p className="text-sm text-gray-500">Total Placements</p>
//           </div>
//           <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
//             <p className="text-2xl font-bold text-indigo-600">₹52 LPA</p>
//             <p className="text-sm text-gray-500">Highest CTC</p>
//           </div>
//           <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
//             <p className="text-2xl font-bold text-indigo-600">180+</p>
//             <p className="text-sm text-gray-500">Recruiters</p>
//           </div>
//         </div>

//         {/* Filter buttons - interactive */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           <button
//             onClick={() => setFilter("all")}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//               filter === "all"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "bg-white text-gray-600 hover:bg-gray-100 border"
//             }`}
//           >
//             All Students
//           </button>
//           <button
//             onClick={() => setFilter("topCompanies")}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//               filter === "topCompanies"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "bg-white text-gray-600 hover:bg-gray-100 border"
//             }`}
//           >
//             Top Companies
//           </button>
//           <button
//             onClick={() => setFilter("highCtc")}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//               filter === "highCtc"
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "bg-white text-gray-600 hover:bg-gray-100 border"
//             }`}
//           >
//             High CTC (≥20 LPA)
//           </button>
//         </div>

//         {/* Students grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredStudents.map((student) => (
//             <div
//               key={student.id}
//               className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
//             >
//               <div className="p-5">
//                 {/* Top row: name + role */}
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-800">
//                       {student.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
//                       <FaBriefcase className="w-3.5 h-3.5" />
//                       {student.role}
//                     </p>
//                   </div>
//                   <div className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-full text-xs">
//                     ₹{student.lpa} LPA
//                   </div>
//                 </div>

//                 {/* Course */}
//                 <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
//                   <FaGraduationCap className="text-indigo-400" />
//                   <span>{student.course}</span>
//                 </div>

//                 {/* Company & Location */}
//                 <div className="mt-3 flex items-center justify-between text-sm">
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <FaBuilding className="text-gray-400" />
//                     <span className="font-medium">{student.company}</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-gray-500">
//                     <FaMapMarkerAlt className="text-gray-400" />
//                     <span>{student.location}</span>
//                   </div>
//                 </div>

//                 {/* Placement badge */}
//                 <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-green-600">
//                   <FaChartLine />
//                   <span>Placed in 2025</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty state */}
//         {filteredStudents.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No students match this filter.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PlacedStudentsSection;


// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Search, ExternalLink, Trophy } from 'lucide-react';

// const students = [
//   { id: 1, name: 'Namratha M K', company: 'Launched Global', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n1/100/100' },
//   { id: 2, name: 'Lekhana C', company: 'UNLOX', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n2/100/100' },
//   { id: 3, name: 'Pooja N', company: 'UNLOX', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n3/100/100' },
//   { id: 4, name: 'Rishi Kumar', company: 'UNLOX', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n4/100/100' },
//   { id: 5, name: 'Divyashree G M', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n5/100/100' },
//   { id: 6, name: 'Kavana K P', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n6/100/100' },
//   { id: 7, name: 'Divya S', company: 'Muthoot Money', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n7/100/100' },
//   { id: 8, name: 'Harshavrdhan H A', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n8/100/100' },
//   { id: 9, name: 'Sharanya L', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n9/100/100' },
//   { id: 10, name: 'Ramupatel H R', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n10/100/100' },
//   { id: 11, name: 'Lingaraju', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n11/100/100' },
//   { id: 12, name: 'Karthik H', company: 'Muthoot Finance', salary: '2.19 LPA', image: 'https://picsum.photos/seed/n12/100/100' },
//   { id: 13, name: 'Deekshitha', company: 'Muthoot Finance', salary: '2.19 LPA', image: 'https://picsum.photos/seed/n13/100/100' },
//   { id: 14, name: 'Rekha C', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n14/100/100' },
//   { id: 15, name: 'Raju HR', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n15/100/100' },
//   { id: 16, name: 'Darshan N', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n16/100/100' },
//   { id: 17, name: 'Charan V', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n17/100/100' },
//   { id: 18, name: 'Anip Kumar', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n18/100/100' },
//   { id: 19, name: 'Aashish K', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n19/100/100' },
//   { id: 20, name: 'Madesh M', company: 'Arambha Skill', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n20/100/100' },
// ];

// export default function PlacedStudents() {
//   const [search, setSearch] = useState('');
//   const [isPaused, setIsPaused] = useState(false);

//   const filteredStudents = useMemo(() => {
//     return students.filter(s => 
//       s.name.toLowerCase().includes(search.toLowerCase()) ||
//       s.company.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]);

//   return (
//     <div className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
//           <div className="max-w-xl">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
//               <Trophy className="w-3 h-3" />
//               Placement Records
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Our Wall of Fame
//             </h2>
//             <p className="text-slate-600">
//               Celebrating the hard work and success of our students who have secured positions at leading companies worldwide.
//             </p>
//           </div>
          
//           <div className="relative group">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
//             <input 
//               type="text"
//               placeholder="Search by name or company..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
//             />
//           </div>
//         </div>

//         <div 
//           className="relative"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {search ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               <AnimatePresence mode="popLayout">
//                 {filteredStudents.map((student) => (
//                   <motion.div
//                     key={student.id}
//                     layout
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
//                   >
//                     <img 
//                       src={student.image} 
//                       alt={student.name} 
//                       className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-bold text-slate-900 truncate">{student.name}</h3>
//                       <p className="text-xs text-slate-500 truncate">{student.company}</p>
//                     </div>
//                     <div className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
//                       {student.salary}
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//               {filteredStudents.length === 0 && (
//                 <div className="col-span-full py-12 text-center text-slate-400">
//                   No students found matching "{search}"
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="relative">
//               <motion.div 
//                 className="flex space-x-8 items-center whitespace-nowrap py-4"
//                 animate={{ x: isPaused ? 0 : [0, -2500] }}
//                 transition={{ 
//                   duration: 50, 
//                   repeat: Infinity, 
//                   ease: "linear" 
//                 }}
//               >
//                 {[...students, ...students, ...students].map((student, idx) => (
//                   <div 
//                     key={`${student.id}-${idx}`} 
//                     className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group min-w-[280px]"
//                   >
//                     <div className="relative">
//                       <img 
//                         src={student.image} 
//                         alt={student.name} 
//                         className="w-12 h-12 rounded-full border-2 border-indigo-50 shadow-sm object-cover group-hover:scale-110 transition-transform"
//                         referrerPolicy="no-referrer"
//                       />
//                       <div className="absolute -bottom-1 -right-1 bg-indigo-500 text-white p-0.5 rounded-full border-2 border-white">
//                         <ExternalLink className="w-2 h-2" />
//                       </div>
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{student.name}</span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-xs text-slate-500">{student.company}</span>
//                         <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
//                           {student.salary}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
              
//               {/* Gradient Overlays */}
//               <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
//               <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
//             </div>
//           )}
//         </div>
        
//         {!search && (
//           <p className="text-center mt-8 text-xs text-slate-400 font-medium animate-pulse">
//             Hover to pause • Scroll to explore more
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useMemo, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Search, ExternalLink, Trophy } from 'lucide-react';

// const students = [
//   { id: 1, name: 'Namratha M K', company: 'Launched Global', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n1/100/100' },
//   { id: 2, name: 'Lekhana C', company: 'UNLOX', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n2/100/100' },
//   { id: 3, name: 'Pooja N', company: 'UNLOX', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n3/100/100' },
//   { id: 4, name: 'Rishi Kumar', company: 'UNLOX', salary: '2.16 LPA', image: 'https://picsum.photos/seed/n4/100/100' },
//   { id: 5, name: 'Divyashree G M', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n5/100/100' },
//   { id: 6, name: 'Kavana K P', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n6/100/100' },
//   { id: 7, name: 'Divya S', company: 'Muthoot Money', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n7/100/100' },
//   { id: 8, name: 'Harshavrdhan H A', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n8/100/100' },
//   { id: 9, name: 'Sharanya L', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n9/100/100' },
//   { id: 10, name: 'Ramupatel H R', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n10/100/100' },
//   { id: 11, name: 'Lingaraju', company: 'Meraqui Ventures', salary: '2.4 LPA', image: 'https://picsum.photos/seed/n11/100/100' },
//   { id: 12, name: 'Karthik H', company: 'Muthoot Finance', salary: '2.19 LPA', image: 'https://picsum.photos/seed/n12/100/100' },
//   { id: 13, name: 'Deekshitha', company: 'Muthoot Finance', salary: '2.19 LPA', image: 'https://picsum.photos/seed/n13/100/100' },
//   { id: 14, name: 'Rekha C', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n14/100/100' },
//   { id: 15, name: 'Raju HR', company: 'HRH', salary: '1.2 LPA', image: 'https://picsum.photos/seed/n15/100/100' },
//   { id: 16, name: 'Darshan N', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n16/100/100' },
//   { id: 17, name: 'Charan V', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n17/100/100' },
//   { id: 18, name: 'Anip Kumar', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n18/100/100' },
//   { id: 19, name: 'Aashish K', company: 'Bookwormz', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n19/100/100' },
//   { id: 20, name: 'Madesh M', company: 'Arambha Skill', salary: '3.2 LPA', image: 'https://picsum.photos/seed/n20/100/100' },
// ];

// export default function PlacedStudents() {
//   const [search, setSearch] = useState('');
//   const [isPaused, setIsPaused] = useState(false);
//   const [showSticky, setShowSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Show sticky marquee after 200vh scroll
//       const threshold = window.innerHeight * 4;
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const fullHeight = document.documentElement.scrollHeight;
      
//       // Hide when near the footer (approx 400px from bottom)
//       const isNearBottom = scrollY + windowHeight > fullHeight - 400;
      
//       setShowSticky(scrollY > threshold && !isNearBottom);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const filteredStudents = useMemo(() => {
//     return students.filter(s => 
//       s.name.toLowerCase().includes(search.toLowerCase()) ||
//       s.company.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]);

//   const MarqueeContent = ({ speed = 50, scale = 1 }) => (
//     <motion.div 
//       className="flex space-x-8 items-center whitespace-nowrap py-4"
//       animate={{ x: isPaused ? 0 : [0, -2500] }}
//       transition={{ 
//         duration: speed, 
//         repeat: Infinity, 
//         ease: "linear" 
//       }}
//     >
//       {[...students, ...students, ...students].map((student, idx) => (
//         <div 
//           key={`${student.id}-${idx}`} 
//           className={`flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group ${scale < 1 ? 'scale-90' : ''} min-w-[280px]`}
//         >
//           <div className="relative">
//             <img 
//               src="" 
//               alt="" 
//               className="w-12 h-12 rounded-full border-2 border-indigo-50 shadow-sm object-cover group-hover:scale-110 transition-transform"
//               referrerPolicy="no-referrer"
//             />
//             <div className="absolute -bottom-1 -right-1 bg-indigo-500 text-white p-0.5 rounded-full border-2 border-white">
//               <ExternalLink className="w-2 h-2" />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{student.name}</span>
//             <div className="flex items-center gap-2">
//               <span className="text-xs text-slate-500">{student.company}</span>
//               <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
//                 {student.salary}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   );

//   return (
//     <div className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
//           <div className="max-w-xl">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
//               <Trophy className="w-3 h-3" />
//               Placement Records
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//               Our Wall of Fame
//             </h2>
//             <p className="text-slate-600">
//               Celebrating the hard work and success of our students who have secured positions at leading companies worldwide.
//             </p>
//           </div>
          
//           <div className="relative group">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
//             <input 
//               type="text"
//               placeholder="Search by name or company..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
//             />
//           </div>
//         </div>

//         <div 
//           className="relative"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {search ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               <AnimatePresence mode="popLayout">
//                 {filteredStudents.map((student) => (
//                   <motion.div
//                     key={student.id}
//                     layout
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
//                   >
//                     <img 
//                       src=""
//                       alt="" 
//                       className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-bold text-slate-900 truncate">{student.name}</h3>
//                       <p className="text-xs text-slate-500 truncate">{student.company}</p>
//                     </div>
//                     <div className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
//                       {student.salary}
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//               {filteredStudents.length === 0 && (
//                 <div className="col-span-full py-12 text-center text-slate-400">
//                   No students found matching "{search}"
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="relative">
//               <MarqueeContent />
              
//               {/* Gradient Overlays */}
//               <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
//               <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
//             </div>
//           )}
//         </div>
        
//         {!search && (
//           <p className="text-center mt-8 text-xs text-slate-400 font-medium animate-pulse">
//             Hover to pause • Scroll to explore more
//           </p>
//         )}
//       </div>

//       {/* Sticky Bottom Marquee */}
//       <AnimatePresence>
//         {showSticky && !search && (
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 100, opacity: 0 }}
//             className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] py-1"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <div className="max-w-7xl mx-auto px-4 relative">
//               <div className="absolute -top-6 left-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-t-lg flex items-center gap-2 shadow-lg">
//                 <Trophy className="w-3 h-3" />
//                 RECENT 2024-25 PLACEMENTS
//               </div>
//               <div className="overflow-hidden relative">
//                 <MarqueeContent speed={60} scale={0.85} />
//                 <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent pointer-events-none z-10" />
//                 <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent pointer-events-none z-10" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Trophy } from 'lucide-react';
import unknownImg from '../assets/unknown.webp';

import croppedBook from '../assets/CompanyLogos/cropped-book-logo-1.webp';
import MeraquiLOGO from '../assets/CompanyLogos/cropped-MeraquiLOGO-ConnectingBharattoFutureIndia.webp';
import LaunchedGlobal from '../assets/CompanyLogos/LaunchedGlobal.png';
import HRHNext from '../assets/CompanyLogos/HRHNext.svg';
import Unlox from '../assets/CompanyLogos/Unlox.webp';
import MuthootFinance from '../assets/CompanyLogos/MuthootFinance.png';
import ArambhaSkill from '../assets/CompanyLogos/ArambhaSkill.png';


// const students = [
//   { id: 1, name: 'Namratha M K', company: 'Launched Global', companyLogo: LaunchedGlobal, salary: '2.16 LPA', image: unknownImg },
//   { id: 2, name: 'Lekhana C', company: 'UNLOX', companyLogo: Unlox, salary: '2.16 LPA', image: unknownImg },
//   { id: 3, name: 'Pooja N', company: 'UNLOX', companyLogo: Unlox, salary: '2.16 LPA', image: unknownImg },
//   { id: 4, name: 'Rishi Kumar', company: 'UNLOX', companyLogo: Unlox, salary: '2.16 LPA', image: unknownImg },
//   { id: 5, name: 'Divyashree G M', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
//   { id: 6, name: 'Kavana K P', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
//   { id: 7, name: 'Divya S', company: 'Muthoot Money', companyLogo: MuthootFinance, salary: '1.2 LPA', image: unknownImg },
//   { id: 8, name: 'Harshavrdhan H A', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image: unknownImg },
//   { id: 9, name: 'Sharanya L', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image: unknownImg },
//   { id: 10, name: 'Ramupatel H R', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
//   { id: 11, name: 'Lingaraju', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
//   { id: 12, name: 'Karthik H', company: 'Muthoot Finance', companyLogo: MuthootFinance, salary: '2.19 LPA', image: unknownImg },
//   { id: 13, name: 'Deekshitha', company: 'Muthoot Finance', companyLogo: MuthootFinance, salary: '2.19 LPA', image: unknownImg },
//   { id: 14, name: 'Rekha C', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image：unknownImg },
//   { id：15， name：'Raju HR'， company：'HRH'， companyLogo：HRHNext， salary：'1.2 LPA'， image：unknownImg },
//   { id：16， name：'Darshan N'， company：'Bookwormz'， companyLogo：croppedBook， salary：'3.2 LPA'， image：unknownImg },
//   { id: 17, name: 'Charan V', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },
//   { id: 18, name: 'Anip Kumar', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },
//   { id: 19, name: 'Aashish K', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },
//   { id: 20, name: 'Madesh M', company: 'Arambha Skill', companyLogo: ArambhaSkill, salary: '3.2 LPA', image: unknownImg },
// ];
const students = [
  { id: 1, name: 'Namratha M K', company: 'Launched Global', companyLogo: LaunchedGlobal, salary: '2.16 LPA', image: unknownImg },
  { id: 2, name: 'Lekhana C', company: 'UNLOX', companyLogo: Unlox, salary: '2.16 LPA', image: unknownImg },
  { id: 3, name: 'Pooja N', company: 'UNLOX', companyLogo: Unlox, salary: '2.16 LPA', image: unknownImg },
  { id: 4, name: 'Rishi Kumar', company: 'UNLOX', companyLogo: Unlox, salary: '2.16 LPA', image: unknownImg },
  { id: 5, name: 'Divyashree G M', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
  { id: 6, name: 'Kavana K P', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
  { id: 7, name: 'Divya S', company: 'Muthoot Money', companyLogo: MuthootFinance, salary: '1.2 LPA', image: unknownImg },
  { id: 8, name: 'Harshavrdhan H A', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image: unknownImg },
  { id: 9, name: 'Sharanya L', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image: unknownImg },
  { id: 10, name: 'Ramupatel H R', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
  { id: 11, name: 'Lingaraju', company: 'Meraqui Ventures', companyLogo: MeraquiLOGO, salary: '2.4 LPA', image: unknownImg },
  { id: 12, name: 'Karthik H', company: 'Muthoot Finance', companyLogo: MuthootFinance, salary: '2.19 LPA', image: unknownImg },
  { id: 13, name: 'Deekshitha', company: 'Muthoot Finance', companyLogo: MuthootFinance, salary: '2.19 LPA', image: unknownImg },

  { id: 14, name: 'Rekha C', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image: unknownImg },
  { id: 15, name: 'Raju HR', company: 'HRH', companyLogo: HRHNext, salary: '1.2 LPA', image: unknownImg },
  { id: 16, name: 'Darshan N', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },

  { id: 17, name: 'Charan V', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },
  { id: 18, name: 'Anip Kumar', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },
  { id: 19, name: 'Aashish K', company: 'Bookwormz', companyLogo: croppedBook, salary: '3.2 LPA', image: unknownImg },

  { id: 20, name: 'Madesh M', company: 'Arambha Skill', companyLogo: ArambhaSkill, salary: '3.2 LPA', image: unknownImg },
];

export default function PlacedStudents() {
  const [search, setSearch] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky marquee after 200vh scroll
      const threshold = window.innerHeight * 4;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      // Hide when near the footer (approx 400px from bottom)
      const isNearBottom = scrollY + windowHeight > fullHeight - 400;
      
      setShowSticky(scrollY > threshold && !isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter(s => 
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const MarqueeContent = ({ speed = 50, scale = 1 }) => (
    <motion.div 
      className="flex space-x-8 items-center whitespace-nowrap py-4"
      animate={{ x: isPaused ? 0 : [0, -2500] }}
      transition={{ 
        duration: speed, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    >
      {[...students, ...students, ...students].map((student, idx) => (
          <div className={`flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group ${scale < 1 ? 'scale-90' : ''} min-w-[280px]`}>
          <div className="relative">
            <img 
              src={student.image} 
              alt={student.name} 
              className="w-12 h-12 rounded-full border-2 border-brand-teal/20 shadow-sm object-cover group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 bg-brand-teal text-white p-0.5 rounded-full border-2 border-white">
              <ExternalLink className="w-2 h-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{student.name}</span>
            <div className="flex items-center gap-2">
              {/* <span className="text-xs text-slate-500">{student.company}</span> */}
              <img src={student.companyLogo} alt={student.company} className="h-5 object-contain" />
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                {student.salary}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center text-gold gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider mb-4">
              <Trophy className="w-3 h-3" />
              Placement Records 2025-26
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-brand-navy mb-4">
              Our Wall of Fame
            </h2>
            <p className="text-slate-600">
              Celebrating the hard work and success of our students who have secured positions at leading companies worldwide.
            </p>
          </div>
          
          {/* <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-teal transition-colors" />
            <input 
              type="text"
              placeholder="Search by name or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all"
            />
          </div> */}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {search ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredStudents.map((student) => (
                    <motion.div
                    key={student.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-teal/30 hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 transition-all group"
                  >
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-brand-navy truncate">{student.name}</h3>
                      <p className="text-xs text-slate-500 truncate">{student.company}</p>
                    </div>
                    <div className="text-[10px] font-bold text-brand-teal bg-brand-teal/10 px-2 py-1 rounded-lg">
                      {student.salary}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredStudents.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-400">
                  No students found matching "{search}"
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <MarqueeContent />
              
              {/* Gradient Overlays */}
              {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" /> */}
            </div>
          )}
        </div>
        
        {/* {!search && (
          <p className="text-center mt-8 text-xs text-slate-400 font-medium animate-pulse">
            Hover to pause • Scroll to explore more
          </p>
        )} */}
      </div>

      {/* Sticky Bottom Marquee */}
      {/* <AnimatePresence>
        {showSticky && !search && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0  z-[100]  py-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="max-w-7xl mx-auto bg-transparent relative">
              <div className="absolute -top-6 left-4 bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-t-lg flex items-center gap-2 shadow-lg">
                <Trophy className="w-4 h-4" />
                RECENT 2024-25 PLACEMENTS
              </div>
              <div className="overflow-hidden relative">
                <MarqueeContent speed={60} scale={0.85} />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary/80 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gold/80 to-transparent pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}
