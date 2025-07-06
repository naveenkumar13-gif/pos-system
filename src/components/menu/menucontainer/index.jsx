import React, { useState } from "react";
import { menus } from "../../../constant";
import { GrRadialSelected } from "react-icons/gr";
import { Button } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { buttonStyle } from "../../../pages";

function MenuContainer() {
  const [slectedMenu, setSelectedMenu] = useState(menus[0]); // 1st logic
  const [itemCount, setItemCount] = useState(0); // 2nd logic
  const [itemId, setItemId] = useState(0); // 3rd logic

  const increaseGuestCount = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };
  const decreaseGuestCount = (id) => {
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="grid grid-cols-4  py-4  gap-4 w-full">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start p-4 rounded-lg cursor-pointer justify-between h-[100px]"
            style={{ backgroundColor: menu.bgColor }}
            onClick={() => {
              setSelectedMenu(menu);
              setItemCount(0);
            }}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>
              {slectedMenu.id === menu.id && (
                <GrRadialSelected className="text-white text-2xl" />
              )}
            </div>
            <p className="text-[#ababab] text-sm font-semibold">
              {menu.items.length} Items
            </p>
          </div>
        ))}
      </div>
      <hr className="border-[#2a2a2a] birder-t-2 mt-4" />
      <div className="grid grid-cols-4  py-4  gap-4 w-full">
        {slectedMenu.items.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[150px] bg-[#2a2a2a] hover:bg-[#1a1a1a]/80 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.name}
              </h1>
              <Button
                className={` w-auto bg-[#2a2a2a] hover:!bg-[#2a2a2a] ${buttonStyle}`}
              >
                <FaShoppingCart className="text-[#f6b100] text-2xl" />
              </Button>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[#ababab] text-lg font-bold">
                {menu.price} Rs
              </p>

              <div className="flex items-center p-2 justify-between bg-[#2a2a2a]">
                <Button
                  className="text-[#f6b100] text-2xl border-none bg-transparent hover:!bg-transparent hover:!text-[#f6b100]"
                  onClick={() => decreaseGuestCount(menu.id)}
                >
                  -
                </Button>
                <span
                  className="text-gray-100
            "
                >
                  {" "}
                  {menu.id === itemId ? itemCount : 0}
                  {/* {itemCount} */}
                </span>
                <Button
                  className="text-[#f6b100] text-2xl border-none bg-transparent hover:!bg-transparent hover:!text-[#f6b100]"
                  onClick={() => increaseGuestCount(menu.id)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuContainer;
