import React from "react";
import { formatDate, getAvatarName } from "../../../utils";
import { Button } from "antd";
import { useSelector } from "react-redux";

const CustomerInfo = () => {
  const customerData = useSelector((state) => state.customer);
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wider uppercase text-2xl">
          {customerData.customerName || "Customer Name"}
        </h1>
        <p className="text-[#ababab] text-sm font-medium mt-1">
          {customerData.orderId}
        </p>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          {formatDate(new Date())}
        </p>
      </div>
      <Button className="bg-[#f6b100] hover:!bg-[#f6b100] hover:!text-[#f5f5f5] hover:!border-[#f6b100] !border-none !outline-none text-[#f5f5f5] px-4 py-5 font-bold text-2xl">
        {getAvatarName(customerData.customerName) || "CN"}
      </Button>
    </div>
  );
};

export default CustomerInfo;
