import "./styles.css";
import { useState, useEffect } from "react";
import { ContinueWatching } from "./util";

export default function App() {
  const [showHomeOption, setHomeOption] = useState(false);
  const [showCategoryOption, setCategoryOption] = useState(false);
  const onHomeClickHandler = () => {
    setHomeOption((prev) => !prev);
  };

  const onCategoryClickHandler = () => {
    setCategoryOption((prev) => !prev);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    console.log('index: ', index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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
          <li>
            <div>
              <img
                alt="Dry Day"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_DryDay/2446cce1-703a-4242-a0d3-9eff615b86f6._UR3840,1440_SX2880_FMjpg_.jpeg"
              />
            </div>
            <section className="main-images-title">
              <h3>#1 in India</h3>
              <img
                alt="Dry Day"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_DryDay/07045e85-add0-43cf-9922-e664b5cf5e15._AC_SX1000_FMpng_.png"
              />
              <h3>Included with prime</h3>
              <div className="main-controls">
                <i class="fa-solid fa-play"></i>
                <span>Play</span>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-circle-info"></i>
              </div>
            </section>
          </li>
          <li>
            <div>
              {/* <video
                controls
                src="https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/7cc0/ba1a/4752/4f00-859f-3e653bb3c359/c85d0241-c2b3-4531-b129-4e94e15e96ef_video_720p_2500kbps_audio_aaclc_128kbps.mp4"
                data-testid="preroll-player"
                preload="auto"
              ></video> */}
              <img
                alt="Dry Day"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Flames_S4/3b2b49dd-650b-41db-86ef-4ffd7006d62b._UR3840,1440_SX2880_FMjpg_.jpeg"
              />
            </div>
            <section className="main-images-title">
              <h3>#1 in India</h3>
              <img
                alt="Dry Day"
                src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_DryDay/07045e85-add0-43cf-9922-e664b5cf5e15._AC_SX1000_FMpng_.png"
              />
              <h3>Included with prime</h3>
              <div className="main-controls">
                <i class="fa-solid fa-play"></i>
                <span>Play</span>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-circle-info"></i>
              </div>
            </section>
          </li>
        </ul>
      </div>
      <div className="continue-container"
           onMouseLeave={handleMouseLeave}
      >
        {ContinueWatching.map((picture, index) => (
            <>
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                  {hoveredIndex == index ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          maxWidth: '540px', // Default max-width
                          width: '260px',    // Default width
                          '@media (max-width: 28em)': {
                            width: '260px',
                          },
                          '@media (max-width: 55em)': {
                            width: '260px',
                          },
                          '@media (max-width: 80em)': {
                            width: '390px',
                          },
                          '@media (max-width: 100em)': {
                            width: '390px',
                          },
                          '@media (max-width: 150em)': {
                            width: '540px',
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
                        style={{ "aspectRatio": 16 / 9 }}
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
}
