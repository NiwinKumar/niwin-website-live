const sharp = require('sharp');

async function check() {
  const meta = await sharp('/app/applet/niwin-sign.png').metadata();
  console.log('Original meta:', meta.width, 'x', meta.height);
  
  const trimmed = sharp('/app/applet/niwin-sign.png').trim();
  const info = await trimmed.toBuffer({ resolveWithObject: true });
  console.log('Trimmed info:', info.info.width, 'x', info.info.height);
}
check();
