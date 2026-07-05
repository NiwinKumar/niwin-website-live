const sharp = require('sharp');
async function check() {
  const meta = await sharp('/app/applet/happyfox-logo.png').metadata();
  console.log('Original alpha?', meta.hasAlpha);
  
  const stats = await sharp('/app/applet/happyfox-logo.png').stats();
  console.log('Channels:', stats.channels.map(c => ({ min: c.min, max: c.max })));
}
check();
