const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

// Strip out our previous additions for .startup-card--eido
content = content.replace(/\.startup-card--eido\s*\{[^}]*\}|\.startup-card--eido::after\s*\{[^}]*\}/g, '');

content += `
.startup-card--eido {
    background: url(happyfox-white.png) center / 70% no-repeat, linear-gradient(135deg, #FF5A00, #FFC107) !important;
    position: relative !important;
    border: 1.359px solid #fff !important;
    border-radius: 10.874px !important;
    width: var(--startup-stack-size) !important;
    height: var(--startup-stack-size) !important;
}
.startup-card--eido::after {
    display: none !important;
}
`;

fs.writeFileSync(cssPath, content);
console.log('CSS fixed.');
