import "./styles.css";
import { useEffect, useRef, useState, Fragment } from "react";
import { ContinueWatching, MAIN_DETAILS } from "./util";
import { createBrowserRouter, RouterProvider,NavLink } from "react-router-dom";

const Main = () => {
    const [showHomeOption, setHomeOption] = useState(false);
    const [showCategoryOption, setCategoryOption] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [storeVideoId, setStoreVideoId] = useState("");
    const videoRef = useRef();

  const onHomeClickHandler = () => {
    setHomeOption((prev) => !prev);
  };

  const onCategoryClickHandler = () => {
    setCategoryOption((prev) => !prev);
  };

  function handleVideoPlay(vd) {
    console.log("handleVideoPlay");
    setStoreVideoId(vd);
  }

  function handleVideoPause(vd) {
    console.log("handleVideoPlay");
    setStoreVideoId("");
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    console.log("index: ", index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const customVideoPlay = () => {
    console.log("customVideoPlay");
    videoRef.current.pause();
    setTimeout(() => {
      videoRef.current.play();
    }, 2000);
  };

  return (
    <div className="App">
      <nav className="header-nav">
        <h4>prime video</h4>
        <div
          className={`home${showHomeOption ? " back" : ""}`}
          onClick={onHomeClickHandler}
        >
          <p>
            Home <i class="fa-solid fa-caret-down"></i>
          </p>
          {showHomeOption && (
            <div className={`home-options${showHomeOption ? " back" : ""}`}>
              <span>All</span>
              <span>Movies</span>
              <span>TV Shows</span>
            </div>
          )}
        </div>
        <p>Store</p>
        <p>Live TV</p>
        <div onClick={onCategoryClickHandler}>
          <p>
            Categories <i class="fa-solid fa-caret-down"></i>
          </p>
        </div>
        <p>My Stuff</p>
        <i class="fa-solid fa-magnifying-glass"></i>
        <div className="profile-image"></div>
      </nav>
      {showCategoryOption && (
        <div className="categories-list">
          <div className="categories-list_heading">
            <div>
              <p>Genres</p>
            </div>
            <ul>
              <li>Action and adventure</li>
              <li>Action and adventure</li>
              <li>Action and adventure</li>
              <li>Action and adventure</li>
              <li>Action and adventure</li>
            </ul>
          </div>
          <div className="categories-list_heading">
            <div>
              <p>Featured Collection</p>
            </div>
            <ul>
              <li>Action and adventure</li>
              <li>Action and adventure</li>
              <li>Action and adventure</li>
            </ul>
          </div>
        </div>
      )}
      <div className="main-images">
        <ul>
          {MAIN_DETAILS.map((data,index) => {
            return (
              <li
                className={`playanimation${
                  data.videosrc === storeVideoId ? " pauseanimation" : ""
                }`}
                onMouseEnter={() => handleVideoPlay(data.videosrc)}
                onMouseLeave={() => handleVideoPause(data.videosrc)}
              >
                <div>
                  {data.videosrc === storeVideoId &&
                    data.videosrc.trim() !== "" && (
                      <Fragment>
                        <article></article>
                        <video
                          ref={videoRef}
                          id="video"
                          autoPlay
                          muted
                          loop
                          src={data.videosrc}
                          data-testid="preroll-player"
                          preload="auto"
                        ></video>
                      </Fragment>
                    )}
                  <img
                    className={
                      data.videosrc === storeVideoId ? "blurimage" : ""
                    }
                    alt="Dry Day"
                    src={data.picsrc}
                  />
                  <section className="main-images-title">
                    <h3>#1 in India</h3>
                    <img alt="Dry Day" src={data.titleimg} />
                    <h3>Included with prime</h3>
                    <div className="main-controls">
                      <NavLink to={`${index}`} path="/" ><i class="fa-solid fa-play"></i></NavLink>
                      <p>Play</p>
                      <i class="fa-solid fa-plus"></i>
                      <i class="fa-solid fa-circle-info"></i>
                    </div>
                  </section>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="continue-container" onMouseLeave={handleMouseLeave}>
        {ContinueWatching.map((picture, index) => (
          <>
            <div key={index} onMouseEnter={() => handleMouseEnter(index)}>
              {hoveredIndex == index ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    maxWidth: "540px", // Default max-width
                    width: "260px", // Default width
                    "@media (max-width: 28em)": {
                      width: "260px",
                    },
                    "@media (max-width: 55em)": {
                      width: "260px",
                    },
                    "@media (max-width: 80em)": {
                      width: "390px",
                    },
                    "@media (max-width: 100em)": {
                      width: "390px",
                    },
                    "@media (max-width: 150em)": {
                      width: "540px",
                    },
                  }}
                >
                  <source src={picture.video.src} />
                </video>
              ) : (
                <picture>
                  <source
                    type={picture.source1.type}
                    srcSet={picture.source1.srcset}
                    sizes={picture.source1.sizes}
                  ></source>
                  <source
                    type={picture.source2.type}
                    srcSet={picture.source2.srcset}
                    sizes={picture.source2.sizes}
                  ></source>
                  <img
                    alt=""
                    style={{ aspectRatio: 16 / 9 }}
                    src={picture.image.src}
                    data-testid={picture.image["data-testid"]}
                    loading={picture.image.loading}
                  />
                </picture>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
