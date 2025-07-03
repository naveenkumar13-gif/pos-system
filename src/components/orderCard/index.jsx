import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

function OrderCard() {
  const currentTime = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatTime = currentTime.toLocaleTimeString([], options);
  return (
    <div className="w-full  bg-[#262626] p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between gap-6 ">
        <div className="flex gap-4 items-center ">
          <button className="bg-[#f6b100] p-3 text-xl font-bold text-[#f5f5f5] rounded-md">
            Am
          </button>
          <div className="flex items-center flex-col  text-white ">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wider">
              naveen
            </h1>
            <p className="text-[#ababab] text-sm ">#101/ Dine</p>
          </div>
        </div>

        <div className="flex items-center flex-col text-white gap-2">
          <p className=" text-green-800 flex gap-3 items-center p-2 rounded-md bg-green-500">
            {" "}
            <FontAwesomeIcon icon={faCheck} />
            <span>Ready</span>
          </p>
          <p className="text-[#ababab] text-sm  flex gap-3 items-center ">
            <FontAwesomeIcon icon={faCircle} style={{ color: "#0fa735" }} />
            <span>Ready to serve</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-[#ababab]">
        <p>{formatTime}</p>
        <p>8 Items</p>
      </div>
      <hr className="mt-4 w-full border-t border-gray-500" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] font-semibold">Total:</h1>
        <p className="text-[#f5f5f5] font-bold">$300</p>
      </div>
    </div>
  );
}

export default OrderCard;
