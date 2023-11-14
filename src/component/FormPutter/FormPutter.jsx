import React, { useRef } from "react";
import file from "/images/file.svg";
import "./FormPutter.css"; // Import your CSS file for styling
import { FaFile } from "react-icons/fa"; // Import a file icon from a library like react-icons

export default function FormPutter({ onFileChange }) {
const fileInputRef = useRef(null);

const handleIconClick = () => {
  fileInputRef.current.click();
};

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  onFileChange(selectedFile);
};

return (
  <div className="File_num">
        <label>
        Reference letter (Limit to 200 words).
        </label>
        <div className="FileInputContainer">
               <div className="File_container">
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    />
                    <label htmlFor="fileInput" className="FileInputLabel">
                        <img src={file} className="FileIcon" onClick={handleIconClick}/>   
                    </label>
               </div>
                <div className="File_conton">
                    <p><span> Browse</span> & upload reference letter .pdf, doc or jpeg </p>
                </div>
        </div>
  </div>
);
}



