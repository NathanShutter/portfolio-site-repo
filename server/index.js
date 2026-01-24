const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Your Name',
    title: 'Full Stack Developer',
    bio: 'Welcome to my portfolio!',
    projects: []
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
