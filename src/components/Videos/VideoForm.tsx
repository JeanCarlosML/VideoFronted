import { useState } from "react";
import { IVideo } from "./Video";
import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useHistory } from "react-router";
const VideoForm = () => {
  let history = useHistory();
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<IVideo>(initialState);
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enviando data");
    axios
      .post("http://localhost:3000/api/videos", video)
      .then((data) => {
        submitSuccess();
      })
      .catch((e) => {
        console.log(e.response.data);
        submitError(e.response.data.result);
      });
  };
  const submitSuccess = () => {
    toast.success("Video creado con éxito", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setVideo(initialState);
    history.push("/");
  };
  const submitError = (errorMessage: any) => {
    swal("Error al subir video", errorMessage, "error");
  };
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>
            <form action="" onSubmit={handelSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  autoFocus
                  onChange={(e) =>
                    setVideo({ ...video, [e.target.name]: e.target.value })
                  }
                  value={video.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={(e) =>
                    setVideo({ ...video, [e.target.name]: e.target.value })
                  }
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  id="description"
                  cols={30}
                  rows={10}
                  className="form-control"
                  onChange={(e) =>
                    setVideo({ ...video, [e.target.name]: e.target.value })
                  }
                  value={video.description}
                ></textarea>
              </div>
              <button className="btn btn-primary">Create Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
