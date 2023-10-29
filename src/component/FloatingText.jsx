import React, { useState, useEffect } from "react";
import "./SwitchingDivs.css";

const FloatingText = ({ children, div }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (div) {
        const divRect = div.getBoundingClientRect();
        setPosition({
          top: divRect.top + divRect.height / 2,
          left: divRect.left + divRect.width / 2,
        });
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [div]);

  return (
    <div className="text" style={{ top: position.top, left: position.left }}>
      {children}
    </div>
  );
};

export default FloatingText;
