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
  option26,
  option27,
  option28,
  option29,
  option30,
  option31,
  option32,
  option33,
  option34,
  option35,
  option36,
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
        <option value={option26}>{option26}</option>
        <option value={option27}>{option27}</option>
        <option value={option28}>{option28}</option>
        <option value={option29}>{option29}</option>
        <option value={option30}>{option30}</option>
        <option value={option31}>{option31}</option>
        <option value={option32}>{option32}</option>
        <option value={option33}>{option33}</option>
        <option value={option34}>{option34}</option>
        <option value={option35}>{option35}</option>
        <option value={option36}>{option36}</option>
      </select>
    </div>
  );
}
