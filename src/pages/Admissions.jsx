import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import {
  User,
  MapPin,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Info,
  Calendar,
  Mail,
  Building2,
  Camera,
  Import,
} from "lucide-react";
import { cn } from "../lib/utils";
import Quiz from "../components/Quiz.jsx";
import axiosInstance from "../api/axiosInstance.js";
import { API_ROUTES } from "../api/apiRoutes.js";
import { useDispatch } from "react-redux";
import { saveStep1, saveStep2 } from "../../store/admissionSlice.js";
import { toast } from "react-toastify";
// Form Schema
const formSchema = z.object({
  // Step 1: Personal
  proposedCourse: z.string().min(1, "Please select a course"),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  dob: z.string().min(1, "Date of birth is required"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  parentName: z.string().min(3, "Father's / Mother's name is required"),
  mobileNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Invalid mobile number (10 digits)"),
  email: z.string().email("Invalid email address"),

  // Step 2: Address
  streetAddress: z.string().min(5, "Street address is required"),
  apartment: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().min(5, "Postal code is required"),
  country: z.string().min(2, "Country is required"),

  // Step 3: Contact
  // mobileNumber: z
  //   .string()
  //   .regex(/^[0-9]{10}$/, "Invalid mobile number (10 digits)"),
  // email: z.string().email("Invalid email address"),
});

const steps = [
  { id: 1, title: "Personal & Contact Details", icon: User },
  { id: 2, title: "Address Info", icon: MapPin },
  // { id: 3, title: "Contact Details", icon: Phone },
  { id: 3, title: "Review & Submit", icon: CheckCircle2 },
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
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Computer Applications (BCA)",
  "Bachelor of Commerce (B.Com)",
  "Bachelor of Science (B.Sc) - Physics",
  "Bachelor of Science (B.Sc) - Chemistry",

  // Master Courses
  "Master of Business Administration (MBA)",
  "Master of Computer Applications (MCA)",
  "Master of Commerce (M.Com)",
  "Master of Science (M.Sc) - Physics",
  "Master of Science (M.Sc) - Chemistry",
];

export default function AdmissionForm({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const formData = watch();

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await trigger(fields);

    if (!isValid) return;

    // 👉 STEP 1 API CALL
    if (currentStep === 1) {
      try {
        setLoading(true);
        const data = watch();

        const payload = {
          fullName: data.fullName,
          email: data.email,
          mobile: data.mobileNumber,
          subject: "Admission Enquiry",
          course: data.proposedCourse,
          message: "Admission Form Step 1 Submitted",
          dob: data.dob,
          age: data.age,
          gender: data.gender,
          parentName: data.parentName,
        };

        const res = await axiosInstance.post(API_ROUTES.CONTACT, payload);
        console.log("response", res);

        if (res.data.success) {
          // ✅ Save in Redux
          dispatch(saveStep1(data));
          toast.success("Details saved successfully");

          // 👉 Move next
          setCurrentStep(2);
        }
      } catch (err) {
        console.error(err);
        // alert("Failed to save data");
        toast.error("Failed to save data");
      } finally {
        setLoading(false);
      }
    } // 👉 STEP 2 (SAVE ADDRESS)
    else if (currentStep === 2) {
      const data = watch();

      const addressPayload = {
        streetAddress: data.streetAddress,
        apartment: data.apartment,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
      };
      console.log("Redux Step2:", addressPayload);

      // ✅ Save in Redux
      dispatch(saveStep2(addressPayload));

      toast.success("Address saved successfully 📍");

      setCurrentStep(3);
    }

    // 👉 DEFAULT (just safety)
    else {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return [
          "proposedCourse",
          "fullName",
          "dob",
          "age",
          "gender",
          "parentName",
          "mobileNumber",
          "email",
        ];
      case 2:
        return ["streetAddress", "city", "state", "postalCode", "country"];
      // case 3:
      //   return ["mobileNumber", "email"];
      default:
        return [];
    }
  };

  const onSubmit = (data) => {
    setShowQuiz(true);
  };
  // if (showQuiz) {
  //   return <Quiz />;
  // }
  if (showQuiz) {
    return (
      <Quiz
        userName={formData.fullName}
        onFinish={(score) => {
          console.log("Final Score:", score);

          // 👉 OPTIONAL: you can redirect or show success page here
          toast.success(`Your score is ${score} 🎯`);

          // Example redirect
          // navigate("/success");
        }}
      />
    );
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
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="font-semibold text-slate-700">Please wait...</span>
          </div>
        </div>
      )}
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
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Academic Year 2025-2026
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Admission <span className="text-emerald-600 italic">Portal</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Fill out the application form below to apply for our premium
              undergraduate programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <h3 className="text-2xl font-bold text-emerald-700">
                  Admission Guide
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Info,
                      title: "Eligibility",
                      text: "Minimum 50% in 10+2 from a recognized board.",
                    },
                    {
                      icon: GraduationCap,
                      title: "Scholarships",
                      text: "Merit-based scholarships up to 100% available.",
                    },
                    {
                      icon: Building2,
                      title: "Campus Visit",
                      text: "Open for tours Monday to Saturday, 9 AM - 4 PM.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.text}
                        </p>
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
                      <div
                        key={step.id}
                        className="flex flex-col items-center gap-2 relative z-10"
                      >
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2",
                            currentStep >= step.id
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-lg"
                              : "bg-white text-slate-400 border-slate-200",
                          )}
                        >
                          <step.icon className="w-5 h-5" />
                        </div>
                        <span
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-widest hidden md:block",
                            currentStep >= step.id
                              ? "text-emerald-700"
                              : "text-slate-400",
                          )}
                        >
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-emerald-600"
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                      }}
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
                          {/* <div className="relative group">
                          <div className="w-32 h-32 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center overflow-hidden group-hover:border-emerald-600 transition-colors">
                            {imagePreview ? (
                              <img
                                src={imagePreview}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <>
                                <Camera className="w-8 h-8 text-slate-400 mb-2" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase">
                                  Upload Photo
                                </span>
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleImageChange}
                          />
                        </div> */}
                          <div className="grow space-y-6 w-full">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                  Proposed Course
                                </label>
                                <select
                                  {...register("proposedCourse")}
                                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all appearance-none bg-white"
                                >
                                  <option value="">Select a Course</option>
                                  {courses.map((c) => (
                                    <option key={c} value={c}>
                                      {c}
                                    </option>
                                  ))}
                                </select>
                                {errors.proposedCourse && (
                                  <p className="text-rose-500 text-[10px] font-bold mt-1">
                                    {errors.proposedCourse.message}
                                  </p>
                                )}
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                  Full Name
                                </label>
                                <input
                                  {...register("fullName")}
                                  placeholder="As per 10th Certificate"
                                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                                />
                                {errors.fullName && (
                                  <p className="text-rose-500 text-[10px] font-bold mt-1">
                                    {errors.fullName.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              {...register("dob")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                            {errors.dob && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.dob.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Age
                            </label>
                            <input
                              type="number"
                              {...register("age")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                            {errors.age && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.age.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Gender
                            </label>
                            <select
                              {...register("gender")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all bg-white"
                            >
                              <option value="">Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.gender && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.gender.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                            Father's / Mother's Name
                          </label>
                          <input
                            {...register("parentName")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.parentName && (
                            <p className="text-rose-500 text-[10px] font-bold mt-1">
                              {errors.parentName.message}
                            </p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Mobile Number
                            </label>
                            <input
                              {...register("mobileNumber")}
                              placeholder="10 digit number"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200"
                            />
                            {errors.mobileNumber && (
                              <p className="text-rose-500 text-[10px] mt-1">
                                {errors.mobileNumber.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Email Address
                            </label>
                            <input
                              {...register("email")}
                              placeholder="example@email.com"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200"
                            />
                            {errors.email && (
                              <p className="text-rose-500 text-[10px] mt-1">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
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
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                            Street Address
                          </label>
                          <input
                            {...register("streetAddress")}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                          />
                          {errors.streetAddress && (
                            <p className="text-rose-500 text-[10px] font-bold mt-1">
                              {errors.streetAddress.message}
                            </p>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Apartment / Suite
                            </label>
                            <input
                              {...register("apartment")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              City
                            </label>
                            <input
                              {...register("city")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                            {errors.city && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.city.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              State
                            </label>
                            <input
                              {...register("state")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                            {errors.state && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.state.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Postal Code
                            </label>
                            <input
                              {...register("postalCode")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                            {errors.postalCode && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.postalCode.message}
                              </p>
                            )}
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                              Country
                            </label>
                            <input
                              {...register("country")}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                            {errors.country && (
                              <p className="text-rose-500 text-[10px] font-bold mt-1">
                                {errors.country.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                            Mobile Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              {...register("mobileNumber")}
                              placeholder="10 digit number"
                              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                          </div>
                          {errors.mobileNumber && (
                            <p className="text-rose-500 text-[10px] font-bold mt-1">
                              {errors.mobileNumber.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                              {...register("email")}
                              placeholder="example@email.com"
                              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 outline-none transition-all"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-rose-500 text-[10px] font-bold mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex gap-4">
                          <Info className="w-5 h-5 text-emerald-600 shrink-0" />
                          <p className="text-xs text-slate-500 leading-relaxed">
                            All communication regarding your application will be
                            sent to the mobile number and email address
                            provided.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )} */}

                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                              Personal Summary
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between py-2 border-b border-slate-50">
                                <span className="text-slate-400">Name:</span>
                                <span className="font-bold text-slate-900">
                                  {formData.fullName}
                                </span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-slate-50">
                                <span className="text-slate-400">Course:</span>
                                <span className="font-bold text-emerald-600">
                                  {formData.proposedCourse}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                              Contact Summary
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between py-2 border-b border-slate-50">
                                <span className="text-slate-400">Mobile:</span>
                                <span className="font-bold text-slate-900">
                                  {formData.mobileNumber}
                                </span>
                              </div>
                              <div className="flex justify-between py-2 border-b border-slate-50">
                                <span className="text-slate-400">Email:</span>
                                <span className="font-bold text-slate-900">
                                  {formData.email}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                          <label className="flex gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              required
                              className="mt-1 accent-emerald-600"
                            />
                            <span className="text-xs text-slate-600 leading-relaxed">
                              I hereby declare that the information provided
                              above is true and correct. I understand that I
                              will need to complete a mandatory entrance quiz
                              after submission.
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
                        currentStep === 1
                          ? "text-slate-300 cursor-not-allowed"
                          : "text-slate-500 hover:text-emerald-600",
                      )}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>

                    {currentStep < steps.length ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={loading}
                        className="px-8 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Continue
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
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
    </>
  );
}
