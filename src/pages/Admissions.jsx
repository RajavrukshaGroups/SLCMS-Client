// import React, { useState, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   User, MapPin, Phone, CheckCircle2, ChevronRight, 
//   ChevronLeft, Upload, GraduationCap, Info, Calendar,
//   Mail, Globe, Building2, Camera
// } from 'lucide-react';
// import { cn } from '../lib/utils';

// // Form Schema
// const formSchema = z.object({
//   // Step 1: Personal
//   image: z.any().optional(),
//   proposedCourse: z.string().min(1, 'Please select a course'),
//   fullName: z.string().min(3, 'Full name must be at least 3 characters'),
//   dob: z.string().min(1, 'Date of birth is required'),
//   age: z.string().min(1, 'Age is required'),
//   gender: z.string().min(1, 'Gender is required'),
//   parentName: z.string().min(3, "Father's / Mother's name is required"),
  
//   // Step 2: Address
//   streetAddress: z.string().min(5, 'Street address is required'),
//   apartment: z.string().optional(),
//   city: z.string().min(2, 'City is required'),
//   state: z.string().min(2, 'State is required'),
//   postalCode: z.string().min(5, 'Postal code is required'),
//   country: z.string().min(2, 'Country is required'),
  
//   // Step 3: Contact
//   mobileNumber: z.string().regex(/^[0-9]{10}$/, 'Invalid mobile number (10 digits)'),
//   email: z.string().email('Invalid email address'),
// });

// const steps = [
//   { id: 1, title: 'Personal Details', icon: User },
//   { id: 2, title: 'Address Info', icon: MapPin },
//   { id: 3, title: 'Contact Details', icon: Phone },
//   { id: 4, title: 'Review & Submit', icon: CheckCircle2 },
// ];

// const courses = [
//   'Bachelor of Business Administration (BBA)',
//   'Bachelor of Computer Applications (BCA)',
//   'Bachelor of Commerce (B.Com)',
//   'Bachelor of Science (B.Sc) - Physics',
//   'Bachelor of Science (B.Sc) - Chemistry',
// ];

// export default function Admissions() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
  
//   const {
//     register,
//     handleSubmit,
//     trigger,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(formSchema),
//     mode: 'onChange',
//   });

//   const formData = watch();

//   const nextStep = async () => {
//     const fields = getFieldsForStep(currentStep);
//     const isValid = await trigger(fields);
//     if (isValid) {
//       setCurrentStep((prev) => Math.min(prev + 1, steps.length));
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep((prev) => Math.max(prev - 1, 1));
//   };

//   const getFieldsForStep = (step) => {
//     switch (step) {
//       case 1: return ['proposedCourse', 'fullName', 'dob', 'age', 'gender', 'parentName'];
//       case 2: return ['streetAddress', 'city', 'state', 'postalCode', 'country'];
//       case 3: return ['mobileNumber', 'email'];
//       default: return [];
//     }
//   };

//   const onSubmit = (data) => {
//     console.log('Form Submitted:', data);
//     setIsSubmitted(true);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen pt-32 pb-20 bg-bg-premium flex items-center justify-center px-6">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="max-w-xl w-full premium-card p-12 text-center"
//         >
//           <div className="w-24 h-24 teal-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
//             <CheckCircle2 className="text-white w-12 h-12" />
//           </div>
//           <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Application Submitted!</h2>
//           <p className="text-slate-600 mb-8 leading-relaxed">
//             Thank you for applying to Sri Lakshmi College of Management & Science. Your application (Ref: SLCMS-2025-{Math.floor(Math.random() * 10000)}) has been received successfully. Our admissions team will review your details and contact you shortly.
//           </p>
//           <button 
//             onClick={() => window.location.href = '/'}
//             className="px-8 py-4 teal-gradient text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 transition-all"
//           >
//             Return to Home
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-bg-premium relative overflow-hidden">
//       <div className="absolute inset-0 bg-pattern-academic opacity-[0.03] pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
//           >
//             <Calendar className="w-4 h-4 text-accent" />
//             <span className="text-xs font-bold uppercase tracking-widest text-primary">Academic Year 2025-2026</span>
//           </motion.div>
//           <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-4">
//             Admissions <span className="text-primary italic">Open</span>
//           </h1>
//           <p className="text-slate-500 max-w-2xl mx-auto">
//             Begin your journey towards excellence. Fill out the application form below to apply for our premium undergraduate programs.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-12 items-start">
//           {/* Left Side: Info */}
//           <div className="lg:col-span-4 space-y-8">
//             <div className="premium-card p-8 space-y-6">
//               <h3 className="text-2xl font-display font-bold text-primary">Admission Guide</h3>
//               <div className="space-y-4">
//                 {[
//                   { icon: Info, title: 'Eligibility', text: 'Minimum 50% in 10+2 from a recognized board.' },
//                   { icon: GraduationCap, title: 'Scholarships', text: 'Merit-based scholarships up to 100% available.' },
//                   { icon: Building2, title: 'Campus Visit', text: 'Open for tours Monday to Saturday, 9 AM - 4 PM.' },
//                 ].map((item, i) => (
//                   <div key={i} className="flex gap-4">
//                     <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
//                       <item.icon className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
//                       <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="pt-6 border-t border-slate-100">
//                 <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
//                   <p className="text-xs text-primary font-medium leading-relaxed">
//                     "Education is the most powerful weapon which you can use to change the world."
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video">
//               <img 
//                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" 
//                 alt="Students" 
//                 className="w-full h-full object-cover"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex items-end p-6">
//                 <p className="text-white text-sm font-medium italic">Join our vibrant community of 5000+ students.</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Form */}
//           <div className="lg:col-span-8">
//             <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
//               {/* Progress Bar */}
//               <div className="bg-slate-50 border-b border-slate-100 p-8">
//                 <div className="flex justify-between mb-4">
//                   {steps.map((step) => (
//                     <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
//                       <div 
//                         className={cn(
//                           "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2",
//                           currentStep >= step.id 
//                             ? "teal-gradient text-white border-primary shadow-lg" 
//                             : "bg-white text-slate-400 border-slate-200"
//                         )}
//                       >
//                         <step.icon className="w-5 h-5" />
//                       </div>
//                       <span className={cn(
//                         "text-[10px] font-bold uppercase tracking-widest hidden md:block",
//                         currentStep >= step.id ? "text-primary" : "text-slate-400"
//                       )}>
//                         {step.title}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden">
//                   <motion.div 
//                     className="absolute top-0 left-0 h-full teal-gradient"
//                     initial={{ width: '0%' }}
//                     animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 </div>
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
//                 <AnimatePresence mode="wait">
//                   {currentStep === 1 && (
//                     <motion.div
//                       key="step1"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       className="space-y-8"
//                     >
//                       <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
//                         <div className="relative group">
//                           <div className="w-32 h-32 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center overflow-hidden group-hover:border-primary transition-colors">
//                             {imagePreview ? (
//                               <img src={imagePreview} className="w-full h-full object-cover" />
//                             ) : (
//                               <>
//                                 <Camera className="w-8 h-8 text-slate-400 mb-2" />
//                                 <span className="text-[10px] font-bold text-slate-400 uppercase">Upload Photo</span>
//                               </>
//                             )}
//                           </div>
//                           <input 
//                             type="file" 
//                             accept="image/*" 
//                             className="absolute inset-0 opacity-0 cursor-pointer" 
//                             onChange={handleImageChange}
//                           />
//                         </div>
//                         <div className="grow space-y-6 w-full">
//                           <div className="grid md:grid-cols-2 gap-6">
//                             <div className="space-y-1">
//                               <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Proposed Course</label>
//                               <select 
//                                 {...register('proposedCourse')}
//                                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all appearance-none bg-white"
//                               >
//                                 <option value="">Select a Course</option>
//                                 {courses.map(c => <option key={c} value={c}>{c}</option>)}
//                               </select>
//                               {errors.proposedCourse && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.proposedCourse.message}</p>}
//                             </div>
//                             <div className="space-y-1">
//                               <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
//                               <input 
//                                 {...register('fullName')}
//                                 placeholder="As per 10th Certificate"
//                                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                               />
//                               {errors.fullName && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.fullName.message}</p>}
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="grid md:grid-cols-3 gap-6">
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Date of Birth</label>
//                           <input 
//                             type="date"
//                             {...register('dob')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                           {errors.dob && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.dob.message}</p>}
//                         </div>
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Age</label>
//                           <input 
//                             type="number"
//                             {...register('age')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                           {errors.age && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.age.message}</p>}
//                         </div>
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Gender</label>
//                           <select 
//                             {...register('gender')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white"
//                           >
//                             <option value="">Select</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                           </select>
//                           {errors.gender && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.gender.message}</p>}
//                         </div>
//                       </div>

//                       <div className="space-y-1">
//                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Father's / Mother's Name</label>
//                         <input 
//                           {...register('parentName')}
//                           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                         />
//                         {errors.parentName && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.parentName.message}</p>}
//                       </div>
//                     </motion.div>
//                   )}

//                   {currentStep === 2 && (
//                     <motion.div
//                       key="step2"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       className="space-y-6"
//                     >
//                       <div className="space-y-1">
//                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Street Address</label>
//                         <input 
//                           {...register('streetAddress')}
//                           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                         />
//                         {errors.streetAddress && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.streetAddress.message}</p>}
//                       </div>
//                       <div className="grid md:grid-cols-2 gap-6">
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Apartment / Suite</label>
//                           <input 
//                             {...register('apartment')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                         </div>
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">City</label>
//                           <input 
//                             {...register('city')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                           {errors.city && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.city.message}</p>}
//                         </div>
//                       </div>
//                       <div className="grid md:grid-cols-3 gap-6">
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">State</label>
//                           <input 
//                             {...register('state')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                           {errors.state && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.state.message}</p>}
//                         </div>
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Postal Code</label>
//                           <input 
//                             {...register('postalCode')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                           {errors.postalCode && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.postalCode.message}</p>}
//                         </div>
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Country</label>
//                           <input 
//                             {...register('country')}
//                             className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                           />
//                           {errors.country && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.country.message}</p>}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}

//                   {currentStep === 3 && (
//                     <motion.div
//                       key="step3"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       className="space-y-6"
//                     >
//                       <div className="grid md:grid-cols-2 gap-6">
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Mobile Number</label>
//                           <div className="relative">
//                             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                             <input 
//                               {...register('mobileNumber')}
//                               placeholder="10 digit number"
//                               className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                             />
//                           </div>
//                           {errors.mobileNumber && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.mobileNumber.message}</p>}
//                         </div>
//                         <div className="space-y-1">
//                           <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
//                           <div className="relative">
//                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                             <input 
//                               {...register('email')}
//                               placeholder="example@email.com"
//                               className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
//                             />
//                           </div>
//                           {errors.email && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.email.message}</p>}
//                         </div>
//                       </div>
//                       <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
//                         <div className="flex gap-4">
//                           <Info className="w-5 h-5 text-primary shrink-0" />
//                           <p className="text-xs text-slate-500 leading-relaxed">
//                             All communication regarding your application will be sent to the mobile number and email address provided. Please ensure they are active and correct.
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}

//                   {currentStep === 4 && (
//                     <motion.div
//                       key="step4"
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       className="space-y-8"
//                     >
//                       <div className="grid md:grid-cols-2 gap-8">
//                         <div className="space-y-4">
//                           <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Personal Summary</h4>
//                           <div className="space-y-2 text-sm">
//                             <div className="flex justify-between py-2 border-b border-slate-50">
//                               <span className="text-slate-400">Name:</span>
//                               <span className="font-bold text-slate-900">{formData.fullName}</span>
//                             </div>
//                             <div className="flex justify-between py-2 border-b border-slate-50">
//                               <span className="text-slate-400">Course:</span>
//                               <span className="font-bold text-primary">{formData.proposedCourse}</span>
//                             </div>
//                             <div className="flex justify-between py-2 border-b border-slate-50">
//                               <span className="text-slate-400">DOB:</span>
//                               <span className="font-bold text-slate-900">{formData.dob}</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="space-y-4">
//                           <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Contact Summary</h4>
//                           <div className="space-y-2 text-sm">
//                             <div className="flex justify-between py-2 border-b border-slate-50">
//                               <span className="text-slate-400">Mobile:</span>
//                               <span className="font-bold text-slate-900">{formData.mobileNumber}</span>
//                             </div>
//                             <div className="flex justify-between py-2 border-b border-slate-50">
//                               <span className="text-slate-400">Email:</span>
//                               <span className="font-bold text-slate-900">{formData.email}</span>
//                             </div>
//                             <div className="flex justify-between py-2 border-b border-slate-50">
//                               <span className="text-slate-400">City:</span>
//                               <span className="font-bold text-slate-900">{formData.city}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
//                         <label className="flex gap-3 cursor-pointer">
//                           <input type="checkbox" required className="mt-1 accent-primary" />
//                           <span className="text-xs text-slate-600 leading-relaxed">
//                             I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that any false information may lead to the cancellation of my application.
//                           </span>
//                         </label>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Form Navigation */}
//                 <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     disabled={currentStep === 1}
//                     className={cn(
//                       "flex items-center gap-2 text-sm font-bold transition-all",
//                       currentStep === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:text-primary"
//                     )}
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                     Back
//                   </button>

//                   {currentStep < steps.length ? (
//                     <button
//                       type="button"
//                       onClick={nextStep}
//                       className="px-8 py-3 teal-gradient text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center gap-2"
//                     >
//                       Continue
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   ) : (
//                     <button
//                       type="submit"
//                       className="px-10 py-4 bg-accent text-slate-900 rounded-full font-bold shadow-xl hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2"
//                     >
//                       Submit Application
//                       <CheckCircle2 className="w-5 h-5" />
//                     </button>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, MapPin, Phone, CheckCircle2, ChevronRight, 
  ChevronLeft, GraduationCap, Info, Calendar,
  Mail, Building2, Camera
} from 'lucide-react';
import { cn } from '../lib/utils';
import Quiz from "../components/Quiz.jsx"

// Form Schema
const formSchema = z.object({
  // Step 1: Personal
  proposedCourse: z.string().min(1, 'Please select a course'),
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  dob: z.string().min(1, 'Date of birth is required'),
  age: z.string().min(1, 'Age is required'),
  gender: z.string().min(1, 'Gender is required'),
  parentName: z.string().min(3, "Father's / Mother's name is required"),
  
  // Step 2: Address
  streetAddress: z.string().min(5, 'Street address is required'),
  apartment: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  postalCode: z.string().min(5, 'Postal code is required'),
  country: z.string().min(2, 'Country is required'),
  
  // Step 3: Contact
  mobileNumber: z.string().regex(/^[0-9]{10}$/, 'Invalid mobile number (10 digits)'),
  email: z.string().email('Invalid email address'),
});

const steps = [
  { id: 1, title: 'Personal Details', icon: User },
  { id: 2, title: 'Address Info', icon: MapPin },
  { id: 3, title: 'Contact Details', icon: Phone },
  { id: 4, title: 'Review & Submit', icon: CheckCircle2 },
];

// const courses = [
//   'Bachelor of Business Administration (BBA)',
//   'Bachelor of Computer Applications (BCA)',
//   'Bachelor of Commerce (B.Com)',
//   'Bachelor of Science (B.Sc) - Physics',
//   'Bachelor of Science (B.Sc) - Chemistry',
// ];
const courses = [
  // Bachelor Courses
  'Bachelor of Business Administration (BBA)',
  'Bachelor of Computer Applications (BCA)',
  'Bachelor of Commerce (B.Com)',
  'Bachelor of Science (B.Sc) - Physics',
  'Bachelor of Science (B.Sc) - Chemistry',

  // Master Courses
  'Master of Business Administration (MBA)',
  'Master of Computer Applications (MCA)',
  'Master of Commerce (M.Com)',
  'Master of Science (M.Sc) - Physics',
  'Master of Science (M.Sc) - Chemistry'
];

export default function AdmissionForm({ onComplete }) {
 const [currentStep, setCurrentStep] = useState(1);
const [imagePreview, setImagePreview] = useState(null);
const [showQuiz, setShowQuiz] = useState(false);
  
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const formData = watch();

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 1: return ['proposedCourse', 'fullName', 'dob', 'age', 'gender', 'parentName'];
      case 2: return ['streetAddress', 'city', 'state', 'postalCode', 'country'];
      case 3: return ['mobileNumber', 'email'];
      default: return [];
    }
  };

  const onSubmit = (data) => {
  setShowQuiz(true);
};
if (showQuiz) {
  return <Quiz />;
}


  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen pt-33 pb-20 bg-neutral-50 relative overflow-hidden">
      {/* Top Fade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        {/* 🔥 ONLY Top Black Fade */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent" />
    </div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6"
          >
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Academic Year 2025-2026</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Admission <span className="text-emerald-600 italic">Portal</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Fill out the application form below to apply for our premium undergraduate programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-2xl font-bold text-emerald-700">Admission Guide</h3>
              <div className="space-y-4">
                {[
                  { icon: Info, title: 'Eligibility', text: 'Minimum 50% in 10+2 from a recognized board.' },
                  { icon: GraduationCap, title: 'Scholarships', text: 'Merit-based scholarships up to 100% available.' },
                  { icon: Building2, title: 'Campus Visit', text: 'Open for tours Monday to Saturday, 9 AM - 4 PM.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-slate-50 border-b border-slate-100 p-8">
                <div className="flex justify-between mb-4">
                  {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
                      <div 
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2",
                          currentStep >= step.id 
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-lg" 
                            : "bg-white text-slate-400 border-slate-200"
                        )}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest hidden md:block",
                        currentStep >= step.id ? "text-emerald-700" : "text-slate-400"
                      )}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-emerald-600"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="relative group">
                          <div className="w-32 h-32 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center overflow-hidden group-hover:border-emerald-600 transition-colors">
                            {imagePreview ? (
                              <img src={imagePreview} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            ) : (
                              <>
                                <Camera className="w-8 h-8 text-slate-400 mb-2" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Upload Photo</span>
                              </>
                            )}
                          </div>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="absolute inset-0 opacity-0 cursor-pointer" 
                            onChange={handleImageChange}
                          />
                        </div>
                        <div className="grow space-y-6 w-full">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Proposed Course</label>
                              <select 
                                {...register('proposedCourse')}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all appearance-none bg-white"
                              >
                                <option value="">Select a Course</option>
                                {courses.map(c => <option key={c} value={c}>{c}</option>)}
                              </select>
                              {errors.proposedCourse && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.proposedCourse.message}</p>}
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                              <input 
                                {...register('fullName')}
                                placeholder="As per 10th Certificate"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                              />
                              {errors.fullName && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.fullName.message}</p>}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Date of Birth</label>
                          <input 
                            type="date"
                            {...register('dob')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.dob && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.dob.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Age</label>
                          <input 
                            type="number"
                            {...register('age')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.age && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.age.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Gender</label>
                          <select 
                            {...register('gender')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all bg-white"
                          >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.gender && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.gender.message}</p>}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Father's / Mother's Name</label>
                        <input 
                          {...register('parentName')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                        />
                        {errors.parentName && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.parentName.message}</p>}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Street Address</label>
                        <input 
                          {...register('streetAddress')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                        />
                        {errors.streetAddress && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.streetAddress.message}</p>}
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Apartment / Suite</label>
                          <input 
                            {...register('apartment')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">City</label>
                          <input 
                            {...register('city')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.city && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.city.message}</p>}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">State</label>
                          <input 
                            {...register('state')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.state && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.state.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Postal Code</label>
                          <input 
                            {...register('postalCode')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.postalCode && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.postalCode.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Country</label>
                          <input 
                            {...register('country')}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.country && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.country.message}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Mobile Number</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                              {...register('mobileNumber')}
                              placeholder="10 digit number"
                              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                          </div>
                          {errors.mobileNumber && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.mobileNumber.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                              {...register('email')}
                              placeholder="example@email.com"
                              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                          </div>
                          {errors.email && <p className="text-rose-500 text-[10px] font-bold mt-1">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex gap-4">
                          <Info className="w-5 h-5 text-emerald-600 shrink-0" />
                          <p className="text-xs text-slate-500 leading-relaxed">
                            All communication regarding your application will be sent to the mobile number and email address provided.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600">Personal Summary</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between py-2 border-b border-slate-50">
                              <span className="text-slate-400">Name:</span>
                              <span className="font-bold text-slate-900">{formData.fullName}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-50">
                              <span className="text-slate-400">Course:</span>
                              <span className="font-bold text-emerald-600">{formData.proposedCourse}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600">Contact Summary</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between py-2 border-b border-slate-50">
                              <span className="text-slate-400">Mobile:</span>
                              <span className="font-bold text-slate-900">{formData.mobileNumber}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-slate-50">
                              <span className="text-slate-400">Email:</span>
                              <span className="font-bold text-slate-900">{formData.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <label className="flex gap-3 cursor-pointer">
                          <input type="checkbox" required className="mt-1 accent-emerald-600" />
                          <span className="text-xs text-slate-600 leading-relaxed">
                            I hereby declare that the information provided above is true and correct. I understand that I will need to complete a mandatory entrance quiz after submission.
                          </span>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={cn(
                      "flex items-center gap-2 text-sm font-bold transition-all",
                      currentStep === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:text-emerald-600"
                    )}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>

                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg hover:bg-emerald-700 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold shadow-xl hover:bg-emerald-700 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                      Submit & Start Quiz
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
