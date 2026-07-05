const fs = require('fs');

const workJsPath = './www.niwin.info/assets/work-ojdqhQlZ.js';
let content = fs.readFileSync(workJsPath, 'utf-8');

// Replace Safe Ecosystem with Mental Health Chatbot
content = content.replace(/title:\`Safe Ecosystem\`/g, 'title:`Mental Health Chatbot`');
content = content.replace(/subtitle:\`Multisig Wallet\`/g, 'subtitle:`Generative AI & LLMs`');
content = content.replace(/overview:\`I worked with Safe as a contract designer.*? aesthetic\.\`/g, 'overview:`Integrated a Django server, a Rasa conversational model, and a JavaScript UI into a scalable, modular system reaching 78.8% NLP accuracy, applying OOP principles for maintainability and clean API integration. Engineered the service to handle 1,000+ daily interactions at 99.9% uptime, with CI/CD pipelines and Docker containerization for reliable, repeatable deployments.`');

// Replace Eido Labs with Real-Time Fire Detection
content = content.replace(/title:\`Eido Labs\`/g, 'title:`Real-Time Fire Detection`');
content = content.replace(/subtitle:\`DeFAI\`/g, 'subtitle:`Deep Learning, CNN, YOLO`');
// Looking at the grep output, Eido Labs has overview and detail media. Let's not worry about the exact overview string for Eido Labs.
// Instead, just replace `title:\`Eido Labs\``, etc.

fs.writeFileSync(workJsPath, content);
console.log('Updated work projects.');
