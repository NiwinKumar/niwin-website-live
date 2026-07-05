const fs = require('fs');

function findClass(dir, className) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = dir + '/' + file;
        if (fs.statSync(fullPath).isDirectory()) {
            findClass(fullPath, className);
        } else if (fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf-8');
            let matches = content.match(new RegExp('[^{}]*' + className + '[^{}]*\\{[^}]*\\}', 'g'));
            if (matches) {
                console.log(`== Matches in ${fullPath} ==`);
                console.log(matches.join('\n'));
            }
        }
    });
}

findClass('./www.niwin.info', 'hero__portrait');
