import React from "react";
import "./FormTextArea.css";

export default function FormTextArea({id, placeholder, type, title}) {
    return (
      <div>
         <div>
        <span className= "FormTextArea">
            <label
            htmlFor={id}
            >
                {title}
            </label>
            <input
                type={type}
                placeholder={placeholder}

            />
        </span>
      </div>
      </div>
    )
  }
  