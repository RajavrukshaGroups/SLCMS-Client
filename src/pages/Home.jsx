import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CoursesPreview from "../components/CoursesPreview";
import ToppersCarousel from "../components/ToppersCarousel";
import Facilities from "../components/Facilities";
import AdmissionCTA from "../components/AdmissionCTA";
import { motion } from "motion/react";
import { TrendingUp, Users, Award, Building } from "lucide-react";
import classImg from "../assets/Ba-sl-clg.jpeg";
import event1Img from "../assets/event-1.jpeg";
import BBAImg from "../assets/BBA.jpeg";
import Carousel from "../components/Carousel";
//import unknown from '../assets/unknown.webp'
import PlacedStudents from "../components/PlacedStudents";
import RecruiterLogos from "../components/RecruiterLogos";

import Campus1 from "../assets/campus1.png";
import Campus2 from "../assets/campus2.png";
import Campus3 from "../assets/campus3.png";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Best BA, BBA, BCA, BCom, MBA, MCA, MCom & IAS, KAS, UPSC Coaching in
          Bangalore | Sri Lakshmi College of Management & Science
        </title>

        <meta
          name="description"
          content="Sri Lakshmi College of Management & Science, Bangalore offers BA, BBA, BCA, BCom, MBA, MCA, MCom and IAS, KAS & UPSC coaching with quality education and career-focused learning."
        />

        <meta
          name="keywords"
          content="BA College Bangalore, BBA College Bangalore, BCA College Bangalore, BCom College Bangalore, MBA College Bangalore, MCA College Bangalore, MCom College Bangalore, IAS Coaching Bangalore, UPSC Coaching Bangalore"
        />

        <link rel="canonical" href="https://srilakshmimanagement.org/" />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Best BA, BBA, BCA, BCom, MBA, MCA, MCom & IAS, KAS, UPSC Coaching in Bangalore"
        />

        <meta
          property="og:description"
          content="Sri Lakshmi College of Management & Science offers UG, PG and Competitive Exam Coaching in Bangalore."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://srilakshmimanagement.org/" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overflow-x-hidden"
      >
        <Hero />

        {/* Quick Stats Bar */}
        <div className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 place-items-center gap-8">
            {[
              { label: "Years Excellence", val: "20+", icon: TrendingUp },
              { label: "Expert Faculty", val: "150+", icon: Users },
              { label: "Placements", val: "95%", icon: Award },
              // { label: 'Campus Size', val: '25 Acres', icon: Building },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.val}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AboutSection />
        <CoursesPreview />
        <ToppersCarousel />
        <PlacedStudents />
        <RecruiterLogos />

        {/* Campus Life Preview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs block">
                  Vibrant Campus
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                  Life at SLCMS: Beyond the{" "}
                  <span className="text-primary italic">Classroom</span>
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Our campus is a melting pot of cultures and ideas. From
                  technical symposiums to cultural festivals, we ensure our
                  students have a well-rounded experience that prepares them for
                  the real world.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-bg-premium border border-slate-100">
                    <div className="text-primary font-bold mb-2">
                      50+ Events
                    </div>
                    <p className="text-xs text-slate-500">
                      Annual cultural and technical festivals.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-bg-premium border border-slate-100">
                    <div className="text-accent font-bold mb-2">15 Clubs</div>
                    <p className="text-xs text-slate-500">
                      Student-led clubs for diverse interests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={Campus1}
                    className="rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={Campus2}
                    className="rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-12 space-y-4">
                  <img
                    src={Campus3}
                    className="rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={classImg}
                    className="rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Carousel />

        <Facilities />

        {/* Placement Partners */}
        {/* <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">Our Placement Partners</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro'].map((brand) => (
              <span key={brand} className="text-2xl font-display font-bold text-slate-900">{brand}</span>
            ))}
          </div>
        </div>
      </section> */}

        <AdmissionCTA />
      </motion.div>
    </>
  );
}
