import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS styling

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="container">
      <h1 className="title"> Welcome to CHARUSAT!!!!</h1>
      <div className="datetime-card">
        <h2 className="date"> {formattedDate}</h2>
        <h2 className="time"> {formattedTime}</h2>
      </div>
    </div>
  );
}

export default App;
