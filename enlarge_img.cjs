const fs = require('fs');

const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(/\.hero__portrait-frame\{aspect-ratio:235\/346;width:235px\}/g, '.hero__portrait-frame{aspect-ratio:235/346;width:400px}');
content = content.replace(/\.hero__portrait-frame\{width:min\(235px,56vw\)\}/g, '.hero__portrait-frame{width:min(400px,70vw)}');
content = content.replace(/\.hero__portrait-frame\{width:min\(196px,54vw\)\}/g, '.hero__portrait-frame{width:min(320px,65vw)}');

fs.writeFileSync(cssPath, content);
console.log('Enlarged hero image.');
