import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Filter, BookOpen, ExternalLink, Download,
  ChevronRight, Library, Globe, Camera, Bookmark
} from 'lucide-react';
import libraryHero from '../assets/library-hero.jpg'; 
import BA from '../assets/BA.png';
import BBA from '../assets/BBA.jpg';
import BCA from '../assets/BCA.jpg';
import BCom from '../assets/BCom.jpg';
import BSc from '../assets/BSC.jpg';
import MCom from '../assets/MCom.jpg';
import KannadaStories from '../assets/kannada-stories.png';

const ELibraryPage = () => {
  // ========== BOOK DATA (extracted from original page) ==========
  const booksData = [
    { id: 1, title: 'B.com 1st Sem', category: 'B.com', downloadUrl: 'https://drive.google.com/drive/folders/1--rBukmBs6fjO1m801KeHdBkeYGb-1pn?usp=sharing', image: BCom },
    { id: 2, title: 'B.com 2nd Sem', category: 'B.com', downloadUrl: 'https://drive.google.com/folderview?id=1-15UsgUOb3BHYI_r_tTwwJk4AxWr-N5a', image: BCom },
    { id: 3, title: 'B.com 3rd Sem', category: 'B.com', downloadUrl: 'https://drive.google.com/drive/folders/1-55TQEgoAN6yMCxnwi7ur9yUehFpZg1P?usp=sharing', image: BCom },
    { id: 4, title: 'B.com 4th Sem', category: 'B.com', downloadUrl: 'https://drive.google.com/drive/folders/1-B-NbWzxNKeWUI7QWlKwYAxUKAbSUMHM?usp=sharing', image: BCom },
    { 
    id: 5, 
    title: 'B.com 5th Sem', 
    category: 'B.com', 
    downloadUrl: 'https://drive.google.com/drive/u/0/folders/1-GxmYu4rVe4u7dn_tf5GHM6adlvYDJnm', 
    image: BCom 
  },
    { id: 6, title: 'B.com 6th Sem', category: 'B.com', downloadUrl: 'https://drive.google.com/drive/folders/1-Nvv4yF6YovG2enkYAsztLmyyj_oqk_k?usp=sharing', image: BCom },
    { id: 7, title: 'B.Sc 1st Sem', category: 'B.sc', downloadUrl: 'https://drive.google.com/drive/folders/10Io6mxzvhOGQN_yPa8Mh2EgG2ye6NwHO?usp=sharing', image: BSc },
    { id: 8, title: 'B.Sc 2nd Sem', category: 'B.sc', downloadUrl: 'https://drive.google.com/drive/folders/10LX-nfKHHB2dttW5mvISQU72Cr4FpwSg?usp=sharing', image: BSc },
    { id: 9, title: 'B.Sc 3rd Sem', category: 'B.sc', downloadUrl: 'https://drive.google.com/drive/folders/10O5ApB-VKJ6krZQE2GXayVrUN_75gi6h?usp=sharing', image: BSc },
    { id: 10, title: 'BA - 1st Sem', category: 'BA', downloadUrl: 'https://drive.google.com/drive/folders/109jXgXCAc3EyAt_zlSkafIBXYJ5s7THv', image: BA },
    { id: 11, title: 'M.com 1st Sem', category: 'M-com', downloadUrl: 'https://drive.google.com/drive/folders/10_-1yaKG4iBoCjapUuPRwzuc1m_B4sn7?usp=sharing', image: MCom },
    { id: 12, title: 'M.com 2nd Sem', category: 'M-com', downloadUrl: 'https://drive.google.com/drive/folders/14Bmk4hrUp6f0043mgUqiO968Wgdke6bv?usp=sharing', image: MCom },
    { id: 13, title: 'M.com 3rd Sem', category: 'M-com', downloadUrl: 'https://drive.google.com/drive/folders/10c2cznckMfs4Wi52vPr6HY_-TlkKtmaW?usp=sharing', image: MCom },
    { id: 14, title: 'M.com 4th Sem', category: 'M-com', downloadUrl: 'https://drive.google.com/drive/folders/10hUG1-fsQzEhclGAOjpB93bR4dKu7JYs?usp=sharing', image: MCom },
    { id: 15, title: 'Kannada Stories', category: 'Kannada Stories', downloadUrl: 'https://drive.google.com/drive/folders/1rWyG9oymNhD6YRT3Ngz0uiOnHbtQDv2w?usp=sharing', image: KannadaStories },
   
  { 
    id: 16, 
    title: 'BCA 1st Sem', 
    category: 'BCA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-kVt4ZXFw98bGfzl51PFLBEB1HxxstpN?usp=sharing', 
    image: BCA 
  },
  { 
    id: 17, 
    title: 'BCA 2nd Sem', 
    category: 'BCA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-lg2UGXp1kCklqozbfJ3esb9nMb10nY1?usp=sharing', 
    image: BCA 
  },
  { 
    id: 18, 
    title: 'BCA 3rd Sem', 
    category: 'BCA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-qIKLq7QXVHrlXIWdBvMWFXHfSUYBR3u?usp=sharing', 
    image: BCA 
  },
  { 
    id: 19, 
    title: 'BCA 4th Sem', 
    category: 'BCA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-vTNP6tZ9oU5e1uJuCdew3GBSc5bVnTq?usp=sharing', 
    image: BCA 
  },
  { 
    id: 20, 
    title: 'BCA 5th Sem', 
    category: 'BCA', 
    downloadUrl: 'https://drive.google.com/drive/folders/101AVKaLTWqnujew4Fv5ACmWWj8bjYacE?usp=sharing', 
    image: BCA 
  },
  { 
    id: 21, 
    title: 'BCA 6th Sem', 
    category: 'BCA', 
    downloadUrl: 'https://drive.google.com/drive/folders/10362iTduz_6fBaeKkS1cDWT6M1G_jvz0?usp=sharing', 
    image: BCA 
  },
  
  { 
    id: 22, 
    title: 'BBA 1st Sem', 
    category: 'BBA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-TmLSKGOpQSzCDH68XOgqEKDKYOH3Ki1?usp=sharing', 
    image: BBA 
  },
  { 
    id: 23, 
    title: 'BBA 2nd Sem', 
    category: 'BBA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-VZZaOgqX-vSxHw9gIv_E-2LM89_Zvwi?usp=sharing', 
    image: BBA 
  },
  { 
    id: 24, 
    title: 'BBA 3rd Sem', 
    category: 'BBA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-eLQHEB3qWBe5znsKDnH_N-4eCs8jJgy?usp=sharing', 
    image: BBA 
  },
  { 
    id: 25, 
    title: 'BBA 4th Sem', 
    category: 'BBA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-ePJC8ybGSVjFAAMmv0GEzaUOZcw6VI5?usp=sharing', 
    image: BBA 
  },
  { 
    id: 26, 
    title: 'BBA 5th Sem', 
    category: 'BBA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-fJiPTBcrp_K2_Vrp1ojdeVe0YZEu9XC?usp=sharing', 
    image: BBA 
  },
  { 
    id: 27, 
    title: 'BBA 6th Sem', 
    category: 'BBA', 
    downloadUrl: 'https://drive.google.com/drive/folders/1-fgd0saPyp2_HmKH4ySgZ89m88zdCxlu?usp=sharing', 
    image: BBA 
  },
  


  ];

  // Categories from original + unique ones
  const categories = ['All', 'B.com', 'B.sc', 'BA', 'BBA', 'BCA', 'M-com', 'Kannada Stories'];

  // External resources
  const resources = [
    { name: 'National Digital Library', url: 'https://ndl.iitkgp.ac.in/', icon: Library },
    // { name: 'Pg Pathshala Management', url: 'https://urlzs.com/KjqYv', icon: BookOpen },
   // { name: 'Campuswide Access', url: 'https://bangaloreuniversity.ac.in/campuswide-access/', icon: Globe },
    { name: 'Cambridge Dictionary', url: 'https://dictionary.cambridge.org/', icon: Bookmark },
  ];

  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter books
  const filteredBooks = booksData.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-900 text-gold overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center" 
             style={{backgroundImage:`url(${libraryHero})`, backgroundSize:'cover', backgroundPosition:'center',}}
            >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            E-Library
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Digital resources at your fingertips – access notes, books, and study materials.
          </motion.p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* External Resources Section */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {resources.map((res, idx) => (
            <motion.a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition">
                <res.icon className="w-6 h-6 text-teal-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{res.name}</h3>
                <p className="text-xs text-teal-600 flex items-center gap-1">
                  Visit <ExternalLink size={12} />
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div> */}
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-6">
          {resources.map((res, idx) => (
            <motion.a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full sm:w-[45%] lg:w-[260px] bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition">
                <res.icon className="w-6 h-6 text-teal-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{res.name}</h3>
                <p className="text-xs text-teal-600 flex items-center gap-1">
                  Visit <ExternalLink size={12} />
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-teal-50/50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center"> How to Access Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'Select Course', desc: 'Choose your program from the filter below.' },
              { step: 2, title: 'Pick Semester', desc: 'Click on your semester / subject block.' },
              { step: 3, title: 'Download', desc: 'Read or download notes directly from Google Drive.' }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-teal-600">
                <div className="text-3xl font-bold text-teal-600 mb-2">0{item.step}</div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-teal-50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* Books Grid */}
        <AnimatePresence>
          {filteredBooks.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No books found. Try another category.</div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredBooks.map(book => (
                <motion.div
                  key={book.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-2xl"
                >
                  <div className="h-40 bg-gray-100 flex items-center justify-center">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full object-contain p-3"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Book'; }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800 text-lg">{book.title}</h3>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                        {book.category}
                      </span>
                    </div>
                    <a
                      href={book.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-xl transition"
                    >
                      <Download size={16} /> Download / View
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ELibraryPage;

