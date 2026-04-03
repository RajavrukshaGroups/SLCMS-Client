import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const studentGrowth = [
  { year: "2018", students: 1200 },
  { year: "2019", students: 2000 },
  { year: "2020", students: 3200 },
  { year: "2021", students: 5000 },
  { year: "2022", students: 7000 },
  { year: "2023", students: 8000 },
];

const examStats = [
  { exam: "UPSC", success: 80 },
  { exam: "KAS", success: 90 },
  { exam: "CLAT", success: 75 },
  { exam: "NEET", success: 85 },
];

const AboutPremium = () => {
  return (
    <div className="bg-[#f5fffe] text-gray-800">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        {/* 🔥 ONLY Top Black Fade */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent" />
    </div>

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-bold text-[#0F9D9A] mb-4">
          Transforming Education into Results
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A data-driven institution combining academics + competitive success.
        </p>
      </section>

      {/* STATS CARDS (DASHBOARD STYLE) */}
      <section className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-20">
        {[
          { title: "Students", value: "8000+" },
          { title: "Years", value: "20+" },
          { title: "Selections", value: "Top Ranks" },
          { title: "Programs", value: "10+" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-[#dff3f2]"
          >
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-3xl font-bold text-[#0F9D9A]">
              {item.value}
            </h2>
          </div>
        ))}
      </section>

      {/* GRAPH SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 mb-20">

        {/* LINE CHART */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#0F9D9A] mb-4">
            Student Growth
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={studentGrowth}>
              <XAxis dataKey="year" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#0F9D9A"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#0F9D9A] mb-4">
            Exam Success Rate (%)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={examStats}>
              <XAxis dataKey="exam" />
              <Tooltip />
              <Bar dataKey="success" fill="#E5C14C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </section>

      {/* VISUAL FEATURES GRID */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">
        {[
          "Integrated Coaching",
          "Leadership Training",
          "Smart Classrooms",
          "Digital Library",
          "Green Campus",
          "Sports & Activities",
        ].map((item, i) => (
          <div
            key={i}
            className="bg-linear-to-br from-[#0F9D9A] to-[#0c7c79] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </section>

      {/* TIMELINE VISUAL */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-[#0F9D9A] text-center mb-10">
          Growth Journey
        </h2>

        <div className="space-y-6">
          {["Founded", "Expanded Programs", "National Recognition", "Top Results"].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#E5C14C] rounded-full"></div>
                <div className="bg-white p-4 rounded-xl shadow w-full">
                  {item}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-[#0F9D9A] text-white">
        <h2 className="text-3xl font-bold mb-4">
          Build Your Future With Us
        </h2>
        <button className="bg-[#E5C14C] px-8 py-3 rounded-full font-semibold hover:bg-[#d4b13f]">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default AboutPremium;

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// const growthData = [
//   { year: "2018", students: 1000 },
//   { year: "2019", students: 1800 },
//   { year: "2020", students: 3000 },
//   { year: "2021", students: 4800 },
//   { year: "2022", students: 6500 },
//   { year: "2023", students: 8000 },
// ];

// const successData = [
//   { name: "UPSC", value: 85 },
//   { name: "KAS", value: 90 },
//   { name: "CLAT", value: 75 },
//   { name: "NEET", value: 80 },
// ];

// const AboutPremiumLong = () => {
//   return (
//     <div className="bg-[#f5fffe] text-gray-800">

//       {/* HERO */}
//       <section className="py-28 text-center px-6">
//         <h1 className="text-6xl font-bold text-[#0F9D9A] mb-6 leading-tight">
//           Building Future Leaders <br /> Through Smart Education
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-600">
//           A modern institution combining academics, competitive preparation,
//           and real-world learning to create impactful careers.
//         </p>
//       </section>

//       {/* STATS DASHBOARD */}
//       <section className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mb-24">
//         {[
//           { label: "Students Empowered", value: "8000+" },
//           { label: "Years of Excellence", value: "20+" },
//           { label: "Top Rankings", value: "All India" },
//           { label: "Programs", value: "10+" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border"
//           >
//             <p className="text-gray-500">{item.label}</p>
//             <h2 className="text-3xl font-bold text-[#0F9D9A]">
//               {item.value}
//             </h2>
//           </div>
//         ))}
//       </section>

//       {/* STORY SECTION */}
//       <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-24">
//         <div>
//           <h2 className="text-3xl font-bold text-[#0F9D9A] mb-4">
//             Our Approach
//           </h2>
//           <p className="text-gray-600 leading-relaxed">
//             We focus on blending academic excellence with competitive readiness.
//             Students are trained early with structured programs that build
//             knowledge, discipline, and leadership qualities required for
//             national-level careers.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={growthData}>
//               <XAxis dataKey="year" />
//               <Tooltip />
//               <Line dataKey="students" stroke="#0F9D9A" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </section>

//       {/* PROGRAM BLOCK */}
//       <section className="bg-[#0F9D9A] text-white py-24 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Integrated Learning Programs
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             "Pre-University + Competitive Exams",
//             "Degree + Civil Services Preparation",
//             "Law & Governance Programs",
//             "Skill Development & Training",
//             "Career-Oriented Coaching",
//             "Personality Development",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SUCCESS GRAPH */}
//       <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <h3 className="mb-4 font-semibold text-[#0F9D9A]">
//             Success Rate (%)
//           </h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={successData}>
//               <XAxis dataKey="name" />
//               <Tooltip />
//               <Bar dataKey="value" fill="#E5C14C" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold text-[#0F9D9A] mb-4">
//             Proven Results
//           </h2>
//           <p className="text-gray-600">
//             Our structured approach consistently delivers strong outcomes across
//             multiple competitive exams, helping students achieve top ranks and
//             career success at national and state levels.
//           </p>
//         </div>
//       </section>

//       {/* INFRA GRID */}
//       <section className="max-w-6xl mx-auto px-6 py-24">
//         <h2 className="text-3xl font-bold text-center text-[#0F9D9A] mb-12">
//           Campus & Facilities
//         </h2>

//         <div className="grid md:grid-cols-4 gap-6">
//           {[
//             "Smart Classrooms",
//             "Digital Library",
//             "Wi-Fi Campus",
//             "Sports Complex",
//             "Green Campus",
//             "Hostel Facilities",
//             "Computer Labs",
//             "Student Clubs",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* VALUES */}
//       <section className="bg-[#f0fbfa] py-24 px-6">
//         <h2 className="text-3xl font-bold text-center text-[#0F9D9A] mb-12">
//           Our Core Values
//         </h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//           {[
//             "Integrity",
//             "Leadership",
//             "Discipline",
//             "Innovation",
//             "Responsibility",
//             "Excellence",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl text-center shadow"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="text-center py-24 bg-[#0F9D9A] text-white">
//         <h2 className="text-4xl font-bold mb-4">
//           Your Future Starts Here
//         </h2>
//         <p className="mb-6">
//           Take the first step towards a successful and meaningful career.
//         </p>
//         <button className="bg-[#E5C14C] px-10 py-3 rounded-full font-semibold hover:bg-[#d4b13f]">
//           Explore Courses
//         </button>
//       </section>

//     </div>
//   );
// };

// export default AboutPremiumLong;