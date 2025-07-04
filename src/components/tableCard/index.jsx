import React, { useEffect, useState } from "react";
import { heading } from "../../pages";
import { getBgColor } from "../../utils";

function TableCard({ name, status, initial, seats }) {

  return (
    <div className=" w-[400px] h-[200px] bg-[#262626] p-4 rounded-lg cursor-pointer shadow-md">
      <div className="flex items-center justify-between gap-6 ">
        <h1 className={heading}>{name}</h1>
        <div className="flex items-end flex-col text-white gap-2">
          <p
            className={`px-2 py-1 rounded-md ${
              status === "Booked"
                ? "bg-[#2e4a40] text-green-600"
                : "bg-[#f6b100] text-white"
            }`}
          >
            <span>{status}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 ">
        <h1
          className={`  p-4 rounded-full text-[#f5f5f5] text-2xl`}
          style={{ backgroundColor: getBgColor() }}
        >
          {initial}
        </h1>
      </div>
    </div>
  );
}

export default TableCard;
