import React from "react";
import SubHeading from "../../components/sub-heading";
import Footer from "../../components/footer";
import TableCard from "../../components/tableCard";
import { tables } from "../../constant";

export default function Table() {
  return (
    <section className="bg-[#1a1a1a]   border-t border-gray-50/90 px-8 ">
      <SubHeading title="Tables" tabs={["All", "Booked"]} />
      <div className="grid grid-cols-3 gap-6 py-4  justify-items-center items-center scrollbar-hide h-[calc(100vh-5rem-5rem)]">
        {tables.map((table,index)=>{
          return <TableCard key={index} id={table.id} status={table.status} initial={table.initial}  name={table.name} seats={table.seats} />
        })}
      </div>
      <Footer />
    </section>
  );
}
