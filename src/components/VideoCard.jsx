const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className="m-2 w-92">
      <img className="rounded-lg w-full" alt="thumbnail" 
      src = {thumbnails?.medium?.url}/>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;