import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// 🔧 Setup __dirname w ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔌 Express + HTTP
const app = express();
const server = http.createServer(app);

// 📁 Serwowanie frontendu
app.use(express.static(path.join(__dirname, 'public')));

// 🔧 Przykładowy endpoint API
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// 🚀 Start serwera
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Serwer działa na http://localhost:${PORT}`);
});
