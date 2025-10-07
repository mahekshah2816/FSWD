import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchVideos = async (searchTerm = 'Home') => {
  try {
    const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: searchTerm === 'Home' ? 'latest videos' : searchTerm,
        key: API_KEY,
      },
    });
    return res.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
