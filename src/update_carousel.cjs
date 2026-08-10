const fs = require('fs');

const fileData = fs.readFileSync('src/components/ToppersCarousel.jsx', 'utf8');
const generated = fs.readFileSync('src/scratch_generate.txt', 'utf8');

const parts = generated.split('\n\n  // B.Com TOPPERS 2025-26\n');
const imports = parts[0];
const items = '  // B.Com TOPPERS 2025-26\n' + parts[1];

let updated = fileData.replace(/(import SWATHI from '\.\.\/assets\/Toppers\/SWATHI C R\.png';\s+)/, `$1${imports}\n`);

updated = updated.replace(/const toppers = \[/, `const toppers25 = [\n${items}];\n\nconst toppers = [`);

updated = updated.replace(/const duplicatedToppers = \[\.\.\.toppers, \.\.\.toppers\];/, `const duplicatedToppers25 = [...toppers25, ...toppers25];\nconst duplicatedToppers = [...toppers, ...toppers];`);

const carouselSection2025 = `
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Department of Commerce, Management & Computer Applications</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              <span className="text-teal-600 italic">Academic <spam className="text-gold">Toppers</spam> 2025-26</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-medium text-sm shadow-sm">
              BBA, B.Com & BCA Departments
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-24">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-linear-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-linear-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex py-4"
          animate={{ x: [0, -11400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 150, 
              ease: "linear",
            },
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedToppers25.map((topper, i) => (
            <TopperCard key={i} topper={topper} />
          ))}
        </motion.div>
      </div>
`;

updated = updated.replace(/(<div className="max-w-7xl mx-auto px-6 mb-16">)/, carouselSection2025 + '\n      $1');

fs.writeFileSync('src/components/ToppersCarousel.jsx', updated);
