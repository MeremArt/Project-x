import React from  "react";
import "./FormInput.css";


export default function FormInput({id, placeholder, type, title}) {
    return (
      <div>
        <span className= "Form_container">
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
    )
  }
  