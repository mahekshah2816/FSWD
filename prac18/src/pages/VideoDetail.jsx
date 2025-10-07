import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './VideoDetail.css';

const API_KEY = 'AIzaSyD1xt-cVcKhhRcMP0ynKUyVYltAwcxw2UU'; // Your API key

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet,statistics',
            id: id,
            key: API_KEY,
          },
        });
        setVideo(res.data.items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchVideoDetail();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  const { title, description, channelTitle } = video.snippet;

  return (
    <>
      <Navbar />
      <div className="video-detail">
        <div className="video-player">
          <iframe
            title={title}
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <h2>{title}</h2>
        <p><strong>Channel:</strong> {channelTitle}</p>
        <p>{description}</p>
      </div>
    </>
  );
}

export default VideoDetail;
