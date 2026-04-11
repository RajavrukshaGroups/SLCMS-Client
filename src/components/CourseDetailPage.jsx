// CourseDetailPage.jsx - Individual course detail page
// import React, { useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { 
//   ArrowLeft, 
//   Calendar, 
//   BookOpen, 
//   CheckCircle, 
//   Briefcase, 
//   GraduationCap,
//   Clock,
//   MapPin,
//   Mail,
//   Phone,
//   Send,
//   ChevronRight,
//   Award,
//   Users,
//   Target,
//   Zap,
//   Globe,
//   FileText,
//   Cloud,
//   MessageCircle
// } from 'lucide-react';
// import BscImg from '../assets/Bsc.jpeg';
// import BBAImg from '../assets/BBA.jpeg';
// import BCOMImg from '../assets/BCOM-1.jpeg';
// import BAImg from '../assets/Ba-sl-clg.jpeg';
// import BCAImg from '../assets/computer-lab-scaled-1.webp';
// import MCOMImg from '../assets/m.com-img.png';

// // Complete course details content
// const courseDetailsContent = {
//   "bcom": {
//     title: "B.Com",
//     fullTitle: "Bachelor of Commerce",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BCOMImg,
//     color: "from-amber-500 to-orange-600",
//     badge: "Legacy Program",
//     overview: `If you are making B.Com as your career choice, then it is a smart decision. It is one of the trending courses after 10+2.

// Bachelor of commerce offers understanding in Accounting, Economics, Business Law, Taxation, Insurance and Management.

// The Bachelor of Commerce (B.com) degree was first offered at the University of Birmingham. In India, the duration of B.com is 3 years. Candidates can pursue B.com in regular and distance mode.

// The Bachelor of Commerce program prepares you for a career in accounting, banking, financial management, information systems and management.`,
//     admission: `Generally, students are admitted in B.Com on the basis of merit. The merit is prepared on the basis of candidate's performance in higher secondary examination. Some Universities also conduct the entrance test for admitting students. Besides candidate's academic knowledge, some colleges conducts interview.

// Candidates who wish to pursue MBA after the completion of B.Com have to appear the entrance test namely Common Admission Test (CAT), Management Aptitude Test (MAT), etc. Some institutions also organizes their own entrance exam for giving admission to their colleges.`,
//     career: `Job opportunities exist right after the programme. Jobs for B.Com graduates exist in India as well as in abroad.

// After completion of B.Com, you can apply in any organization for the post of accountant. Every company requires accountant to keep track the profit and loss of their company. One must have knowledge in areas like Basic Principles of Accountancy, Cost Accounting and Management Accounting to be an accountant. Other than accountant, there are many career options in this field.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 with Commerce/Arts/Science",
//       "Specializations: Taxation, Accounting, Finance",
//       "Industry Certifications: GST, Tally, SAP"
//     ],
//     jobRoles: ["Accountant", "Financial Analyst", "Tax Consultant", "Auditor", "Banking Officer", "Business Analyst"],
//     topRecruiters: ["Deloitte", "KPMG", "EY", "ICICI Bank", "HDFC Bank", "Infosys", "TCS", "Wipro"],
//     syllabus: [
//       "Financial Accounting", "Corporate Accounting", "Cost Accounting", 
//       "Management Accounting", "Business Economics", "Business Law", 
//       "Income Tax Law & Practice", "Auditing", "Financial Management",
//       "International Finance", "Investment Management", "GST & Customs Law"
//     ]
//   },
//   "bba": {
//     title: "BBA",
//     fullTitle: "Bachelor of Business Administration",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BBAImg,
//     color: "from-emerald-500 to-teal-600",
//     badge: "Top Rated",
//     overview: `Bachelor of Business Administration (BBA) is a professional undergraduate program that provides comprehensive knowledge of business and management principles. It covers subjects like Marketing, Human Resources, Finance, Operations, and Entrepreneurship.

// The program develops leadership qualities, decision-making skills, and strategic thinking. BBA graduates are prepared for managerial roles and entrepreneurial ventures across various industries.`,
//     admission: `Admission to BBA programs is typically based on merit in 10+2 examinations. Many institutes also conduct entrance exams and personal interviews to assess candidates' aptitude for management studies. Popular entrance tests include IPU CET, SET, and university-specific exams.

// Candidates should have strong communication skills and analytical thinking. The selection process may also include group discussions and personal interviews.`,
//     career: `BBA graduates have diverse career opportunities in corporate sectors, MNCs, startups, and government organizations. Popular roles include Marketing Executive, HR Associate, Business Development Manager, Operations Manager, and Entrepreneur.

// Many graduates pursue MBA for advanced career growth. With experience, BBA graduates can move into senior management positions or start their own ventures.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 from recognized board",
//       "Specializations: Marketing, HR, Finance, Operations",
//       "Industry Exposure: Internships, Live Projects"
//     ],
//     jobRoles: ["Marketing Executive", "HR Associate", "Business Analyst", "Operations Manager", "Entrepreneur", "Sales Manager"],
//     topRecruiters: ["Amazon", "Flipkart", "HDFC Bank", "ICICI Bank", "Deloitte", "KPMG", "Microsoft", "Google"],
//     syllabus: [
//       "Principles of Management", "Organizational Behavior", "Marketing Management",
//       "Financial Accounting", "Human Resource Management", "Business Statistics",
//       "Operations Management", "Business Law", "Strategic Management",
//       "Entrepreneurship Development", "Digital Marketing", "Business Analytics"
//     ]
//   },
//   "bca": {
//     title: "BCA",
//     fullTitle: "Bachelor of Computer Applications",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BCAImg,
//     color: "from-purple-500 to-pink-600",
//     badge: "Tech Forward",
//     overview: `Bachelor of Computer Applications (BCA) is an undergraduate program focused on computer applications and software development. It covers programming languages, database management, web development, cloud computing, and emerging technologies like AI and Machine Learning.

// The program emphasizes practical coding skills, software engineering principles, and industry-relevant technologies. Students gain hands-on experience through lab work and project development.`,
//     admission: `Admission to BCA is generally based on merit in 10+2 with Mathematics/Computer Science as a subject. Some universities conduct entrance exams to evaluate candidates' aptitude for computer science and logical reasoning.

// Basic knowledge of computers and programming is beneficial. Candidates should have strong analytical and problem-solving skills.`,
//     career: `BCA graduates have excellent career prospects in IT industry, software companies, MNCs, and tech startups. Popular roles include Software Developer, Web Developer, System Analyst, Database Administrator, Cloud Architect, and IT Consultant.

// With additional certifications, BCA graduates can specialize in emerging technologies like AI, Cloud Computing, or Cybersecurity. Many pursue MCA or MBA for further growth.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 with Mathematics/Computer Science",
//       "Specializations: Cloud Computing, Cybersecurity, Full-Stack",
//       "Certifications: AWS, Azure, Java, Python"
//     ],
//     jobRoles: ["Software Developer", "Web Developer", "System Analyst", "Cloud Architect", "Database Admin", "IT Consultant"],
//     topRecruiters: ["Infosys", "TCS", "Wipro", "Microsoft", "Google", "Amazon", "Accenture", "IBM"],
//     syllabus: [
//       "Programming in C", "Object Oriented Programming (Java/C++)", "Data Structures",
//       "Database Management Systems", "Web Technologies", "Operating Systems",
//       "Computer Networks", "Software Engineering", "Cloud Computing",
//       "Python Programming", "Mobile App Development", "Artificial Intelligence"
//     ]
//   },
//   "bsc-cbz": {
//     title: "B.Sc (CBZ)",
//     fullTitle: "Bachelor of Science in Chemistry, Botany, Zoology",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BscImg,
//     color: "from-blue-500 to-cyan-600",
//     badge: "Research Hub",
//     overview: `Bachelor of Science in Chemistry, Botany, Zoology (CBZ) is a comprehensive program that explores the fascinating world of life sciences. It provides hands-on laboratory experience, field research opportunities, and theoretical knowledge in biological and chemical sciences.

// The program covers three core disciplines: Chemistry (organic, inorganic, physical), Botany (plant biology, taxonomy, physiology), and Zoology (animal biology, ecology, evolution).`,
//     admission: `Admission is based on merit in 10+2 with Biology, Chemistry, and Physics as core subjects. Candidates must have secured minimum qualifying marks in their higher secondary examination.

// Students with a strong interest in life sciences and research are ideal candidates for this program.`,
//     career: `B.Sc CBZ graduates can pursue careers in research, healthcare, pharmaceuticals, environmental science, biotechnology, and education. Many opt for higher studies like M.Sc, PhD, or professional courses like MBA in Healthcare Management.

// Opportunities exist in research laboratories, pharmaceutical companies, environmental agencies, and academic institutions.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 with PCB (Physics, Chemistry, Biology)",
//       "Laboratory: State-of-the-art research labs",
//       "Field Work: Ecological studies and research projects"
//     ],
//     jobRoles: ["Research Assistant", "Lab Technician", "Environmental Scientist", "Pharmaceutical Associate", "Quality Analyst", "Educator"],
//     topRecruiters: ["Biocon", "Syngene", "Novartis", "Pfizer", "Ecolab", "Environmental Agencies", "Research Institutes"],
//     syllabus: [
//       "Inorganic Chemistry", "Organic Chemistry", "Physical Chemistry",
//       "Analytical Chemistry", "Plant Taxonomy", "Plant Physiology",
//       "Cell Biology", "Genetics", "Ecology and Evolution",
//       "Animal Physiology", "Biochemistry", "Molecular Biology"
//     ]
//   },
//   "ba-journalism": {
//     title: "BA Journalism",
//     fullTitle: "Bachelor of Arts in Journalism & Mass Communication",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BAImg,
//     color: "from-rose-500 to-red-600",
//     badge: "Creative Edge",
//     overview: `Bachelor of Arts in Journalism & Mass Communication prepares students for the dynamic media industry. The program covers print, broadcast, digital journalism, media ethics, content creation, and communication strategies.

// Students learn to create compelling stories across multiple platforms, understand media laws, and develop critical thinking skills essential for modern journalism.`,
//     admission: `Admission is typically based on merit in 10+2 from any stream. Some institutes conduct entrance exams and personal interviews to assess communication skills and media aptitude.

// Candidates with strong writing skills, curiosity, and ethical awareness are well-suited for this program.`,
//     career: `Graduates can work in news organizations, digital media, advertising agencies, PR firms, and corporate communication departments. Opportunities exist as journalists, content creators, media planners, and PR specialists.

// With experience, professionals can move into editorial roles, media management, or start their own media ventures.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 from any stream",
//       "Practical Training: Newsroom simulations, Studio work",
//       "Industry Connect: Internships with media houses"
//     ],
//     jobRoles: ["Journalist", "Content Writer", "Media Planner", "PR Specialist", "Digital Marketer", "News Anchor"],
//     topRecruiters: ["Times Group", "NDTV", "CNN News18", "Republic TV", "Zee Media", "PR Agencies", "Digital Media Firms"],
//     syllabus: [
//       "Introduction to Journalism", "Reporting and Editing", "Media Laws and Ethics",
//       "Digital Media Production", "Broadcast Journalism", "Public Relations",
//       "Advertising Principles", "Media Management", "Photojournalism",
//       "Investigative Journalism", "Social Media Management", "Content Strategy"
//     ]
//   },
//   "mcom": {
//     title: "M.Com",
//     fullTitle: "Master of Commerce",
//     duration: "2 Years",
//     creds: "120 Credits",
//     level: "Postgraduate",
//     img: MCOMImg,
//     color: "from-slate-600 to-gray-800",
//     badge: "Postgraduate Excellence",
//     overview: `Master of Commerce (M.Com) is a postgraduate program that deepens knowledge in advanced accounting, financial management, corporate strategy, and research methodology. It prepares students for leadership roles in commerce and finance sectors.

// The program focuses on developing analytical skills, strategic thinking, and research capabilities. Students engage with case studies, industry projects, and research dissertations.`,
//     admission: `Admission is based on merit in B.Com or equivalent undergraduate degree. Some universities conduct entrance exams to assess candidates' knowledge in commerce and analytical skills.

// Candidates should have a strong foundation in commerce subjects and a desire to pursue advanced studies or research.`,
//     career: `M.Com graduates excel in corporate finance, investment banking, consulting, academia, and research. Many pursue PhD or professional certifications like CA, CMA, or CFA.

// Senior roles include Financial Controller, Investment Banker, Corporate Treasurer, and Professor. The program also prepares students for competitive exams like UGC NET for academic careers.`,
//     keyHighlights: [
//       "Duration: 2 Years (4 Semesters)",
//       "Eligibility: B.Com or BBA with minimum 50% marks",
//       "Specializations: Finance, Accounting, Taxation",
//       "Research: Dissertation and Research Projects"
//     ],
//     jobRoles: ["Financial Analyst", "Investment Banker", "Corporate Accountant", "Tax Consultant", "Professor", "Research Associate"],
//     topRecruiters: ["Goldman Sachs", "Morgan Stanley", "Deloitte", "PwC", "EY", "KPMG", "ICICI Bank", "HDFC Bank"],
//     syllabus: [
//       "Advanced Financial Accounting", "Corporate Finance", "Strategic Management",
//       "Research Methodology", "International Finance", "Financial Derivatives",
//       "Taxation Planning", "Auditing and Assurance", "Business Analytics",
//       "Investment Management", "Corporate Governance", "Dissertation Project"
//     ]
//   }
// };

// const CourseDetailPage = () => {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const course = courseDetailsContent[courseId];
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [toastMessage, setToastMessage] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const showToast = (message) => {
//     setToastMessage(message);
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.email || !formData.phone) {
//       showToast('Please fill all required fields.');
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       showToast('Enter a valid email address.');
//       return;
//     }
//     showToast(`Thank you ${formData.fullName}! We'll contact you about ${course.title}.`);
//     setFormData({ fullName: '', email: '', phone: '', message: '' });
//   };

//   if (!course) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50/20">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-stone-800 mb-4">Course not found</h1>
//           <Link to="/" className="text-amber-600 hover:text-amber-700 flex items-center gap-2 justify-center">
//             <ArrowLeft size={18} /> Back to Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20">
//       {/* Toast Notification */}
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 z-50 bg-stone-800 text-white px-6 py-3 rounded-full shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
//           <span>{toastMessage}</span>
//         </div>
//       )}

//       {/* Back Button */}
//       <div className="container mx-auto px-4 md:px-6 pt-6">
//         <Link 
//           to="/" 
//           className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors group"
//         >
//           <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//           Back to All Courses
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="relative h-80 md:h-96 overflow-hidden">
//           <img 
//             src={course.img} 
//             alt={course.title} 
//             className="w-full h-full object-cover"
//           />
//           <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-75`} />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
//             <div className="container mx-auto px-4 md:px-6">
//               <span className={`inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3`}>
//                 {course.badge}
//               </span>
//               <h1 className="text-4xl md:text-6xl font-bold mb-2">{course.title}</h1>
//               <p className="text-xl md:text-2xl opacity-90">{course.fullTitle}</p>
//               <div className="flex flex-wrap gap-4 mt-4">
//                 <span className="flex items-center gap-2 text-white/90"><Calendar size={16} /> {course.duration}</span>
//                 <span className="flex items-center gap-2 text-white/90"><BookOpen size={16} /> {course.creds}</span>
//                 <span className="flex items-center gap-2 text-white/90"><GraduationCap size={16} /> {course.level}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 md:px-6 py-12">
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Left Column - Main Content */}
//           <div className="lg:col-span-2 space-y-10">
//             {/* Overview Section */}
//             <div data-aos="fade-up">
//               <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
//                 <BookOpen size={24} className="text-amber-600" />
//                 Program Overview
//               </h2>
//               <div className="prose prose-stone max-w-none">
//                 {course.overview.split('\n\n').map((paragraph, idx) => (
//                   <p key={idx} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
//                 ))}
//               </div>
//             </div>

//             {/* Key Highlights */}
//             <div data-aos="fade-up" data-aos-delay="100">
//               <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
//                 <Award size={24} className="text-amber-600" />
//                 Key Highlights
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {course.keyHighlights.map((highlight, idx) => (
//                   <div key={idx} className="flex items-center gap-2 text-stone-600 bg-stone-50 p-3 rounded-xl">
//                     <CheckCircle size={16} className="text-amber-600 flex-shrink-0" />
//                     <span>{highlight}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Syllabus */}
//             <div data-aos="fade-up" data-aos-delay="200">
//               <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
//                 <BookOpen size={24} className="text-amber-600" />
//                 Course Curriculum
//               </h2>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                 {course.syllabus.map((subject, idx) => (
//                   <div key={idx} className="flex items-center gap-2 text-stone-600 text-sm bg-stone-50 p-2 rounded-lg">
//                     <ChevronRight size={12} className="text-amber-600" />
//                     <span>{subject}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Admission Process */}
//             <div data-aos="fade-up" data-aos-delay="300">
//               <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
//                 <GraduationCap size={24} className="text-amber-600" />
//                 Admission Process
//               </h2>
//               <div className="prose prose-stone max-w-none">
//                 {course.admission.split('\n\n').map((paragraph, idx) => (
//                   <p key={idx} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
//                 ))}
//               </div>
//             </div>

//             {/* Career Opportunities */}
//             <div data-aos="fade-up" data-aos-delay="400">
//               <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
//                 <Briefcase size={24} className="text-amber-600" />
//                 Career Opportunities
//               </h2>
//               <div className="prose prose-stone max-w-none">
//                 {course.career.split('\n\n').map((paragraph, idx) => (
//                   <p key={idx} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
//                 ))}
//               </div>
              
//               <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">Job Roles</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {course.jobRoles.map((role, idx) => (
//                   <div key={idx} className="flex items-center gap-2 text-stone-600 bg-stone-50 p-3 rounded-xl">
//                     <Briefcase size={16} className="text-amber-600 flex-shrink-0" />
//                     <span>{role}</span>
//                   </div>
//                 ))}
//               </div>

//               <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">Top Recruiters</h3>
//               <div className="flex flex-wrap gap-2">
//                 {course.topRecruiters.map((recruiter, idx) => (
//                   <span key={idx} className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
//                     {recruiter}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Sidebar */}
//           <div className="space-y-6">
//             {/* Enquiry Form */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 sticky top-24" data-aos="fade-left">
//               <h3 className="text-xl font-bold text-stone-800 mb-4">Apply for {course.title}</h3>
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name *"
//                   className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address *"
//                   className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number *"
//                   className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Your Message (Optional)"
//                   rows="3"
//                   className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition resize-none"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
//                 >
//                   <Send size={18} /> Submit Application
//                 </button>
//               </form>
//             </div>

//             {/* Contact Info */}
//             <div className="bg-amber-50 rounded-2xl p-6">
//               <h3 className="text-lg font-bold text-stone-800 mb-3">Need More Information?</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3 text-stone-600">
//                   <Phone size={18} className="text-amber-600" />
//                   <span>+91 9535003404</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-stone-600">
//                   <Mail size={18} className="text-amber-600" />
//                   <span>slgi2k3@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-stone-600">
//                   <MapPin size={18} className="text-amber-600" />
//                   <span>Bengaluru, Karnataka, India</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
//               <h3 className="text-lg font-bold text-stone-800 mb-3">Program at a Glance</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center py-2 border-b border-stone-100">
//                   <span className="text-stone-500">Duration</span>
//                   <span className="font-semibold text-stone-800">{course.duration}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-stone-100">
//                   <span className="text-stone-500">Total Credits</span>
//                   <span className="font-semibold text-stone-800">{course.creds}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2 border-b border-stone-100">
//                   <span className="text-stone-500">Level</span>
//                   <span className="font-semibold text-stone-800">{course.level}</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span className="text-stone-500">Mode</span>
//                   <span className="font-semibold text-stone-800">Full Time</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slide-in-from-bottom-5 {
//           from { transform: translateY(1rem); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-in { animation: slide-in-from-bottom-5 0.3s ease-out; }
//       `}</style>
//     </div>
//   );
// };

// export default CourseDetailPage;

// CourseDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  BookOpen, 
  CheckCircle, 
  Briefcase, 
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronRight,
  Award,
  Globe,
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
import MCAImg from '../assets/MCA.jpg';
import MBAImg from '../assets/MBA.webp';

// Complete course details content for all courses
// const courseDetailsContent = {
//   "bcom": {
//     id: "bcom",
//     title: "B.Com",
//     fullTitle: "Bachelor of Commerce",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BCOMImg,
//     color: "from-amber-500 to-orange-600",
//     badge: "Legacy Program",
//     overview: `If you are making B.Com as your career choice, then it is a smart decision. It is one of the trending courses after 10+2.

// Bachelor of commerce offers understanding in Accounting, Economics, Business Law, Taxation, Insurance and Management.

// The Bachelor of Commerce (B.com) degree was first offered at the University of Birmingham. In India, the duration of B.com is 3 years. Candidates can pursue B.com in regular and distance mode.

// The Bachelor of Commerce program prepares you for a career in accounting, banking, financial management, information systems and management.`,
//     admission: `Generally, students are admitted in B.Com on the basis of merit. The merit is prepared on the basis of candidate's performance in higher secondary examination. Some Universities also conduct the entrance test for admitting students. Besides candidate's academic knowledge, some colleges conducts interview.

// Candidates who wish to pursue MBA after the completion of B.Com have to appear the entrance test namely Common Admission Test (CAT), Management Aptitude Test (MAT), etc. Some institutions also organizes their own entrance exam for giving admission to their colleges.`,
//     career: `Job opportunities exist right after the programme. Jobs for B.Com graduates exist in India as well as in abroad.

// After completion of B.Com, you can apply in any organization for the post of accountant. Every company requires accountant to keep track the profit and loss of their company. One must have knowledge in areas like Basic Principles of Accountancy, Cost Accounting and Management Accounting to be an accountant. Other than accountant, there are many career options in this field.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 with Commerce/Arts/Science",
//       "Specializations: Taxation, Accounting, Finance",
//       "Industry Certifications: GST, Tally, SAP"
//     ],
//     jobRoles: ["Accountant", "Financial Analyst", "Tax Consultant", "Auditor", "Banking Officer", "Business Analyst"],
//     topRecruiters: ["Deloitte", "KPMG", "EY", "ICICI Bank", "HDFC Bank", "Infosys", "TCS", "Wipro"],
//     syllabus: [
//       "Financial Accounting", "Corporate Accounting", "Cost Accounting", 
//       "Management Accounting", "Business Economics", "Business Law", 
//       "Income Tax Law & Practice", "Auditing", "Financial Management",
//       "International Finance", "Investment Management", "GST & Customs Law"
//     ]
//   },
//   "bba": {
//     id: "bba",
//     title: "BBA",
//     fullTitle: "Bachelor of Business Administration",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BBAImg,
//     color: "from-emerald-500 to-teal-600",
//     badge: "Top Rated",
//     overview: `Bachelor of Business Administration (BBA) is a professional undergraduate program that provides comprehensive knowledge of business and management principles. It covers subjects like Marketing, Human Resources, Finance, Operations, and Entrepreneurship.

// The program develops leadership qualities, decision-making skills, and strategic thinking. BBA graduates are prepared for managerial roles and entrepreneurial ventures across various industries.`,
//     admission: `Admission to BBA programs is typically based on merit in 10+2 examinations. Many institutes also conduct entrance exams and personal interviews to assess candidates' aptitude for management studies. Popular entrance tests include IPU CET, SET, and university-specific exams.

// Candidates should have strong communication skills and analytical thinking. The selection process may also include group discussions and personal interviews.`,
//     career: `BBA graduates have diverse career opportunities in corporate sectors, MNCs, startups, and government organizations. Popular roles include Marketing Executive, HR Associate, Business Development Manager, Operations Manager, and Entrepreneur.

// Many graduates pursue MBA for advanced career growth. With experience, BBA graduates can move into senior management positions or start their own ventures.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 from recognized board",
//       "Specializations: Marketing, HR, Finance, Operations",
//       "Industry Exposure: Internships, Live Projects"
//     ],
//     jobRoles: ["Marketing Executive", "HR Associate", "Business Analyst", "Operations Manager", "Entrepreneur", "Sales Manager"],
//     topRecruiters: ["Amazon", "Flipkart", "HDFC Bank", "ICICI Bank", "Deloitte", "KPMG", "Microsoft", "Google"],
//     syllabus: [
//       "Principles of Management", "Organizational Behavior", "Marketing Management",
//       "Financial Accounting", "Human Resource Management", "Business Statistics",
//       "Operations Management", "Business Law", "Strategic Management",
//       "Entrepreneurship Development", "Digital Marketing", "Business Analytics"
//     ]
//   },
//   "bca": {
//     id: "bca",
//     title: "BCA",
//     fullTitle: "Bachelor of Computer Applications",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BCAImg,
//     color: "from-purple-500 to-pink-600",
//     badge: "Tech Forward",
//     overview: `Bachelor of Computer Applications (BCA) is an undergraduate program focused on computer applications and software development. It covers programming languages, database management, web development, cloud computing, and emerging technologies like AI and Machine Learning.

// The program emphasizes practical coding skills, software engineering principles, and industry-relevant technologies. Students gain hands-on experience through lab work and project development.`,
//     admission: `Admission to BCA is generally based on merit in 10+2 with Mathematics/Computer Science as a subject. Some universities conduct entrance exams to evaluate candidates' aptitude for computer science and logical reasoning.

// Basic knowledge of computers and programming is beneficial. Candidates should have strong analytical and problem-solving skills.`,
//     career: `BCA graduates have excellent career prospects in IT industry, software companies, MNCs, and tech startups. Popular roles include Software Developer, Web Developer, System Analyst, Database Administrator, Cloud Architect, and IT Consultant.

// With additional certifications, BCA graduates can specialize in emerging technologies like AI, Cloud Computing, or Cybersecurity. Many pursue MCA or MBA for further growth.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 with Mathematics/Computer Science",
//       "Specializations: Cloud Computing, Cybersecurity, Full-Stack",
//       "Certifications: AWS, Azure, Java, Python"
//     ],
//     jobRoles: ["Software Developer", "Web Developer", "System Analyst", "Cloud Architect", "Database Admin", "IT Consultant"],
//     topRecruiters: ["Infosys", "TCS", "Wipro", "Microsoft", "Google", "Amazon", "Accenture", "IBM"],
//     syllabus: [
//       "Programming in C", "Object Oriented Programming (Java/C++)", "Data Structures",
//       "Database Management Systems", "Web Technologies", "Operating Systems",
//       "Computer Networks", "Software Engineering", "Cloud Computing",
//       "Python Programming", "Mobile App Development", "Artificial Intelligence"
//     ]
//   },
//   "bsc-cbz": {
//     id: "bsc-cbz",
//     title: "B.Sc (CBZ)",
//     fullTitle: "Bachelor of Science in Chemistry, Botany, Zoology",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BscImg,
//     color: "from-blue-500 to-cyan-600",
//     badge: "Research Hub",
//     overview: `Bachelor of Science in Chemistry, Botany, Zoology (CBZ) is a comprehensive program that explores the fascinating world of life sciences. It provides hands-on laboratory experience, field research opportunities, and theoretical knowledge in biological and chemical sciences.

// The program covers three core disciplines: Chemistry (organic, inorganic, physical), Botany (plant biology, taxonomy, physiology), and Zoology (animal biology, ecology, evolution).`,
//     admission: `Admission is based on merit in 10+2 with Biology, Chemistry, and Physics as core subjects. Candidates must have secured minimum qualifying marks in their higher secondary examination.

// Students with a strong interest in life sciences and research are ideal candidates for this program.`,
//     career: `B.Sc CBZ graduates can pursue careers in research, healthcare, pharmaceuticals, environmental science, biotechnology, and education. Many opt for higher studies like M.Sc, PhD, or professional courses like MBA in Healthcare Management.

// Opportunities exist in research laboratories, pharmaceutical companies, environmental agencies, and academic institutions.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 with PCB (Physics, Chemistry, Biology)",
//       "Laboratory: State-of-the-art research labs",
//       "Field Work: Ecological studies and research projects"
//     ],
//     jobRoles: ["Research Assistant", "Lab Technician", "Environmental Scientist", "Pharmaceutical Associate", "Quality Analyst", "Educator"],
//     topRecruiters: ["Biocon", "Syngene", "Novartis", "Pfizer", "Ecolab", "Environmental Agencies", "Research Institutes"],
//     syllabus: [
//       "Inorganic Chemistry", "Organic Chemistry", "Physical Chemistry",
//       "Analytical Chemistry", "Plant Taxonomy", "Plant Physiology",
//       "Cell Biology", "Genetics", "Ecology and Evolution",
//       "Animal Physiology", "Biochemistry", "Molecular Biology"
//     ]
//   },
//   "ba-journalism": {
//     id: "ba-journalism",
//     title: "BA Journalism",
//     fullTitle: "Bachelor of Arts in Journalism & Mass Communication",
//     duration: "3 Years",
//     creds: "180 Credits",
//     level: "Undergraduate",
//     img: BAImg,
//     color: "from-rose-500 to-red-600",
//     badge: "Creative Edge",
//     overview: `Bachelor of Arts in Journalism & Mass Communication prepares students for the dynamic media industry. The program covers print, broadcast, digital journalism, media ethics, content creation, and communication strategies.

// Students learn to create compelling stories across multiple platforms, understand media laws, and develop critical thinking skills essential for modern journalism.`,
//     admission: `Admission is typically based on merit in 10+2 from any stream. Some institutes conduct entrance exams and personal interviews to assess communication skills and media aptitude.

// Candidates with strong writing skills, curiosity, and ethical awareness are well-suited for this program.`,
//     career: `Graduates can work in news organizations, digital media, advertising agencies, PR firms, and corporate communication departments. Opportunities exist as journalists, content creators, media planners, and PR specialists.

// With experience, professionals can move into editorial roles, media management, or start their own media ventures.`,
//     keyHighlights: [
//       "Duration: 3 Years (6 Semesters)",
//       "Eligibility: 10+2 from any stream",
//       "Practical Training: Newsroom simulations, Studio work",
//       "Industry Connect: Internships with media houses"
//     ],
//     jobRoles: ["Journalist", "Content Writer", "Media Planner", "PR Specialist", "Digital Marketer", "News Anchor"],
//     topRecruiters: ["Times Group", "NDTV", "CNN News18", "Republic TV", "Zee Media", "PR Agencies", "Digital Media Firms"],
//     syllabus: [
//       "Introduction to Journalism", "Reporting and Editing", "Media Laws and Ethics",
//       "Digital Media Production", "Broadcast Journalism", "Public Relations",
//       "Advertising Principles", "Media Management", "Photojournalism",
//       "Investigative Journalism", "Social Media Management", "Content Strategy"
//     ]
//   },
//   "mcom": {
//     id: "mcom",
//     title: "M.Com",
//     fullTitle: "Master of Commerce",
//     duration: "2 Years",
//     creds: "120 Credits",
//     level: "Postgraduate",
//     img: MCOMImg,
//     color: "from-slate-600 to-gray-800",
//     badge: "Postgraduate Excellence",
//     overview: `Master of Commerce (M.Com) is a postgraduate program that deepens knowledge in advanced accounting, financial management, corporate strategy, and research methodology. It prepares students for leadership roles in commerce and finance sectors.

// The program focuses on developing analytical skills, strategic thinking, and research capabilities. Students engage with case studies, industry projects, and research dissertations.`,
//     admission: `Admission is based on merit in B.Com or equivalent undergraduate degree. Some universities conduct entrance exams to assess candidates' knowledge in commerce and analytical skills.

// Candidates should have a strong foundation in commerce subjects and a desire to pursue advanced studies or research.`,
//     career: `M.Com graduates excel in corporate finance, investment banking, consulting, academia, and research. Many pursue PhD or professional certifications like CA, CMA, or CFA.

// Senior roles include Financial Controller, Investment Banker, Corporate Treasurer, and Professor. The program also prepares students for competitive exams like UGC NET for academic careers.`,
//     keyHighlights: [
//       "Duration: 2 Years (4 Semesters)",
//       "Eligibility: B.Com or BBA with minimum 50% marks",
//       "Specializations: Finance, Accounting, Taxation",
//       "Research: Dissertation and Research Projects"
//     ],
//     jobRoles: ["Financial Analyst", "Investment Banker", "Corporate Accountant", "Tax Consultant", "Professor", "Research Associate"],
//     topRecruiters: ["Goldman Sachs", "Morgan Stanley", "Deloitte", "PwC", "EY", "KPMG", "ICICI Bank", "HDFC Bank"],
//     syllabus: [
//       "Advanced Financial Accounting", "Corporate Finance", "Strategic Management",
//       "Research Methodology", "International Finance", "Financial Derivatives",
//       "Taxation Planning", "Auditing and Assurance", "Business Analytics",
//       "Investment Management", "Corporate Governance", "Dissertation Project"
//     ]
//   }
// };

const courseDetailsContent = {
  "bcom": {
    id: "bcom",
    title: "B.Com",
    fullTitle: "Bachelor of Commerce",
    duration: "3 Years",
    creds: "180 Credits",
    level: "Undergraduate",
    img: BCOMImg,
    color: "from-amber-500 to-orange-600",
    badge: "Legacy Program",
    overview: `If you are making B.Com as your career choice, then it is a smart decision. It is one of the trending courses after 10+2.

Bachelor of commerce offers understanding in Accounting, Economics, Business Law, Taxation, Insurance and Management.

The Bachelor of Commerce (B.com) degree was first offered at the University of Birmingham. In India, the duration of B.com is 3 years. Candidates can pursue B.com in regular and distance mode.

The Bachelor of Commerce program prepares you for a career in accounting, banking, financial management, information systems and management.`,
    admission: `Generally, students are admitted in B.Com on the basis of merit. The merit is prepared on the basis of candidate's performance in higher secondary examination. Some Universities also conduct the entrance test for admitting students. Besides candidate's academic knowledge, some colleges conducts interview.

Candidates who wish to pursue MBA after the completion of B.Com have to appear the entrance test namely Common Admission Test (CAT), Management Aptitude Test (MAT), etc. Some institutions also organizes their own entrance exam for giving admission to their colleges.`,
    career: `Job opportunities exist right after the programme. Jobs for B.Com graduates exist in India as well as in abroad.

After completion of B.Com, you can apply in any organization for the post of accountant. Every company requires accountant to keep track the profit and loss of their company. One must have knowledge in areas like Basic Principles of Accountancy, Cost Accounting and Management Accounting to be an accountant. Other than accountant, there are many career options in this field.`,
    keyHighlights: [
      "Duration: 3 Years (6 Semesters)",
      "Eligibility: 10+2 with Commerce/Arts/Science",
      "Specializations: Taxation, Accounting, Finance",
      "Industry Certifications: GST, Tally, SAP"
    ],
    jobRoles: ["Accountant", "Financial Analyst", "Tax Consultant", "Auditor", "Banking Officer", "Business Analyst"],
    topRecruiters: ["Deloitte", "KPMG", "EY", "ICICI Bank", "HDFC Bank", "Infosys", "TCS", "Wipro"],
    syllabus: [
      "Financial Accounting", "Corporate Accounting", "Cost Accounting", 
      "Management Accounting", "Business Economics", "Business Law", 
      "Income Tax Law & Practice", "Auditing", "Financial Management",
      "International Finance", "Investment Management", "GST & Customs Law"
    ]
  },
  "bba": {
    id: "bba",
    title: "BBA",
    fullTitle: "Bachelor of Business Administration",
    duration: "3 Years",
    creds: "180 Credits",
    level: "Undergraduate",
    img: BBAImg,
    color: "from-emerald-500 to-teal-600",
    badge: "Top Rated",
    overview: `Bachelor of Business Administration (BBA) is a professional undergraduate program that provides comprehensive knowledge of business and management principles. It covers subjects like Marketing, Human Resources, Finance, Operations, and Entrepreneurship.

The program develops leadership qualities, decision-making skills, and strategic thinking. BBA graduates are prepared for managerial roles and entrepreneurial ventures across various industries.`,
    admission: `Admission to BBA programs is typically based on merit in 10+2 examinations. Many institutes also conduct entrance exams and personal interviews to assess candidates' aptitude for management studies. Popular entrance tests include IPU CET, SET, and university-specific exams.

Candidates should have strong communication skills and analytical thinking. The selection process may also include group discussions and personal interviews.`,
    career: `BBA graduates have diverse career opportunities in corporate sectors, MNCs, startups, and government organizations. Popular roles include Marketing Executive, HR Associate, Business Development Manager, Operations Manager, and Entrepreneur.

Many graduates pursue MBA for advanced career growth. With experience, BBA graduates can move into senior management positions or start their own ventures.`,
    keyHighlights: [
      "Duration: 3 Years (6 Semesters)",
      "Eligibility: 10+2 from recognized board",
      "Specializations: Marketing, HR, Finance, Operations",
      "Industry Exposure: Internships, Live Projects"
    ],
    jobRoles: ["Marketing Executive", "HR Associate", "Business Analyst", "Operations Manager", "Entrepreneur", "Sales Manager"],
    topRecruiters: ["Amazon", "Flipkart", "HDFC Bank", "ICICI Bank", "Deloitte", "KPMG", "Microsoft", "Google"],
    syllabus: [
      "Principles of Management", "Organizational Behavior", "Marketing Management",
      "Financial Accounting", "Human Resource Management", "Business Statistics",
      "Operations Management", "Business Law", "Strategic Management",
      "Entrepreneurship Development", "Digital Marketing", "Business Analytics"
    ]
  },
  "bca": {
    id: "bca",
    title: "BCA",
    fullTitle: "Bachelor of Computer Applications",
    duration: "3 Years",
    creds: "180 Credits",
    level: "Undergraduate",
    img: BCAImg,
    color: "from-purple-500 to-pink-600",
    badge: "Tech Forward",
    overview: `Bachelor of Computer Applications (BCA) is an undergraduate program focused on computer applications and software development. It covers programming languages, database management, web development, cloud computing, and emerging technologies like AI and Machine Learning.

The program emphasizes practical coding skills, software engineering principles, and industry-relevant technologies. Students gain hands-on experience through lab work and project development.`,
    admission: `Admission to BCA is generally based on merit in 10+2 with Mathematics/Computer Science as a subject. Some universities conduct entrance exams to evaluate candidates' aptitude for computer science and logical reasoning.

Basic knowledge of computers and programming is beneficial. Candidates should have strong analytical and problem-solving skills.`,
    career: `BCA graduates have excellent career prospects in IT industry, software companies, MNCs, and tech startups. Popular roles include Software Developer, Web Developer, System Analyst, Database Administrator, Cloud Architect, and IT Consultant.

With additional certifications, BCA graduates can specialize in emerging technologies like AI, Cloud Computing, or Cybersecurity. Many pursue MCA or MBA for further growth.`,
    keyHighlights: [
      "Duration: 3 Years (6 Semesters)",
      "Eligibility: 10+2 with Mathematics/Computer Science",
      "Specializations: Cloud Computing, Cybersecurity, Full-Stack",
      "Certifications: AWS, Azure, Java, Python"
    ],
    jobRoles: ["Software Developer", "Web Developer", "System Analyst", "Cloud Architect", "Database Admin", "IT Consultant"],
    topRecruiters: ["Infosys", "TCS", "Wipro", "Microsoft", "Google", "Amazon", "Accenture", "IBM"],
    syllabus: [
      "Programming in C", "Object Oriented Programming (Java/C++)", "Data Structures",
      "Database Management Systems", "Web Technologies", "Operating Systems",
      "Computer Networks", "Software Engineering", "Cloud Computing",
      "Python Programming", "Mobile App Development", "Artificial Intelligence"
    ]
  },
  "bsc-cbz": {
    id: "bsc-cbz",
    title: "B.Sc (CBZ)",
    fullTitle: "Bachelor of Science in Chemistry, Botany, Zoology",
    duration: "3 Years",
    creds: "180 Credits",
    level: "Undergraduate",
    img: BscImg,
    color: "from-blue-500 to-cyan-600",
    badge: "Research Hub",
    overview: `Bachelor of Science in Chemistry, Botany, Zoology (CBZ) is a comprehensive program that explores the fascinating world of life sciences. It provides hands-on laboratory experience, field research opportunities, and theoretical knowledge in biological and chemical sciences.

The program covers three core disciplines: Chemistry (organic, inorganic, physical), Botany (plant biology, taxonomy, physiology), and Zoology (animal biology, ecology, evolution).`,
    admission: `Admission is based on merit in 10+2 with Biology, Chemistry, and Physics as core subjects. Candidates must have secured minimum qualifying marks in their higher secondary examination.

Students with a strong interest in life sciences and research are ideal candidates for this program.`,
    career: `B.Sc CBZ graduates can pursue careers in research, healthcare, pharmaceuticals, environmental science, biotechnology, and education. Many opt for higher studies like M.Sc, PhD, or professional courses like MBA in Healthcare Management.

Opportunities exist in research laboratories, pharmaceutical companies, environmental agencies, and academic institutions.`,
    keyHighlights: [
      "Duration: 3 Years (6 Semesters)",
      "Eligibility: 10+2 with PCB (Physics, Chemistry, Biology)",
      "Laboratory: State-of-the-art research labs",
      "Field Work: Ecological studies and research projects"
    ],
    jobRoles: ["Research Assistant", "Lab Technician", "Environmental Scientist", "Pharmaceutical Associate", "Quality Analyst", "Educator"],
    topRecruiters: ["Biocon", "Syngene", "Novartis", "Pfizer", "Ecolab", "Environmental Agencies", "Research Institutes"],
    syllabus: [
      "Inorganic Chemistry", "Organic Chemistry", "Physical Chemistry",
      "Analytical Chemistry", "Plant Taxonomy", "Plant Physiology",
      "Cell Biology", "Genetics", "Ecology and Evolution",
      "Animal Physiology", "Biochemistry", "Molecular Biology"
    ]
  },
  "ba-journalism": {
    id: "ba-journalism",
    title: "BA Journalism",
    fullTitle: "Bachelor of Arts in Journalism & Mass Communication",
    duration: "3 Years",
    creds: "180 Credits",
    level: "Undergraduate",
    img: BAImg,
    color: "from-rose-500 to-red-600",
    badge: "Creative Edge",
    overview: `Bachelor of Arts in Journalism & Mass Communication prepares students for the dynamic media industry. The program covers print, broadcast, digital journalism, media ethics, content creation, and communication strategies.

Students learn to create compelling stories across multiple platforms, understand media laws, and develop critical thinking skills essential for modern journalism.`,
    admission: `Admission is typically based on merit in 10+2 from any stream. Some institutes conduct entrance exams and personal interviews to assess communication skills and media aptitude.

Candidates with strong writing skills, curiosity, and ethical awareness are well-suited for this program.`,
    career: `Graduates can work in news organizations, digital media, advertising agencies, PR firms, and corporate communication departments. Opportunities exist as journalists, content creators, media planners, and PR specialists.

With experience, professionals can move into editorial roles, media management, or start their own media ventures.`,
    keyHighlights: [
      "Duration: 3 Years (6 Semesters)",
      "Eligibility: 10+2 from any stream",
      "Practical Training: Newsroom simulations, Studio work",
      "Industry Connect: Internships with media houses"
    ],
    jobRoles: ["Journalist", "Content Writer", "Media Planner", "PR Specialist", "Digital Marketer", "News Anchor"],
    topRecruiters: ["Times Group", "NDTV", "CNN News18", "Republic TV", "Zee Media", "PR Agencies", "Digital Media Firms"],
    syllabus: [
      "Introduction to Journalism", "Reporting and Editing", "Media Laws and Ethics",
      "Digital Media Production", "Broadcast Journalism", "Public Relations",
      "Advertising Principles", "Media Management", "Photojournalism",
      "Investigative Journalism", "Social Media Management", "Content Strategy"
    ]
  },
  "mcom": {
    id: "mcom",
    title: "M.Com",
    fullTitle: "Master of Commerce",
    duration: "2 Years",
    creds: "120 Credits",
    level: "Postgraduate",
    img: MCOMImg,
    color: "from-slate-600 to-gray-800",
    badge: "Postgraduate Excellence",
    overview: `Master of Commerce (M.Com) is a postgraduate program that deepens knowledge in advanced accounting, financial management, corporate strategy, and research methodology. It prepares students for leadership roles in commerce and finance sectors.

The program focuses on developing analytical skills, strategic thinking, and research capabilities. Students engage with case studies, industry projects, and research dissertations.`,
    admission: `Admission is based on merit in B.Com or equivalent undergraduate degree. Some universities conduct entrance exams to assess candidates' knowledge in commerce and analytical skills.

Candidates should have a strong foundation in commerce subjects and a desire to pursue advanced studies or research.`,
    career: `M.Com graduates excel in corporate finance, investment banking, consulting, academia, and research. Many pursue PhD or professional certifications like CA, CMA, or CFA.

Senior roles include Financial Controller, Investment Banker, Corporate Treasurer, and Professor. The program also prepares students for competitive exams like UGC NET for academic careers.`,
    keyHighlights: [
      "Duration: 2 Years (4 Semesters)",
      "Eligibility: B.Com or BBA with minimum 50% marks",
      "Specializations: Finance, Accounting, Taxation",
      "Research: Dissertation and Research Projects"
    ],
    jobRoles: ["Financial Analyst", "Investment Banker", "Corporate Accountant", "Tax Consultant", "Professor", "Research Associate"],
    topRecruiters: ["Goldman Sachs", "Morgan Stanley", "Deloitte", "PwC", "EY", "KPMG", "ICICI Bank", "HDFC Bank"],
    syllabus: [
      "Advanced Financial Accounting", "Corporate Finance", "Strategic Management",
      "Research Methodology", "International Finance", "Financial Derivatives",
      "Taxation Planning", "Auditing and Assurance", "Business Analytics",
      "Investment Management", "Corporate Governance", "Dissertation Project"
    ]
  },
  // ----- NEW COURSES ADDED BELOW -----
  "mba": {
    id: "mba",
    title: "MBA",
    fullTitle: "Master of Business Administration",
    duration: "2 Years",
    creds: "120 Credits",
    level: "Postgraduate",
    img: MBAImg,           // Ensure this image variable is defined elsewhere
    color: "from-indigo-500 to-blue-700",
    badge: "Leadership Program",
    overview: `Master of Business Administration (MBA) is a globally recognized postgraduate degree that develops strategic thinking, leadership skills, and managerial expertise. The program covers core business functions including Marketing, Finance, Human Resources, Operations, and Strategy.

Through case studies, live projects, and industry interactions, students learn to solve complex business problems, lead teams, and drive organizational growth. Many programs offer specializations in emerging areas like Business Analytics, Digital Marketing, and Entrepreneurship.`,
    admission: `Admission to top MBA programs requires a bachelor's degree (minimum 50% marks) and a valid score in entrance exams like CAT, MAT, XAT, GMAT, or CMAT. Shortlisted candidates go through Group Discussion (GD), Written Ability Test (WAT), and Personal Interview (PI) rounds.

Work experience (typically 1-5 years) is preferred by many B-schools but not mandatory for all. Academic consistency, leadership potential, and communication skills are key selection criteria.`,
    career: `MBA graduates command leadership roles across industries. Popular career paths include Management Consultant, Product Manager, Marketing Head, Financial Analyst, HR Business Partner, Operations Manager, and Entrepreneur.

Top recruiters offer roles in strategy, consulting, banking, e-commerce, and technology. With experience, MBA professionals advance to C-suite positions like CEO, CFO, or COO. The degree also provides a strong foundation for starting your own venture.`,
    keyHighlights: [
      "Duration: 2 Years (4 Semesters)",
      "Eligibility: Bachelor's degree (50% minimum) + Entrance Exam (CAT/MAT/GMAT etc.)",
      "Specializations: Marketing, Finance, HR, Operations, Business Analytics, IT",
      "Industry Exposure: Live projects, Summer Internships, Capstone Simulations"
    ],
    jobRoles: [
      "Management Consultant", "Product Manager", "Marketing Manager", 
      "Financial Analyst", "HR Manager", "Operations Manager", 
      "Business Analyst", "Entrepreneur"
    ],
    topRecruiters: [
      "McKinsey & Company", "Boston Consulting Group (BCG)", "Bain & Company", 
      "Amazon", "Google", "Microsoft", "Deloitte", "PwC", "EY", "KPMG", 
      "Goldman Sachs", "HDFC Bank", "ICICI Bank", "Tata Group"
    ],
    syllabus: [
      "Managerial Economics", "Organizational Behaviour", "Marketing Management",
      "Financial Accounting & Analysis", "Human Resource Management", "Quantitative Methods",
      "Operations Management", "Corporate Finance", "Strategic Management",
      "Business Research Methods", "Digital Marketing & E-commerce", "Business Analytics",
      "Leadership & Change Management", "Entrepreneurship & Innovation", "Capstone Project"
    ]
  },
  "mca": {
    id: "mca",
    title: "MCA",
    fullTitle: "Master of Computer Applications",
    duration: "2 Years",
    creds: "120 Credits",
    level: "Postgraduate",
    img: MCAImg,           // Ensure this image variable is defined elsewhere
    color: "from-cyan-500 to-blue-600",
    badge: "Tech Leadership",
    overview: `Master of Computer Applications (MCA) is a postgraduate program designed to produce skilled software professionals, system architects, and IT leaders. The curriculum focuses on advanced programming, software engineering, database technologies, cloud computing, artificial intelligence, and data science.

Students gain hands-on experience through lab work, industry projects, and emerging technology certifications. The program bridges the gap between theoretical computer science and real-world application development.`,
    admission: `Admission to MCA requires a bachelor's degree (BCA, B.Sc CS/IT, or B.E/B.Tech) with Mathematics as a subject at 10+2 or graduation level. Minimum 50% aggregate marks is typical. Entrance exams like NIMCET, MAH MCA CET, or university-specific tests are common.

Candidates with programming aptitude and logical reasoning skills are preferred. Some institutes also conduct personal interviews.`,
    career: `MCA graduates are highly sought after in the IT industry. Career roles include Software Developer, Full-Stack Engineer, System Architect, Cloud Engineer, Data Scientist, Database Administrator, IT Consultant, and Project Manager.

Leading tech companies and MNCs recruit MCA graduates for core development, analytics, and leadership tracks. With experience, professionals move into technical architect, engineering manager, or CTO roles. Many also pursue PhD or research careers.`,
    keyHighlights: [
      "Duration: 2 Years (4 Semesters)",
      "Eligibility: Bachelor's degree with Mathematics (10+2 or graduation level)",
      "Specializations: AI/ML, Cloud Computing, Cybersecurity, Full-Stack Development",
      "Certifications: AWS, Azure, DevOps, Java, Python, Data Science"
    ],
    jobRoles: [
      "Software Developer/Engineer", "Full-Stack Developer", "System Architect", 
      "Cloud Engineer", "Data Scientist/Analyst", "Database Administrator", 
      "IT Consultant", "Technical Project Manager"
    ],
    topRecruiters: [
      "Microsoft", "Google", "Amazon", "Apple", "Infosys", "TCS", "Wipro", 
      "Accenture", "IBM", "Oracle", "Capgemini", "Cognizant", "Flipkart", "Uber"
    ],
    syllabus: [
      "Advanced Data Structures & Algorithms", "Object-Oriented Programming (Java/C++)",
      "Database Management Systems", "Software Engineering & Testing", "Operating Systems",
      "Computer Networks & Security", "Web Technologies & Frameworks", "Cloud Computing",
      "Machine Learning & AI", "Big Data Analytics", "Mobile App Development", 
      "DevOps & Automation", "Cybersecurity Fundamentals", "Major Project / Dissertation"
    ]
  }
};

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDetailsContent[courseId];
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      showToast('Please fill all required fields.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      showToast('Enter a valid email address.');
      return;
    }
    showToast(`Thank you ${formData.fullName}! We'll contact you about ${course.title}.`);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50/20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Course not found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700 flex items-center gap-2 justify-center">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/20">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-800 text-white px-6 py-3 rounded-full shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <Link 
          to="/courses" 
          className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Courses
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img 
            src={course.img} 
            alt={course.title} 
            className="w-full object-cover "
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-15`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <span className={`inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3`}>
                {course.badge}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{course.title}</h1>
              <p className="text-xl md:text-2xl opacity-90">{course.fullTitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="flex items-center gap-2 text-white/90"><Calendar size={16} /> {course.duration}</span>
                <span className="flex items-center gap-2 text-white/90"><BookOpen size={16} /> {course.creds}</span>
                <span className="flex items-center gap-2 text-white/90"><GraduationCap size={16} /> {course.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview Section */}
            <div data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <BookOpen size={24} className="text-amber-600" />
                Program Overview
              </h2>
              <div className="prose prose-stone max-w-none">
                {course.overview.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Award size={24} className="text-amber-600" />
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-stone-600 bg-stone-50 p-3 rounded-xl">
                    <CheckCircle size={16} className="text-amber-600 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <BookOpen size={24} className="text-amber-600" />
                Course Curriculum
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {course.syllabus.map((subject, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-stone-600 text-sm bg-stone-50 p-2 rounded-lg">
                    <ChevronRight size={12} className="text-amber-600" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <GraduationCap size={24} className="text-amber-600" />
                Admission Process
              </h2>
              <div className="prose prose-stone max-w-none">
                {course.admission.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Briefcase size={24} className="text-amber-600" />
                Career Opportunities
              </h2>
              <div className="prose prose-stone max-w-none">
                {course.career.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">Job Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.jobRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-stone-600 bg-stone-50 p-3 rounded-xl">
                    <Briefcase size={16} className="text-amber-600 flex-shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">Top Recruiters</h3>
              <div className="flex flex-wrap gap-2">
                {course.topRecruiters.map((recruiter, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                    {recruiter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 sticky top-24" data-aos="fade-left">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Apply for {course.title}</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message (Optional)"
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 outline-none transition resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className="w-full bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Submit Application
                </button>
              </form>
            </div>

            {/* Contact Info */}
            {/* <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-stone-800 mb-3">Need More Information?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-stone-600">
                  <Phone size={18} className="text-amber-600" />
                  <span>+91 9535003404</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Mail size={18} className="text-amber-600" />
                  <span>slgi2k3@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <MapPin size={18} className="text-amber-600" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div> */}

            {/* Quick Stats */}
            {/* <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <h3 className="text-lg font-bold text-stone-800 mb-3">Program at a Glance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Duration</span>
                  <span className="font-semibold text-stone-800">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Total Credits</span>
                  <span className="font-semibold text-stone-800">{course.creds}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Level</span>
                  <span className="font-semibold text-stone-800">{course.level}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-stone-500">Mode</span>
                  <span className="font-semibold text-stone-800">Full Time</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-from-bottom-5 {
          from { transform: translateY(1rem); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-in { animation: slide-in-from-bottom-5 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default CourseDetailPage;