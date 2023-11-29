import React from "react";
import "./FormTextArea.css";

export default function FormTextArea({ id, placeholder, type, title }) {
  return (
    <div>
      <div>
        <span className="FormTextArea">
          <label htmlFor={id}>{title}</label>
          {/* <input
                type={type}
                placeholder={placeholder}

            /> */}
          <textarea
            type={type}
            placeholder="Tell us about yourself (Limit to 200 words)"
          ></textarea>
        </span>
      </div>
    </div>
  );
}
