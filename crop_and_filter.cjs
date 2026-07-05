const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

// Crop the sign - make it smaller
content = content.replace(
    /\.footer-signature__sign\{width:150px;height:100px;/g,
    '.footer-signature__sign{width:80px;height:50px;'
);

// Add white filter to the image
content = content.replace(
    /\.footer-signature__sign img\{clip-path:inset\(0 100% 0 0\);width:100%;height:100%;object-fit:contain;transition:clip-path 1\.8s cubic-bezier\(\.65,0,\.35,1\);display:block\}/g,
    '.footer-signature__sign img{clip-path:inset(0 100% 0 0);width:100%;height:100%;object-fit:contain;filter:invert(1) brightness(1.2);transition:clip-path 1.8s cubic-bezier(.65,0,.35,1);display:block}'
);

fs.writeFileSync(cssPath, content);
console.log('✓ Sign cropped and white filter applied');
