// import React, { useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform } from 'motion/react';
// import { ChevronRight, Play, Award, BookOpen, Users } from 'lucide-react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import collegeImage from "../assets/srilakshmi-degree-clg-building.png"

// export default function Hero() {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
//       .from('.hero-title', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' }, '-=0.4')
//       .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6')
//       .from('.hero-btns', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.6')
//       .from('.hero-stats', { opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out' }, '-=0.4');
//   }, { scope: containerRef });

//   return (
//     <section ref={containerRef} className="relative min-h-screen flex items-center  md:pt-30 overflow-hidden bg-bg-premium">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-pattern-academic opacity-10" />
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-accent/5 to-transparent" />
      
//       {/* Animated Circles */}
//       <motion.div
//         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
//       />
//       <motion.div
//         animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
//         transition={{ duration: 8, repeat: Infinity, delay: 1 }}
//         className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
//       />

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
//         <div ref={textRef}>
//           <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-accent/20 shadow-sm mb-8">
//             <Award className="w-4 h-4 text-accent" />
//             <span className="text-xs font-bold uppercase tracking-widest text-primary">Accredited A+ Institution</span>
//           </div>
          
//           <h1 className="hero-title text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
//             Shaping the <span className="text-primary italic">Leaders</span> of <span className="text-accent underline decoration-accent/30 underline-offset-8">Tomorrow</span>
//           </h1>
          
//           <p className="hero-desc text-lg text-slate-600 leading-relaxed max-w-xl mb-10 font-sans">
//             Experience academic excellence at Sri Lakshmi College of Management & Science. We provide a transformative learning journey designed for the modern corporate landscape.
//           </p>
          
//           <div className="hero-btns flex flex-wrap gap-5 md:pb-12">
//             <button className="px-8 py-4 teal-gradient text-white rounded-full font-bold shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
//               Explore Courses
//               <ChevronRight className="w-5 h-5" />
//             </button>
//             <button className="px-8 py-4 bg-white border border-slate-200 text-primary rounded-full font-bold shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
//                 <Play className="w-4 h-4 fill-primary" />
//               </div>
//               Virtual Tour
//             </button>
//           </div>

//           {/* <div className="hero-stats mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-10">
//             {[
//               { label: 'Students', value: '5000+', icon: Users },
//               { label: 'Courses', value: '25+', icon: BookOpen },
//               { label: 'Placements', value: '95%', icon: Award },
//             ].map((stat, i) => (
//               <div key={i} className="flex flex-col gap-1">
//                 <div className="flex items-center gap-2 text-accent">
//                   <stat.icon className="w-4 h-4" />
//                   <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
//                 </div>
//                 <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</span>
//               </div>
//             ))}
//           </div> */}
//         </div>

//         <div className="relative hidden lg:block">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//             className="relative z-10"
//           >
//             <div className="aspect-4/2.5 -mt-25 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
//               <img
//                 src={collegeImage}
//                 alt="University Campus"
//                 //className="w-full h-full "
//                 referrerPolicy="no-referrer"
//               />
//             </div>
            
//             {/* Floating Card */}
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//               className="absolute -bottom-18 -left-10 premium-card p-4 max-w-60"
//             >
//               <div className="flex items-center gap-4 mb-4 ">
//                 <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
//                   <Award className="text-accent w-6 h-6" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-slate-900">Excellence</h4>
//                   <p className="text-sm font-medium text-primary-dark">Top Ranked College</p>
//                 </div>
//               </div>
//               <p className="text-sm font-normal text-slate-700 leading-relaxed">
//                 Recognized for outstanding contribution to management education.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Decorative Elements */}
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-pattern-mandala opacity-20" />
//           <div className="absolute top-1/2 -right-20 w-64 h-64 border border-accent/20 rounded-full" />
//         </div>
//       </div>

//       {/* Wave Divider */}
//       {/* <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-15 fill-white">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c67.81-23.09,144.29-30.52,214.34-12C241.25,112.5,273.63,103.4,321.39,56.44Z"></path>
//         </svg>
//       </div> */}
//     </section>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import heroVideo from "../assets/hero-video.mp4";

// const HeroSection = ({
//   videoSrc = heroVideo,
//   title = "Shape Your Future at",
//   subtitle = "SLCMS", // Sri Lakshmi College of Management & Science
//   ctaText = "Apply Now",
//   ctaLink = "/admissions",
//   secondaryCtaText = "Download Brochure",
//   secondaryCtaLink = "#programs",
// }) => {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const videoRef = useRef(null);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play().catch((error) => {
//         console.log("Autoplay was prevented:", error);
//         setIsPlaying(false);
//       });
//     }
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         style={{ filter: "brightness(0.8)" }}
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//         <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

//         {/* 🔥 ONLY Top Black Fade */}
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent" />
//     </div>
//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
//             {title}
//             <span className="block text-transparent bg-clip-text bg-linear-to-t from-[#D4AF37] to-[#0f553b]">
//               {subtitle}
//             </span>
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 font-sans">
//             Join a community of innovators, leaders, and changemakers. Experience
//             world-class education in a vibrant campus environment.
//           </p>
//           {/* <h1 className="hero-title text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
//             Shaping the <span className="text-primary italic">Leaders</span> of <span className="text-accent underline decoration-accent/30 underline-offset-8">Tomorrow</span>
//           </h1>

//           <p className="hero-desc text-lg text-slate-600 leading-relaxed max-w-xl mb-10 font-sans">
//             Experience academic excellence at Sri Lakshmi College of Management & Science. We provide a transformative learning journey designed for the modern corporate landscape.
//           </p> */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
//             <a
//               href={ctaLink}
//               className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               {ctaText}
//             </a>
//             <a
//               href={secondaryCtaLink}
//               className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
//             >
//               {secondaryCtaText}
//             </a>
//           </div>

          
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import { useEffect, useRef, useState } from "react";
// import mainHeroImage1 from "../assets/main-hero-img1.webp";
// import mainHeroImage2 from "../assets/main-hero-img2.webp";

// const TwoImageScroll = () => {
//   const bottomRef = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!bottomRef.current) return;

//       const rect = bottomRef.current.getBoundingClientRect();

//       if (rect.top < window.innerHeight - 100) {
//         setShow(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full">

//       {/* 🔝 HERO SECTION */}
//       <section
//         className="h-screen flex items-center justify-center text-white text-4xl font-bold bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage:
//             `url(${mainHeroImage1})`,
           
            
//         }}
//       >
        
//       </section>
   

//       {/* 🔽 BOTTOM IMAGE SECTION */}
//       <section
//         ref={bottomRef}
//         className={`h-screen flex items-center justify-center text-white text-3xl font-semibold bg-cover bg-center transition-all duration-700 ease-out
//         ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
//         style={{
//           backgroundImage:
//             `url(${mainHeroImage2})`,
//         }}
//       >
        
//       </section>

//     </div>
//   );
// };

// export default TwoImageScroll;

// import { useEffect, useRef, useState } from "react";
// import mainHeroImage1 from "../assets/main-hero-img1.webp";
// import mainHeroImage2 from "../assets/main-hero-img2.webp";

// const TwoImageScroll = () => {
//   const bottomRef = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!bottomRef.current) return;

//       const rect = bottomRef.current.getBoundingClientRect();

//       if (rect.top < window.innerHeight - 100) {
//         setShow(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full overflow-x-hidden">

//       {/* 🔝 HERO SECTION */}
//       <section
//         className="
//           w-full min-h-screen
//           flex items-center justify-center
//           text-white font-bold
//           text-2xl sm:text-3xl md:text-5xl
//           bg-cover bg-center
//           md:bg-fixed
//         "
//         style={{
//           backgroundImage: `url(${mainHeroImage1})`,
//         }}
//       >
//         {/* Optional content */}
//       </section>

//       {/* 🔽 BOTTOM SECTION */}
//       <section
//         ref={bottomRef}
//         className={`
//           w-full min-h-screen
//           flex items-center justify-center
//           text-white font-semibold
//           text-xl sm:text-2xl md:text-4xl
//           bg-cover bg-center
//           transition-all duration-700 ease-out
//           ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
//         `}
//         style={{
//           backgroundImage: `url(${mainHeroImage2})`,
//         }}
//       >
//         {/* Optional content */}
//       </section>

//     </div>
//   );
// };

// export default TwoImageScroll;

// import React, { useEffect, useRef, useState, useMemo } from 'react';
// import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// const ImageSequenceHero = ({
//   frameCount = 220,
//   folderPath = 'ezgif-3092f86c1e3bc288-jpg',
//   imagePrefix = 'ezgif-frame-',
//   imageExtension = 'jpg',
// }) => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadProgress, setLoadProgress] = useState(0);
//   const [error, setError] = useState(null);

//   // Track scroll progress
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Map scroll progress to frame index (1 to 220)
//   const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

//   // Opacity transforms for overlays
//   const overlayOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
//   const endFadeOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

//   // Preload images
//   useEffect(() => {
//     let loadedCount = 0;

//     const preloadImages = async () => {
//       try {
//         const promises = Array.from({ length: frameCount }, (_, i) => {
//           return new Promise((resolve, reject) => {
//             const img = new Image();
//             const frameNumber = (i + 1).toString().padStart(3, '0');
//             // Using relative path as requested
//             img.src = `/${folderPath}/${imagePrefix}${frameNumber}.${imageExtension}`;
            
//             img.onload = () => {
//               loadedCount++;
//               setLoadProgress(Math.round((loadedCount / frameCount) * 100));
//               resolve(img);
//             };
            
//             img.onerror = () => {
//               console.warn(`Failed to load frame ${frameNumber}`);
//               // Fallback to a placeholder if the folder is missing, to keep the demo working
//               img.src = `https://picsum.photos/seed/frame${frameNumber}/1920/1080`;
//               img.onload = () => {
//                 loadedCount++;
//                 setLoadProgress(Math.round((loadedCount / frameCount) * 100));
//                 resolve(img);
//               };
//             };
//           });
//         });

//         const results = await Promise.all(promises);
//         setImages(results);
//         setIsLoading(false);
//       } catch (err) {
//         console.error("Error preloading images:", err);
//         setError("Failed to load image sequence. Please ensure the folder exists.");
//         setIsLoading(false);
//       }
//     };

//     preloadImages();
//   }, [frameCount, folderPath, imagePrefix, imageExtension]);

//   // Draw function
//   const renderCanvas = (index) => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');
//     const img = images[Math.floor(index) - 1];

//     if (canvas && context && img) {
//       // Clear canvas
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       // Maintain aspect ratio (Cover)
//       const canvasAspect = canvas.width / canvas.height;
//       const imgAspect = img.width / img.height;
//       let drawWidth, drawHeight, offsetX, offsetY;

//       if (canvasAspect > imgAspect) {
//         drawWidth = canvas.width;
//         drawHeight = canvas.width / imgAspect;
//         offsetX = 0;
//         offsetY = (canvas.height - drawHeight) / 2;
//       } else {
//         drawWidth = canvas.height * imgAspect;
//         drawHeight = canvas.height;
//         offsetX = (canvas.width - drawWidth) / 2;
//         offsetY = 0;
//       }

//       context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//     }
//   };

//   // Handle resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (canvasRef.current) {
//         canvasRef.current.width = window.innerWidth;
//         canvasRef.current.height = window.innerHeight;
//         // Re-render current frame on resize
//         renderCanvas(frameIndex.get());
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, [images]);

//   // Update canvas on scroll
//   useMotionValueEvent(frameIndex, "change", (latest) => {
//     requestAnimationFrame(() => renderCanvas(latest));
//   });

//   // Initial render when images are loaded
//   useEffect(() => {
//     if (!isLoading && images.length > 0) {
//       renderCanvas(1);
//     }
//   }, [isLoading, images]);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full" 
//       style={{ height: `${frameCount * 0.3}vh` }} // Adjust scroll length
//     >
//       <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black">
//         {isLoading && (
//           <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-2xl font-light tracking-widest uppercase mb-8"
//             >
//               Loading Experience
//             </motion.div>
//             <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
//               <motion.div 
//                 className="h-full bg-white"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${loadProgress}%` }}
//                 transition={{ type: "spring", bounce: 0, duration: 0.5 }}
//               />
//             </div>
//             <div className="mt-4 text-xs font-mono opacity-50">
//               {loadProgress}%
//             </div>
//           </div>
//         )}

//         <canvas 
//           ref={canvasRef}
//           className="w-full h-full block object-cover"
//         />

//         {/* Overlay Content */}
//         {!isLoading && (
//           <motion.div 
//             style={{ opacity: overlayOpacity }}
//             className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           >
//             <div className="text-center">
//               <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
//                 PRECISION.
//               </h1>
//               <p className="text-white/60 text-lg md:text-xl font-light tracking-wide">
//                 Scroll to explore the future of design.
//               </p>
//             </div>
//           </motion.div>
//         )}

//         {/* Subtle Fade out at end */}
//         <motion.div 
//           style={{ opacity: endFadeOpacity }}
//           className="absolute inset-0 bg-black pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// };


// export default ImageSequenceHero;


import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 220;

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Store preloaded images to prevent redundant network requests and avoid re-renders
  const imagesRef = useRef([]);
  // Animation playhead to keep track of current frame
  const playhead = useRef({ frame: 0 });

  // Dynamically load images with zero-padding logic
  const getImagePath = (index) => {
    const paddedIndex = index.toString().padStart(3, '0');
    // Using import.meta.url helps Vite correctly resolve dynamic relative assets
    return new URL(`./ezgif-3092f86c1e3bc288-jpg/ezgif-frame-${paddedIndex}.jpg`, import.meta.url).href;
  };

  // Render the specific frame on the canvas with "cover" aspect-ratio handling
  const renderFrame = (index) => {
    const safeIndex = Math.max(0, Math.min(frameCount - 1, Math.round(index)));
    const canvas = canvasRef.current;
    const img = imagesRef.current[safeIndex];

    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // alpha false optimizes performance
    
    // Handle HDPI / Retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Cover logic
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image, fit to width, crop top/bottom
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image, fit to height, crop sides
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, rect.width, rect.height);
    // Enable smooth image rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    let active = true;

    const preloadImages = async () => {
      let loaded = 0;
      const promises = [];

      for (let i = 1; i <= frameCount; i++) {
        promises.push(
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = getImagePath(i);
            img.onload = () => {
              loaded++;
              if (active) setLoadingProgress(Math.floor((loaded / frameCount) * 100));
              resolve(img);
            };
            img.onerror = () => {
              console.warn(`Failed to load frame ${i}`);
              resolve(null); // Resolve to null to prevent blocking the entire sequence
            };
          })
        );
      }

      const results = await Promise.all(promises);
      if (!active) return;
      
      // Filter out any frames that failed to load
      imagesRef.current = results.filter(Boolean);
      setIsLoaded(true);

      // Force render frame 0 once images are loaded
      requestAnimationFrame(() => renderFrame(0));
    };

    preloadImages();

    return () => {
      active = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (!isLoaded) return;

    // Handle resizing beautifully
    const handleResize = () => {
      requestAnimationFrame(() => {
        renderFrame(playhead.current.frame);
      });
    };
    
    window.addEventListener('resize', handleResize);

    // Initial render sizing setup
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      renderFrame(0);
    }

    // Connect animation to scroll
    let ctx = gsap.context(() => {
      gsap.to(playhead.current, {
        frame: imagesRef.current.length - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          // Start pinning when hero top reaches just below the navbar (~112px on desktop, two-row nav)
          start: "top top+=95",
          // Scroll length determines how fast frames go
          // 400vh gives a very generous amount of scroll time for 220 frames
          end: "+=400%",
          pin: true,
          scrub: 1, // Smooth Apple-like easing/interpolation on scroll
          anticipatePin: 1,
        },
        onUpdate: () => {
          requestAnimationFrame(() => {
            renderFrame(playhead.current.frame);
          });
        }
      });
    }, containerRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ height: '100vh' }}
    >
      
      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans transition-opacity duration-700 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-xl md:text-2xl mb-6 font-light tracking-widest text-gray-300">
          LOADING EXPERIENCE
        </div>
        <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out" 
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      </div>

      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none' }} // Prevents mobile touch quirks
      />
      
      {/* Subtly fading gradient to blend with the rest of the page if needed */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  );
}