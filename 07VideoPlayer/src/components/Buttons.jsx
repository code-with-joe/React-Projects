import React, { useState, useEffect, useRef } from "react";

const Buttons = ({ audio }) => {
  const { audioRef, videos, currentVideo, setcurrentVideo } = audio;
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState("00:00:00");
  const [time, setTime] = useState("00:00:00");
  const [translateX, setTranslateX] = useState(null);
  const [width, setWidth] = useState(null);
  const lineRef = useRef(null);

  const handlePlay = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  const durationTime = () => {
    const totalTime = audioRef.current.duration;
    const hours = Math.floor(totalTime / 3600);
    const min = Math.floor((totalTime % 3600) / 60);
    const sec = Math.floor(totalTime % 60);

    setDuration(
      `${hours.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
    );
  };

  const updateTime = () => {
    const currentTime = audioRef.current.currentTime;
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = Math.floor(currentTime % 60);

    setTime(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );

    if (currentTime === audioRef.current.duration) {
      setPlay(play);
    }
    const totalTime = audioRef.current.duration;
    if (totalTime) {
      const percentage = (currentTime / totalTime) * 80;
      setTranslateX(percentage);
      setWidth(percentage);
    }
  };

  const handleVideoChangeBack = () => {
    const index = Math.max(1, currentVideo.label);
    setcurrentVideo(videos[index - 1]);
    if (audioRef.current) {
      audioRef.current.load();
      setPlay(false);
      setTranslateX(0);
      setWidth(0);
    }
  };

  const handleVideoChange = () => {
    const index = Math.min(3, currentVideo.label);

    setcurrentVideo(videos[index + 1]);
    if (audioRef.current) {
      audioRef.current.load();
      setPlay(false);
      setTranslateX(0);
      setWidth(0);
    }
  };

  const handleReply = () => {
    const currentTime = audioRef.current.currentTime - 10;
    audioRef.current.currentTime = Math.max(0, currentTime);
  };

  const handleSkip = () => {
    const currentTime = audioRef.current.currentTime + 10;
    const totalTime = audioRef.current.duration;
    audioRef.current.currentTime = Math.min(totalTime, currentTime);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("timeupdate", updateTime);
    audioElement.addEventListener("loadedmetadata", durationTime);

    return () => {
      audioElement.removeEventListener("timeupdate", updateTime);
      audioElement.removeEventListener("loadedmetadata", durationTime);
    };
  }, []);

  const handleWidth = (e) => {
    if (lineRef.current) {
      const clickX = e.clientX - lineRef.current.getBoundingClientRect().left;
      const lineWidth = lineRef.current.offsetWidth;
      const percentage = (clickX / lineWidth) * audioRef.current.duration;
      audioRef.current.currentTime = percentage;
    }
  };

  return (
    <>
      <div className="w-full h-23 bg-zinc-700 p-3 flex flex-col justify-center items-center">
        <div className="w-full px-10 pb-3 flex items-center justify-between">
          <h1 className="text-lg">{time}</h1>
          <div>
            <div
              onClick={handleWidth}
              className="absolute rounded-full w-[80vw] h-5  mt-[-3px] cursor-pointer"
            ></div>
            <div
              className="absolute rounded-full w-[1vw] h-2 bg-white"
              style={{ width: `${width + 1}vw` }}
            ></div>
            <div
              className={`absolute w-4 h-4 mt-[-4px] rounded-full bg-white`}
              style={{ transform: `translateX(${translateX}vw)` }}
            ></div>
            <div
              ref={lineRef}
              className="rounded-full w-[80vw] h-2 bg-zinc-600 "
            ></div>
          </div>
          <h2 className="text-lg">{duration}</h2>
        </div>
        <div className="w-full flex justify-center items-center gap-5 pb-1">
          <svg
            className="w-7 h-7 cursor-pointer"
            onClick={handleReply}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 2C17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22 6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 9.53614 4 7.33243 5.11383 5.86492 6.86543L8 9H2V3L4.44656 5.44648C6.28002 3.33509 8.9841 2 12 2ZM14.5 8.25C13.1193 8.25 12 9.36929 12 10.75V13.25C12 14.6307 13.1193 15.75 14.5 15.75 15.8807 15.75 17 14.6307 17 13.25V10.75C17 9.36929 15.8807 8.25 14.5 8.25ZM15.5 10.75V13.25C15.5 13.8023 15.0523 14.25 14.5 14.25 13.9477 14.25 13.5 13.8023 13.5 13.25V10.75C13.5 10.1977 13.9477 9.75 14.5 9.75 15.0523 9.75 15.5 10.1977 15.5 10.75ZM10 8.5H8.5V15.5H10V8.5Z"></path>
          </svg>

          <svg
            onClick={handleVideoChangeBack}
            className="w-10 h-10 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M8 11.3333L18.2227 4.51823C18.4524 4.36506 18.7628 4.42714 18.916 4.65691C18.9708 4.73904 19 4.83555 19 4.93426V19.0657C19 19.3419 18.7761 19.5657 18.5 19.5657C18.4013 19.5657 18.3048 19.5365 18.2227 19.4818L8 12.6667V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5V11.3333Z"></path>
          </svg>
          {play ? (
            <svg
              className="w-10 h-10 cursor-pointer"
              onClick={handlePlay}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
            </svg>
          ) : (
            <svg
              className="w-10 h-10 cursor-pointer"
              onClick={handlePlay}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
            </svg>
          )}

          <svg
            onClick={() => handleVideoChange()}
            className="w-10 h-10 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16 12.6667L5.77735 19.4818C5.54759 19.6349 5.23715 19.5729 5.08397 19.3431C5.02922 19.261 5 19.1645 5 19.0657V4.93426C5 4.65812 5.22386 4.43426 5.5 4.43426C5.59871 4.43426 5.69522 4.46348 5.77735 4.51823L16 11.3333V5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V12.6667Z"></path>
          </svg>

          <svg
            className="w-7 h-7 cursor-pointer"
            onClick={handleSkip}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 2C6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12H20C20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12 4 7.58172 7.58172 4 12 4 14.4639 4 16.6676 5.11383 18.1351 6.86543L16.1384 8.86165C15.6996 8.48063 15.1267 8.25 14.5 8.25 13.1193 8.25 12 9.36929 12 10.75V13.25C12 14.6307 13.1193 15.75 14.5 15.75 15.8807 15.75 17 14.6307 17 13.25V10.75C17 10.0686 16.7274 9.45094 16.2854 9H22V3L19.5534 5.44648C17.72 3.33509 15.0159 2 12 2ZM15.5 10.75V13.25C15.5 13.8023 15.0523 14.25 14.5 14.25 13.9477 14.25 13.5 13.8023 13.5 13.25V10.75C13.5 10.1977 13.9477 9.75 14.5 9.75 15.0523 9.75 15.5 10.1977 15.5 10.75ZM10 8.5H8.5V15.5H10V8.5Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Buttons;
