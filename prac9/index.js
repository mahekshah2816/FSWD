const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the current folder (__dirname)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>✨ Welcome to our site ✨</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
