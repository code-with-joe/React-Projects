import { useRef, useState } from "react";
import { video1, video2, video3, video4, video5 } from "./components/VideoList";
import Buttons from "./components/Buttons";
function App() {
  const videos = [
    { src: video1, label: "0" },
    { src: video2, label: "1" },
    { src: video3, label: "2" },
    { src: video4, label: "3" },
    { src: video5, label: "4" },
  ];
  const [currentVideo, setcurrentVideo] = useState(videos[0]);
  const audioRef = useRef(null);

  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white">
      <div className="w-full h-screen overflow-hidden ">
        <div className="w-full h-7/8">
          <video
            ref={audioRef}
            className="w-full h-full object-contain"
            src={currentVideo.src}
          ></video>
        </div>
        <Buttons audio={{ audioRef, videos, currentVideo, setcurrentVideo }} />
      </div>
    </div>
  );
}

export default App;



