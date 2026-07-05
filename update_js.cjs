const fs = require('fs');

const jsPath = './www.niwin.info/assets/content-H5xKOsW4.js';
let content = fs.readFileSync(jsPath, 'utf-8');

// The teams data looks like this:
// teams:[{year:`2025`,name:`Eido Labs`,role:`Co-Founder`},{year:`2025`,name:`Safe`,role:`Contract Designer`},{year:`2024`,name:`Tike. Social`,role:`Co-Founder`},{year:`2023`,name:`OpenBlock Labs`,role:`Founding Product Designer`},{year:`22-23`,name:`Cruize Finance`,role:`Founding Product Designer`}]

content = content.replace(/teams:\[.*?\]/g, 'teams:[{year:`2025-26`,name:`HappyFox`,role:`Backend Engineer`},{year:`2025`,name:`HappyFox`,role:`Backend Intern`}]');

// For projects, there's `groups:[{year:\`2026\`,items:[...]}]` which maps to `experiments`. 
// And `projects` exported as `d.projects` or similar. Let's find where the projects are.
// `var d={projects:[{id:\`kalshi-edge\`,...`

fs.writeFileSync(jsPath, content);
console.log('Updated teams.');
