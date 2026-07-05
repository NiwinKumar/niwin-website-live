const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

// Remove my previous appended block
content = content.replace(/\.startup-card--eido\s*\{\s*background:\s*url\(happyfox-white\.png\)[^}]*\}/g, '');

content += `
.startup-card--eido {
    background: url(happyfox-white.png) center / 65% no-repeat, linear-gradient(135deg, #FF5A00, #FFC107) !important;
    z-index: 3;
    top: 0;
    left: 0;
    transform: translate(0,0) rotate(0);
    animation: .98s cubic-bezier(.16,1,.3,1) startup-card-active-flip;
}
.startup-card--eido::after {
    display: none !important;
}
`;

fs.writeFileSync(cssPath, content);
console.log('Layout fixed.');
