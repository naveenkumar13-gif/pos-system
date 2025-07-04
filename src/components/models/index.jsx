import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

function Model({ isOpen, title, children, onclose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-[#1a1a1a] rounded-lg shadow-lg w-full max-w-lg mx-4 p-4 ">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl text-[#f5f5f5] font-semibold">{title}</h2>
          <Button
            className="text-gray-500 text-2xl hover:text-gray-300"
            type="text"
          >
            <CloseOutlined
              onClick={onclose}
              className="!text-gray-200 hover:!text-gray-200 hover:!opacity-100 !transition-none"
            />
          </Button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default Model;
