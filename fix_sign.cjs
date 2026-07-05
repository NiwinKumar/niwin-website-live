const fs = require('fs');
const cssPath = './www.niwin.info/assets/footerPageScroll-mZLg2cX1.css';
let content = fs.readFileSync(cssPath, 'utf-8');

content = content.replace(
    /\.footer-signature__sign img\{clip-path:inset\(0 100% 0 0\);width:100%;height:100%;transition:clip-path 1\.8s cubic-bezier\(\.65,0,\.35,1\);display:block\}/g,
    '.footer-signature__sign img{clip-path:inset(0 100% 0 0);width:100%;height:100%;object-fit:contain;transition:clip-path 1.8s cubic-bezier(.65,0,.35,1);display:block}'
);
content = content.replace(
    /\.footer-signature__sign\{width:86\.407px;height:24px;/g,
    '.footer-signature__sign{width:150px;height:100px;'
);

fs.writeFileSync(cssPath, content);
