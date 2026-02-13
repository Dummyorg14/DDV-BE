const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: "ok", service: "disaster-backend" });
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
