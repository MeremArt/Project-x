import React, { useState } from "react";
import ApplyNowDetails from "./ApplyNowDetails";
import Success from "./Success";
import "./Main.css";

export default function MainApplyNow({ OffFire, clickPosition }) {
  const [changeEvent, setChangeEvent] = useState("ApplyNow");

  const modalStyle = {
    position: "fixed",
    top: clickPosition ? "3px" : "50%",
    height: "-webkit-fill-available",

    left: "0",

    animation: "fadeInUp 0.5s ease-in-out",
  };

  return (
    <main className="Main" id="yourModalId" style={modalStyle}>
      {changeEvent ? (
        <ApplyNowDetails setChangeEVent={setChangeEvent} OffFire={OffFire} />
      ) : (
        <Success OffFire={OffFire} />
      )}
    </main>
  );
}
