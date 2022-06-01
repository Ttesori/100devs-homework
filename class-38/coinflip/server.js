const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  const flip = Math.ceil(Math.random() * 2);
  if (flip === 1) {
    res.json({ winner: 'Heads' });
  } else {
    res.json({ winner: 'Tails' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});