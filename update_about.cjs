const fs = require('fs');

let content = fs.readFileSync('./www.niwin.info/index.html', 'utf-8');

// The about section lines
content = content.replace(/I build for the internet’s most online/g, 'I build scalable backends for ambitious');
content = content.replace(/The places where software, speculation, and/g, 'The places where distributed systems and AI');
content = content.replace(/culture <span class="word word--blur">blur<\/span> into one another/g, 'agents <span class="word word--blur">merge</span> into one another');

content = content.replace(/I like interfaces with/g, 'I like platforms with');
content = content.replace(/where there is real density of/g, 'where there is real scale of');
content = content.replace(/capital, coordination, or attention./g, 'data, automation, or integrations.');

content = content.replace(/My work is about making/g, 'My work is about making');
content = content.replace(/feel/g, 'feel'); // Keeping this structure

content = content.replace(/Usually for crypto natives. Always for/g, 'Usually for AI-first products. Always for');

content = content.replace(/as an early team member managing product,/g, 'as an early team member managing infrastructure,');
content = content.replace(/design, and direction./g, 'APIs, and platform scale.');

fs.writeFileSync('./www.niwin.info/index.html', content);
console.log('Updated about section.');
