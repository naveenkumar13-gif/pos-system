import React from "react";
import { Footer, MenuContainer } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { BackwardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import CustomerInfo from "../../components/menu/customerInfo";
import Cart from "../../components/menu/cart";
import Bills from "../../components/menu/bills";
import { useSelector } from "react-redux";
function Menu() {
  const navigate = useNavigate();
  const customerData = useSelector((state) => state.customer);

  return (
    <section className="bg-[#1a1a1a]  flex  gap-8  border-t border-gray-50/90 px-8  ">
      <div className="flex-[3]">
        <div className="flex justify-between items-center ">
          <div className="flex  items-center justify-between">
            <div
              className="flex items-center gap-4 cursor-pointer py-4 "
              onClick={() => navigate(-1)}
            >
              <BackwardOutlined className="bg-[#025cca] p-3 text-xl font-bold text-[#f5f5f5] rounded-full animate-slideX" />
              <h1 className="text-[#f9e9e9] text-2xl font-semibold">Menu</h1>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-white text-2xl"
              />

              <div className="flex flex-col items-start">
                <h1 className="text-[#f5f5f5] text-xl font-bold uppercase">
                  {customerData.customerName || "Customer Name"}
                </h1>
                <p className="text-[#ababab] text-sm font-medium">
                  {customerData.tableNo || "Table No"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      <div className="flex-[1] flex flex-col items-start  bg-[#2a2a2a]  h-[800px]">
        {/* <SubHeading title="Menu" /> */}
        <CustomerInfo />
        <hr className="border-t border-[#3a3a3a] my-4  w-full" />
        <Cart />
        <hr className="border-t border-[#3a3a3a] my-4  w-full" />
        <Bills />
      </div>

      <Footer />
    </section>
  );
}

export default Menu;
