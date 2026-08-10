const fs = require('fs');
const path = require('path');
const dirs = ['b.com', 'bba', 'bca'];
const basePath = 'd:/Websites-Changes/SLCMS-Client/src/assets/toppers-2';

let imports = '';
let items = '';

dirs.forEach(dir => {
  const files = fs.readdirSync(path.join(basePath, dir)).filter(f => f.endsWith('.png'));
  const courseName = dir === 'b.com' ? 'B.Com' : dir.toUpperCase();
  const dept = dir === 'b.com' || dir === 'bba' ? 'Commerce & Management' : 'Computer Applications';
  
  items += `  // ${courseName} TOPPERS 2025-26\n`;
  files.forEach((file, i) => {
    const name = file.replace('.png', '');
    let importName = name.replace(/[^a-zA-Z0-9]/g, '').toUpperCase() + '_25';
    // Ensure importName is a valid identifier
    if (/^[0-9]/.test(importName)) importName = '_' + importName;
    imports += `import ${importName} from '../assets/toppers-2/${dir}/${file}';\n`;
    
    items += `  {
    name: '${name}',
    course: '${courseName} - 2025-26',
    rank: 'Academic Excellence',
    dept: '${dept}',
    image: ${importName},
    quote: 'Consistent effort and dedication lead to academic excellence.',
  },\n`;
  });
});

fs.writeFileSync('d:/Websites-Changes/SLCMS-Client/src/scratch_generate.txt', imports + '\n\n' + items);
