import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BackwardOutlined } from "@ant-design/icons";
function SubHeading({ title, tabs = ["All", "In Progress", "Ready", "Completed"] }) {
    const [apply, setApply] = useState(0);

  const navigate = useNavigate();
  return (
        <div className="flex items-center justify-between gap-6 py-4">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <BackwardOutlined className="bg-[#025cca] p-3 text-xl font-bold text-[#f5f5f5] rounded-full animate-slideX" />
          <h1 className="text-[#f9e9e9] text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex items-center gap-4 justify-around">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setApply(index)}
              className={`text-white text-xl font-semibold p-2 ${
                apply === index ? "bg-[#343434] rounded-md" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
  )
}

export default SubHeading
