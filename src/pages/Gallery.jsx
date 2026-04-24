// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import Img1 from "../assets/gallery/Img1.webp"
// import Img2 from "../assets/gallery/Img2.webp"
// import Img3 from "../assets/gallery/Img3.webp"
// import Img4 from "../assets/gallery/Img4.webp"
// import Img5 from "../assets/gallery/Img5.webp"
// import Img6 from "../assets/gallery/Img6.webp"
// import Img7 from "../assets/gallery/Img7.webp"
// import Img8 from "../assets/gallery/Img8.webp"
// import Img9 from "../assets/gallery/Img9.webp"
// import Img10 from "../assets/gallery/Img10.webp"
// import Img11 from "../assets/gallery/Img11.webp"
// import Img12 from "../assets/gallery/Img12.webp"
// import Img13 from "../assets/gallery/Img13.webp"
// import Img14 from "../assets/gallery/Img14.webp"
// import Img15 from "../assets/gallery/Img15.webp"
// import Img16 from "../assets/gallery/Img16.webp"
// import Img17 from "../assets/gallery/Img17.webp"
// import Img18 from "../assets/gallery/Img18.webp"

// import NSSImg1 from '../assets/gallery/nss-gallery/nss-img-1.jpeg'
// import NSSImg10 from '../assets/gallery/nss-gallery/nss-img-2.jpeg'
// import NSSImg6 from '../assets/gallery/nss-gallery/nss-img-3.jpeg'
// import NSSImg3 from '../assets/gallery/nss-gallery/nss-img-4.jpeg'
// import NSSImg5 from '../assets/gallery/nss-gallery/nss-img-5.jpeg'
// import NSSImg2 from '../assets/gallery/nss-gallery/nss-img-6.jpeg'
// import NSSImg4 from '../assets/gallery/nss-gallery/nss-img-7.jpeg'
// import NSSImg7 from '../assets/gallery/nss-gallery/nss-img-8.jpeg'
// import NSSImg8 from '../assets/gallery/nss-gallery/nss-img-9.jpeg'
// import NSSImg9 from '../assets/gallery/nss-gallery/nss-img-10.jpeg'
// import NSSImg11 from '../assets/gallery/nss-gallery/nss-img-11.jpeg'
// import NSSImg12 from '../assets/gallery/nss-gallery/nss-img-12.jpeg'
// import NSSImg13 from '../assets/gallery/nss-gallery/nss-img-13.jpeg'
// import NSSImg14 from '../assets/gallery/nss-gallery/nss-img-14.jpeg'
// import NSSImg15 from '../assets/gallery/nss-gallery/nss-img-15.jpeg'
// import NSSImg16 from '../assets/gallery/nss-gallery/nss-img-16.jpeg'
// import NSSImg17 from '../assets/gallery/nss-gallery/nss-img-17.jpeg'
// import NSSImg18 from '../assets/gallery/nss-gallery/nss-img-18.jpeg'
// import NSSImg19 from '../assets/gallery/nss-gallery/nss-img-19.jpeg'
// import NSSImg20 from '../assets/gallery/nss-gallery/nss-img-20.jpeg'
// import NSSImg21 from '../assets/gallery/nss-gallery/nss-img-21.jpeg'
// import NSSImg22 from '../assets/gallery/nss-gallery/nss-img-22.jpeg'
// import NSSImg23 from '../assets/gallery/nss-gallery/nss-img-23.jpeg'
// import NSSImg24 from '../assets/gallery/nss-gallery/nss-img-24.jpeg'
// import NSSImg25 from '../assets/gallery/nss-gallery/nss-img-25.jpeg'

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [selectedImage, setSelectedImage] = useState(null);

//  const images = [
//     {
//       id: 1,
//       url: Img1,
//       title: "Tech Symposium 2024",
//       category: "Events",
//       size: "large",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       url: Img2,
//       title: "Sports Complex",
//       category: "Facilities",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 3,
//       url: Img3,
//       title: "Central Library",
//       category: "Facilities",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 4,
//       url: Img4,
//       title: "Cultural Fest 2024",
//       category: "Events",
//       size: "medium",
//       date: "Feb 2024"
//     },
//     {
//       id: 5,
//       url: Img5,
//       title: "Computer Lab",
//       category: "Academics",
//       size: "medium",
//       date: "2024"
//     },
//     {
//       id: 6,
//       url: Img6,
//       title: "Main Building",
//       category: "Campus",
//       size: "large",
//       date: "2024"
//     },
//     {
//       id: 7,
//       url: Img7,
//       title: "Robotics Workshop",
//       category: "Academics",
//       size: "small",
//       date: "Jan 2024"
//     },
//     {
//       id: 8,
//       url:Img8,
//       title: "Hostel Block",
//       category: "Campus",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 9,
//       url:Img9,
//       title: "Faculty Meeting",
//       category: "Academics",
//       size: "medium",
//       date: "Feb 2024"
//     },
//     {
//       id: 10,
//       url: 10,
//       title: "Annual Day",
//       category: "Events",
//       size: "large",
//       date: "Dec 2023"
//     },
//      {
//       id: 11,
//       url: Img11,
//       title: "Cultural Fest 2024",
//       category: "Events",
//       size: "medium",
//       date: "Feb 2024"
//     },
//     {
//       id: 12,
//       url: Img12,
//       title: "Computer Lab",
//       category: "Facilities",
//       size: "medium",
//       date: "2024"
//     },
//     {
//       id: 13,
//       url: Img13,
//       title: "Main Building",
//       category: "Facilities",
//       size: "large",
//       date: "2024"
//     },
//     {
//       id: 14,
//       url: Img14,
//       title: "Robotics Workshop",
//       category: "Facilities",
//       size: "small",
//       date: "Jan 2024"
//     },
//     {
//       id: 15,
//       url:Img15,
//       title: "Hostel Block",
//       category: "Facilities",
//       size: "small",
//       date: "2024"
//     },
//     {
//       id: 16,
//       url:Img16,
//       title: "Faculty Meeting",
//       category: "Facilities",
//       size: "medium",
//       date: "Feb 2024"
//     },
//     {
//       id: 17,
//       url: Img17,
//       title: "Annual Day",
//       category: "Facilities",
//       size: "large",
//       date: "Dec 2023"
//     },
//     {
//       id: 18,
//       url: Img18,
//       title: "Annual Day",
//       category: "Campus",
//       size: "large",
//       date: "Dec 2023"
//     },
//     {
//   id: 19,
//   url: NSSImg1,
//   title: "NSS Camp Activity",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 20,
//   url: NSSImg2,
//   title: "NSS Awareness Drive",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 21,
//   url: NSSImg3,
//   title: "Community Service",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 22,
//   url: NSSImg4,
//   title: "Health Camp",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 23,
//   url: NSSImg5,
//   title: "Village Outreach",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 24,
//   url: NSSImg6,
//   title: "Cleanliness Drive",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 25,
//   url: NSSImg7,
//   title: "Tree Plantation",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 26,
//   url: NSSImg8,
//   title: "NSS Camp Event",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 27,
//   url: NSSImg9,
//   title: "Public Awareness",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 28,
//   url: NSSImg10,
//   title: "Volunteer Work",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 29,
//   url: NSSImg11,
//   title: "NSS Camp Session",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 30,
//   url: NSSImg12,
//   title: "Rural Development",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 31,
//   url: NSSImg13,
//   title: "Student Volunteers",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 32,
//   url: NSSImg14,
//   title: "NSS Initiative",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 33,
//   url: NSSImg15,
//   title: "Camp Activities",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 34,
//   url: NSSImg16,
//   title: "Social Work",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 35,
//   url: NSSImg17,
//   title: "NSS Event",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 36,
//   url: NSSImg18,
//   title: "Awareness Program",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 37,
//   url: NSSImg19,
//   title: "Community Help",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 38,
//   url: NSSImg20,
//   title: "NSS Volunteers",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 39,
//   url: NSSImg21,
//   title: "Social Awareness",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 40,
//   url: NSSImg22,
//   title: "Village Camp",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// },
// {
//   id: 41,
//   url: NSSImg23,
//   title: "NSS Drive",
//   category: "NSS Campaign",
//   size: "small",
//   date: "2026"
// },
// {
//   id: 42,
//   url: NSSImg24,
//   title: "Camp Moments",
//   category: "NSS Campaign",
//   size: "medium",
//   date: "2026"
// },
// {
//   id: 43,
//   url: NSSImg25,
//   title: "Final Day Activity",
//   category: "NSS Campaign",
//   size: "large",
//   date: "2026"
// }
//   ];


//   const categories = ["All", "Events", "Academics", "Facilities", "Campus", "NSS Campaign"];

//   // Filter images based on active category
//   const filteredImages = activeCategory === 'All' 
//     ? images 
//     : images.filter(img => img.category === activeCategory);

//   // Get category counts
//   const getCategoryCount = (category) => {
//     if (category === 'All') return images.length;
//     return images.filter(img => img.category === category).length;
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-28">
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/2 rounded-full blur-[120px]" />

//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

//         {/* 🔥 ONLY Top Black Fade */}
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent" />
//     </div>
//       {/* Header */}
//       <div className="text-center mb-12">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
//         >
//           Campus <span className="text-primary">Gallery</span>
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-slate-600 max-w-2xl mx-auto"
//         >
//           Capturing moments that make SLCMS a vibrant community of learners and achievers
//         </motion.p>
//       </div>

//       {/* Category Filter with Counts */}
//       <div className="flex flex-wrap justify-center gap-3 mb-10">
//         {categories.map((category, index) => (
//           <motion.button
//             key={category}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.05 }}
//             onClick={() => setActiveCategory(category)}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
//               activeCategory === category 
//                 ? 'bg-primary text-white shadow-lg shadow-primary/25' 
//                 : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
//             }`}
//           >
//             {category}
//             <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
//               activeCategory === category 
//                 ? 'bg-white/20 text-white' 
//                 : 'bg-slate-200 text-slate-600'
//             }`}>
//               {getCategoryCount(category)}
//             </span>
//           </motion.button>
//         ))}
//       </div>

//       {/* Active Category Indicator */}
//       <motion.div 
//         key={activeCategory}
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-6 text-sm text-slate-500"
//       >
//         Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} 
//         {activeCategory !== 'All' && ` in ${activeCategory}`}
//       </motion.div>

//       {/* Masonry Grid with Animation */}
//       <motion.div 
//         layout
//         className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
//       >
//         <AnimatePresence mode="popLayout">
//           {filteredImages.map((image, index) => {
//             const colSpan = image.size === 'large' ? 'md:col-span-2' : image.size === 'medium' ? 'md:col-span-2' : '';
//             const rowSpan = image.size === 'large' ? 'md:row-span-2' : image.size === 'medium' ? 'md:row-span-2' : '';
            
//             return (
//               <motion.div
//                 key={image.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//                 className={`relative group overflow-hidden rounded-2xl ${colSpan} ${rowSpan} cursor-pointer`}
//                 onClick={() => setSelectedImage(image)}
//               >
//                 {/* Image */}
//                 <img
//                   src={image.url}
//                   alt={image.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   referrerPolicy="no-referrer"
//                 />
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 {/* Content */}
//                 {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
//                   <span className="text-xs font-bold uppercase tracking-wider text-primary-light block mb-2">
//                     {image.category} • {image.date}
//                   </span>
//                   <h3 className="text-xl font-display font-bold">{image.title}</h3>
//                 </div> */}
                
//                 {/* Category Tag */}
//                 <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
//                   {image.category}
//                 </span>
                
//                 {/* Zoom Icon */}
//                 <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </motion.div>

//       {/* No Results Message */}
//       {filteredImages.length === 0 && (
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-20"
//         >
//           <div className="text-6xl mb-4">📸</div>
//           <h3 className="text-2xl font-display font-bold text-slate-700 mb-2">No photos found</h3>
//           <p className="text-slate-500">Try selecting a different category</p>
//           <button 
//             onClick={() => setActiveCategory('All')}
//             className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary-dark transition"
//           >
//             View All Photos
//           </button>
//         </motion.div>
//       )}

//       {/* Featured Albums - Also filter based on category */}
//       {activeCategory === 'All' && (
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mt-16 grid md:grid-cols-2 gap-8"
//         >
//           <div className="relative h-80 rounded-3xl overflow-hidden group">
//             <img
//               src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
//               alt="Annual Day"
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               referrerPolicy="no-referrer"
//             />
//             <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-transparent flex items-center p-10">
//               <div>
//                 <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Featured Album</span>
//                 <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4">Annual Day 2024</h3>
//                 <p className="text-white/80 mb-6">Relive the magic of our biggest celebration</p>
//                 <button 
//                   onClick={() => setActiveCategory('Events')}
//                   className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:shadow-xl transition-shadow"
//                 >
//                   View Events →
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="relative h-80 rounded-3xl overflow-hidden group">
//             <img
//               src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
//               alt="Sports Meet"
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               referrerPolicy="no-referrer"
//             />
//             <div className="absolute inset-0 bg-linear-to-l from-accent/90 to-transparent flex items-center justify-end p-10">
//               <div className="text-right">
//                 <span className="text-white/80 text-sm font-bold uppercase tracking-wider">Highlights</span>
//                 <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4">Sports Meet 2024</h3>
//                 <p className="text-white/80 mb-6">Where champions are made</p>
//                 <button 
//                   onClick={() => setActiveCategory('Facilities')}
//                   className="px-6 py-3 bg-white text-accent rounded-full font-medium hover:shadow-xl transition-shadow"
//                 >
//                   Explore Facilities →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}

//       {/* Load More Button (conditional) */}
//       {filteredImages.length > 0 && filteredImages.length < images.length && (
//         <div className="text-center mt-12">
//           <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-primary transition-colors inline-flex items-center gap-2 group">
//             Load More
//             <svg className="w-5 h-5 group-hover:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>
//       )}

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               className="relative max-w-5xl w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.title}
//                 className="w-full h-auto rounded-2xl"
//               />
              
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent rounded-b-2xl">
//                 <h3 className="text-2xl font-display font-bold text-white">{selectedImage.title}</h3>
//                 <p className="text-white/80">{selectedImage.category} • {selectedImage.date}</p>
//               </div>

//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
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

import NSSImg1 from '../assets/gallery/nss-gallery/nss-img-1.jpeg'
import NSSImg2 from '../assets/gallery/nss-gallery/nss-img-2.jpeg'
import NSSImg3 from '../assets/gallery/nss-gallery/nss-img-3.jpeg'
import NSSImg4 from '../assets/gallery/nss-gallery/nss-img-4.jpeg'
import NSSImg5 from '../assets/gallery/nss-gallery/nss-img-5.jpeg'
import NSSImg6 from '../assets/gallery/nss-gallery/nss-img-6.jpeg'
import NSSImg7 from '../assets/gallery/nss-gallery/nss-img-7.jpeg'
import NSSImg8 from '../assets/gallery/nss-gallery/nss-img-8.jpeg'
import NSSImg9 from '../assets/gallery/nss-gallery/nss-img-9.jpeg'
import NSSImg10 from '../assets/gallery/nss-gallery/nss-img-10.jpeg'
import NSSImg11 from '../assets/gallery/nss-gallery/nss-img-11.jpeg'
import NSSImg12 from '../assets/gallery/nss-gallery/nss-img-12.jpeg'
import NSSImg13 from '../assets/gallery/nss-gallery/nss-img-13.jpeg'
import NSSImg14 from '../assets/gallery/nss-gallery/nss-img-14.jpeg'
import NSSImg15 from '../assets/gallery/nss-gallery/nss-img-15.jpeg'
import NSSImg16 from '../assets/gallery/nss-gallery/nss-img-16.jpeg'
import NSSImg17 from '../assets/gallery/nss-gallery/nss-img-17.jpeg'
import NSSImg18 from '../assets/gallery/nss-gallery/nss-img-18.jpeg'
import NSSImg19 from '../assets/gallery/nss-gallery/nss-img-19.jpeg'
import NSSImg20 from '../assets/gallery/nss-gallery/nss-img-20.jpeg'
import NSSImg21 from '../assets/gallery/nss-gallery/nss-img-21.jpeg'
import NSSImg22 from '../assets/gallery/nss-gallery/nss-img-22.jpeg'
import NSSImg23 from '../assets/gallery/nss-gallery/nss-img-23.jpeg'
import NSSImg24 from '../assets/gallery/nss-gallery/nss-img-24.jpeg'
import NSSImg25 from '../assets/gallery/nss-gallery/nss-img-25.jpeg'

import eventImg1 from '../assets/gallery/events/event-img-1.jpeg'
import eventImg2 from '../assets/gallery/events/event-img-2.jpeg'
import eventImg3 from '../assets/gallery/events/event-img-3.jpeg'
import eventImg4 from '../assets/gallery/events/event-img-4.jpeg'
import eventImg5 from '../assets/gallery/events/event-img-5.jpeg'
import eventImg6 from '../assets/gallery/events/event-img-6.jpeg'
import eventImg7 from '../assets/gallery/events/event-img-7.jpeg'
import eventImg8 from '../assets/gallery/events/event-img-8.jpeg'
import eventImg9 from '../assets/gallery/events/event-img-9.jpeg'
import eventImg10 from '../assets/gallery/events/event-img-10.jpeg'
import eventImg11 from '../assets/gallery/events/event-img-11.jpeg'
//import eventImg12 from '../assets/gallery/events/event-img-12.jpeg'
import eventImg13 from '../assets/gallery/events/event-img-13.jpeg'
import eventImg14 from '../assets/gallery/events/event-img-14.jpeg'
import eventImg15 from '../assets/gallery/events/event-img-15.jpeg'
import eventImg16 from '../assets/gallery/events/event-img-16.jpeg'
import eventImg17 from '../assets/gallery/events/event-img-17.jpeg'
import eventImg18 from '../assets/gallery/events/event-img-18.jpeg'
import eventImg19 from '../assets/gallery/events/event-img-19.jpeg'
import eventImg20 from '../assets/gallery/events/event-img-20.jpeg'
import eventImg21 from '../assets/gallery/events/event-img-21.jpeg'
import eventImg22 from '../assets/gallery/events/event-img-22.jpeg'
import eventImg23 from '../assets/gallery/events/event-img-23.jpeg'
import eventImg24 from '../assets/gallery/events/event-img-24.jpeg'
import eventImg25 from '../assets/gallery/events/event-img-25.jpeg'
import eventImg26 from '../assets/gallery/events/event-img-26.jpeg'
import eventImg27 from '../assets/gallery/events/event-img-27.jpeg'
import eventImg28 from '../assets/gallery/events/event-img-28.jpeg'
import eventImg29 from '../assets/gallery/events/event-img-29.jpeg'
import eventImg30 from '../assets/gallery/events/event-img-30.jpeg'
import eventImg31 from '../assets/gallery/events/event-img-31.jpeg'
import eventImg32 from '../assets/gallery/events/event-img-32.jpeg'
import eventImg33 from '../assets/gallery/events/event-img-33.jpeg'
import eventImg34 from '../assets/gallery/events/event-img-34.jpeg'
import eventImg35 from '../assets/gallery/events/event-img-35.jpeg'
import eventImg36 from '../assets/gallery/events/event-img-36.jpeg'
import eventImg37 from '../assets/gallery/events/event-img-37.jpeg'
import eventImg38 from '../assets/gallery/events/event-img-38.jpeg'
import eventImg39 from '../assets/gallery/events/event-img-39.jpeg'
import eventImg40 from '../assets/gallery/events/event-img-40.jpeg'
import eventImg41 from '../assets/gallery/events/event-img-41.jpeg'
import eventImg42 from '../assets/gallery/events/event-img-42.jpeg'
import eventImg43 from '../assets/gallery/events/event-img-43.jpeg'
import eventImg44 from '../assets/gallery/events/event-img-44.jpeg'

import facilitiesImg1 from '../assets/gallery/facilities/facilities-img-1.jpeg'
import facilitiesImg2 from '../assets/gallery/facilities/facilities-img-2.jpeg'
import facilitiesImg3 from '../assets/gallery/facilities/facilities-img-3.jpeg'
import facilitiesImg4 from '../assets/gallery/facilities/facilities-img-4.jpeg'
import facilitiesImg5 from '../assets/gallery/facilities/facilities-img-5.jpeg'
import facilitiesImg6 from '../assets/gallery/facilities/facilities-img-6.jpeg'
import facilitiesImg7 from '../assets/gallery/facilities/facilities-img-7.jpeg'
import facilitiesImg8 from '../assets/gallery/facilities/facilities-img-8.jpeg'
import facilitiesImg9 from '../assets/gallery/facilities/facilities-img-9.jpeg'
import facilitiesImg10 from '../assets/gallery/facilities/facilities-img-10.jpeg'
import facilitiesImg11 from '../assets/gallery/facilities/facilities-img-11.jpeg'


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: Img1, title: "Tech Symposium 2024", category: "Events", size: "large", date: "March 2024" },
    { id: 2, url: Img2, title: "Sports Complex", category: "Facilities", size: "small", date: "2024" },
    //{ id: 3, url: Img3, title: "Central Library", category: "Facilities", size: "small", date: "2024" },
    //{ id: 4, url: Img4, title: "Cultural Fest 2024", category: "Events", size: "medium", date: "Feb 2024" },
    { id: 5, url: facilitiesImg1, title: "Computer Lab", category: "Academics", size: "medium", date: "2024" },
    { id: 6, url: Img6, title: "Main Building", category: "Campus", size: "large", date: "2024" },
    { id: 7, url: facilitiesImg3, title: "Robotics Workshop", category: "Academics", size: "small", date: "Jan 2024" },
    { id: 8, url: Img8, title: "Hostel Block", category: "Campus", size: "small", date: "2024" },
    { id: 9, url: Img9, title: "Faculty Meeting", category: "Academics", size: "medium", date: "Feb 2024" },
    { id: 10, url: Img10, title: "Annual Day", category: "Events", size: "large", date: "Dec 2023" },
    { id: 11, url: Img11, title: "Cultural Fest 2024", category: "Events", size: "medium", date: "Feb 2024" },
    { id: 12, url: Img12, title: "Computer Lab", category: "Facilities", size: "medium", date: "2024" },
    { id: 13, url: Img13, title: "Main Building", category: "Facilities", size: "large", date: "2024" },
    { id: 14, url: Img14, title: "Robotics Workshop", category: "Facilities", size: "small", date: "Jan 2024" },
    { id: 15, url: Img15, title: "Hostel Block", category: "Facilities", size: "small", date: "2024" },
    { id: 16, url: Img16, title: "Faculty Meeting", category: "Facilities", size: "medium", date: "Feb 2024" },
    { id: 17, url: Img17, title: "Annual Day", category: "Facilities", size: "large", date: "Dec 2023" },
    { id: 18, url: Img18, title: "Annual Day", category: "Campus", size: "large", date: "Dec 2023" },
    { id: 19, url: NSSImg1, title: "NSS Camp Activity", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 20, url: NSSImg2, title: "NSS Awareness Drive", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 21, url: NSSImg3, title: "Community Service", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 22, url: NSSImg4, title: "Health Camp", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 23, url: NSSImg5, title: "Village Outreach", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 24, url: NSSImg6, title: "Cleanliness Drive", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 25, url: NSSImg7, title: "Tree Plantation", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 26, url: NSSImg8, title: "NSS Camp Event", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 27, url: NSSImg9, title: "Public Awareness", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 28, url: NSSImg10, title: "Volunteer Work", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 29, url: NSSImg11, title: "NSS Camp Session", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 30, url: NSSImg12, title: "Rural Development", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 31, url: NSSImg13, title: "Student Volunteers", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 32, url: NSSImg14, title: "NSS Initiative", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 33, url: NSSImg15, title: "Camp Activities", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 34, url: NSSImg16, title: "Social Work", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 35, url: NSSImg17, title: "NSS Event", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 36, url: NSSImg18, title: "Awareness Program", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 37, url: NSSImg19, title: "Community Help", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 38, url: NSSImg20, title: "NSS Volunteers", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 39, url: NSSImg21, title: "Social Awareness", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 40, url: NSSImg22, title: "Village Camp", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 41, url: NSSImg23, title: "NSS Drive", category: "NSS Campaign", size: "small", date: "2026" },
    { id: 42, url: NSSImg24, title: "Camp Moments", category: "NSS Campaign", size: "medium", date: "2026" },
    { id: 43, url: NSSImg25, title: "Final Day Activity", category: "NSS Campaign", size: "large", date: "2026" },
    { id: 44, url: eventImg1, title: "Event 1", category: "Events", size: "small", date: "2024" },
    { id: 45, url: eventImg2, title: "Event 2", category: "Events", size: "medium", date: "2024" },
    { id: 46, url: eventImg3, title: "Event 3", category: "Events", size: "large", date: "2024" },
    { id: 47, url: eventImg4, title: "Event 4", category: "Events", size: "small", date: "2024" },
    { id: 48, url: eventImg5, title: "Event 5", category: "Events", size: "medium", date: "2024" },
    { id: 49, url: eventImg6, title: "Event 6", category: "Events", size: "large", date: "2024" },
    { id: 50, url: eventImg7, title: "Event 7", category: "Events", size: "small", date: "2024" },
    { id: 51, url: eventImg8, title: "Event 8", category: "Events", size: "medium", date: "2024" },
    { id: 52, url: eventImg9, title: "Event 9", category: "Events", size: "large", date: "2024" },
    { id: 53, url: eventImg10, title: "Event 10", category: "Events", size: "small", date: "2024" },
    { id: 54, url: eventImg11, title: "Event 11", category: "Events", size: "medium", date: "2024" },
    //{ id: 55, url: eventImg12, title: "Event 12", category: "Events", size: "large", date: "2024" },
    { id: 56, url: eventImg13, title: "Event 13", category: "Events", size: "small", date: "2024" },
    { id: 57, url: eventImg14, title: "Event 14", category: "Events", size: "medium", date: "2024" },
    { id: 58, url: eventImg15, title: "Event 15", category: "Events", size: "large", date: "2024" },
    { id: 59, url: eventImg16, title: "Event 16", category: "Events", size: "small", date: "2024" },
    { id: 60, url: eventImg17, title: "Event 17", category: "Events", size: "medium", date: "2024" },
    { id: 61, url: eventImg18, title: "Event 18", category: "Events", size: "large", date: "2024" },
    { id: 62, url: eventImg19, title: "Event 19", category: "Events", size: "small", date: "2024" },
    { id: 63, url: eventImg20, title: "Event 20", category: "Events", size: "medium", date: "2024" },
    { id: 64, url: eventImg21, title: "Event 21", category: "Events", size: "large", date: "2024" },
    { id: 65, url: eventImg22, title: "Event 22", category: "Events", size: "small", date: "2024" },
    { id: 66, url: eventImg23, title: "Event 23", category: "Events", size: "medium", date: "2024" },
    { id: 67, url: eventImg24, title: "Event 24", category: "Events", size: "large", date: "2024" },
    { id: 68, url: eventImg25, title: "Event 25", category: "Events", size: "small", date: "2024" },
    { id: 69, url: eventImg26, title: "Event 26", category: "Events", size: "medium", date: "2024" },
    { id: 70, url: eventImg27, title: "Event 27", category: "Events", size: "large", date: "2024" },
    { id: 71, url: eventImg28, title: "Event 28", category: "Events", size: "small", date: "2024" },
    { id: 72, url: eventImg29, title: "Event 29", category: "Events", size: "medium", date: "2024" },
    { id: 73, url: eventImg30, title: "Event 30", category: "Events", size: "large", date: "2024" },
    { id: 74, url: eventImg31, title: "Event 31", category: "Events", size: "small", date: "2024" },
    { id: 75, url: eventImg32, title: "Event 32", category: "Events", size: "medium", date: "2024" },
    { id: 76, url: eventImg33, title: "Event 33", category: "Events", size: "large", date: "2024" },
    { id: 77, url: eventImg34, title: "Event 34", category: "Events", size: "small", date: "2024" },
    { id: 78, url: eventImg35, title: "Event 35", category: "Events", size: "medium", date: "2024" },
    { id: 79, url: eventImg36, title: "Event 36", category: "Events", size: "large", date: "2024" },
    { id: 80, url: eventImg37, title: "Event 37", category: "Events", size: "small", date: "2024" },
    { id: 81, url: eventImg38, title: "Event 38", category: "Events", size: "medium", date: "2024" },
    { id: 82, url: eventImg39, title: "Event 39", category: "Events", size: "large", date: "2024" },
    { id: 83, url: eventImg40, title: "Event 40", category: "Events", size: "small", date: "2024" },
    { id: 84, url: eventImg41, title: "Event 41", category: "Events", size: "medium", date: "2024" },
    { id: 85, url: eventImg42, title: "Event 42", category: "Events", size: "large", date: "2024" },
    { id: 86, url: eventImg43, title: "Event 43", category: "Events", size: "small", date: "2024" },
    { id: 87, url: eventImg44, title: "Event 44", category: "Events", size: "medium", date: "2024" },
    { id: 88, url: facilitiesImg1, title: "Facilities 1", category: "Facilities", size: "small", date: "2024" },
    { id: 89, url: facilitiesImg2, title: "Facilities 2", category: "Facilities", size: "medium", date: "2024" },
    { id: 90, url: facilitiesImg3, title: "Facilities 3", category: "Facilities", size: "large", date: "2024" },
    { id: 91, url: facilitiesImg4, title: "Facilities 4", category: "Facilities", size: "small", date: "2024" },
    { id: 92, url: facilitiesImg5, title: "Facilities 5", category: "Facilities", size: "medium", date: "2024" },
    { id: 93, url: facilitiesImg6, title: "Facilities 6", category: "Facilities", size: "large", date: "2024" },
    { id: 94, url: facilitiesImg7, title: "Facilities 7", category: "Facilities", size: "small", date: "2024" },
    { id: 95, url: facilitiesImg8, title: "Facilities 8", category: "Facilities", size: "medium", date: "2024" },
    { id: 96, url: facilitiesImg9, title: "Facilities 9", category: "Facilities", size: "large", date: "2024" },
    { id: 97, url: facilitiesImg10, title: "Facilities 10", category: "Facilities", size: "small", date: "2024" },
    { id: 98, url: facilitiesImg11, title: "Facilities 11", category: "Facilities", size: "medium", date: "2024" }
  ];

  const categories = ["All", "Events", "Academics", "Facilities", "Campus", "NSS Campaign"];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const getCategoryCount = (category) => {
    if (category === 'All') return images.length;
    return images.filter(img => img.category === category).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-18 relative">
      

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
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

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
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

      {/* Active Category Counter */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 text-sm text-slate-500 relative z-10"
      >
        Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'} 
        {activeCategory !== 'All' && ` in ${activeCategory}`}
      </motion.div>

      {/* MASONRY GALLERY - CSS COLUMNS (NO WHITE SPACES) */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className="break-inside-avoid mb-6 cursor-pointer group relative rounded-2xl overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                {image.category}
              </span>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredImages.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 relative z-10"
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

      {/* Featured Albums (only for 'All' category) */}
      {activeCategory === 'All' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-8 relative z-10"
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