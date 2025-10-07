import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

function Navbar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && term.trim() !== '') {
      onSearch(term);
    }
  };

  const handleSearchClick = () => {
    if (term.trim() !== '') {
      onSearch(term);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <MenuIcon className="icon" />
        <img src="/yt-logo.png" alt="YouTube" className="logo" />
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearchClick}>
          <SearchIcon />
        </button>
        <button className="mic-btn">
          <MicIcon />
        </button>
      </div>

      <div className="nav-right">
        <VideoCallIcon className="icon" />
        <NotificationsIcon className="icon" />
        <img src="/user-logo.png" className="user-avatar" alt="User" />
      </div>
    </div>
  );
}

export default Navbar;
