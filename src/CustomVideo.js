import { useParams } from "react-router-dom";
import { MAIN_DETAILS } from "./util";
import { useRef, useState } from "react";

const CustomVideo = () => {
  const [pauseVideo,setPauseVideo] = useState(false);
  const videoRef = useRef();
  const { id } = useParams();


  const pauseVideoHandler = () => {
    if(!pauseVideo){
      setPauseVideo(true);
      videoRef.current.pause();
    }else{
      setPauseVideo(false);
      videoRef.current.play();
    }

  }

  const videoLink = MAIN_DETAILS[id].videosrc;
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        borderRadius: "6px",
        objectFit: "contain",
        padding: "3rem",
      }}
    >
      <video ref={videoRef} onClick={pauseVideoHandler}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          borderRadius: "6px",
          objectFit: "contain",
          padding: "3rem",
        }}
        id="video"
        autoPlay
        loop
        src={videoLink}
        data-testid="preroll-player"
        preload="auto"
      ></video>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "30%",
          position: "absolute",
          zIndex: "4",
          bottom: "20%",
          left: "12%",
          fontWeight: "bold",
          padding: "1rem",
          color: "white",
          height: "auto",
        }}
      >
        <h3>#1 in India</h3>
        <img
          style={{ height: "70%", width: "100%", objectFit: "contain" }}
          alt="Dry Day"
          src={MAIN_DETAILS[id].titleimg}
        />
        <h3>Included with prime</h3>
      </section>
      <div className="video-play-buttons">
     { pauseVideo &&  <i className="fa-solid fa-play" onClick={pauseVideoHandler} style={{backgroundColor:"lightgrey",margin:"1rem",padding:"1rem",borderRadius:"50%",cursor:"pointer"}}></i>}
     { !pauseVideo && <i className="fa-solid fa-pause" onClick={pauseVideoHandler}  style={{backgroundColor:"lightgrey",margin:"1rem",padding:"1rem",borderRadius:"50%", cursor:"pointer"}}></i>}
      </div>
    </div>
  );
};

export default CustomVideo;
