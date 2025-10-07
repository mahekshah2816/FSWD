import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { fetchVideos } from '../services/youtube';
import './Home.css';

function Home({ onSearch, videos, selectedCategory, setSelectedCategory, setSearchTerm }) {
  return (
    <>
      <Navbar onSearch={onSearch} />
      <div className="home-wrapper">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSearchTerm={setSearchTerm}
        />
        <div className="home-container">
          <div className="video-list">
            {videos.map((video) => (
              <VideoCard key={video.id.videoId || video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
