import React from "react";
import { formatDate } from "../../../utils";
import { Button } from "antd";

const CustomerInfo = () => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wider">
          CUstomer Name
        </h1>
        <p className="text-[#ababab] text-sm font-medium mt-1">#101/nk</p>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          {formatDate(new Date())}
        </p>
      </div>
      <Button className="bg-[#f6b100] hover:!bg-[#f6b100] hover:!text-[#f5f5f5] hover:!border-[#f6b100] !border-none !outline-none text-[#f5f5f5] p-3 font-bold">
        CN
      </Button>
    </div>
  );
};

export default CustomerInfo;
