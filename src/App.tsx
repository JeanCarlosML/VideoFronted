import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";
import NavBar from "./components/Navbar/NavBar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={VideoList} />
            <Route path="/new-video" component={VideoForm} />
          </Switch>
          <ToastContainer />
        </div>
      </Router>
    </div>
  );
};

export default App;
