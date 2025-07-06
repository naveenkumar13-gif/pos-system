import { Button } from "antd";
import React from "react";
import { buttonStyle, CartStyle } from "../../../pages";

function Bills() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-5">
        <p className="text-xs text-[#ababab] font-medium mt-2">Items(4)</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">$240</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1 w-full">
        <p className="text-xs text-[#ababab] font-medium mt-2">Total:</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">$283.20</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-3  gap-4">
        <Button
          className={`bg-[#1f1f1f] hover:!bg-[#1f1f1f] hover:!text-[#f5f5f5] ${buttonStyle}`}
        >
          Cash
        </Button>
        <Button
          className={`bg-[#1f1f1f] hover:!bg-[#1f1f1f] hover:!text-[#f5f5f5] ${buttonStyle}`}
        >
          Online
        </Button>
      </div>
      <div className="flex items-center justify-between px-5 mt-3  gap-4">
        <Button
          className={` bg-[#f6b100] hover:!bg-[#f6b100]  !text-[#ffff] ${buttonStyle}`}
        >
          Print Receipt
        </Button>
        <Button
          className={` bg-[#025cca] hover:!bg-[#025cca] hover:!text-[#f6b100]  !text-[#ffff] ${buttonStyle}`}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default Bills;
