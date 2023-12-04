import React, { useState } from "react";
import "./ApplyNow.css";
import HeaderModal from "./HeaderModal";
import FormInput from "../FormInput/FormInput.jsx";
import FormSelect from "../FormSelect/FormSelect.jsx";
import FormTextArea from "../FormTextArea/FormTextArea.jsx";
import Exclamation from "/images/ExclamationMark.svg";
import FormPutter from "../FormPutter/FormPutter.jsx";

export default function ApplyNowDetails({ OffFire }) {
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [off, setOff] = useState(false);
  const [member, setMember] = useState(false);
  const [consider, setConsider] = useState(false);
  const handleChange = () => {
    setIsChecked(true);
    setChecked(false);
    setOff(false);
  };

  const handle2Change = () => {
    setIsChecked(false);
    setChecked(true);
    setOff(false);
  };

  const handle3Change = () => {
    setIsChecked(false);
    setChecked(false);
    setOff(true);
  };
  const handleMember = () => {
    setMember(true);
    setConsider(false);
  };
  const handleConsider = () => {
    setConsider(true);
    setMember(false);
  };
  return (
    <div className="Main_container">
      <HeaderModal OffFire={OffFire} />
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
            namen="gender"
            secondTitle="Select your gender"
            option1="Male"
            option2="Female"
            option3="Others"
            placeholder="Select your gender"
            size="3"
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
            namen="city"
            secondTitle="Select city"
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
            namen="Education level"
            secondTitle="Select Education level"
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
        </div>
        <div className="choose">
          <div>
            <div>
              <p>Choose one question</p>
              <div className="row_it">
                <div
                  className={`choose1 ${isChecked ? "selected" : ""}`}
                  onClick={handleChange}
                >
                  <h1 style={{ color: isChecked ? "#FCFCFC" : "black" }}>
                    What does it mean to you to be a well-rounded & productive
                    member of society?
                  </h1>
                  <div>
                    <input
                      className={`input_filled ${isChecked ? "selected" : ""}`}
                      type="checkbox"
                      checked={""}
                      onChange={""}
                    />
                  </div>
                </div>
                <div
                  className={`choose2 ${checked ? "selected" : ""}`}
                  onClick={handle2Change}
                >
                  <h1 style={{ color: checked ? "#FCFCFC" : "black" }}>
                    What would you consider your biggest achievement so far?
                  </h1>
                  <div>
                    <input
                      className={`input_filled ${checked ? "selected" : ""}`}
                      type="checkbox"
                      checked={""}
                      onChange={""}
                    />
                  </div>
                </div>
                <div
                  className={`choose3 ${off ? "selected" : ""}`}
                  onClick={handle3Change}
                >
                  <h1 style={{ color: off ? "#FCFCFC" : "black" }}>
                    What is the biggest investment you have made in yourself?
                  </h1>
                  <div>
                    <input
                      className={`input_filled ${off ? "selected" : ""}`}
                      type="checkbox"
                      checked={""}
                      onChange={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Text-container">
            <textarea
              className="Textarea"
              placeholder="Share your thoughts as you please limit to 500 words."
            />
          </div>
        </div>
        <br />
        <div className="choose">
          <div>
            <div>
              <p>Choose one question</p>
              <div className="row_it">
                <div
                  className={`choose1 ${member ? "selected" : ""}`}
                  onClick={handleMember}
                >
                  <h1 style={{ color: member ? "#FCFCFC" : "black" }}>
                    What does it mean to you to be a well-rounded & productive
                    member of society?
                  </h1>
                  <div>
                    <input
                      className={`input_filled2 ${member ? "selected" : ""}`}
                      type="checkbox"
                      checked={""}
                      onChange={""}
                    />
                  </div>
                </div>
                <div
                  className={`choose2 ${consider ? "selected" : ""}`}
                  onClick={handleConsider}
                >
                  <h1 style={{ color: consider ? "#FCFCFC" : "black" }}>
                    What would you consider your biggest achievement so far?
                  </h1>
                  <div>
                    <input
                      className={`input_filled2 ${consider ? "selected" : ""}`}
                      type="checkbox"
                      checked={""}
                      onChange={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Text-container">
            <textarea
              className="Textarea"
              placeholder="Share your thoughts as you please limit to 500 words."
            />
          </div>
        </div>

        <div className="Main_container">
          <div className="Bottom_container">
            <FormTextArea
              type="text"
              title="What would you see at the end of this project that would make you feel like the project was worth your while?"
              id="Occupation"
              placeholder=" How do you plan to utilise the skills, knowledge, and experiences gained from this project to impact your future and the society at large?"
              className="ef"
            />

            <FormPutter />
          </div>
        </div>
        <div className="back_color"></div>
        <div className="cover_white">
          <div className="fixed_div">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="divine">
                    <div className="Exclamationy">
                      <img src={Exclamation} alt="Exclamation" />
                      <span>
                        Only shortlisted candidates will be contacted for
                        further evaluation and selection.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="Button_last">
                    <button className="cancel" onClick={OffFire}>
                      Cancel
                    </button>

                    <button className="Apply">Submit Application</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
