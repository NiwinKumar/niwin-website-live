const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

// First remove any existing ::after for eido to start fresh
content = content.replace(/\.startup-card--eido::after\{[^}]*\}/g, '');

content = content.replace(
    /\.startup-card--eido\{background:linear-gradient\([^)]*\)\}/g,
    '.startup-card--eido{background:linear-gradient(135deg, #FF5A00, #FFC107)}.startup-card--eido::after{content:"";position:absolute;inset:0;background-color:#fff;-webkit-mask:var(--startup-logo-eido-labs) center/70% no-repeat;mask:var(--startup-logo-eido-labs) center/70% no-repeat}'
);

fs.writeFileSync(cssPath, content);
console.log('Fixed logo mask.');
