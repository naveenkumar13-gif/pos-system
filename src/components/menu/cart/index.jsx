import React, { use, useEffect, useRef } from "react";
import { Ri24HoursFill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TbTrash } from "react-icons/tb";
import { removeItem } from "../../../redux/cartSlice";
function Cart() {
  const cartData = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  const handleRmove = (item) => {
    dispatch(removeItem({ id: item }));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);
  return (
    <div className="px-4 py-2 w-full">
      <h1 className=" text-[#ababab] font-medium text-lg ">Order Details</h1>
      <div
        className="mt-4 overflow-y-scroll scrollbar-hide h-[300px]"
        ref={scrollRef}
      >
        {cartData.length === 0 ? (
          <p className="text-[#ababab] font-medium text-lg  flex items-center justify-center h-[200px]">
            Your cart is empty{" "}
          </p>
        ) : (
          cartData.map((item, index) => (
            <div
              className="bg-[#1f1f1f] rounded-lg p-4 mb-3  space-y-2  "
              key={index}
            >
              <div className="flex items-center justify-between">
                <h1 className=" text-[#ababab] font-medium text-lg ">
                  {item.name}
                </h1>
                <p className="text-[#ababab] font-semibold">{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between  ">
                <div className="flex items-center gap-3">
                  <TbTrash
                    className="text-[#ababab] cursor-pointer size-6"
                    onClick={() => handleRmove(item.id)}
                  />

                  <FaNotesMedical className="text-[#ababab] cursor-pointer size-6" />
                </div>
                <p className="text-[#ababab] font-semibold text-md">
                  {item.totalPrice}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
