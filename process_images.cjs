const sharp = require('sharp');

async function processImages() {
  try {
    // 1. Crop niwin-sign.png
    const signBuffer = await sharp('/app/applet/niwin-sign.png')
      .trim() 
      .toBuffer();
    await sharp(signBuffer).toFile('./www.niwin.info/assets/niwin-sign.png');
    console.log('Cropped niwin-sign.png');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processImages();
