const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3002;

// Serve CSS file
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    const logPath = path.join(__dirname, 'error.log');

    fs.readFile(logPath, 'utf8', (err, data) => {
        if (err) {
            res.send(`
                <html>
                <head><link rel="stylesheet" href="style.css"></head>
                <body>
                    <h1>Developer Log Viewer</h1>
                    <p class="error">⚠️ Unable to read log file: ${err.message}</p>
                </body>
                </html>
            `);
        } else {
            res.send(`
                <html>
                <head><link rel="stylesheet" href="style.css"></head>
                <body>
                    <h1>Developer Log Viewer</h1>
                    <pre>${data}</pre>
                </body>
                </html>
            `);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
