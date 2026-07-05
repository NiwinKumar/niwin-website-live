const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(
    /\.startup-card--eido\{background-image:var\(--startup-logo-eido-labs\)\}/g,
    '.startup-card--eido{background:linear-gradient(135deg, #F57223, #FF9A44)}.startup-card--eido::after{content:"";position:absolute;inset:0;background-color:#fff;-webkit-mask:var(--startup-logo-eido-labs) center/70% no-repeat;mask:var(--startup-logo-eido-labs) center/70% no-repeat}'
);

fs.writeFileSync(cssPath, content);
console.log('Fixed logo.');
