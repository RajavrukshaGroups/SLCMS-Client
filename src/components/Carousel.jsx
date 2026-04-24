import React, { useState, useEffect } from "react";
import Img1 from "../assets/gallery/Img1.webp"
import Img2 from "../assets/gallery/Img2.webp"
import Img3 from "../assets/gallery/Img3.webp"
import Img4 from "../assets/gallery/Img4.webp"
import Img5 from "../assets/gallery/Img5.webp"
import Img6 from "../assets/gallery/Img6.webp"
import Img7 from "../assets/gallery/Img7.webp"
import Img8 from "../assets/gallery/Img8.webp"

import carouselImg1 from '../assets/home-gallery-carousel/carousel-img-1.jpeg'
import carouselImg2 from '../assets/home-gallery-carousel/carousel-img-2.jpeg'

const Carousel = () => {

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
      image: carouselImg1,
      quote: "Celebrating diversity every day",
      year: "2023",
      color: "from-amber-600/90"
    }
    ,{
      id: 5,
      image: carouselImg2,
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