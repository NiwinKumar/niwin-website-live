const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(/\.startup-card--eido::after\{[^}]*\}/g, '');
content = content.replace(/\.startup-card--eido\{background:linear-gradient\([^}]*\}[^\.]*/g, ''); // remove previous custom stuff if any

// Let's just append the clean version to the end of the file to be safe
content += `
.startup-card--eido {
    background: linear-gradient(135deg, #FF5A00, #FFC107) !important;
    position: relative !important;
    border: 1.359px solid #fff !important;
    border-radius: 10.874px !important;
}
.startup-card--eido::after {
    content: "" !important;
    position: absolute !important;
    inset: 0 !important;
    background-color: #fff !important;
    -webkit-mask-image: var(--startup-logo-eido-labs) !important;
    -webkit-mask-position: center !important;
    -webkit-mask-repeat: no-repeat !important;
    -webkit-mask-size: 60% !important;
    mask-image: var(--startup-logo-eido-labs) !important;
    mask-position: center !important;
    mask-repeat: no-repeat !important;
    mask-size: 60% !important;
    z-index: 2 !important;
}
`;

fs.writeFileSync(cssPath, content);
