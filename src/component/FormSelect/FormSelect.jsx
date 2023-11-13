import React from "react";

import "./FormSelect.css"

export default function FormSelect({
    title,
    namen,
    secondTitle,
    option1,
    option2,
    option3,
    option4,
    option5,
    placeholder
}) {
    return (
      <div className="FormSelect_container">
     <label for="lang">{title}</label>
      <select name={namen } id={namen} placeholder={placeholder}>
        <option value="select">{secondTitle}</option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
        <option value={option5}>{option5}</option>
      </select>
      </div>
    )
  }
  