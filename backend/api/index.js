// backend/api/index.js
const { createServer } = require('@vercel/node');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Export the app to make it accessible to Vercel
module.exports = createServer(app);
