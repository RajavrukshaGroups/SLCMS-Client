import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-lime-400 rounded-[30px] sm:rounded-[40px] p-8 sm:p-12 lg:p-20 relative overflow-hidden text-center"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 bg-yellow-300 rounded-full opacity-50" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-400 rounded-full opacity-30" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 mb-4">
            Get updates with our Newsletter <br />
            Subscribe Today
          </h2>
          
          <form className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your Email Address"
              className="flex-grow px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-none focus:ring-2 focus:ring-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 text-sm sm:text-base"
            />
            <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-colors shadow-xl text-sm sm:text-base">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
