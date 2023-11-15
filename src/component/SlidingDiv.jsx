import React, { useState, useEffect } from "react";
import "./SlidingDiv.css"; // Import your CSS

function SlidingDiv({fire}) {
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, 5000);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="sliding-div-container">
      <div className={`content-above ${isUp ? "hidden" : ""}`}>
        <br />
        <center>
          <h2>Grab a seat</h2>
          <br />
          <p className="container">
            The X factor is the differentiating quality that sets you apart from
            the crowd and gives you an edge in the grand scheme of things, got
            the <strong>X-Factor?</strong>{" "}
          </p>
          <br />
          <br />
          <button id="btn-animation" className="btb" onClick={fire}>
            Apply now
          </button>
          <br />
        </center>
      </div>
      <div className={`sliding-div ${isUp ? "up" : "down"}`}>
        <div className={`content ${isUp ? "fading" : ""}`}>
          {/* <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698603113/Frame_855_nlab4q.png"
            alt="Image"
            height={210}
            width={200}
          /> */}
        </div>
      </div>
      <div className={`content-below ${isUp ? "" : "hidden"}`}>
        <center>
          <br />
          <br />
          <h2>THE X-FACTOR</h2>
          <br />

          <br />
          <p className="container">
            Find out what it takes to sponsored be or get a scholarship through
            Project <strong>X</strong> program{" "}
          </p>
        </center>
      </div>
    </div>
  );
}

export default SlidingDiv;
