import React from "react";
import { Ri24HoursFill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
function Cart() {
  return (
    <div className="px-4 py-2 w-full">
      <h1 className=" text-[#ababab] font-medium text-lg ">Order Details</h1>
      <div className="mt-4 overflow-y-scroll scrollbar-hide ">
        <div className="bg-[#1f1f1f] rounded-lg p-4  ">
          <div className="flex items-center justify-between">
            <h1 className=" text-[#ababab] font-medium text-lg ">
              chicken tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <Ri24HoursFill className="text-[#ababab] cursor-pointer size-6" />
              <FaNotesMedical className="text-[#ababab] cursor-pointer size-6" />
            </div>
            <p className="text-[#ababab] font-semibold text-md">$123</p>
          </div>
        </div>
      </div>
      <div className="mt-4 overflow-y-scroll scrollbar-hide ">
        <div className="bg-[#1f1f1f] rounded-lg p-4  ">
          <div className="flex items-center justify-between">
            <h1 className=" text-[#ababab] font-medium text-lg ">
              chicken tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <Ri24HoursFill className="text-[#ababab] cursor-pointer size-6" />
              <FaNotesMedical className="text-[#ababab] cursor-pointer size-6" />
            </div>
            <p className="text-[#ababab] font-semibold text-md">$123</p>
          </div>
        </div>
      </div>
      <div className="mt-4 overflow-y-scroll scrollbar-hide ">
        <div className="bg-[#1f1f1f] rounded-lg p-4  ">
          <div className="flex items-center justify-between">
            <h1 className=" text-[#ababab] font-medium text-lg ">
              chicken tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <Ri24HoursFill className="text-[#ababab] cursor-pointer size-6 w-full  " />
              <FaNotesMedical className="text-[#ababab] cursor-pointer size-6" />
            </div>
            <p className="text-[#ababab] font-semibold text-md">$123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
