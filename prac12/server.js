const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Home Page (Calculator UI)
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Kids Calculator</title>
      <style>
        body {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          text-align: center;
          background: linear-gradient(135deg, #FFDEE9, #B5FFFC);
          padding: 50px;
        }
        h1 {
          color: #ff3399;
          font-size: 48px;
          text-shadow: 2px 2px #fff;
        }
        form {
          margin-top: 30px;
          background: #fff3cd;
          display: inline-block;
          padding: 30px;
          border-radius: 25px;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.2);
        }
        input, select {
          padding: 12px;
          font-size: 18px;
          border-radius: 12px;
          border: 2px solid #ff99cc;
          margin: 10px;
          text-align: center;
        }
        button {
          padding: 12px 20px;
          background-color: #ff66b2;
          color: white;
          font-size: 20px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        button:hover {
          transform: scale(1.1);
          background: #ff3385;
        }
        .result {
          margin-top: 30px;
          font-size: 30px;
          color: #0066cc;
          background: #e0ffe0;
          padding: 20px;
          border-radius: 20px;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <h1>🎉 Kids Fun Calculator 🎉</h1>
      <form action="/calculate" method="POST">
        <input type="text" name="num1" placeholder="Enter first number" required>
        <select name="operation">
          <option value="add">➕ Add</option>
          <option value="subtract">➖ Subtract</option>
          <option value="multiply">✖ Multiply</option>
          <option value="divide">➗ Divide</option>
        </select>
        <input type="text" name="num2" placeholder="Enter second number" required>
        <br><br>
        <button type="submit">✨ Calculate ✨</button>
      </form>
    </body>
    </html>
  `);
});

// Handle Calculation
app.post("/calculate", (req, res) => {
  let { num1, num2, operation } = req.body;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send(`
      <html>
      <head>
        <title>Error</title>
        <style>
          body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #FFD1FF, #FF9CEE);
            padding: 50px;
          }
          .error-box {
            background: #ffcccc;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0px 6px 15px rgba(0,0,0,0.3);
            display: inline-block;
          }
          h1 {
            color: #ff0033;
            font-size: 50px;
            text-shadow: 2px 2px #fff;
          }
          p {
            font-size: 24px;
            color: #660000;
          }
          a {
            margin-top: 20px;
            display: inline-block;
            padding: 12px 20px;
            background: #ff66b2;
            color: white;
            border-radius: 12px;
            font-size: 20px;
            text-decoration: none;
            transition: transform 0.2s;
          }
          a:hover {
            transform: scale(1.1);
            background: #ff3385;
          }
        </style>
      </head>
      <body>
        <div class="error-box">
          <h1>❌ Oops! Wrong Input ❌</h1>
          <p>Only numbers are allowed. Try again, buddy! 😅</p>
          <a href="/">🔙 Go Back to Calculator</a>
        </div>
      </body>
      </html>
    `);
    return;
  }

  let result;
  switch (operation) {
    case "add": result = num1 + num2; break;
    case "subtract": result = num1 - num2; break;
    case "multiply": result = num1 * num2; break;
    case "divide":
      result = num2 === 0 ? "❌ Cannot divide by zero!" : num1 / num2;
      break;
  }

  res.send(`
    <html>
    <head>
      <title>Result</title>
      <style>
        body {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          text-align: center;
          background: linear-gradient(135deg, #C2FFD8, #465EFB);
          padding: 50px;
        }
        .result-box {
          background: #ffffcc;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.3);
          display: inline-block;
        }
        h1 {
          color: #ff6600;
          font-size: 50px;
        }
        p {
          font-size: 28px;
          color: #333;
        }
        a {
          margin-top: 20px;
          display: inline-block;
          padding: 12px 20px;
          background: #66ccff;
          color: white;
          border-radius: 12px;
          font-size: 20px;
          text-decoration: none;
          transition: transform 0.2s;
        }
        a:hover {
          transform: scale(1.1);
          background: #3399ff;
        }
      </style>
    </head>
    <body>
      <div class="result-box">
        <h1>🎉 Result 🎉</h1>
        <p>The answer is: <b>${result}</b></p>
        <a href="/">🔙 Try Again</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Kids Calculator running at http://localhost:${port}`);
});
