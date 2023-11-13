import React from 'react';
import HeaderModal from './HeaderModal';
import Ellipse9 from "/images/Ellipse9.svg";
import "./success.css";

export default function Success({OffFire}) {
  return (
    <div className='Main_container'>
        <HeaderModal OffFire={OffFire} />
        <div className='success_container'>
            <div className='success_1'>
                <img src={Ellipse9} alt="Ellipse9" />
                <h4>You’re on the waitlist!</h4>
            <p> Congratulations, your application to this cohort was successful, we would contact via email for next steps.</p>
            </div>
           
            <div className='success_2'>
                <button style={{backgroundColor:"#000", color: "#fff"}}>
                    Return to home 
                </button>
            </div>
        </div>
    </div>
  )
}
