import React from 'react';
import Xicon from "/images/svgx.svg";
import nogodere from "/images/nogodere.png";
import "./HeaderModal.css"

export default function HeaderModal({OffFire}) {
  return (
    <div className='Header_container'>
      <img src={Xicon} alt="x_icon"  onClick={OffFire}/>
        <div> <p>Apply to <img src={nogodere} alt="nogodere" /></p></div>
    </div>
  )
}
