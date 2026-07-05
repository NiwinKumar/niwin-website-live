const fs = require('fs');

// 1. Embed happyfox-white.png into CSS
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let cssContent = fs.readFileSync(cssPath, 'utf-8');
const logoBuffer = fs.readFileSync('./www.niwin.info/assets/happyfox-white.png');
const logoBase64 = 'data:image/png;base64,' + logoBuffer.toString('base64');
cssContent = cssContent.replace(
    /url\(happyfox-white\.png\)/g,
    `url(${logoBase64})`
);
fs.writeFileSync(cssPath, cssContent);
console.log('Embedded logo in CSS');

// 2. Embed niwin-sign.png into HTML
const htmlPath = './www.niwin.info/index.html';
let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
const signBuffer = fs.readFileSync('./www.niwin.info/assets/niwin-sign.png');
const signBase64 = 'data:image/png;base64,' + signBuffer.toString('base64');
htmlContent = htmlContent.replace(
    /src="assets\/niwin-sign\.png"/g,
    `src="${signBase64}"`
);
fs.writeFileSync(htmlPath, htmlContent);
console.log('Embedded signature in HTML');
