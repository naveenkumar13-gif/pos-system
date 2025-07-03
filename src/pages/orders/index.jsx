import React, { useState } from "react";
import Footer from "../../components/footer";
import OrderCard from "../../components/orderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import BackButton from "../../components/backButton";
import { BackwardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [apply, setApply] = useState(0);
  const tabs = ["All", "In Progress", "Ready", "Completed"];
  const navigate = useNavigate();
  return (
    <section className="bg-[#1a1a1a]   border-t border-gray-50/90 px-8 h-full ">
      <div className="flex items-center justify-between gap-6 py-4">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <BackwardOutlined className="bg-[#025cca] p-3 text-xl font-bold text-[#f5f5f5] rounded-full animate-slideX"  rotate={0}/>
          <h1 className="text-[#f9e9e9] text-2xl font-semibold">Orders</h1>
        </div>
        <div className="flex items-center gap-4 justify-around">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setApply(index)}
              className={`text-white text-xl font-semibold p-2 ${
                apply === index ? "bg-[#343434] rounded-md" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 py-4  scrollbar-hide h-[calc(100vh-5rem-5rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <Footer />
    </section>
  );
}

export default Orders;
