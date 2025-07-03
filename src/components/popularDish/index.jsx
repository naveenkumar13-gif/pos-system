import React from "react";
import { popularDishes } from "../../constant";

function PopularDish() {
  return (
    <div className="mt-6 ">
      <div className="bg-[#0a0a0a] w-full p-6 ">
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-[#f5f5f5] text-lg font-semibold">Popular Dish</h1>
          <a href="#f" className="text-[#f6b100] font-semibold text-sm">
            View All
          </a>
        </div>
        <div className="h-[1020px] ">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex items-center gap-4 bg-[#1f1f1f]  p-4 border border-[#1f1f1f] rounded-md  mt-2"
            >
              <h1 className="text-white text-2xl">
                {dish.id < 10 ? `0${dish.id}` : `${dish.id}`}
              </h1>
              <div className="w-[50px] ">
                <img
                  src={dish.image}
                  alt="images"
                  className="w-full rounded-md"
                />
              </div>

              <div className="">
                <h1 className="text-[#f5f5f5] font-semibold">{dish.name}</h1>
                <p className="text-[#f5f5f5] text-sm">${dish.numberOfOrders}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDish;
