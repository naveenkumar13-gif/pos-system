import React from "react";
import { inputStyle, lableStyle } from "../../pages";

function Input({ label, placeholder, type = "text", ...props }) {
  return (
    <div>
      <label className={lableStyle}>{label}</label>
      <div className="flex items-center p-2">
        <input type={type} placeholder={placeholder} className={inputStyle} {...props} />
      </div>
    </div>
  );
}

export default Input;

