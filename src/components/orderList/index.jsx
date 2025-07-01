import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

function OrderList() {
  return (
    <div className="flex items-center justify-between gap-6 ">
      <div className="flex gap-4 items-center ">
        <button className="bg-[#f6b100] p-3 text-xl font-bold text-[#f5f5f5] rounded-md">
          Am
        </button>
        <div className="flex items-center flex-col  text-white ">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wider">
            naveen
          </h1>
          <p className="text-[#ababab] text-sm ">8 items</p>
        </div>
      </div>
      <div className="flex items-center flex-col text-white gap-2">
        <p className="bg-green-300 text-green-600 flex gap-3 items-center p-2 rounded-md">
          {" "}
          <FontAwesomeIcon icon={faCheck} />
          <span>Ready</span>
        </p>
        <p className="text-[#ababab] text-sm  flex gap-3 items-center">
          <FontAwesomeIcon icon={faCircle} style={{ color: "#34C759" }} />
          <span>Ready to serve</span>
        </p>
      </div>
    </div>
  );
}

export default OrderList;
