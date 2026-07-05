const fs = require('fs');

const jsPath = './www.niwin.info/assets/content-H5xKOsW4.js';
let content = fs.readFileSync(jsPath, 'utf-8');

// Replace "Kalshi Edge OS" with "Mental Health Chatbot"
content = content.replace(/title:\`Kalshi Edge OS\`/g, 'title:`Mental Health Chatbot`');
content = content.replace(/overview:\`A Chrome extension that turns a Kalshi market page into the trading surface I kept wishing was already there.\`/g, 'overview:`Integrated a Django server, a Rasa conversational model, and a JavaScript UI into a scalable, modular system.`');

// Replace "Predacy" with "Real-Time Fire Detection"
content = content.replace(/title:\`Predacy\`/g, 'title:`Real-Time Fire Detection`');
content = content.replace(/overview:\`A sealed-bid prediction market experiment where users can express intent with/g, 'overview:`Developed and deployed deep CNN models for fire detection in images and video streams, achieving 93% whole-image and 89% superpixel-localization accuracy. - ');

fs.writeFileSync(jsPath, content);
console.log('Updated projects.');
