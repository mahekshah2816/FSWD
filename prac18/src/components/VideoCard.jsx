import { Link } from 'react-router-dom';
import './VideoCard.css';

function VideoCard({ video }) {
  const { title, thumbnails, channelTitle } = video.snippet;
  const videoId = video.id.videoId || video.id;

  return (
    <Link to={`/video/${videoId}`} className="video-card-link">
      <div className="video-card">
        <img src={thumbnails.medium.url} alt={title} className="thumbnail" />
        <div className="video-info">
          <h4 className="video-title">{title}</h4>
          <p className="channel-title">{channelTitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;

