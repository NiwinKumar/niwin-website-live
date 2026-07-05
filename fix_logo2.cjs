const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(
    /\.startup-card--eido\{background:linear-gradient\(135deg, #F57223, #FF9A44\)\}/g,
    '.startup-card--eido{background:linear-gradient(135deg, #FF5500, #FFaa00)}'
);

fs.writeFileSync(cssPath, content);
console.log('Fixed logo again.');
