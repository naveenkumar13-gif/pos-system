import React, { useState } from "react";
import Footer from "../../components/footer";

function Orders() {
  const [apply, setApply] = useState(0);
  const tabs = ["All", "In Progress", "Ready", "Completed"];
  return (
    <section className="bg-[#1a1a1a]   border-t border-gray-50/90 pt-2 h-screen  ">
      <div className="flex items-center justify-between gap-6 py-4 px-10">
        <h1 className="text-[#f9e9e9] text-2xl font-semibold">Orders</h1>
        <div className="flex items-center gap-4 justify-around">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setApply(index)}
              className={`text-white text-xl font-semibold p-2 ${
                apply === index ? "bg-[#343434] rounded-md " : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Orders;
