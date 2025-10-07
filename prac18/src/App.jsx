import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import { fetchVideos } from './services/youtube';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Home');

  useEffect(() => {
    if (searchTerm) {
      fetchVideos(searchTerm).then((data) => setVideos(data));
    } else {
      fetchVideos(selectedCategory).then((data) => setVideos(data));
    }
  }, [searchTerm, selectedCategory]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              videos={videos}
              onSearch={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;