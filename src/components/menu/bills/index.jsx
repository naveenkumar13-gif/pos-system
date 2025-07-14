import { Button } from "antd";
import React from "react";
import { buttonStyle, CartStyle } from "../../../pages";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";


function Bills() {
  const CartData = useSelector((state) => state.cart.cart);

  const TaxRate = 5.25;
  // const tax = (total * TaxRate) / 100;
  // const grandTotal = total + tax;
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-5">
        <p className="text-xs text-[#ababab] font-medium mt-2">
          Items({CartData.length})
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${3232}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1 w-full">
        <p className="text-xs text-[#ababab] font-medium mt-2">Tax(5.25%)</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">${3232}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1 w-full">
        <p className="text-xs text-[#ababab] font-medium mt-2">
          Total With Tax
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">{21}</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-3  gap-4">
        <Button
          className={`bg-[#1f1f1f] hover:!bg-[#1f1f1f] hover:!text-[#f5f5f5] w-full ${buttonStyle}`}
        >
          Cash
        </Button>
        <Button
          className={`bg-[#1f1f1f] hover:!bg-[#1f1f1f] hover:!text-[#f5f5f5]  w-full ${buttonStyle}`}
        >
          Online
        </Button>
      </div>
      <div className="flex items-center justify-between px-5 mt-3  gap-4">
        <Button
          className={` bg-[#f6b100] hover:!bg-[#f6b100]  !text-[#ffff]  w-full ${buttonStyle}`}
        >
          Print Receipt
        </Button>
        <Button
          className={` bg-[#025cca] hover:!bg-[#025cca] hover:!text-[#f6b100]   w-full !text-[#ffff] ${buttonStyle}`}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default Bills;
