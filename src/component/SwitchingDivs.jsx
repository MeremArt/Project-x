import React, { useState, useEffect } from "react";
import "./SwitchingDivs.css";

function SwitchingDivs() {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const interval = setInterval(switchDiv, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeDiv]);

  const switchDiv = () => {
    setActiveDiv((prevActive) => (prevActive === 1 ? 2 : 1));
  };

  return (
    <div className="aontainer">
      <div className="box-container">
        <div className={`box ${activeDiv === 1 ? "active" : ""}`}>Div 1</div>
        <div className={`box ${activeDiv === 2 ? "active" : ""}`}>Div 2</div>
      </div>
      {activeDiv !== 1 && <div className="text">Div 1 is inactive</div>}
      {activeDiv !== 2 && <div className="text">Div 2 is inactive</div>}
      {activeDiv === 1 ? (
        <div className="text">This is the text for Div 1</div>
      ) : (
        <button className="apply-button">Apply for Div 1</button>
      )}{" "}
      {activeDiv === 2 ? (
        <div className="text">This is the text for Div 2</div>
      ) : (
        <button className="apply-button">Apply for Div 2</button>
      )}
    </div>
  );
}

export default SwitchingDivs;
