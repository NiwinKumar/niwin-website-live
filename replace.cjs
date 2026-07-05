const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Names and emails
    content = content.replace(/Anirudh Pareek/gi, 'Niwin Kumar');
    content = content.replace(/AnirudhP/gi, 'niwinkumar');
    content = content.replace(/anirudhpareek/gi, 'niwinkumar');
    content = content.replace(/anirudh\.p\.bu@gmail\.com/gi, 'niwinkumar77@gmail.com');
    content = content.replace(/Anirudh/g, 'Niwin');
    content = content.replace(/anirudh/g, 'niwin');

    // Taglines
    content = content.replace(/designing for hyperonline startups/gi, 'building scalable platforms');
    content = content.replace(/designing best-in-class/gi, 'building scalable');
    content = content.replace(/products for hyperonline startups/gi, 'backends and AI-integrated platforms');
    content = content.replace(/I design products, systems, and interfaces for crypto-native and hyperonline startups\./gi, 'Backend & Platform Engineer specializing in third-party integrations, distributed systems, and AI-assisted development.');
    content = content.replace(/Albert Einstein/gi, 'Alan Turing');

    fs.writeFileSync(filePath, content);
}

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else {
            if (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.json')) {
                replaceInFile(fullPath);
            }
        }
    });
}

walk('./www.anirudh.info');
console.log('Replaced texts successfully.');
