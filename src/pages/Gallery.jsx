// const Gallery = () => {
//   const images = [
//     {
//       id: 1,
//       url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
//       title: "Tech Symposium 2024",
//       category: "Events",
//       size: "large"
//     },
//     {
//       id: 2,
//       url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
//       title: "Sports Complex",
//       category: "Facilities",
//       size: "small"
//     },
//     {
//       id: 3,
//       url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
//       title: "Library Hours",
//       category: "Academics",
//       size: "small"
//     },
//     {
//       id: 4,
//       url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
//       title: "Cultural Fest",
//       category: "Events",
//       size: "medium"
//     },
//     {
//       id: 5,
//       url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
//       title: "Lab Session",
//       category: "Academics",
//       size: "medium"
//     },
//     {
//       id: 6,
//       url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
//       title: "Campus View",
//       category: "Campus",
//       size: "large"
//     },
//     {
//       id: 7,
//       url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
//       title: "Workshop",
//       category: "Events",
//       size: "small"
//     },
//     {
//       id: 8,
//       url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
//       title: "Hostel Life",
//       category: "Campus",
//       size: "small"
//     }
//   ];

//   const categories = ["All", "Events", "Academics", "Facilities", "Campus"];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-28">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
//           Campus <span className="text-primary">Gallery</span>
//         </h2>
//         <p className="text-slate-600 max-w-2xl mx-auto">
//           Capturing moments that make SLCMS a vibrant community of learners and achievers
//         </p>
//       </div>

//       {/* Category Filter */}
//       <div className="flex flex-wrap justify-center gap-3 mb-10">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
//               index === 0 
//                 ? 'bg-primary text-white shadow-lg shadow-primary/25' 
//                 : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Masonry Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
//         {images.map((image, index) => {
//           // Dynamic sizing based on image.size property
//           const colSpan = image.size === 'large' ? 'md:col-span-2' : image.size === 'medium' ? 'md:col-span-2 md:row-span-2' : '';
//           const rowSpan = image.size === 'large' ? 'md:row-span-2' : image.size === 'medium' ? 'md:row-span-2' : '';
          
//           return (
//             <div
//               key={image.id}
//               className={`relative group overflow-hidden rounded-2xl ${colSpan} ${rowSpan} cursor-pointer`}
//             >
//               {/* Image */}
//               <img
//                 src={image.url}
//                 alt={image.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 referrerPolicy="no-referrer"
//               />
              
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                 <span className="text-xs font-bold uppercase tracking-wider text-primary-light block mb-2">
//                   {image.category}
//                 </span>
//                 <h3 className="text-xl font-display font-bold">{image.title}</h3>
//               </div>
              
//               {/* Category Tag (visible always on mobile/desktop) */}
//               <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
//                 {image.category}
//               </span>
              
//               {/* Zoom Icon */}
//               <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Featured Album */}
//       <div className="mt-16 grid md:grid-cols-2 gap-8">
//         <div className="relative h-80 rounded-3xl overflow-hidden group">
//           <img
//             src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
//             alt="Annual Day"
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//             referrerPolicy="no-referrer"
//           />
//           <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-transparent flex items-center p-10">
//             <div>
//               <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Featured Album</span>
//               <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4">Annual Day 2024</h3>
//               <p className="text-white/80 mb-6">Relive the magic of our biggest celebration</p>
//               <button className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:shadow-xl transition-shadow">
//                 View Album →
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="relative h-80 rounded-3xl overflow-hidden group">
//           <img
//             src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
//             alt="Sports Meet"
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//             referrerPolicy="no-referrer"
//           />
//           <div className="absolute inset-0 bg-linear-to-l from-accent/90 to-transparent flex items-center justify-end p-10">
//             <div className="text-right">
//               <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Highlights</span>
//               <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4">Sports Meet 2024</h3>
//               <p className="text-white/80 mb-6">Where champions are made</p>
//               <button className="px-6 py-3 bg-white text-accent rounded-full font-medium hover:shadow-xl transition-shadow">
//                 Explore →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Load More Button */}
//       <div className="text-center mt-12">
//         <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-primary transition-colors inline-flex items-center gap-2 group">
//           Load More
//           <svg className="w-5 h-5 group-hover:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Img1 from "../assets/gallery/Img1.webp"
import Img2 from "../assets/gallery/Img2.webp"
import Img3 from "../assets/gallery/Img3.webp"
import Img4 from "../assets/gallery/Img4.webp"
import Img5 from "../assets/gallery/Img5.webp"
import Img6 from "../assets/gallery/Img6.webp"
import Img7 from "../assets/gallery/Img7.webp"
import Img8 from "../assets/gallery/Img8.webp"
import Img9 from "../assets/gallery/Img9.webp"
import Img10 from "../assets/gallery/Img10.webp"
import Img11 from "../assets/gallery/Img11.webp"
import Img12 from "../assets/gallery/Img12.webp"
import Img13 from "../assets/gallery/Img13.webp"
import Img14 from "../assets/gallery/Img14.webp"
import Img15 from "../assets/gallery/Img15.webp"
import Img16 from "../assets/gallery/Img16.webp"
import Img17 from "../assets/gallery/Img17.webp"
import Img18 from "../assets/gallery/Img18.webp"


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     {
//       id: 1,
//       url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
//       title: "Tech Symposium 2024",
//       category: "Events",
//       size: "large",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
//       title: "Sports Complex",
//       category: "Facilities",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 3,
//       url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
//       title: "Central Library",
//       category: "Facilities",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 4,
//       url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
//       title: "Cultural Fest 2024",
//       category: "Events",
//       size: "medium",
//       date: "Feb 2024"
//     },
//     {
//       id: 5,
//       url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
//       title: "Computer Lab",
//       category: "Academics",
//       size: "medium",
//       date: "2024"
//     },
//     {
//       id: 6,
//       url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
//       title: "Main Building",
//       category: "Campus",
//       size: "large",
//       date: "2024"
//     },
//     {
//       id: 7,
//       url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
//       title: "Robotics Workshop",
//       category: "Academics",
//       size: "small",
//       date: "Jan 2024"
//     },
//     {
//       id: 8,
//       url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
//       title: "Hostel Block",
//       category: "Campus",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 9,
//       url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
//       title: "Faculty Meeting",
//       category: "Academics",
//       size: "medium",
//       date: "Feb 2024"
//     },
//     {
//       id: 10,
//       url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
//       title: "Annual Day",
//       category: "Events",
//       size: "large",
//       date: "Dec 2023"
//     }
//   ];
 const images = [
    {
      id: 1,
      url: Img1,
      title: "Tech Symposium 2024",
      category: "Events",
      size: "large",
      date: "March 2024"
    },
    {
      id: 2,
      url: Img2,
      title: "Sports Complex",
      category: "Facilities",
      size: "small",
      date: "2024"
    },
    {
      id: 3,
      url: Img3,
      title: "Central Library",
      category: "Facilities",
      size: "small",
      date: "2024"
    },
    {
      id: 4,
      url: Img4,
      title: "Cultural Fest 2024",
      category: "Events",
      size: "medium",
      date: "Feb 2024"
    },
    {
      id: 5,
      url: Img5,
      title: "Computer Lab",
      category: "Academics",
      size: "medium",
      date: "2024"
    },
    {
      id: 6,
      url: Img6,
      title: "Main Building",
      category: "Campus",
      size: "large",
      date: "2024"
    },
    {
      id: 7,
      url: Img7,
      title: "Robotics Workshop",
      category: "Academics",
      size: "small",
      date: "Jan 2024"
    },
    {
      id: 8,
      url:Img8,
      title: "Hostel Block",
      category: "Campus",
      size: "small",
      date: "2024"
    },
    {
      id: 9,
      url:Img9,
      title: "Faculty Meeting",
      category: "Academics",
      size: "medium",
      date: "Feb 2024"
    },
    {
      id: 10,
      url: 10,
      title: "Annual Day",
      category: "Events",
      size: "large",
      date: "Dec 2023"
    },
     {
      id: 11,
      url: Img11,
      title: "Cultural Fest 2024",
      category: "Events",
      size: "medium",
      date: "Feb 2024"
    },
    {
      id: 12,
      url: Img12,
      title: "Computer Lab",
      category: "Facilities",
      size: "medium",
      date: "2024"
    },
    {
      id: 13,
      url: Img13,
      title: "Main Building",
      category: "Facilities",
      size: "large",
      date: "2024"
    },
    {
      id: 14,
      url: Img14,
      title: "Robotics Workshop",
      category: "Facilities",
      size: "small",
      date: "Jan 2024"
    },
    {
      id: 15,
      url:Img15,
      title: "Hostel Block",
      category: "Facilities",
      size: "small",
      date: "2024"
    },
    {
      id: 16,
      url:Img16,
      title: "Faculty Meeting",
      category: "Facilities",
      size: "medium",
      date: "Feb 2024"
    },
    {
      id: 17,
      url: Img17,
      title: "Annual Day",
      category: "Facilities",
      size: "large",
      date: "Dec 2023"
    },
    {
      id: 18,
      url: Img18,
      title: "Annual Day",
      category: "Campus",
      size: "large",
      date: "Dec 2023"
    }
  ];


  const categories = ["All", "Events", "Academics", "Facilities", "Campus"];

  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  // Get category counts
  const getCategoryCount = (category) => {
    if (category === 'All') return images.length;
    return images.filter(img => img.category === category).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/2 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        {/* 🔥 ONLY Top Black Fade */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent" />
    </div>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
        >
          Campus <span className="text-primary">Gallery</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 max-w-2xl mx-auto"
        >
          Capturing moments that make SLCMS a vibrant community of learners and achievers
        </motion.p>
      </div>

      {/* Category Filter with Counts */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
              activeCategory === category 
                ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {category}
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
              activeCategory === category 
                ? 'bg-white/20 text-white' 
                : 'bg-slate-200 text-slate-600'
            }`}>
              {getCategoryCount(category)}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Active Category Indicator */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 text-sm text-slate-500"
      >
        Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} 
        {activeCategory !== 'All' && ` in ${activeCategory}`}
      </motion.div>

      {/* Masonry Grid with Animation */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => {
            const colSpan = image.size === 'large' ? 'md:col-span-2' : image.size === 'medium' ? 'md:col-span-2' : '';
            const rowSpan = image.size === 'large' ? 'md:row-span-2' : image.size === 'medium' ? 'md:row-span-2' : '';
            
            return (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative group overflow-hidden rounded-2xl ${colSpan} ${rowSpan} cursor-pointer`}
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-light block mb-2">
                    {image.category} • {image.date}
                  </span>
                  <h3 className="text-xl font-display font-bold">{image.title}</h3>
                </div> */}
                
                {/* Category Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  {image.category}
                </span>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* No Results Message */}
      {filteredImages.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">📸</div>
          <h3 className="text-2xl font-display font-bold text-slate-700 mb-2">No photos found</h3>
          <p className="text-slate-500">Try selecting a different category</p>
          <button 
            onClick={() => setActiveCategory('All')}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary-dark transition"
          >
            View All Photos
          </button>
        </motion.div>
      )}

      {/* Featured Albums - Also filter based on category */}
      {activeCategory === 'All' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
              alt="Annual Day"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-transparent flex items-center p-10">
              <div>
                <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Featured Album</span>
                <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4">Annual Day 2024</h3>
                <p className="text-white/80 mb-6">Relive the magic of our biggest celebration</p>
                <button 
                  onClick={() => setActiveCategory('Events')}
                  className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:shadow-xl transition-shadow"
                >
                  View Events →
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
              alt="Sports Meet"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-l from-accent/90 to-transparent flex items-center justify-end p-10">
              <div className="text-right">
                <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Highlights</span>
                <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4">Sports Meet 2024</h3>
                <p className="text-white/80 mb-6">Where champions are made</p>
                <button 
                  onClick={() => setActiveCategory('Facilities')}
                  className="px-6 py-3 bg-white text-accent rounded-full font-medium hover:shadow-xl transition-shadow"
                >
                  Explore Facilities →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Load More Button (conditional) */}
      {filteredImages.length > 0 && filteredImages.length < images.length && (
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-primary transition-colors inline-flex items-center gap-2 group">
            Load More
            <svg className="w-5 h-5 group-hover:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-2xl font-display font-bold text-white">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.category} • {selectedImage.date}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;