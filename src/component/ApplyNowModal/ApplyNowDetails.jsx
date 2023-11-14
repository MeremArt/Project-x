import React from 'react';
import "./ApplyNow.css";
import HeaderModal from './HeaderModal';
import FormInput from "../FormInput/FormInput.jsx";
import FormSelect from "../FormSelect/FormSelect.jsx";
import FormTextArea from "../FormTextArea/FormTextArea.jsx";
import Exclamation from "/images/ExclamationMark.svg";
import FormPutter from "../FormPutter/FormPutter.jsx";

export default function ApplyNowDetails({OffFire}) {
  return (
    <div className='Main_container'>
        <HeaderModal OffFire={OffFire}/>
        <form>
        <div className="display_container">
            <FormInput
                type="text"
                title="First Name"
                id="First Name"
                placeholder="Enter First Name"
                className="a"
            />
             <FormInput
                type="text"
                title="Last Name"
                id="Last Name"
                placeholder="Enter Last Name"
                className="b"
            />
            <FormSelect
                title="Gender"
                namen= "gender"
                secondTitle= "select your gender"
                option1="Male"
                option2="Female"
                option3="Others"
                placeholder="select your gender"
                size= "3"
                className="c"
            />
            <FormInput
                type="text"
                title="Moblie number"
                id="Mobile Name"
                placeholder="Enter Mobile number"
                className="d"
            />
            <FormInput
                type="text"
                title="Email address"
                id="Email address"
                placeholder="Enter Email Address"
                className="e"

            />
             <FormSelect
                title="City"
                namen= "city"
                secondTitle= "select city"
                option1="Lagos"
                option2="Abuja"
                option3="Enugu"
                option4="Jos"
                option5="Benin"
                className="f"
            />
             <FormInput
                type="text"
                title="Residential address"
                id="Residential address"
                placeholder="Enter Residential address"
                className="g"
            />
         <FormSelect
                title="Education level"
                namen= "Education level"
                secondTitle= "select Education level"
                option1="Undergraduate"
                option2="Graduate"
                option3="Masters"
                option4="PHD"
                option5="Professor"
                className="h"
            />
             <FormInput
                type="text"
                title="Occupation"
                id="Occupation"
                placeholder="Enter Occupation"
                className="i"
            />
        </div>
        <div className="Bottom_container">
        <FormTextArea
             type="text"
             title="How would you describe yourself in 200 words?"
             id="Occupation"
             placeholder="Tell us about yourself (Limit to 200 words) Occupation"
             className="ab"
            />
            <FormTextArea
             type="text"
             title="Why do you want to participate in the prodigy path? "
             id="Occupation"
             placeholder=" Tell us why you want to participate (Limit to 200 words)"
             className="cd"
            />
            <FormTextArea
             type="text"
             title="What’s your plan after the project?"
             id="Occupation"
             placeholder=" How do you plan to utilise the skills, knowledge, and experiences gained from this project to impact your future and the society at large?"
             className="ef"
            />
            {/* <FormTextArea
             type="text"
             title="Reference letter (Limit to 200 words)."
             id="Occupation"
             placeholder="Reference letter (Limit to 200 words)."
             className="gh"
            /> */}
            <FormPutter/>
        </div>
            <div className='divine'>
                <div className="Exclamationy">
                    <img src={Exclamation} alt="Exclamation"/>
                    <span>Only shortlisted candidates will be contacted for further evaluation and selection.</span>
                </div>
               
            </div>
            <div className='back_color'></div>
            <div className="Button_last">
                <button className='cancel'onClick={OffFire}>Cancel</button>
                <button className='Apply'>Apply now</button>
            </div>
        </form>
    </div>
  )
}
