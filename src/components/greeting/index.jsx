import React, { useEffect, useState } from "react";
import { formatDate, formatDateAndTime } from "../../utils";

function Greeting() {
  return (
    <div className="flex  justify-between  mt-5 px-8 text-white ">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wider">
          Good Morning, Naveen
        </h1>
        <p className="text-[#ababab] text-sm">
          Give your best service for your customer
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#f5f5f5] text-3xl font-bold ">
          {formatDateAndTime(new Date())}
        </h1>
        <p className="text-[#ababab] ">{formatDate(new Date())}</p>
      </div>
    </div>
  );
}

export default Greeting;
