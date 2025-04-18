import {useEffect, useState} from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }

  if (!videos) return;
  return (
    <div className='flex justify-evenly flex-wrap'>
      {videos.length > 0 ? (
        videos.map(video => 
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
          </Link>)
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  )
}

export default VideoContainer