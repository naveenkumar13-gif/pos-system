import React from "react";
import { Button } from "antd";

const CustomButton = ({ children, onClick, className = ""}) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-[#f6b100] bottom-5 rounded-full p-3 items-center text-[#f5f5f5] ${className}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
