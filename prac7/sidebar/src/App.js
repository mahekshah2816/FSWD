import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import './App.css';

import Charusat from './pages/charusat';
import Depstar from './pages/depstar';
import Cse from './pages/cse';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className="line top"></div>
          <div className="line middle"></div>
          <div className="line bottom"></div>
        </div>

        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className={`content ${isOpen ? 'shift' : ''}`}>
          <Routes>
            <Route
  path="/"
  element={
    <div className="home-container">
      <h1>Welcome to the Webpage</h1>
      <p>To explore more, please click the options from the sidebar on the left.</p>
    </div>
  }
/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/charusat" element={<Charusat />} />
            <Route path="/depstar" element={<Depstar />} />
            <Route path="/cse" element={<Cse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
