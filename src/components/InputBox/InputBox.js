import React from "react";
import "./InputBox.css";

const InputBox = ({ work, onChange, onSubmit }) => {
  return (
    <div className="input_box">
        <input type="text" name="work" id ="input_focus" onChange={onChange} value={work} autoFocus/>
        <button className="input_btn" onClick={onSubmit}>save</button>
    </div>
  );
};

export default InputBox;