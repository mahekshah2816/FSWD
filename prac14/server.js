const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(new Error("Only PDF files are allowed!"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2 MB
});

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// GET / → homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// POST /upload → handle file upload
app.post("/upload", upload.single("resume"), (req, res) => {
  res.send(`
    <div class="container">
      <h1>✅ Resume Uploaded Successfully!</h1>
      <p>Thank you for submitting your resume.</p>
      <a href="/" class="back-btn">Upload Another Resume</a>
    </div>
  `);
});

// Error handling middleware
app.use((err, req, res, next) => {
  let message = "";
  if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
    message = "❌ File too large! Max 2MB allowed.";
  } else if (err) {
    message = `❌ ${err.message}`;
  }
  res.send(`
    <div class="container">
      <h1>Upload Failed</h1>
      <p>${message}</p>
      <a href="/" class="back-btn">Try Again</a>
    </div>
  `);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
