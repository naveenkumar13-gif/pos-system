import React from "react";
import Footer from "../../components/footer";
import OrderCard from "../../components/orderCard";


import SubHeading from "../../components/sub-heading";

function Orders() {

  return (
    <section className="bg-[#1a1a1a]   border-t border-gray-50/90 px-8 h-full ">
    <SubHeading title="Orders"/>
      <div className="grid grid-cols-3 gap-6 py-4  scrollbar-hide h-[calc(100vh-5rem-5rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
    
  
      </div>
      <Footer />
    </section>
  );
}

export default Orders;
