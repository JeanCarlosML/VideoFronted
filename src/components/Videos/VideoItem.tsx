import { IVideo } from "./Video";
import ReactPlayer from "react-player";
import axios from "axios";
interface Props {
  video: IVideo;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const deleteVideo = async () => {
    console.log("Eliminando");
    const { data } = await axios.delete(
      `http://localhost:3000/api/videos/${video._id}`
    );
    console.log(data);
    loadVideos();
  };
  return (
    <div className="col-md-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span
            className="text-danger"
            onClick={deleteVideo}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} controls />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
