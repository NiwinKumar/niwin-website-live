import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// In dev, serve from www.niwin.info. In prod, serve from dist if it exists, otherwise www.niwin.info.
app.use(express.static(path.join(__dirname, 'www.niwin.info')));
app.use(express.static(path.join(__dirname, 'dist'))); // Fallback

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www.niwin.info', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
