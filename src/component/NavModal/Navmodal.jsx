import React from "react";
import "./Navmodal.css";

export default function Navmodal({fire, setToggleMenu}) {
const ApplyNowHandler =()=>{
  setToggleMenu((prev)=>(!prev));
  fire();
}
  return (
    <main className="Main_modal">
      <div className="Modal_container">
        <ul className="Modal_list">
          <li>About us</li>
          <li> Program pillars</li>
          <li>Workshop</li>
          <li>Volunteer</li>
          <li onClick={ApplyNowHandler} >Apply now</li>
        </ul>
      </div>
    </main>
  );
}
