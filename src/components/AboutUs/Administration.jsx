// import { motion } from 'motion/react';
//import { User, GraduationCap, Briefcase, Users, Quote } from 'lucide-react';
// import founder from "../../assets/founder-edi.png"
// import principal from "../../assets/principal.jpg"
// import cleraMam from "../../assets/clera-mam.jpg"

// export default function Administration() {
//   const leaders = [
//     {
//       name: "Sri Dr. N. Ramachandrayya",
//       role: "Founder & Chairman",
//       icon: founder,
//       type: "Founder"
//     },
//     {
//       name: "Dr Joseph",
//       role: "Principal",
//       icon: principal,
//       type: "Principal"
//     },
//     {
//       name: "Smt. Clara Robert",
//       role: "Professor",
//       icon: cleraMam,
//       type: "Administrator"
//     }
//   ];

//   return (
//     <section id="administration" className="py-24 bg-zinc-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-sm font-bold text-purple-600 tracking-widest uppercase mb-4">Administration</h2>
//           <h3 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-6">
//             Management & Leadership
//           </h3>
//           <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
//         </motion.div>

//         {/* Key Leaders Grid */}
//         <div className="grid md:grid-cols-3 gap-8 mb-24">
//           {leaders.map((leader, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group text-center"
//             >
//               <div className="w-26 h-26 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
//                <img src={leader.icon} alt={leader.name} className="w-full h-full object-cover rounded-2xl" />
//               </div>
//               {/* <div className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-2">{leader.type}</div> */}
//               <h4 className="text-xl font-bold text-zinc-900 mb-1">{leader.name}</h4>
//               <p className="text-zinc-500 text-sm">{leader.role}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Principal's Message */}
//         <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5"
//           >
//             <div className="relative">
//               <div className="absolute -top-4 -left-4 text-purple-200">
//                 <Quote className="w-20 h-20 fill-current" />
//               </div>
//               <div className="relative z-10">
//                 <h4 className="text-3xl font-extrabold text-zinc-900 mb-6">Principal's Message</h4>
//                 <div className="space-y-4 text-zinc-600 leading-relaxed">
//                   <p className="font-medium text-zinc-900">
//                     "Today, children in India are growing in a more challenging and demanding environment. The rate of change in every sphere is rapid; with the enhancement of knowledge exchange and technological development, the world is going to be flatter and faster."
//                   </p>
//                   <p>
//                     The college curriculum is orientated to boost the scholastic, physical, emotional, social and cultural needs of the student. A strong requirement today is to simultaneously weave a firm moral fibre in the student’s personality. The key to this goal is to pursue a value-based education process.
//                   </p>
//                   <p>
//                     The practice of value-orientated process acts as a nucleus around which all our college activities revolve. We are very conscious of the fact that emotional stability plays a very significant role in the healthy growth of the students.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-7 bg-white p-10 rounded-[40px] border border-zinc-100 shadow-sm space-y-6 text-zinc-600 leading-relaxed"
//           >
//             <p>
//               One of the important tools to achieve this is through more interaction and one-to-one rapport with our students. This open and interactive approach also helps in discovering and strengthening inherent talent in the student in all fields. All our college activities are based on a participatory spirit that reduces the inhibition levels of the students and thus assists the students in becoming aware of their potential.
//             </p>
//             <p>
//               The college atmosphere evokes a team spirit among the students and faculties with the conviction that ‘We Can Do It.’ The college motto ‘Discipline, Dedication, Distinction' constantly inspires us to achieve greater heights. We promote the joy and excitement of learning and also enjoy the pleasure of our achievements.
//             </p>
//             <p>
//               Rooted with a mission of imparting education to all sections of society, Sri Lakshmi College of Management and Science was started under the Danavanthri Educational Trust in 2015. The college has expanded in all directions, attracting the students right from throughout the country.
//             </p>
//             <div className="pt-6 border-t border-zinc-100">
//               <p className="text-sm italic">
//                 "The college encompasses knowledge, skills and values where teaching is done through experimental learning and discipline is interlaced by friendly mentoring."
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Faculty & Staff */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="rounded-[40px] overflow-hidden shadow-2xl h-[400px]"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
//               alt="Faculty meeting" 
//               className="w-full h-full object-cover"
//               referrerPolicy="no-referrer"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex gap-6">
//               <div className="flex-shrink-0 w-12 h-12 bg-lime-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
//                 <Users className="w-6 h-6" />
//               </div>
//               <div>
//                 <h4 className="text-2xl font-bold text-zinc-900 mb-4">Faculty and Staff</h4>
//                 <p className="text-zinc-500 leading-relaxed">
//                   The faculty members are highly qualified, and they are committed to providing quality education. Guest lecturers and seminars are held regularly by inviting eminent scholars, resourceful dignitaries, and teachers who are well versed in different fields.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
//               <p className="text-zinc-600 text-sm leading-relaxed">
//                 Inviting highly qualified persons of eminence to enlighten the students on the healthcare, medical, paramedical and management industries as well as to develop and maintain good industry-institute relationships is also one of the best features of the curriculum activities, which will create job opportunities for their brilliant students.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import { User, GraduationCap, Briefcase, Users, Quote } from 'lucide-react';
import founder from "../../assets/founder-img.jpeg"
import principal from "../../assets/principal.jpg"
//import cleraMam from "../../assets/clera-mam.jpg"
import cleraMam from '../../assets/clera-mam.jpeg'
import faculty from '../../assets/faculty.jpeg'
//import funder from '../../assets/funder-img.png'


export default function App() {
  return (
   
      <div className="max-w-6xl mx-auto overflow-hidden flex flex-col">
        
        {/* Section: Founder & Aspiration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left: Founder Image & Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center"
          >
            <div className="relative p-1 border-[6px] border-[#0ea5e9]">
              <img 
                src={founder} 
                alt="Sri Dr. N. Ramachandrayya"
                className="w-full max-w-[320px] h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-[#1e3a8a] text-2xl font-bold">Sri Dr. N. Ramachandrayya</h2>
              <p className="text-gray-600 italic">Founder & Chairman, SLGI - SLMSH</p>
            </div>
          </motion.div>

          {/* Right: Aspiration Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-[#0ea5e9] text-3xl font-bold tracking-widest mb-4 uppercase">Aspiration</h1>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                A diverse community where inclusivity is a commitment and broad practice; 
                all our students feel welcome, supported, seen and heard; and equal 
                educational opportunity is made real.
              </p>
              <p>
                Where athletes are scholars, wellness and health are high priorities, 
                and each individual can flourish and thrive.
              </p>
              <p>
                A welcoming campus community that supports the whole person, where we 
                focus on talents such as writing and speaking clearly, analysing 
                complex problems from multiple perspectives, compassion, integrity 
                and moral courage.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section: Vision/Mission & Medical Director */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-12 py-8 bg-gray-50/50">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-bold text-gray-900 mr-2">Vision:</span> 
                To educate the citizens and citizen-leaders for our society. 
                We do this through our commitment to the transformative power 
                of a liberal arts and sciences education
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-bold text-gray-900 mr-2">Mission:</span> 
                We will have a transformative impact on society through continual 
                innovation in education, research, creativity, and entrepreneurship
              </p>
            </div>
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="overflow-hidden shadow-lg border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400" 
                alt="Dr. Smitha R. Chandra"
                className="w-full max-w-[320px] h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center md:text-right">
              <h3 className="text-[#b91c1c] text-xl font-bold">Dr. Smitha R. Chandra</h3>
              <p className="text-gray-600">Medical Director, SLMSH</p>
            </div>
          </motion.div>
        </div> */}

        {/* Section: Principal's Message */}
        <div className="p-8 md:p-12 pt-4">
          <div className="relative">
            {/* Blue Tab Header */}
            <div className="inline-block bg-[#0ea5e9] text-white px-8 py-3 rounded-t-3xl font-bold text-xl shadow-md">
              From the Principal's Desk
            </div>
            
            {/* Message Container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0f172a] text-slate-200 rounded-tr-[3rem] rounded-b-[3rem] p-8 md:p-12 flex flex-col lg:flex-row gap-10 shadow-2xl"
            >
              {/* Principal Image Area */}
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start shrink-0">
                <div className="border-4 border-white shadow-xl overflow-hidden w-full max-w-[280px]">
                  <img 
                    src={principal} 
                    alt="Dr. Joseph"
                    className="w-full h-auto object-cover aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <h4 className="text-white text-2xl font-bold">Dr. Joseph</h4>
                  <p className="text-blue-300 font-medium italic opacity-90">Principal of SLCMS - KSOU</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:w-2/3 space-y-6">
                <div className="border-l-4 border-blue-400 pl-6 mb-8">
                  <p className="text-xl md:text-2xl font-bold text-white leading-tight italic">
                    "Success comes to those who work hard and stays with those, 
                    who don't rest on the laurels of the past."
                  </p>
                </div>

                <div className="text-base md:text-lg space-y-5 leading-relaxed text-slate-300 font-light tracking-wide">
                  <p>
                    Education is not merely acquirement of facts but also of values 
                    which help us improve the different facets of mankind. It ensures 
                    that we leave the world a far better place than we found it. A 
                    pivotal role of education lies in shaping the personality of a 
                    student into a healthy mind and happy soul, who is not only equipped 
                    with 21st century skills and aptitude required for academic excellence 
                    but also face the challenges of life in a balanced and harmonious way. 
                  </p>
                  <p>
                    Therefore, the system of Education should work as a catalyst in making 
                    each student a balanced human being having his core strengths embedded 
                    in the learning experiences emanating from our rich socio-cultural roots. 
                    At Sri Lakshmi we enterprise to map academic excellence with a strong human 
                    value system, which in myriad ways is ingrained in the culture of the college.
                  </p>
                  <p>
                    I also laud the relentless efforts of our teachers for giving their best 
                    in bringing out the best in each student. Teamwork is the hallmark of our 
                    every success. Of I am very sure through a collaborative effort we can 
                    achieve more to benefit our students who are the future leaders of tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section: Administrator's Message */}
        <div className="p-8 md:p-12 py-12 bg-white">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-[#1e3a8a] text-3xl font-bold">Prof. Clara Robert</h2>
            <p className="text-[#0ea5e9] text-xl font-bold">Administrator – SLCMS - KSOU</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left side: Text content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6 text-lg leading-relaxed text-gray-700"
            >
              <p>
                It gives me great pleasure to invite you to take an initial peek into the heart that 
                beats behind the appealing facade of Sri Lakshmi College of Management & Science.
              </p>
              <p>
                Your interest in this exceptional institution which has recorded 8 years constant 
                development, in the course of which it has accomplished much, making it one of 
                the colleges recognized for its excellence and therefore, much sought after by the 
                fresh applicants.
              </p>
              <p>
                The Sri Lakshmi College of Management and Science tradition happily brings together 
                sound academic achievement with an extensive, vibrant co-curricular programme that 
                includes sports, and leadership training programmes. Our mission is to inculcate 
                the love of knowledge in our students and, for this, we aim to develop the skills 
                and demean our of lifelong 'learning,' essential for making responsible global 
                citizens. This will make them immensely capable of facing the future with 
                resilience and optimism. On the deeper level, we try to instil the values of 
                respect and trust in relationships that are the foundation of real success.
              </p>
              <p>
                At Sri Lakshmi College of Management and Science then, we believe that 'education' 
                is a wholesome, holistic exercise and as such we strive to give a whole new 
                meaning to the word. Coupling this basic premise with the idea of a sense of 
                belonging to one family—the SLCMS family—we look at ourselves as 'care-givers.' 
                We care for the mind- ours is amazing institution; we care for the person—the 
                accent is on the all-round development of personality. I wish you the best in 
                the process of seeking to become a part of this family.
              </p>
            </motion.div>

            {/* Right side: Image content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 border-[4px] border-[#0ea5e9]"
            >
              <img 
                src={cleraMam}
                alt="Prof. Clara Robert"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

                {/* Faculty & Staff */}
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="rounded-[40px] overflow-hidden shadow-2xl h-[400px]"
           >
             <img 
               src={faculty} 
               alt="Faculty meeting" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
             <div className="flex gap-6">
               <div className="flex-shrink-0 w-12 h-12 bg-lime-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                 <Users className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="text-2xl font-bold text-zinc-900 mb-4">Faculty and Staff</h4>
                 <p className="text-zinc-500 leading-relaxed">
                   The faculty members are highly qualified, and they are committed to providing quality education. Guest lecturers and seminars are held regularly by inviting eminent scholars, resourceful dignitaries, and teachers who are well versed in different fields.
                 </p>
               </div>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
               <p className="text-zinc-600 text-sm leading-relaxed">
                 Inviting highly qualified persons of eminence to enlighten the students on the healthcare, medical, paramedical and management industries as well as to develop and maintain good industry-institute relationships is also one of the best features of the curriculum activities, which will create job opportunities for their brilliant students.
               </p>
             </div>
           </motion.div>
         </div>
         </div>
   
  );
}
