// const Carousel = () => {
//   const memories = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400",
//       quote: "Where ideas transform into innovations",
//       year: "2024",
//       color: "from-blue-600/90"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
//       quote: "Building champions since 2005",
//       year: "2023",
//       color: "from-purple-600/90"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
//       quote: "Knowledge knows no bounds",
//       year: "2024",
//       color: "from-emerald-600/90"
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
//       quote: "Celebrating diversity every day",
//       year: "2023",
//       color: "from-amber-600/90"
//     }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto px-4">
//       {/* Polaroid Style Carousel */}
//       <div className="relative h-80 flex items-center justify-center">
//         {memories.map((item, index) => {
//           const rotation = index * 6 - 9; // Creates staggered effect
//           const zIndex = memories.length - index;
//           const isActive = index === 1; // Middle one is active
          
//           return (
//             <div
//               key={item.id}
//               className={`absolute w-64 transition-all duration-500 cursor-pointer hover:scale-105 ${
//                 isActive ? 'z-20 scale-110' : 'opacity-70 hover:opacity-100'
//               }`}
//               style={{
//                 transform: `rotate(${rotation}deg) translateX(${index * 20 - 40}px)`,
//                 zIndex: isActive ? 20 : zIndex
//               }}
//             >
//               {/* Polaroid Frame */}
//               <div className="bg-white p-3 pb-8 rounded-lg shadow-2xl">
//                 <div className="relative h-40 overflow-hidden rounded-md mb-3">
//                   <img 
//                     src={item.image}
//                     alt={`Memory ${item.id}`}
//                     className="w-full h-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                   {/* Year Stamp */}
//                   <div className={`absolute top-2 right-2 bg-gradient-to-r ${item.color} to-transparent text-white text-xs font-bold px-2 py-1 rounded`}>
//                     '{item.year.slice(-2)}
//                   </div>
//                 </div>
                
//                 {/* Quote */}
//                 <p className="text-xs text-slate-600 italic line-clamp-2">
//                   "{item.quote}"
//                 </p>
                
//                 {/* Decorative Tape */}
//                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-200/60 rotate-12 rounded-sm" />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Film Strip Navigation */}
//       <div className="mt-16 relative">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t-2 border-dashed border-slate-200" />
//         </div>
        
//         <div className="relative flex justify-center gap-1">
//           {memories.map((item, index) => (
//             <button
//               key={item.id}
//               className="group relative"
//             >
//               {/* Film Frame */}
//               <div className={`w-16 h-16 border-2 ${
//                 index === 1 ? 'border-primary' : 'border-slate-300'
//               } rounded overflow-hidden transition-all hover:border-primary`}>
//                 <img 
//                   src={item.image}
//                   alt={`Thumb ${index + 1}`}
//                   className="w-full h-full object-cover"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
              
//               {/* Film Perforations */}
//               <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-slate-400 rounded-sm" />
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-slate-400 rounded-sm" />
              
//               {/* Hover Tooltip */}
//               <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                 {item.year}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Vintage Style Controls */}
//       <div className="flex justify-center gap-6 mt-8">
//         <button className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-all group">
//           <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//         </button>
        
//         {/* Film Roll Icon */}
//         <div className="flex items-center gap-1">
//           <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//           <div className="w-2 h-2 rounded-full bg-primary/60" />
//           <div className="w-2 h-2 rounded-full bg-primary/30" />
//         </div>
        
//         <button className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-500 hover:border-primary hover:text-primary transition-all group">
//           <svg className="w-5 h-5 group-hover:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//           </svg>
//         </button>
//       </div>

//       {/* Memory Counter - Vintage Style */}
//       <div className="text-center mt-6 font-mono text-sm text-slate-400">
//         <span className="text-primary font-bold">02</span> / 04 memories
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";
import Img1 from "../assets/gallery/Img1.webp"
import Img2 from "../assets/gallery/Img2.webp"
import Img3 from "../assets/gallery/Img3.webp"
import Img4 from "../assets/gallery/Img4.webp"
import Img5 from "../assets/gallery/Img5.webp"
import Img6 from "../assets/gallery/Img6.webp"
import Img7 from "../assets/gallery/Img7.webp"
import Img8 from "../assets/gallery/Img8.webp"




const Carousel = () => {
//   const memories = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400",
//       quote: "Where ideas transform into innovations",
//       year: "2024",
//       color: "from-blue-600/90"
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
//       quote: "Building champions since 2005",
//       year: "2023",
//       color: "from-purple-600/90"
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
//       quote: "Knowledge knows no bounds",
//       year: "2024",
//       color: "from-emerald-600/90"
//     },
//     {
//       id: 4,
//       image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
//       quote: "Celebrating diversity every day",
//       year: "2023",
//       color: "from-amber-600/90"
//     }
//   ];

 const memories = [
    {
      id: 1,
      image: Img1,
      quote: "Where ideas transform into innovations",
      year: "2024",
      color: "from-blue-600/90"
    },
    {
      id: 2,
      image: Img2,
      quote: "Building champions since 2005",
      year: "2023",
      color: "from-purple-600/90"
    },
    {
      id: 3,
      image: Img3,
      quote: "Knowledge knows no bounds",
      year: "2024",
      color: "from-emerald-600/90"
    },
    {
      id: 4,
      image: Img4,
      quote: "Celebrating diversity every day",
      year: "2023",
      color: "from-amber-600/90"
    }
    ,{
      id: 5,
      image: Img5,
      quote: "Celebrating diversity every day",
      year: "2023",
      color: "from-amber-600/90"  
    }
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + memories.length) % memories.length);
  };

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">

      {/* Polaroid Carousel */}
      <div className="relative h-80 flex items-center justify-center">

        {memories.map((item, index) => {

          const position = (index - current + memories.length) % memories.length;

          let style = "";
          let rotate = 0;

          if (position === 0) {
            style = "scale-110 z-20 opacity-100";
            rotate = 0;
          } else if (position === 1) {
            style = "translate-x-40 rotate-6 opacity-70";
            rotate = 6;
          } else if (position === memories.length - 1) {
            style = "-translate-x-40 -rotate-6 opacity-70";
            rotate = -6;
          } else {
            style = "hidden";
          }

          return (
            <div
              key={item.id}
              className={`absolute w-64 transition-all duration-500 ${style}`}
            >
              <div className="bg-white p-3 pb-8 rounded-lg shadow-2xl">

                <div className="relative h-40 overflow-hidden rounded-md mb-3">

                  <img
                    src={item.image}
                    alt="memory"
                    className="w-full h-full object-cover"
                  />

                  <div className={`absolute top-2 right-2 bg-linear-to-r ${item.color} to-transparent text-white text-xs font-bold px-2 py-1 rounded`}>
                    '{item.year.slice(-2)}
                  </div>

                </div>

                {/* <p className="text-xs text-slate-600 italic">
                  "{item.quote}"
                </p> */}

                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-yellow-200/60 rotate-12 rounded-sm" />

              </div>
            </div>
          );
        })}
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-10">
        {memories.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrent(index)}
            className={`w-16 h-16 border-2 rounded overflow-hidden transition ${
              current === index
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          >
            <img
              src={item.image}
              alt="thumb"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-8">

        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100"
        >
          ▶
        </button>

      </div>

      {/* Counter */}
      <div className="text-center mt-6 font-mono text-sm text-slate-400">
        <span className="text-blue-500 font-bold">
          {(current + 1).toString().padStart(2, "0")}
        </span>{" "}
        / {memories.length.toString().padStart(2, "0")} memories
      </div>

    </div>
  );
};

export default Carousel;