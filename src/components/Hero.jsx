// import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const frameCount = 220;

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   // Store preloaded images to prevent redundant network requests and avoid re-renders
//   const imagesRef = useRef([]);
//   // Animation playhead to keep track of current frame
//   const playhead = useRef({ frame: 0 });

//   // Dynamically load images with zero-padding logic
//   const getImagePath = (index) => {
//     const paddedIndex = index.toString().padStart(3, '0');
//     // Using import.meta.url helps Vite correctly resolve dynamic relative assets
//     return new URL(`./ezgif-3092f86c1e3bc288-jpg/ezgif-frame-${paddedIndex}.jpg`, import.meta.url).href;
//   };

//   // Render the specific frame on the canvas with "cover" aspect-ratio handling
//   const renderFrame = (index) => {
//     const safeIndex = Math.max(0, Math.min(frameCount - 1, Math.round(index)));
//     const canvas = canvasRef.current;
//     const img = imagesRef.current[safeIndex];

//     if (!canvas || !img) return;

//     const ctx = canvas.getContext('2d', { alpha: false }); // alpha false optimizes performance
    
//     // Handle HDPI / Retina displays
//     const dpr = window.devicePixelRatio || 1;
//     const rect = canvas.getBoundingClientRect();
    
//     if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
//       ctx.scale(dpr, dpr);
//     }

//     // Cover logic
//     const canvasRatio = rect.width / rect.height;
//     const imgRatio = img.width / img.height;

//     let drawWidth = rect.width;
//     let drawHeight = rect.height;
//     let offsetX = 0;
//     let offsetY = 0;

//     if (canvasRatio > imgRatio) {
//       // Canvas is wider than image, fit to width, crop top/bottom
//       drawHeight = rect.width / imgRatio;
//       offsetY = (rect.height - drawHeight) / 2;
//     } else {
//       // Canvas is taller than image, fit to height, crop sides
//       drawWidth = rect.height * imgRatio;
//       offsetX = (rect.width - drawWidth) / 2;
//     }

//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, rect.width, rect.height);
//     // Enable smooth image rendering
//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';
//     ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//   };

//   useEffect(() => {
//     let active = true;

//     const preloadImages = async () => {
//       let loaded = 0;
//       const promises = [];

//       for (let i = 1; i <= frameCount; i++) {
//         promises.push(
//           new Promise((resolve, reject) => {
//             const img = new Image();
//             img.src = getImagePath(i);
//             img.onload = () => {
//               loaded++;
//               if (active) setLoadingProgress(Math.floor((loaded / frameCount) * 100));
//               resolve(img);
//             };
//             img.onerror = () => {
//               console.warn(`Failed to load frame ${i}`);
//               resolve(null); // Resolve to null to prevent blocking the entire sequence
//             };
//           })
//         );
//       }

//       const results = await Promise.all(promises);
//       if (!active) return;
      
//       // Filter out any frames that failed to load
//       imagesRef.current = results.filter(Boolean);
//       setIsLoaded(true);

//       // Force render frame 0 once images are loaded
//       requestAnimationFrame(() => renderFrame(0));
//     };

//     preloadImages();

//     return () => {
//       active = false;
//     };
//   }, []);

//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     // Handle resizing beautifully
//     const handleResize = () => {
//       requestAnimationFrame(() => {
//         renderFrame(playhead.current.frame);
//       });
//     };
    
//     window.addEventListener('resize', handleResize);

//     // Initial render sizing setup
//     const canvas = canvasRef.current;
//     if (canvas) {
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * (window.devicePixelRatio || 1);
//       canvas.height = rect.height * (window.devicePixelRatio || 1);
//       renderFrame(0);
//     }

//     // Connect animation to scroll
//     let ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         snap: "frame",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           // Start pinning when hero top reaches just below the navbar (~112px on desktop, two-row nav)
//           start: "top top+=95",
//           // Scroll length determines how fast frames go
//           // 400vh gives a very generous amount of scroll time for 220 frames
//           end: "+=400%",
//           pin: true,
//           scrub: 1, // Smooth Apple-like easing/interpolation on scroll
//           anticipatePin: 1,
//         },
//         onUpdate: () => {
//           requestAnimationFrame(() => {
//             renderFrame(playhead.current.frame);
//           });
//         }
//       });
//     }, containerRef);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       ctx.revert();
//     };
//   }, [isLoaded]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100vh' }}
//     >
      
//       {/* Loading Overlay */}
//       <div 
//         className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans transition-opacity duration-700 pointer-events-none ${
//           isLoaded ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         <div className="text-xl md:text-2xl mb-6 font-light tracking-widest text-gray-300">
//           LOADING EXPERIENCE
//         </div>
//         <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
//           <div 
//             className="h-full bg-white transition-all duration-300 ease-out" 
//             style={{ width: `${loadingProgress}%` }}
//           />
//         </div>
//       </div>

//       {/* Canvas Layer */}
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full block"
//         style={{ touchAction: 'none' }} // Prevents mobile touch quirks
//       />
      
//       {/* Subtly fading gradient to blend with the rest of the page if needed */}
//       <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent" />
//     </div>
//   );
// }



// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollTriggerCtxRef = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const paddedIndex = index.toString().padStart(3, '0');
//     const folder = IMAGE_SETS[setType];
//     return new URL(`./${folder}/ezgif-frame-${paddedIndex}.jpg`, import.meta.url).href;
//   }, []);

//   // ✅ FIX: Use window dimensions directly instead of getBoundingClientRect
//   // which can return 0 on mobile before layout is complete
//   const renderFrame = useCallback((index) => {
//     const safeIndex = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(index)));
//     const canvas = canvasRef.current;
//     const img = imagesRef.current[safeIndex];

//     if (!canvas || !img) return;

//     const ctx = canvas.getContext('2d', { alpha: false });
//     const dpr = window.devicePixelRatio || 1;

//     // Use the canvas's actual CSS size from its style/parent, not getBoundingClientRect
//     const cssWidth = canvas.offsetWidth || window.innerWidth;
//     const cssHeight = canvas.offsetHeight || window.innerHeight;

//     // Only resize the backing store if dimensions have actually changed
//     const targetW = Math.round(cssWidth * dpr);
//     const targetH = Math.round(cssHeight * dpr);

//     if (canvas.width !== targetW || canvas.height !== targetH) {
//       canvas.width = targetW;
//       canvas.height = targetH;
//     }

//     // Reset transform each frame so scale doesn't compound
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     const canvasRatio = cssWidth / cssHeight;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     let drawWidth, drawHeight, offsetX, offsetY;

//     // object-fit: cover — always fill the full canvas
//     if (canvasRatio > imgRatio) {
//       drawWidth = cssWidth;
//       drawHeight = cssWidth / imgRatio;
//       offsetX = 0;
//       offsetY = (cssHeight - drawHeight) / 2;
//     } else {
//       drawHeight = cssHeight;
//       drawWidth = cssHeight * imgRatio;
//       offsetX = (cssWidth - drawWidth) / 2;
//       offsetY = 0;
//     }

//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, cssWidth, cssHeight);
//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';
//     ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//   }, []);

//   const preloadImages = useCallback(async (setType, totalFrames) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;
//     const promises = [];

//     for (let i = 1; i <= totalFrames; i++) {
//       promises.push(
//         new Promise((resolve) => {
//           const img = new Image();
//           img.src = getImagePath(setType, i);
//           img.onload = () => {
//             loaded++;
//             if (!loadingAbortRef.current) {
//               setLoadingProgress(Math.floor((loaded / totalFrames) * 100));
//             }
//             resolve(img);
//           };
//           img.onerror = () => {
//             console.warn(`Failed to load frame ${i} for set ${setType}`);
//             resolve(null);
//           };
//         })
//       );
//     }

//     const results = await Promise.all(promises);
//     if (loadingAbortRef.current) return;

//     const validImages = results.filter(Boolean);
//     imagesRef.current = validImages;

//     const effectiveFrameCount = validImages.length;
//     if (effectiveFrameCount !== totalFrames) {
//       console.warn(`Expected ${totalFrames} frames but loaded ${effectiveFrameCount}`);
//       setFrameCount(effectiveFrameCount);
//     }

//     setIsLoaded(true);
//     playhead.current.frame = 0;
//     // ✅ FIX: Small delay lets the browser complete layout before first render
//     setTimeout(() => requestAnimationFrame(() => renderFrame(0)), 50);
//   }, [getImagePath, renderFrame]);

//   const updateSetBasedOnScreen = useCallback(() => {
//     const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//     const newSet = isMobile ? 'small' : 'large';
//     const newFrameCount = isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT;

//     if (newSet !== currentSet) {
//       setCurrentSet(newSet);
//       setFrameCount(newFrameCount);
//     }
//   }, [currentSet]);

//   useEffect(() => {
//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         updateSetBasedOnScreen();
//       }, 150);
//     };

//     updateSetBasedOnScreen();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       clearTimeout(resizeTimer);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [updateSetBasedOnScreen]);

//   useEffect(() => {
//     if (currentSet && frameCount) {
//       loadingAbortRef.current = true;
//       if (scrollTriggerCtxRef.current) {
//         scrollTriggerCtxRef.current.revert();
//         scrollTriggerCtxRef.current = null;
//       }
//       preloadImages(currentSet, frameCount);
//     }

//     return () => {
//       loadingAbortRef.current = true;
//     };
//   }, [currentSet, frameCount, preloadImages]);

//   useLayoutEffect(() => {
//     if (!isLoaded || imagesRef.current.length === 0) return;

//     if (scrollTriggerCtxRef.current) {
//       scrollTriggerCtxRef.current.revert();
//     }

//     // ✅ FIX: Re-render on resize using offsetWidth/Height, not rect
//     const handleResize = () => {
//       requestAnimationFrame(() => {
//         if (imagesRef.current.length > 0) {
//           renderFrame(playhead.current.frame);
//         }
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     // ✅ FIX: Initialize canvas size explicitly before first render
//     const canvas = canvasRef.current;
//     if (canvas) {
//       const dpr = window.devicePixelRatio || 1;
//       canvas.width = canvas.offsetWidth * dpr;
//       canvas.height = canvas.offsetHeight * dpr;
//       renderFrame(0);
//     }

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         snap: 'frame',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top+=95',
//           end: '+=400%',
//           pin: true,
//           scrub: 1,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//         onUpdate: () => {
//           requestAnimationFrame(() => {
//             renderFrame(playhead.current.frame);
//           });
//         },
//       });
//     }, containerRef);

//     scrollTriggerCtxRef.current = ctx;

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (scrollTriggerCtxRef.current) {
//         scrollTriggerCtxRef.current.revert();
//         scrollTriggerCtxRef.current = null;
//       }
//     };
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100vh' }}
//     >
//       <div
//         className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans transition-opacity duration-700 pointer-events-none ${
//           isLoaded ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         <div className="text-xl md:text-2xl mb-6 font-light tracking-widest text-gray-300">
//           LOADING EXPERIENCE
//         </div>
//         <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-white transition-all duration-300 ease-out"
//             style={{ width: `${loadingProgress}%` }}
//           />
//         </div>
//         <div className="mt-4 text-sm text-gray-500">
//           {currentSet === 'large' ? 'Desktop version' : 'Mobile optimized (40 frames)'}
//         </div>
//       </div>

//       {/* ✅ FIX: Add explicit width/height 100% via style to guarantee layout on iOS/Android */}
//       <canvas
//         ref={canvasRef}
//         className="block"
//         style={{ width: '100%', height: '100%', touchAction: 'none', display: 'block' }}
//       />

//       <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent" />
//     </div>
//   );
// }

// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollTriggerCtxRef = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const paddedIndex = index.toString().padStart(3, '0');
//     const folder = IMAGE_SETS[setType];
//     return new URL(`./${folder}/ezgif-frame-${paddedIndex}.jpg`, import.meta.url).href;
//   }, []);

//   // ✅ FIX: Use window dimensions directly instead of getBoundingClientRect
//   // which can return 0 on mobile before layout is complete
//   const renderFrame = useCallback((index) => {
//     const safeIndex = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(index)));
//     const canvas = canvasRef.current;
//     const img = imagesRef.current[safeIndex];

//     if (!canvas || !img) return;

//     const ctx = canvas.getContext('2d', { alpha: false });
//     const dpr = window.devicePixelRatio || 1;

//     // Use the canvas's actual CSS size from its style/parent, not getBoundingClientRect
//     const cssWidth = canvas.offsetWidth || window.innerWidth;
//     const cssHeight = canvas.offsetHeight || window.innerHeight;

//     // Only resize the backing store if dimensions have actually changed
//     const targetW = Math.round(cssWidth * dpr);
//     const targetH = Math.round(cssHeight * dpr);

//     if (canvas.width !== targetW || canvas.height !== targetH) {
//       canvas.width = targetW;
//       canvas.height = targetH;
//     }

//     // Reset transform each frame so scale doesn't compound
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     const canvasRatio = cssWidth / cssHeight;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     let drawWidth, drawHeight, offsetX, offsetY;

//     // object-fit: cover — always fill the full canvas
//     if (canvasRatio > imgRatio) {
//       drawWidth = cssWidth;
//       drawHeight = cssWidth / imgRatio;
//       offsetX = 0;
//       offsetY = (cssHeight - drawHeight) / 2;
//     } else {
//       drawHeight = cssHeight;
//       drawWidth = cssHeight * imgRatio;
//       offsetX = (cssWidth - drawWidth) / 2;
//       offsetY = 0;
//     }

//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, cssWidth, cssHeight);
//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';
//     ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//   }, []);

//   const preloadImages = useCallback(async (setType, totalFrames) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;
//     const promises = [];

//     for (let i = 1; i <= totalFrames; i++) {
//       promises.push(
//         new Promise((resolve) => {
//           const img = new Image();
//           img.src = getImagePath(setType, i);
//           img.onload = () => {
//             loaded++;
//             if (!loadingAbortRef.current) {
//               setLoadingProgress(Math.floor((loaded / totalFrames) * 100));
//             }
//             resolve(img);
//           };
//           img.onerror = () => {
//             console.warn(`Failed to load frame ${i} for set ${setType}`);
//             resolve(null);
//           };
//         })
//       );
//     }

//     const results = await Promise.all(promises);
//     if (loadingAbortRef.current) return;

//     const validImages = results.filter(Boolean);
//     imagesRef.current = validImages;

//     const effectiveFrameCount = validImages.length;
//     if (effectiveFrameCount !== totalFrames) {
//       console.warn(`Expected ${totalFrames} frames but loaded ${effectiveFrameCount}`);
//       setFrameCount(effectiveFrameCount);
//     }

//     setIsLoaded(true);
//     playhead.current.frame = 0;
//     // ✅ FIX: Small delay lets the browser complete layout before first render
//     setTimeout(() => requestAnimationFrame(() => renderFrame(0)), 50);
//   }, [getImagePath, renderFrame]);

//   const updateSetBasedOnScreen = useCallback(() => {
//     const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//     const newSet = isMobile ? 'small' : 'large';
//     const newFrameCount = isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT;

//     if (newSet !== currentSet) {
//       setCurrentSet(newSet);
//       setFrameCount(newFrameCount);
//     }
//   }, [currentSet]);

//   useEffect(() => {
//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(() => {
//         updateSetBasedOnScreen();
//       }, 150);
//     };

//     updateSetBasedOnScreen();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       clearTimeout(resizeTimer);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [updateSetBasedOnScreen]);

//   useEffect(() => {
//     if (currentSet && frameCount) {
//       loadingAbortRef.current = true;
//       if (scrollTriggerCtxRef.current) {
//         scrollTriggerCtxRef.current.revert();
//         scrollTriggerCtxRef.current = null;
//       }
//       preloadImages(currentSet, frameCount);
//     }

//     return () => {
//       loadingAbortRef.current = true;
//     };
//   }, [currentSet, frameCount, preloadImages]);

//   useLayoutEffect(() => {
//     if (!isLoaded || imagesRef.current.length === 0) return;

//     if (scrollTriggerCtxRef.current) {
//       scrollTriggerCtxRef.current.revert();
//     }

//     // ✅ FIX: Re-render on resize using offsetWidth/Height, not rect
//     const handleResize = () => {
//       requestAnimationFrame(() => {
//         if (imagesRef.current.length > 0) {
//           renderFrame(playhead.current.frame);
//         }
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     // ✅ FIX: Initialize canvas size explicitly before first render
//     const canvas = canvasRef.current;
//     if (canvas) {
//       const dpr = window.devicePixelRatio || 1;
//       canvas.width = canvas.offsetWidth * dpr;
//       canvas.height = canvas.offsetHeight * dpr;
//       renderFrame(0);
//     }

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         snap: 'frame',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top+=95',
//           end: '+=400%',
//           pin: true,
//           scrub: 1,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//         onUpdate: () => {
//           requestAnimationFrame(() => {
//             renderFrame(playhead.current.frame);
//           });
//         },
//       });
//     }, containerRef);

//     scrollTriggerCtxRef.current = ctx;

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (scrollTriggerCtxRef.current) {
//         scrollTriggerCtxRef.current.revert();
//         scrollTriggerCtxRef.current = null;
//       }
//     };
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100vh' }}
//     >
//       <div
//         className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans transition-opacity duration-700 pointer-events-none ${
//           isLoaded ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         <div className="text-xl md:text-2xl mb-6 font-light tracking-widest text-gray-300">
//           LOADING EXPERIENCE
//         </div>
//         <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-white transition-all duration-300 ease-out"
//             style={{ width: `${loadingProgress}%` }}
//           />
//         </div>
//         <div className="mt-4 text-sm text-gray-500">
//           {currentSet === 'large' ? 'Desktop version' : 'Mobile optimized (40 frames)'}
//         </div>
//       </div>

//       {/* ✅ FIX: Add explicit width/height 100% via style to guarantee layout on iOS/Android */}
//       <canvas
//         ref={canvasRef}
//         className="block"
//         style={{ width: '100%', height: '100%', touchAction: 'none', display: 'block' }}
//       />

//       <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent" />
//     </div>
//   );
// }

// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollTriggerCtxRef = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const paddedIndex = index.toString().padStart(3, '0');
//     const folder = IMAGE_SETS[setType];
//     return new URL(`./${folder}/ezgif-frame-${paddedIndex}.jpg`, import.meta.url).href;
//   }, []);

//   // ✅ RESPONSIVE RENDER (FIXED)
//   const renderFrame = useCallback((index) => {
//     const safeIndex = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(index)));
//     const canvas = canvasRef.current;
//     const img = imagesRef.current[safeIndex];

//     if (!canvas || !img) return;

//     const ctx = canvas.getContext('2d', { alpha: false });
//     const dpr = window.devicePixelRatio || 1;

//     const cssWidth = canvas.offsetWidth || window.innerWidth;
//     const cssHeight = canvas.offsetHeight || window.innerHeight;

//     const targetW = Math.round(cssWidth * dpr);
//     const targetH = Math.round(cssHeight * dpr);

//     if (canvas.width !== targetW || canvas.height !== targetH) {
//       canvas.width = targetW;
//       canvas.height = targetH;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     const canvasRatio = cssWidth / cssHeight;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     let drawWidth, drawHeight;

//     const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

//     if (isMobile) {
//       // ✅ CONTAIN (no crop)
//       if (canvasRatio > imgRatio) {
//         drawHeight = cssHeight;
//         drawWidth = cssHeight * imgRatio;
//       } else {
//         drawWidth = cssWidth;
//         drawHeight = cssWidth / imgRatio;
//       }

//       // slight zoom (optional polish)
//       const scaleBoost = 1.02;
//       drawWidth *= scaleBoost;
//       drawHeight *= scaleBoost;

//     } else {
//       // ✅ COVER (cinematic)
//       if (canvasRatio > imgRatio) {
//         drawWidth = cssWidth;
//         drawHeight = cssWidth / imgRatio;
//       } else {
//         drawHeight = cssHeight;
//         drawWidth = cssHeight * imgRatio;
//       }
//     }

//     const offsetX = (cssWidth - drawWidth) / 2;
//     const offsetY = (cssHeight - drawHeight) / 2;

//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, cssWidth, cssHeight);

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';

//     ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//   }, []);

//   const preloadImages = useCallback(async (setType, totalFrames) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;

//     const promises = Array.from({ length: totalFrames }, (_, i) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = getImagePath(setType, i + 1);

//         img.onload = () => {
//           loaded++;
//           if (!loadingAbortRef.current) {
//             setLoadingProgress(Math.floor((loaded / totalFrames) * 100));
//           }
//           resolve(img);
//         };

//         img.onerror = () => resolve(null);
//       });
//     });

//     const results = await Promise.all(promises);
//     if (loadingAbortRef.current) return;

//     imagesRef.current = results.filter(Boolean);

//     setIsLoaded(true);
//     playhead.current.frame = 0;

//     setTimeout(() => requestAnimationFrame(() => renderFrame(0)), 50);
//   }, [getImagePath, renderFrame]);

//   const updateSetBasedOnScreen = useCallback(() => {
//     const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//     setCurrentSet(isMobile ? 'small' : 'large');
//     setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
//   }, []);

//   useEffect(() => {
//     updateSetBasedOnScreen();

//     let resizeTimer;
//     const handleResize = () => {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(updateSetBasedOnScreen, 150);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [updateSetBasedOnScreen]);

//   useEffect(() => {
//     loadingAbortRef.current = true;

//     if (scrollTriggerCtxRef.current) {
//       scrollTriggerCtxRef.current.revert();
//       scrollTriggerCtxRef.current = null;
//     }

//     preloadImages(currentSet, frameCount);

//     return () => {
//       loadingAbortRef.current = true;
//     };
//   }, [currentSet, frameCount, preloadImages]);

//   useLayoutEffect(() => {
//     if (!isLoaded || imagesRef.current.length === 0) return;

//     const handleResize = () => {
//       requestAnimationFrame(() => renderFrame(playhead.current.frame));
//     };

//     window.addEventListener('resize', handleResize);

//     const canvas = canvasRef.current;
//     if (canvas) {
//       const dpr = window.devicePixelRatio || 1;
//       canvas.width = canvas.offsetWidth * dpr;
//       canvas.height = canvas.offsetHeight * dpr;
//       renderFrame(0);
//     }

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         snap: 'frame',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top+=95',
//           end: window.innerWidth < MOBILE_BREAKPOINT ? '+=250%' : '+=400%',
//           pin: true,
//           scrub: 1,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//         onUpdate: () => {
//           requestAnimationFrame(() => renderFrame(playhead.current.frame));
//         },
//       });
//     }, containerRef);

//     scrollTriggerCtxRef.current = ctx;

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       ctx.revert();
//     };
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100dvh' }} // ✅ mobile fix
//     >
//       {/* Loader */}
//       <div
//         className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 ${
//           isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
//         }`}
//       >
//         <div className="text-xl mb-4">LOADING EXPERIENCE</div>
//         <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-white transition-all"
//             style={{ width: `${loadingProgress}%` }}
//           />
//         </div>
//       </div>

//       {/* Canvas */}
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: '100%',
//           height: '100%',
//           display: 'block',
//           touchAction: 'none'
//         }}
//       />

//       <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
//     </div>
//   );
// }

// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollCtxRef = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const padded = index.toString().padStart(3, '0');
//     return new URL(`./${IMAGE_SETS[setType]}/ezgif-frame-${padded}.jpg`, import.meta.url).href;
//   }, []);

//   // 🔥 PERFECT RESPONSIVE RENDER
//   const renderFrame = useCallback((frame) => {
//     const canvas = canvasRef.current;
//     const img = imagesRef.current[Math.round(frame)];

//     if (!canvas || !img) return;

//     const ctx = canvas.getContext('2d');
//     const dpr = window.devicePixelRatio || 1;

//     const width = canvas.offsetWidth || window.innerWidth;
//     const height = canvas.offsetHeight || window.innerHeight;

//     // Fix canvas resolution
//     if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     const canvasRatio = width / height;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     let drawWidth, drawHeight;

//     const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

//     if (isMobile) {
//       // ✅ HYBRID SCALE (BEST MOBILE EXPERIENCE)
//       const containScale =
//         canvasRatio > imgRatio
//           ? height / img.naturalHeight
//           : width / img.naturalWidth;

//       const coverScale =
//         canvasRatio > imgRatio
//           ? width / img.naturalWidth
//           : height / img.naturalHeight;

//       const scale = containScale * 0.75 + coverScale * 0.25;

//       drawWidth = img.naturalWidth * scale;
//       drawHeight = img.naturalHeight * scale;

//     } else {
//       // ✅ DESKTOP COVER
//       if (canvasRatio > imgRatio) {
//         drawWidth = width;
//         drawHeight = width / imgRatio;
//       } else {
//         drawHeight = height;
//         drawWidth = height * imgRatio;
//       }
//     }

//     const x = (width - drawWidth) / 2;
//     const y = (height - drawHeight) / 2;

//     ctx.fillStyle = '#000';
//     ctx.fillRect(0, 0, width, height);

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';

//     ctx.drawImage(img, x, y, drawWidth, drawHeight);
//   }, []);

//   // 🔄 PRELOAD
//   const preloadImages = useCallback(async (set, count) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;

//     const imgs = await Promise.all(
//       Array.from({ length: count }, (_, i) => {
//         return new Promise((res) => {
//           const img = new Image();
//           img.src = getImagePath(set, i + 1);

//           img.onload = () => {
//             loaded++;
//             setLoadingProgress(Math.floor((loaded / count) * 100));
//             res(img);
//           };

//           img.onerror = () => res(null);
//         });
//       })
//     );

//     if (loadingAbortRef.current) return;

//     imagesRef.current = imgs.filter(Boolean);
//     setIsLoaded(true);
//     playhead.current.frame = 0;

//     requestAnimationFrame(() => renderFrame(0));
//   }, [getImagePath, renderFrame]);

//   // 📱 RESPONSIVE SWITCH
//   const updateScreen = useCallback(() => {
//     const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//     setCurrentSet(isMobile ? 'small' : 'large');
//     setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
//   }, []);

//   useEffect(() => {
//     updateScreen();

//     let timer;
//     const resize = () => {
//       clearTimeout(timer);
//       timer = setTimeout(updateScreen, 150);
//     };

//     window.addEventListener('resize', resize);
//     return () => window.removeEventListener('resize', resize);
//   }, [updateScreen]);

//   useEffect(() => {
//     loadingAbortRef.current = true;

//     if (scrollCtxRef.current) {
//       scrollCtxRef.current.revert();
//       scrollCtxRef.current = null;
//     }

//     preloadImages(currentSet, frameCount);

//     return () => (loadingAbortRef.current = true);
//   }, [currentSet, frameCount, preloadImages]);

//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         ease: 'none',
//         snap: 'frame',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: window.innerWidth < MOBILE_BREAKPOINT ? '+=250%' : '+=400%',
//           scrub: 1,
//           pin: true,
//         },
//         onUpdate: () => renderFrame(playhead.current.frame)
//       });
//     });

//     scrollCtxRef.current = ctx;

//     return () => ctx.revert();
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100dvh' }} // ✅ mobile fix
//     >
//       {/* Loader */}
//       {!isLoaded && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
//           <p className="mb-3">Loading Experience...</p>
//           <div className="w-60 h-1 bg-gray-800">
//             <div
//               className="h-full bg-white transition-all"
//               style={{ width: `${loadingProgress}%` }}
//             />
//           </div>
//         </div>
//       )}

//       {/* Canvas */}
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: '100%',
//           height: '100%',
//           display: 'block'
//         }}
//       />

//       {/* Gradient */}
//       <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
//     </div>
//   );
// }

// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// // ✅ MOBILE FIX CONFIG
// ScrollTrigger.config({
//   ignoreMobileResize: true,
// });

// ScrollTrigger.normalizeScroll(true);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollCtx = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const padded = index.toString().padStart(3, '0');
//     return new URL(`./${IMAGE_SETS[setType]}/ezgif-frame-${padded}.jpg`, import.meta.url).href;
//   }, []);

//   // ✅ PERFECT CANVAS DRAW
//   const renderFrame = useCallback((frame) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');

//     if (!canvas || !ctx || imagesRef.current.length === 0) return;

//     const index = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(frame)));
//     const img = imagesRef.current[index];
//     if (!img) return;

//     const dpr = window.devicePixelRatio || 1;

//     const rect = canvas.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;

//     if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.clearRect(0, 0, width, height);

//     const canvasRatio = width / height;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     const isMobile = width < MOBILE_BREAKPOINT;

//     let drawWidth, drawHeight;

//     if (isMobile) {
//       // ✅ CONTAIN
//       if (canvasRatio > imgRatio) {
//         drawHeight = height;
//         drawWidth = height * imgRatio;
//       } else {
//         drawWidth = width;
//         drawHeight = width / imgRatio;
//       }
//     } else {
//       // ✅ COVER
//       if (canvasRatio > imgRatio) {
//         drawWidth = width;
//         drawHeight = width / imgRatio;
//       } else {
//         drawHeight = height;
//         drawWidth = height * imgRatio;
//       }
//     }

//     const x = (width - drawWidth) / 2;
//     const y = (height - drawHeight) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';

//     ctx.drawImage(img, x, y, drawWidth, drawHeight);
//   }, []);

//   // ✅ PRELOAD
//   const preloadImages = useCallback(async (setType, total) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;

//     const imgs = await Promise.all(
//       Array.from({ length: total }, (_, i) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = getImagePath(setType, i + 1);

//           img.onload = () => {
//             loaded++;
//             if (!loadingAbortRef.current) {
//               setLoadingProgress(Math.floor((loaded / total) * 100));
//             }
//             resolve(img);
//           };

//           img.onerror = () => resolve(null);
//         });
//       })
//     );

//     if (loadingAbortRef.current) return;

//     imagesRef.current = imgs.filter(Boolean);
//     setIsLoaded(true);

//     requestAnimationFrame(() => renderFrame(0));
//   }, [getImagePath, renderFrame]);

//   // ✅ RESPONSIVE SET SWITCH
//   useEffect(() => {
//     const update = () => {
//       const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//       setCurrentSet(isMobile ? 'small' : 'large');
//       setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
//     };

//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   // ✅ LOAD IMAGES
//   useEffect(() => {
//     loadingAbortRef.current = true;
//     scrollCtx.current?.revert();

//     preloadImages(currentSet, frameCount);

//     return () => {
//       loadingAbortRef.current = true;
//     };
//   }, [currentSet, frameCount, preloadImages]);

//   // ✅ GSAP + MOBILE FIX
//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     const canvas = canvasRef.current;

//     const resizeObserver = new ResizeObserver(() => {
//       renderFrame(playhead.current.frame);
//       ScrollTrigger.refresh();
//     });

//     resizeObserver.observe(canvas);

//     renderFrame(0);

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         ease: 'none',
//         snap: 'frame',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: window.innerWidth < MOBILE_BREAKPOINT ? '+=300%' : '+=400%',
//           pin: true,
//           scrub: 1.2, // ✅ smoother touch
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           invalidateOnRefresh: true,
//         },
//         onUpdate: () => renderFrame(playhead.current.frame)
//       });
//     });

//     scrollCtx.current = ctx;

//     return () => {
//       resizeObserver.disconnect();
//       ctx.revert();
//     };
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100dvh' }}
//     >
//       {/* Loader */}
//       <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : ''}`}>
//         <div className="mb-3">LOADING EXPERIENCE</div>
//         <div className="w-56 h-1 bg-gray-800">
//           <div className="h-full bg-white" style={{ width: `${loadingProgress}%` }} />
//         </div>
//       </div>

//       {/* Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full block"
//         style={{
//           pointerEvents: 'none', // ✅ allow touch scroll
//           touchAction: 'auto'
//         }}
//       />

//       <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
//     </div>
//   );
// }

// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//   ignoreMobileResize: true,
// });

// ScrollTrigger.normalizeScroll(true);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollCtx = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const padded = index.toString().padStart(3, '0');
//     return new URL(`./${IMAGE_SETS[setType]}/ezgif-frame-${padded}.jpg`, import.meta.url).href;
//   }, []);

//   const renderFrame = useCallback((frame) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');

//     if (!canvas || !ctx || imagesRef.current.length === 0) return;

//     const index = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(frame)));
//     const img = imagesRef.current[index];
//     if (!img) return;

//     const dpr = window.devicePixelRatio || 1;

//     const rect = canvas.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;

//     if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.clearRect(0, 0, width, height);

//     const canvasRatio = width / height;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     // ✅ COVER on all screen sizes — no black bars
//     let drawWidth, drawHeight;

//     if (canvasRatio > imgRatio) {
//       drawWidth = width;
//       drawHeight = width / imgRatio;
//     } else {
//       drawHeight = height;
//       drawWidth = height * imgRatio;
//     }

//     const x = (width - drawWidth) / 2;
//     const y = (height - drawHeight) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';

//     ctx.drawImage(img, x, y, drawWidth, drawHeight);
//   }, []);

//   const preloadImages = useCallback(async (setType, total) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;

//     const imgs = await Promise.all(
//       Array.from({ length: total }, (_, i) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = getImagePath(setType, i + 1);

//           img.onload = () => {
//             loaded++;
//             if (!loadingAbortRef.current) {
//               setLoadingProgress(Math.floor((loaded / total) * 100));
//             }
//             resolve(img);
//           };

//           img.onerror = () => resolve(null);
//         });
//       })
//     );

//     if (loadingAbortRef.current) return;

//     imagesRef.current = imgs.filter(Boolean);
//     setIsLoaded(true);

//     requestAnimationFrame(() => renderFrame(0));
//   }, [getImagePath, renderFrame]);

//   useEffect(() => {
//     const update = () => {
//       const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//       setCurrentSet(isMobile ? 'small' : 'large');
//       setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
//     };

//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   useEffect(() => {
//     loadingAbortRef.current = true;
//     scrollCtx.current?.revert();

//     preloadImages(currentSet, frameCount);

//     return () => {
//       loadingAbortRef.current = true;
//     };
//   }, [currentSet, frameCount, preloadImages]);

//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     const canvas = canvasRef.current;

//     const resizeObserver = new ResizeObserver(() => {
//       renderFrame(playhead.current.frame);
//       ScrollTrigger.refresh();
//     });

//     resizeObserver.observe(canvas);

//     renderFrame(0);

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         ease: 'none',
//         snap: 'frame',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: window.innerWidth < MOBILE_BREAKPOINT ? '+=200%' : '+=400%',
//           pin: true,
//           scrub: 1.2,
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           invalidateOnRefresh: true,
//         },
//         onUpdate: () => renderFrame(playhead.current.frame)
//       });
//     });

//     scrollCtx.current = ctx;

//     return () => {
//       resizeObserver.disconnect();
//       ctx.revert();
//     };
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-black overflow-hidden"
//       style={{ height: '100dvh' }}
//     >
//       {/* Loader */}
//       <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : ''}`}>
//         <div className="mb-3">LOADING EXPERIENCE</div>
//         <div className="w-56 h-1 bg-gray-800">
//           <div className="h-full bg-white" style={{ width: `${loadingProgress}%` }} />
//         </div>
//       </div>

//       {/* Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full block"
//         style={{
//           pointerEvents: 'none',
//           touchAction: 'auto'
//         }}
//       />

//       <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
//     </div>
//   );
// }

// import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//   ignoreMobileResize: true,
// });

// ScrollTrigger.normalizeScroll(true);

// const LARGE_FRAME_COUNT = 220;
// const SMALL_FRAME_COUNT = 40;
// const MOBILE_BREAKPOINT = 768;

// const IMAGE_SETS = {
//   large: 'ezgif-3092f86c1e3bc288-jpg',
//   small: 'ezgif-760ec97de81ae793-jpg'
// };

// export default function Hero() {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [currentSet, setCurrentSet] = useState('large');
//   const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);

//   const imagesRef = useRef([]);
//   const playhead = useRef({ frame: 0 });
//   const loadingAbortRef = useRef(false);
//   const scrollCtx = useRef(null);

//   const getImagePath = useCallback((setType, index) => {
//     const padded = index.toString().padStart(3, '0');
//     return new URL(`./${IMAGE_SETS[setType]}/ezgif-frame-${padded}.jpg`, import.meta.url).href;
//   }, []);

//   const renderFrame = useCallback((frame) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext('2d');

//     if (!canvas || !ctx || imagesRef.current.length === 0) return;

//     const index = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(frame)));
//     const img = imagesRef.current[index];
//     if (!img) return;

//     const dpr = window.devicePixelRatio || 1;

//     const rect = canvas.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;

//     if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//     }

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     ctx.clearRect(0, 0, width, height);

//     const canvasRatio = width / height;
//     const imgRatio = img.naturalWidth / img.naturalHeight;

//     // ✅ COVER on all screen sizes — no black bars
//     let drawWidth, drawHeight;

//     if (canvasRatio > imgRatio) {
//       drawWidth = width;
//       drawHeight = width / imgRatio;
//     } else {
//       drawHeight = height;
//       drawWidth = height * imgRatio;
//     }

//     const x = (width - drawWidth) / 2;
//     const y = (height - drawHeight) / 2;

//     ctx.imageSmoothingEnabled = true;
//     ctx.imageSmoothingQuality = 'high';

//     ctx.drawImage(img, x, y, drawWidth, drawHeight);
//   }, []);

//   const preloadImages = useCallback(async (setType, total) => {
//     loadingAbortRef.current = false;
//     setIsLoaded(false);
//     setLoadingProgress(0);

//     let loaded = 0;

//     const imgs = await Promise.all(
//       Array.from({ length: total }, (_, i) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = getImagePath(setType, i + 1);

//           img.onload = () => {
//             loaded++;
//             if (!loadingAbortRef.current) {
//               setLoadingProgress(Math.floor((loaded / total) * 100));
//             }
//             resolve(img);
//           };

//           img.onerror = () => resolve(null);
//         });
//       })
//     );

//     if (loadingAbortRef.current) return;

//     imagesRef.current = imgs.filter(Boolean);
//     setIsLoaded(true);

//     requestAnimationFrame(() => renderFrame(0));
//   }, [getImagePath, renderFrame]);

//   useEffect(() => {
//     const update = () => {
//       const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
//       setCurrentSet(isMobile ? 'small' : 'large');
//       setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
//     };

//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   useEffect(() => {
//     loadingAbortRef.current = true;
//     scrollCtx.current?.revert();

//     preloadImages(currentSet, frameCount);

//     return () => {
//       loadingAbortRef.current = true;
//     };
//   }, [currentSet, frameCount, preloadImages]);

//   useLayoutEffect(() => {
//     if (!isLoaded) return;

//     const canvas = canvasRef.current;

//     const resizeObserver = new ResizeObserver(() => {
//       renderFrame(playhead.current.frame);
//       ScrollTrigger.refresh();
//     });

//     resizeObserver.observe(canvas);

//     renderFrame(0);

//     const ctx = gsap.context(() => {
//       gsap.to(playhead.current, {
//         frame: imagesRef.current.length - 1,
//         ease: 'none',
//         snap: 'frame',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: window.innerWidth < MOBILE_BREAKPOINT ? '+=300%' : '+=400%',
//           pin: true,
//           scrub: 1.2,
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           invalidateOnRefresh: true,
//         },
//         onUpdate: () => renderFrame(playhead.current.frame)
//       });
//     });

//     scrollCtx.current = ctx;

//     return () => {
//       resizeObserver.disconnect();
//       ctx.revert();
//     };
//   }, [isLoaded, renderFrame]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-white overflow-hidden"
//       style={{ height: '100dvh' }}
//     >
//       {/* Loader */}
//       <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : ''}`}>
//         <div className="mb-3">LOADING EXPERIENCE</div>
//         <div className="w-56 h-1 bg-gray-800">
//           <div className="h-full bg-white" style={{ width: `${loadingProgress}%` }} />
//         </div>
//       </div>

//       {/* Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full block"
//         style={{
//           pointerEvents: 'none',
//           touchAction: 'auto'
//         }}
//       />

//       <div className="absolute bottom-0 w-full h-24 bg-linear-to-t from-black to-transparent" />
//     </div>
//   );
// }


import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

ScrollTrigger.normalizeScroll(true);

const LARGE_FRAME_COUNT = 220;
const SMALL_FRAME_COUNT = 40;
const MOBILE_BREAKPOINT = 768;

const IMAGE_SETS = {
  large: 'ezgif-3092f86c1e3bc288-jpg',
  small: 'ezgif-760ec97de81ae793-jpg'
};

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentSet, setCurrentSet] = useState('large');
  const [frameCount, setFrameCount] = useState(LARGE_FRAME_COUNT);
  const [navHeight, setNavHeight] = useState(95);

  const imagesRef = useRef([]);
  const playhead = useRef({ frame: 0 });
  const loadingAbortRef = useRef(false);
  const scrollCtx = useRef(null);

  const getImagePath = useCallback((setType, index) => {
    const padded = index.toString().padStart(3, '0');
    return new URL(`./${IMAGE_SETS[setType]}/ezgif-frame-${padded}.jpg`, import.meta.url).href;
  }, []);

  const renderFrame = useCallback((frame) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });

    if (!canvas || !ctx || imagesRef.current.length === 0) return;

    const index = Math.max(0, Math.min(imagesRef.current.length - 1, Math.round(frame)));
    const img = imagesRef.current[index];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    const canvasRatio = width / height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    // COVER on all screen sizes — no black bars
    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  const preloadImages = useCallback(async (setType, total) => {
    loadingAbortRef.current = false;
    setIsLoaded(false);
    setLoadingProgress(0);

    let loaded = 0;

    const imgs = await Promise.all(
      Array.from({ length: total }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = getImagePath(setType, i + 1);

          img.onload = () => {
            loaded++;
            if (!loadingAbortRef.current) {
              setLoadingProgress(Math.floor((loaded / total) * 100));
            }
            resolve(img);
          };

          img.onerror = () => resolve(null);
        });
      })
    );

    if (loadingAbortRef.current) return;

    imagesRef.current = imgs.filter(Boolean);
    setIsLoaded(true);

    requestAnimationFrame(() => renderFrame(0));
  }, [getImagePath, renderFrame]);

  // Measure navbar height dynamically
  useEffect(() => {
    const measureNav = () => {
      const nav = document.querySelector('nav') || document.querySelector('header');
      if (nav) {
        setNavHeight(nav.getBoundingClientRect().height);
      }
    };

    measureNav();
    window.addEventListener('resize', measureNav);
    return () => window.removeEventListener('resize', measureNav);
  }, []);

  // Responsive set switch
  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setCurrentSet(isMobile ? 'small' : 'large');
      setFrameCount(isMobile ? SMALL_FRAME_COUNT : LARGE_FRAME_COUNT);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Load images on set change
  useEffect(() => {
    loadingAbortRef.current = true;
    scrollCtx.current?.revert();

    preloadImages(currentSet, frameCount);

    return () => {
      loadingAbortRef.current = true;
    };
  }, [currentSet, frameCount, preloadImages]);

  useLayoutEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;

    // Handle resize
    const handleResize = () => {
      requestAnimationFrame(() => renderFrame(playhead.current.frame));
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Initial canvas sizing
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      renderFrame(0);
    }

    const ctx = gsap.context(() => {
      gsap.to(playhead.current, {
        frame: imagesRef.current.length - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top top+=${navHeight}`,
          end: window.innerWidth < MOBILE_BREAKPOINT ? '+=200%' : '+=400%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
        onUpdate: () => {
          requestAnimationFrame(() => renderFrame(playhead.current.frame));
        }
      });
    }, containerRef);

    scrollCtx.current = ctx;

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [isLoaded, renderFrame, navHeight]);

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
        style={{
          pointerEvents: 'none',
          touchAction: 'auto',
        }}
      />

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}