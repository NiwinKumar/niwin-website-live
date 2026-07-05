const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(/\.startup-card--eido::after\{[^}]*\}/g, '');

content = content.replace(
    /\.startup-card--eido\{background:linear-gradient\([^)]*\)\}/g,
    '.startup-card--eido{background:linear-gradient(135deg, #FF5A00, #FFC107);position:absolute;}.startup-card--eido::after{content:"";position:absolute;inset:0;background-color:#fff;-webkit-mask-image:var(--startup-logo-eido-labs);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:70%;mask-image:var(--startup-logo-eido-labs);mask-position:center;mask-repeat:no-repeat;mask-size:70%;}'
);

fs.writeFileSync(cssPath, content);
