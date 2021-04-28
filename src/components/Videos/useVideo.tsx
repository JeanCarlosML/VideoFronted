import { IVideo } from "./Video";
import { useEffect, useState } from "react";
import axios from "axios";

export const useVideoList = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const loadVideos = () => {
    axios
      .get("http://localhost:3000/api/videos")
      .then((data) => setVideos(data.data.result))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    loadVideos();
  }, []);
  return { videos, loadVideos };
};
