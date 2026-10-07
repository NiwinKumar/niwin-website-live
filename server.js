import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve the editable static site, with the build output as a fallback.
app.use(express.static(path.join(__dirname, 'www.niwin.info')));
app.use(express.static(path.join(__dirname, 'dist'))); // Fallback

// This is a multi-page static site; removed pages and missing assets are 404s.
app.use((req, res) => {
  res.status(404).type('text/plain').send('Page not found');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
