import React, { useState } from "react";
import { menus } from "../../../constant";
import { GrRadialSelected } from "react-icons/gr";
import { Button } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { buttonStyle } from "../../../pages";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";

function MenuContainer() {
  const [slectedMenu, setSelectedMenu] = useState(menus[0]); // 1st logic
  const [itemCount, setItemCount] = useState(0); // 2nd logic
  const [itemId, setItemId] = useState(0); // 3rd logic
  const [cartItems, setCartItems] = useState([]);
  const dispath = useDispatch();

  const increaseGuestCount = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };
  const decreaseGuestCount = (id) => {
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddToCart = (item) => {
    if (itemCount === 0) return;
    const newItem = {
      id: new Date().getTime(),
      name: item.name,
      quantity: itemCount,
      price: item.price,
      totalPrice: itemCount * item.price,
    };
    dispath(addItem(newItem));
    setItemCount(0);
    console.log(newItem);
  };
  return (
    <>
      <div className="grid grid-cols-4  py-4  gap-4 w-full">
        {menus.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start p-4 rounded-lg cursor-pointer justify-between h-[100px]"
            style={{ backgroundColor: item.bgColor }}
            onClick={() => {
              setSelectedMenu(item);
              setItemCount(0);
            }}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {item.icon} {item.name}
              </h1>
              {slectedMenu.id === item.id && (
                <GrRadialSelected className="text-white text-2xl" />
              )}
            </div>
            <p className="text-[#ababab] text-sm font-semibold">
              {item.items.length} Items
            </p>
          </div>
        ))}
      </div>
      <hr className="border-[#2a2a2a] birder-t-2 mt-4" />
      <div className="grid grid-cols-4  py-4  gap-4 w-full h-[400px]">
        {slectedMenu.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[150px] bg-[#2a2a2a] hover:bg-[#1a1a1a]/80 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center justify-between  w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {item.name}
              </h1>
              <Button
                className={`  bg-[#2a2a2a] hover:!bg-[#2a2a2a] ${buttonStyle}`}
                onClick={() => handleAddToCart(item)}
              >
                <FaShoppingCart className="text-[#f6b100] text-2xl" />
              </Button>
            </div>
            <div className="flex items-center justify-between w-full">
              <p className="text-[#ababab] text-lg font-bold">
                {item.price} Rs
              </p>
              <div className="flex items-center p-2 justify-between bg-[#2a2a2a] ">
                <Button
                  className="text-[#f6b100] text-2xl border-none bg-transparent hover:!bg-transparent hover:!text-[#f6b100]"
                  onClick={() => decreaseGuestCount(item.id)}
                >
                  -
                </Button>
                <span
                  className="text-gray-100
            "
                >
                  {" "}
                  {item.id === itemId ? itemCount : 0}
                  {/* {itemCount} */}
                </span>
                <Button
                  className="text-[#f6b100] text-2xl border-none bg-transparent hover:!bg-transparent hover:!text-[#f6b100]"
                  onClick={() => increaseGuestCount(item.id)}
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
