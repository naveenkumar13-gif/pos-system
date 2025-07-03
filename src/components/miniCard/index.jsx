import React from "react";

function MiniCard({ title, icon, number, footerNum }) {
  return (
    <div className="bg-[#0a0a0a] p-5 rounded-lg w-1/2">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-[#f5f5f5] text-2xl font-semibold">{title}</h1>
        <button
          className={`${
            title === "Total Sales"
              ? "bg-green-500 rounded-md"
              : "bg-[#f6b100] rounded-md"
          } p-3 rounded-md text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div className="flex flex-col  gap-2 mt-5">
        <h1 className="text-[#f5f5f5] text-3xl font-bold">{title ==="Total Earning" ? `${number}`:number }</h1>
        <h1 className="text-[#f5f5f5] text-lg">
          <span className="text-[#02ca3a]">{footerNum}%</span> than yesterday
        </h1>
      </div>
    </div>
  );
}

export default MiniCard;
