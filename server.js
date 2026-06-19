const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Rohit! Node.js app is running.');
});
app.get('/health', (req, res) => {
  res.send('Hello Rohit! Node.js app helth is ok');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
