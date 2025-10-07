import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        
        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
        <li>
  <Link to="/about">About Us</Link>
</li>
<li>
  <Link to="/contact">Contact</Link>
</li>

        <li><Link to="/charusat" onClick={toggleSidebar}>Welcome to CHARUSAT</Link></li>
        <li><Link to="/depstar" onClick={toggleSidebar}>Welcome to DEPSTAR</Link></li>
        <li><Link to="/cse" onClick={toggleSidebar}>Welcome to CSE</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
