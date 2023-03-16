import { Audio, Image } from "./components/Audio"; //Not recommended multiple imports from one file.
import Video from "./components/Video";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Audio />
      <Image />
      <Video 
        title="React Js" 
        views="10M" time="1 year ago" 
        channel="QualiMe" 
      />
      <Video
        title="Node Js"
        views="121M"
        time="1 month ago"
      ></Video>
      <Video
        title="MongoDB"
        views="21M"
        time="5 month ago"
        channel="QualiMe"
      ></Video>
    </div>
  );
}
