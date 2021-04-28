import { useVideoList } from "./useVideo";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const { videos, loadVideos } = useVideoList();
  return (
    <div className="row">
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} loadVideos={loadVideos} />
      ))}
    </div>
  );
};

export default VideoList;
