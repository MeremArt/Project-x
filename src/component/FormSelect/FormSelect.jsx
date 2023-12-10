import React from "react";

import "./FormSelect.css";

export default function FormSelect({
  title,
  namen,
  secondTitle,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
  option11,
  option12,
  option13,
  option14,
  option15,
  option16,
  option17,
  option18,
  option19,
  option20,
  option21,
  option22,
  option23,
  option24,
  option25,
  placeholder,
}) {
  return (
    <div className="FormSelect_container">
      <label htmlFor={namen}>{title}</label>
      <select name={namen} id={namen}>
        <option value="" disabled selected>
          {placeholder || secondTitle}
        </option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
        <option value={option5}>{option5}</option>
        <option value={option6}>{option6}</option>
        <option value={option7}>{option7}</option>
        <option value={option8}>{option8}</option>
        <option value={option9}>{option9}</option>
        <option value={option10}>{option10}</option>
        <option value={option11}>{option11}</option>
        <option value={option12}>{option12}</option>
        <option value={option13}>{option13}</option>
        <option value={option14}>{option14}</option>
        <option value={option15}>{option15}</option>
        <option value={option16}>{option16}</option>
        <option value={option17}>{option17}</option>
        <option value={option18}>{option18}</option>
        <option value={option19}>{option19}</option>
        <option value={option20}>{option20}</option>
        <option value={option21}>{option21}</option>
        <option value={option22}>{option22}</option>
        <option value={option23}>{option23}</option>
        <option value={option24}>{option24}</option>
        <option value={option25}>{option25}</option>
      </select>
    </div>
  );
}
