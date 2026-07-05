const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(
    /\.footer-signature__sign\{width:150px;height:100px;/g,
    '.footer-signature__sign{width:86.407px;height:24px;'
);

fs.writeFileSync(cssPath, content);
console.log('CSS fixed again.');
