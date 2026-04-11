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

import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
  FaMapMarkerAlt,
  FaChartLine,
  FaTrophy,
  FaFilter,
} from "react-icons/fa";

// Sample dataset
const allStudents = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Software Engineer",
    course: "Full Stack Development",
    lpa: 24.5,
    company: "Microsoft",
    location: "Bangalore",
    category: "top",
  },
  {
    id: 2,
    name: "Aarav Mehta",
    role: "Data Scientist",
    course: "Data Science & AI",
    lpa: 32.0,
    company: "Google",
    location: "Hyderabad",
    category: "top",
  },
  {
    id: 3,
    name: "Sanya Kapoor",
    role: "Cloud Architect",
    course: "Cloud Computing",
    lpa: 18.2,
    company: "Amazon",
    location: "Pune",
    category: "top",
  },
  {
    id: 4,
    name: "Ishaan Nair",
    role: "Security Analyst",
    course: "Cybersecurity",
    lpa: 15.8,
    company: "Deloitte",
    location: "Gurugram",
    category: "standard",
  },
  {
    id: 5,
    name: "Ananya Verma",
    role: "Strategy Consultant",
    course: "MBA Analytics",
    lpa: 20.3,
    company: "McKinsey",
    location: "Mumbai",
    category: "top",
  },
  {
    id: 6,
    name: "Kunal Saxena",
    role: "ML Engineer",
    course: "Deep Learning",
    lpa: 28.6,
    company: "Apple",
    location: "Bangalore",
    category: "top",
  },
  {
    id: 7,
    name: "Pooja Reddy",
    role: "Product Manager",
    course: "Product Management",
    lpa: 22.0,
    company: "Adobe",
    location: "Noida",
    category: "top",
  },
  {
    id: 8,
    name: "Vikram Singh",
    role: "Digital Marketing Lead",
    course: "Digital Marketing",
    lpa: 12.4,
    company: "Unilever",
    location: "Chennai",
    category: "standard",
  },
];

const PlacedStudentsSection = () => {
  const [filter, setFilter] = useState("all");

  // Filter logic
  const getFilteredStudents = () => {
    if (filter === "topCompanies") {
      return allStudents.filter((s) => s.category === "top");
    }
    if (filter === "highCtc") {
      return allStudents.filter((s) => s.lpa >= 20);
    }
    return allStudents;
  };

  const filteredStudents = getFilteredStudents();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-4">
            <FaTrophy className="text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">
              Placement Success 2025
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Placed Students
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Graduates now working at top companies worldwide
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <p className="text-2xl font-bold text-indigo-600">500+</p>
            <p className="text-sm text-gray-500">Total Placements</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <p className="text-2xl font-bold text-indigo-600">₹52 LPA</p>
            <p className="text-sm text-gray-500">Highest CTC</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
            <p className="text-2xl font-bold text-indigo-600">180+</p>
            <p className="text-sm text-gray-500">Recruiters</p>
          </div>
        </div>

        {/* Filter buttons - interactive */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border"
            }`}
          >
            All Students
          </button>
          <button
            onClick={() => setFilter("topCompanies")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "topCompanies"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border"
            }`}
          >
            Top Companies
          </button>
          <button
            onClick={() => setFilter("highCtc")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "highCtc"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border"
            }`}
          >
            High CTC (≥20 LPA)
          </button>
        </div>

        {/* Students grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-5">
                {/* Top row: name + role */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                      <FaBriefcase className="w-3.5 h-3.5" />
                      {student.role}
                    </p>
                  </div>
                  <div className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-full text-xs">
                    ₹{student.lpa} LPA
                  </div>
                </div>

                {/* Course */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <FaGraduationCap className="text-indigo-400" />
                  <span>{student.course}</span>
                </div>

                {/* Company & Location */}
                <div className="mt-3 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaBuilding className="text-gray-400" />
                    <span className="font-medium">{student.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span>{student.location}</span>
                  </div>
                </div>

                {/* Placement badge */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-green-600">
                  <FaChartLine />
                  <span>Placed in 2025</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No students match this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacedStudentsSection;