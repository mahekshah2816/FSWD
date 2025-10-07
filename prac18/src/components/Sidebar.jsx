import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MemoryIcon from '@mui/icons-material/Memory';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ArticleIcon from '@mui/icons-material/Article';

const categories = [
  { icon: <HomeIcon />, label: 'Home' },
  { icon: <SportsEsportsIcon />, label: 'Gaming' },
  { icon: <DirectionsCarIcon />, label: 'Automobiles' },
  { icon: <SportsBasketballIcon />, label: 'Sports' },
  { icon: <LiveTvIcon />, label: 'Entertainment' },
  { icon: <MemoryIcon />, label: 'Technology' },
  { icon: <MusicNoteIcon />, label: 'Music' },
  { icon: <RssFeedIcon />, label: 'Blogs' },
  { icon: <ArticleIcon />, label: 'News' },
];

function Sidebar({ selectedCategory, setSelectedCategory, setSearchTerm }) {
  return (
    <div className="sidebar">
      {categories.map((item, index) => (
        <div
          key={index}
          className={`sidebar-item ${selectedCategory === item.label ? 'active' : ''}`}
          onClick={() => {
            setSelectedCategory(item.label);
            setSearchTerm(''); // Clear search when category changes
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
